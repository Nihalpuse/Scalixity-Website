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

const REGIONS: { region: string; points: string[] }[] = [
  {
    region: "Americas",
    points: [
      "Overlap with North & South America",
      "Same-day feedback loops",
      "Real-time collaboration hours",
    ],
  },
  {
    region: "Europe, Middle East & Africa",
    points: [
      "Daily overlap with EMEA hours",
      "Scope & decisions kept moving",
      "Delivery within your working day",
    ],
  },
  {
    region: "Asia-Pacific",
    points: [
      "Coverage across APAC time zones",
      "Follow-the-sun delivery",
      "Always-on project momentum",
    ],
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

      {/* Regions on the left as compact bulleted groups, world map on the
          right. On mobile the map shows first, then the groups stack beneath. */}
      <div className="mt-12 lg:mt-16 grid lg:grid-cols-12 gap-10 lg:gap-12 lg:items-center">
        <div className="lg:col-span-4 order-2 lg:order-1 flex flex-col gap-8 lg:gap-12">
          {REGIONS.map((r) => (
            <div key={r.region}>
              <h3 className="font-bricolage text-xl lg:text-2xl text-brand-ink">
                {r.region}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {r.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2.5 font-albert text-sm lg:text-base text-brand-ink-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="text-brand-purple leading-none mt-0.5"
                    >
                      ✻
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="lg:col-span-8 order-1 lg:order-2">
          <WorldMap />
        </div>
      </div>
    </section>
  );
}
