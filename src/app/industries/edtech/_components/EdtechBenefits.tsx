import { WhyChooseUs, type WhyCard } from "@/src/app/landing/_components/WhyChooseUs";

// Reuses the landing <WhyChooseUs /> 2×2 card grid with EdTech copy.
const EYEBROW = "Benefits";
const TITLE = "Why choose Scalixity as your edtech product designer";

const CARDS: WhyCard[] = [
  {
    eyebrow: "Design that meets regulation",
    title: "WCAG- and FERPA-ready expertise for education and beyond.",
    body: "We build compliance into every layer — accessible interfaces, secure data flows, and permission logic — across Healthcare, SaaS, FinTech, and EdTech, where compliance and UX go hand in hand.",
  },
  {
    eyebrow: "Design that lasts beyond trends",
    title: "We don't chase fads. We build digital products that stay relevant.",
    body: "Our work looks sharp today and stays usable tomorrow — designed around long-term value, not short-term gimmicks. Scalable systems, brand consistency, and smart UX that grows with your product.",
  },
  {
    eyebrow: "Design that's developer-ready",
    title: "We design for implementation, not handoff.",
    body: "Every component is built with devs in mind: design tokens, accessibility, reusability, and real-world constraints. We collaborate with your team, reuse existing elements, and stay involved until everything's live.",
  },
  {
    eyebrow: "Embedded, global delivery",
    title: "Work directly with the doers — not a chain of account managers.",
    body: "We integrate into your tools and workflow, working as part of your team — from a single embedded designer to a full product squad, delivering fast, consistent results.",
  },
];

export function EdtechBenefits() {
  return <WhyChooseUs eyebrow={EYEBROW} title={TITLE} cards={CARDS} />;
}
