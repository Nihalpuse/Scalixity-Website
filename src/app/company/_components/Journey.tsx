"use client";

import { useEffect, useRef, useState } from "react";
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";

const EYEBROW = "Our journey";
const TITLE = "Milestones of innovation";
const DESCRIPTION =
  "From a small, ambitious team to a bootstrapped, profitable studio — the milestones that shaped how we build.";

type Milestone = { year: string; tag: string; title: string; description: string };

// Milestones preserved from the original About-us timeline (ourjourney.tsx).
const MILESTONES: Milestone[] = [
  {
    year: "2024",
    tag: "Early 2024",
    title: "The beginning",
    description:
      "Scalixity was founded as a small but ambitious team dedicated to delivering high-quality custom software, ecommerce solutions, dashboards, and AI-driven tools for early-stage businesses.",
  },
  {
    year: "2024",
    tag: "Mid 2024",
    title: "First major projects",
    description:
      "Delivered our first multi-vendor ecommerce platform, a service marketplace with real-time communication, and an internal automation product — establishing a strong foundation across ecommerce, platforms, and AI-driven tools.",
  },
  {
    year: "2024",
    tag: "Late 2024",
    title: "Expansion of services",
    description:
      "Introduced AI automation, chatbots, and mobile app development into our offerings as client needs grew.",
  },
  {
    year: "2025",
    tag: "2025 onwards",
    title: "Steady growth & strong portfolio",
    description:
      "With consistent delivery and word-of-mouth referrals, we continue to expand our project base across ecommerce, SaaS, AI, dashboards, and mobile apps — fully bootstrapped and profitable.",
  },
  {
    year: "2026",
    tag: "2026 vision",
    title: "Scaling intelligence",
    description:
      "Doubling down on agentic AI and product engineering — shipping reusable AI systems, growing our delivery pods, and partnering with ventures to take products from idea to production faster than ever.",
  },
];

export function Journey() {
  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    // Probe-line pattern (same as Process/Services): the active milestone is
    // whichever block spans a line 40% down the viewport.
    const update = () => {
      const probe = window.innerHeight * 0.4;
      let active = 0;
      for (let i = 0; i < MILESTONES.length; i++) {
        const el = refs.current[i];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.bottom < probe) {
          active = i;
        } else if (rect.top <= probe) {
          active = i;
          break;
        } else {
          break;
        }
      }
      setActiveIndex(active);
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
  }, []);

  const active = MILESTONES[activeIndex];

  return (
    <section
      data-nav-bg="light"
      className="brand-section-light px-5 lg:px-10 pt-20 pb-24 lg:pt-32 lg:pb-32"
    >
      {/* Intro */}
      <div className="mb-16 lg:mb-24">
        <p className="brand-eyebrow text-brand-ink-muted mb-6">
          <Scramble>{EYEBROW}</Scramble>
        </p>
        <h2 className="font-bricolage text-brand-display text-brand-ink mb-6 lg:mb-8 max-w-[20ch]">
          <StaggerText>{TITLE}</StaggerText>
        </h2>
        <p className="font-albert text-brand-body-lg text-brand-ink-muted max-w-2xl">
          {DESCRIPTION}
        </p>
      </div>

      {/* Sticky giant year + scrolling milestones */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <aside className="hidden lg:flex lg:col-span-5 lg:sticky lg:top-32 lg:self-start flex-col">
          <FlipYear
            value={active.year}
            className="font-bricolage text-[10rem] xl:text-[14rem] text-brand-ink leading-none tracking-tighter"
          />
          <p className="brand-eyebrow text-brand-purple mt-6">{active.tag}</p>
          <p className="brand-eyebrow text-brand-ink-muted mt-2">
            Milestone {activeIndex + 1} of {MILESTONES.length}
          </p>
        </aside>

        {/* Small trailing space (lg) so the sticky year stays pinned just
            long enough for the last milestone to rise level with it, then the
            grid releases and they scroll away together. Roughly the year's
            height minus a card's height — not a full viewport. */}
        <div className="lg:col-span-7 flex flex-col gap-12 lg:gap-20 lg:pb-24">
          {MILESTONES.map((m, i) => (
            <article
              key={m.title}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className="border-t border-brand-ink/10 pt-6 lg:pt-8"
            >
              {/* Inline year/tag — mobile only, replaces the sticky giant. */}
              <div className="lg:hidden mb-4 flex items-baseline gap-3">
                <span className="font-bricolage text-4xl text-brand-ink tracking-tight">
                  {m.year}
                </span>
                <span className="brand-eyebrow text-brand-purple">{m.tag}</span>
              </div>

              <h3 className="font-bricolage text-3xl lg:text-4xl xl:text-5xl text-brand-ink leading-tight mb-4 lg:mb-6">
                <StaggerText>{m.title}</StaggerText>
              </h3>

              <p className="font-albert text-base lg:text-lg text-brand-ink-muted leading-relaxed max-w-2xl">
                {m.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Year that briefly scrambles its digits before settling whenever `value`
 * changes — same slot-machine flicker as the Process step number, generalized
 * to the year's digit length.
 */
function FlipYear({ value, className }: { value: string; className?: string }) {
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
        const random = Array.from({ length: value.length }, () =>
          Math.floor(Math.random() * 10)
        ).join("");
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
    <span className={`inline-block tabular-nums ${className ?? ""}`}>
      {display}
    </span>
  );
}
