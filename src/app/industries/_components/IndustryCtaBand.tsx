import { CTAButton } from "@/src/app/landing/_components/CTAButton";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";

// Centered call-to-action band — used between industry-page sections
// (mirrors the reference's "Need to build one of these?" / "See what it's
// like to work with us" interstitials). Light surface.
export function IndustryCtaBand({
  title,
  body,
  ctaLabel,
  ctaHref = "/contact",
}: {
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref?: string;
}) {
  return (
    <section
      data-nav-bg="light"
      className="brand-section-light px-5 lg:px-10 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-3xl flex flex-col items-center text-center">
        <span
          aria-hidden="true"
          className="h-16 w-16 lg:h-20 lg:w-20 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-ink"
        />
        <h2 className="mt-8 lg:mt-10 font-bricolage text-3xl lg:text-5xl text-brand-ink leading-tight max-w-[18ch]">
          <StaggerText>{title}</StaggerText>
        </h2>
        <p className="mt-5 font-albert text-brand-body-lg text-brand-ink-muted max-w-xl">
          {body}
        </p>
        <div className="mt-10">
          <CTAButton href={ctaHref} variant="primary" onLight>
            {ctaLabel}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
