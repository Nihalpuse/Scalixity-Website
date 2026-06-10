import {
  Laptop,
  Clock,
  Users,
  GraduationCap,
  Monitor,
  Plane,
  type LucideIcon,
} from "lucide-react";
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";

// Adapted from the phenomenon "Extra benefits" grid. Kept qualitative on
// purpose — specifics like exact vacation days or named perk programs are
// placeholders to confirm before publishing. Uses the established gap-px
// divider card grid (see AboutTraits / AboutDifference).
const EYEBROW = "What we offer";
const TITLE = "Benefits that help you do great work";

const PERKS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Laptop,
    title: "Remote-first",
    description: "Work from wherever you're most productive — no mandatory office.",
  },
  {
    icon: Clock,
    title: "Flexible hours",
    description: "Own your schedule. We care about outcomes, not clock-watching.",
  },
  {
    icon: Users,
    title: "Senior teammates",
    description: "Learn from experienced people who take the craft seriously.",
  },
  {
    icon: GraduationCap,
    title: "Learning & growth",
    description: "Time and support to build new skills and grow into bigger roles.",
  },
  {
    icon: Monitor,
    title: "Modern equipment",
    description: "The gear you need to do your best work, provided.",
  },
  {
    icon: Plane,
    title: "Meaningful time off",
    description: "Real rest — a sustainable pace beats burnout every time.",
  },
];

export function Perks() {
  return (
    <section
      data-nav-bg="light"
      className="brand-section-light pt-14 pb-14 lg:pt-24 lg:pb-24"
    >
      {/* Heading keeps the page gutter; the card grid below goes full-bleed. */}
      <div className="px-5 lg:px-10">
        <p className="brand-eyebrow text-brand-ink-muted mb-6 lg:mb-8">
          <Scramble>{EYEBROW}</Scramble>
        </p>

        <h2 className="font-bricolage text-brand-display text-brand-ink mb-12 lg:mb-16 max-w-[18ch]">
          <StaggerText>{TITLE}</StaggerText>
        </h2>
      </div>

      <div className="border-t border-brand-ink/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-ink/10">
          {PERKS.map((perk) => {
            const Icon = perk.icon;
            return (
              <div
                key={perk.title}
                className="bg-brand-bone p-6 lg:p-8 flex flex-col min-h-[200px]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-purple/10 text-brand-purple">
                  <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                </span>
                <div className="mt-auto pt-10">
                  <h3 className="font-bricolage text-xl lg:text-2xl text-brand-ink leading-tight">
                    {perk.title}
                  </h3>
                  <p className="mt-3 font-albert text-sm lg:text-base text-brand-ink-muted leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
