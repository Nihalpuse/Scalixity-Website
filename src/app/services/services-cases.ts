// MOCK PLACEHOLDER — featured cases for the service detail pages. Per the brand
// rule (no fabricated client names, logos, or hard metrics), these are
// illustrative stand-ins: made-up project names, abstract images, and
// qualitative outcomes only. Clearly flagged for swap-in once real, approved
// case studies exist. Each case lists the service slugs it should appear under;
// getCasesForService filters to the current page (no tabs).

export type ServiceCase = {
  id: string;
  /** Mock project name (not a real client). */
  title: string;
  /** Short context label, e.g. "SaaS platform". */
  category: string;
  /** What we did — qualitative, no invented metrics. */
  summary: string;
  /** Qualitative outcome — no fabricated numbers. */
  outcome: string;
  image: string;
  /** Service slugs this case should appear under. */
  services: string[];
};

export const SERVICE_CASES: ServiceCase[] = [
  {
    id: "northbeam",
    title: "Northbeam analytics",
    category: "SaaS platform",
    summary:
      "A redesigned analytics workspace with clearer data flows and a role-based dashboard system.",
    outcome:
      "A calmer, faster interface the team could extend without redesigning from scratch.",
    image: "/services/cases/case-1.svg",
    services: ["web-app-design", "web-development", "product-redesign", "ux-audit"],
  },
  {
    id: "fielding",
    title: "Fielding ops console",
    category: "Internal tool",
    summary:
      "An operations console that streamlined complex, multi-step workflows into a few confident actions.",
    outcome:
      "Fewer mis-steps in daily tasks and an interface the team actually enjoyed using.",
    image: "/services/cases/case-2.svg",
    services: ["web-app-design", "design-prototype", "ux-audit", "custom-mvp-development"],
  },
  {
    id: "lumen",
    title: "Lumen learning",
    category: "Web app",
    summary:
      "A learner-focused web app built on a clean component system with accessible, responsive screens.",
    outcome:
      "A consistent experience across devices that stayed quick to build on.",
    image: "/services/cases/case-3.svg",
    services: ["web-app-design", "mobile-app-design", "website-design"],
  },
];

export function getCasesForService(slug: string): ServiceCase[] {
  return SERVICE_CASES.filter((c) => c.services.includes(slug));
}
