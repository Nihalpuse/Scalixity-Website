"use client";

import {
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { getExampleNumber, getCountryCallingCode } from "libphonenumber-js";
import examples from "libphonenumber-js/examples.mobile.json";
import { ArrowUpRight } from "lucide-react";
import { CTAButton } from "@/src/app/landing/_components/CTAButton";
import { CountrySelect } from "@/src/app/landing/_components/CountrySelect";
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";
import { FormDropdown } from "./FormDropdown";
import { POSITIONS } from "../careers-positions";

// Self-contained job-application form (Approach B from the spec). ContactForm is
// intentionally NOT modified, so the phone-validation helpers + dark field
// components are copied locally here. Submits to the same /api/contact endpoint
// ContactForm uses (the only one that exists), folding the specialized fields
// into the message. NOTE: like ContactForm, only the resume's FILENAME reaches
// the backend, not its bytes — real file delivery needs a multipart endpoint.

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";
const EMAIL = "info@scalixity.com";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10 MB cap
const MIN_ANIM_MS = 600;

const GENERAL_ROLE = "General / Other";
const EXPERIENCE_OPTIONS = ["0–2 years", "3–5 years", "5+ years"] as const;
const AVAILABILITY_OPTIONS = [
  "Immediately",
  "2 weeks",
  "1 month",
  "Flexible",
] as const;

const DEFAULT_EYEBROW = "Apply";
const DEFAULT_TITLE = "Tell us about yourself";
const DEFAULT_LEAD =
  "A few details and a note about what you're looking for — that's all we need to start the conversation.";

// MOCK PLACEHOLDER — culture quote for the aside, reusing one of the existing
// stand-in team voices (see /public/avatars). Swap for a real teammate.
const CULTURE_QUOTE = {
  quote:
    "There's no ego here — you can always ask for help, and people genuinely want you to do your best work.",
  name: "Priya Menon",
  role: "Product Designer",
  avatar: "/avatars/priya.svg",
};
const CULTURE_CHIPS = ["Remote-first", "Senior team", "Real ownership"];

type FieldErrors = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  file?: string;
};

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

// --- Per-country phone length helpers (copied from ContactForm) -------------
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

export function ApplicationForm({ initialRole }: { initialRole?: string }) {
  const roleOptions = [...POSITIONS.map((p) => p.title), GENERAL_ROLE];

  const [role, setRole] = useState(
    initialRole && roleOptions.includes(initialRole) ? initialRole : GENERAL_ROLE
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const [phoneCountry, setPhoneCountry] = useState<string | undefined>("IN");
  const [experience, setExperience] = useState("");
  const [availability, setAvailability] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

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
    if (!message.trim()) next.message = "Tell us a little about yourself.";
    if (file && file.size > MAX_FILE_BYTES) {
      next.file = "File is too large. Max 10 MB.";
    }
    return next;
  };

  const clearFieldError = (field: keyof FieldErrors) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSending || isSent) return;

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    // Fold the specialized fields into the message so the JSON /api/contact
    // endpoint captures them (same pattern ContactForm uses for budget/file).
    // Only the resume's filename is sent — not its bytes.
    const composedMessage = [
      message.trim(),
      `Position: ${role}`,
      experience ? `Years of experience: ${experience}` : null,
      availability ? `Availability: ${availability}` : null,
      location.trim() ? `Location/Timezone: ${location.trim()}` : null,
      file ? `Resume: ${file.name} (${formatBytes(file.size)})` : null,
    ]
      .filter(Boolean)
      .join("\n\n");

    setSubmitError(null);
    setIsSending(true);

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

  return (
    <section className="relative bg-brand-ink text-brand-bone px-5 lg:px-10 pt-28 pb-14 lg:pt-36 lg:pb-24">
      <p className="brand-eyebrow text-brand-bone-muted mb-8">
        <Scramble>{DEFAULT_EYEBROW}</Scramble>
      </p>
      <h1 className="font-bricolage text-brand-display text-brand-bone leading-tight max-w-[18ch]">
        <StaggerText>{DEFAULT_TITLE}</StaggerText>
      </h1>
      <p className="mt-8 font-albert text-brand-body-lg text-brand-bone-muted max-w-2xl">
        {DEFAULT_LEAD}
      </p>

      <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Form column */}
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
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <FormField
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
              <FormField
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

            {/* Role + Experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <FormDropdown
                label="Role you're applying for"
                value={role}
                onChange={setRole}
                options={roleOptions}
                disabled={isSending}
              />
              <FormDropdown
                label="Years of experience"
                value={experience}
                onChange={setExperience}
                options={[...EXPERIENCE_OPTIONS]}
                placeholder="Select experience"
                disabled={isSending}
              />
            </div>

            {/* Phone + Availability */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
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
                  <span role="alert" className="text-xs text-brand-red font-albert">
                    {errors.phone}
                  </span>
                )}
              </label>

              <FormDropdown
                label="Availability"
                value={availability}
                onChange={setAvailability}
                options={[...AVAILABILITY_OPTIONS]}
                placeholder="When could you start?"
                disabled={isSending}
              />
            </div>

            {/* Location / timezone */}
            <FormField
              name="location"
              label="Location / timezone (optional)"
              placeholder="e.g. Berlin, or GMT+1"
              value={location}
              onChange={setLocation}
              disabled={isSending}
            />

            {/* Message */}
            <FormField
              name="message"
              label="A note about you"
              placeholder="What are you looking for, and what would you bring?"
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

            {/* Resume attach */}
            <div>
              <p className="brand-eyebrow text-brand-bone-muted mb-4">
                Resume / CV (optional)
              </p>
              <input
                ref={fileInputRef}
                type="file"
                name="resume"
                className="sr-only"
                accept=".pdf,.doc,.docx"
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
                  Attach resume
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

            {/* Submit + Terms */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                <div
                  className={`inline-flex max-sm:w-full transition-opacity duration-300 ${
                    isSending ? "opacity-30" : "opacity-100"
                  }`}
                >
                  <CTAButton
                    type="submit"
                    variant="primary"
                    className="max-sm:w-full"
                  >
                    {isSending ? "Sending..." : "Submit application"}
                  </CTAButton>
                </div>
                <p className="text-[11px] text-brand-bone-muted max-w-md leading-relaxed uppercase tracking-[0.08em]">
                  By submitting you accept our{" "}
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

        {/* Sticky aside — role context + culture. Hidden on the success state. */}
        {!isSent && (
          <aside className="lg:col-span-5">
            <ApplyAside role={role} onSelectRole={setRole} />
          </aside>
        )}
      </div>
    </section>
  );
}

function ApplyAside({
  role,
  onSelectRole,
}: {
  role: string;
  onSelectRole: (title: string) => void;
}) {
  const selected = POSITIONS.find((p) => p.title === role);

  return (
    <div className="lg:sticky lg:top-28 flex flex-col gap-6">
      {/* Role context — reflects the currently selected role. */}
      <div className="rounded-2xl bg-brand-bone-faint p-6 lg:p-8">
        {selected ? (
          <>
            <p className="brand-eyebrow text-brand-bone-muted mb-4">
              You&rsquo;re applying for
            </p>
            <h2 className="font-bricolage text-2xl lg:text-3xl text-brand-bone leading-tight">
              {selected.title}
            </h2>
            <p className="mt-3 font-albert text-sm text-brand-bone-muted">
              {selected.team} · {selected.type} · {selected.location}
            </p>
            <p className="mt-4 font-albert text-base text-brand-bone-muted leading-relaxed">
              {selected.summary}
            </p>
            <a
              href="/careers#open-positions"
              className="mt-6 inline-flex items-center gap-1.5 font-albert text-sm text-brand-bone hover:text-brand-purple transition-colors"
            >
              View all open roles
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            </a>
          </>
        ) : (
          <>
            <p className="brand-eyebrow text-brand-bone-muted mb-4">Open roles</p>
            <p className="font-albert text-base text-brand-bone-muted leading-relaxed">
              Applying generally? Pick a role to tailor your application — or keep
              it open.
            </p>
            <ul className="mt-5 flex flex-col">
              {POSITIONS.map((p) => (
                <li key={p.slug}>
                  <button
                    type="button"
                    onClick={() => onSelectRole(p.title)}
                    className="group flex w-full items-center justify-between gap-4 border-t border-brand-bone-faint py-3.5 text-left"
                  >
                    <span className="flex flex-col">
                      <span className="font-albert text-sm text-brand-bone transition-colors group-hover:text-brand-purple">
                        {p.title}
                      </span>
                      <span className="font-albert text-xs text-brand-bone-muted">
                        {p.team} · {p.type} · {p.location}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-brand-bone-muted transition-colors group-hover:text-brand-purple"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* Culture / social proof */}
      <div className="rounded-2xl bg-brand-bone-faint p-6 lg:p-8">
        <blockquote className="font-albert text-base lg:text-lg text-brand-bone leading-relaxed">
          &ldquo;{CULTURE_QUOTE.quote}&rdquo;
        </blockquote>
        <div className="mt-5 flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={CULTURE_QUOTE.avatar}
            alt={CULTURE_QUOTE.name}
            className="h-10 w-10 shrink-0 rounded-full object-cover"
          />
          <span className="flex flex-col">
            <span className="font-albert text-sm text-brand-bone">
              {CULTURE_QUOTE.name}
            </span>
            <span className="font-albert text-sm text-brand-bone-muted">
              {CULTURE_QUOTE.role}
            </span>
          </span>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {CULTURE_CHIPS.map((c) => (
            <span
              key={c}
              className="rounded-full bg-brand-bone/[0.08] px-3.5 py-1.5 font-albert text-xs text-brand-bone-muted"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

type FormFieldProps = {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  disabled?: boolean;
};

function FormField({
  name,
  label,
  placeholder = "",
  required = false,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  disabled,
}: FormFieldProps) {
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
      <p className="brand-eyebrow text-brand-purple">Application received</p>
      <h2 className="font-bricolage text-3xl lg:text-4xl xl:text-5xl text-brand-bone leading-tight max-w-[20ch]">
        Thanks for your interest.
      </h2>
      <p className="font-albert text-brand-body-lg text-brand-bone-muted max-w-xl">
        We&rsquo;ve received your application and will review it carefully. If
        there&rsquo;s a fit, we&rsquo;ll be in touch — in the meantime, feel free
        to explore our work.
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
