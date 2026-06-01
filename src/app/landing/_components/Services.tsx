"use client";

import { useRef, useState } from "react";
import { CTAButton } from "./CTAButton";
import { Scramble } from "./Scramble";
import { StaggerText } from "./StaggerText";
import { useActiveOnScroll } from "./useActiveOnScroll";

// Services adapted from src/app/components/growth-partner + process on
// the existing Scalixity landing.
const INTRO = {
  eyebrow: "AI solutions for data-driven companies",
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
};

export type Cohort = {
  key: string;
  label: string;
  title: string;
  services: Service[];
};

const COHORTS: Cohort[] = [
  {
    key: "discover",
    label: "Discover",
    title: "Validate your AI idea & build a clear roadmap",
    services: [
      {
        number: "01",
        title: "Product discovery",
        description:
          "Map out user flows, model strategy, and architecture before any code is written.",
        video: "/landing/Product-discovery.mp4",
      },
      {
        number: "02",
        title: "Design prototype",
        description:
          "Test ideas fast with interactive prototypes and visual flows.",
        video: "/landing/Design-prototype.mp4",
      },
      {
        number: "03",
        title: "Technical workshop",
        description:
          "Validate your tech stack, AI approach, and scalability path with senior engineers.",
        video: "/landing/Technical-workshop.mp4",
      },
    ],
  },
  {
    key: "build",
    label: "Build & launch",
    title: "Ship your AI product & gain market traction",
    services: [
      {
        number: "01",
        title: "Custom mvp development",
        description:
          "Build production-ready AI products from prototype to deployed system.",
        video: "/landing/Custom-MVP-development.mp4",
      },
      {
        number: "02",
        title: "Rapid mvp development",
        description:
          "Launch 50% faster with pre-built ML frameworks and lean sprints.",
        // TODO: no exact clip — placeholder; swap when a Rapid-MVP video exists.
        video: "/landing/compressed-video-2.mp4",
      },
      {
        number: "03",
        title: "AI chatbot development",
        description:
          "Conversational interfaces powered by RAG, fine-tuned LLMs, and your data.",
        // TODO: no exact clip — placeholder; swap when an AI-chatbot video exists.
        video: "/landing/cab5f51f-a135-4777-8895-398644445757.mp4",
      },
      {
        number: "04",
        title: "Web & mobile development",
        description:
          "Polished front-ends and APIs engineered for AI-first products.",
        video: "/landing/Website-development.mp4",
      },
      {
        number: "05",
        title: "Dedicated team",
        description:
          "An embedded pod of senior engineers, designers, and ML specialists.",
        video: "/landing/Dedicated-team.mp4",
      },
    ],
  },
  {
    key: "scale",
    label: "Scale & optimize",
    title: "Scale, optimize & reach more users",
    services: [
      {
        number: "01",
        title: "AI transformation layer",
        description:
          "Add agents, predictive systems, and automation to existing products.",
        // TODO: no exact clip — placeholder; swap when a matching video exists.
        video: "/landing/Branding.mp4",
      },
      {
        number: "02",
        title: "Full-stack devops & infra",
        description:
          "CI/CD, security, cost optimization, and cloud deployment that scales.",
        // TODO: no exact clip — placeholder; swap when a matching video exists.
        video: "/landing/UX-audit.mp4",
      },
      {
        number: "03",
        title: "Product redesign",
        description:
          "Modernize legacy UX and integrate AI where it actually moves metrics.",
        video: "/landing/Website-redesign.mp4",
      },
      {
        number: "04",
        title: "Team extension",
        description:
          "Senior designers and developers ready to ship, starting tomorrow.",
        video: "/landing/Team-extension.mp4",
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
    topBorder: isLight
      ? "border-t border-brand-ink/10"
      : "border-t border-brand-bone-faint",
    leftBorder: isLight
      ? "sm:border-l sm:border-brand-ink/10"
      : "sm:border-l sm:border-brand-bone-faint",
  };

  const { activeIndex, setRef } = useActiveOnScroll(cohorts.length);

  return (
    <section
      {...(isLight ? { "data-nav-bg": "light" } : {})}
      className={c.section}
    >
      {/* Intro */}
      <div className="px-5 lg:px-10 pt-20 lg:pt-32 pb-12 lg:pb-20">
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

      {/* Sticky cohort layout */}
      <div className="px-5 lg:px-10 pb-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: sticky cohort nav + Explore all */}
          <aside className="lg:col-span-3 lg:sticky lg:top-24 lg:self-start lg:min-h-[80vh] flex flex-col justify-between">
            <ul className="flex flex-col gap-2 font-bricolage text-3xl lg:text-4xl">
              {cohorts.map((cohort, i) => (
                <li
                  key={cohort.key}
                  className={`transition-colors duration-300 ease-brand-out ${
                    activeIndex === i ? c.labelActive : c.labelInactive
                  }`}
                >
                  {cohort.label}
                </li>
              ))}
            </ul>
            <div className="mt-16 lg:mt-0">
              <CTAButton href="/services" variant="primary" onLight={isLight}>
                Explore all
              </CTAButton>
            </div>
          </aside>

          {/* Right: cohort blocks scroll past */}
          <div className="lg:col-span-9 flex flex-col gap-24 lg:gap-32">
            {cohorts.map((cohort, i) => (
              <div
                key={cohort.key}
                ref={setRef(i)}
              >
                <h3 className={`font-bricolage text-brand-display ${c.heading} max-w-[20ch] mb-10 lg:mb-12`}>
                  <StaggerText>{cohort.title}</StaggerText>
                </h3>

                <div className={`grid grid-cols-1 sm:grid-cols-2 ${c.topBorder}`}>
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

  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  const handleEnter = () => {
    setHovered(true);
    const v = videoRef.current;
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
  };
  const handleLeave = () => {
    setHovered(false);
    videoRef.current?.pause();
  };

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`group relative aspect-[4/3] overflow-hidden transition-[border-radius] duration-300 ease-brand-out ${
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
            hovered ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {/* Solid at the bottom (behind the title/description), fading to
          transparent above the heading so the video shows through the top. */}
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${solid} from-[42%] to-transparent to-[82%] transition-opacity duration-500 ease-brand-out ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Content */}
      <div className="relative z-[1] h-full p-6 lg:p-8 flex flex-col justify-between">
        <span
          className={`font-bricolage text-2xl lg:text-3xl ${numColor} transition-opacity duration-300 ${
            hovered ? "opacity-0" : "opacity-100"
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
        </div>
      </div>

      {/* Arrow button — reveals on hover (bottom-right), per the reference. */}
      <div
        className={`absolute bottom-6 right-6 z-[2] transition-all duration-300 ease-brand-out ${
          hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
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
