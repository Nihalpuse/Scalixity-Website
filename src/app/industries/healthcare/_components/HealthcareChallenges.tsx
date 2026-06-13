import { ServiceChallenges } from "@/src/app/services/_components/ServiceChallenges";
import type { ServiceChallenge } from "@/src/app/services/services-content";

// Reuses the landing <Problems /> sticky-stack section with healthcare copy
// and no per-row CTAs.
const EYEBROW = "Healthcare app development challenges";
const TITLE = "When the stakes are clinical, the user experience can't be casual";
const DESCRIPTION =
  "From patient drop-off in onboarding to overloaded EHR interfaces, here's what we hear most — and how we solve it.";

const ROWS: ServiceChallenge[] = [
  {
    problem:
      "We tried redesigning our platform, but patient engagement didn't improve — if anything, drop-off got worse.",
    solution:
      "Our healthcare app development services start with UX research and patient/provider usability testing. The result? Higher activation and retention across mental health apps, chronic care tools, and medical practice website design projects.",
  },
  {
    problem:
      "Our EHR interface is so bloated, even doctors complain it slows them down during patient visits.",
    solution:
      "Using modular design and healthcare-specific UX logic, we streamline medical website designs, EHRs, and telehealth dashboards — reducing friction, cognitive load, and task time.",
  },
  {
    problem:
      "We don't just need HIPAA compliance. We need a team that actually understands what it takes to build around it.",
    solution:
      "As a healthcare app development company, we build HIPAA and GDPR compliance into every layer — from secure data flows to audit-ready permissions — without compromising on usability or design quality.",
  },
];

export function HealthcareChallenges() {
  return (
    <ServiceChallenges
      eyebrow={EYEBROW}
      title={TITLE}
      description={DESCRIPTION}
      challenges={ROWS}
    />
  );
}
