import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";

// "The traits we work by" — trait cards with reaction pills, like the
// phenomenon reactions section. The second reaction (Phenomenon's orange
// asterisk mark) is swapped for a star.
const EYEBROW = "The traits we work by";
const TITLE = "The words our team uses to describe working here";

// Reaction emoji shown on every trait — self-hosted Apple (iOS) style images
// (asterisk → star for the 2nd). Files in public/emoji/.
const REACTIONS: { src: string; label: string }[] = [
  { src: "/emoji/heart-eyes.png", label: "love" },
  { src: "/emoji/star.png", label: "star" },
  { src: "/emoji/fire.png", label: "fire" },
  { src: "/emoji/hands.png", label: "praise" },
  { src: "/emoji/thumbsup.png", label: "thumbs up" },
];

type Trait = { name: string; counts: number[] };

const TRAITS: Trait[] = [
  { name: "Supportive", counts: [26, 17, 13, 13, 11] },
  { name: "Creative", counts: [23, 22, 16, 17, 11] },
  { name: "Curious", counts: [13, 12, 11, 11, 6] },
  { name: "Ambitious", counts: [11, 7, 7, 5, 5] },
  { name: "Skilled", counts: [15, 11, 13, 5, 6] },
  { name: "Talented", counts: [18, 11, 13, 6, 6] },
  { name: "Reliable", counts: [14, 9, 8, 7, 5] },
  { name: "Focused", counts: [12, 10, 9, 6, 4] },
  { name: "Inspiring", counts: [16, 12, 10, 8, 7] },
];

export function AboutTraits() {
  return (
    <section
      data-nav-bg="light"
      className="brand-section-light px-5 lg:px-10 pt-14 pb-14 lg:pt-24 lg:pb-24"
    >
      <p className="brand-eyebrow text-brand-ink-muted mb-8">
        <Scramble>{EYEBROW}</Scramble>
      </p>
      <h2 className="font-bricolage text-brand-display text-brand-ink mb-12 lg:mb-16 max-w-[22ch]">
        <StaggerText>{TITLE}</StaggerText>
      </h2>

      {/* Top divider + vertical/internal dividers via gap-px, no box/bottom. */}
      <div className="border-t border-brand-ink/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-ink/10">
          {TRAITS.map((t) => (
            <div key={t.name} className="bg-brand-bone p-6 lg:p-8">
              <h3 className="font-bricolage text-2xl lg:text-3xl text-brand-ink leading-tight">
                {t.name}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {REACTIONS.map((r, i) => (
                  <span
                    key={r.src}
                    className="inline-flex items-center gap-1.5 rounded-full bg-brand-ink/[0.05] px-3 py-1.5"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={r.src}
                      alt={r.label}
                      className="h-[18px] w-[18px] select-none"
                      draggable={false}
                    />
                    <span className="font-albert text-sm text-brand-ink-muted tabular-nums">
                      {t.counts[i]}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
