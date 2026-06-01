import { PrimaryNav } from "@/src/app/landing/_components/PrimaryNav";
import {
  PRIMARY_NAV_LINKS,
  PRIMARY_NAV_CTA,
  PRIMARY_NAV_LOGO,
} from "@/src/app/components/primary-nav-config";
import { CurvedDivider } from "@/src/app/landing/_components/CurvedDivider";
import { GlobalImpact } from "@/src/app/landing/_components/GlobalImpact";
import { Testimonials } from "@/src/app/landing/_components/Testimonials";
import { ContactForm } from "@/src/app/landing/_components/ContactForm";
import { Footer } from "@/src/app/landing/_components/Footer";
import { CTAButton } from "@/src/app/landing/_components/CTAButton";
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";
import { IndustryRelatedServices } from "../../industries/_components/IndustryRelatedServices";
import { Team } from "../../company/_components/Team";
import { AboutStory } from "./AboutStory";
import { AboutMilestones } from "./AboutMilestones";
import { AboutWorldwide } from "./AboutWorldwide";
import { AboutDifference } from "./AboutDifference";
import { AboutTraits } from "./AboutTraits";

// Hero "in numbers" teaser. Qualitative/defensible claims, kept distinct from
// the GlobalImpact and milestone counts below.
const HERO_STATS: { value: string; label: string }[] = [
  { value: "10+", label: "projects shipped end to end" },
  { value: "8+", label: "clients across industries" },
  { value: "100%", label: "senior-led delivery teams" },
  { value: "24/7", label: "coverage across time zones" },
];

const HERO_EYEBROW = "About Scalixity";
const HERO_TITLE =
  "From a focused engineering team to a partner designing and shipping AI products across industries and continents";
const HERO_DESCRIPTION =
  "Scalixity began with late nights, first clients, and high standards. The work scaled and so did the team — but what's never changed is the deep thinking and the shared drive to do things right.";

// "Diving deeper into what we can bring to your table" — the three explore
// cards from the phenomenon about-us page, repointed to Scalixity routes.
const EXPLORE = [
  {
    title: "Services",
    body: "From investor-ready MVPs and AI engineering to full product design and dedicated team extensions, we help companies build things that work and last — embedding fast, adapting to your stack, and delivering without dragging timelines.",
    href: "/services",
  },
  {
    title: "Work",
    body: "We design and build products across SaaS, Healthcare, Fintech, and EdTech. From dashboards and mobile apps to branded websites and internal platforms, our work covers real user needs at every product stage.",
    href: "/work",
  },
  {
    title: "Contact",
    body: "Every product and company is different, but working with us shouldn't feel like a black box. Tell us about your goals and we'll come back with a clear scope, the right team, and an honest plan to get there.",
    href: "/contact",
  },
];

export function AboutView() {
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
              View our work
            </CTAButton>
          </div>

          {/* Scalixity in numbers */}
          <div className="mt-16 lg:mt-24">
            <p className="brand-eyebrow text-brand-bone-muted mb-8">
              Scalixity in numbers
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-brand-bone/10 border-t border-brand-bone/10">
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-brand-ink py-10 lg:py-14 px-4 lg:px-6 flex flex-col items-center text-center"
                >
                  <div className="font-bricolage text-4xl lg:text-6xl text-brand-bone leading-none">
                    {stat.value}
                  </div>
                  <p className="mt-4 lg:mt-6 font-albert text-[11px] lg:text-xs uppercase tracking-[0.12em] text-brand-bone-muted font-semibold max-w-[18ch]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      {/* What grounds us (light) */}
      <AboutStory />

      {/* Scalixity at a glance (light) */}
      <GlobalImpact />

      {/* What we've built so far → with so much more ahead (light, animated) */}
      <AboutMilestones />

      {/* Worldwide, where you need us (light) */}
      <AboutWorldwide />

      <CurvedDivider fromColor="bone" className="-mt-px relative z-10" />

      {/* What makes us different (dark) */}
      <AboutDifference />

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      {/* Meet the people behind our projects (light, tabbed) */}
      <Team />

      {/* The values our team is built on (light) */}
      <AboutTraits />

      {/* What our clients say */}
      <Testimonials />

      {/* Diving deeper — explore more */}
      <IndustryRelatedServices
        eyebrow="What if you partner with Scalixity"
        title="Diving deeper into what we can bring to your table"
        services={EXPLORE}
      />

      <CurvedDivider fromColor="bone" className="-mt-px relative z-10" />

      <ContactForm />

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      <Footer />
    </div>
  );
}
