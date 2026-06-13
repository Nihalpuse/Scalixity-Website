import {
  IndustryScrollSlider,
  type SliderSlide,
} from "./IndustryScrollSlider";

// Shared "How to work with us" collaboration section. Each industry passes its
// own eyebrow/title/models; the layout (sticky tab rail + per-model content,
// "Best for" / "What you get" columns, CTA) lives here so it stays consistent
// everywhere the component is used.
export type CollaborationModel = {
  tab: string;
  heading: string;
  intro: string;
  bestFor: string[];
  whatYouGet: string[];
  ctaLabel: string;
  ctaHref: string;
};

function Column({
  title,
  items,
  className = "p-6 lg:p-8",
}: {
  title: string;
  items: string[];
  className?: string;
}) {
  return (
    <div className={className}>
      <h4 className="font-bricolage text-lg lg:text-xl text-brand-bone">{title}</h4>
      <ul className="mt-4 flex flex-col gap-3">
        {items.map((item) => (
          <li
            key={item}
            className="font-albert text-sm lg:text-base text-brand-bone-muted leading-relaxed flex gap-3"
          >
            <span aria-hidden="true" className="text-brand-purple">
              →
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function IndustryCollaboration({
  eyebrow,
  title,
  models,
  ctaLabel = "Explore all",
  ctaHref = "/services",
}: {
  eyebrow: string;
  title: string;
  models: CollaborationModel[];
  ctaLabel?: string;
  ctaHref?: string;
}) {
  const slides: SliderSlide[] = models.map((m) => ({
    tab: m.tab,
    content: (
      <>
        <h3 className="font-bricolage text-3xl lg:text-4xl text-brand-bone leading-tight max-w-[20ch]">
          {m.heading}
        </h3>
        <p className="mt-6 font-albert text-base lg:text-lg text-brand-bone-muted leading-relaxed max-w-2xl">
          {m.intro}
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 border-t border-brand-bone-faint">
          {/* "Best for" has no left padding so it lines up with the heading above. */}
          <Column
            title="Best for"
            items={m.bestFor}
            className="py-6 pr-6 lg:py-8 lg:pr-8"
          />
          <div className="sm:border-l sm:border-brand-bone-faint border-t sm:border-t-0 border-brand-bone-faint">
            <Column title="What you get" items={m.whatYouGet} />
          </div>
        </div>

        <a
          href={m.ctaHref}
          className="mt-8 inline-flex items-center gap-2 font-albert text-sm font-semibold uppercase tracking-[0.12em] text-brand-bone hover:text-brand-purple transition-colors"
        >
          {m.ctaLabel}
          <svg
            viewBox="0 0 18 12"
            aria-hidden="true"
            className="h-3 w-[18px] fill-none stroke-current"
            strokeWidth="1.6"
          >
            <path d="M1 6h16M12 1l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </>
    ),
  }));

  return (
    <IndustryScrollSlider
      theme="dark"
      eyebrow={eyebrow}
      title={title}
      slides={slides}
      ctaLabel={ctaLabel}
      ctaHref={ctaHref}
      mobileTabs
    />
  );
}
