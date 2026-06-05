"use client";

import { useEffect, useState } from "react";
import { PrimaryNav } from "@/src/app/landing/_components/PrimaryNav";
import {
  PRIMARY_NAV_LINKS,
  PRIMARY_NAV_CTA,
  PRIMARY_NAV_LOGO,
} from "@/src/app/components/primary-nav-config";
import { CurvedDivider } from "@/src/app/landing/_components/CurvedDivider";
import { ContactForm } from "@/src/app/landing/_components/ContactForm";
import { Footer } from "@/src/app/landing/_components/Footer";
import { CTAButton } from "@/src/app/landing/_components/CTAButton";
import type { ServiceData } from "./types";
import { ServiceHero } from "./ServiceHero";
import { ServiceFeatures } from "./ServiceFeatures";
import { ServiceBenefits } from "./ServiceBenefits";
import { ServiceTech } from "./ServiceTech";
import { ServicePricing } from "./ServicePricing";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

/**
 * Reusable service-detail page template. Fetches the service data for `slug`
 * and renders the full new-design page (chrome included) inside a .brand-root
 * wrapper. Each /services/<x>/page.tsx is a thin wrapper around this.
 */
export function ServiceDetail({
  slug,
  images = [],
}: {
  slug: string;
  images?: string[];
}) {
  const [data, setData] = useState<ServiceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`${baseURL}/api/website-services/${slug}`);
        if (!res.ok) throw new Error("Failed to fetch service data");
        const result = await res.json();
        if (!result.success || !result.data) {
          throw new Error("Invalid service data format");
        }
        if (!cancelled) setData(result.data as ServiceData);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to load service data");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  return (
    <div className="brand-root min-h-screen">
      <PrimaryNav
        logoText={PRIMARY_NAV_LOGO}
        links={PRIMARY_NAV_LINKS}
        cta={PRIMARY_NAV_CTA}
      />

      {loading ? (
        <ServiceDetailSkeleton />
      ) : error || !data ? (
        <ServiceDetailError message={error} />
      ) : (
        <>
          <ServiceHero
            title={data.title}
            description={data.description}
            images={images}
          />

          <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

          <ServiceFeatures features={data.features ?? []} />
          <ServiceBenefits benefits={data.benefits ?? []} />

          <CurvedDivider fromColor="bone" className="-mt-px relative z-10" />

          <ServiceTech technologies={data.technologies ?? []} />

          <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

          <ServicePricing
            pricingPlans={data.pricingPlans}
            pricing={data.pricing}
          />

          <CurvedDivider fromColor="bone" className="-mt-px relative z-10" />

          <ContactForm />

          <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

          <Footer />
        </>
      )}
    </div>
  );
}

function ServiceDetailSkeleton() {
  return (
    <section className="bg-brand-ink text-brand-bone px-5 lg:px-10 pt-28 pb-14 lg:pt-36 lg:pb-24">
      <div className="animate-pulse">
        <div className="h-3 w-32 rounded bg-brand-bone/[0.12] mb-8" />
        <div className="h-12 w-3/4 max-w-3xl rounded bg-brand-bone/[0.12] mb-4" />
        <div className="h-12 w-1/2 max-w-2xl rounded bg-brand-bone/[0.12] mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mt-16">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-2xl bg-brand-bone/[0.06]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceDetailError({ message }: { message: string | null }) {
  return (
    <section className="bg-brand-ink text-brand-bone px-5 lg:px-10 pt-28 pb-14 lg:pt-36 min-h-[70vh] flex flex-col justify-center">
      <p className="brand-eyebrow text-brand-bone-muted mb-6">Service unavailable</p>
      <h1 className="font-bricolage text-brand-h2 text-brand-bone max-w-[18ch] mb-6">
        We couldn&apos;t load this service
      </h1>
      <p className="font-albert text-brand-body-lg text-brand-bone-muted max-w-xl mb-10">
        {message || "Something went wrong."} Please try again, or get in touch and
        we&apos;ll help directly.
      </p>
      <div className="flex flex-wrap gap-3 max-sm:flex-col max-sm:[&>*]:w-full">
        <CTAButton href="/services" variant="secondary">
          All services
        </CTAButton>
        <CTAButton href="/contact" variant="primary">
          Get in touch
        </CTAButton>
      </div>
    </section>
  );
}
