import { WhyChooseUs, type WhyCard } from "@/src/app/landing/_components/WhyChooseUs";

// Reuses the landing <WhyChooseUs /> 2×2 card grid with healthcare copy.
const EYEBROW = "Benefits";
const TITLE = "Why trust your healthcare UI/UX project with Scalixity";

const CARDS: WhyCard[] = [
  {
    eyebrow: "Healthcare design that lasts beyond trends",
    title:
      "We don't follow visual fads — we build medical web design systems that scale, stay accessible, and align with clinical logic.",
    body: "Whether it's an EHR development, patient portal, or website design for hospitals, we prioritize clarity, usability, and integrity.",
  },
  {
    eyebrow: "Developer-ready UI/UX for healthcare teams",
    title:
      "Every component is built for real-world use — with accessibility, tokens, responsive behaviour, and dev logic baked in.",
    body: "We don't stop at Figma; we collaborate with product teams to ship your app development for healthcare right the first time.",
  },
  {
    eyebrow: "Embedded, agile collaboration",
    title: "You work directly with product specialists — not through account managers.",
    body: "We embed into your tools (Figma, Slack, Jira), align with your sprints, and operate like your internal team to accelerate healthcare website development and digital delivery.",
  },
  {
    eyebrow: "Proven experience in medical platforms and health UX",
    title:
      "We've delivered projects across chronic care, mental wellness, and website development for doctors — including AI-powered platforms.",
    body: "Our work balances compliance, usability, and scale to support safe, modern growth without added risk.",
  },
];

export function HealthcareBenefits() {
  return <WhyChooseUs eyebrow={EYEBROW} title={TITLE} cards={CARDS} />;
}
