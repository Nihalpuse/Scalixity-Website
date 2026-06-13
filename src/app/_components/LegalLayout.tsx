import { PrimaryNav } from "@/src/app/landing/_components/PrimaryNav";
import {
  PRIMARY_NAV_LINKS,
  PRIMARY_NAV_CTA,
  PRIMARY_NAV_LOGO,
} from "@/src/app/components/primary-nav-config";
import { CurvedDivider } from "@/src/app/landing/_components/CurvedDivider";
import { Footer } from "@/src/app/landing/_components/Footer";
import { LegalBody } from "./LegalBody";

// Shared layout for legal pages (Terms, Privacy, Cookies) in the brand design.
// Content is data-driven so the legal text lives in strings (rendered via {})
// — which also avoids JSX unescaped-entity issues with apostrophes/quotes.

type ListItem = string | { term: string; text: string };
type Card = {
  title?: string;
  rows: { label: string; value: string; href?: string }[];
};
export type LegalBlock =
  | { p: string }
  | { note: string }
  | { subhead: string }
  | { list: ListItem[]; ordered?: boolean }
  | { card: Card };
export type LegalSection = { heading: string; blocks: LegalBlock[] };

export function LegalLayout({
  title,
  effectiveDate,
  lastUpdated,
  sections,
}: {
  title: string;
  effectiveDate?: string;
  lastUpdated?: string;
  sections: LegalSection[];
}) {
  return (
    <div className="brand-root min-h-screen">
      <PrimaryNav
        logoText={PRIMARY_NAV_LOGO}
        links={PRIMARY_NAV_LINKS}
        cta={PRIMARY_NAV_CTA}
      />

      {/* Hero (dark) */}
      <section className="relative bg-brand-ink text-brand-bone px-5 lg:px-10 pt-28 pb-14 lg:pt-36 lg:pb-20">
        <p className="brand-eyebrow text-brand-bone-muted">Legal</p>
        <h1 className="mt-5 font-bricolage text-brand-display text-brand-bone max-w-[20ch] leading-[1.05]">
          {title}
        </h1>
        {(effectiveDate || lastUpdated) && (
          <p className="mt-7 font-albert text-sm text-brand-bone-muted">
            {effectiveDate ? `Effective ${effectiveDate}` : ""}
            {effectiveDate && lastUpdated ? "   ·   " : ""}
            {lastUpdated ? `Last updated ${lastUpdated}` : ""}
          </p>
        )}
      </section>

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      {/* Body (light) */}
      <section
        data-nav-bg="light"
        className="brand-section-light px-5 lg:px-10 pt-14 pb-14 lg:pt-24 lg:pb-24"
      >
        <LegalBody sections={sections} />
      </section>

      <Footer />
    </div>
  );
}
