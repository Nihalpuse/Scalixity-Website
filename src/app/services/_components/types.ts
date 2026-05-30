import type {
  PricingPlanObject,
  FlexiblePricingPlan,
} from "@/src/app/components/pricing-plan";

// Shape returned by /api/website-services/<slug>, shared across the new
// service-detail template sections. Mirrors the fields the legacy page used.
export interface ServiceData {
  id?: string;
  slug?: string;
  title: string;
  description: string;
  shortDescription?: string;
  features: string[];
  technologies: Array<{ name: string; icon?: string }>;
  benefits: string[];
  pricingPlans?: PricingPlanObject | FlexiblePricingPlan[];
  pricing?: { starting: string; description: string };
}
