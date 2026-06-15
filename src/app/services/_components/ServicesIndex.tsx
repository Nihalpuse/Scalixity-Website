import { PrimaryNav } from "@/src/app/landing/_components/PrimaryNav";
import {
  PRIMARY_NAV_LINKS,
  PRIMARY_NAV_CTA,
  PRIMARY_NAV_LOGO,
} from "@/src/app/components/primary-nav-config";
import { CurvedDivider } from "@/src/app/landing/_components/CurvedDivider";
import { ContactForm } from "@/src/app/landing/_components/ContactForm";
import { Footer } from "@/src/app/landing/_components/Footer";
import { HeroShowreel } from "@/src/app/landing/_components/Hero";
import { Services } from "@/src/app/landing/_components/Services";
import { FAQ } from "@/src/app/landing/_components/FAQ";
import { Cases } from "@/src/app/landing/_components/Cases";
import { Industries } from "@/src/app/landing/_components/Industries";
import { Testimonials } from "@/src/app/landing/_components/Testimonials";
import { SERVICES_PRACTICE_COHORTS } from "./servicesPracticeCohorts";
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";
import { CTAButton } from "@/src/app/landing/_components/CTAButton";

const HERO_EYEBROW = "Designed for founders, built for growth";
const HERO_TITLE = "From idea to market, we've got you covered";
const HERO_DESCRIPTION =
  "Learn more about the team of professionals who care about your product as much as you do and the fields we can help you with.";

export function ServicesIndex() {
  return (
    <div className="brand-root min-h-screen">
      <PrimaryNav
        logoText={PRIMARY_NAV_LOGO}
        links={PRIMARY_NAV_LINKS}
        cta={PRIMARY_NAV_CTA}
      />

      {/* Hero copy + the landing showreel section (sticky video left,
          scrolling stats / trusted-by / numbers right). */}
      <section className="relative bg-brand-ink text-brand-bone">
        <div className="px-5 pt-28 lg:px-10 lg:pt-36">
          <p className="brand-eyebrow text-brand-bone-muted mb-8">
            <Scramble>{HERO_EYEBROW}</Scramble>
          </p>
          <h1 className="font-bricolage text-brand-display text-brand-bone max-w-[16ch]">
            <StaggerText>{HERO_TITLE}</StaggerText>
          </h1>
          <p className="font-albert text-brand-body-lg text-brand-bone-muted max-w-2xl mt-8">
            {HERO_DESCRIPTION}
          </p>
          <div className="mt-10 flex flex-wrap gap-3 max-sm:flex-col max-sm:[&>*]:w-full">
            <CTAButton href="#contact-form" variant="primary">
              Let&apos;s talk
            </CTAButton>
            <CTAButton href="#cases" variant="secondary">
              View our cases
            </CTAButton>
          </div>
        </div>

        <HeroShowreel videoSrc="/services/services-hero.mp4" />
      </section>

      {/* Services cohorts (light on this page). */}
      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      <Services theme="light" />

      {/* Full-cycle partner — service practice grouped by Research / Design /
          Development (mirrors the nav), same light surface, no divider. */}
      <Services
        theme="light"
        eyebrow="Design, development & strategy under one roof"
        title="A full-cycle digital product design and development partner"
        description="From research and strategy to design and engineering, we cover the full product lifecycle — so you get one accountable team from first idea to launch and beyond."
        cohorts={SERVICES_PRACTICE_COHORTS}
      />

      {/* Featured cases (light) — same light surface, no divider. */}
      <Cases />

      {/* Key industries (light) — same light surface, no divider. */}
      <Industries />

      {/* What our clients say (light) — above the FAQ. */}
      <Testimonials />

      {/* FAQ (light) — after testimonials. */}
      <FAQ />

      <CurvedDivider fromColor="bone" className="-mt-px relative z-10" />

      <ContactForm />

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      <Footer />
    </div>
  );
}
