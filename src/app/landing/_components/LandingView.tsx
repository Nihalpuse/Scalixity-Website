import { PrimaryNav } from "./PrimaryNav";
import { Hero } from "./Hero";
import { CurvedDivider } from "./CurvedDivider";
import { ClientWins } from "./ClientWins";
import { Problems } from "./Problems";
import { Services } from "./Services";
import { Process } from "./Process";
import { Cases } from "./Cases";
import { Industries } from "./Industries";
import { GlobalImpact } from "./GlobalImpact";
import { WhyChooseUs } from "./WhyChooseUs";
import { Testimonials } from "./Testimonials";
import { ContactForm } from "./ContactForm";
import { Footer } from "./Footer";
import {
  PRIMARY_NAV_LINKS,
  PRIMARY_NAV_CTA,
  PRIMARY_NAV_LOGO,
} from "@/src/app/components/primary-nav-config";

// Hero copy inlined from the former landing-source/landing-content.json (a
// gitignored working file). The nav uses the shared route-based config so the
// top-level links go to real pages (/services, /industries, …) like the rest
// of the site, rather than in-page anchors.
const HERO_CTAS: { label: string; href: string; variant?: "primary" | "secondary" }[] = [
  { label: "Let's talk", href: "#contact-form", variant: "primary" },
  { label: "View our cases", href: "#cases", variant: "secondary" },
];

export function LandingView() {
  return (
    <div className="brand-root min-h-screen">
      <PrimaryNav
        logoText={PRIMARY_NAV_LOGO}
        links={PRIMARY_NAV_LINKS}
        cta={PRIMARY_NAV_CTA}
      />

      <Hero
        eyebrow="Build. Ship. Scale."
        title="Your growth engine, not just your tech team"
        subtitle="At Scalixity, we redefine innovation by crafting AI solutions tailored to elevate businesses. Our approach merges data intelligence and automation, unlocking new realms of growth and efficiency."
        ctas={HERO_CTAS}
      />

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      <ClientWins />

      <Problems />

      <CurvedDivider fromColor="bone" className="-mt-px relative z-10" />

      <Services />

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      <Process />

      <Cases />

      <Industries />

      <GlobalImpact />

      <WhyChooseUs />

      <Testimonials />

      <CurvedDivider fromColor="bone" className="-mt-px relative z-10" />

      <ContactForm />

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      <Footer />
    </div>
  );
}
