import { Scramble } from "./Scramble";
import { StaggerText } from "./StaggerText";

// Quotes ported verbatim from src/app/components/testimonials on the
// existing Scalixity landing. The first entry is rendered as the
// featured hero quote; the rest fill a 2×2 supporting grid.
const EYEBROW = "What our clients say";
const TITLE = "Trusted by founders and partners across industries";

type Testimonial = {
  name: string;
  title: string;
  quote: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Samir R.",
    title: "Indie Developer",
    quote:
      "It's rare to find a space that's this structured and this human. I've made more progress in 3 months than I had in a year alone.",
  },
  {
    name: "Taylor B.",
    title: "Creative Coach",
    quote:
      "I joined on a whim, but it's become a constant in my growth. Everyone brings such honest energy — I leave every session clearer and more focused.",
  },
  {
    name: "Renee L.",
    title: "Marketing Strategist",
    quote:
      "The feedback is gold. Supportive, but not sugarcoated. I always feel seen and challenged in the best way.",
  },
  {
    name: "Alex M.",
    title: "Wellness Entrepreneur",
    quote:
      "I used to overthink every move in my business. Now I have a partner that keeps me grounded, focused, and — honestly — excited to ship.",
  },
  {
    name: "Jordan K.",
    title: "Freelance Illustrator",
    quote:
      "This isn't just another vendor — it feels like a team. The accountability and support have helped me stay consistent like never before.",
  },
];

const [FEATURED, ...SUPPORTING] = TESTIMONIALS;

export function Testimonials() {
  return (
    <section
      data-nav-bg="light"
      className="brand-section-light px-5 lg:px-10 pt-14 pb-14 lg:pt-24 lg:pb-24"
    >
      <p className="brand-eyebrow text-brand-ink-muted mb-6">
        <Scramble>{EYEBROW}</Scramble>
      </p>
      <h2 className="font-bricolage text-brand-display text-brand-ink leading-tight max-w-[22ch] mb-12 lg:mb-16">
        <StaggerText>{TITLE}</StaggerText>
      </h2>

      {/* Editorial bento: featured hero quote (col-7) + 2×2 supporting
          grid (col-5). On mobile they stack — hero on top, supporting
          grid below. The wrapper's items-stretch (grid default) makes
          the supporting column match the hero's height, and grid-rows-2
          inside it splits that height between the two supporting rows. */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
        <FeaturedCard t={FEATURED} />
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-rows-2 gap-5 lg:gap-6">
          {SUPPORTING.map((t) => (
            <SupportingCard key={t.name} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ t }: { t: Testimonial }) {
  return (
    <article className="lg:col-span-7 group relative rounded-3xl bg-brand-ink/[0.04] hover:bg-brand-ink/[0.07] p-8 lg:p-12 xl:p-14 flex flex-col gap-8 transition-all duration-300 ease-brand-out">
      {/* Oversized opening quote mark, solid brand purple — anchors the
          hero card visually and establishes it as the centerpiece. */}
      <span
        aria-hidden="true"
        className="font-bricolage text-7xl lg:text-8xl xl:text-9xl leading-[0.8] text-brand-purple -mb-2 select-none"
      >
        &ldquo;
      </span>

      <p className="font-bricolage text-2xl lg:text-3xl xl:text-4xl text-brand-ink leading-snug max-w-[26ch]">
        {t.quote}
      </p>

      {/* Author footer pinned to the bottom of the hero card. mt-auto
          handles cards of different content lengths without pushing the
          byline up into the quote. */}
      <footer className="mt-auto pt-8 border-t border-brand-ink/10">
        <h3 className="font-bricolage text-xl lg:text-2xl text-brand-ink leading-tight">
          {t.name}
        </h3>
        <p className="font-albert text-sm lg:text-base text-brand-ink-muted mt-1.5">
          {t.title}
        </p>
      </footer>
    </article>
  );
}

function SupportingCard({ t }: { t: Testimonial }) {
  return (
    <article className="group relative rounded-2xl bg-brand-ink/[0.04] hover:bg-brand-ink/[0.07] p-6 lg:p-7 flex flex-col gap-4 transition-all duration-300 ease-brand-out h-full">
      {/* Small watermark quote mark in the corner — same brand purple
          but at 20% opacity so it reads as background ornament, not as
          competing typography. */}
      <span
        aria-hidden="true"
        className="absolute top-3 right-5 lg:top-4 lg:right-6 font-bricolage text-5xl lg:text-6xl leading-none text-brand-purple/20 select-none pointer-events-none"
      >
        &rdquo;
      </span>

      <p className="font-albert text-sm lg:text-base text-brand-ink leading-relaxed relative">
        {t.quote}
      </p>

      <footer className="mt-auto pt-4 border-t border-brand-ink/10">
        <h3 className="font-bricolage text-base text-brand-ink leading-tight">
          {t.name}
        </h3>
        <p className="font-albert text-xs text-brand-ink-muted mt-0.5">
          {t.title}
        </p>
      </footer>
    </article>
  );
}
