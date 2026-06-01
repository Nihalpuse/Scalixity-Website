"use client";

import { type ReactNode } from "react";
import { CTAButton } from "@/src/app/landing/_components/CTAButton";
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";
import { useActiveOnScroll } from "@/src/app/landing/_components/useActiveOnScroll";

// Reusable "scroll slider" shared across industry pages — a sticky tab list
// on the left whose active item tracks scroll position (probe line 40% from
// the viewport top), and a column of slides on the right that scroll past
// it. Mirrors the Services/Process probe pattern from the landing page.
// Slide content is arbitrary JSX so the same shell drives the industry
// solutions list, the dark services breakdown, and the collaboration models.

type Theme = "dark" | "light";

export type SliderSlide = { tab: string; content: ReactNode };

function slug(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function IndustryScrollSlider({
  theme = "dark",
  eyebrow,
  title,
  description,
  slides,
  ctaLabel,
  ctaHref = "/services",
}: {
  theme?: Theme;
  eyebrow: string;
  title: string;
  description?: string;
  slides: SliderSlide[];
  ctaLabel?: string;
  ctaHref?: string;
}) {
  const isLight = theme === "light";
  const c = {
    section: isLight ? "brand-section-light" : "bg-brand-ink text-brand-bone",
    eyebrow: isLight ? "text-brand-ink-muted" : "text-brand-bone-muted",
    heading: isLight ? "text-brand-ink" : "text-brand-bone",
    desc: isLight ? "text-brand-ink-muted" : "text-brand-bone-muted",
    labelActive: isLight ? "text-brand-ink" : "text-brand-bone",
    labelInactive: isLight ? "text-brand-ink-soft" : "text-brand-bone-soft",
    labelHover: isLight ? "hover:text-brand-ink" : "hover:text-brand-bone",
  };

  const { activeIndex, setRef } = useActiveOnScroll(slides.length);

  // Smoothly scroll the matching slide into view on tab click (the slide's
  // scroll-mt-24 keeps it clear of the sticky nav).
  const scrollToSlide = (tab: string) => {
    const el = document.getElementById(slug(tab));
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      {...(isLight ? { "data-nav-bg": "light" } : {})}
      className={c.section}
    >
      {/* Intro */}
      <div className="px-5 lg:px-10 pt-20 lg:pt-32 pb-12 lg:pb-20">
        <p className={`brand-eyebrow ${c.eyebrow} mb-8`}>
          <Scramble>{eyebrow}</Scramble>
        </p>
        <h2 className={`font-bricolage text-brand-display ${c.heading} max-w-[22ch]`}>
          <StaggerText>{title}</StaggerText>
        </h2>
        {description && (
          <p className={`mt-8 lg:mt-12 font-albert text-brand-body-lg ${c.desc} max-w-2xl`}>
            {description}
          </p>
        )}
      </div>

      {/* Sticky tabs + scrolling slides */}
      <div className="px-5 lg:px-10 pb-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <aside className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start lg:min-h-[60vh] flex flex-col justify-between">
            <ul className="flex flex-col gap-3 font-bricolage text-2xl lg:text-[1.75rem] leading-tight">
              {slides.map((s, i) => (
                <li key={s.tab}>
                  <a
                    href={`#${slug(s.tab)}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSlide(s.tab);
                    }}
                    className={`cursor-pointer transition-colors duration-300 ease-brand-out ${c.labelHover} ${
                      activeIndex === i ? c.labelActive : c.labelInactive
                    }`}
                  >
                    {s.tab}
                  </a>
                </li>
              ))}
            </ul>
            {ctaLabel && (
              <div className="mt-12 lg:mt-16 hidden lg:block">
                <CTAButton href={ctaHref} variant="primary" onLight={isLight}>
                  {ctaLabel}
                </CTAButton>
              </div>
            )}
          </aside>

          {/* Narrow, right-aligned slides column: empty space sits in the
              middle between the sticky tabs and the content. */}
          <div className="flex flex-col gap-24 lg:gap-32 lg:col-span-6 lg:col-start-7">
            {slides.map((s, i) => (
              <div
                key={s.tab}
                id={slug(s.tab)}
                ref={setRef(i)}
                className="scroll-mt-24"
              >
                {s.content}
              </div>
            ))}
          </div>
        </div>

        {ctaLabel && (
          <div className="mt-12 lg:hidden">
            <CTAButton href={ctaHref} variant="primary" onLight={isLight}>
              {ctaLabel}
            </CTAButton>
          </div>
        )}
      </div>
    </section>
  );
}

/**
 * Media panel for slides. Renders a looping, muted, autoplay video when a
 * `src` is given (from /public/landing); otherwise falls back to a subtle
 * gradient placeholder.
 */
export function SlideMedia({
  theme = "light",
  src,
}: {
  theme?: Theme;
  src?: string;
}) {
  const isLight = theme === "light";
  const ring = isLight ? "ring-1 ring-brand-ink/10" : "ring-1 ring-brand-bone-faint";

  if (src) {
    return (
      <div
        className={`mt-8 lg:mt-10 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-brand-ink ${ring}`}
      >
        <video
          src={src}
          muted
          loop
          autoPlay
          playsInline
          preload="none"
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`mt-8 lg:mt-10 aspect-[4/3] w-full rounded-2xl ${
        isLight
          ? "bg-gradient-to-br from-brand-ink/[0.06] to-brand-ink/[0.02] " + ring
          : "bg-gradient-to-br from-brand-bone/[0.08] to-brand-bone/[0.02] " + ring
      }`}
    />
  );
}
