import { PrimaryNav } from "@/src/app/landing/_components/PrimaryNav";
import {
  PRIMARY_NAV_LINKS,
  PRIMARY_NAV_CTA,
  PRIMARY_NAV_LOGO,
} from "@/src/app/components/primary-nav-config";
import { CurvedDivider } from "@/src/app/landing/_components/CurvedDivider";
import { Footer } from "@/src/app/landing/_components/Footer";
import { ApplicationForm } from "../_components/ApplicationForm";
import { getPosition } from "../careers-positions";

export const metadata = {
  title: "Apply — Careers — Scalixity",
  description:
    "Apply to join Scalixity. Tell us about yourself and the role you're interested in, and we'll take it from there.",
};

export default async function ApplyPage({
  searchParams,
}: {
  searchParams: Promise<{ role?: string }>;
}) {
  const { role } = await searchParams;
  // Preselect the matching role if the slug is valid; otherwise the form
  // defaults to "General / Other" (no 404 for unknown/missing roles).
  const initialRole = getPosition(role)?.title;

  return (
    <div className="brand-root min-h-screen">
      <PrimaryNav
        logoText={PRIMARY_NAV_LOGO}
        links={PRIMARY_NAV_LINKS}
        cta={PRIMARY_NAV_CTA}
      />

      <ApplicationForm initialRole={initialRole} />

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      <Footer />
    </div>
  );
}
