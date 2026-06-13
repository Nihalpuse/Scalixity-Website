import { CTAButton } from "@/src/app/landing/_components/CTAButton";
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";

// Dark closing band (replaces the phenomenon "Ready to join us?" CTA). Routes
// interested people to the contact page so they can introduce themselves.
const EYEBROW = "Join us";
const TITLE = "Don't see your role? Reach out anyway.";
const DESCRIPTION =
  "We're always glad to meet talented people. Tell us how you'd like to contribute and we'll take it from there.";

export function CareersCTA() {
  return (
    <section className="relative bg-brand-ink text-brand-bone px-5 lg:px-10 pt-20 pb-24 lg:pt-28 lg:pb-32">
      <div className="max-w-3xl">
        <p className="brand-eyebrow text-brand-bone-muted mb-6">
          <Scramble>{EYEBROW}</Scramble>
        </p>

        <h2 className="font-bricolage text-brand-display text-brand-bone max-w-[16ch]">
          <StaggerText>{TITLE}</StaggerText>
        </h2>

        <p className="mt-8 font-albert text-brand-body-lg text-brand-bone-muted max-w-2xl">
          {DESCRIPTION}
        </p>

        <div className="mt-10 flex flex-wrap gap-3 max-sm:flex-col max-sm:[&>*]:w-full">
          <CTAButton href="/contact" variant="primary">
            Introduce yourself
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
