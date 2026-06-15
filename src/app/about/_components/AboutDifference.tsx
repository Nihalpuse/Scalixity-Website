import {
  Handshake,
  Layers,
  Code2,
  Workflow,
  Target,
  Heart,
  type LucideIcon,
} from "lucide-react";
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";

// "What makes us different" — the six differentiators from the phenomenon
// about-us page. They're brand-neutral, so the copy is kept as-is (only the
// studio name swapped to Scalixity where it appears).
const EYEBROW = "What makes us different";
const TITLE =
  "We've built our products by focusing on the right things. Here's what our clients value most";

type Diff = { n: string; title: string; body: string; Icon: LucideIcon };

const DIFFERENTIATORS: Diff[] = [
  {
    n: "01",
    title: "Partners, not vendors",
    Icon: Handshake,
    body: "We don't disappear after a kickoff call or pass work down a chain. You'll work directly with the team building your product — in Slack, in Figma, and in your workflow.",
  },
  {
    n: "02",
    title: "Work that holds up over time",
    Icon: Layers,
    body: "We build thoughtful, system-based interfaces and architectures, not flashy one-offs. Our work adapts to your product, keeps logic intact, and holds up to change.",
  },
  {
    n: "03",
    title: "Developer-ready by default",
    Icon: Code2,
    body: "Every component is reusable, accessible, and engineered for handoff. Tokens, states, constraints — we speak dev and design like we code. That's how we ship fast.",
  },
  {
    n: "04",
    title: "Process you can follow",
    Icon: Workflow,
    body: "You see what we see. From day one, we make progress visible in Notion, Jira, Figma, or your stack. Scope, estimates, and feedback loops stay open and honest.",
  },
  {
    n: "05",
    title: "Product-led thinking",
    Icon: Target,
    body: "We work at the intersection of design, engineering, and business. From product-market fit to scale-readiness, we align UX and architecture with growth metrics, not just user flow.",
  },
  {
    n: "06",
    title: "People who care about the work",
    Icon: Heart,
    body: "Our edge isn't tools or templates — it's the people. Curious, invested, and obsessive about doing the right thing right. You'll feel it in the work and in every interaction.",
  },
];

export function AboutDifference() {
  return (
    <section className="relative bg-brand-ink text-brand-bone pt-14 pb-14 lg:pt-24 lg:pb-24">
      <div className="px-5 lg:px-10">
        <p className="brand-eyebrow text-brand-bone-muted mb-8">
          <Scramble>{EYEBROW}</Scramble>
        </p>
        <h2 className="font-bricolage text-brand-display text-brand-bone mb-12 lg:mb-16 max-w-[22ch]">
          <StaggerText>{TITLE}</StaggerText>
        </h2>
      </div>

      {/* Full-bleed: top divider + vertical dividers between cells (via
          gap-px), no box. Cells carry the px-5/px-10 gutter so content lines
          up with the heading above. */}
      <div className="border-t border-brand-bone/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-bone/10">
          {DIFFERENTIATORS.map((d) => (
            <article
              key={d.n}
              className="bg-brand-ink px-5 py-7 lg:px-10 lg:py-9 flex flex-col min-h-[300px]"
            >
              <d.Icon
                aria-hidden="true"
                strokeWidth={1.5}
                className="h-9 w-9 lg:h-10 lg:w-10 text-brand-purple"
              />
              <div className="mt-auto pt-16 lg:pt-24">
                <h3 className="font-bricolage text-xl lg:text-2xl text-brand-bone leading-tight">
                  {d.title}
                </h3>
                <p className="mt-3 font-albert text-sm lg:text-base text-brand-bone-muted leading-relaxed">
                  {d.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
