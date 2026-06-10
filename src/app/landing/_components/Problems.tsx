"use client";

import { useEffect, useRef, useState } from "react";
import { CTAButton } from "./CTAButton";
import { Scramble } from "./Scramble";
import { StaggerText } from "./StaggerText";

// Adapted from src/app/components/scalixity-blends + growth-partner —
// the existing site's "you don't need a developer team, you need a
// growth engineering partner" framing.
const EYEBROW = "AI solutions for data-driven companies";
const TITLE = "Shipping AI is hard. Finding the right partner shouldn't be.";

export type Problem = {
  problem: string;
  solution: string;
  /** CTA is optional — omit both to render a solution with no button. */
  ctaLabel?: string;
  ctaHref?: string;
};

const PROBLEMS: Problem[] = [
  {
    problem:
      "Most teams hire developers expecting growth — and just get code.",
    solution:
      "We're a growth engineering partner, not just a tech team. We engineer outcomes: AI-first systems, consulting-level thinking, and speed-focused execution that moves the business — not features for features' sake.",
    ctaLabel: "Extend my team",
    ctaHref: "#services",
  },
  {
    problem:
      "Your AI prototype works in a demo but breaks at scale?",
    solution:
      "We rebuild AI systems for production — proper infra, monitoring, cost controls, and the team to keep it running. From spike to scale-out, we own the outcome end to end.",
    ctaLabel: "Scale my product",
    ctaHref: "#services",
  },
  {
    problem:
      "Big AI idea but no MVP yet?",
    solution:
      "Our discovery process helps you focus on what matters most, and with pre-built ML frameworks we can speed up MVP development by 50%. Ship faster without sacrificing quality.",
    ctaLabel: "Launch my MVP",
    ctaHref: "#services",
  },
];

export function Problems({
  eyebrow = EYEBROW,
  title = TITLE,
  description,
  rows = PROBLEMS,
  stickyHeading = false,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  rows?: Problem[];
  /** When true, the heading pins at the top (desktop) and the rows stack just
   *  below it instead of at the top of the viewport. Opt-in so the default
   *  landing layout is unchanged. */
  stickyHeading?: boolean;
} = {}) {
  // Measure the heading so the rows can pin directly beneath the pinned
  // heading regardless of how the title wraps. Desktop-only effect.
  const headingRef = useRef<HTMLDivElement>(null);
  const [headingH, setHeadingH] = useState(0);

  useEffect(() => {
    if (!stickyHeading) return;
    const el = headingRef.current;
    if (!el) return;
    const measure = () => setHeadingH(el.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [stickyHeading]);

  // Rows pin below the heading: 6rem (matches the heading's own lg:top-24 pin)
  // + measured heading height + a small gap.
  const rowTop = stickyHeading
    ? `calc(6rem + ${headingH}px + 1.5rem)`
    : undefined;

  return (
    <section
      data-nav-bg="light"
      className="brand-section-light px-5 lg:px-10 pt-14 pb-14 lg:pt-24 lg:pb-24"
    >
      <div
        ref={headingRef}
        className={
          stickyHeading ? "lg:sticky lg:top-24 lg:z-20 bg-brand-bone" : undefined
        }
      >
        <p className="brand-eyebrow text-brand-ink-muted mb-8">
          <Scramble>{eyebrow}</Scramble>
        </p>

        <h2 className="font-bricolage text-brand-display text-brand-ink max-w-[22ch]">
          <StaggerText>{title}</StaggerText>
        </h2>

        {description && (
          <p className="mt-8 lg:mt-12 font-albert text-brand-body-lg text-brand-ink-muted max-w-2xl">
            {description}
          </p>
        )}
      </div>

      <div className="mt-20 lg:mt-28">
        {rows.map((row, i) => (
          <ProblemRow
            key={row.problem}
            row={row}
            isLast={i === rows.length - 1}
            rowTop={rowTop}
          />
        ))}
      </div>
    </section>
  );
}

function ProblemRow({
  row,
  isLast,
  rowTop,
}: {
  row: Problem;
  isLast: boolean;
  /** Inline sticky `top` (desktop). When set, overrides the default lg:top-24
   *  so the row pins below a sticky heading. */
  rowTop?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Last row has no follower — it never fades.
    if (isLast) return;

    const el = ref.current;
    if (!el) return;

    // The pinned scroll-fade is a desktop-only effect. Below lg the rows
    // render in normal static flow (max-lg:static), and reduced-motion users
    // opt out entirely — reset opacity and bail in both cases.
    const allowed =
      window.matchMedia("(min-width: 1024px)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!allowed) {
      el.style.opacity = "1";
      return;
    }

    const next = el.nextElementSibling as HTMLElement | null;
    if (!next) return;

    const update = () => {
      const elRect = el.getBoundingClientRect();
      const nextRect = next.getBoundingClientRect();

      // How much of `el` (in viewport pixels) is currently covered by `next`,
      // assuming `next` lives below `el` in DOM order and rises over it as
      // the user scrolls. Positive overlap when next.top < el.bottom.
      const overlap = Math.max(0, elRect.bottom - nextRect.top);
      const ratio = elRect.height > 0 ? overlap / elRect.height : 0;

      // Stay fully visible up to 90% overlap, then linearly fade to 0 over
      // the last 10% of overlap so the trailing edge of `el` doesn't peek
      // out from behind `next`.
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
      style={rowTop ? { top: rowTop } : undefined}
      className="sticky top-20 lg:top-24 max-lg:static bg-brand-bone py-12 lg:py-16 border-t border-brand-ink/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
    >
      {/* Problem statement (narrow, left) */}
      <div className="lg:col-span-4">
        <p className="font-albert text-lg lg:text-xl text-brand-ink leading-relaxed">
          {row.problem}
        </p>
      </div>

      {/* Solution + CTA (wide, right) */}
      <div className="lg:col-span-8">
        <p className="font-albert text-xl lg:text-2xl text-brand-ink leading-relaxed">
          {row.solution}
        </p>
        {row.ctaLabel && row.ctaHref && (
          <div className="mt-10">
            <CTAButton href={row.ctaHref} variant="primary" onLight>
              {row.ctaLabel}
            </CTAButton>
          </div>
        )}
      </div>
    </div>
  );
}
