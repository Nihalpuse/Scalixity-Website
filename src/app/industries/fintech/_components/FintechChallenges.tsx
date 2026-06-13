import { ServiceChallenges } from "@/src/app/services/_components/ServiceChallenges";
import type { ServiceChallenge } from "@/src/app/services/services-content";

// Reuses the landing <Problems /> sticky-stack section with fintech copy
// and no per-row CTAs.
const EYEBROW = "Fintech design challenges";
const TITLE = "For platforms pushing past UX roadblocks to improve performance";
const DESCRIPTION =
  "You've got users, a vision, and maybe even early traction. But legacy UX, low engagement, or rushed execution may be holding you back. Here's how we fix that:";

const ROWS: ServiceChallenge[] = [
  {
    problem:
      "Our product has users… but our dashboard UX is too clunky. People drop off before they understand the value.",
    solution:
      "Our team redesigns your information architecture, simplifies your data hierarchy, and builds fintech dashboards that reduce friction and boost daily usage.",
  },
  {
    problem:
      "We built fast to launch fast — now we're stuck with patchwork UX. It's affecting trust and retention, and we're not ready to scale.",
    solution:
      "We rebuild your frontend with a scalable, brand-aligned system that elevates UX consistency, boosts engagement, and sets your platform up for market expansion.",
  },
  {
    problem:
      "We're building a finance app, but the user flow feels disjointed. It needs to be smooth across multiple accounts.",
    solution:
      "We design mobile-first fintech apps that simplify complex data, streamline user flows, and drive retention from day one.",
  },
];

export function FintechChallenges() {
  return (
    <ServiceChallenges
      eyebrow={EYEBROW}
      title={TITLE}
      description={DESCRIPTION}
      challenges={ROWS}
    />
  );
}
