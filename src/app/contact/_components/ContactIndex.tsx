import { PrimaryNav } from "@/src/app/landing/_components/PrimaryNav";
import {
  PRIMARY_NAV_LINKS,
  PRIMARY_NAV_CTA,
  PRIMARY_NAV_LOGO,
} from "@/src/app/components/primary-nav-config";
import { CurvedDivider } from "@/src/app/landing/_components/CurvedDivider";
import { ContactForm } from "@/src/app/landing/_components/ContactForm";
import { AboutWorldwide } from "@/src/app/about/_components/AboutWorldwide";
import { Industries } from "@/src/app/landing/_components/Industries";
import { Testimonials } from "@/src/app/landing/_components/Testimonials";
import { Footer } from "@/src/app/landing/_components/Footer";

// /contact leads with the shared ContactForm section as the page hero
// (variant="page" → <h1> + hero top-padding). Below it we reuse a few
// supporting sections — global reach, key industries, and client voices —
// so the form, contact info, book-a-call modal stay in sync site-wide.
export function ContactIndex() {
  return (
    <div className="brand-root min-h-screen">
      <PrimaryNav
        logoText={PRIMARY_NAV_LOGO}
        links={PRIMARY_NAV_LINKS}
        cta={PRIMARY_NAV_CTA}
      />

      <ContactForm
        variant="page"
        title="Let's build something"
        description="Tell us about your project and we'll get back to you shortly — or book a 30-minute call and we'll meet over video."
      />

      {/* ContactForm is dark; the divider transitions to the light sections
          below. They're all light, so no dividers between them. */}
      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      <AboutWorldwide />
      <Industries />
      <Testimonials />

      <Footer />
    </div>
  );
}
