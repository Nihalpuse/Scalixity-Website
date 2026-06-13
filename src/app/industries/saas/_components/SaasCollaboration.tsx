import {
  IndustryCollaboration,
  type CollaborationModel,
} from "../../_components/IndustryCollaboration";

const EYEBROW = "How to work with us";
const TITLE =
  "Three flexible collaboration models tailored to your SaaS design and development needs";

const MODELS: CollaborationModel[] = [
  {
    tab: "Outsource",
    heading: "Partner with a full-cycle product team",
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

export function SaasCollaboration() {
  return (
    <IndustryCollaboration eyebrow={EYEBROW} title={TITLE} models={MODELS} />
  );
}
