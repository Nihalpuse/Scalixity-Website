import {
  IndustryScrollSlider,
  type SliderSlide,
} from "../../_components/IndustryScrollSlider";

const EYEBROW = "How to work with us";
const TITLE =
  "Three collaboration models tailored to your educational technology research and development needs";

type Model = {
  tab: string;
  heading: string;
  intro: string;
  bestFor: string[];
  whatYouGet: string[];
  ctaLabel: string;
  ctaHref: string;
};

const MODELS: Model[] = [
  {
    tab: "Outsource",
    heading: "Partner with a full-cycle product design company",
    intro:
      "We work as your long-term product design and development partner, owning strategy, discovery, design, dev, QA, and scaling iterations. This is not a 'project' — it's your full product team.",
    bestFor: [
      "Founders who want a senior team thinking beyond sprints",
      "Startups scaling beyond MVP and needing deep product ownership",
    ],
    whatYouGet: [
      "Expert team aligned with your roadmap, KPIs, and business goals",
      "Strategic discovery, UX systems, and engineering under one roof",
    ],
    ctaLabel: "Hire your full-cycle team",
    ctaHref: "/services",
  },
  {
    tab: "Dedicated team",
    heading: "Hire a full-stack dedicated team",
    intro:
      "We deliver your product from idea to launch — fast and lean. You get execution-ready design and development support with a clear project scope and delivery timeline.",
    bestFor: [
      "MVPs or feature builds with a defined goal and launch window",
      "Pre-seed and seed startups that need to ship without building an in-house team",
    ],
    whatYouGet: [
      "UI/UX, development, QA, and PM in one dedicated team",
      "Clear scope, fixed timeline, efficient delivery",
    ],
    ctaLabel: "Get your dedicated team",
    ctaHref: "/services",
  },
  {
    tab: "Team extension",
    heading: "Augment your existing team",
    intro:
      "We provide developers, designers, and QA engineers to integrate with your team, helping you scale fast while keeping full control over execution.",
    bestFor: [
      "Startups needing specialized expertise without long-term hiring",
      "Seed & Series A+ startups looking to accelerate development",
    ],
    whatYouGet: [
      "Embedded designers, developers, or product managers to fill skill gaps",
      "Faster product delivery without the hiring delays & overhead costs",
    ],
    ctaLabel: "Augment your team",
    ctaHref: "/services",
  },
];

function Column({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="p-6 lg:p-8">
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

export function EdtechCollaboration() {
  const slides: SliderSlide[] = MODELS.map((m) => ({
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
          <Column title="Best for" items={m.bestFor} />
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
      eyebrow={EYEBROW}
      title={TITLE}
      slides={slides}
      ctaLabel="Explore all"
      ctaHref="/services"
      mobileTabs
    />
  );
}
