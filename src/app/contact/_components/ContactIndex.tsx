"use client";

import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Linkedin, Instagram, Twitter } from "lucide-react";
import { InlineWidget } from "react-calendly";
import { PrimaryNav } from "@/src/app/landing/_components/PrimaryNav";
import {
  PRIMARY_NAV_LINKS,
  PRIMARY_NAV_CTA,
  PRIMARY_NAV_LOGO,
} from "@/src/app/components/primary-nav-config";
import { CurvedDivider } from "@/src/app/landing/_components/CurvedDivider";
import { Footer } from "@/src/app/landing/_components/Footer";
import { CTAButton } from "@/src/app/landing/_components/CTAButton";
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";
const CALENDLY_URL = "https://calendly.com/scalixitydevops/meet";

const ADDRESSES = [
  ["66, House, Lashkar, Block A", "Sindhi Colony", "Gwalior, Madhya Pradesh", "474001, India"],
  ["71-75 Shelton Street", "Covent Garden", "London", "WC2H 9JQ, United Kingdom"],
];

const SOCIALS = [
  { label: "Twitter", href: "https://twitter.com/scalixity", Icon: Twitter },
  { label: "Instagram", href: "https://www.instagram.com/scalixity", Icon: Instagram },
  { label: "LinkedIn", href: "https://linkedin.com/company/Scalixity", Icon: Linkedin },
];

function Field({
  label,
  name,
  type = "text",
  value,
  required = false,
  onChange,
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textarea?: boolean;
}) {
  const shared =
    "bg-transparent text-brand-bone placeholder:text-brand-bone-soft border-b border-brand-bone-faint pb-3 focus:outline-none focus:border-brand-bone uppercase text-sm font-semibold tracking-[0.04em] transition-colors";
  return (
    <label className="flex flex-col gap-3">
      <span className="brand-eyebrow text-brand-bone-muted">
        {label}
        {required && <span aria-hidden="true" className="text-brand-purple ml-1">*</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          required={required}
          onChange={onChange}
          rows={4}
          className={`${shared} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          required={required}
          onChange={onChange}
          className={shared}
        />
      )}
    </label>
  );
}

export function ContactIndex() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [calendarOpen, setCalendarOpen] = useState(false);

  useEffect(() => {
    if (!calendarOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [calendarOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await fetch(`${baseURL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Submission failed");
      await res.json();
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 6000);
    } catch {
      setError("Something went wrong. Please try again or email info@scalixity.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="brand-root min-h-screen">
      <PrimaryNav
        logoText={PRIMARY_NAV_LOGO}
        links={PRIMARY_NAV_LINKS}
        cta={PRIMARY_NAV_CTA}
      />

      <section className="bg-brand-ink text-brand-bone px-5 lg:px-10 pt-40 pb-24 lg:pt-48 lg:pb-32">
        <p className="brand-eyebrow text-brand-bone-muted mb-8">
          <Scramble>Contact us</Scramble>
        </p>
        <h1 className="font-bricolage text-brand-display text-brand-bone max-w-[16ch] mb-8">
          <StaggerText>Let&apos;s build something</StaggerText>
        </h1>
        <p className="font-albert text-brand-body-lg text-brand-bone-muted max-w-2xl mb-16 lg:mb-20">
          Tell us about your project and we&apos;ll get back to you shortly — or
          book a 30-minute call and we&apos;ll meet over video.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Form */}
          <div className="lg:col-span-7">
            {isSubmitted ? (
              <div className="rounded-2xl bg-brand-bone-faint p-8">
                <h2 className="font-bricolage text-2xl text-brand-bone mb-2">
                  Thank you for reaching out!
                </h2>
                <p className="font-albert text-brand-bone-muted">
                  We&apos;ve received your message and will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <Field label="Name" name="name" value={formData.name} required onChange={handleChange} />
                  <Field label="Email" name="email" type="email" value={formData.email} required onChange={handleChange} />
                </div>
                <Field label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
                <Field label="Message" name="message" value={formData.message} required onChange={handleChange} textarea />

                {error && (
                  <p className="font-albert text-sm text-brand-red">{error}</p>
                )}

                <div>
                  <CTAButton type="submit" variant="primary">
                    {isSubmitting ? "Sending…" : "Send message"}
                  </CTAButton>
                </div>
              </form>
            )}
          </div>

          {/* Contact info */}
          <aside className="lg:col-span-5 flex flex-col gap-8">
            <div className="rounded-2xl bg-brand-bone-faint p-8 flex flex-col gap-5">
              <a href="tel:+919424710030" className="flex items-start gap-4 text-brand-bone hover:text-brand-purple transition-colors">
                <Phone className="h-5 w-5 mt-0.5 shrink-0" aria-hidden="true" />
                <span className="font-albert">+91 9424710030</span>
              </a>
              <a href="mailto:info@scalixity.com" className="flex items-start gap-4 text-brand-bone hover:text-brand-purple transition-colors">
                <Mail className="h-5 w-5 mt-0.5 shrink-0" aria-hidden="true" />
                <span className="font-albert break-all">info@scalixity.com</span>
              </a>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                {ADDRESSES.map((lines, i) => (
                  <div key={i} className="flex items-start gap-4 text-brand-bone-muted">
                    <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-brand-bone" aria-hidden="true" />
                    <span className="font-albert text-sm leading-relaxed">
                      {lines.map((l) => (
                        <span key={l} className="block">
                          {l}
                        </span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Book a call */}
            <div className="rounded-2xl bg-brand-bone-faint p-8">
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
      </section>

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      <Footer />

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
    </div>
  );
}
