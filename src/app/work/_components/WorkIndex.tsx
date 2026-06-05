"use client";

import { useEffect, useRef, useState } from "react";
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
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

// Rich case shape powering the phenomenon-style project cards. The thin
// `/api/work/projects` endpoint only returns title/description/image/
// liveUrl, so the missing fields (tags, region, tech stack, timeline,
// results) fall back to sensible defaults at map time and the curated
// FALLBACK_CASES seed the first render.
type Quote = { author: string; role?: string; text: string };

type CaseStudy = {
  slug: string;
  categories: string[];
  tags: string[];
  title: string;
  client: string;
  region: string;
  techStack: string;
  timeline: string;
  results: string[];
  ctaHref: string;
  image?: string;
  quote?: Quote;
};

type ApiProject = {
  id: number;
  title: string;
  description?: string | null;
  image?: string | null;
  liveUrl?: string | null;
  live_url?: string | null;
  category?: string | null;
  year?: string | null;
};

// Curated Scalixity cases used as the seed render and the fallback when the
// API is unreachable or empty.
const FALLBACK_CASES: CaseStudy[] = [
  {
    slug: "insurance",
    categories: ["AI", "Web apps"],
    tags: ["AI", "AUTOMATION", "INSURANCE"],
    title: "AI-powered claim settlement for a leading insurance provider",
    client: "Insurance",
    region: "India",
    techStack: "Python, TensorFlow, AWS",
    timeline: "8 months",
    results: [
      "40% reduced claim settlement time",
      "Automated document review pipeline",
      "Higher customer satisfaction scores",
    ],
    ctaHref: "/contact",
    image: "/landing/cases/Case-preview-2-2.png.webp",
  },
  {
    slug: "healthcare",
    categories: ["AI"],
    tags: ["AI", "OCR", "HEALTHCARE"],
    title: "Medical claim accuracy and automation for a healthcare network",
    client: "Healthcare",
    region: "USA",
    techStack: "Python, OCR, AWS",
    timeline: "10 months",
    results: [
      "95% accuracy in medical claims processing",
      "70% reduction in manual review effort",
      "HIPAA-compliant pipeline end to end",
    ],
    ctaHref: "/contact",
    image: "/landing/cases/Case-preview-10.png.webp",
  },
  {
    slug: "manufacturing",
    categories: ["AI", "Web apps"],
    tags: ["AI", "COMPUTER VISION", "MANUFACTURING"],
    title: "CAD-to-BOM automation for a global manufacturing leader",
    client: "Manufacturing",
    region: "Germany",
    techStack: "Python, Computer Vision, AWS",
    timeline: "6 months",
    results: [
      "70% faster CAD-to-BOM estimates",
      "Multi-million-dollar annual cost savings",
      "Scalable engineering estimation pipeline",
    ],
    ctaHref: "/contact",
    image: "/landing/cases/Case-Preview-mob.png.webp",
  },
];

const FEATURED = {
  title: "AOIN — Ecommerce platform",
  description:
    "We developed AOIN, a comprehensive e-commerce platform designed to empower merchants to easily enroll, list, and manage their products online. Built end-to-end with React on the frontend and Python on the backend — a seamless, responsive, and secure experience for merchants and customers alike.",
  demoSrc:
    "https://app.supademo.com/embed/cmielh911b27wb7b43c4nsisn?v_email=EMAIL&embed_v=2&utm_source=embed",
};

function mapApiProjectToCase(project: ApiProject): CaseStudy {
  const categories = project.category
    ? project.category
        .split(/[,/]+/)
        .map((t) => t.trim())
        .filter(Boolean)
    : [];
  return {
    slug: String(project.id),
    categories,
    tags: project.category
      ? project.category
          .split(/[,/]+/)
          .map((t) => t.trim().toUpperCase())
          .filter(Boolean)
      : [],
    title: project.title,
    client: project.title,
    region: project.year ?? "—",
    techStack: project.description ?? "—",
    timeline: project.year ?? "—",
    results: [],
    ctaHref: project.liveUrl || project.live_url || "/contact",
    image: project.image ?? undefined,
  };
}

const ALL = "All projects";

export function WorkIndex() {
  const [cases, setCases] = useState<CaseStudy[]>(FALLBACK_CASES);
  const [filter, setFilter] = useState<string>(ALL);
  const [showDemo, setShowDemo] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      try {
        const res = await fetch(`${baseURL}/api/work/projects`);
        if (!res.ok) return; // keep fallback
        const data: ApiProject[] = await res.json();
        if (cancelled) return;
        if (Array.isArray(data) && data.length > 0) {
          setCases(data.map(mapApiProjectToCase).reverse());
        }
      } catch {
        // network/JSON error — keep fallback silently
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, []);

  // Tabs: "All projects" + the unique categories actually present in the
  // data, so the filter bar never shows an empty tab.
  const categories = Array.from(
    new Set(cases.flatMap((c) => c.categories))
  ).sort();
  const filters = [ALL, ...categories];

  const visible =
    filter === ALL ? cases : cases.filter((c) => c.categories.includes(filter));

  return (
    <div className="brand-root min-h-screen">
      <PrimaryNav
        logoText={PRIMARY_NAV_LOGO}
        links={PRIMARY_NAV_LINKS}
        cta={PRIMARY_NAV_CTA}
      />

      {/* Hero + listing (light) — big "Explore our projects" headline */}
      <section
        data-nav-bg="light"
        className="brand-section-light px-5 lg:px-10 pt-36 pb-24 lg:pt-48 lg:pb-32"
      >
        <h1 className="font-bricolage text-brand-ink leading-[0.95] tracking-[-0.02em] text-[clamp(3rem,9.5vw,11rem)]">
          <StaggerText>Explore our projects</StaggerText>
        </h1>

        {/* Sticky filter bar. Pins flush to the top (top-0) so the bone fill
            covers the viewport edge — no content peeks above it — while the
            top padding drops the tabs onto the same row as the PrimaryNav's
            always-visible "Get in touch" CTA. After scroll the nav bar slides
            away and the tabs (left) + that CTA (right) read as one header.
            Right padding clears the floating CTA on desktop. */}
        {filters.length > 1 && (
          <div className="sticky top-0 z-20 -mx-5 lg:-mx-10 pl-5 lg:pl-10 pr-5 lg:pr-48 mt-16 lg:mt-28 py-4 bg-brand-bone border-b border-brand-ink/10">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide min-h-[60px]">
              {filters.map((f) => {
                const isActive = f === filter;
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFilter(f)}
                    className={`shrink-0 px-8 py-4 rounded-lg text-sm uppercase tracking-[0.12em] font-semibold transition-colors ${
                      isActive
                        ? "bg-brand-ink text-brand-bone"
                        : "bg-brand-ink/[0.05] text-brand-ink hover:bg-brand-ink/10"
                    }`}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Case cards */}
        <div className="mt-12 lg:mt-16">
          {visible.length === 0 ? (
            <p className="font-albert text-brand-body-lg text-brand-ink-muted">
              New work is on the way — check back soon.
            </p>
          ) : (
            visible.map((c, i) => (
              <CaseCard key={c.slug} data={c} first={i === 0} />
            ))
          )}
        </div>

        {/* Featured case with live demo */}
        <div id="aoin-project" className="mt-24 lg:mt-32 scroll-mt-28">
          <p className="brand-eyebrow text-brand-ink-muted mb-6">
            <Scramble>Featured case</Scramble>
          </p>
          <div className="rounded-brand-section bg-brand-ink text-brand-bone p-6 lg:p-10 overflow-hidden">
            <button
              type="button"
              onClick={() => setShowDemo(true)}
              aria-label="Open the AOIN live demo"
              className="relative block w-full aspect-video overflow-hidden rounded-2xl bg-brand-bone/[0.06]"
            >
              <iframe
                src={FEATURED.demoSrc}
                loading="lazy"
                title="AOIN live demo"
                allow="clipboard-write"
                className="pointer-events-none h-full w-full border-0"
              />
            </button>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="font-bricolage text-brand-h3 text-brand-bone leading-tight mb-6">
                  {FEATURED.title}
                </h3>
                <CTAButton onClick={() => setShowDemo(true)} variant="ghost">
                  View live demo
                </CTAButton>
              </div>
              <p className="font-albert text-brand-body-lg text-brand-bone-muted leading-relaxed">
                {FEATURED.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CurvedDivider fromColor="bone" className="-mt-px relative z-10" />

      <ContactForm />

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      <Footer />

      {/* Demo modal */}
      {showDemo && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-brand-ink/80 p-4 overflow-y-auto"
          onClick={() => setShowDemo(false)}
          role="dialog"
          aria-modal="true"
          aria-label="AOIN live demo"
        >
          <div
            className="relative w-full max-w-6xl rounded-2xl bg-brand-bone p-4 lg:p-6 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bricolage text-xl lg:text-2xl text-brand-ink">
                AOIN — live demo
              </h3>
              <button
                type="button"
                onClick={() => setShowDemo(false)}
                aria-label="Close demo"
                className="grid h-10 w-10 place-items-center rounded-brand-btn bg-brand-ink-faint text-brand-ink transition-colors hover:bg-brand-ink/10"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-none stroke-current"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="relative w-full h-[60vh] lg:h-[72vh]">
              <iframe
                src={FEATURED.demoSrc}
                loading="lazy"
                title="AOIN live demo"
                allow="clipboard-write"
                className="h-full w-full rounded-xl border-0"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Single phenomenon-style project card: image on the left, rich metadata
// (tags, title, client/region, tech stack, timeline, results, optional
// quote) on the right.
function CaseCard({ data, first }: { data: CaseStudy; first: boolean }) {
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = imageWrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      className={
        first
          ? ""
          : "mt-16 lg:mt-24 pt-16 lg:pt-24 border-t border-brand-ink/10"
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
        {/* Image */}
        <div className="lg:col-span-5">
          <div
            ref={imageWrapRef}
            className={`group aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-stone-300 via-stone-400 to-stone-600 relative transition-[transform,opacity] duration-700 ease-brand-out ${
              revealed ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            {data.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={data.image}
                alt={data.client}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-brand-out group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center font-bricolage text-2xl uppercase tracking-[0.18em] text-brand-bone/70">
                {data.client}
              </div>
            )}
          </div>
        </div>

        {/* Details */}
        <div className="lg:col-span-7 flex flex-col gap-4 lg:gap-5">
          {data.tags.length > 0 && (
            <p className="brand-eyebrow text-brand-ink-muted">
              {data.tags.map((t) => `#${t}`).join(" ")}
            </p>
          )}

          <h3 className="font-bricolage text-2xl lg:text-3xl xl:text-4xl text-brand-ink leading-tight">
            {data.title}
          </h3>

          {/* Client + region pills */}
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1.5 bg-brand-ink/5 rounded-md text-[11px] uppercase tracking-[0.12em] font-semibold text-brand-ink">
              {data.client}
            </span>
            {data.region && data.region !== "—" && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-ink/5 rounded-md text-[11px] uppercase tracking-[0.12em] font-semibold text-brand-ink">
                {data.region}
              </span>
            )}
          </div>

          {/* Tech stack + Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-brand-ink/10">
            <div>
              <p className="brand-eyebrow text-brand-ink-muted mb-2">Tech stack</p>
              <p className="font-albert text-sm lg:text-base text-brand-ink leading-snug">
                {data.techStack}
              </p>
            </div>
            <div>
              <p className="brand-eyebrow text-brand-ink-muted mb-2">Timeline</p>
              <p className="font-albert text-sm lg:text-base text-brand-ink">
                {data.timeline}
              </p>
            </div>
          </div>

          {/* Results — only when present */}
          {data.results.length > 0 && (
            <div className="pt-4 border-t border-brand-ink/10">
              <p className="brand-eyebrow text-brand-ink-muted mb-2">Results</p>
              <ul className="space-y-1.5">
                {data.results.map((r) => (
                  <li
                    key={r}
                    className="font-albert text-sm lg:text-base text-brand-ink"
                  >
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <div className="mt-1">
            <CTAButton href={data.ctaHref} variant="primary" onLight>
              Explore
            </CTAButton>
          </div>

          {/* Optional client quote */}
          {data.quote && (
            <figure className="mt-2 rounded-2xl bg-brand-ink/[0.04] p-6 lg:p-7">
              <blockquote className="font-albert text-base lg:text-lg text-brand-ink leading-relaxed">
                “{data.quote.text}”
              </blockquote>
              <figcaption className="mt-4 font-albert text-sm text-brand-ink-muted">
                <span className="font-semibold text-brand-ink">
                  {data.quote.author}
                </span>
                {data.quote.role ? ` — ${data.quote.role}` : ""}
              </figcaption>
            </figure>
          )}
        </div>
      </div>
    </article>
  );
}
