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
import { SaasChallenges } from "./SaasChallenges";
import { SaasSolutions } from "./SaasSolutions";
import { SaasCtaBand } from "./SaasCtaBand";
import { SaasFeatures } from "./SaasFeatures";
import { SaasTechStack } from "./SaasTechStack";
import { SaasTrends } from "./SaasTrends";
import { SaasCollaboration } from "./SaasCollaboration";
import { SaasBenefits } from "./SaasBenefits";
import { SaasRelatedServices } from "./SaasRelatedServices";
import { SaasFAQ } from "./SaasFAQ";
import { SAAS_SERVICE_COHORTS } from "./saasServiceCohorts";

const HERO_EYEBROW = "More than a SaaS design agency";
const HERO_TITLE = "Designing SaaS that users love — and businesses grow with";
const HERO_DESCRIPTION =
  "There are things you can't buy for money. Feel the difference with Scalixity. We deliver business-minded, developer-ready, and conversion-focused SaaS design, with care like it's our own product.";

export function SaasView() {
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
          <h1 className="font-bricolage text-brand-display text-brand-bone max-w-[18ch]">
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

      {/* Common SaaS design challenges (sticky-stack, no CTAs) */}
      <SaasChallenges />

      {/* Industry-specific solutions (scroll slider) */}
      <SaasSolutions />

      {/* Interstitial CTA */}
      <SaasCtaBand
        title="Need to design one of these?"
        body="Book a call with our team to talk through what your SaaS product needs next — from a single flow to a full platform."
        ctaLabel="Book a consultation"
        ctaHref="/contact"
      />

      <CurvedDivider fromColor="bone" className="-mt-px relative z-10" />

      {/* Specialized design services (reuses the landing Services section
          for visual uniformity across the site, with SaaS-specific copy) */}
      <Services
        eyebrow="What our SaaS design practice does"
        title="Specialized design services for SaaS teams building products that users actually want to use"
        description="From research to launch, we cover the full SaaS product lifecycle — clarifying scope and architecture, designing role-based UI/UX, and engineering scalable platforms your users actually want to use."
        cohorts={SAAS_SERVICE_COHORTS}
      />

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      {/* Features we design */}
      <SaasFeatures />

      {/* Technology stack */}
      <SaasTechStack />

      {/* SaaS application design trends */}
      <SaasTrends />

      {/* Interstitial CTA */}
      <SaasCtaBand
        title="See what it's like to work with us"
        body="Get one week of focused UI/UX design for SaaS at a founder-friendly rate. Use it to validate a dashboard, an onboarding flow, or a new feature before investing in full-scale design and development."
        ctaLabel="Start design trial"
        ctaHref="/contact"
      />

      {/* Featured cases */}
      <Cases />

      {/* Testimonials */}
      <Testimonials />

      <CurvedDivider fromColor="bone" className="-mt-px relative z-10" />

      {/* How to work with us (dark) */}
      <SaasCollaboration />

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      {/* Why choose us */}
      <SaasBenefits />

      {/* Related services */}
      <SaasRelatedServices />

      {/* FAQ */}
      <SaasFAQ />

      <CurvedDivider fromColor="bone" className="-mt-px relative z-10" />

      <ContactForm />

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      <Footer />
    </div>
  );
}
