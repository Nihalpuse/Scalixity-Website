import { Problems, type Problem } from "@/src/app/landing/_components/Problems";

// Reuses the landing <Problems /> sticky-stack section (same fade/scroll
// behaviour) with SaaS-specific copy and no per-row CTAs.
const EYEBROW = "Common SaaS design challenges";
const TITLE =
  "We've seen SaaS teams pay for shortcuts twice. We design to avoid them";
const DESCRIPTION =
  "SaaS design isn't a nice-to-have; it's what protects you from churn, technical debt, and costly rebuilds. We think about the hard parts so you don't have to redo them.";

const ROWS: Problem[] = [
  {
    problem:
      "Honestly, our onboarding looked fine in Figma, but once we had different roles and real user data, people just dropped off.",
    solution:
      "We build B2B SaaS design flows with role-based onboarding and SaaS dashboard design grounded in real user journeys. This helps reduce drop-off rates by up to 30% and speeds time-to-value, so your users don't abandon your platform when complexity grows.",
  },
  {
    problem:
      "We faced challenges with permissions and data governance. Now our dev team is constantly patching compliance issues.",
    solution:
      "We address SaaS architecture design and data governance early, defining access levels, consent flows, and audit controls before UI screens. This minimizes costly reworks, supports compliance, and helps keep your product audit-ready as you scale.",
  },
  {
    problem:
      "Every new feature felt bolted on. The UX turned messy and slowed the team down.",
    solution:
      "We implement the best SaaS website design practices with modular kits that keep workflows consistent, reduce redesign time, and support faster development cycles. This approach makes adding features predictable, cutting integration time by up to 40% as your SaaS grows.",
  },
];

export function SaasChallenges() {
  return (
    <Problems
      eyebrow={EYEBROW}
      title={TITLE}
      description={DESCRIPTION}
      rows={ROWS}
    />
  );
}
