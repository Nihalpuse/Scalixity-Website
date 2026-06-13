import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";
import type { ServiceCard } from "../services-content";

// Generic "Industry-specific {service} solutions" grid (dark, numbered cards).
// Reused across every service — the eyebrow, heading, and cards come from the
// per-service data so the component itself stays content-agnostic.
export function ServiceSolutions({
  eyebrow = "Tailored solutions for your business",
  title,
  items,
}: {
  eyebrow?: string;
  title: string;
  items: ServiceCard[];
}) {
  return (
    <section className="relative bg-brand-ink text-brand-bone pt-14 pb-14 lg:pt-24 lg:pb-24">
      {/* Heading keeps the page gutter; the card grid below goes full-bleed. */}
      <div className="px-5 lg:px-10">
        <p className="brand-eyebrow text-brand-bone-muted mb-6 lg:mb-8">
          <Scramble>{eyebrow}</Scramble>
        </p>
        <h2 className="font-bricolage text-brand-display text-brand-bone max-w-[18ch]">
          <StaggerText>{title}</StaggerText>
        </h2>
      </div>

      <div className="mt-12 lg:mt-16 border-t border-brand-bone/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-bone/10">
          {items.map((it, i) => (
            <article
              key={it.title}
              className="bg-brand-ink px-5 py-7 lg:px-10 lg:py-9 flex flex-col min-h-[280px]"
            >
              <span className="font-bricolage text-2xl lg:text-3xl text-brand-bone-soft leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mt-auto pt-12">
                <h3 className="font-bricolage text-xl lg:text-2xl text-brand-bone leading-tight">
                  {it.title}
                </h3>
                <p className="mt-3 font-albert text-sm lg:text-base text-brand-bone-muted leading-relaxed">
                  {it.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
