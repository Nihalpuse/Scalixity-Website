import { PrimaryNav } from "@/src/app/landing/_components/PrimaryNav";
import {
  PRIMARY_NAV_LINKS,
  PRIMARY_NAV_CTA,
  PRIMARY_NAV_LOGO,
} from "@/src/app/components/primary-nav-config";
import { CurvedDivider } from "@/src/app/landing/_components/CurvedDivider";
import { ContactForm } from "@/src/app/landing/_components/ContactForm";
import { Footer } from "@/src/app/landing/_components/Footer";

// /contact is now a thin wrapper around the shared ContactForm section,
// rendered as the page hero (variant="page" → <h1> + hero top-padding).
// The form, contact info, book-a-call modal and socials all live in the
// unified ContactForm so they stay in sync with every other page.
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

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      <Footer />
    </div>
  );
}
