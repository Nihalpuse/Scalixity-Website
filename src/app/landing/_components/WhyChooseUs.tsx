import { Scramble } from "./Scramble";
import { StaggerText } from "./StaggerText";

// Adapted from src/app/components/what-we-offer — Scalixity's 6
// differentiators trimmed to 4 cards for this 2×2 layout.
const EYEBROW = "Why choose us?";
const TITLE = "Your success is our priority";

type WhyCard = {
  eyebrow: string;
  title: string;
  body: string;
};

const CARDS: WhyCard[] = [
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

export function WhyChooseUs() {
  return (
    <section
      data-nav-bg="light"
      className="brand-section-light px-5 lg:px-10 pt-20 pb-24 lg:pt-32 lg:pb-32"
    >
      <p className="brand-eyebrow text-brand-ink-muted mb-8">
        <Scramble>{EYEBROW}</Scramble>
      </p>

      <h2 className="font-bricolage text-brand-display text-brand-ink mb-12 lg:mb-16">
        <StaggerText>{TITLE}</StaggerText>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
        {CARDS.map((card) => (
          <article
            key={card.title}
            className="rounded-2xl bg-brand-ink/[0.04] p-8 lg:p-10 flex flex-col gap-4 lg:gap-5"
          >
            <p className="brand-eyebrow text-brand-ink-muted">
              {card.eyebrow}
            </p>
            <h3 className="font-bricolage text-2xl lg:text-3xl text-brand-ink leading-tight">
              {card.title}
            </h3>
            <p className="font-albert text-sm lg:text-base text-brand-ink-muted leading-relaxed">
              {card.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
