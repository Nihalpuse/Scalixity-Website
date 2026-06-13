import { Scramble } from "./Scramble";
import { StaggerText } from "./StaggerText";

// Adapted from src/app/components/what-we-offer — Scalixity's 6
// differentiators trimmed to 4 cards for this 2×2 layout.
const DEFAULT_EYEBROW = "Why choose us?";
const DEFAULT_TITLE = "Your success is our priority";

export type WhyCard = {
  eyebrow: string;
  title: string;
  body: string;
};

const DEFAULT_CARDS: WhyCard[] = [
  {
    eyebrow: "Speed without compromise",
    title: "We deliver on time, without skipping quality.",
    body: "Agile methodologies, senior teams, and pre-built frameworks let us compress timelines by 58% on average — without cutting corners on testing, security, or polish.",
  },
  {
    eyebrow: "Cutting-edge by default",
    title: "We build on tomorrow's tech, not yesterday's.",
    body: "AI-first engineering, modern frameworks, and battle-tested patterns. Your stack is built to scale with you, not to be rewritten in two years.",
  },
  {
    eyebrow: "Secure and compliant",
    title: "Top-tier security baked into every layer.",
    body: "We implement industry-best security practices — encryption at rest and in transit, zero-trust auth, audit logs — so you can ship in regulated industries with confidence.",
  },
  {
    eyebrow: "Always-on partnership",
    title: "Your launch is the start, not the end.",
    body: "24/7 monitoring, dedicated success teams, and iterative improvements based on real usage data. We stay involved as long as you're scaling — from a single embedded engineer to a full pod.",
  },
];

export function WhyChooseUs({
  eyebrow = DEFAULT_EYEBROW,
  title = DEFAULT_TITLE,
  cards = DEFAULT_CARDS,
}: {
  eyebrow?: string;
  title?: string;
  cards?: WhyCard[];
} = {}) {
  return (
    <section
      data-nav-bg="light"
      className="brand-section-light px-5 lg:px-10 pt-14 pb-14 lg:pt-24 lg:pb-24"
    >
      <p className="brand-eyebrow text-brand-ink-muted mb-8">
        <Scramble>{eyebrow}</Scramble>
      </p>

      <h2 className="font-bricolage text-brand-display text-brand-ink mb-12 lg:mb-16 max-w-[20ch]">
        <StaggerText>{title}</StaggerText>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {cards.map((card) => (
          <article
            key={card.title}
            className="relative overflow-hidden rounded-xl bg-brand-ink/[0.04] p-5 lg:p-10 flex flex-col"
          >
            {/* Eyebrow (txt--control-m uppercase) */}
            <p className="brand-eyebrow text-brand-ink-muted">{card.eyebrow}</p>
            {/* Title (txt--lead, mt-12, mb-auto pushes the body to the bottom) */}
            <h3 className=" mb-auto font-bricolage text-2xl lg:text-[1.875rem] text-brand-ink leading-[1.2]">
              {card.title}
            </h3>
            {/* Description (txt--m, mt-80 desktop / mt-32 mobile) */}
            <p className="mt-8 lg:mt-20 font-albert text-base lg:text-lg text-brand-ink-muted leading-relaxed">
              {card.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
