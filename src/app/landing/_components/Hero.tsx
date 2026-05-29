import { CTAButton } from "./CTAButton";
import { ShowreelPlaceholder } from "./ShowreelPlaceholder";
import { Scramble } from "./Scramble";
import { StaggerText } from "./StaggerText";
import { AnimatedNumber } from "./AnimatedNumber";

type CTA = { label: string; href: string; variant?: "primary" | "secondary" };

type HeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctas: CTA[];
};

// Copy ported from src/app/components/landing-hero, trusted-companies,
// and results-speak on the existing Scalixity landing.
const SCROLL_SUBTITLE =
  "We help data-driven teams ship AI products that move real metrics — from streamlining operations to uncovering hidden opportunities, we own the outcome end to end.";

const INVESTORS_EYEBROW = "Trusted by data-driven companies";
const INVESTORS = ["AOIN", "Pinegap", "Ambitio", "Nakshatra Gyaan"];

const STATS_EYEBROW = "Scalixity in numbers";
const STATS: { value: string; label: string }[] = [
  { value: "58%", label: "average timeline compression across projects" },
  { value: "30-60%", label: "cost reduction vs. building in-house" },
  { value: "97%", label: "on-time delivery accuracy" },
  { value: "4+", label: "continents — products shipped globally" },
];

export function Hero({ eyebrow, title, ctas }: HeroProps) {
  return (
    <section className="relative bg-brand-ink text-brand-bone">
      <div className="px-5 pt-40 lg:px-10 lg:pt-48">
        <p className="brand-eyebrow text-brand-bone-muted mb-8">
          <Scramble>{eyebrow}</Scramble>
        </p>

        <h1 className="font-bricolage text-brand-display text-brand-bone max-w-[18ch]">
          <StaggerText>{title}</StaggerText>
        </h1>

        <div className="mt-10 flex flex-wrap gap-3">
          {ctas.map((cta) => (
            <CTAButton
              key={cta.label}
              href={cta.href}
              variant={cta.variant ?? "primary"}
            >
              {cta.label}
            </CTAButton>
          ))}
        </div>
      </div>

      <div className="px-5 lg:px-10 mt-16 lg:mt-24 pb-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          {/* Left: sticky showreel */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ShowreelPlaceholder />
          </div>

          {/* Right: scrolls past the sticky showreel */}
          <div className="flex flex-col gap-24 lg:gap-32 lg:pt-2">
            <p className="font-albert text-brand-body-lg text-brand-bone-muted max-w-xl">
              {SCROLL_SUBTITLE}
            </p>

            <div>
              <p className="brand-eyebrow text-brand-bone-muted mb-6">
                <Scramble>{INVESTORS_EYEBROW}</Scramble>
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 border-t border-brand-bone-faint">
                {INVESTORS.map((name, i) => (
                  <div
                    key={name}
                    className={`py-6 pr-4 lg:pr-6 ${
                      i === 0 ? "" : "md:border-l md:border-brand-bone-faint md:pl-4 lg:pl-6"
                    }`}
                  >
                    <span className="font-bricolage text-base lg:text-lg text-brand-bone uppercase tracking-wide">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats wrapper mirrors the showreel's aspect ratio at lg+, so when
                it fully scrolls in alongside the sticky showreel the two have
                matching visual heights — and the grid (sticky's parent) ends
                right at that moment, releasing the showreel so the section
                scrolls above together. */}
            <div className="lg:aspect-[5/4] lg:flex lg:flex-col">
              <p className="brand-eyebrow text-brand-bone-muted mb-6">
                <Scramble>{STATS_EYEBROW}</Scramble>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-brand-bone-faint lg:flex-1 lg:auto-rows-fr">
                {STATS.map((stat, i) => {
                  const isRightCol = i % 2 === 1;
                  const isBottomRow = i >= 2;
                  return (
                    <div
                      key={stat.label}
                      className={`py-10 pr-4 lg:pr-6 lg:flex lg:flex-col ${
                        isRightCol
                          ? "sm:border-l sm:border-brand-bone-faint sm:pl-6 lg:pl-10"
                          : ""
                      } ${isBottomRow ? "border-t border-brand-bone-faint" : ""}`}
                    >
                      <div className="font-bricolage text-5xl lg:text-6xl text-brand-bone leading-none">
                        <AnimatedNumber value={stat.value} />
                      </div>
                      <p className="mt-4 font-albert text-brand-body text-brand-bone-muted max-w-[26ch]">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
