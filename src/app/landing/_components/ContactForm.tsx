"use client";

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { Phone, Mail, Linkedin, Instagram, Twitter } from "lucide-react";
import { InlineWidget } from "react-calendly";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { getExampleNumber, getCountryCallingCode } from "libphonenumber-js";
import examples from "libphonenumber-js/examples.mobile.json";
import { CTAButton } from "./CTAButton";
import { CountrySelect } from "./CountrySelect";
import { Scramble } from "./Scramble";
import { StaggerText } from "./StaggerText";
import { usePrefersReducedMotion } from "./useMobileEnv";

// Unified contact section — used both as the page hero on /contact
// (variant="page") and as a mid-page section everywhere else
// (variant="section", the default). Merges the rich landing form (file
// attach, budget chips, paper-plane animation, inline validation) with the
// real backend submit + book-a-call + socials from the contact page.

const DEFAULT_EYEBROW = "Contact us";
const DEFAULT_TITLE = "Have a project in mind? Let's chat";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";
const CALENDLY_URL = "https://calendly.com/scalixitydevops/meet";
const PHONE = "+91 9424710030";
const EMAIL = "info@scalixity.com";

const SOCIALS = [
  { label: "Twitter", href: "https://twitter.com/scalixity", Icon: Twitter },
  { label: "Instagram", href: "https://www.instagram.com/scalixity", Icon: Instagram },
  { label: "LinkedIn", href: "https://linkedin.com/company/Scalixity", Icon: Linkedin },
];

const BUDGET_OPTIONS = [
  "Up to $10K",
  "$10-$20K",
  "$20-$50K",
  "$50-$100K",
  ">$100K",
] as const;

// Email validation regex — covers "<local>@<domain>.<tld>" without trying to
// be RFC-5322 perfect. Catches "foo@bar" / "foo@@bar.com" while passing
// valid addresses like "foo+tag@bar.co.uk".
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10 MB cap
const MIN_ANIM_MS = 1600; // paper-plane animation duration

type FieldErrors = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  file?: string;
};

type ContactFormProps = {
  /** "page" renders the title as an <h1> with hero top-padding (for /contact);
   *  "section" (default) renders an <h2> for mid-page use. */
  variant?: "section" | "page";
  eyebrow?: string;
  title?: string;
  description?: string;
};

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

// --- Per-country phone length helpers (libphonenumber-js) -------------------
// isValidPhoneNumber already enforces the correct length + pattern per country
// (e.g. India = 10 digits). These add the expected national length so we can
// hard-cap typing and show "expected N digits" messages.
type CountryArg = Parameters<typeof getCountryCallingCode>[0];
const maxDigitsCache = new Map<string, number | null>();

function maxNationalDigits(country?: string): number | null {
  if (!country) return null;
  if (maxDigitsCache.has(country)) return maxDigitsCache.get(country) ?? null;
  let n: number | null = null;
  try {
    const ex = getExampleNumber(country as CountryArg, examples);
    n = ex ? ex.nationalNumber.length : null;
  } catch {
    n = null;
  }
  maxDigitsCache.set(country, n);
  return n;
}

function nationalDigitCount(value?: string, country?: string): number {
  if (!value) return 0;
  const all = value.replace(/\D/g, "").length;
  let cc = 0;
  try {
    if (country) cc = getCountryCallingCode(country as CountryArg).length;
  } catch {
    cc = 0;
  }
  return Math.max(0, all - cc);
}

function phoneError(value?: string, country?: string): string | undefined {
  if (!value) return undefined; // optional field
  if (isValidPhoneNumber(value)) return undefined;
  const max = maxNationalDigits(country);
  const n = nationalDigitCount(value, country);
  if (max != null && n < max) {
    return `Too short — expected ${max} digits for this country.`;
  }
  if (max != null && n > max) {
    return `Too long — expected ${max} digits for this country.`;
  }
  return "Please enter a valid phone number.";
}

export function ContactForm({
  variant = "section",
  eyebrow = DEFAULT_EYEBROW,
  title = DEFAULT_TITLE,
  description,
}: ContactFormProps = {}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const [phoneCountry, setPhoneCountry] = useState<string | undefined>("IN");
  const [message, setMessage] = useState("");
  const [budget, setBudget] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  // Plane launch position, set from the submit button's viewport rect at the
  // moment of submit so the animation starts exactly where the user clicked.
  const [planeOrigin, setPlaneOrigin] = useState<{ x: number; y: number } | null>(null);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const reduced = usePrefersReducedMotion();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const submitWrapRef = useRef<HTMLDivElement>(null);

  // Block a digit keystroke once the *national* number is already at the
  // country's expected length (e.g. India = 10). Because the input is in
  // international mode it includes the "+91" calling code, so we count
  // national digits only (nationalDigitCount strips the calling code).
  // Control/navigation keys and replacing a selection are always allowed.
  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.length !== 1 || e.ctrlKey || e.metaKey || e.altKey) return;
    if (!/[0-9]/.test(e.key)) return;
    const max = maxNationalDigits(phoneCountry);
    if (max == null) return;
    const input = e.currentTarget;
    const hasSelection = input.selectionStart !== input.selectionEnd;
    const nationalDigits = nationalDigitCount(input.value, phoneCountry);
    if (!hasSelection && nationalDigits >= max) {
      e.preventDefault();
    }
  };

  // Lock body scroll while the Calendly modal is open.
  useEffect(() => {
    if (!calendarOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [calendarOpen]);

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) {
      next.email = "Please enter your email.";
    } else if (!EMAIL_REGEX.test(email.trim())) {
      next.email = "That doesn't look like a valid email address.";
    }
    const phoneErr = phoneError(phone, phoneCountry);
    if (phoneErr) next.phone = phoneErr;
    if (!message.trim()) next.message = "Tell us a little about your project.";
    if (file && file.size > MAX_FILE_BYTES) {
      next.file = "File is too large. Max 10 MB.";
    }
    return next;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSending || isSent) return;

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    // Capture the submit button's viewport center so the plane launches from
    // exactly that pixel.
    const wrap = submitWrapRef.current;
    if (wrap) {
      const r = wrap.getBoundingClientRect();
      setPlaneOrigin({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
    }

    // Fold budget + attachment name into the message so the JSON /api/contact
    // endpoint captures them. NOTE: only the file's name is sent, not its
    // bytes — a real upload needs a multipart endpoint.
    const composedMessage = [
      message.trim(),
      budget ? `Budget: ${budget}` : null,
      file ? `Attachment: ${file.name} (${formatBytes(file.size)})` : null,
    ]
      .filter(Boolean)
      .join("\n\n");

    setSubmitError(null);
    setIsSending(true);

    // Play the animation for at least MIN_ANIM_MS regardless of how fast the
    // request resolves, so the plane never "snaps".
    const minDelay = new Promise((r) => setTimeout(r, MIN_ANIM_MS));
    try {
      const res = await fetch(`${baseURL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: (phone ?? "").trim(),
          message: composedMessage,
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      await minDelay;
      setIsSent(true);
    } catch {
      setSubmitError(
        `Something went wrong. Please try again or email ${EMAIL}.`
      );
    } finally {
      setIsSending(false);
    }
  };

  const handleAttachClick = () => fileInputRef.current?.click();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const picked = e.target.files?.[0];
    if (!picked) return;
    if (picked.size > MAX_FILE_BYTES) {
      setErrors((prev) => ({ ...prev, file: "File is too large. Max 10 MB." }));
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
    setErrors((prev) => ({ ...prev, file: undefined }));
    setFile(picked);
  };

  const removeFile = () => {
    setFile(null);
    setErrors((prev) => ({ ...prev, file: undefined }));
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const clearFieldError = (field: keyof FieldErrors) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const Heading = variant === "page" ? "h1" : "h2";
  const sectionPad =
    variant === "page"
      ? "pt-28 pb-14 lg:pt-36 lg:pb-24"
      : "pt-14 pb-14 lg:pt-24 lg:pb-24";

  return (
    <section
      id="contact-form"
      className={`relative bg-brand-ink text-brand-bone px-5 lg:px-10 ${sectionPad}`}
    >
      <p className="brand-eyebrow text-brand-bone-muted mb-8">
        <Scramble>{eyebrow}</Scramble>
      </p>
      <Heading className="font-bricolage text-brand-display text-brand-bone leading-tight max-w-[18ch]">
        <StaggerText>{title}</StaggerText>
      </Heading>
      {description && (
        <p className="mt-8 font-albert text-brand-body-lg text-brand-bone-muted max-w-2xl">
          {description}
        </p>
      )}

      <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Form / Success column */}
        <div className="lg:col-span-7">
          {isSent ? (
            <SuccessMessage />
          ) : (
            <form
              className="flex flex-col gap-10 lg:gap-12"
              onSubmit={handleSubmit}
              noValidate
              aria-busy={isSending}
            >
              {/* Name + Email row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <FormInput
                  name="name"
                  label="Your name"
                  placeholder="Enter your name"
                  required
                  value={name}
                  onChange={(v) => {
                    setName(v);
                    if (v.trim()) clearFieldError("name");
                  }}
                  onBlur={() => {
                    if (name.trim()) clearFieldError("name");
                  }}
                  error={errors.name}
                  disabled={isSending}
                />
                <FormInput
                  name="email"
                  type="email"
                  label="Your email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(v) => {
                    setEmail(v);
                    if (EMAIL_REGEX.test(v.trim())) clearFieldError("email");
                  }}
                  onBlur={() => {
                    const trimmed = email.trim();
                    if (!trimmed) {
                      setErrors((p) => ({ ...p, email: "Please enter your email." }));
                    } else if (!EMAIL_REGEX.test(trimmed)) {
                      setErrors((p) => ({
                        ...p,
                        email: "That doesn't look like a valid email address.",
                      }));
                    } else {
                      clearFieldError("email");
                    }
                  }}
                  error={errors.email}
                  disabled={isSending}
                />
              </div>

              {/* Phone (optional) — international input with live formatting
                  + libphonenumber validation. */}
              <label className="flex flex-col gap-3">
                <span className="brand-eyebrow text-brand-bone-muted">
                  Phone (optional)
                </span>
                <div
                  className={`brand-phone ${
                    errors.phone ? "brand-phone--error" : ""
                  }`}
                >
                  <PhoneInput
                    international
                    defaultCountry="IN"
                    countrySelectComponent={CountrySelect}
                    value={phone}
                    numberInputProps={{ onKeyDown: handlePhoneKeyDown }}
                    onChange={(v) => {
                      setPhone(v);
                      if (!phoneError(v, phoneCountry)) clearFieldError("phone");
                    }}
                    onCountryChange={(c) => setPhoneCountry(c)}
                    onBlur={() => {
                      const err = phoneError(phone, phoneCountry);
                      if (err) setErrors((p) => ({ ...p, phone: err }));
                      else clearFieldError("phone");
                    }}
                    disabled={isSending}
                    placeholder="Enter your phone number"
                  />
                </div>
                {errors.phone && (
                  <span
                    role="alert"
                    className="text-xs text-brand-red font-albert"
                  >
                    {errors.phone}
                  </span>
                )}
              </label>

              {/* Message */}
              <FormInput
                name="message"
                label="Message"
                placeholder="Tell us about your project"
                required
                value={message}
                onChange={(v) => {
                  setMessage(v);
                  if (v.trim()) clearFieldError("message");
                }}
                onBlur={() => {
                  if (message.trim()) clearFieldError("message");
                }}
                error={errors.message}
                disabled={isSending}
              />

              {/* Attach file */}
              <div>
                <input
                  ref={fileInputRef}
                  type="file"
                  name="attachment"
                  className="sr-only"
                  accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                  onChange={handleFileChange}
                  disabled={isSending}
                  aria-hidden="true"
                  tabIndex={-1}
                />

                {file ? (
                  <div className="inline-flex items-center gap-3 px-4 py-3 rounded-md bg-brand-bone-faint text-brand-bone text-xs uppercase tracking-[0.14em] font-semibold max-w-full">
                    <PaperclipIcon />
                    <span className="normal-case tracking-normal lowercase font-medium truncate max-w-[180px] lg:max-w-[260px]">
                      {file.name}
                    </span>
                    <span className="text-brand-bone-muted normal-case tracking-normal">
                      {formatBytes(file.size)}
                    </span>
                    <button
                      type="button"
                      onClick={removeFile}
                      disabled={isSending}
                      aria-label="Remove file"
                      className="ml-1 text-brand-bone-muted hover:text-brand-bone transition-colors disabled:opacity-50"
                    >
                      <CloseIcon />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={handleAttachClick}
                    disabled={isSending}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-brand-bone-faint text-brand-bone text-xs uppercase tracking-[0.14em] font-semibold hover:bg-brand-bone/[0.12] transition-colors disabled:opacity-50"
                  >
                    <PaperclipIcon />
                    Attach file
                  </button>
                )}

                {errors.file && (
                  <p
                    role="alert"
                    className="mt-2 text-xs text-brand-red font-albert normal-case tracking-normal"
                  >
                    {errors.file}
                  </p>
                )}
              </div>

              {/* Budget chips */}
              <div>
                <p className="brand-eyebrow text-brand-bone-muted mb-4">
                  Your budget for this project?
                </p>
                <div className="flex flex-wrap gap-2">
                  {BUDGET_OPTIONS.map((opt) => {
                    const isActive = budget === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setBudget(opt)}
                        disabled={isSending}
                        className={`px-5 py-2.5 rounded-md text-xs uppercase tracking-[0.12em] font-semibold transition-colors disabled:opacity-50 ${
                          isActive
                            ? "bg-brand-bone text-brand-ink"
                            : "bg-brand-bone-faint text-brand-bone hover:bg-brand-bone/[0.12]"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit + Terms */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                  <div
                    ref={submitWrapRef}
                    className={`inline-flex max-sm:w-full transition-opacity duration-300 ${
                      isSending ? "opacity-30" : "opacity-100"
                    }`}
                  >
                    <CTAButton type="submit" variant="primary" className="max-sm:w-full">
                      {isSending ? "Sending..." : "Submit"}
                    </CTAButton>
                  </div>
                  <p className="text-[11px] text-brand-bone-muted max-w-md leading-relaxed uppercase tracking-[0.08em]">
                    By clicking this button you accept{" "}
                    <a
                      href="/terms"
                      className="underline hover:text-brand-bone transition-colors"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="/privacy"
                      className="underline hover:text-brand-bone transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </div>
                {submitError && (
                  <p role="alert" className="font-albert text-sm text-brand-red">
                    {submitError}
                  </p>
                )}
              </div>
            </form>
          )}
        </div>

        {/* Contact info aside */}
        <aside className="lg:col-span-5 flex flex-col gap-8">
          {/* Direct contact */}
          <div className="rounded-2xl bg-brand-bone-faint p-6 lg:p-8 flex flex-col gap-5">
            <a
              href={`tel:${PHONE.replace(/\s+/g, "")}`}
              className="flex items-start gap-4 text-brand-bone hover:text-brand-purple transition-colors"
            >
              <Phone className="h-5 w-5 mt-0.5 shrink-0" aria-hidden="true" />
              <span className="font-albert">{PHONE}</span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-start gap-4 text-brand-bone hover:text-brand-purple transition-colors"
            >
              <Mail className="h-5 w-5 mt-0.5 shrink-0" aria-hidden="true" />
              <span className="font-albert break-all">{EMAIL}</span>
            </a>
          </div>

          {/* Book a call */}
          <div className="rounded-2xl bg-brand-bone-faint p-6 lg:p-8">
            <p className="brand-eyebrow text-brand-bone-muted mb-2">Book a call</p>
            <h3 className="font-bricolage text-2xl text-brand-bone mb-2">
              Schedule a 30-min chat
            </h3>
            <p className="font-albert text-sm text-brand-bone-muted mb-6">
              Pick a time that works for you and we&apos;ll meet over a quick
              video call.
            </p>
            <CTAButton onClick={() => setCalendarOpen(true)} variant="ghost">
              Open calendar
            </CTAButton>
          </div>

          {/* Socials */}
          <div className="flex gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-brand-btn bg-brand-bone-faint text-brand-bone transition-colors hover:bg-brand-bone hover:text-brand-ink"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </aside>
      </div>

      {/* Paper-plane animation overlay — anchored to the submit button's
          viewport center: a dotted SVG trail + the plane riding it via
          CSS offset-path. */}
      {isSending && planeOrigin && !reduced && (
        <>
          <svg
            aria-hidden="true"
            className="fixed z-[60] pointer-events-none"
            style={{
              left: `${planeOrigin.x}px`,
              top: `${planeOrigin.y}px`,
              width: "1px",
              height: "1px",
              overflow: "visible",
            }}
          >
            <path
              d="M 0 0 L 300 0 C 600 0, 900 -300, 1500 -1500"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="3 9"
              strokeLinecap="round"
              className="paper-plane-trail"
            />
          </svg>

          <svg
            aria-hidden="true"
            className="fixed z-[61] pointer-events-none paper-plane-fly text-brand-bone drop-shadow-[0_4px_20px_rgba(89,1,120,0.5)]"
            style={{
              left: `${planeOrigin.x}px`,
              top: `${planeOrigin.y}px`,
            }}
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </>
      )}

      {/* Calendly modal */}
      {calendarOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-brand-ink/80 p-4 overflow-y-auto"
          onClick={() => setCalendarOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Schedule a call"
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl bg-brand-bone p-4 lg:p-6 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bricolage text-xl text-brand-ink">Schedule a call</h3>
              <button
                type="button"
                onClick={() => setCalendarOpen(false)}
                aria-label="Close"
                className="grid h-10 w-10 place-items-center rounded-brand-btn bg-brand-ink-faint text-brand-ink transition-colors hover:bg-brand-ink/10"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8" aria-hidden="true">
                  <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <InlineWidget url={CALENDLY_URL} styles={{ height: "70vh" }} />
          </div>
        </div>
      )}
    </section>
  );
}

type FormInputProps = {
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  disabled?: boolean;
};

function FormInput({
  name,
  label,
  placeholder,
  required = false,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  disabled,
}: FormInputProps) {
  const errorId = `${name}-error`;

  return (
    <label className="flex flex-col gap-3">
      <span className="brand-eyebrow text-brand-bone-muted">
        {label}
        {required && (
          <span aria-hidden="true" className="text-brand-purple ml-1">
            *
          </span>
        )}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder.toUpperCase()}
        required={required}
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={`bg-transparent text-brand-bone placeholder:text-brand-bone-soft border-b pb-3 focus:outline-none uppercase text-base lg:text-sm font-semibold tracking-[0.04em] transition-colors disabled:opacity-60 ${
          error
            ? "border-brand-red focus:border-brand-red"
            : "border-brand-bone-faint focus:border-brand-bone"
        }`}
      />
      {error && (
        <span
          id={errorId}
          role="alert"
          className="text-xs text-brand-red font-albert normal-case tracking-normal"
        >
          {error}
        </span>
      )}
    </label>
  );
}

function SuccessMessage() {
  return (
    <div className="flex flex-col items-start gap-6 py-8 lg:py-12">
      <p className="brand-eyebrow text-brand-purple">Message sent</p>
      <h3 className="font-bricolage text-3xl lg:text-4xl xl:text-5xl text-brand-bone leading-tight max-w-[20ch]">
        Thanks for reaching out.
      </h3>
      <p className="font-albert text-brand-body-lg text-brand-bone-muted max-w-xl">
        We&rsquo;ve got your message and will respond within 24 hours. In the
        meantime, feel free to explore our work or follow us for updates.
      </p>
    </div>
  );
}

function PaperclipIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="w-4 h-4 fill-none stroke-current"
      strokeWidth="1.5"
    >
      <path
        d="M11 6.5 5.5 12a2 2 0 1 1-2.8-2.8L8 4a3 3 0 0 1 4.2 4.2L7 13.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="w-3.5 h-3.5 fill-none stroke-current"
      strokeWidth="1.8"
    >
      <path d="M3 3l10 10M13 3L3 13" strokeLinecap="round" />
    </svg>
  );
}
