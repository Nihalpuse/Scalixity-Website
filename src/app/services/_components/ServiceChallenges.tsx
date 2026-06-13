"use client";

import { useEffect, useRef } from "react";
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";
import type { ServiceChallenge } from "../services-content";

// Challenges as sticky-stacking rows (same pinned scroll-fade as Problems /
// Cases). Per the reference: a big punchy heading, then each card has the
// problem on a narrow left column (small text) and the solution on a wide
// right column (large text). Text-only — no image.
const DEFAULT_TITLE = "We solve the problems that slow your product down";

export function ServiceChallenges({
  title = DEFAULT_TITLE,
  challenges,
}: {
  title?: string;
  challenges: ServiceChallenge[];
}) {
  return (
    <section
      data-nav-bg="light"
      className="brand-section-light px-5 lg:px-10 pt-14 pb-14 lg:pt-24 lg:pb-24"
    >
      <p className="brand-eyebrow text-brand-ink-muted mb-8 lg:mb-10">
        <Scramble>Challenges</Scramble>
      </p>
      <h2 className="font-bricolage text-brand-display text-brand-ink max-w-[24ch] leading-[1.05]">
        <StaggerText>{title}</StaggerText>
      </h2>

      <div className="mt-12 lg:mt-20">
        {challenges.map((c, i) => (
          <ChallengeRow
            key={c.problem}
            challenge={c}
            isLast={i === challenges.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

function ChallengeRow({
  challenge,
  isLast,
}: {
  challenge: ServiceChallenge;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Desktop-only pinned scroll-fade: the outgoing card fades as the next
    // rises over it. Last row never fades. Static + full opacity below lg /
    // for reduced motion.
    if (isLast) return;
    const el = ref.current;
    if (!el) return;

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
      const overlap = Math.max(0, elRect.bottom - nextRect.top);
      const ratio = elRect.height > 0 ? overlap / elRect.height : 0;
      // Fade the outgoing card out gradually as the next one rises over it —
      // visible throughout the overlap, not just at the very end.
      const FADE_START = 0.15;
      const FADE_END = 0.85;
      let opacity = 1;
      if (ratio > FADE_START) {
        opacity = Math.max(
          0,
          1 - (ratio - FADE_START) / (FADE_END - FADE_START)
        );
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
      className="sticky top-20 lg:top-24 max-lg:static bg-brand-bone py-10 lg:py-16 border-t border-brand-ink/10 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-start"
    >
      {/* Problem — narrow left column, smaller text */}
      <div className="lg:col-span-4">
        <p className="font-albert text-lg lg:text-2xl text-brand-ink leading-snug max-w-[20ch]">
          {challenge.problem}
        </p>
      </div>

      {/* Solution — wide right column, large text */}
      <div className="lg:col-span-7 lg:col-start-6">
        <p className="font-albert text-2xl lg:text-3xl xl:text-4xl text-brand-ink leading-snug">
          {challenge.solution}
        </p>
      </div>
    </div>
  );
}
