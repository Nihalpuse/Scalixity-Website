import { type ComponentType } from "react";
import {
  LayoutDashboard,
  Compass,
  BarChart3,
  Table2,
  ShieldCheck,
  CreditCard,
  Bell,
  FileText,
  Search,
  Users,
  Settings2,
  ListChecks,
  MessagesSquare,
  LifeBuoy,
  Workflow,
  SlidersHorizontal,
} from "lucide-react";
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";

type FeatureIcon = ComponentType<{ className?: string; strokeWidth?: number | string }>;

export type Feature = {
  title: string;
  body: string;
  /** Optional icon component (e.g. a lucide-react icon). When omitted a big
   *  icon is auto-assigned from DEFAULT_ICONS by position. */
  Icon?: FeatureIcon;
};

// Big icons auto-assigned to feature cards that don't specify their own.
const DEFAULT_ICONS: FeatureIcon[] = [
  LayoutDashboard,
  Compass,
  BarChart3,
  Table2,
  ShieldCheck,
  CreditCard,
  Bell,
  FileText,
  Search,
  Users,
  Settings2,
  ListChecks,
  MessagesSquare,
  LifeBuoy,
  Workflow,
  SlidersHorizontal,
];

// Bordered feature grid shared across industry pages (asterisk glyph +
// title + body per cell). Top divider full-width, interior dividers, no
// outer/bottom box.
export function IndustryFeatures({
  eyebrow,
  title,
  description,
  features,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  features: Feature[];
}) {
  return (
    <section
      data-nav-bg="light"
      className="brand-section-light pt-14 pb-14 lg:pt-24 lg:pb-24"
    >
      {/* Heading keeps the page gutter; the card grid below goes full-bleed. */}
      <div className="px-5 lg:px-10">
        <p className="brand-eyebrow text-brand-ink-muted mb-8">
          <Scramble>{eyebrow}</Scramble>
        </p>
        <h2 className="font-bricolage text-brand-display text-brand-ink max-w-[22ch]">
          <StaggerText>{title}</StaggerText>
        </h2>
        {description && (
          <p className="mt-8 lg:mt-12 font-albert text-brand-body-lg text-brand-ink-muted max-w-2xl">
            {description}
          </p>
        )}
      </div>

      <div className="mt-16 lg:mt-24 border-t border-brand-ink/10 overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 -mr-px -mb-px">
          {features.map((f, i) => {
            const Icon = f.Icon ?? DEFAULT_ICONS[i % DEFAULT_ICONS.length];
            return (
              <article
                key={f.title}
                className="px-5 py-6 lg:px-10 lg:py-8 flex flex-col border-r border-b border-brand-ink/10"
              >
                <Icon
                  className="h-9 w-9 lg:h-10 lg:w-10 text-brand-purple"
                  strokeWidth={1.5}
                />
                <div className="mt-12 lg:mt-28">
                  <h3 className="font-bricolage text-xl lg:text-2xl text-brand-ink leading-tight">
                    {f.title}
                  </h3>
                  <p className="mt-2 font-albert text-sm lg:text-base text-brand-ink-muted leading-relaxed">
                    {f.body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
