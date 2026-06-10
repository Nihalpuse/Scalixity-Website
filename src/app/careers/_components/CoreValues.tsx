import { Problems, type Problem } from "@/src/app/landing/_components/Problems";

// "Our core values" rendered with the Problems sticky scroll-fade row layout.
// Each value: title in the narrow left column, description in the wide right
// column, no CTA. Same copy as the /company core values (kept as the careers
// page's own list so /company's accordion stays unchanged).
const VALUES: Problem[] = [
  {
    problem: "Customer-centric delivery",
    solution:
      "We build every solution around the client's goals, ensuring clarity, transparency, and measurable impact at every step.",
  },
  {
    problem: "Quality & reliability",
    solution:
      "From architecture to deployment, we focus on stable, scalable, and maintainable products that stand the test of time.",
  },
  {
    problem: "Innovation with purpose",
    solution:
      "We adopt modern technologies and AI-driven approaches that solve real problems — not just add complexity.",
  },
  {
    problem: "Ownership & accountability",
    solution:
      "We treat every project as our own, taking full responsibility for outcomes, timelines, and long-term support.",
  },
];

export function CoreValues() {
  return (
    <Problems
      eyebrow="What we stand for"
      title="Our core values"
      rows={VALUES}
      stickyHeading
    />
  );
}
