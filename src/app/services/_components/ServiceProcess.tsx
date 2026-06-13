"use client";

import { useEffect, useRef } from "react";
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";
import type { ProcessStep } from "../services-content";

// Process section: a big heading + caption, then sticky-stacking rows (same
// pinned scroll-fade as Challenges / Cases). Each row has a left label + number
// and a right column with the step title, description, "Key steps" list, and
// "Deliverables" tag chips.
const DEFAULT_EYEBROW = "Our process";
const DEFAULT_TITLE = "How we structure the work";

export function ServiceProcess({
  eyebrow = DEFAULT_EYEBROW,
  title = DEFAULT_TITLE,
  steps,
}: {
  eyebrow?: string;
  title?: string;
  steps: ProcessStep[];
}) {
  return (
    <section
      data-nav-bg="light"
      className="brand-section-light px-5 lg:px-10 pt-14 pb-14 lg:pt-24 lg:pb-24"
    >
      <p className="brand-eyebrow text-brand-ink-muted mb-8 lg:mb-10">
        <Scramble>{eyebrow}</Scramble>
      </p>
      <h2 className="font-bricolage text-brand-display text-brand-ink max-w-[28ch] leading-[1.05]">
        <StaggerText>{title}</StaggerText>
      </h2>

      <div className="mt-12 lg:mt-24">
        {steps.map((s, i) => (
          <ProcessRow
            key={s.label}
            step={s}
            index={i}
            isLast={i === steps.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

function ProcessRow({
  step,
  index,
  isLast,
}: {
  step: ProcessStep;
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Desktop-only pinned scroll-fade: the outgoing row fades as the next rises
    // over it. Last row never fades. Static + full opacity below lg / reduced.
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
      let opacity = 1;
      if (ratio > 0.9) opacity = Math.max(0, 1 - (ratio - 0.9) / 0.1);
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
      className="sticky top-20 lg:top-24 max-lg:static bg-brand-bone py-10 lg:py-16 border-t border-brand-ink/10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12"
    >
      {/* Left: label + number (number pinned to the bottom on desktop) */}
      <div className="lg:col-span-4 flex flex-col">
        <p className="font-albert text-lg lg:text-xl text-brand-ink">
          {step.label}
        </p>
        <span className="max-lg:hidden mt-auto font-albert text-lg lg:text-xl text-brand-ink-soft">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Right: title, description, key steps, deliverables */}
      <div className="lg:col-span-7 lg:col-start-6">
        <h3 className="font-bricolage text-2xl lg:text-3xl text-brand-ink leading-tight">
          {step.title}
        </h3>
        <p className="mt-4 font-albert text-base lg:text-lg text-brand-ink-muted leading-relaxed">
          {step.description}
        </p>

        {step.keySteps && step.keySteps.length > 0 && (
          <div className="mt-10 lg:mt-12">
            <p className="brand-eyebrow text-brand-ink-muted mb-3">Key steps:</p>
            <div className="h-px bg-brand-ink/10" />
            <ul className="mt-4 flex flex-col gap-2.5">
              {step.keySteps.map((k) => (
                <li
                  key={k}
                  className="flex items-start gap-3 font-albert text-base text-brand-ink-muted leading-relaxed"
                >
                  <span aria-hidden="true" className="mt-1 leading-none text-brand-purple">
                    ✳
                  </span>
                  <span>{k}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {step.deliverables && step.deliverables.length > 0 && (
          <div className="mt-10 lg:mt-12">
            <p className="brand-eyebrow text-brand-ink-muted mb-3">Deliverables</p>
            <div className="h-px bg-brand-ink/10" />
            <div className="mt-4 flex flex-wrap gap-3">
              {step.deliverables.map((t) => (
                <span
                  key={t}
                  className="rounded-lg bg-brand-ink/[0.05] px-4 py-3 font-albert text-xs font-bold uppercase tracking-[0.08em] text-brand-ink"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
