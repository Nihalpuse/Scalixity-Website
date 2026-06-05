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
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";
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
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 brand-eyebrow text-brand-bone-muted">
              <li>
                <Link href="/" className="hover:text-brand-bone transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-brand-bone-soft">/</li>
              <li>
                <Link href="/services" className="hover:text-brand-bone transition-colors">
                  Services
                </Link>
              </li>
              <li aria-hidden="true" className="text-brand-bone-soft">/</li>
              <li className="text-brand-bone max-w-[40ch] truncate">{service.title}</li>
            </ol>
          </nav>

          <div className="mt-8">
            <span className="brand-eyebrow text-brand-purple">#{service.category}</span>
          </div>

          <h1 className="mt-5 max-w-[20ch] font-bricolage text-brand-display text-brand-bone leading-[1.02] tracking-[-0.02em]">
            {service.title}
          </h1>

          <p className="mt-7 max-w-[60ch] font-albert text-brand-body-lg text-brand-bone-muted leading-relaxed">
            {service.heroLead}
          </p>

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

      {/* Challenges (light) — problem → approach rows */}
      <section
        data-nav-bg="light"
        className="brand-section-light px-5 lg:px-10 pt-14 pb-14 lg:pt-24 lg:pb-24"
      >
        <p className="brand-eyebrow text-brand-ink-muted mb-6 lg:mb-8">
          <Scramble>Challenges</Scramble>
        </p>
        <h2 className="font-bricolage text-brand-display text-brand-ink max-w-[18ch]">
          <StaggerText>What we help you solve</StaggerText>
        </h2>

        <div className="mt-12 lg:mt-20 border-t border-brand-ink/10">
          {service.challenges.map((c) => (
            <div
              key={c.problem}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 py-8 lg:py-12 border-b border-brand-ink/10"
            >
              <div className="lg:col-span-5">
                <p className="font-bricolage text-xl lg:text-2xl text-brand-ink leading-snug">
                  {c.problem}
                </p>
              </div>
              <div className="lg:col-span-7">
                <p className="font-albert text-base lg:text-lg text-brand-ink-muted leading-relaxed">
                  {c.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What we deliver (light) — capability cards */}
      <section
        data-nav-bg="light"
        className="brand-section-light px-5 lg:px-10 pb-14 lg:pb-24"
      >
        <div className="border-t border-brand-ink/10 pt-16 lg:pt-24">
          <p className="brand-eyebrow text-brand-ink-muted mb-6 lg:mb-8">
            <Scramble>Capabilities</Scramble>
          </p>
          <h2 className="font-bricolage text-brand-display text-brand-ink mb-12 lg:mb-16 max-w-[18ch]">
            <StaggerText>{service.deliverTitle}</StaggerText>
          </h2>

          <div className="border-t border-brand-ink/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-ink/10">
              {service.deliverables.map((d) => (
                <div key={d.title} className="bg-brand-bone px-0 py-6 sm:p-6 lg:p-8 flex flex-col min-h-[200px]">
                  <h3 className="font-bricolage text-xl lg:text-2xl text-brand-ink leading-tight">
                    {d.title}
                  </h3>
                  <p className="mt-3 font-albert text-sm lg:text-base text-brand-ink-muted leading-relaxed">
                    {d.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CurvedDivider fromColor="bone" className="-mt-px relative z-10" />

      {/* Benefits (dark) — differentiators with ✻ accent */}
      <section className="relative bg-brand-ink text-brand-bone px-5 lg:px-10 pt-14 pb-14 lg:pt-24 lg:pb-24">
        <p className="brand-eyebrow text-brand-bone-muted mb-6 lg:mb-8">
          <Scramble>Why us</Scramble>
        </p>
        <h2 className="font-bricolage text-brand-display text-brand-bone mb-12 lg:mb-16 max-w-[18ch]">
          <StaggerText>{service.benefitsTitle}</StaggerText>
        </h2>

        <div className="border-t border-brand-bone/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-bone/10">
            {service.benefits.map((b) => (
              <article
                key={b.title}
                className="bg-brand-ink px-0 py-7 sm:p-7 lg:p-9 flex flex-col min-h-[260px]"
              >
                <span aria-hidden="true" className="text-brand-purple text-3xl leading-none">
                  ✻
                </span>
                <div className="mt-auto pt-12">
                  <h3 className="font-bricolage text-xl lg:text-2xl text-brand-bone leading-tight">
                    {b.title}
                  </h3>
                  <p className="mt-3 font-albert text-sm lg:text-base text-brand-bone-muted leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      {/* Related services (light) */}
      {related.length > 0 && (
        <section
          data-nav-bg="light"
          className="brand-section-light px-5 lg:px-10 pt-14 pb-14 lg:pt-24 lg:pb-24"
        >
          <p className="brand-eyebrow text-brand-ink-muted mb-8">Looking for more?</p>
          <div className="border-t border-brand-ink/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-ink/10">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="group bg-brand-bone px-0 py-6 sm:p-6 lg:p-8 flex flex-col sm:min-h-[220px] transition-colors duration-200 ease-brand-out hover:bg-brand-ink/[0.02]"
                >
                  <span className="brand-eyebrow text-brand-ink-soft">{r.category}</span>
                  <h3 className="mt-4 font-bricolage text-xl lg:text-2xl text-brand-ink leading-tight group-hover:text-brand-purple transition-colors duration-200 ease-brand-out">
                    {r.title}
                  </h3>
                  <span className="pt-4 sm:mt-auto sm:pt-8 inline-flex items-center gap-2 brand-eyebrow text-brand-ink">
                    Explore
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
