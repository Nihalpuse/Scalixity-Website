"use client";

import { useEffect, useRef } from "react";
import { CTAButton } from "./CTAButton";

// Ported from src/app/components/success-stories. Project metadata
// (tags, techStack, timeline) is plausible-but-placeholder — replace with
// real case-study data when available.
const INTRO = {
  eyebrow: "Featured cases",
  title:
    "Discover how we're driving change through innovative AI projects and measurable outcomes",
};

type CaseStudy = {
  slug: string;
  tags: string[];
  title: string;
  client: string;
  region: string;
  flag: string;
  techStack: string;
  timeline: string;
  results: string[];
  ctaHref: string;
};

const CASES: CaseStudy[] = [
  {
    slug: "insurance",
    tags: ["AI", "AUTOMATION", "INSURANCE"],
    title:
      "AI-powered claim settlement for a leading insurance provider",
    client: "Insurance",
    region: "India",
    flag: "🇮🇳",
    techStack: "Python, TensorFlow, AWS",
    timeline: "8 months",
    results: [
      "40% reduced claim settlement time",
      "Automated document review pipeline",
      "Higher customer satisfaction scores",
    ],
    ctaHref: "/work",
  },
  {
    slug: "healthcare",
    tags: ["AI", "OCR", "HEALTHCARE"],
    title:
      "Medical claim accuracy and automation for a healthcare network",
    client: "Healthcare",
    region: "USA",
    flag: "🇺🇸",
    techStack: "Python, OCR, AWS",
    timeline: "10 months",
    results: [
      "95% accuracy in medical claims processing",
      "70% reduction in manual review effort",
      "HIPAA-compliant pipeline end to end",
    ],
    ctaHref: "/work",
  },
  {
    slug: "manufacturing",
    tags: ["AI", "COMPUTER VISION", "MANUFACTURING"],
    title:
      "CAD-to-BOM automation for a global manufacturing leader",
    client: "Manufacturing",
    region: "Germany",
    flag: "🇩🇪",
    techStack: "Python, Computer Vision, AWS",
    timeline: "6 months",
    results: [
      "70% faster CAD-to-BOM estimates",
      "Multi-million-dollar annual cost savings",
      "Scalable engineering estimation pipeline",
    ],
    ctaHref: "/work",
  },
];

export function Cases() {
  return (
    <section
      data-nav-bg="light"
      className="brand-section-light px-5 lg:px-10 pt-20 pb-24 lg:pt-32 lg:pb-32"
    >
      <p className="brand-eyebrow text-brand-ink-muted mb-8">{INTRO.eyebrow}</p>

      <h2 className="font-bricolage text-brand-display text-brand-ink max-w-[34ch]">
        {INTRO.title}
      </h2>

      <div className="mt-16 lg:mt-24">
        {CASES.map((c, i) => (
          <CaseCard
            key={c.slug}
            data={c}
            isLast={i === CASES.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

function CaseCard({ data, isLast }: { data: CaseStudy; isLast: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLast) return;
    const el = ref.current;
    if (!el) return;
    const next = el.nextElementSibling as HTMLElement | null;
    if (!next) return;

    const update = () => {
      const elRect = el.getBoundingClientRect();
      const nextRect = next.getBoundingClientRect();
      const overlap = Math.max(0, elRect.bottom - nextRect.top);
      const ratio = elRect.height > 0 ? overlap / elRect.height : 0;
      let opacity = 1;
      if (ratio > 0.9) {
        opacity = Math.max(0, 1 - (ratio - 0.9) / 0.1);
      }
      el.style.opacity = String(opacity);
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isLast]);

  return (
    <div
      ref={ref}
      // bg-brand-bone + rounded-t makes the card opaque so it masks the
      // previous one as it stacks; the subtle top shadow gives a visible
      // edge when the section bg is the same bone color.
      className="sticky top-20 lg:top-24 bg-brand-bone rounded-t-3xl pt-8 lg:pt-10 pb-8 lg:pb-10 shadow-[0_-8px_24px_-12px_rgba(8,13,16,0.08)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
        {/* Case image (placeholder) */}
        <div className="lg:col-span-5">
          <div className="aspect-[5/4] rounded-2xl overflow-hidden bg-gradient-to-br from-stone-300 via-stone-400 to-stone-600 relative">
            <div className="absolute inset-0 flex items-center justify-center font-bricolage text-2xl uppercase tracking-[0.18em] text-brand-bone/70">
              {data.client}
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="lg:col-span-7 flex flex-col gap-4 lg:gap-5">
          {/* Tags */}
          <p className="brand-eyebrow text-brand-ink-muted">
            {data.tags.map((t) => `#${t}`).join(" ")}
          </p>

          {/* Title */}
          <h3 className="font-bricolage text-2xl lg:text-3xl xl:text-4xl text-brand-ink leading-tight">
            {data.title}
          </h3>

          {/* Client + region pills */}
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1.5 bg-brand-ink/5 rounded-md text-[11px] uppercase tracking-[0.12em] font-semibold text-brand-ink">
              {data.client}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-ink/5 rounded-md text-[11px] uppercase tracking-[0.12em] font-semibold text-brand-ink">
              <span aria-hidden="true">{data.flag}</span>
              {data.region}
            </span>
          </div>

          {/* Tech stack + Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-brand-ink/10">
            <div>
              <p className="brand-eyebrow text-brand-ink-muted mb-2">
                Tech stack
              </p>
              <p className="font-albert text-sm lg:text-base text-brand-ink leading-snug">
                {data.techStack}
              </p>
            </div>
            <div>
              <p className="brand-eyebrow text-brand-ink-muted mb-2">
                Timeline
              </p>
              <p className="font-albert text-sm lg:text-base text-brand-ink">
                {data.timeline}
              </p>
            </div>
          </div>

          {/* Results */}
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

          {/* CTA */}
          <div className="mt-1">
            <CTAButton href={data.ctaHref} variant="primary" onLight>
              Explore
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}
