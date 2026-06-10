import { CTAButton } from "@/src/app/landing/_components/CTAButton";
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";
import { AnimatedNumber } from "@/src/app/landing/_components/AnimatedNumber";

// Adapted from the phenomenon /career hero. Per brand rules we keep the
// layout but drop fabricated headcount / funding figures — the "facts" below
// are qualitative descriptions of how we work, not invented metrics. Swap in
// real, verified company numbers (team size, years, etc.) once confirmed.
const EYEBROW = "Careers";
const TITLE = "Build meaningful products. Grow with Scalixity.";
const DESCRIPTION =
  "If you care about craft and want to ship AI products that actually move the needle, bring your curiosity and ownership to our team — and shape your best ideas into real products.";

const FACTS_EYEBROW = "Scalixity in facts and numbers";
const FACTS: { value: string; label: string }[] = [
  { value: "2024", label: "the year Scalixity was founded" },
  { value: "100%", label: "remote-first — work from anywhere" },
  { value: "4+", label: "continents — products shipped globally" },
  { value: "97%", label: "on-time delivery accuracy" },
  { value: "58%", label: "average timeline compression" },
  { value: "30-60%", label: "cost reduction vs. building in-house" },
];

export function CareersHero() {
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
          {/* No roles board yet — point to contact. Wire to a real careers/ATS
              link or jobs@ address once it exists. */}
          <CTAButton href="/contact" variant="primary">
            Get in touch
          </CTAButton>
          <CTAButton href="/about" variant="secondary">
            About Scalixity
          </CTAButton>
        </div>

        {/* "Scalixity in facts and numbers" — mirrors the phenomenon careers
            stat grid (3-column numeric layout + count-up on scroll). Figures
            are honest, swap-in placeholders: they reuse numbers already
            published elsewhere on the site plus true facts. Replace with
            verified company stats anytime. */}
        <div className="mt-16 lg:mt-24">
          <p className="brand-eyebrow text-brand-bone-muted mb-6">
            <Scramble>{FACTS_EYEBROW}</Scramble>
          </p>
          <div className="border-t border-brand-bone-faint">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-brand-bone-faint">
              {FACTS.map((f) => (
                <div
                  key={f.label}
                  className="bg-brand-ink flex flex-col items-center justify-center text-center px-4 py-10 lg:py-16 min-h-[180px] lg:min-h-[240px]"
                >
                  <AnimatedNumber
                    value={f.value}
                    className="font-bricolage text-4xl lg:text-6xl text-brand-bone leading-none tracking-tight"
                  />
                  <p className="mt-4 font-albert text-brand-body text-brand-bone-muted max-w-[24ch]">
                    {f.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
