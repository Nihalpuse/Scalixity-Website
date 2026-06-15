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
import { HealthcareChallenges } from "./HealthcareChallenges";
import { HealthcareSolutions } from "./HealthcareSolutions";
import { HealthcareFeatures } from "./HealthcareFeatures";
import { HealthcareTrends } from "./HealthcareTrends";
import { HealthcareCollaboration } from "./HealthcareCollaboration";
import { HealthcareBenefits } from "./HealthcareBenefits";
import { HealthcareRelatedServices } from "./HealthcareRelatedServices";
import { HealthcareFAQ } from "./HealthcareFAQ";
import { HEALTHCARE_SERVICE_COHORTS } from "./healthcareServiceCohorts";

const HERO_EYEBROW = "App development for healthcare";
const HERO_TITLE =
  "Building digital health tools that patients trust, providers use, and regulators approve";
const HERO_DESCRIPTION =
  "We design HIPAA-compliant platforms that engage patients and streamline EHR workflows — built around clinical reality, not just clean screens. Exactly who you want behind your healthcare product.";

export function HealthcareView() {
  return (
    <div className="brand-root min-h-screen">
      <PrimaryNav
        logoText={PRIMARY_NAV_LOGO}
        links={PRIMARY_NAV_LINKS}
        cta={PRIMARY_NAV_CTA}
      />

      {/* Hero + showreel (dark) */}
      <section className="relative bg-brand-ink text-brand-bone">
        <div className="px-5 pt-28 lg:px-10 lg:pt-36">
          <p className="brand-eyebrow text-brand-bone-muted mb-8">
            <Scramble>{HERO_EYEBROW}</Scramble>
          </p>
          <h1 className="font-bricolage text-brand-display text-brand-bone max-w-[20ch]">
            <StaggerText>{HERO_TITLE}</StaggerText>
          </h1>
          <p className="font-albert text-brand-body-lg text-brand-bone-muted max-w-2xl mt-8">
            {HERO_DESCRIPTION}
          </p>
          <div className="mt-10 flex flex-wrap gap-3 max-sm:flex-col max-sm:[&>*]:w-full">
            <CTAButton href="/contact" variant="primary">
              Let&apos;s talk
            </CTAButton>
            <CTAButton href="/work" variant="secondary">
              View our cases
            </CTAButton>
          </div>
        </div>

        <HeroShowreel videoSrc="/industry/healthcare-industry.mp4" />
      </section>

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      {/* Healthcare app development challenges (sticky-stack, no CTAs) */}
      <HealthcareChallenges />

      {/* Healthcare website designs we deliver (scroll slider) */}
      <HealthcareSolutions />

      {/* Interstitial CTA */}
      <IndustryCtaBand
        title="Need to build one of these?"
        body="Book a call with our team to explore what your healthcare product needs next — from a single flow to a full platform."
        ctaLabel="Book a consultation"
        ctaHref="/contact"
      />

      <CurvedDivider fromColor="bone" className="-mt-px relative z-10" />

      {/* Our healthcare app development services (dark, shared Services) */}
      <Services
        eyebrow="Our healthcare app development services"
        title="From rapid MVPs to full-scale platforms — built for real-world healthcare use"
        description="From research to launch, we cover the full product lifecycle — clarifying scope and architecture, designing role-based UI/UX, and engineering compliant platforms that hold up in real clinical settings."
        cohorts={HEALTHCARE_SERVICE_COHORTS}
      />

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      {/* Features we design */}
      <HealthcareFeatures />

      {/* Technology stack */}
      <IndustryTechStack
        eyebrow="Technology stack"
        title="Frameworks behind our best medical web design and healthcare mobile app development projects"
      />

      {/* Advanced healthtech technologies */}
      <HealthcareTrends />

      {/* Interstitial CTA */}
      <IndustryCtaBand
        title="See what it's like to work with us"
        body="Get one week of focused healthcare UX design at a reduced rate. Validate an EHR flow, onboarding experience, or patient-facing interface before committing to full healthcare design and development."
        ctaLabel="Start design trial"
        ctaHref="/contact"
      />

      {/* Featured cases */}
      <Cases />

      {/* Testimonials */}
      <Testimonials />

      <CurvedDivider fromColor="bone" className="-mt-px relative z-10" />

      {/* How to work with us (dark) */}
      <HealthcareCollaboration />

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      {/* Why trust us */}
      <HealthcareBenefits />

      {/* Related services */}
      <HealthcareRelatedServices />

      {/* FAQ */}
      <HealthcareFAQ />

      <CurvedDivider fromColor="bone" className="-mt-px relative z-10" />

      <ContactForm />

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      <Footer />
    </div>
  );
}
