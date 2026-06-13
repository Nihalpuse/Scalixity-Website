import { ServiceChallenges } from "@/src/app/services/_components/ServiceChallenges";
import type { ServiceChallenge } from "@/src/app/services/services-content";

// Reuses the landing <Problems /> sticky-stack section with EdTech copy
// and no per-row CTAs.
const EYEBROW = "Challenges behind edtech solutions";
const TITLE =
  "Poor UX still undermines great tech ed solutions — we're the educational technology design agency that fixes it";
const DESCRIPTION =
  "From platform drop-off to admin inefficiencies, even strong educational technology solutions fail without focused UX. As an experienced edtech product designer and development provider, we dig into the friction, then rebuild with clarity, compliance, and engagement in mind.";

const ROWS: ServiceChallenge[] = [
  {
    problem:
      "Students start strong, but engagement drops sharply after the first module.",
    solution:
      "We conduct targeted UX research and prototype tests to pinpoint exactly why students drop off, then craft adaptive learning paths that lift completion — turning more learners into finishers.",
  },
  {
    problem:
      "Our LMS is so complicated that even our admins dread routine tasks.",
    solution:
      "We redesign LMS dashboards around real-world admin workflows, removing complexity and cutting routine task time — freeing your team to focus on growth and engagement.",
  },
  {
    problem:
      "We know FERPA and WCAG compliance matters, but nobody clearly explains what it means for our platform.",
    solution:
      "We integrate WCAG and FERPA compliance from the ground up, designing accessible interfaces, secure data flows, and permission logic aligned with real user roles. Every step is documented and explained clearly, so your platform launches fully audit-ready, with zero rewrites or delays.",
  },
];

export function EdtechChallenges() {
  return (
    <ServiceChallenges
      eyebrow={EYEBROW}
      title={TITLE}
      description={DESCRIPTION}
      challenges={ROWS}
    />
  );
}
