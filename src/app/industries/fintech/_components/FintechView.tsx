import { PrimaryNav } from "@/src/app/landing/_components/PrimaryNav";
import {
  PRIMARY_NAV_LINKS,
  PRIMARY_NAV_CTA,
  PRIMARY_NAV_LOGO,
} from "@/src/app/components/primary-nav-config";
import { CurvedDivider } from "@/src/app/landing/_components/CurvedDivider";
import { HeroShowreel } from "@/src/app/landing/_components/Hero";
import { Services } from "@/src/app/landing/_components/Services";
import { Cases } from "@/src/app/landing/_components/Cases";
import { Testimonials } from "@/src/app/landing/_components/Testimonials";
import { ContactForm } from "@/src/app/landing/_components/ContactForm";
import { Footer } from "@/src/app/landing/_components/Footer";
import { CTAButton } from "@/src/app/landing/_components/CTAButton";
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";
import { IndustryCtaBand } from "../../_components/IndustryCtaBand";
import { IndustryTechStack } from "../../_components/IndustryTechStack";
import { FintechChallenges } from "./FintechChallenges";
import { FintechSolutions } from "./FintechSolutions";
import { FintechFeatures } from "./FintechFeatures";
import { FintechTrends } from "./FintechTrends";
import { FintechCollaboration } from "./FintechCollaboration";
import { FintechBenefits } from "./FintechBenefits";
import { FintechRelatedServices } from "./FintechRelatedServices";
import { FintechFAQ } from "./FintechFAQ";
import { FINTECH_SERVICE_COHORTS } from "./fintechServiceCohorts";

const HERO_EYEBROW = "Fintech design agency";
const HERO_TITLE =
  "Simplified onboarding. Faster conversion. UX and UI that keep fintech users engaged";
const HERO_DESCRIPTION =
  "We transform complex fintech products into intuitive, conversion-focused platforms driven by in-depth UX audits and strategic fintech design to boost activation, retention, and LTV.";

export function FintechView() {
  return (
    <div className="brand-root min-h-screen">
      <PrimaryNav
        logoText={PRIMARY_NAV_LOGO}
        links={PRIMARY_NAV_LINKS}
        cta={PRIMARY_NAV_CTA}
      />

      {/* Hero + showreel (dark) */}
      <section className="relative bg-brand-ink text-brand-bone">
        <div className="px-5 pt-40 lg:px-10 lg:pt-48">
          <p className="brand-eyebrow text-brand-bone-muted mb-8">
            <Scramble>{HERO_EYEBROW}</Scramble>
          </p>
          <h1 className="font-bricolage text-brand-display text-brand-bone max-w-[20ch]">
            <StaggerText>{HERO_TITLE}</StaggerText>
          </h1>
          <p className="font-albert text-brand-body-lg text-brand-bone-muted max-w-2xl mt-8">
            {HERO_DESCRIPTION}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <CTAButton href="/contact" variant="primary">
              Let&apos;s talk
            </CTAButton>
            <CTAButton href="/work" variant="secondary">
              View our cases
            </CTAButton>
          </div>
        </div>

        <HeroShowreel />
      </section>

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      {/* Fintech design challenges (sticky-stack, no CTAs) */}
      <FintechChallenges />

      {/* What we design for fintech UX and UI (scroll slider) */}
      <FintechSolutions />

      {/* Interstitial CTA */}
      <IndustryCtaBand
        title="Need to design one of these?"
        body="Book a call with our team to talk through what your fintech product needs next — from a single flow to a full platform."
        ctaLabel="Book a consultation"
        ctaHref="/contact"
      />

      <CurvedDivider fromColor="bone" className="-mt-px relative z-10" />

      {/* Our design & development services (dark, shared Services) */}
      <Services
        eyebrow="Our design & development services"
        title="From discovery to delivery: how we build fintech products"
        description="From research to launch, we cover the full fintech product lifecycle — clarifying scope and architecture, designing conversion-focused UI/UX, and engineering secure, scalable platforms."
        cohorts={FINTECH_SERVICE_COHORTS}
      />

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      {/* Features we design */}
      <FintechFeatures />

      {/* Technology stack */}
      <IndustryTechStack
        eyebrow="Technologies"
        title="Tech stack behind our fintech products"
      />

      {/* Advanced fintech technologies */}
      <FintechTrends />

      {/* Interstitial CTA */}
      <IndustryCtaBand
        title="See what it's like to work with us"
        body="Get one week of focused fintech UX design at a founder-friendly rate. Pressure-test a KYC onboarding flow, payments screen, or analytics dashboard before committing to a full product build."
        ctaLabel="Start design trial"
        ctaHref="/contact"
      />

      {/* Featured cases */}
      <Cases />

      {/* Testimonials */}
      <Testimonials />

      <CurvedDivider fromColor="bone" className="-mt-px relative z-10" />

      {/* How to work with us (dark) */}
      <FintechCollaboration />

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      {/* Why fintech startups work with us */}
      <FintechBenefits />

      {/* Related services */}
      <FintechRelatedServices />

      {/* FAQ */}
      <FintechFAQ />

      <CurvedDivider fromColor="bone" className="-mt-px relative z-10" />

      <ContactForm />

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      <Footer />
    </div>
  );
}
