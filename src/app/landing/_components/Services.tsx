"use client";

import { useEffect, useRef, useState } from "react";
import { CTAButton } from "./CTAButton";
import { Scramble } from "./Scramble";
import { StaggerText } from "./StaggerText";

// Services adapted from src/app/components/growth-partner + process on
// the existing Scalixity landing.
const INTRO = {
  eyebrow: "AI solutions for data-driven companies",
  title: "Tailored support from first prototype to long-term scale",
  description:
    "Great products don't happen by accident. As an AI-first engineering partner, we help data-driven teams grow through smart strategy, AI engineering, and scalable infrastructure from day one.",
};

type Service = {
  number: string;
  title: string;
  description: string;
};

type Cohort = {
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
      },
      {
        number: "02",
        title: "Design prototype",
        description:
          "Test ideas fast with interactive prototypes and visual flows.",
      },
      {
        number: "03",
        title: "Technical workshop",
        description:
          "Validate your tech stack, AI approach, and scalability path with senior engineers.",
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
      },
      {
        number: "02",
        title: "Rapid mvp development",
        description:
          "Launch 50% faster with pre-built ML frameworks and lean sprints.",
      },
      {
        number: "03",
        title: "AI chatbot development",
        description:
          "Conversational interfaces powered by RAG, fine-tuned LLMs, and your data.",
      },
      {
        number: "04",
        title: "Web & mobile development",
        description:
          "Polished front-ends and APIs engineered for AI-first products.",
      },
      {
        number: "05",
        title: "Dedicated team",
        description:
          "An embedded pod of senior engineers, designers, and ML specialists.",
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
      },
      {
        number: "02",
        title: "Full-stack devops & infra",
        description:
          "CI/CD, security, cost optimization, and cloud deployment that scales.",
      },
      {
        number: "03",
        title: "Product redesign",
        description:
          "Modernize legacy UX and integrate AI where it actually moves metrics.",
      },
      {
        number: "04",
        title: "Team extension",
        description:
          "Senior designers and developers ready to ship, starting tomorrow.",
      },
    ],
  },
];

export function Services() {
  const [activeKey, setActiveKey] = useState(COHORTS[0].key);
  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    // The "active" cohort is whichever one currently spans a probe line
    // 40% from the viewport top. Cohorts whose bottom is above the probe
    // count as recently-passed (so the label stays correct after scrolling
    // past). Cohorts entirely below the probe haven't been reached yet.
    const update = () => {
      const probe = window.innerHeight * 0.4;
      let active = COHORTS[0].key;

      for (const cohort of COHORTS) {
        const el = refs.current[cohort.key];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.bottom < probe) {
          active = cohort.key;
        } else if (rect.top <= probe) {
          active = cohort.key;
          break;
        } else {
          break;
        }
      }

      setActiveKey(active);
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="bg-brand-ink text-brand-bone">
      {/* Intro */}
      <div className="px-5 lg:px-10 pt-20 lg:pt-32 pb-12 lg:pb-20">
        <p className="brand-eyebrow text-brand-bone-muted mb-8">
          <Scramble>{INTRO.eyebrow}</Scramble>
        </p>
        <h2 className="font-bricolage text-brand-display text-brand-bone max-w-[20ch]">
          <StaggerText>{INTRO.title}</StaggerText>
        </h2>
        <p className="mt-8 lg:mt-12 font-albert text-brand-body-lg text-brand-bone-muted max-w-2xl">
          {INTRO.description}
        </p>
      </div>

      {/* Sticky cohort layout */}
      <div className="px-5 lg:px-10 pb-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: sticky cohort nav + Explore all */}
          <aside className="lg:col-span-3 lg:sticky lg:top-24 lg:self-start lg:min-h-[80vh] flex flex-col justify-between">
            <ul className="flex flex-col gap-2 font-bricolage text-3xl lg:text-4xl">
              {COHORTS.map((cohort) => (
                <li
                  key={cohort.key}
                  className={`transition-colors duration-300 ease-brand-out ${
                    activeKey === cohort.key
                      ? "text-brand-bone"
                      : "text-brand-bone-soft"
                  }`}
                >
                  {cohort.label}
                </li>
              ))}
            </ul>
            <div className="mt-16 lg:mt-0">
              <CTAButton href="/services" variant="primary">
                Explore all
              </CTAButton>
            </div>
          </aside>

          {/* Right: cohort blocks scroll past */}
          <div className="lg:col-span-9 flex flex-col gap-24 lg:gap-32">
            {COHORTS.map((cohort) => (
              <div
                key={cohort.key}
                ref={(el) => {
                  refs.current[cohort.key] = el;
                }}
              >
                <h3 className="font-bricolage text-brand-display text-brand-bone max-w-[20ch] mb-10 lg:mb-12">
                  <StaggerText>{cohort.title}</StaggerText>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-brand-bone-faint">
                  {cohort.services.map((service, i) => {
                    const isRightCol = i % 2 === 1;
                    const isAfterFirstRow = i >= 2;
                    return (
                      <div
                        key={service.number}
                        className={`aspect-[4/3] p-6 lg:p-8 flex flex-col justify-between ${
                          isRightCol
                            ? "sm:border-l sm:border-brand-bone-faint"
                            : ""
                        } ${
                          isAfterFirstRow
                            ? "border-t border-brand-bone-faint"
                            : ""
                        }`}
                      >
                        <span className="font-bricolage text-2xl lg:text-3xl text-brand-bone-soft">
                          {service.number}
                        </span>
                        <div>
                          <h4 className="font-bricolage text-2xl lg:text-3xl text-brand-bone mb-3 leading-tight">
                            {service.title}
                          </h4>
                          <p className="font-albert text-sm lg:text-base text-brand-bone-muted leading-relaxed max-w-md">
                            {service.description}
                          </p>
                        </div>
                      </div>
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
