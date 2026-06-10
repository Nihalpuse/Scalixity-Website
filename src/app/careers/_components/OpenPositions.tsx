import Link from "next/link";
import { ArrowUpRight, Briefcase } from "lucide-react";
import { CTAButton } from "@/src/app/landing/_components/CTAButton";
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";
import { POSITIONS } from "../careers-positions";

// "Open positions" listing. Reads the static POSITIONS data; when that list is
// empty it renders a first-class empty state instead of a blank section.
const EYEBROW = "Open positions";
const TITLE = "Roles we're hiring for";
const LEAD =
  "We hire for craft and ownership over titles. If something below fits — or even if it doesn't quite — we'd love to hear from you.";

export function OpenPositions() {
  const hasRoles = POSITIONS.length > 0;

  return (
    <section
      id="open-positions"
      data-nav-bg="light"
      className="brand-section-light px-5 lg:px-10 pt-14 pb-14 lg:pt-24 lg:pb-24"
    >
      <p className="brand-eyebrow text-brand-ink-muted mb-6 lg:mb-8">
        <Scramble>{EYEBROW}</Scramble>
      </p>

      <h2 className="font-bricolage text-brand-display text-brand-ink max-w-[18ch]">
        <StaggerText>{TITLE}</StaggerText>
      </h2>

      {hasRoles ? (
        <>
          <p className="mt-8 lg:mt-10 font-albert text-brand-body-lg text-brand-ink-muted max-w-2xl leading-relaxed">
            {LEAD}
          </p>

          <ul className="mt-12 lg:mt-16 border-t border-brand-ink/10">
            {POSITIONS.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/careers/apply?role=${p.slug}`}
                  className="group flex flex-col gap-4 border-b border-brand-ink/10 py-7 lg:py-9 transition-colors duration-300 ease-brand-out hover:bg-brand-ink/[0.03] md:flex-row md:items-center md:gap-8 md:px-2"
                >
                  <div className="md:flex-1">
                    <h3 className="font-bricolage text-2xl lg:text-3xl text-brand-ink leading-tight">
                      {p.title}
                    </h3>
                    <p className="mt-2 font-albert text-sm lg:text-base text-brand-ink-muted leading-relaxed max-w-xl">
                      {p.summary}
                    </p>
                  </div>

                  <div className="flex items-center gap-5 md:gap-8 md:shrink-0">
                    <span className="font-albert text-sm text-brand-ink-muted">
                      {p.team} · {p.type} · {p.location}
                    </span>
                    <span
                      aria-hidden="true"
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-ink/5 text-brand-ink transition-all duration-300 ease-brand-out group-hover:bg-brand-purple group-hover:text-brand-bone"
                    >
                      <ArrowUpRight className="h-5 w-5" strokeWidth={2} />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <EmptyState />
      )}
    </section>
  );
}

// Designed empty state — shown when there are no open roles. Reads as
// intentional, and still routes interested people to the apply page.
function EmptyState() {
  return (
    <div className="mt-12 lg:mt-16 rounded-3xl border border-brand-ink/10 bg-brand-ink/[0.03] px-6 py-12 lg:px-12 lg:py-16">
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <span className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-purple/10 text-brand-purple">
          <Briefcase className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
        </span>

        <h3 className="mt-7 font-bricolage text-2xl lg:text-3xl text-brand-ink leading-tight">
          No open roles right now
        </h3>

        <p className="mt-4 font-albert text-brand-body-lg text-brand-ink-muted leading-relaxed">
          We&apos;re not actively hiring at the moment — but we&apos;re always
          glad to meet people who care about great work. Tell us about yourself
          and we&apos;ll reach out when something opens up.
        </p>

        <div className="mt-9">
          <CTAButton href="/careers/apply" variant="primary" onLight>
            Introduce yourself
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
