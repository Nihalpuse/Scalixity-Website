import Link from "next/link";
import { PrimaryNav } from "@/src/app/landing/_components/PrimaryNav";
import {
  PRIMARY_NAV_LINKS,
  PRIMARY_NAV_CTA,
  PRIMARY_NAV_LOGO,
} from "@/src/app/components/primary-nav-config";
import { CurvedDivider } from "@/src/app/landing/_components/CurvedDivider";
import { ContactForm } from "@/src/app/landing/_components/ContactForm";
import { Footer } from "@/src/app/landing/_components/Footer";
// import { CTAButton } from "@/src/app/landing/_components/CTAButton";
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";

// Resources preserved from the legacy ResourcesPage.
const RESOURCES = [
  {
    title: "AI Implementation Guide",
    description: "A comprehensive guide to implementing AI solutions in your business.",
    type: "eBook",
    link: "/resources/ai-implementation-guide",
  },
  {
    title: "Data Engineering Best Practices",
    description: "Learn the best practices for building robust data infrastructure for AI.",
    type: "Whitepaper",
    link: "/resources/data-engineering-best-practices",
  },
  {
    title: "Introduction to Generative AI",
    description: "A beginner-friendly webinar on the basics of generative AI and its applications.",
    type: "Webinar",
    link: "/resources/intro-to-generative-ai",
  },
  {
    title: "Building AI-Powered Chatbots",
    description: "Discover how to create intelligent chatbots using AI technologies.",
    type: "Workshop",
    link: "/resources/ai-powered-chatbots",
  },
];

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

export function ResourcesIndex() {
  return (
    <div className="brand-root min-h-screen">
      <PrimaryNav
        logoText={PRIMARY_NAV_LOGO}
        links={PRIMARY_NAV_LINKS}
        cta={PRIMARY_NAV_CTA}
      />

      {/* Hero (dark) */}
      <section className="relative bg-brand-ink text-brand-bone">
        <div className="px-5 pt-40 pb-24 lg:px-10 lg:pt-48 lg:pb-32">
          <p className="brand-eyebrow text-brand-bone-muted mb-8">
            <Scramble>Learn with us</Scramble>
          </p>
          <h1 className="font-bricolage text-brand-display text-brand-bone max-w-[14ch]">
            <StaggerText>Resources</StaggerText>
          </h1>
          <p className="font-albert text-brand-body-lg text-brand-bone-muted max-w-2xl mt-8">
            Expand your AI knowledge with our curated guides, whitepapers, and
            workshops.
          </p>
        </div>
      </section>

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      {/* Resource grid (light) */}
      <section
        data-nav-bg="light"
        className="brand-section-light px-5 lg:px-10 pt-20 pb-24 lg:pt-32 lg:pb-32"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {RESOURCES.map((resource) => (
            <Link
              key={resource.title}
              href={resource.link}
              className="group rounded-2xl bg-brand-ink/[0.04] p-8 flex flex-col gap-4 transition-colors duration-300 ease-brand-out hover:bg-brand-ink/[0.06]"
            >
              <span className="inline-flex items-center self-start px-3 py-1.5 bg-brand-ink/5 rounded-md text-[11px] uppercase tracking-[0.12em] font-semibold text-brand-ink">
                {resource.type}
              </span>
              <h3 className="font-bricolage text-xl text-brand-ink leading-tight">
                {resource.title}
              </h3>
              <p className="font-albert text-brand-body text-brand-ink-muted leading-relaxed flex-grow">
                {resource.description}
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-purple">
                Explore
                <ArrowRight />
              </span>
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
