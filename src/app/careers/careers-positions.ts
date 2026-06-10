// MOCK PLACEHOLDER — open roles for the careers page. These are illustrative
// stand-ins so the Open Positions UI is populated; swap in real openings before
// publishing. To show the "no open roles" empty state, set POSITIONS = [] — the
// OpenPositions section and /careers/apply both handle an empty list with no
// other change.

export type Position = {
  /** url-safe id used in /careers/apply?role=<slug> */
  slug: string;
  title: string;
  team: string;
  type: string;
  location: string;
  /** one-line blurb for the listing */
  summary: string;
};

export const POSITIONS: Position[] = [
  {
    slug: "product-engineer",
    title: "Product Engineer",
    team: "Engineering",
    type: "Full-time",
    location: "Remote",
    summary:
      "Build AI-first product features end to end — from data and APIs to a polished, fast UI.",
  },
  {
    slug: "ai-ml-engineer",
    title: "AI/ML Engineer",
    team: "Engineering",
    type: "Full-time",
    location: "Remote",
    summary:
      "Design, train, and ship machine-learning systems that move from prototype to production.",
  },
  {
    slug: "product-designer",
    title: "Product Designer",
    team: "Design",
    type: "Full-time",
    location: "Remote",
    summary:
      "Shape clear, considered product experiences across web and mobile, end to end.",
  },
  {
    slug: "open-application",
    title: "Open application",
    team: "Any team",
    type: "Full-time / Contract",
    location: "Remote",
    summary:
      "Don't see a perfect fit? Tell us how you'd like to contribute and we'll find the right place.",
  },
];

export function getPosition(slug?: string): Position | undefined {
  if (!slug) return undefined;
  return POSITIONS.find((p) => p.slug === slug);
}
