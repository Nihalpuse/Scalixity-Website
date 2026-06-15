"use client";

import { type ComponentType, useRef, useState } from "react";
import Link from "next/link";
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";
import { LazyVideo } from "@/src/app/landing/_components/LazyVideo";
import { usePrefersReducedMotion } from "@/src/app/landing/_components/useMobileEnv";

type Industry = {
  name: string;
  tagline: string;
  Icon: ComponentType<{ className?: string }>;
  link: string;
  video: string;
};

// Mirrors the PrimaryNav Industries dropdown — the four migrated industry
// pages. Clips reuse the per-industry showreels from the landing page (posters
// resolve automatically from the matching .jpg next to each .mp4).
const INDUSTRIES: Industry[] = [
  {
    name: "SaaS",
    tagline: "AI features & scalable product engineering",
    Icon: SaasIcon,
    link: "/industries/saas",
    video:
      "/landing/industries/tinyvid_optimized_1_c3e89d72e9ca2837d9e85643956c8544.mp4",
  },
  {
    name: "Healthcare",
    tagline: "AI for diagnostics, records & clinical workflows",
    Icon: HealthcareIcon,
    link: "/industries/healthcare",
    video:
      "/landing/industries/tinyvid_optimized_2_original-7d5a927fb8e1aed94b2f0dadb537fe63.mp4",
  },
  {
    name: "Fintech",
    tagline: "Secure, compliant intelligence for financial products",
    Icon: FintechIcon,
    link: "/industries/fintech",
    video:
      "/landing/industries/tinyvid_optimized_5_original-c138f335ff5d89bfd76a54cb9b1b76f4.mp4",
  },
  {
    name: "EdTech",
    tagline: "Adaptive learning, content & student insights",
    Icon: EdtechIcon,
    link: "/industries/edtech",
    video:
      "/landing/industries/tinyvid_optimized_3_original-73b35d49f86d187eea5f51868f628bd4.mp4",
  },
];

export function IndustriesShowcase() {
  const listRef = useRef<HTMLDivElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const reduced = usePrefersReducedMotion();

  // Move the floating media via a direct style write (not React state) so the
  // rows don't re-render on every mousemove.
  const onMove = (e: React.MouseEvent) => {
    const wrap = listRef.current;
    const card = floatRef.current;
    if (!wrap || !card) return;
    const rect = wrap.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.transform = `translate(${x + 32}px, ${y - 96}px)`;
  };

  return (
    <section
      data-nav-bg="light"
      className="brand-section-light pt-14 pb-14 lg:pt-24 lg:pb-24 overflow-hidden"
    >
      {/* Heading (in the gutter) */}
      <div className="px-5 lg:px-10">
        <p className="brand-eyebrow text-brand-ink-muted mb-6 lg:mb-8">
          <Scramble>Sectors</Scramble>
        </p>
        <h2 className="font-bricolage text-brand-display text-brand-ink max-w-[20ch]">
          <StaggerText>Deep expertise, by industry</StaggerText>
        </h2>
      </div>

      {/* Desktop: editorial index with cursor-following media reveal. */}
      <div className="max-lg:hidden mt-14 lg:mt-20">
        <div
          ref={listRef}
          onMouseMove={reduced ? undefined : onMove}
          onMouseLeave={() => setHovered(null)}
          className="relative border-t border-brand-ink/10"
        >
          {INDUSTRIES.map((industry, i) => {
            const isActive = hovered === i;
            const dimmed = hovered !== null && hovered !== i;
            return (
              <Link
                key={industry.name}
                href={industry.link}
                onMouseEnter={() => setHovered(i)}
                aria-label={`${industry.name} — ${industry.tagline}`}
                className={`group relative grid grid-cols-12 items-center gap-6 border-b border-brand-ink/10 px-5 lg:px-10 py-9 xl:py-11 transition-[opacity,background-color] duration-300 ease-brand-out ${
                  dimmed ? "opacity-40" : "opacity-100"
                } ${isActive ? "bg-brand-ink/[0.015]" : ""}`}
              >
                {/* Index number */}
                <span
                  className={`col-span-2 font-bricolage text-4xl xl:text-5xl tabular-nums leading-none transition-colors duration-300 ease-brand-out ${
                    isActive ? "text-brand-purple" : "text-brand-ink/20"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Name (the star) */}
                <div className="col-span-7">
                  <h3
                    className={`font-bricolage text-5xl xl:text-7xl leading-[0.95] tracking-[-0.02em] transition-[color,transform] duration-300 ease-brand-out ${
                      isActive
                        ? "text-brand-purple translate-x-2"
                        : "text-brand-ink"
                    }`}
                  >
                    {industry.name}
                  </h3>
                </div>

                {/* Tagline + circular arrow */}
                <div className="col-span-3 flex items-center justify-end gap-6">
                  <p className="max-w-[18ch] text-right font-albert text-sm text-brand-ink-muted leading-relaxed">
                    {industry.tagline}
                  </p>
                  <span
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-full border transition-colors duration-300 ease-brand-out ${
                      isActive
                        ? "border-brand-purple bg-brand-purple text-brand-bone"
                        : "border-brand-ink/15 text-brand-ink"
                    }`}
                  >
                    <svg
                      viewBox="0 0 18 12"
                      aria-hidden="true"
                      className="h-3 w-[18px] fill-none stroke-current transition-transform duration-300 ease-brand-out group-hover:translate-x-1"
                      strokeWidth="1.6"
                    >
                      <path
                        d="M1 6h16M12 1l5 5-5 5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}

          {/* Floating media that trails the cursor (desktop, motion only). */}
          {!reduced && (
            <div
              ref={floatRef}
              aria-hidden="true"
              className={`pointer-events-none absolute left-0 top-0 z-10 w-72 overflow-hidden rounded-2xl ring-1 ring-brand-ink/10 shadow-[0_30px_60px_-24px_rgba(8,13,16,0.45)] transition-[opacity,transform] duration-500 ease-brand-out will-change-transform ${
                hovered !== null ? "opacity-100" : "opacity-0 scale-90"
              }`}
            >
              <div className="relative aspect-[16/10] bg-brand-ink">
                {hovered !== null && (
                  <video
                    key={hovered}
                    src={INDUSTRIES[hovered].video}
                    poster={INDUSTRIES[hovered].video.replace(/\.\w+$/, ".jpg")}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile / tablet: rich cards with in-view auto-playing clips. */}
      <div className="lg:hidden mt-10 px-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {INDUSTRIES.map((industry, i) => (
          <Link
            key={industry.name}
            href={industry.link}
            className="group flex flex-col overflow-hidden rounded-2xl border border-brand-ink/10 bg-brand-bone transition-colors duration-300 ease-brand-out hover:border-brand-purple/40"
          >
            <div className="relative aspect-[16/10] bg-brand-ink">
              <LazyVideo
                src={industry.video}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span className="absolute left-4 top-4 font-bricolage text-sm text-brand-bone/80 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-brand-bone/90 text-brand-purple">
                <industry.Icon className="h-5 w-5" />
              </span>
            </div>
            <div className="flex items-start justify-between gap-4 p-6">
              <div>
                <h3 className="font-bricolage text-2xl text-brand-ink leading-tight">
                  {industry.name}
                </h3>
                <p className="mt-2 font-albert text-sm text-brand-ink-muted leading-relaxed">
                  {industry.tagline}
                </p>
              </div>
              <span className="mt-1 shrink-0 text-brand-purple">
                <svg
                  viewBox="0 0 18 12"
                  aria-hidden="true"
                  className="h-3 w-[18px] fill-none stroke-current"
                  strokeWidth="1.6"
                >
                  <path
                    d="M1 6h16M12 1l5 5-5 5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// --- Industry line icons (24×24, stroke = currentColor) -------------------
const ICON_SVG = "h-7 w-7 fill-none stroke-current";

function HealthcareIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`${ICON_SVG} ${className ?? ""}`} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.5 4.04 3 5.5l7 7Z" />
      <path d="M3.5 12H8l1-2 2 5 2-6 1.5 3h4" />
    </svg>
  );
}

function FintechIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`${ICON_SVG} ${className ?? ""}`} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5 12 4l9 5.5" />
      <path d="M4 9.5h16" />
      <path d="M6 9.5V18M10 9.5V18M14 9.5V18M18 9.5V18" />
      <path d="M3 21h18" />
    </svg>
  );
}

function SaasIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`${ICON_SVG} ${className ?? ""}`} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
    </svg>
  );
}

function EdtechIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`${ICON_SVG} ${className ?? ""}`} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1 2.5 2.5 6 2.5s6-1.5 6-2.5v-5" />
      <path d="M22 10v6" />
    </svg>
  );
}
