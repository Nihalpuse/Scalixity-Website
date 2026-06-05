import { type ComponentType } from "react";
import { PrimaryNav } from "@/src/app/landing/_components/PrimaryNav";
import {
  PRIMARY_NAV_LINKS,
  PRIMARY_NAV_CTA,
  PRIMARY_NAV_LOGO,
} from "@/src/app/components/primary-nav-config";
import Link from "next/link";
import { CurvedDivider } from "@/src/app/landing/_components/CurvedDivider";
import { ContactForm } from "@/src/app/landing/_components/ContactForm";
import { Footer } from "@/src/app/landing/_components/Footer";
import { CTAButton } from "@/src/app/landing/_components/CTAButton";
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";

const HERO_EYEBROW = "Where we work";
const HERO_TITLE = "Industries we serve";
const HERO_DESCRIPTION =
  "We bring AI and product engineering to the sectors we know best — pairing domain context with the speed to ship.";

type Industry = {
  name: string;
  description: string;
  Icon: ComponentType<{ className?: string }>;
  link: string;
};

// Consistent inline line-icons (currentColor → brand-purple) replace the old
// mismatched colorful /icons/*.svg emoji-style assets.
// Mirrors the PrimaryNav Industries dropdown — the four migrated industry
// pages (SaaS, Healthcare, Fintech, EdTech).
const INDUSTRIES: Industry[] = [
  {
    name: "SaaS",
    description: "AI features and scalable product engineering.",
    Icon: SaasIcon,
    link: "/industries/saas",
  },
  {
    name: "Healthcare",
    description: "AI for diagnostics, patient data, and clinical workflows.",
    Icon: HealthcareIcon,
    link: "/industries/healthcare",
  },
  {
    name: "Fintech",
    description: "Secure, compliant intelligence for financial products.",
    Icon: FintechIcon,
    link: "/industries/fintech",
  },
  {
    name: "EdTech",
    description: "Adaptive learning, content, and student insights.",
    Icon: EdtechIcon,
    link: "/industries/edtech",
  },
];

// --- Industry line icons (24×24, stroke = currentColor) -------------------
const ICON_SVG = "h-7 w-7 fill-none stroke-current";

function HealthcareIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`${ICON_SVG} ${className ?? ""}`} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.5 4.04 3 5.5l7 7Z" />
      <path d="M3.5 12H8l1-2 2 5 2-6 1.5 3h4" />
    </svg>
  );
}

function FintechIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`${ICON_SVG} ${className ?? ""}`} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5 12 4l9 5.5" />
      <path d="M4 9.5h16" />
      <path d="M6 9.5V18M10 9.5V18M14 9.5V18M18 9.5V18" />
      <path d="M3 21h18" />
    </svg>
  );
}

function SaasIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`${ICON_SVG} ${className ?? ""}`} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
    </svg>
  );
}

function EdtechIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`${ICON_SVG} ${className ?? ""}`} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1 2.5 2.5 6 2.5s6-1.5 6-2.5v-5" />
      <path d="M22 10v6" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 18 12"
      aria-hidden="true"
      className="h-3 w-[18px] fill-none stroke-current transition-transform duration-300 ease-brand-out group-hover:translate-x-1"
      strokeWidth="1.6"
    >
      <path d="M1 6h16M12 1l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IndustriesIndex() {
  return (
    <div className="brand-root min-h-screen">
      <PrimaryNav
        logoText={PRIMARY_NAV_LOGO}
        links={PRIMARY_NAV_LINKS}
        cta={PRIMARY_NAV_CTA}
      />

      {/* Hero (dark) */}
      <section className="relative bg-brand-ink text-brand-bone">
        <div className="px-5 pt-28 pb-14 lg:px-10 lg:pt-36 lg:pb-24">
          <p className="brand-eyebrow text-brand-bone-muted mb-8">
            <Scramble>{HERO_EYEBROW}</Scramble>
          </p>
          <h1 className="font-bricolage text-brand-display text-brand-bone max-w-[14ch]">
            <StaggerText>{HERO_TITLE}</StaggerText>
          </h1>
          <p className="font-albert text-brand-body-lg text-brand-bone-muted max-w-2xl mt-8">
            {HERO_DESCRIPTION}
          </p>
          <div className="mt-10 flex flex-wrap gap-3 max-sm:flex-col max-sm:[&>*]:w-full">
            <CTAButton href="/contact" variant="primary">
              Start a project
            </CTAButton>
            <CTAButton href="/work" variant="secondary">
              View our work
            </CTAButton>
          </div>
        </div>
      </section>

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      {/* Industry grid (light) */}
      <section
        data-nav-bg="light"
        className="brand-section-light px-5 lg:px-10 pt-14 pb-14 lg:pt-24 lg:pb-24"
      >
        <p className="brand-eyebrow text-brand-ink-muted mb-6 lg:mb-8">
          <Scramble>Sectors</Scramble>
        </p>
        <h2 className="font-bricolage text-brand-display text-brand-ink mb-12 lg:mb-16 max-w-[20ch]">
          <StaggerText>Deep expertise, by industry</StaggerText>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {INDUSTRIES.map((industry) => (
            <Link
              key={industry.name}
              href={industry.link}
              className="group flex flex-col justify-between gap-10 rounded-2xl border border-brand-ink/10 bg-brand-ink/[0.02] p-7 lg:p-8 min-h-[210px] transition-all duration-300 ease-brand-out hover:-translate-y-1 hover:border-brand-purple/40 hover:bg-brand-bone hover:shadow-[0_16px_40px_-20px_rgba(8,13,16,0.22)]"
            >
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-brand-purple/10 text-brand-purple transition-colors duration-300 ease-brand-out group-hover:bg-brand-purple group-hover:text-brand-bone">
                <industry.Icon />
              </span>
              <div>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-bricolage text-2xl text-brand-ink leading-tight">
                    {industry.name}
                  </h3>
                  <span className="text-brand-purple shrink-0">
                    <ArrowRight />
                  </span>
                </div>
                <p className="mt-3 font-albert text-sm text-brand-ink-muted leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CurvedDivider fromColor="bone" className="-mt-px relative z-10" />

      <ContactForm />

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      <Footer />
    </div>
  );
}
