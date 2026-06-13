import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";
import type { ServiceCase } from "../services-cases";

// Featured cases filtered to the current service (no tabs). Returns null when
// the service has no matching cases. Content is MOCK PLACEHOLDER — see
// services-cases.ts.
export function ServiceCases({ cases }: { cases: ServiceCase[] }) {
  if (cases.length === 0) return null;

  return (
    <section
      data-nav-bg="light"
      className="brand-section-light px-5 lg:px-10 pt-14 pb-14 lg:pt-24 lg:pb-24"
    >
      <p className="brand-eyebrow text-brand-ink-muted mb-6 lg:mb-8">
        <Scramble>Featured work</Scramble>
      </p>
      <h2 className="font-bricolage text-brand-display text-brand-ink max-w-[18ch] mb-12 lg:mb-16">
        <StaggerText>Selected cases</StaggerText>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {cases.map((c) => (
          <article
            key={c.id}
            className="flex flex-col overflow-hidden rounded-2xl border border-brand-ink/10 bg-brand-bone"
          >
            <div className="relative aspect-[16/11] bg-brand-ink/[0.04]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 lg:p-7">
              <span className="brand-eyebrow text-brand-ink-soft">{c.category}</span>
              <h3 className="mt-3 font-bricolage text-xl lg:text-2xl text-brand-ink leading-tight">
                {c.title}
              </h3>
              <p className="mt-3 font-albert text-sm lg:text-base text-brand-ink-muted leading-relaxed">
                {c.summary}
              </p>
              <p className="mt-auto pt-5 font-albert text-sm text-brand-ink leading-relaxed">
                <span className="text-brand-purple">Outcome — </span>
                {c.outcome}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
