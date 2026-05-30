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

const HERO_EYEBROW = "What we do";
const HERO_TITLE = "Our services";
const HERO_DESCRIPTION =
  "At Scalixity, we deliver cutting-edge digital solutions tailored to your business needs. From web applications to AI-powered chatbots, we've got you covered.";

type Service = {
  id: string;
  title: string;
  description: string;
  features: { title: string; description: string }[];
  image: string;
  link: string;
};

// Content preserved from the legacy DetailedServices component.
const SERVICES: Service[] = [
  {
    id: "01",
    title: "Custom Web Apps",
    description:
      "Our custom web applications are designed to streamline your business operations and enhance user experience. We leverage the latest technologies to create scalable, secure, and high-performance solutions.",
    features: [
      { title: "Responsive Design", description: "Seamless experience across all devices and screen sizes" },
      { title: "Scalable Architecture", description: "Built to grow with your business needs" },
      { title: "Modern Tech Stack", description: "React, Vue, Angular, Node.js, and more" },
      { title: "Security First", description: "Enterprise-grade security measures implemented" },
    ],
    image: "/1.gif",
    link: "/services/custom-web-apps",
  },
  {
    id: "02",
    title: "Custom Dashboard",
    description:
      "Transform your data into actionable insights with our custom dashboard solutions. We build intuitive, interactive, and real-time dashboards tailored to your specific KPIs and metrics.",
    features: [
      { title: "Real-time Data", description: "Live updates and streaming data visualization" },
      { title: "Interactive Charts", description: "Drill-down capabilities and dynamic filtering" },
      { title: "Custom Reports", description: "Automated reporting and export functionality" },
      { title: "User Management", description: "Role-based access control and permissions" },
    ],
    image: "/2.gif",
    link: "/services/custom-dashboard",
  },
  {
    id: "03",
    title: "AI Chatbots",
    description:
      "Enhance customer engagement and automate support with our intelligent AI chatbots. Powered by advanced NLP, our bots provide instant, accurate, and personalized responses.",
    features: [
      { title: "Natural Language Processing", description: "Understand and respond to complex queries" },
      { title: "Multi-channel Support", description: "Deploy on website, WhatsApp, Messenger, etc." },
      { title: "Seamless Handoff", description: "Smart escalation to human agents when needed" },
      { title: "Analytics & Insights", description: "Track conversations and improve performance" },
    ],
    image: "/3.gif",
    link: "/services/AI-Chatbot",
  },
  {
    id: "04",
    title: "Mobile Application",
    description:
      "Reach your customers on the go with our high-performance mobile applications. We build native and cross-platform apps that deliver exceptional user experiences.",
    features: [
      { title: "Cross-platform Development", description: "Code once, deploy on iOS and Android" },
      { title: "Native Performance", description: "Smooth animations and fast load times" },
      { title: "Offline Capabilities", description: "Functional even without internet connection" },
      { title: "App Store Optimization", description: "Assistance with publishing and ranking" },
    ],
    image: "/4.gif",
    link: "/services/Mobile-Application",
  },
  {
    id: "05",
    title: "E-commerce Solution",
    description:
      "Launch and grow your online business with our robust e-commerce solutions. From custom storefronts to complex backend integrations, we handle it all.",
    features: [
      { title: "Custom Storefronts", description: "Unique designs that reflect your brand" },
      { title: "Secure Payments", description: "Integration with major payment gateways" },
      { title: "Inventory Management", description: "Real-time tracking and stock alerts" },
      { title: "Conversion Optimization", description: "Designed to maximize sales" },
    ],
    image: "/5.gif",
    link: "/services/ecommerce-solution",
  },
  {
    id: "06",
    title: "Machine Learning & NLP Solutions",
    description:
      "Unlock business insights and automate processes with our machine learning and NLP solutions. We build predictive models, classification systems, and NLP pipelines tailored to your specific needs.",
    features: [
      { title: "Predictive Models", description: "Build models that predict future outcomes and automate decisions" },
      { title: "Classification Systems", description: "Classify data into categories and automate processes" },
      { title: "NLP Pipelines", description: "Build pipelines that understand and respond to natural language" },
    ],
    image: "/6.gif",
    link: "/services/ml-nlp-solutions",
  },
];

export function ServicesIndex() {
  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    // Probe-line active-service detection (same pattern as landing Process).
    const update = () => {
      const probe = window.innerHeight * 0.4;
      let active = 0;
      for (let i = 0; i < SERVICES.length; i++) {
        const el = refs.current[i];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.bottom < probe) {
          active = i;
        } else if (rect.top <= probe) {
          active = i;
          break;
        } else {
          break;
        }
      }
      setActiveIndex(active);
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
            <Scramble>{HERO_EYEBROW}</Scramble>
          </p>
          <h1 className="font-bricolage text-brand-display text-brand-bone max-w-[14ch]">
            <StaggerText>{HERO_TITLE}</StaggerText>
          </h1>
          <p className="font-albert text-brand-body-lg text-brand-bone-muted max-w-2xl mt-8">
            {HERO_DESCRIPTION}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <CTAButton href="/contact" variant="primary">
              Start your project
            </CTAButton>
            <CTAButton href="/work" variant="secondary">
              View our work
            </CTAButton>
          </div>
        </div>
      </section>

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      {/* Services — sticky index rail + scrolling detail */}
      <section
        data-nav-bg="light"
        className="brand-section-light px-5 lg:px-10 pt-20 pb-24 lg:pt-32 lg:pb-32"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Sticky rail (lg) */}
          <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <p className="brand-eyebrow text-brand-ink-muted mb-6">
              {String(activeIndex + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
            </p>
            <ul className="flex flex-col gap-3">
              {SERVICES.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={s.link}
                    className={`font-bricolage text-2xl leading-tight transition-colors duration-300 ease-brand-out ${
                      i === activeIndex
                        ? "text-brand-ink"
                        : "text-brand-ink-soft hover:text-brand-ink"
                    }`}
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Scrolling detail blocks */}
          <div className="lg:col-span-8 flex flex-col gap-16 lg:gap-28 lg:pb-[20vh]">
            {SERVICES.map((service, i) => (
              <article
                key={service.id}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                className="border-t border-brand-ink/10 pt-6 lg:pt-8"
              >
                <div className="font-bricolage text-3xl text-brand-ink-soft tabular-nums mb-4">
                  {service.id}
                </div>

                <h2 className="font-bricolage text-brand-h3 text-brand-ink leading-tight mb-5">
                  <StaggerText>{service.title}</StaggerText>
                </h2>

                <p className="font-albert text-brand-body-lg text-brand-ink-muted max-w-2xl mb-8">
                  {service.description}
                </p>

                {/* Illustration */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-brand-ink/[0.04] mb-8 grid place-items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-contain p-6"
                  />
                </div>

                {/* Features */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 mb-8">
                  {service.features.map((f) => (
                    <li key={f.title} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="text-brand-purple mt-[2px] shrink-0"
                      >
                        ▸
                      </span>
                      <div>
                        <h3 className="font-bricolage text-lg text-brand-ink leading-tight">
                          {f.title}
                        </h3>
                        <p className="font-albert text-sm text-brand-ink-muted leading-snug mt-1">
                          {f.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <CTAButton href={service.link} variant="primary" onLight>
                  Learn more
                </CTAButton>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CurvedDivider fromColor="bone" className="-mt-px relative z-10" />

      <ContactForm />

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      <Footer />
    </div>
  );
}
