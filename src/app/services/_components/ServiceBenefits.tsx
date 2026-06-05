import {
  Clock,
  Award,
  Sparkles,
  Headphones,
  Sprout,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { CTAButton } from "@/src/app/landing/_components/CTAButton";
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";

const EYEBROW = "Why work with us";
const TITLE = "Benefits";
const SUBTITLE =
  "We combine technical expertise with creative innovation to deliver exceptional results.";

// Icons cycle through the benefit list (ported from the legacy Benefits).
const ICONS: LucideIcon[] = [Clock, Award, Sparkles, Headphones, Sprout, Shield];

export function ServiceBenefits({ benefits }: { benefits: string[] }) {
  if (!benefits || benefits.length === 0) return null;

  return (
    <section
      data-nav-bg="light"
      className="brand-section-light px-5 lg:px-10 pt-14 pb-14 lg:pt-24 lg:pb-24"
    >
      <p className="brand-eyebrow text-brand-ink-muted mb-6 lg:mb-8">
        <Scramble>{EYEBROW}</Scramble>
      </p>
      <h2 className="font-bricolage text-brand-display text-brand-ink mb-6 lg:mb-8">
        <StaggerText>{TITLE}</StaggerText>
      </h2>
      <p className="font-albert text-brand-body-lg text-brand-ink-muted max-w-2xl mb-12 lg:mb-16">
        {SUBTITLE}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {benefits.map((benefit, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <article
              key={benefit}
              className="rounded-2xl bg-brand-ink/[0.04] p-8 flex flex-col gap-5"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-purple/10 text-brand-purple">
                <Icon className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
              </span>
              <p className="font-albert text-brand-body text-brand-ink-muted leading-relaxed">
                {benefit}
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-12 lg:mt-16">
        <CTAButton href="/contact" variant="primary" onLight>
          Start your project
        </CTAButton>
      </div>
    </section>
  );
}
