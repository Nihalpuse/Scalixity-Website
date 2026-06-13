import type { QA } from "../landing/_components/FAQ";

// Content for the dynamic /services/[slug] template. One entry per service in
// the PrimaryNav "Services" mega-menu. Each service's content lives in its own
// file under ./content/<slug>.ts; this module defines the shared types and
// assembles them into SERVICES_CONTENT + lookup helpers (consumed by the server
// component with generateStaticParams).
//
// Brand rule: honest, Scalixity-specific copy only — no fabricated metrics,
// client names, testimonials, certifications, or awards. Claims stay qualitative.

export type ServiceChallenge = {
  problem: string;
  solution: string;
  /** Optional right-side image for the sticky challenge card (unused in the
   *  current text-only layout). */
  image?: string;
};
export type ServiceCard = { title: string; description: string };
/** Benefit card carrying a lucide icon name (resolved in ServiceWhyUs). */
export type ServiceBenefit = { title: string; description: string; icon?: string };
/** A single step in the per-service process section (sticky stacked rows). */
export type ProcessStep = {
  /** Left-column label, e.g. "Stakeholder interview". */
  label: string;
  /** Center heading for the step. */
  title: string;
  description: string;
  /** "Key steps:" bullet list. */
  keySteps?: string[];
  /** "Deliverables" tag chips. */
  deliverables?: string[];
};

export type ServiceContent = {
  slug: string;
  /** One of: Design | Development | Research | Validate | Build | Scale. */
  category: string;
  /** Page nav label / hero eyebrow, e.g. "Web app design". */
  title: string;
  /** Catchy hero H1 phrase, e.g. "Web app design that drives growth & user engagement". Falls back to `title`. */
  heroTitle?: string;
  /** 1–2 sentence intro (kept for reference; no longer rendered in the hero). */
  heroLead: string;
  /** <meta name="description"> for generateMetadata. */
  metaDescription: string;
  /** Short one-liner used on related-service cards. */
  summary?: string;
  /** Big, punchy heading for the Challenges section (per service). */
  challengesTitle?: string;
  /** ~3 honest problem → how-we-approach-it pairs (sticky stacked cards). */
  challenges: ServiceChallenge[];
  /** Eyebrow above the industry-solutions grid. */
  solutionsEyebrow?: string;
  /** Heading for the industry-solutions grid. */
  solutionsTitle?: string;
  /** 6 industry cards (numbered, dark grid). */
  solutions?: ServiceCard[];
  /** @deprecated legacy "what we deliver" capability cards — no longer rendered. */
  deliverTitle?: string;
  /** @deprecated — superseded by `solutions`. */
  deliverables?: ServiceCard[];
  /** Heading above the benefits grid. */
  benefitsTitle: string;
  /** 6 differentiators with a lucide icon each. */
  benefits: ServiceBenefit[];
  /** Eyebrow above the process section. */
  processEyebrow?: string;
  /** Heading for the process section. */
  processTitle?: string;
  /** Sticky stacked process steps. */
  process?: ProcessStep[];
  /** Centered "Let's connect" CTA heading (per service). */
  connectTitle?: string;
  /** ~4 honest Q&A reusing the FAQ component's QA shape. */
  faqs: QA[];
  /** 2–3 related service slugs for cross-navigation. */
  related: string[];
};

// --- Per-service content (one file each under ./content) --------------------
import { webAppDesign } from "./content/web-app-design";
import { mobileAppDesign } from "./content/mobile-app-design";
import { websiteDesign } from "./content/website-design";
import { websiteRedesign } from "./content/website-redesign";
import { branding } from "./content/branding";
import { webDevelopment } from "./content/web-development";
import { mobileAppDevelopment } from "./content/mobile-app-development";
import { websiteDevelopment } from "./content/website-development";
import { noCodeDevelopment } from "./content/no-code-development";
import { blockchainDevelopment } from "./content/blockchain-development";
import { aiDevelopment } from "./content/ai-development";
import { uxAudit } from "./content/ux-audit";
import { productDiscovery } from "./content/product-discovery";
import { technicalWorkshop } from "./content/technical-workshop";
import { designPrototype } from "./content/design-prototype";
import { customMvpDevelopment } from "./content/custom-mvp-development";
import { rapidMvpDevelopment } from "./content/rapid-mvp-development";
import { dedicatedTeam } from "./content/dedicated-team";
import { productRedesign } from "./content/product-redesign";
import { teamExtension } from "./content/team-extension";

export const SERVICES_CONTENT: ServiceContent[] = [
  // Design
  webAppDesign,
  mobileAppDesign,
  websiteDesign,
  websiteRedesign,
  branding,
  // Development
  webDevelopment,
  mobileAppDevelopment,
  websiteDevelopment,
  noCodeDevelopment,
  blockchainDevelopment,
  aiDevelopment,
  // Research
  uxAudit,
  productDiscovery,
  technicalWorkshop,
  // Validate
  designPrototype,
  // Build
  customMvpDevelopment,
  rapidMvpDevelopment,
  dedicatedTeam,
  // Scale
  productRedesign,
  teamExtension,
];

export function getService(slug: string): ServiceContent | undefined {
  return SERVICES_CONTENT.find((s) => s.slug === slug);
}

// Resolve a service's `related` slugs to full entries, dropping any that
// don't match (defensive against typos in the data).
export function getRelated(slug: string): ServiceContent[] {
  const svc = getService(slug);
  if (!svc) return [];
  return svc.related
    .map((rs) => getService(rs))
    .filter((s): s is ServiceContent => Boolean(s));
}
