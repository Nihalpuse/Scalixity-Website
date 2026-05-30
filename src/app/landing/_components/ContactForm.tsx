"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { CTAButton } from "./CTAButton";
import { Scramble } from "./Scramble";
import { StaggerText } from "./StaggerText";

// Placeholder copy + people lifted from the phenomenonstudio.com
// screenshots — swap for Scalixity content once finalized.
const EYEBROW = "Contact us";
const TITLE = "Have a project in mind? Let's chat";

const BUDGET_OPTIONS = [
  "Up to $10K",
  "$10-$20K",
  "$20-$50K",
  "$50-$100K",
  ">$100K",
] as const;

const SIDE_TITLES = {
  primary: "Have a project to discuss?",
  secondary: "Have a partnership in mind?",
};

type Contact = {
  name: string;
  title: string;
  email: string;
  linkedin: string;
};

const CONTACTS: Contact[] = [
  {
    name: "Scalixity team",
    title: "Sales & New Projects",
    email: "tech@scalixity.com",
    linkedin: "#",
  },
  {
    name: "Scalixity team",
    title: "Partnerships",
    email: "tech@scalixity.com",
    linkedin: "#",
  },
];

// Email validation regex — covers the common-case "<local>@<domain>.<tld>"
// shape without trying to be RFC-5322 perfect (which would be enormous).
// Catches typos like "foo@bar" or "foo@@bar.com" without false-negatives
// on valid addresses like "foo+tag@bar.co.uk".
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10 MB cap

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
  file?: string;
};

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [budget, setBudget] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  // Plane launch position, set from the submit button's viewport rect
  // at the moment of submit so the animation starts exactly where the
  // user clicked.
  const [planeOrigin, setPlaneOrigin] = useState<{ x: number; y: number } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const submitWrapRef = useRef<HTMLDivElement>(null);

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) {
      next.email = "Please enter your email.";
    } else if (!EMAIL_REGEX.test(email.trim())) {
      next.email = "That doesn't look like a valid email address.";
    }
    if (!message.trim()) next.message = "Tell us a little about your project.";
    if (file && file.size > MAX_FILE_BYTES) {
      next.file = "File is too large. Max 10 MB.";
    }
    return next;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isSending || isSent) return;

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    // Capture the submit button's viewport center so the plane launches
    // from exactly that pixel.
    const wrap = submitWrapRef.current;
    if (wrap) {
      const r = wrap.getBoundingClientRect();
      setPlaneOrigin({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
    }

    setIsSending(true);
    // Wait for the CSS animation (1.6s) before showing the success state.
    setTimeout(() => {
      setIsSent(true);
      setIsSending(false);
    }, 1600);
  };

  const handleAttachClick = () => fileInputRef.current?.click();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const picked = e.target.files?.[0];
    if (!picked) return;
    if (picked.size > MAX_FILE_BYTES) {
      setErrors((prev) => ({ ...prev, file: "File is too large. Max 10 MB." }));
      // Clear the input so the user can re-attempt with a smaller file
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

  return (
    <section
      id="contact-form"
      className="relative bg-brand-ink text-brand-bone px-5 lg:px-10 pt-20 pb-24 lg:pt-32 lg:pb-32"
    >
      <p className="brand-eyebrow text-brand-bone-muted mb-8">
        <Scramble>{EYEBROW}</Scramble>
      </p>
      <h2 className="font-bricolage text-brand-display text-brand-bone leading-tight mb-12 lg:mb-16 max-w-[18ch]">
        <StaggerText>{TITLE}</StaggerText>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Form / Success column */}
        <div className="lg:col-span-8">
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
                    // Clear error eagerly once the user fixes the value
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
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                {/* inline-flex wrapper sizes tightly to the CTA so the
                    ref's bounding rect maps to the actual button when
                    we launch the paper plane. */}
                <div
                  ref={submitWrapRef}
                  className={`inline-flex transition-opacity duration-300 ${
                    isSending ? "opacity-30" : "opacity-100"
                  }`}
                >
                  <CTAButton type="submit" variant="primary">
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
            </form>
          )}
        </div>

        {/* Contact persons aside */}
        <aside className="lg:col-span-4 flex flex-col gap-10">
          <ContactBlock title={SIDE_TITLES.primary} contact={CONTACTS[0]} />
          <ContactBlock title={SIDE_TITLES.secondary} contact={CONTACTS[1]} />
        </aside>
      </div>

      {/* Paper plane animation overlay. Two layers, both anchored to
          the submit button's viewport-coordinate center:
            (1) a dotted SVG trail showing the path the plane takes
            (2) the plane itself, which uses CSS `offset-path` to ride
                along the same path geometry. The path is straight for
                the first 300px (the "launch" feel the user asked for),
                then curves smoothly upward out of the viewport. */}
      {isSending && planeOrigin && (
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
        className={`bg-transparent text-brand-bone placeholder:text-brand-bone-soft border-b pb-3 focus:outline-none uppercase text-sm font-semibold tracking-[0.04em] transition-colors disabled:opacity-60 ${
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

function ContactBlock({
  title,
  contact,
}: {
  title: string;
  contact: Contact;
}) {
  return (
    <div>
      <h3 className="font-bricolage text-xl lg:text-2xl text-brand-bone mb-5 leading-tight">
        {title}
      </h3>
      <div className="rounded-2xl bg-brand-bone-faint p-5 flex items-start gap-4 relative">
        {/* Photo placeholder */}
        <div
          aria-hidden="true"
          className="w-14 h-14 rounded-full bg-gradient-to-br from-stone-300 via-stone-400 to-stone-600 shrink-0"
        />
        <div className="flex-1 min-w-0 pr-8">
          <h4 className="font-bricolage text-base lg:text-lg text-brand-bone leading-tight">
            {contact.name}
          </h4>
          <p className="font-albert text-xs text-brand-bone-muted mt-1">
            {contact.title}
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="font-albert text-[11px] text-brand-bone underline uppercase tracking-wider block mt-2 truncate hover:text-brand-purple transition-colors"
          >
            {contact.email}
          </a>
        </div>
        <a
          href={contact.linkedin}
          aria-label={`${contact.name} on LinkedIn`}
          className="absolute top-3 right-3 w-7 h-7 rounded-md bg-brand-bone/[0.06] flex items-center justify-center text-brand-bone hover:bg-brand-bone hover:text-brand-ink transition-colors"
        >
          <LinkedInIcon />
        </a>
      </div>
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


function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="w-3.5 h-3.5"
    >
      <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S0 4.881 0 3.5C0 2.12 1.119 1 2.5 1s2.48 1.12 2.48 2.5zM5 8H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z" />
    </svg>
  );
}
