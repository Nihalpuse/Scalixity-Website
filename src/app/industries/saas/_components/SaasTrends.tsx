import { IndustryTrends, type Trend } from "../../_components/IndustryTrends";

const EYEBROW = "SaaS application design trends";
const TITLE =
  "Advanced tendencies shaping the next generation of products delivered by our SaaS designers";
const DESCRIPTION =
  "Take a look at the latest approaches we use to help platforms improve usability, trust, and long-term scalability across industries.";

const TRENDS: Trend[] = [
  {
    number: "01",
    title: "AI-powered interfaces",
    body: "Smarter screens supporting chatbots and predictive automation, ideal for B2B SaaS design in sales, health tech, and analytics-heavy platforms.",
  },
  {
    number: "02",
    title: "Hyper-personalization",
    body: "Tailoring interfaces and workflows to user habits, critical for SaaS application design in marketing automation, HR systems, and customer support tools.",
  },
  {
    number: "03",
    title: "Micro-interactions & motion",
    body: "Subtle animated feedback reducing errors, perfect for SaaS dashboard design, fintech transactions, and complex productivity or planning tools.",
  },
  {
    number: "04",
    title: "Voice & gesture interfaces",
    body: "Natural language and voice-first controls simplifying tasks, valuable for B2B SaaS website design in field services, health, and customer support apps.",
  },
  {
    number: "05",
    title: "Gamification elements",
    body: "Game-inspired progress, rewards, and challenges, boosting engagement in B2B SaaS website designs for learning, onboarding, and internal team management.",
  },
  {
    number: "06",
    title: "Sustainable and ethical design",
    body: "Prioritizing privacy, accessibility, and environmental impact, essential for UX design for SaaS serving diverse markets and compliance-heavy industries.",
  },
];

export function SaasTrends() {
  return (
    <IndustryTrends
      eyebrow={EYEBROW}
      title={TITLE}
      description={DESCRIPTION}
      trends={TRENDS}
    />
  );
}
