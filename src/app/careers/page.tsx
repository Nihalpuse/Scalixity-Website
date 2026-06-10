import { PrimaryNav } from "@/src/app/landing/_components/PrimaryNav";
import {
  PRIMARY_NAV_LINKS,
  PRIMARY_NAV_CTA,
  PRIMARY_NAV_LOGO,
} from "@/src/app/components/primary-nav-config";
import { CurvedDivider } from "@/src/app/landing/_components/CurvedDivider";
import { Footer } from "@/src/app/landing/_components/Footer";
import { CoreValues } from "./_components/CoreValues";
import { KeyStrength } from "./_components/KeyStrength";
import { OpenPositions } from "./_components/OpenPositions";
import { ReadyToJoin } from "./_components/ReadyToJoin";
import { CareersHero } from "./_components/CareersHero";
import { LifeAtScalixity } from "./_components/LifeAtScalixity";
import { Perks } from "./_components/Perks";
import { CareersCTA } from "./_components/CareersCTA";

export const metadata = {
  title: "Careers — Scalixity",
  description:
    "Join Scalixity — build meaningful AI products with a small, senior, remote-first team that cares about craft, ownership, and growth.",
};

export default function CareersPage() {
  return (
    <div className="brand-root min-h-screen">
      <PrimaryNav
        logoText={PRIMARY_NAV_LOGO}
        links={PRIMARY_NAV_LINKS}
        cta={PRIMARY_NAV_CTA}
      />

      <CareersHero />

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      {/* Consecutive light sections stack without dividers (same as /company). */}
      <LifeAtScalixity />
      <CoreValues />

      {/* Dark "Our key strength" block sits between light sections. */}
      <CurvedDivider fromColor="bone" className="-mt-px relative z-10" />
      <KeyStrength />
      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      <Perks />
      <OpenPositions />
      <ReadyToJoin />

      <CurvedDivider fromColor="bone" className="-mt-px relative z-10" />

      <CareersCTA />

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      <Footer />
    </div>
  );
}
