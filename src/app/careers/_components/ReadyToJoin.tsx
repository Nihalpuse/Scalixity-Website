import { UserPlus } from "lucide-react";
import { CTAButton } from "@/src/app/landing/_components/CTAButton";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";

// Centered "Ready to join us?" CTA (mirrors the phenomenon careers closing
// CTA — decorative mark + big centered title + button). Sits above the softer
// "Don't see your role?" band. Routes to the contact page.
const TITLE = "Ready to join us?";

export function ReadyToJoin() {
  return (
    <section
      data-nav-bg="light"
      className="brand-section-light px-5 lg:px-10 pt-14 pb-20 lg:pt-24 lg:pb-28 text-center"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center">
        <span className="grid h-20 w-20 lg:h-24 lg:w-24 place-items-center rounded-full bg-brand-purple/10 text-brand-purple">
          <UserPlus
            className="h-9 w-9 lg:h-10 lg:w-10"
            strokeWidth={1.75}
            aria-hidden="true"
          />
        </span>

        <h2 className="mt-8 lg:mt-10 font-bricolage text-brand-display text-brand-ink">
          <StaggerText>{TITLE}</StaggerText>
        </h2>

        <div className="mt-10 lg:mt-12">
          <CTAButton href="/contact" variant="primary" onLight>
            Get in touch
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
