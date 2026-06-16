"use client";

import { useEffect, useRef, useState } from "react";
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

// Project shape matches exactly what `/api/work/projects` returns (see the
// admin form in src/app/dashboard/work/page.tsx). The page renders this shape
// directly — no richer client-side model — so curated fallback cards and live
// API cards look identical.
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl: string | null;
  // The API write path posts `live_url`; tolerate it on read as well.
  live_url?: string | null;
};

// Curated Scalixity projects used as the seed render and the fallback when the
// API is unreachable or empty. Same shape as the API.
const FALLBACK_PROJECTS: Project[] = [
  {
    id: 1,
    title: "AI-powered claim settlement for an insurance provider",
    description:
      "An AI pipeline that automates document review and accelerates claim settlement, reducing manual effort across the claims workflow.",
    image: "/landing/cases/Case-preview-2-2.png.webp",
    liveUrl: null,
  },
  {
    id: 2,
    title: "Medical claim automation for a healthcare network",
    description:
      "Document processing and OCR that improve medical-claim accuracy and cut down on manual review for a healthcare network.",
    image: "/landing/cases/Case-preview-10.png.webp",
    liveUrl: null,
  },
  {
    id: 3,
    title: "CAD-to-BOM automation for a manufacturer",
    description:
      "Computer-vision automation that turns CAD drawings into bills of materials, streamlining engineering estimation for a global manufacturer.",
    image: "/landing/cases/Case-Preview-mob.png.webp",
    liveUrl: null,
  },
];

const FEATURED = {
  title: "AOIN — Ecommerce platform",
  description:
    "We developed AOIN, a comprehensive e-commerce platform designed to empower merchants to easily enroll, list, and manage their products online. Built end-to-end with React on the frontend and Python on the backend — a seamless, responsive, and secure experience for merchants and customers alike.",
  demoSrc:
    "https://app.supademo.com/embed/cmielh911b27wb7b43c4nsisn?v_email=EMAIL&embed_v=2&utm_source=embed",
};

// Normalize a raw API record to the Project shape (resolving liveUrl/live_url).
function normalizeProject(p: Project): Project {
  return {
    id: p.id,
    title: p.title,
    description: p.description,
    image: p.image,
    liveUrl: p.liveUrl ?? p.live_url ?? null,
  };
}

export function WorkIndex() {
  const [projects, setProjects] = useState<Project[]>(FALLBACK_PROJECTS);
  const [showDemo, setShowDemo] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      try {
        const res = await fetch(`${baseURL}/api/work/projects`);
        if (!res.ok) return; // keep fallback
        const data: Project[] = await res.json();
        if (cancelled) return;
        if (Array.isArray(data) && data.length > 0) {
          setProjects(data.map(normalizeProject).reverse());
        }
      } catch {
        // network/JSON error — keep fallback silently
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="brand-root min-h-screen">
      <PrimaryNav
        logoText={PRIMARY_NAV_LOGO}
        links={PRIMARY_NAV_LINKS}
        cta={PRIMARY_NAV_CTA}
      />

      {/* Hero + listing (light) — big "Explore our projects" headline */}
      <section
        data-nav-bg="light"
        className="brand-section-light px-5 lg:px-10 pt-36 pb-24 lg:pt-48 lg:pb-32"
      >
        <h1 className="font-bricolage text-brand-display text-brand-ink">
          <StaggerText>Explore our projects</StaggerText>
        </h1>

        {/* Project cards */}
        <div className="mt-16 lg:mt-24">
          {projects.length === 0 ? (
            <p className="font-albert text-brand-body-lg text-brand-ink-muted">
              New work is on the way — check back soon.
            </p>
          ) : (
            projects.map((p, i) => (
              <ProjectCard key={p.id} data={p} index={i} />
            ))
          )}
        </div>

        {/* Featured case with live demo */}
        <div id="aoin-project" className="mt-24 lg:mt-32 scroll-mt-28">
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

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
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
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-none stroke-current"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
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

// Single project row matching the API shape (image + title + description +
// link). Editorial alternating layout: the image dominates (7/12) and swaps
// sides every other row, with a compact text column (5/12) centered beside it.
function ProjectCard({ data, index }: { data: Project; index: number }) {
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const reversed = index % 2 === 1;

  useEffect(() => {
    const el = imageWrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      className={
        index === 0
          ? ""
          : "mt-16 lg:mt-24 pt-16 lg:pt-24 border-t border-brand-ink/10"
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* Image (dominant; swaps side on alternate rows at lg) */}
        <div className={`lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}>
          <div
            ref={imageWrapRef}
            className={`group aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-stone-300 via-stone-400 to-stone-600 relative transition-[transform,opacity] duration-700 ease-brand-out ${
              revealed ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            {data.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={data.image}
                alt={data.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-brand-out group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center font-bricolage text-2xl uppercase tracking-[0.18em] text-brand-bone/70">
                {data.title}
              </div>
            )}
          </div>
        </div>

        {/* Details */}
        <div
          className={`lg:col-span-5 flex flex-col gap-5 lg:gap-6 ${
            reversed ? "lg:order-1" : ""
          }`}
        >
          <h3 className="font-bricolage text-2xl lg:text-3xl xl:text-4xl text-brand-ink leading-tight">
            {data.title}
          </h3>

          {data.description && (
            <p className="font-albert text-brand-body-lg text-brand-ink-muted leading-relaxed">
              {data.description}
            </p>
          )}

          <div className="mt-1">
            <CTAButton href={data.liveUrl || "/contact"} variant="primary" onLight>
              {data.liveUrl ? "View project" : "Discuss this"}
            </CTAButton>
          </div>
        </div>
      </div>
    </article>
  );
}
