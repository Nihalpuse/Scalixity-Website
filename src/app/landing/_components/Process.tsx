"use client";

import { useEffect, useRef, useState } from "react";
import { Scramble } from "./Scramble";
import { StaggerText } from "./StaggerText";
import { useActiveOnScroll } from "./useActiveOnScroll";

// Step content ported from src/app/components/process on the existing
// Scalixity landing. Same 7-step methodology, refit for the new design
// system: sticky giant number on the left, scrolling step descriptions
// on the right.
const EYEBROW = "AI solutions for data-driven companies";
const TITLE = "Our process, end to end";
const DESCRIPTION =
  "A proven 7-step methodology to ship products that move real metrics — from first discovery call through ongoing optimization.";

type Step = {
  title: string;
  description: string;
  duration: string;
};

const STEPS: Step[] = [
  {
    title: "Discovery",
    description:
      "We understand your goals, requirements, KPIs, and success metrics to align on the problem and the vision before any code is written.",
    duration: "1–3 days",
  },
  {
    title: "Solution & Architecture",
    description:
      "We design the best solution and architecture for your project, considering the best practices and modern technologies for your stack.",
    duration: "2–5 days",
  },
  {
    title: "Design",
    description:
      "We create wireframes, user flows, and a clean design system to ensure a smooth and intuitive user experience.",
    duration: "3–7 days",
  },
  {
    title: "Development",
    description:
      "We build the product in iterative sprints with weekly demos and continuous integration for faster, more transparent delivery.",
    duration: "2–8 weeks",
  },
  {
    title: "Testing & QA",
    description:
      "We run functional tests, bug fixes, load testing, and security checks to ensure the product is stable and production-ready.",
    duration: "3–7 days",
  },
  {
    title: "Launch & Handover",
    description:
      "We deploy the solution to production, provide documentation, and offer training for your team to take ownership confidently.",
    duration: "1–3 days",
  },
  {
    title: "Ongoing Support & Optimization",
    description:
      "We monitor performance, fix issues, and roll out improvements or new features based on your evolving needs and real-world usage.",
    duration: "Continuous / Monthly",
  },
];

export function Process() {
  const { activeIndex, setRef } = useActiveOnScroll(STEPS.length);

  const activeNumber = String(activeIndex + 1).padStart(2, "0");

  return (
    <section
      data-nav-bg="light"
      className="brand-section-light px-5 lg:px-10 pt-20 pb-24 lg:pt-32 lg:pb-32"
    >
      {/* Intro block */}
      <div className="mb-16 lg:mb-24">
        <p className="brand-eyebrow text-brand-ink-muted mb-6">
          <Scramble>{EYEBROW}</Scramble>
        </p>
        <h2 className="font-bricolage text-brand-display text-brand-ink mb-6 lg:mb-8 max-w-[18ch]">
          <StaggerText>{TITLE}</StaggerText>
        </h2>
        <p className="font-albert text-brand-body-lg text-brand-ink-muted max-w-2xl">
          {DESCRIPTION}
        </p>
      </div>

      {/* Sticky big number + scrolling step list */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left aside: sticky giant number. Hidden on mobile — each step
            gets its own inline number badge instead. */}
        <aside className="hidden lg:flex lg:col-span-5 lg:sticky lg:top-32 lg:self-start flex-col">
          <FlipNumber
            value={activeNumber}
            className="font-bricolage text-[10rem] xl:text-[14rem] text-brand-ink leading-none tracking-tighter"
          />
          <p className="brand-eyebrow text-brand-ink-muted mt-6">
            Step {activeIndex + 1} of {STEPS.length}
          </p>
        </aside>

        {/* Right: each step is a content block. ref tracked so the
            sticky number knows which one is currently in focus. */}
        <div className="lg:col-span-7 flex flex-col gap-12 lg:gap-20">
          {STEPS.map((step, i) => (
            <article
              key={step.title}
              ref={setRef(i)}
              className="border-t border-brand-ink/10 pt-6 lg:pt-8"
            >
              {/* Inline number badge — visible on mobile only, replaces
                  the sticky giant number. */}
              <div className="lg:hidden mb-4 font-bricolage text-3xl text-brand-ink-muted tracking-tight">
                {String(i + 1).padStart(2, "0")}
              </div>

              <h3 className="font-bricolage text-3xl lg:text-4xl xl:text-5xl text-brand-ink leading-tight mb-4 lg:mb-6">
                <StaggerText>{step.title}</StaggerText>
              </h3>

              <p className="font-albert text-base lg:text-lg text-brand-ink-muted leading-relaxed mb-6 max-w-2xl">
                {step.description}
              </p>

              <span className="inline-flex items-center px-4 py-2 bg-brand-ink/5 rounded-md text-xs uppercase tracking-[0.12em] font-semibold text-brand-ink">
                {step.duration}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Two-digit number that "scrambles" through random digits for ~15
 * frames before settling on the new target value. Triggered whenever
 * the `value` prop changes — so as the user scrolls between steps, the
 * sticky number transitions with a brief slot-machine flicker rather
 * than snapping to the new digit instantly.
 */
function FlipNumber({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const [display, setDisplay] = useState(value);
  const rafRef = useRef<number | null>(null);
  const prevValueRef = useRef(value);

  useEffect(() => {
    if (value === prevValueRef.current) return;
    prevValueRef.current = value;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    let frame = 0;
    const scrambleFrames = 14;

    const tick = () => {
      if (frame < scrambleFrames) {
        const random = String(Math.floor(Math.random() * 100)).padStart(2, "0");
        setDisplay(random);
        frame++;
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(value);
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [value]);

  return (
    // tabular-nums keeps digit widths uniform during the scramble so
    // the layout doesn't wiggle as random digits cycle.
    <span className={`inline-block tabular-nums ${className ?? ""}`}>
      {display}
    </span>
  );
}
