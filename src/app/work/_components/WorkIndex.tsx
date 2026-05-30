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
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl?: string | null;
};

type ApiProject = {
  id: number;
  title: string;
  description?: string | null;
  image: string;
  liveUrl?: string | null;
  live_url?: string | null;
};

// Real featured case preserved from the legacy WorkProjects (the second
// "Nakshatra" item there was placeholder, so it's dropped).
const FEATURED = {
  title: "AOIN — Ecommerce platform",
  description:
    "We developed AOIN, a comprehensive e-commerce platform designed to empower merchants to easily enroll, list, and manage their products online. Built end-to-end with React on the frontend and Python on the backend — a seamless, responsive, and secure experience for merchants and customers alike.",
  demoSrc:
    "https://app.supademo.com/embed/cmielh911b27wb7b43c4nsisn?v_email=EMAIL&embed_v=2&utm_source=embed",
};

function ArrowExternal() {
  return (
    <svg
      viewBox="0 0 18 18"
      aria-hidden="true"
      className="h-4 w-4 fill-none stroke-current"
      strokeWidth="1.8"
    >
      <path d="M5 13L13 5M6 5h7v7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WorkIndex() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showDemo, setShowDemo] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`${baseURL}/api/work/projects`);
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data: ApiProject[] = await res.json();
        const mapped: Project[] = data
          .map((p) => ({
            id: p.id,
            title: p.title,
            description: p.description || "",
            image: p.image,
            liveUrl: p.liveUrl || p.live_url || null,
          }))
          .reverse();
        if (!cancelled) setProjects(mapped);
      } catch (err) {
        if (!cancelled)
          setError(err instanceof Error ? err.message : "Failed to load projects");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, []);

  // Deep-link support: /work#aoin-project scrolls to the featured case.
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#aoin-project") {
      setTimeout(() => {
        document
          .getElementById("aoin-project")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [loading]);

  return (
    <div className="brand-root min-h-screen">
      <PrimaryNav
        logoText={PRIMARY_NAV_LOGO}
        links={PRIMARY_NAV_LINKS}
        cta={PRIMARY_NAV_CTA}
      />

      {/* Hero (dark) */}
      <section className="relative bg-brand-ink text-brand-bone">
        <div className="px-5 pt-40 pb-24 lg:px-10 lg:pt-48 lg:pb-32">
          <p className="brand-eyebrow text-brand-bone-muted mb-8">
            <Scramble>Selected work</Scramble>
          </p>
          <h1 className="font-bricolage text-brand-display text-brand-bone max-w-[16ch]">
            <StaggerText>Digital solutions we&apos;ve engineered</StaggerText>
          </h1>
          <p className="font-albert text-brand-body-lg text-brand-bone-muted max-w-2xl mt-8">
            A selection of the products and platforms we&apos;ve designed,
            engineered, and shipped end to end.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <CTAButton href="/contact" variant="primary">
              Start a project
            </CTAButton>
            <CTAButton href="/" variant="secondary">
              Explore Scalixity
            </CTAButton>
          </div>
        </div>
      </section>

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      {/* Projects grid (light) */}
      <section
        data-nav-bg="light"
        className="brand-section-light px-5 lg:px-10 pt-20 pb-24 lg:pt-32 lg:pb-32"
      >
        <p className="brand-eyebrow text-brand-ink-muted mb-6 lg:mb-8">
          <Scramble>Projects</Scramble>
        </p>
        <h2 className="font-bricolage text-brand-display text-brand-ink mb-12 lg:mb-16 max-w-[18ch]">
          <StaggerText>Things we&apos;ve shipped</StaggerText>
        </h2>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 animate-pulse">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl bg-brand-ink/[0.04] overflow-hidden">
                <div className="aspect-[16/10] bg-brand-ink/[0.06]" />
                <div className="p-6 lg:p-8">
                  <div className="h-5 w-2/3 rounded bg-brand-ink/[0.06] mb-4" />
                  <div className="h-3 w-full rounded bg-brand-ink/[0.06] mb-2" />
                  <div className="h-3 w-5/6 rounded bg-brand-ink/[0.06]" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <p className="font-albert text-brand-body-lg text-brand-ink-muted">
            We couldn&apos;t load the project list right now. Please try again, or{" "}
            <a href="/contact" className="text-brand-ink underline underline-offset-2 hover:text-brand-purple">
              get in touch
            </a>
            .
          </p>
        ) : projects.length === 0 ? (
          <p className="font-albert text-brand-body-lg text-brand-ink-muted">
            New work is on the way — check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group rounded-2xl bg-brand-ink/[0.04] overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-brand-ink/[0.06]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-brand-out group-hover:scale-105"
                  />
                </div>
                <div className="p-6 lg:p-8 flex flex-col gap-3 flex-grow">
                  <h3 className="font-bricolage text-xl lg:text-2xl text-brand-ink leading-tight">
                    {project.title}
                  </h3>
                  {project.description && (
                    <p className="font-albert text-brand-body text-brand-ink-muted leading-relaxed flex-grow">
                      {project.description}
                    </p>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-purple hover:text-brand-purple-hover transition-colors"
                    >
                      Visit live site
                      <ArrowExternal />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Featured case with live demo */}
        <div id="aoin-project" className="mt-20 lg:mt-28 scroll-mt-28">
          <p className="brand-eyebrow text-brand-ink-muted mb-6">
            <Scramble>Featured case</Scramble>
          </p>
          <div className="rounded-brand-section bg-brand-ink text-brand-bone p-6 lg:p-10 overflow-hidden">
            <button
              type="button"
              onClick={() => setShowDemo(true)}
              aria-label="Open the AOIN live demo"
              className="relative block w-full aspect-video overflow-hidden rounded-2xl bg-brand-bone/[0.06]"
            >
              <iframe
                src={FEATURED.demoSrc}
                loading="lazy"
                title="AOIN live demo"
                allow="clipboard-write"
                className="pointer-events-none h-full w-full border-0"
              />
            </button>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="font-bricolage text-brand-h3 text-brand-bone leading-tight mb-6">
                  {FEATURED.title}
                </h3>
                <CTAButton onClick={() => setShowDemo(true)} variant="ghost">
                  View live demo
                </CTAButton>
              </div>
              <p className="font-albert text-brand-body-lg text-brand-bone-muted leading-relaxed">
                {FEATURED.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CurvedDivider fromColor="bone" className="-mt-px relative z-10" />

      <ContactForm />

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      <Footer />

      {/* Demo modal */}
      {showDemo && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-brand-ink/80 p-4 overflow-y-auto"
          onClick={() => setShowDemo(false)}
          role="dialog"
          aria-modal="true"
          aria-label="AOIN live demo"
        >
          <div
            className="relative w-full max-w-6xl rounded-2xl bg-brand-bone p-4 lg:p-6 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bricolage text-xl lg:text-2xl text-brand-ink">
                AOIN — live demo
              </h3>
              <button
                type="button"
                onClick={() => setShowDemo(false)}
                aria-label="Close demo"
                className="grid h-10 w-10 place-items-center rounded-brand-btn bg-brand-ink-faint text-brand-ink transition-colors hover:bg-brand-ink/10"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8" aria-hidden="true">
                  <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="relative w-full h-[60vh] lg:h-[72vh]">
              <iframe
                src={FEATURED.demoSrc}
                loading="lazy"
                title="AOIN live demo"
                allow="clipboard-write"
                className="h-full w-full rounded-xl border-0"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
