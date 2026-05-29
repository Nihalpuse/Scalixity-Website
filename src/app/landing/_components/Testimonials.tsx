import { Scramble } from "./Scramble";
import { StaggerText } from "./StaggerText";

// Testimonials ported from src/app/components/testimonials. Card-size
// distribution (photo / quote / minimal) keeps the masonry rhythm from
// the screenshot reference.
const EYEBROW = "What our clients say";
const TITLE = "Trusted by founders and partners across industries";

type Rating = {
  platform: string;
  score: string;
  stars: number;
  href: string;
};

const RATINGS: Rating[] = [
  { platform: "Clutch", score: "5.0", stars: 5, href: "#" },
  { platform: "DesignRush", score: "4.9", stars: 5, href: "#" },
];

type Layout = "photo" | "quote" | "minimal";

type Testimonial = {
  name: string;
  title?: string;
  layout: Layout;
  quote?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Taylor B.",
    title: "Creative Coach",
    layout: "photo",
  },
  {
    name: "Samir R.",
    title: "Indie Developer",
    layout: "quote",
    quote:
      "It's rare to find a space that's this structured and this human. I've made more progress in 3 months than I had in a year alone.",
  },
  {
    name: "Renee L.",
    title: "Marketing Strategist",
    layout: "photo",
  },
  {
    name: "Alex M.",
    title: "Wellness Entrepreneur",
    layout: "quote",
    quote:
      "I used to overthink every move in my business. Now I have a partner that keeps me grounded, focused, and — honestly — excited to ship.",
  },
  {
    name: "Jordan K.",
    title: "Freelance Illustrator",
    layout: "minimal",
  },
];

export function Testimonials() {
  return (
    <section
      data-nav-bg="light"
      className="brand-section-light px-5 lg:px-10 pt-20 pb-24 lg:pt-32 lg:pb-32"
    >
      {/* Header row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-10 lg:mb-14">
        <div className="lg:col-span-8">
          <p className="brand-eyebrow text-brand-ink-muted mb-6">
            <Scramble>{EYEBROW}</Scramble>
          </p>
          <h2 className="font-bricolage text-brand-display text-brand-ink leading-tight max-w-[20ch]">
            <StaggerText>{TITLE}</StaggerText>
          </h2>
        </div>

        <div className="lg:col-span-4 grid grid-cols-2 gap-3 lg:gap-4 self-end">
          {RATINGS.map((r) => (
            <RatingCard key={r.platform} rating={r} />
          ))}
        </div>
      </div>

      {/* Masonry testimonials */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 lg:gap-5">
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className="break-inside-avoid mb-4 lg:mb-5">
            <TestimonialCard t={t} />
          </div>
        ))}
      </div>
    </section>
  );
}

function RatingCard({ rating }: { rating: Rating }) {
  return (
    <a
      href={rating.href}
      className="rounded-2xl bg-brand-ink/[0.04] p-5 lg:p-6 flex flex-col gap-3 hover:bg-brand-ink/[0.07] transition-colors"
    >
      <div className="flex items-center justify-between">
        {/* Platform logo placeholder */}
        <div
          aria-hidden="true"
          className="h-8 w-8 rounded-full bg-gradient-to-br from-brand-purple to-brand-red shrink-0"
        />
        <span className="font-bricolage text-2xl lg:text-3xl text-brand-ink leading-none">
          {rating.score}
        </span>
      </div>
      <div
        className="flex items-center gap-1 text-brand-purple text-base"
        aria-label={`${rating.stars} out of 5 stars on ${rating.platform}`}
      >
        {Array.from({ length: rating.stars }).map((_, i) => (
          <span key={i} aria-hidden="true">
            ★
          </span>
        ))}
      </div>
    </a>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  const hasInlineAvatar = t.layout !== "photo";

  return (
    <article className="rounded-2xl bg-brand-ink/[0.04] p-5 lg:p-6 flex flex-col gap-4">
      <header className="flex items-center gap-3">
        {hasInlineAvatar && (
          <div
            aria-hidden="true"
            className="h-9 w-9 rounded-full bg-gradient-to-br from-stone-300 via-stone-400 to-stone-500 shrink-0"
          />
        )}
        <div>
          <h3 className="font-bricolage text-base lg:text-lg text-brand-ink leading-tight">
            {t.name}
          </h3>
          {t.title && (
            <p className="font-albert text-xs text-brand-ink-muted mt-0.5">
              {t.title}
            </p>
          )}
        </div>
      </header>

      {t.layout === "photo" && (
        <div className="aspect-[4/5] rounded-xl bg-gradient-to-br from-stone-300 via-stone-400 to-stone-500" />
      )}

      {t.layout === "quote" && t.quote && (
        <p className="font-albert text-sm lg:text-base text-brand-ink leading-relaxed">
          {t.quote}
        </p>
      )}
    </article>
  );
}
