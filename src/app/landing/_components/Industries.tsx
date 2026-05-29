"use client";

import { useState } from "react";
import { CTAButton } from "./CTAButton";
import { Scramble } from "./Scramble";
import { StaggerText } from "./StaggerText";

const EYEBROW = "Key industries";
const TITLE = "Our areas of expertise";

type Industry = {
  key: string;
  label: string;
  title: string;
  challenges: string[];
  solutions: string[];
  ctaHref: string;
};

// Industries ported from src/app/components/success-stories. FinTech
// added for variety. Replace with deeper positioning copy when available.
const INDUSTRIES: Industry[] = [
  {
    key: "insurance",
    label: "Insurance",
    title: "AI-driven platforms for risk and claims",
    challenges: [
      "Slow claim settlement processes that frustrate customers",
      "Manual fraud detection that can't keep up with volume",
      "Legacy systems that resist integration",
    ],
    solutions: [
      "Automated claim triage that cuts settlement time in half",
      "Real-time fraud detection powered by machine learning",
      "API-first integrations with existing core systems",
    ],
    ctaHref: "/work",
  },
  {
    key: "healthcare",
    label: "Healthcare",
    title: "HIPAA-compliant platforms for clinical workflows",
    challenges: [
      "Document review bottlenecks that delay patient care",
      "Compliance overhead that slows innovation",
      "Fragmented EHR data that's hard to act on",
    ],
    solutions: [
      "OCR-powered automation for clinical documentation",
      "HIPAA-first architectures baked into every feature",
      "Unified data pipelines that surface insights, not just records",
    ],
    ctaHref: "/work",
  },
  {
    key: "manufacturing",
    label: "Manufacturing",
    title: "Engineered platforms for production at scale",
    challenges: [
      "Slow CAD-to-BOM estimation that bottlenecks bids",
      "Quality control that depends on manual inspection",
      "Disconnected shop-floor data with no central view",
    ],
    solutions: [
      "Automated BOM extraction from CAD files in minutes",
      "Computer-vision quality checks that scale beyond humans",
      "Real-time production dashboards for plant-level decisions",
    ],
    ctaHref: "/work",
  },
  {
    key: "fintech",
    label: "Fintech",
    title: "Trustworthy platforms for moving money",
    challenges: [
      "Building user trust around money and identity",
      "Meeting KYC and AML rules without killing conversion",
      "Handling international payments and currencies",
    ],
    solutions: [
      "Transparency-first UX that surfaces fees and timelines",
      "Progressive verification that minimizes drop-off",
      "Multi-currency UX and locale-aware flows",
    ],
    ctaHref: "/work",
  },
];

export function Industries() {
  const [activeKey, setActiveKey] = useState(INDUSTRIES[0].key);
  const active =
    INDUSTRIES.find((i) => i.key === activeKey) ?? INDUSTRIES[0];

  return (
    <section
      data-nav-bg="light"
      className="brand-section-light px-5 lg:px-10 pt-20 pb-24 lg:pt-32 lg:pb-32"
    >
      <p className="brand-eyebrow text-brand-ink-muted mb-8">
        <Scramble>{EYEBROW}</Scramble>
      </p>

      <h2 className="font-bricolage text-brand-display text-brand-ink mb-10 lg:mb-12">
        <StaggerText>{TITLE}</StaggerText>
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-12 lg:mb-16">
        {INDUSTRIES.map((i) => {
          const isActive = i.key === activeKey;
          return (
            <button
              key={i.key}
              type="button"
              onClick={() => setActiveKey(i.key)}
              className={`px-6 py-3 rounded-md text-xs lg:text-sm font-semibold tracking-[0.14em] uppercase transition-colors duration-300 ease-brand-out ${
                isActive
                  ? "bg-brand-ink text-brand-bone"
                  : "bg-transparent text-brand-ink hover:bg-brand-ink/5"
              }`}
            >
              {i.label}
            </button>
          );
        })}
      </div>

      {/* Active tab content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Industry screenshot placeholder */}
        <div className="lg:col-span-6">
          <div className="aspect-[5/4] rounded-2xl overflow-hidden bg-gradient-to-br from-stone-200 via-stone-300 to-stone-500 relative">
            <div className="absolute inset-0 flex items-center justify-center font-bricolage text-2xl uppercase tracking-[0.18em] text-brand-ink/40">
              {active.label}
            </div>
          </div>
        </div>

        {/* Right: title + challenges/solutions + CTA */}
        <div className="lg:col-span-6 flex flex-col gap-8 lg:gap-10">
          <h3 className="font-bricolage text-2xl lg:text-3xl xl:text-4xl text-brand-ink leading-tight max-w-[18ch]">
            {active.title}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
            <div>
              <p className="brand-eyebrow text-brand-ink-muted mb-4">
                Challenges:
              </p>
              <ul className="space-y-3">
                {active.challenges.map((c) => (
                  <BulletItem key={c}>{c}</BulletItem>
                ))}
              </ul>
            </div>

            <div>
              <p className="brand-eyebrow text-brand-ink-muted mb-4">
                How we solve them
              </p>
              <ul className="space-y-3">
                {active.solutions.map((s) => (
                  <BulletItem key={s}>{s}</BulletItem>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <CTAButton href={active.ctaHref} variant="primary" onLight>
              Explore
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 font-albert text-sm lg:text-base text-brand-ink leading-snug">
      <span aria-hidden="true" className="text-brand-purple mt-[2px] shrink-0">
        ▸
      </span>
      <span>{children}</span>
    </li>
  );
}
