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

// Industries preserved from the legacy Industries component.
const INDUSTRIES = [
  { name: "Healthcare", icon: "/icons/healthcare.svg", link: "/industries/healthcare" },
  { name: "Fintech", icon: "/icons/finance.svg", link: "/industries/fintech" },
  { name: "Retail", icon: "/icons/retail.svg", link: "/industries/retail" },
  { name: "Manufacturing", icon: "/icons/manufacturing.svg", link: "/industries/manufacturing" },
  { name: "SaaS", icon: "/icons/saas.svg", link: "/industries/saas" },
  { name: "Insurance", icon: "/icons/insurance.svg", link: "/industries/insurance" },
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
        <div className="px-5 pt-40 pb-24 lg:px-10 lg:pt-48 lg:pb-32">
          <p className="brand-eyebrow text-brand-bone-muted mb-8">
            <Scramble>{HERO_EYEBROW}</Scramble>
          </p>
          <h1 className="font-bricolage text-brand-display text-brand-bone max-w-[14ch]">
            <StaggerText>{HERO_TITLE}</StaggerText>
          </h1>
          <p className="font-albert text-brand-body-lg text-brand-bone-muted max-w-2xl mt-8">
            {HERO_DESCRIPTION}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
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
        className="brand-section-light px-5 lg:px-10 pt-20 pb-24 lg:pt-32 lg:pb-32"
      >
        <p className="brand-eyebrow text-brand-ink-muted mb-6 lg:mb-8">
          <Scramble>Sectors</Scramble>
        </p>
        <h2 className="font-bricolage text-brand-display text-brand-ink mb-12 lg:mb-16 max-w-[20ch]">
          <StaggerText>Deep expertise, by industry</StaggerText>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {INDUSTRIES.map((industry) => (
            <Link
              key={industry.name}
              href={industry.link}
              className="group rounded-2xl bg-brand-ink/[0.04] p-8 flex flex-col gap-8 transition-colors duration-300 ease-brand-out hover:bg-brand-ink/[0.06]"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-purple/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={industry.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-7 w-7"
                />
              </span>
              <div className="flex items-end justify-between gap-4">
                <h3 className="font-bricolage text-2xl text-brand-ink leading-tight">
                  {industry.name}
                </h3>
                <span className="text-brand-purple shrink-0 pb-1">
                  <ArrowRight />
                </span>
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
