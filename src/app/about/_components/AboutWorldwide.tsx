import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";
import { WorldMap } from "./WorldMap";

// "Worldwide, where you need us" — adapted from the phenomenon locations
// section. The Phenomenon legal entities / addresses are dropped; instead we
// state Scalixity's remote-first, cross-timezone collaboration honestly.
const EYEBROW = "Worldwide, where you need us";
const TITLE =
  "Collaborating across borders to deliver seamless solutions — wherever you are";
const DESCRIPTION =
  "We're a remote-first team that works across time zones, so there's always overlap with your hours — from kickoff to launch and beyond.";

const REGIONS: { region: string; body: string }[] = [
  {
    region: "Americas",
    body: "Overlapping hours with North & South American teams for fast, same-day feedback loops.",
  },
  {
    region: "Europe, Middle East & Africa",
    body: "Daily overlap with EMEA stakeholders to keep scope, decisions, and delivery moving.",
  },
  {
    region: "Asia-Pacific",
    body: "Deep coverage across APAC time zones for always-on, follow-the-sun delivery.",
  },
];

export function AboutWorldwide() {
  return (
    <section
      data-nav-bg="light"
      className="brand-section-light px-5 lg:px-10 pt-14 pb-14 lg:pt-24 lg:pb-24"
    >
      <p className="brand-eyebrow text-brand-ink-muted mb-8">
        <Scramble>{EYEBROW}</Scramble>
      </p>
      <h2 className="font-bricolage text-brand-display text-brand-ink max-w-[22ch]">
        <StaggerText>{TITLE}</StaggerText>
      </h2>
      <p className="font-albert text-brand-body-lg text-brand-ink-muted max-w-2xl mt-8">
        {DESCRIPTION}
      </p>

      {/* World map with regional markers */}
      <div className="mt-12 lg:mt-16">
        <WorldMap />
      </div>

      <div className="mt-12 lg:mt-20 border-t border-brand-ink/10">
        {REGIONS.map((r) => (
          <div
            key={r.region}
            className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-12 py-6 lg:py-8 border-b border-brand-ink/10 last:border-b-0"
          >
            <h3 className="md:col-span-4 font-bricolage text-xl lg:text-2xl text-brand-ink">
              {r.region}
            </h3>
            <p className="md:col-span-8 font-albert text-base lg:text-lg text-brand-ink-muted leading-relaxed max-w-2xl">
              {r.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
