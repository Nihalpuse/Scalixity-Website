"use client";

import { useState } from "react";

// Placeholder copy from the phenomenonstudio.com screenshots — swap for
// Scalixity content (and proper SVG logos for socials + trust badges)
// once finalized.

// Ported from src/app/page.tsx and the existing site routing.
const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Cases", href: "/work" },
  { label: "About us", href: "/company" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

const SOCIALS = [
  { platform: "Behance", icon: "Be" },
  { platform: "Dribbble", icon: "Dr" },
  { platform: "Instagram", icon: "Ig" },
  { platform: "LinkedIn", icon: "in" },
  { platform: "Facebook", icon: "f" },
  { platform: "X", icon: "X" },
];

type Location = {
  country: string;
  city: string;
  flag: string;
  span?: "full";
};

const LOCATIONS: Location[] = [
  { country: "India", city: "Bengaluru", flag: "🇮🇳", span: "full" },
];

const LEGAL = [
  { label: "Terms of Use", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookies Policy", href: "/cookies" },
];

const COPYRIGHT = "Scalixity © 2026";

const TRUST_BADGES = [
  "HIPAA Monitored",
  "NN/g UX Certified",
  "Top Firm 2026",
  "Webflow Experts",
  "40 Reviews on DesignRush",
  "Clutch 5.0 Rating",
];

// Ported from src/app/components/growth-partner + what-we-offer +
// process. Mix of Scalixity service offerings.
const ALL_SERVICES = [
  "AI Transformation",
  "Custom Software Development",
  "Growth Systems Engineering",
  "Product Acceleration Pod",
  "Full-Stack DevOps & Infra",
  "Data & Analytics",
  "Machine Learning Models",
  "AI Chatbot Development",
  "Computer Vision",
  "Natural Language Processing",
  "Cloud Infrastructure",
  "API Engineering",
  "Web Application Development",
  "Mobile App Development",
  "Workflow Automation",
  "Product Discovery",
  "MVP Development",
  "Team Extension",
  "Technical Consulting",
  "Security & Compliance",
  "Ongoing Support",
];

export function Footer() {
  const [allServicesOpen, setAllServicesOpen] = useState(false);

  return (
    <footer
      data-nav-bg="light"
      className="brand-section-light pt-20 lg:pt-32"
    >
      {/* Top: nav + socials + locations */}
      <div className="px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 lg:mb-20">
        {/* Nav links */}
        <nav className="lg:col-span-4 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-bricolage text-2xl lg:text-3xl text-brand-ink hover:text-brand-orange transition-colors w-fit"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Socials grid */}
        <div className="lg:col-span-4">
          <div className="grid grid-cols-4 gap-2 max-w-[320px]">
            {SOCIALS.map((s) => (
              <a
                key={s.platform}
                href="#"
                aria-label={s.platform}
                className="aspect-square rounded-lg bg-brand-ink/[0.04] hover:bg-brand-ink/[0.08] transition-colors flex items-center justify-center text-brand-ink text-sm font-bold"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Locations grid */}
        <div className="lg:col-span-4">
          <div className="grid grid-cols-2 gap-3">
            {LOCATIONS.map((loc) => (
              <a
                key={loc.country}
                href="#"
                className={`rounded-lg bg-brand-ink/[0.04] hover:bg-brand-ink/[0.08] transition-colors p-5 flex flex-col justify-between min-h-[120px] ${
                  loc.span === "full" ? "col-span-2" : ""
                }`}
              >
                <span className="text-2xl" aria-hidden="true">
                  {loc.flag}
                </span>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-albert text-sm font-semibold uppercase tracking-wide text-brand-ink">
                    {loc.country}, {loc.city}
                  </span>
                  <ArrowIcon />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Legal + copyright row */}
      <div className="px-5 lg:px-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12 lg:mb-16">
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.12em] text-brand-ink-muted font-semibold">
          {LEGAL.map((item, i) => (
            <span key={item.label} className="flex items-center gap-3">
              <a
                href={item.href}
                className="hover:text-brand-ink transition-colors"
              >
                {item.label}
              </a>
              {i < LEGAL.length - 1 && (
                <span aria-hidden="true" className="text-brand-ink-soft">
                  /
                </span>
              )}
            </span>
          ))}
        </div>
        <p className="text-xs uppercase tracking-[0.12em] text-brand-ink-muted font-semibold">
          {COPYRIGHT}
        </p>
      </div>

      {/* Trust badges strip — full-bleed */}
      <div className="grid grid-cols-3 sm:grid-cols-6 border-y border-brand-ink/10">
        {TRUST_BADGES.map((badge, i) => (
          <div
            key={badge}
            className={`py-10 px-4 flex items-center justify-center text-center text-[11px] uppercase tracking-[0.12em] text-brand-ink-muted font-semibold ${
              i > 0 ? "sm:border-l border-brand-ink/10" : ""
            } ${i % 3 !== 0 ? "border-l sm:border-l" : ""}`}
          >
            {badge}
          </div>
        ))}
      </div>

      {/* All services accordion */}
      <div className="border-b border-brand-ink/10">
        <button
          type="button"
          onClick={() => setAllServicesOpen((open) => !open)}
          aria-expanded={allServicesOpen}
          className="w-full flex items-center justify-between py-8 lg:py-10 px-5 lg:px-10 text-left hover:bg-brand-ink/[0.02] transition-colors"
        >
          <span className="font-bricolage text-2xl lg:text-3xl text-brand-ink">
            All services{" "}
            <span className="text-brand-ink-soft">{ALL_SERVICES.length}</span>
          </span>
          <ChevronIcon open={allServicesOpen} />
        </button>

        {allServicesOpen && (
          <div className="px-5 lg:px-10 pb-10 lg:pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-1">
            {ALL_SERVICES.map((service) => (
              <a
                key={service}
                href="#"
                className="group flex items-center justify-between gap-3 py-4 border-b border-brand-ink/10 text-xs uppercase tracking-[0.14em] font-semibold text-brand-ink hover:text-brand-orange transition-colors"
              >
                <span className="underline underline-offset-4 decoration-brand-ink/30 group-hover:decoration-brand-orange">
                  {service}
                </span>
                <ArrowIcon />
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 18 12"
      aria-hidden="true"
      className="w-[18px] h-3 fill-none stroke-current shrink-0"
      strokeWidth="1.6"
    >
      <path
        d="M1 6h16M12 1l5 5-5 5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={`w-6 h-6 fill-none stroke-current transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
      strokeWidth="1.6"
    >
      <path
        d="M3 6l5 5 5-5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
