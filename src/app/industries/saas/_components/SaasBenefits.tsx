import { WhyChooseUs, type WhyCard } from "@/src/app/landing/_components/WhyChooseUs";

// Reuses the landing <WhyChooseUs /> 2×2 card grid with SaaS-specific copy.
const EYEBROW = "Benefits";
const TITLE = "Why choose us for your SaaS design and development?";

const CARDS: WhyCard[] = [
  {
    eyebrow: "Design that meets regulation",
    title: "Compliance-minded expertise for regulated industries and beyond.",
    body: "We build with compliance baked in — GDPR-minded data flows, consent management, and audit controls — across SaaS, FinTech, Healthcare, and EdTech, where compliance and UX go hand in hand.",
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
    eyebrow: "Local presence. Global delivery",
    title: "Work directly with the doers — not a chain of account managers.",
    body: "Collaborate with strategists close to your timezone, while our senior design and engineering teams deliver fast, consistent results. We integrate into your tools and workflow — from a single embedded designer to a full product squad.",
  },
];

export function SaasBenefits() {
  return <WhyChooseUs eyebrow={EYEBROW} title={TITLE} cards={CARDS} />;
}
