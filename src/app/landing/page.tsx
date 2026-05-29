import content from "../../../landing-source/landing-content.json";
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
import { ZoomGuard } from "./_components/ZoomGuard";

export const metadata = {
  title: `${content.page.title} — Landing Preview`,
  description: content.page.description,
};

export default function LandingPage() {
  return (
    // <ZoomGuard>
      <div className="brand-root min-h-screen">
        <PrimaryNav
          logoText={content.nav.logo.text}
          links={content.nav.links}
          cta={content.nav.cta}
        />

        <Hero
          eyebrow={content.hero.eyebrow}
          title={content.hero.title}
          subtitle={content.hero.subtitle}
          ctas={content.hero.ctas as { label: string; href: string; variant?: "primary" | "secondary" }[]}
          showreelLabel={content.hero.showreel.label}
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
