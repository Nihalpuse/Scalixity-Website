import { Check, X } from "lucide-react";
import type {
  PricingPlanObject,
  FlexiblePricingPlan,
} from "@/src/app/components/pricing-plan";
import { CTAButton } from "@/src/app/landing/_components/CTAButton";
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";

const EYEBROW = "Investment";
const TITLE = "Pricing plans";

type Feature = { text: string; included: boolean };
type Tier = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: Feature[];
  buttonText: string;
  popular: boolean;
};

// Normalizes the polymorphic pricing data (object of named plans, array of
// flexible plans, or a single starting-price object) into a flat tier list.
// Ported from the legacy PricingPlan transform.
function normalize(
  pricingPlans?: PricingPlanObject | FlexiblePricingPlan[],
  pricing?: { starting: string; description: string }
): Tier[] {
  if (pricingPlans && typeof pricingPlans === "object" && !Array.isArray(pricingPlans)) {
    const obj = pricingPlans as PricingPlanObject;
    const plans: Tier[] = [];
    const toFeatures = (points?: string[]): Feature[] =>
      Array.isArray(points) ? points.map((t) => ({ text: t, included: true })) : [];

    if (obj.beginner)
      plans.push({
        name: "Beginner",
        price: obj.beginner.priceRange || "",
        period: "",
        description: obj.beginner.description || "",
        features: toFeatures(obj.beginner.bulletPoints),
        buttonText: "Get started",
        popular: false,
      });
    if (obj.professional)
      plans.push({
        name: "Professional",
        price: obj.professional.priceRange || "",
        period: "",
        description: obj.professional.description || "",
        features: toFeatures(obj.professional.bulletPoints),
        buttonText: "Get started",
        popular: true,
      });
    if (obj.pro)
      plans.push({
        name: "Pro",
        price: obj.pro.priceRange || "",
        period: "",
        description: obj.pro.description || "",
        features: toFeatures(obj.pro.bulletPoints),
        buttonText: "Contact sales",
        popular: false,
      });
    return plans;
  }

  if (Array.isArray(pricingPlans) && pricingPlans.length > 0) {
    return pricingPlans.map((plan, i) => ({
      name: plan.name || plan.title || `Plan ${i + 1}`,
      price: plan.price || plan.amount || plan.priceRange || "",
      period: plan.period || plan.billingPeriod || "",
      description: plan.description || "",
      features: Array.isArray(plan.features)
        ? plan.features.map((f) =>
            typeof f === "string"
              ? { text: f, included: true }
              : { text: typeof f.text === "string" ? f.text : "", included: f.included !== false }
          )
        : Array.isArray(plan.bulletPoints)
        ? plan.bulletPoints.map((t) => ({ text: t, included: true }))
        : [],
      buttonText: plan.buttonText || plan.ctaText || "Get started",
      popular: plan.popular || plan.highlighted || i === 1,
    }));
  }

  if (pricing) {
    return [
      {
        name: "Starting price",
        price: pricing.starting,
        period: "",
        description: pricing.description,
        features: [
          { text: "Custom solution tailored to your needs", included: true },
          { text: "Dedicated support", included: true },
          { text: "Flexible payment options", included: true },
        ],
        buttonText: "Contact us",
        popular: false,
      },
    ];
  }

  return [];
}

export function ServicePricing({
  pricingPlans,
  pricing,
}: {
  pricingPlans?: PricingPlanObject | FlexiblePricingPlan[];
  pricing?: { starting: string; description: string };
}) {
  const tiers = normalize(pricingPlans, pricing);
  if (tiers.length === 0) return null;

  return (
    <section
      data-nav-bg="light"
      className="brand-section-light px-5 lg:px-10 pt-20 pb-24 lg:pt-32 lg:pb-32"
    >
      <p className="brand-eyebrow text-brand-ink-muted mb-6 lg:mb-8">
        <Scramble>{EYEBROW}</Scramble>
      </p>
      <h2 className="font-bricolage text-brand-display text-brand-ink mb-12 lg:mb-16">
        <StaggerText>{TITLE}</StaggerText>
      </h2>

      <div
        className={`grid gap-5 lg:gap-6 ${
          tiers.length === 1 ? "max-w-md" : "md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {tiers.map((tier) => (
          <article
            key={tier.name}
            className={`relative flex flex-col rounded-2xl p-8 lg:p-10 ${
              tier.popular
                ? "bg-brand-ink text-brand-bone"
                : "bg-brand-ink/[0.04] text-brand-ink"
            }`}
          >
            {tier.popular && (
              <span className="absolute top-6 right-6 inline-flex items-center px-3 py-1.5 bg-brand-bone-faint rounded-md text-[10px] uppercase tracking-[0.12em] font-semibold">
                Popular
              </span>
            )}

            <h3 className="font-bricolage text-2xl leading-tight">{tier.name}</h3>

            {tier.price && (
              <p className="mt-3 font-bricolage text-3xl lg:text-4xl">
                {tier.price}
                {tier.period && (
                  <span
                    className={`text-base font-albert ${
                      tier.popular ? "text-brand-bone-muted" : "text-brand-ink-muted"
                    }`}
                  >
                    {tier.period}
                  </span>
                )}
              </p>
            )}

            {tier.description && (
              <p
                className={`mt-4 font-albert text-brand-body leading-relaxed ${
                  tier.popular ? "text-brand-bone-muted" : "text-brand-ink-muted"
                }`}
              >
                {tier.description}
              </p>
            )}

            {tier.features.length > 0 && (
              <ul className="mt-6 flex flex-col gap-3 flex-grow">
                {tier.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {f.included ? (
                      <Check
                        className={`h-5 w-5 shrink-0 ${
                          tier.popular ? "text-brand-bone" : "text-brand-purple"
                        }`}
                        strokeWidth={2.2}
                        aria-hidden="true"
                      />
                    ) : (
                      <X
                        className={`h-5 w-5 shrink-0 ${
                          tier.popular ? "text-brand-bone-soft" : "text-brand-ink-soft"
                        }`}
                        strokeWidth={2.2}
                        aria-hidden="true"
                      />
                    )}
                    <span
                      className={`font-albert text-sm leading-snug ${
                        f.included
                          ? tier.popular
                            ? "text-brand-bone"
                            : "text-brand-ink"
                          : `line-through ${
                              tier.popular ? "text-brand-bone-soft" : "text-brand-ink-soft"
                            }`
                      }`}
                    >
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-8">
              <CTAButton
                href="/contact"
                variant={tier.popular ? "ghost" : "dark"}
                className="w-full"
              >
                {tier.buttonText}
              </CTAButton>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
