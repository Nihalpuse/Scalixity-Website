"use client";

import { useEffect, useRef, useState } from "react";
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
  /** Looping clip in /public/landing/industries shown for this tab. */
  video?: string;
};

// Industries ported from src/app/components/success-stories. FinTech
// added for variety. Replace with deeper positioning copy when available.
const INDUSTRIES: Industry[] = [
  {
    key: "saas",
    label: "SaaS",
    title: "Scalable platforms for growth-focused teams",
    challenges: [
      "High churn from poor and fragmented UX",
      "Scaling product features without compromising speed",
      "Converting freemium users into paying subscribers",
    ],
    solutions: [
      "Streamlined flows to improve activation and retention",
      "Modular UX and design systems to scale features faster",
      "Clean billing and plan management UX to improve conversion",
    ],
    ctaHref: "/work",
    video: "/landing/industries/tinyvid_optimized_1_c3e89d72e9ca2837d9e85643956c8544.mp4",
  },
  {
    key: "healthcare",
    label: "Healthcare",
    title: "HIPAA-compliant design and development for health tech products",
    challenges: [
      "UX complexity in health tracking, patient records, and telehealth",
      "Data privacy and HIPAA compliance",
      "Building trust with patients and practitioners",
    ],
    solutions: [
      "Patient-first UX that simplifies complex workflows",
      "Secure infrastructure aligned with regulatory standards",
      "Clean, professional UI that builds user trust",
    ],
    ctaHref: "/work",
    video: "/landing/industries/tinyvid_optimized_2_original-7d5a927fb8e1aed94b2f0dadb537fe63.mp4",
  },
  {
    key: "edtech",
    label: "EdTech",
    title: "Digital learning platforms that engage and scale",
    challenges: [
      "Low engagement in self-paced learning environments",
      "Accessibility compliance (ADA, WCAG)",
      "Performance under high concurrent user loads",
    ],
    solutions: [
      "Gamified UX to keep learners motivated",
      "Adaptive UI for different learning needs and devices",
      "Cloud-based, scalable architecture for education at scale",
    ],
    ctaHref: "/work",
    video: "/landing/industries/tinyvid_optimized_3_original-73b35d49f86d187eea5f51868f628bd4.mp4",
  },
  {
    key: "fintech",
    label: "Fintech",
    title: "Secure, compliant digital products for modern finance",
    challenges: [
      "KYC, AML, and global compliance requirements",
      "Drop-offs during complex onboarding and verification flows",
      "Real-time integrations with payment and exchange systems",
    ],
    solutions: [
      "Frictionless onboarding and verification UX",
      "Secure UI for transactions and money movement",
      "API-driven architecture built for performance and scale",
    ],
    ctaHref: "/work",
    video: "/landing/industries/tinyvid_optimized_5_original-c138f335ff5d89bfd76a54cb9b1b76f4.mp4",
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

      {/* Tabs — wrap on desktop; on mobile/tablet become a single
          horizontally-scrollable chip row that bleeds to the screen edges. */}
      <div className="flex flex-wrap gap-2 mb-12 lg:mb-16 max-lg:flex-nowrap max-lg:overflow-x-auto max-lg:-mx-5 max-lg:px-5 max-lg:[scrollbar-width:none] max-lg:[&::-webkit-scrollbar]:hidden">
        {INDUSTRIES.map((i) => {
          const isActive = i.key === activeKey;
          return (
            <button
              key={i.key}
              type="button"
              onClick={() => setActiveKey(i.key)}
              className={`px-6 py-3 rounded-md text-xs lg:text-sm font-semibold tracking-[0.14em] uppercase whitespace-nowrap max-lg:shrink-0 transition-colors duration-300 ease-brand-out ${
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
        {/* Industry media — keyed by tab so it re-pops when the tab changes. */}
        <div className="lg:col-span-6">
          <IndustryMedia
            key={active.key}
            video={active.video}
            label={active.label}
          />
        </div>

        {/* Right: title + challenges/solutions + CTA */}
        <div className="lg:col-span-6 flex flex-col gap-8 lg:gap-10">
          <h3 className="font-bricolage text-2xl lg:text-3xl xl:text-4xl text-brand-ink leading-tight max-w-[18ch]">
            {active.title}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-0">
            <div>
              <p className="brand-eyebrow text-brand-ink-muted sm:pr-8 lg:pr-10">
                Challenges:
              </p>
              {/* Horizontal divider below the heading. */}
              <ul className="space-y-3 mt-5 pt-5 border-t border-brand-ink/10 sm:pr-8 lg:pr-10">
                {active.challenges.map((c) => (
                  <BulletItem key={c}>{c}</BulletItem>
                ))}
              </ul>
            </div>

            <div>
              <p className="brand-eyebrow text-brand-ink-muted sm:pl-8 lg:pl-10">
                How we solve them
              </p>
              {/* Horizontal divider below the heading + vertical divider that
                  only spans the bullet list (so it starts below the heading). */}
              <ul className="space-y-3 mt-5 pt-5 border-t border-brand-ink/10 sm:border-l sm:border-brand-ink/10 sm:pl-8 lg:pl-10">
                {active.solutions.map((s) => (
                  <BulletItem key={s}>{s}</BulletItem>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <CTAButton
              href={active.ctaHref}
              variant="primary"
              onLight
              className="max-lg:w-full"
            >
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

// Same animation as the Cases images: pops in (scale + fade) when it enters
// the viewport, and zooms slightly on hover. Mounted with key={tab} so each
// tab switch re-runs the pop (the observer fires again on remount).
function IndustryMedia({ video, label }: { video?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Reduced-motion users skip the scale/fade pop and see the media at once.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true);
      return;
    }
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
    <div
      ref={ref}
      className={`group aspect-[5/4] rounded-2xl overflow-hidden relative bg-gradient-to-br from-stone-200 via-stone-300 to-stone-500 transition-[transform,opacity] duration-700 ease-brand-out ${
        revealed ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
    >
      {video ? (
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-brand-out group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center font-bricolage text-2xl uppercase tracking-[0.18em] text-brand-ink/40">
          {label}
        </div>
      )}
    </div>
  );
}
