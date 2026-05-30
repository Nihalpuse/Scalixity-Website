import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";

const EYEBROW = "Capabilities";
const TITLE = "Key features";

export function ServiceFeatures({ features }: { features: string[] }) {
  if (!features || features.length === 0) return null;

  return (
    <section
      data-nav-bg="light"
      className="brand-section-light px-5 lg:px-10 pt-20 pb-24 lg:pt-32 lg:pb-32"
    >
      <p className="brand-eyebrow text-brand-ink-muted mb-6 lg:mb-8">
        <Scramble>{EYEBROW}</Scramble>
      </p>
      <h2 className="font-bricolage text-brand-display text-brand-ink mb-12 lg:mb-16 max-w-[18ch]">
        <StaggerText>{TITLE}</StaggerText>
      </h2>

      {/* gap-px hairline grid — the faint-ink container shows through as
          1px dividers between cells. */}
      <div className="border-t border-brand-ink/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-ink/10">
          {features.map((feature, i) => (
            <div
              key={feature}
              className="bg-brand-bone p-8 lg:p-10 flex gap-5 lg:gap-6"
            >
              <span className="font-bricolage text-3xl lg:text-4xl text-brand-ink-soft tabular-nums leading-none shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-albert text-brand-body-lg text-brand-ink leading-relaxed">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
