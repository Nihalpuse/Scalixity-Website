"use client";

import { useState } from "react";
import { Target, Scale, Leaf, Heart, type LucideIcon } from "lucide-react";
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";

const EYEBROW = "What we stand for";
const TITLE = "Our core values";
const DESCRIPTION =
  "Our core values guide how we work, collaborate, and deliver. They define our commitment to quality, innovation, and building solutions that truly make a difference for our clients.";

// Values preserved from the original About-us core values (corevalue.tsx).
const VALUES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Target,
    title: "Customer-centric delivery",
    description:
      "We build every solution around the client's goals, ensuring clarity, transparency, and measurable impact at every step.",
  },
  {
    icon: Scale,
    title: "Quality & reliability",
    description:
      "From architecture to deployment, we focus on stable, scalable, and maintainable products that stand the test of time.",
  },
  {
    icon: Leaf,
    title: "Innovation with purpose",
    description:
      "We adopt modern technologies and AI-driven approaches that solve real problems — not just add complexity.",
  },
  {
    icon: Heart,
    title: "Ownership & accountability",
    description:
      "We treat every project as our own, taking full responsibility for outcomes, timelines, and long-term support.",
  },
];

export function Values() {
  // Drives the lg accordion. On mobile every panel is expanded regardless.
  const [active, setActive] = useState(0);

  return (
    <section
      data-nav-bg="light"
      className="brand-section-light px-5 lg:px-10 pt-14 pb-14 lg:pt-24 lg:pb-24"
    >
      <p className="brand-eyebrow text-brand-ink-muted mb-6 lg:mb-8">
        <Scramble>{EYEBROW}</Scramble>
      </p>

      <h2 className="font-bricolage text-brand-display text-brand-ink mb-6 lg:mb-8 max-w-[18ch]">
        <StaggerText>{TITLE}</StaggerText>
      </h2>

      <p className="font-albert text-brand-body-lg text-brand-ink-muted max-w-2xl mb-12 lg:mb-16">
        {DESCRIPTION}
      </p>

      {/* Hover-expand accordion. Row on lg, stacked cards on mobile. */}
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 lg:h-[360px]">
        {VALUES.map((value, i) => {
          const Icon = value.icon;
          const isActive = i === active;
          return (
            <div
              key={value.title}
              tabIndex={0}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              aria-expanded={isActive}
              className={`group relative overflow-hidden rounded-2xl p-6 lg:p-8 outline-none cursor-default transition-all duration-500 ease-brand-out bg-brand-ink/[0.04] ${
                isActive
                  ? "lg:flex-[2.6] lg:bg-brand-ink"
                  : "lg:flex-1 lg:hover:bg-brand-ink/[0.06]"
              }`}
            >
              {/* Index numeral */}
              <span
                className={`absolute top-6 right-6 font-bricolage text-sm tabular-nums text-brand-ink-soft ${
                  isActive ? "lg:text-brand-bone-soft" : ""
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon — flips to bone on the active (dark) panel for contrast. */}
              <span
                className={`grid h-14 w-14 place-items-center rounded-2xl bg-brand-purple/10 text-brand-purple ${
                  isActive ? "lg:bg-brand-bone/10 lg:text-brand-bone" : ""
                }`}
              >
                <Icon className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
              </span>

              <h3
                className={`font-bricolage text-2xl leading-tight mt-6 text-brand-ink ${
                  isActive ? "lg:text-brand-bone" : ""
                }`}
              >
                {value.title}
              </h3>

              {/* Description — always shown on mobile; on lg only for the
                  active (expanded) panel. */}
              <p
                className={`font-albert text-brand-body leading-relaxed mt-4 max-w-md text-brand-ink-muted block ${
                  isActive ? "lg:block lg:text-brand-bone-muted" : "lg:hidden"
                }`}
              >
                {value.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
