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
import { EdtechChallenges } from "./EdtechChallenges";
import { EdtechSolutions } from "./EdtechSolutions";
import { EdtechFeatures } from "./EdtechFeatures";
import { EdtechTrends } from "./EdtechTrends";
import { EdtechCollaboration } from "./EdtechCollaboration";
import { EdtechBenefits } from "./EdtechBenefits";
import { EdtechRelatedServices } from "./EdtechRelatedServices";
import { EdtechFAQ } from "./EdtechFAQ";
import { EDTECH_SERVICE_COHORTS } from "./edtechServiceCohorts";

const HERO_EYEBROW = "Education IT services";
const HERO_TITLE =
  "Building EdTech solutions students use, educators recommend, and institutions trust";
const HERO_DESCRIPTION =
  "We build WCAG- and FERPA-compliant education technology solutions that simplify admin workflows and keep learners engaged — driving stronger completion, faster onboarding, and higher live attendance.";

export function EdtechView() {
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

      {/* Challenges behind edtech solutions (sticky-stack, no CTAs) */}
      <EdtechChallenges />

      {/* Education software solutions we deliver (scroll slider) */}
      <EdtechSolutions />

      {/* Interstitial CTA */}
      <IndustryCtaBand
        title="Need to design one of these?"
        body="Book a call with our team to explore what your education platform needs next — from a single flow to a full platform."
        ctaLabel="Book a consultation"
        ctaHref="/contact"
      />

      <CurvedDivider fromColor="bone" className="-mt-px relative z-10" />

      {/* Our EdTech services (dark, shared Services) */}
      <Services
        eyebrow="Our EdTech services"
        title="From EdTech logo design to ready-to-launch LMSs — you get faster delivery and higher adoption"
        description="From research to launch, we cover the full education product lifecycle — clarifying scope and architecture, designing learner-centric UI/UX, and engineering compliant platforms that scale."
        cohorts={EDTECH_SERVICE_COHORTS}
      />

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      {/* Features we design */}
      <EdtechFeatures />

      {/* Technology stack */}
      <IndustryTechStack
        eyebrow="Technology stack"
        title="Frameworks and tools we use"
      />

      {/* Advanced edtech technologies */}
      <EdtechTrends />

      {/* Interstitial CTA */}
      <IndustryCtaBand
        title="See what it's like to work with us"
        body="Get one week of focused edtech UX design at a reduced rate. Use it to validate a dashboard, onboarding flow, or interface update before investing in full design and development of educational technology."
        ctaLabel="Start design trial"
        ctaHref="/contact"
      />

      {/* Featured cases */}
      <Cases />

      {/* Testimonials */}
      <Testimonials />

      <CurvedDivider fromColor="bone" className="-mt-px relative z-10" />

      {/* How to work with us (dark) */}
      <EdtechCollaboration />

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      {/* Why choose us */}
      <EdtechBenefits />

      {/* Related services */}
      <EdtechRelatedServices />

      {/* FAQ */}
      <EdtechFAQ />

      <CurvedDivider fromColor="bone" className="-mt-px relative z-10" />

      <ContactForm />

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      <Footer />
    </div>
  );
}
