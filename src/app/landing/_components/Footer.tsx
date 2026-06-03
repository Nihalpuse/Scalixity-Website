"use client";

import { useState } from "react";
import { DROPDOWN_DATA } from "./PrimaryNav";

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

type SocialLink = {
  platform: string;
  href: string;
  Icon: () => React.ReactNode;
};

const SOCIALS: SocialLink[] = [
  { platform: "LinkedIn", href: "https://www.linkedin.com/company/scalixity", Icon: LinkedInIcon },
  { platform: "Instagram", href: "https://www.instagram.com/scalixity/", Icon: InstagramIcon },
  { platform: "Facebook", href: "https://www.facebook.com/profile.php?id=61579701595445", Icon: FacebookIcon },
  // No X/Twitter profile yet.
  { platform: "X", href: "#", Icon: XIcon },
];

type Location = {
  country: string;
  city: string;
  flag: string;
  span?: "full";
  /** Optional multi-line street address shown above the country/city line. */
  addressLines?: string[];
};

const LOCATIONS: Location[] = [
  {
    country: "India",
    city: "Gwalior",
    flag: "🇮🇳",
    addressLines: [
      "66, House, Lashkar, Block A",
      "Sindhi Colony",
      "Gwalior, Madhya Pradesh",
      "474001, India",
    ],
  },
  {
    country: "United Kingdom",
    city: "London",
    flag: "🇬🇧",
    addressLines: ["71-75 Shelton Street", "Covent Garden", "WC2H 9JQ"],
  },
];

const LEGAL = [
  { label: "Terms of Use", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookies Policy", href: "/cookies" },
];

const COPYRIGHT = "Scalixity © 2026";

// Mirrors the PrimaryNav "Services" mega-menu (single source of truth): every
// service flattened across its categories, de-duped by label, keeping the real
// /services/* hrefs so the footer list stays in sync with the nav.
const ALL_SERVICES: { label: string; href: string }[] = (() => {
  const data = DROPDOWN_DATA.Services;
  if (data.kind !== "categorized") return [];
  const items = [...data.primary, ...(data.secondary ?? [])].flatMap(
    (cat) => cat.items
  );
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.label)) return false;
    seen.add(item.label);
    return true;
  });
})();

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
              className="font-bricolage text-2xl lg:text-3xl text-brand-ink hover:text-brand-purple transition-colors w-fit max-lg:py-2"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Socials grid */}
        <div className="lg:col-span-4">
          <div className="grid grid-cols-4 gap-2 max-w-[320px]">
            {SOCIALS.map(({ platform, href, Icon }) => {
              const isLive = href !== "#";
              return (
                <a
                  key={platform}
                  href={href}
                  aria-label={platform}
                  {...(isLive
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : { "aria-disabled": true, tabIndex: -1 })}
                  className={`aspect-square rounded-lg bg-brand-ink/[0.04] transition-colors flex items-center justify-center text-brand-ink ${
                    isLive
                      ? "hover:bg-brand-ink/[0.08]"
                      : "opacity-40 pointer-events-none"
                  }`}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        {/* Locations grid */}
        <div className="lg:col-span-4">
          <div className="grid grid-cols-2 gap-3">
            {LOCATIONS.map((loc) => (
              <a
                key={loc.country}
                href="#"
                className={`rounded-lg bg-brand-ink/[0.04] hover:bg-brand-ink/[0.08] transition-colors p-5 flex flex-col justify-between gap-4 min-h-[120px] ${
                  loc.span === "full" ? "col-span-2" : ""
                }`}
              >
                <span className="text-2xl" aria-hidden="true">
                  {loc.flag}
                </span>
                <div className="flex flex-col gap-2">
                  {loc.addressLines && (
                    <div className="font-albert text-xs text-brand-ink-muted leading-relaxed">
                      {loc.addressLines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  )}
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-albert text-sm font-semibold uppercase tracking-wide text-brand-ink">
                      {loc.country}, {loc.city}
                    </span>
                    <ArrowIcon />
                  </div>
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

      {/* All services accordion */}
      <div className="border-y border-brand-ink/10">
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
                key={service.label}
                href={service.href}
                className="group flex items-center justify-between gap-3 py-4 border-b border-brand-ink/10 text-xs uppercase tracking-[0.14em] font-semibold text-brand-ink hover:text-brand-purple transition-colors"
              >
                <span className="underline underline-offset-4 decoration-brand-ink/30 group-hover:decoration-brand-purple">
                  {service.label}
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

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="w-5 h-5"
    >
      <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S0 4.881 0 3.5C0 2.12 1.119 1 2.5 1s2.48 1.12 2.48 2.5zM5 8H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="w-5 h-5"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="w-5 h-5"
    >
      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="w-5 h-5"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
