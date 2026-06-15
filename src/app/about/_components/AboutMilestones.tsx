"use client";

import { useEffect, useRef, useState } from "react";
import { Scramble } from "@/src/app/landing/_components/Scramble";

// "What we've gained together" → "With so much more ahead": when the section
// scrolls into view it plays a one-shot transition — the heading + narrative
// crossfade from the "so far" state to the "ahead" state while the numbers
// count up. Mirrors the phenomenon about-us odometer section.
const EYEBROW = "Scalixity in numbers";

const HEADING_THEN = "What we've built together so far";
const HEADING_AHEAD = "With so much more ahead";

const NARRATIVE_THEN =
  "We started by helping a handful of teams ship the products they needed to bring to market quickly. Many of those early clients are still with us today, as we've grown side by side.";
const NARRATIVE_AHEAD =
  "Step by step, those first projects turned into long-term collaborations — and our portfolio keeps growing across industries and continents.";

// NOTE: placeholder figures — confirm the real headcount/counts and edit here.
const STATS: { target: number; suffix: string; label: string }[] = [
  { target: 12, suffix: "+", label: "specialists on the team" },
  { target: 10, suffix: "+", label: "projects successfully delivered" },
  { target: 8, suffix: "+", label: "clients across industries" },
  { target: 5, suffix: "+", label: "industries served" },
];

const clamp = (n: number, min: number, max: number) =>
  Math.min(max, Math.max(min, n));

export function AboutMilestones() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  // Pin-and-scrub: the section is a tall wrapper with a sticky inner. While
  // the inner is pinned, progress maps to how far we've scrolled through the
  // wrapper's extra height — so the heading, narrative, and numbers transition
  // from "then" to "now" as you scroll through the pinned section.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // Travel while pinned. Finish the scrub at ~70% of that range so the
      // section dwells in its final state for a bit before unpinning.
      const scrollable = (el.offsetHeight - vh) * 0.7;
      setProgress(scrollable > 0 ? clamp(-rect.top / scrollable, 0, 1) : 0);
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    // Tall wrapper gives the scroll distance; the inner pins and scrubs.
    <section ref={ref} className="relative bg-brand-bone h-[280vh]">
      <div
        data-nav-bg="light"
        className="sticky top-0 min-h-screen flex flex-col justify-center brand-section-light px-5 lg:px-10 py-20 lg:py-24"
      >
        <p className="brand-eyebrow text-brand-ink-muted mb-8">
          <Scramble>{EYEBROW}</Scramble>
        </p>

      {/* Heading crossfade — both occupy the same grid cell so there's no
          layout shift as one fades into the other. */}
      <div className="grid">
        <h2
          style={{ opacity: 1 - progress }}
          className="col-start-1 row-start-1 font-bricolage text-brand-display text-brand-ink"
        >
          {HEADING_THEN}
        </h2>
        <h2
          style={{ opacity: progress }}
          className="col-start-1 row-start-1 font-bricolage text-brand-display text-brand-ink"
        >
          {HEADING_AHEAD}
        </h2>
      </div>

      {/* Numbers — full-bleed (negative margins cancel the section's px
          gutter); top divider + vertical dividers between cells, no bottom. */}
      <div className="mt-12 lg:mt-16 -mx-5 lg:-mx-10 border-t border-brand-ink/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-brand-ink/10">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-brand-bone py-10 lg:py-14 px-4 lg:px-6 flex flex-col items-center text-center"
            >
              <div className="font-bricolage text-5xl lg:text-7xl text-brand-ink leading-none tabular-nums">
                {Math.round(stat.target * progress)}
                <span className="text-brand-purple">{stat.suffix}</span>
              </div>
              <p className="mt-4 lg:mt-6 font-albert text-[11px] lg:text-xs uppercase tracking-[0.12em] text-brand-ink-muted font-semibold max-w-[18ch]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Narrative crossfade */}
      <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 lg:col-start-8 grid">
          <p
            style={{ opacity: 1 - progress }}
            className="col-start-1 row-start-1 font-albert text-xl lg:text-2xl text-brand-ink leading-relaxed"
          >
            {NARRATIVE_THEN}
          </p>
          <p
            style={{ opacity: progress }}
            className="col-start-1 row-start-1 font-albert text-xl lg:text-2xl text-brand-ink leading-relaxed"
          >
            {NARRATIVE_AHEAD}
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}
