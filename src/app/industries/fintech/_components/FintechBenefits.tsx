import { WhyChooseUs, type WhyCard } from "@/src/app/landing/_components/WhyChooseUs";

// Reuses the landing <WhyChooseUs /> 2×2 card grid with fintech copy.
const EYEBROW = "Benefits";
const TITLE = "Why fintech startups work with Scalixity";

const CARDS: WhyCard[] = [
  {
    eyebrow: "Fintech design that lasts beyond trends",
    title:
      "We don't chase gimmicks. When designing for fintech, we create UI and product design systems that stay relevant, scalable, and on-brand.",
    body: "With deep expertise in UX design for fintech, we build interfaces that balance usability, consistency, and long-term value.",
  },
  {
    eyebrow: "Developer-ready UX/UI for fintech products",
    title: "We design for execution, not handoff.",
    body: "Every fintech UI component is structured with dev teams in mind: accessibility, design tokens, responsive behavior, and performance constraints are all factored in. We stay involved until it ships.",
  },
  {
    eyebrow: "Embedded, agile collaboration",
    title:
      "You work directly with fintech designers and strategists, not account managers.",
    body: "We plug into your stack (Slack, Figma, Jira, Notion), align with your sprints, and operate as an extension of your team to streamline fintech app design and development.",
  },
  {
    eyebrow: "Proven experience in fintech & financial UX design",
    title:
      "We specialize in fintech UX, SaaS, Web3, and AI, where product logic meets business outcomes.",
    body: "From investor-ready MVPs to enterprise-level financial dashboards, our fintech user experience design helps teams grow faster and smarter.",
  },
];

export function FintechBenefits() {
  return <WhyChooseUs eyebrow={EYEBROW} title={TITLE} cards={CARDS} />;
}
