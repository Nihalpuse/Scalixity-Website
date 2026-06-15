import type { Cohort } from "@/src/app/landing/_components/Services";

// "A full-cycle digital product design and development partner" cohorts for the
// /services index. The three groups mirror the PrimaryNav Services categories
// (Research / Design / Development) and their listed services, so this section
// stays in sync with the nav. Clips reuse each service's own hero video from
// public/services.
export const SERVICES_PRACTICE_COHORTS: Cohort[] = [
  {
    key: "research",
    label: "Research",
    title: "Turn insights into action with research-driven decisions",
    services: [
      {
        number: "01",
        title: "UX audit",
        slug: "ux-audit",
        description:
          "Identify usability bottlenecks, improve engagement, and optimize for conversions.",
        video: "/services/ux-audit.mp4",
      },
      {
        number: "02",
        title: "Product discovery",
        slug: "product-discovery",
        description:
          "Map out key features, user flows, and architecture to align your team and reduce risks.",
        video: "/services/product-discovery.mp4",
      },
      {
        number: "03",
        title: "Technical workshop",
        slug: "technical-workshop",
        description:
          "Validate your tech stack, architecture, and scalability path with senior engineers.",
        video: "/services/tech-workshop.mp4",
      },
    ],
  },
  {
    key: "design",
    label: "Design",
    title: "Design experiences that convert and scale",
    services: [
      {
        number: "01",
        title: "Web app design",
        slug: "web-app-design",
        description:
          "Design responsive, user-focused web platforms with strong UX/UI logic.",
        video: "/services/web-app-design.mp4",
      },
      {
        number: "02",
        title: "Mobile app design",
        slug: "mobile-app-design",
        description:
          "Create intuitive, performance-optimized mobile apps for iOS and Android.",
        video: "/services/mobile-app-design.mp4",
      },
      {
        number: "03",
        title: "Website design",
        slug: "website-design",
        description:
          "Custom website layouts and UX/UI strategies to improve engagement and conversions.",
        video: "/services/website-design-service-heros.mp4",
      },
      {
        number: "04",
        title: "Website redesign",
        slug: "website-redesign",
        description:
          "Modernize your web presence with product design that drives engagement and brand authority.",
        video: "/services/website-redesign-services.mp4",
      },
      {
        number: "05",
        title: "Branding",
        slug: "branding",
        description:
          "Develop a brand that resonates — visually, emotionally, and strategically.",
        video: "/services/branding-and-identity-services.mp4",
      },
    ],
  },
  {
    key: "development",
    label: "Development",
    title: "Build scalable web, mobile, AI, and custom software",
    services: [
      {
        number: "01",
        title: "Web development",
        slug: "web-development",
        description:
          "Custom web solutions, from complex platforms to interactive dashboards and scalable products designed to boost functionality and drive growth.",
        video: "/services/web-development-services.mp4",
      },
      {
        number: "02",
        title: "Mobile app development",
        slug: "mobile-app-development",
        description:
          "End-to-end development of mobile applications for iOS and Android.",
        video: "/services/mobile-app-development-services.mp4",
      },
      {
        number: "03",
        title: "Website development",
        slug: "website-development",
        description:
          "Launch a fast, scalable site that converts and supports product growth.",
        video: "/services/website-development-agency.mp4",
      },
      {
        number: "04",
        title: "AI development",
        slug: "ai-development",
        description:
          "Ship production-grade AI — LLM apps, RAG, predictive models, and agents — built into your product.",
        video: "/services/ai-development.mp4",
      },
      {
        number: "05",
        title: "Custom software development",
        slug: "custom-software-development",
        description:
          "Bespoke software built around your workflows, data, and scale — engineered for reliability and growth.",
        video: "/services/custom-software.mp4",
      },
    ],
  },
];
