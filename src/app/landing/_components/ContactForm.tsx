"use client";

import { useState } from "react";
import { CTAButton } from "./CTAButton";

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

export function ContactForm() {
  const [budget, setBudget] = useState<string | null>(null);

  return (
    <section
      id="contact-form"
      className="bg-brand-ink text-brand-bone px-5 lg:px-10 pt-20 pb-24 lg:pt-32 lg:pb-32"
    >
      <p className="brand-eyebrow text-brand-bone-muted mb-8">{EYEBROW}</p>
      <h2 className="font-bricolage text-brand-display text-brand-bone leading-tight mb-12 lg:mb-16 max-w-[18ch]">
        {TITLE}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Form */}
        <form
          className="lg:col-span-8 flex flex-col gap-10 lg:gap-12"
          onSubmit={(e) => {
            e.preventDefault();
            // Form handler placeholder. Hook into Scalixity's submit endpoint.
          }}
        >
          {/* Name + Email row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <FormInput
              name="name"
              label="Your name"
              placeholder="Enter your name"
              required
            />
            <FormInput
              name="email"
              type="email"
              label="Your email"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message */}
          <FormInput
            name="message"
            label="Message"
            placeholder="Tell us about your project"
          />

          {/* Attach file */}
          <div>
            <button
              type="button"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-brand-bone-faint text-brand-bone text-xs uppercase tracking-[0.14em] font-semibold hover:bg-brand-bone/[0.12] transition-colors"
            >
              <PaperclipIcon />
              Attach file
            </button>
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
                    className={`px-5 py-2.5 rounded-md text-xs uppercase tracking-[0.12em] font-semibold transition-colors ${
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
            <CTAButton type="submit" variant="primary">
              Submit
            </CTAButton>
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

        {/* Contact persons aside */}
        <aside className="lg:col-span-4 flex flex-col gap-10">
          <ContactBlock title={SIDE_TITLES.primary} contact={CONTACTS[0]} />
          <ContactBlock title={SIDE_TITLES.secondary} contact={CONTACTS[1]} />
        </aside>
      </div>
    </section>
  );
}

function FormInput({
  name,
  label,
  placeholder,
  required = false,
  type = "text",
}: {
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="flex flex-col gap-3">
      <span className="brand-eyebrow text-brand-bone-muted">
        {label}
        {required && (
          <span aria-hidden="true" className="text-brand-orange ml-1">
            *
          </span>
        )}
      </span>
      <input
        type={type}
        name={name}
        placeholder={placeholder.toUpperCase()}
        required={required}
        className="bg-transparent text-brand-bone placeholder:text-brand-bone-soft border-b border-brand-bone-faint pb-3 focus:outline-none focus:border-brand-bone uppercase text-sm font-semibold tracking-[0.04em] transition-colors"
      />
    </label>
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
            className="font-albert text-[11px] text-brand-bone underline uppercase tracking-wider block mt-2 truncate hover:text-brand-orange transition-colors"
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
