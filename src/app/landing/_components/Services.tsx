"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CTAButton } from "./CTAButton";
import { Scramble } from "./Scramble";
import { StaggerText } from "./StaggerText";
import { useActiveOnScroll } from "./useActiveOnScroll";
import { useIsDesktop, usePrefersReducedMotion, useVideoPrefetch } from "./useMobileEnv";

// Services adapted from src/app/components/growth-partner + process on
// the existing Scalixity landing.
const INTRO = {
  eyebrow: "What we offer",
  title: "Tailored support from first prototype to long-term scale",
  description:
    "Great products don't happen by accident. As an AI-first engineering partner, we help data-driven teams grow through smart strategy, AI engineering, and scalable infrastructure from day one.",
};

export type Service = {
  number: string;
  title: string;
  description: string;
  /** Clip in /public/landing that plays on hover. */
  video?: string;
  /** Maps the card to /services/<slug>; omit to fall back to the /services index. */
  slug?: string;
};

export type Cohort = {
  key: string;
  label: string;
  title: string;
  services: Service[];
};

const COHORTS: Cohort[] = [
  {
    key: "launch",
    label: "Launch",
    title: "Validate your idea and ship your first AI product",
    services: [
      {
        number: "01",
        title: "Design prototype",
        slug: "design-prototype",
        description:
          "Test ideas fast with interactive prototypes and visual flows.",
        video: "/landing/Design-prototype.mp4",
      },
      {
        number: "02",
        title: "Product discovery",
        slug: "product-discovery",
        description:
          "Map out user flows, model strategy, and architecture before any code is written.",
        video: "/landing/Product-discovery.mp4",
      },
      {
        number: "03",
        title: "Rapid MVP development",
        slug: "rapid-mvp-development",
        description:
          "Launch faster with pre-built ML frameworks and lean sprints.",
        // TODO: no exact clip — placeholder; swap when a Rapid-MVP video exists.
        video: "/landing/compressed-video-2.mp4",
      },
      {
        number: "04",
        title: "Custom MVP development",
        slug: "custom-mvp-development",
        description:
          "Build production-ready AI products from prototype to deployed system.",
        video: "/landing/Custom-MVP-development.mp4",
      },
      {
        number: "05",
        title: "AI development",
        slug: "ai-development",
        description:
          "Ship production-grade AI — LLM apps, RAG, predictive models, and agents.",
        // Reuses the AI-themed placeholder clip; swap when a dedicated one exists.
        video: "/landing/cab5f51f-a135-4777-8895-398644445757.mp4",
      },
    ],
  },
  {
    key: "evolve",
    label: "Evolve",
    title: "Refine, redesign, and grow what you've built",
    services: [
      {
        number: "01",
        title: "UX audit",
        slug: "ux-audit",
        description:
          "Find usability bottlenecks and get a prioritized plan to fix them.",
        video: "/landing/UX-audit.mp4",
      },
      {
        number: "02",
        title: "Product redesign",
        slug: "product-redesign",
        description:
          "Modernize legacy UX and integrate AI where it actually moves metrics.",
        video: "/landing/Website-redesign.mp4",
      },
      {
        number: "03",
        title: "Web app design",
        slug: "web-app-design",
        description:
          "Design responsive, user-focused web platforms with strong UX/UI logic.",
        video: "/landing/cab5f51f-a135-4777-8895-398644445757.mp4",
      },
      {
        number: "04",
        title: "Web app development",
        slug: "web-development",
        description:
          "Polished front-ends and APIs engineered for AI-first products.",
        video: "/landing/Website-development.mp4",
      },
      {
        number: "05",
        title: "Mobile app design",
        slug: "mobile-app-design",
        description:
          "Create intuitive, performance-optimized mobile apps for iOS and Android.",
        video: "/landing/compressed-video-2.mp4",
      },
      {
        number: "06",
        title: "Mobile app development",
        slug: "mobile-app-development",
        description:
          "End-to-end development of mobile applications for iOS and Android.",
        video: "/landing/compressed-video-2.mp4",
      },
    ],
  },
  {
    key: "rebrand",
    label: "Rebrand",
    title: "Refresh your brand, website, and identity",
    services: [
      {
        number: "01",
        title: "Branding & identity",
        slug: "branding",
        description:
          "Develop a brand that resonates — visually, emotionally, and strategically.",
        video: "/landing/Branding.mp4",
      },
      {
        number: "02",
        title: "Website redesign",
        slug: "website-redesign",
        description:
          "Modernize your web presence with design that drives engagement and authority.",
        video: "/landing/Website-redesign.mp4",
      },
      {
        number: "03",
        title: "Website development",
        slug: "website-development",
        description:
          "Launch a fast, scalable site that converts and supports growth.",
        video: "/landing/Website-development.mp4",
      },
    ],
  },
  {
    key: "extend",
    label: "Extend",
    title: "Add senior talent and capacity to your team",
    services: [
      {
        number: "01",
        title: "Team extension",
        slug: "team-extension",
        description:
          "Senior designers and developers ready to ship, starting tomorrow.",
        video: "/landing/Team-extension.mp4",
      },
      {
        number: "02",
        title: "Dedicated team",
        slug: "dedicated-team",
        description:
          "An embedded pod of senior engineers, designers, and ML specialists.",
        video: "/landing/Dedicated-team.mp4",
      },
    ],
  },
];

type Theme = "dark" | "light";

export function Services({
  theme = "dark",
  eyebrow = INTRO.eyebrow,
  title = INTRO.title,
  description = INTRO.description,
  cohorts = COHORTS,
}: {
  theme?: Theme;
  eyebrow?: string;
  title?: string;
  description?: string;
  cohorts?: Cohort[];
} = {}) {
  const isLight = theme === "light";
  // Full literal class strings (Tailwind can't generate dynamically-built
  // prefixed classes).
  const c = {
    section: isLight ? "brand-section-light" : "bg-brand-ink text-brand-bone",
    eyebrow: isLight ? "text-brand-ink-muted" : "text-brand-bone-muted",
    heading: isLight ? "text-brand-ink" : "text-brand-bone",
    desc: isLight ? "text-brand-ink-muted" : "text-brand-bone-muted",
    labelActive: isLight ? "text-brand-ink" : "text-brand-bone",
    labelInactive: isLight ? "text-brand-ink-soft" : "text-brand-bone-soft",
    // Desktop (lg+) keeps the flush hairline grid; below lg the cards become
    // standalone rounded cards separated by a gap (see max-lg:gap on the grid),
    // so the dividers are scoped to lg.
    topBorder: isLight
      ? "lg:border-t lg:border-brand-ink/10"
      : "lg:border-t lg:border-brand-bone-faint",
    leftBorder: isLight
      ? "lg:border-l lg:border-brand-ink/10"
      : "lg:border-l lg:border-brand-bone-faint",
  };

  const { activeIndex, setRef } = useActiveOnScroll(cohorts.length);
  const reduced = usePrefersReducedMotion();
  // Own refs to the cohort blocks so the mobile chip row can scroll-jump to a
  // cohort (the scroll-spy hook keeps its refs private).
  const blockRefs = useRef<Array<HTMLDivElement | null>>([]);
  const scrollToCohort = (i: number) => {
    blockRefs.current[i]?.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section
      {...(isLight ? { "data-nav-bg": "light" } : {})}
      className={c.section}
    >
      {/* Intro */}
      <div className="px-5 lg:px-10 pt-14 lg:pt-24 pb-8 lg:pb-12">
        <p className={`brand-eyebrow ${c.eyebrow} mb-8`}>
          <Scramble>{eyebrow}</Scramble>
        </p>
        <h2 className={`font-bricolage text-brand-display ${c.heading} max-w-[20ch]`}>
          <StaggerText>{title}</StaggerText>
        </h2>
        <p className={`mt-8 lg:mt-12 font-albert text-brand-body-lg ${c.desc} max-w-2xl`}>
          {description}
        </p>
      </div>

      {/* Cohort layout */}
      <div className="px-5 lg:px-10 pb-14 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Desktop: sticky vertical cohort nav + Explore all. Hidden on
              mobile — phones get the sticky tab bar inside the cohort column
              (below) and an Explore-all CTA at the foot of the section. */}
          <aside className="max-lg:hidden lg:col-span-3 lg:sticky lg:top-24 lg:self-start lg:min-h-[80vh] flex flex-col justify-between">
            <ul className="flex flex-col gap-2 font-bricolage text-3xl lg:text-4xl">
              {cohorts.map((cohort, i) => {
                const isActive = activeIndex === i;
                return (
                  <li key={cohort.key}>
                    <button
                      type="button"
                      onClick={() => scrollToCohort(i)}
                      aria-current={isActive ? "true" : undefined}
                      className={`m-0 cursor-pointer appearance-none border-0 bg-transparent p-0 text-left font-bricolage text-3xl lg:text-4xl transition-colors duration-300 ease-brand-out ${
                        isActive ? c.labelActive : c.labelInactive
                      }`}
                    >
                      {cohort.label}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="mt-16 lg:mt-0">
              <CTAButton href="/services" variant="primary" onLight={isLight}>
                Explore all
              </CTAButton>
            </div>
          </aside>

          {/* Right: cohort blocks scroll past. On mobile this column also hosts
              the sticky tab bar. */}
          <div className="lg:col-span-9">
            {/* Mobile sticky tab bar — underline tabs, pinned to the top of the
                viewport while the section scrolls. The PrimaryNav auto-hides on
                scroll-down, so while reading the section this bar is the top
                bar; it releases once the cohort column scrolls past. */}
            <div
              style={{ top: "var(--nav-offset, 0px)" }}
              className={`lg:hidden sticky z-40 -mx-5 px-5 ${
                isLight ? "bg-brand-bone" : "bg-brand-ink"
              }`}
            >
              <div
                className={`flex gap-6 overflow-x-auto border-b [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
                  isLight ? "border-brand-ink/10" : "border-brand-bone-faint"
                }`}
              >
                {cohorts.map((cohort, i) => {
                  const isActive = activeIndex === i;
                  return (
                    <button
                      key={cohort.key}
                      type="button"
                      onClick={() => scrollToCohort(i)}
                      aria-current={isActive ? "true" : undefined}
                      className={`relative shrink-0 whitespace-nowrap pt-1 pb-4 font-bricolage text-base transition-colors duration-300 ease-brand-out ${
                        isActive ? c.labelActive : c.labelInactive
                      }`}
                    >
                      {cohort.label}
                      {isActive && (
                        <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-current" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-24 lg:gap-32 max-lg:mt-8">
              {cohorts.map((cohort, i) => (
                <div
                  key={cohort.key}
                  ref={(el) => {
                    setRef(i)(el);
                    blockRefs.current[i] = el;
                  }}
                  className="scroll-mt-24 max-lg:scroll-mt-[calc(var(--nav-offset,0px)+64px)]"
                >
                  <h3 className={`font-bricolage text-brand-display ${c.heading} max-w-[20ch] mb-10 lg:mb-12`}>
                    <StaggerText>{cohort.title}</StaggerText>
                  </h3>

                  <div className={`grid grid-cols-1 sm:grid-cols-2 max-lg:gap-6 ${c.topBorder}`}>
                    {cohort.services.map((service, i) => {
                      const isRightCol = i % 2 === 1;
                      const isAfterFirstRow = i >= 2;
                      return (
                        <ServiceCard
                          key={service.number}
                          service={service}
                          theme={theme}
                          className={`${isRightCol ? c.leftBorder : ""} ${
                            isAfterFirstRow ? c.topBorder : ""
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile-only Explore all (desktop has it in the sticky aside). */}
        <div className="lg:hidden mt-12">
          <CTAButton
            href="/services"
            variant="primary"
            onLight={isLight}
            className="w-full"
          >
            Explore all
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  className,
  theme = "dark",
}: {
  service: Service;
  className?: string;
  theme?: Theme;
}) {
  const isLight = theme === "light";
  const solid = isLight ? "from-brand-bone" : "from-brand-ink";
  const numColor = isLight ? "text-brand-ink-soft" : "text-brand-bone-soft";
  const titleColor = isLight ? "text-brand-ink" : "text-brand-bone";
  const descColor = isLight ? "text-brand-ink-muted" : "text-brand-bone-muted";
  const arrowColor = isLight
    ? "bg-brand-ink text-brand-bone"
    : "bg-brand-bone text-brand-ink";

  // Deep-link to the service's detail page when it has one; otherwise fall back
  // to the /services index.
  const href = service.slug ? `/services/${service.slug}` : "/services";

  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const isDesktop = useIsDesktop();
  const reduced = usePrefersReducedMotion();

  // Buffer the clip as the card nears the viewport so the first hover is
  // instant (preload="none" alone would fetch on hover -> visible delay).
  useVideoPrefetch(cardRef, videoRef, !reduced);

  // Below the lg breakpoint (mobile/tablet) there's no reliable hover, so play
  // the showreel inline while the card is in view. Keyed off viewport width,
  // NOT a hover media query — touchscreen laptops mis-report hover and would
  // wrongly autoplay. Skipped for reduced-motion users (clean static card).
  useEffect(() => {
    if (isDesktop || reduced) return;
    const el = cardRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [isDesktop, reduced]);

  // Desktop/laptop: hover-only (hover ignored on mobile/tablet, which can't
  // hover anyway). Mobile/tablet: in-view autoplay.
  const active = isDesktop ? hovered : !reduced && inView;

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (active) {
      v.currentTime = 0;
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [active]);

  const handleEnter = () => setHovered(true);
  const handleLeave = () => setHovered(false);

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`group relative aspect-[4/3] max-lg:aspect-[3/4] overflow-hidden transition-[border-radius] duration-300 ease-brand-out max-lg:rounded-2xl ${
        hovered ? "rounded-2xl" : "rounded-none"
      } ${className ?? ""}`}
    >
      {service.video && (
        <video
          ref={videoRef}
          src={service.video}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-brand-out ${
            active ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {/* Solid at the bottom (behind the title/description), fading to
          transparent above the heading so the video shows through the top. */}
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${solid} from-[42%] to-transparent to-[82%] transition-opacity duration-500 ease-brand-out ${
          active ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Content */}
      <div className="relative z-[1] h-full p-6 lg:p-8 flex flex-col justify-between">
        <span
          className={`font-bricolage text-2xl lg:text-3xl ${numColor} transition-opacity duration-300 ${
            active ? "opacity-0" : "opacity-100"
          }`}
        >
          {service.number}
        </span>
        <div>
          <h4 className={`font-bricolage text-2xl lg:text-3xl ${titleColor} mb-3 leading-tight`}>
            {service.title}
          </h4>
          <p className={`font-albert text-sm lg:text-base ${descColor} leading-relaxed max-w-md`}>
            {service.description}
          </p>
          {/* Touch devices can't hover, so the desktop arrow (below) never
              appears. Surface a full-width purple Explore CTA instead — a flat
              link with no hover effect (there's no hover on touch anyway). */}
          <Link
            href={href}
            className="lg:hidden mt-5 flex w-full items-center justify-center gap-2 rounded-brand-btn bg-brand-purple px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-brand-bone"
          >
            Explore
            <svg
              viewBox="0 0 18 12"
              aria-hidden="true"
              className="h-3 w-[18px] fill-none stroke-current"
              strokeWidth="1.6"
            >
              <path d="M1 6h16M12 1l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Desktop: the whole card navigates (the hover arrow is the visual
          affordance). Hidden on touch, where the in-card Explore button handles
          navigation, so the two anchors never coexist at the same breakpoint. */}
      <Link
        href={href}
        aria-label={`Explore ${service.title}`}
        className="absolute inset-0 z-[2] max-lg:hidden"
      />

      {/* Arrow affordance — reveals on hover (bottom-right), per the reference.
          Decorative (pointer-events-none) so the full-card link above receives
          the click. Desktop-only; touch uses the in-card Explore button. */}
      <div
        className={`pointer-events-none absolute bottom-6 right-6 z-[3] max-lg:hidden transition-all duration-300 ease-brand-out ${
          hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <span className={`grid h-12 w-12 place-items-center rounded-xl ${arrowColor}`}>
          <svg
            viewBox="0 0 18 12"
            aria-hidden="true"
            className="h-3.5 w-[22px] fill-none stroke-current"
            strokeWidth="1.6"
          >
            <path d="M1 6h16M12 1l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  );
}
