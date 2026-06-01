import Link from "next/link";
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";

export type RelatedService = { title: string; body: string; href: string };

// "Related services" 3-card grid shared across industry pages.
export function IndustryRelatedServices({
  eyebrow,
  title,
  services,
}: {
  eyebrow: string;
  title: string;
  services: RelatedService[];
}) {
  return (
    <section
      data-nav-bg="light"
      className="brand-section-light px-5 lg:px-10 pt-20 pb-24 lg:pt-32 lg:pb-32"
    >
      <p className="brand-eyebrow text-brand-ink-muted mb-8">
        <Scramble>{eyebrow}</Scramble>
      </p>
      <h2 className="font-bricolage text-brand-display text-brand-ink mb-12 lg:mb-16 max-w-[22ch]">
        <StaggerText>{title}</StaggerText>
      </h2>

      <div className="border-t border-brand-ink/10 overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 -mr-px -mb-px">
          {services.map((s) => (
            <article
              key={s.title}
              className="p-6 lg:p-8 flex flex-col border-r border-b border-brand-ink/10 min-h-[220px]"
            >
              <h3 className="font-bricolage text-xl lg:text-2xl text-brand-ink leading-tight">
                {s.title}
              </h3>
              <p className="mt-3 font-albert text-sm lg:text-base text-brand-ink-muted leading-relaxed">
                {s.body}
              </p>
              <Link
                href={s.href}
                className="mt-auto pt-10 inline-flex items-center gap-2 font-albert text-sm font-semibold uppercase tracking-[0.12em] text-brand-ink hover:text-brand-purple transition-colors"
              >
                Explore
                <svg
                  viewBox="0 0 18 12"
                  aria-hidden="true"
                  className="h-3 w-[18px] fill-none stroke-current"
                  strokeWidth="1.6"
                >
                  <path d="M1 6h16M12 1l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
