import { type ComponentType } from "react";
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";

export type Feature = {
  title: string;
  body: string;
  /** Optional icon component (e.g. a lucide-react icon). Falls back to an
   *  asterisk glyph when omitted. */
  Icon?: ComponentType<{ className?: string }>;
};

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
      className="brand-section-light px-5 lg:px-10 pt-20 pb-24 lg:pt-32 lg:pb-32"
    >
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

      <div className="mt-16 lg:mt-24 border-t border-brand-ink/10 overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 -mr-px -mb-px">
          {features.map((f) => (
            <article
              key={f.title}
              className="p-6 lg:p-8 flex flex-col gap-4 border-r border-b border-brand-ink/10"
            >
              {f.Icon ? (
                <f.Icon className="h-7 w-7 text-brand-purple" />
              ) : (
                <span
                  aria-hidden="true"
                  className="font-bricolage text-2xl text-brand-purple leading-none"
                >
                  ✳
                </span>
              )}
              <div className="mt-6 lg:mt-10">
                <h3 className="font-bricolage text-xl lg:text-2xl text-brand-ink leading-tight">
                  {f.title}
                </h3>
                <p className="mt-2 font-albert text-sm lg:text-base text-brand-ink-muted leading-relaxed">
                  {f.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
