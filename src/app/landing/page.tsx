import { PrimaryNav } from "./_components/PrimaryNav";
import { Hero } from "./_components/Hero";
import { CurvedDivider } from "./_components/CurvedDivider";
import { ClientWins } from "./_components/ClientWins";
import { Problems } from "./_components/Problems";
import { Services } from "./_components/Services";
import { Process } from "./_components/Process";
import { Cases } from "./_components/Cases";
import { Industries } from "./_components/Industries";
import { GlobalImpact } from "./_components/GlobalImpact";
import { WhyChooseUs } from "./_components/WhyChooseUs";
import { Testimonials } from "./_components/Testimonials";
import { ContactForm } from "./_components/ContactForm";
import { Footer } from "./_components/Footer";
// import { ZoomGuard } from "./_components/ZoomGuard";

// Inlined from the former landing-source/landing-content.json (a gitignored
// working file, so it couldn't be a build dependency). Only the nav, hero, and
// page metadata ever read from it — every other section is self-contained.
const NAV_LINKS = [
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "Industries", href: "#industries", hasDropdown: true },
  { label: "Cases", href: "#cases", hasDropdown: false },
  { label: "Company", href: "#company", hasDropdown: true },
  { label: "Insights", href: "/blog", hasDropdown: false },
  { label: "Resources", href: "/resources", hasDropdown: false },
  { label: "Contacts", href: "#contact-form", hasDropdown: false },
];
const NAV_CTA = { label: "Get in touch", href: "#contact-form" };

const HERO_CTAS: { label: string; href: string; variant?: "primary" | "secondary" }[] = [
  { label: "Let's talk", href: "#contact-form", variant: "primary" },
  { label: "View our cases", href: "#cases", variant: "secondary" },
];

export const metadata = {
  title: "Scalixity — AI Solutions for Data-Driven Companies — Landing Preview",
  description:
    "We help data-driven companies build measurable generative AI solutions — from strategy to shipped product.",
};

export default function LandingPage() {
  return (
    // <ZoomGuard>
      <div className="brand-root min-h-screen">
        <PrimaryNav logoText="scalixity" links={NAV_LINKS} cta={NAV_CTA} />

        <Hero
          eyebrow="AI solutions for data-driven companies"
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
    // </ZoomGuard>
  );
}
