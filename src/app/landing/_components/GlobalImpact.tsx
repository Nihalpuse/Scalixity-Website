// Section ported from src/app/components/About-us/globalimpact on the
// existing Scalixity landing. Same numbers, same description, same
// count-up animation pattern — re-themed for the new bone/ink/purple
// design system.

import { Scramble } from "./Scramble";
import { StaggerText } from "./StaggerText";
import { AnimatedNumber } from "./AnimatedNumber";

const EYEBROW = "Scalixity at a glance";
const TITLE = "Global impact. Tangible results.";
const DESCRIPTION =
  "We are a collective of thinkers, makers, and innovators dedicated to solving the toughest challenges through artificial intelligence and machine learning.";

const STATS: { value: string; label: string }[] = [
  { value: "10+", label: "Successful projects delivered" },
  { value: "8+", label: "Active clients across different industries" },
  { value: "5+", label: "Industries served" },
  { value: "1+", label: "Shipping scalable digital solutions" },
];

export function GlobalImpact() {
  return (
    <section
      data-nav-bg="light"
      className="brand-section-light px-5 lg:px-10 pt-14 pb-14 lg:pt-24 lg:pb-24"
    >
      {/* Heading block — centered to match the original GlobalImpact's
          centered layout. */}
      <div className="max-w-6xl mx-auto text-center">
        <p className="brand-eyebrow text-brand-ink-muted mb-6">
          <Scramble>{EYEBROW}</Scramble>
        </p>
        <h2 className="font-bricolage text-brand-display text-brand-ink mb-8">
          <StaggerText>{TITLE}</StaggerText>
        </h2>
        <p className="font-albert text-brand-body-lg text-brand-ink-muted max-w-2xl mx-auto">
          {DESCRIPTION}
        </p>
      </div>

      {/* Stats grid — top hairline + bottom hairline + the gap-px reveal
          pattern in the middle for between-cell dividers. Same trick as
          ClientWins; works automatically across the 2-col / 4-col
          responsive switch. */}
      <div className="mt-16 lg:mt-24 border-y border-brand-ink/10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-brand-ink/10">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-brand-bone py-12 lg:py-16 px-4 lg:px-6 flex flex-col items-center text-center"
            >
              <div className="font-bricolage text-5xl lg:text-7xl text-brand-purple leading-none">
                <AnimatedNumber value={stat.value} />
              </div>
              <p className="mt-4 lg:mt-6 font-albert text-[11px] lg:text-xs uppercase tracking-[0.12em] text-brand-ink-muted font-semibold max-w-[18ch]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
