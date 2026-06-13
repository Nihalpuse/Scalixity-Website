import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { PrimaryNav } from "@/src/app/landing/_components/PrimaryNav";
import {
  PRIMARY_NAV_LINKS,
  PRIMARY_NAV_CTA,
  PRIMARY_NAV_LOGO,
} from "@/src/app/components/primary-nav-config";
import { CurvedDivider } from "@/src/app/landing/_components/CurvedDivider";
import { ContactForm } from "@/src/app/landing/_components/ContactForm";
import { Footer } from "@/src/app/landing/_components/Footer";
import { CTAButton } from "@/src/app/landing/_components/CTAButton";
import { FAQ } from "@/src/app/landing/_components/FAQ";
import { HeroShowreel } from "@/src/app/landing/_components/Hero";
import { WhyChooseUs } from "@/src/app/landing/_components/WhyChooseUs";
import { Testimonials } from "@/src/app/landing/_components/Testimonials";
import { Cases } from "@/src/app/landing/_components/Cases";
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";
import { ServiceChallenges } from "../_components/ServiceChallenges";
import { ServiceSolutions } from "../_components/ServiceSolutions";
import { ServiceWhyUs } from "../_components/ServiceWhyUs";
import { ServiceProcess } from "../_components/ServiceProcess";
import { LetsConnect } from "../_components/LetsConnect";
import { SERVICES_CONTENT, getService, getRelated } from "../services-content";

export function generateStaticParams() {
  return SERVICES_CONTENT.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service — Scalixity" };
  return { title: `${service.title} — Scalixity`, description: service.metaDescription };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = getRelated(slug);

  return (
    <div className="brand-root min-h-screen">
      <PrimaryNav
        logoText={PRIMARY_NAV_LOGO}
        links={PRIMARY_NAV_LINKS}
        cta={PRIMARY_NAV_CTA}
      />

      {/* Hero (dark) — breadcrumbs, category, title, lead, CTAs, then the
          shared showreel + trusted-by + "Scalixity in numbers" block. */}
      <section className="relative bg-brand-ink text-brand-bone">
        <div className="px-5 pt-28 lg:px-10 lg:pt-36">
          <p className="brand-eyebrow text-brand-bone-muted">{service.title}</p>

          <h1 className="mt-5 max-w-[24ch] font-bricolage text-brand-display text-brand-bone leading-[1.02] tracking-[-0.02em]">
            {service.heroTitle ?? service.title}
          </h1>

          <div className="mt-10 flex flex-wrap items-center gap-3 max-sm:flex-col max-sm:items-stretch max-sm:[&>*]:w-full">
            <CTAButton href="/contact" variant="primary">
              Let&apos;s talk
            </CTAButton>
            <CTAButton href="/work" variant="secondary">
              View our work
            </CTAButton>
          </div>
        </div>

        <HeroShowreel />
      </section>

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      {/* Challenges (light) — sticky-stacking rows: problem (left) + solution (right) */}
      <ServiceChallenges
        title={service.challengesTitle}
        challenges={service.challenges}
      />

      <CurvedDivider fromColor="bone" className="-mt-px relative z-10" />

      {/* Industry-specific solutions (dark) — numbered industry cards */}
      {service.solutions && service.solutions.length > 0 && (
        <ServiceSolutions
          eyebrow={service.solutionsEyebrow}
          title={service.solutionsTitle ?? "Industry-specific solutions"}
          items={service.solutions}
        />
      )}

      {/* Why us / Benefits (dark) — icon cards */}
      <ServiceWhyUs title={service.benefitsTitle} benefits={service.benefits} />

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      {/* Process (light) — per-service "Our {service} process" */}
      {service.process && service.process.length > 0 && (
        <ServiceProcess
          eyebrow={service.processEyebrow}
          title={service.processTitle}
          steps={service.process}
        />
      )}

      {/* Let's connect (light, centered) — CTA right after the process */}
      <LetsConnect title={service.connectTitle} />

      {/* Featured cases (light) — shared landing Cases component */}
      <Cases />

      {/* Why choose us (light, shared) */}
      <WhyChooseUs />

      {/* What clients say (light, shared) */}
      <Testimonials />

      {/* Related services (light) — "Looking for more?" (full-bleed card row) */}
      {related.length > 0 && (
        <section
          data-nav-bg="light"
          className="brand-section-light pt-14 pb-14 lg:pt-24 lg:pb-24"
        >
          {/* Heading keeps the page gutter; the card row below goes full-bleed. */}
          <div className="px-5 lg:px-10">
            <p className="brand-eyebrow text-brand-ink-muted mb-6 lg:mb-8">
              <Scramble>Related services</Scramble>
            </p>
            <h2 className="font-bricolage text-brand-display text-brand-ink leading-[1.02]">
              <StaggerText>Looking for more?</StaggerText>
            </h2>
          </div>

          <div className="mt-12 lg:mt-20 grid grid-cols-1 border-t border-brand-ink/10 md:grid-cols-3">
            {related.map((r, i) => (
              <Link
                key={r.slug}
                href={`/services/${r.slug}`}
                className={`group flex flex-col py-8 lg:py-12 px-5 lg:px-10 lg:min-h-[340px] ${
                  i === 0
                    ? ""
                    : "border-t border-brand-ink/10 md:border-t-0 md:border-l"
                }`}
              >
                <h3 className="font-bricolage text-2xl lg:text-[1.875rem] text-brand-ink leading-tight transition-colors duration-200 ease-brand-out group-hover:text-brand-purple">
                  {r.title}
                </h3>
                {r.summary && (
                  <p className="mt-4 font-albert text-base text-brand-ink-muted leading-relaxed">
                    {r.summary}
                  </p>
                )}
                <span className="mt-auto pt-12 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-brand-ink">
                  <span className="border-b border-brand-ink/40 pb-1 transition-colors group-hover:border-brand-purple group-hover:text-brand-purple">
                    Explore
                  </span>
                  <svg
                    viewBox="0 0 18 12"
                    aria-hidden="true"
                    className="h-3 w-[18px] fill-none stroke-current transition-transform duration-200 ease-brand-out group-hover:translate-x-1"
                    strokeWidth="1.6"
                  >
                    <path d="M1 6h16M12 1l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* FAQ (light) */}
      <FAQ eyebrow="FAQ" title="Questions, answered" faqs={service.faqs} />

      <CurvedDivider fromColor="bone" className="-mt-px relative z-10" />

      <ContactForm />

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      <Footer />
    </div>
  );
}
