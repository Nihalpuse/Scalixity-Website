import Link from "next/link";
import { Sparkles } from "lucide-react";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";

// Centered "Let's connect" CTA (light) — sits right after the Process section.
// Mirrors the reference: a purple icon mark, a big centered heading, and a
// solid purple button (the reference uses orange; we use the brand purple).
const DEFAULT_TITLE =
  "Ready to build something that works, scales, and converts?";

export function LetsConnect({ title = DEFAULT_TITLE }: { title?: string }) {
  return (
    <section
      data-nav-bg="light"
      className="brand-section-light px-5 lg:px-10 pt-16 pb-20 lg:pt-24 lg:pb-32 text-center"
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center">
        <span className="grid h-20 w-20 lg:h-24 lg:w-24 place-items-center rounded-full bg-brand-purple/10 text-brand-purple">
          <Sparkles
            className="h-8 w-8 lg:h-9 lg:w-9"
            strokeWidth={1.75}
            aria-hidden="true"
          />
        </span>

        <h2 className="mt-8 lg:mt-10 font-bricolage text-brand-display text-brand-ink max-w-[20ch] leading-[1.05]">
          <StaggerText>{title}</StaggerText>
        </h2>

        <div className="mt-10 lg:mt-12">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 rounded-brand-btn bg-brand-purple px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-brand-bone transition-colors duration-200 ease-brand-out hover:bg-brand-purple-hover"
          >
            Let&apos;s connect
            <svg
              viewBox="0 0 18 12"
              aria-hidden="true"
              className="h-3 w-[18px] fill-none stroke-current transition-transform duration-200 ease-brand-out group-hover:translate-x-1"
              strokeWidth="1.6"
            >
              <path d="M1 6h16M12 1l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
