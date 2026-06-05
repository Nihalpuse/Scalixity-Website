import { CTAButton } from "@/src/app/landing/_components/CTAButton";
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";

// Copy preserved from the original About-us hero (abouthero.tsx).
const EYEBROW = "Redefining AI solutions";
const TITLE = "Built for innovation. Powered by intelligence.";
const DESCRIPTION =
  "Scalixity bridges the gap between complex data and actionable strategy. We engineer AI-driven ecosystems that propel businesses into the future.";

export function AboutHero() {
  return (
    <section className="relative bg-brand-ink text-brand-bone">
      <div className="px-5 pt-28 pb-14 lg:px-10 lg:pt-36 lg:pb-24">
        <p className="brand-eyebrow text-brand-bone-muted mb-8">
          <Scramble>{EYEBROW}</Scramble>
        </p>

        <h1 className="font-bricolage text-brand-display text-brand-bone max-w-[18ch]">
          <StaggerText>{TITLE}</StaggerText>
        </h1>

        <p className="font-albert text-brand-body-lg text-brand-bone-muted max-w-2xl mt-8">
          {DESCRIPTION}
        </p>

        <div className="mt-10 flex flex-wrap gap-3 max-sm:flex-col max-sm:[&>*]:w-full">
          <CTAButton href="/" variant="primary">
            Explore Scalixity
          </CTAButton>
          <CTAButton href="/work" variant="secondary">
            View our work
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
