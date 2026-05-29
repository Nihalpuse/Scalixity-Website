import { PrimaryNav } from "@/src/app/landing/_components/PrimaryNav";
import {
  PRIMARY_NAV_LINKS,
  PRIMARY_NAV_CTA,
  PRIMARY_NAV_LOGO,
} from "@/src/app/components/primary-nav-config";
import { CurvedDivider } from "@/src/app/landing/_components/CurvedDivider";
import { GlobalImpact } from "@/src/app/landing/_components/GlobalImpact";
import { ContactForm } from "@/src/app/landing/_components/ContactForm";
import { Footer } from "@/src/app/landing/_components/Footer";
import { AboutHero } from "./_components/AboutHero";
import { Journey } from "./_components/Journey";
import { Values } from "./_components/Values";
import { Team } from "./_components/Team";

export const metadata = {
  title: "About us — Scalixity",
  description:
    "Scalixity bridges the gap between complex data and actionable strategy. Meet the team building AI-driven ecosystems that propel businesses into the future.",
};

export default function CompanyPage() {
  return (
    <div className="brand-root min-h-screen">
      <PrimaryNav
        logoText={PRIMARY_NAV_LOGO}
        links={PRIMARY_NAV_LINKS}
        cta={PRIMARY_NAV_CTA}
      />

      <AboutHero />

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      <GlobalImpact />
      <Journey />
      <Values />
      <Team />

      <CurvedDivider fromColor="bone" className="-mt-px relative z-10" />

      <ContactForm />

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      <Footer />
    </div>
  );
}
