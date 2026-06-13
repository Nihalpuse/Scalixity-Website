import type { Cohort } from "@/src/app/landing/_components/Services";

// SaaS "What our SaaS design practice does" cohorts. The three groups mirror
// the PrimaryNav Services categories (Research / Design / Development) and their
// listed services, so this section stays in sync with the nav. Hover clips
// reuse relatable assets from /public/landing.
export const SAAS_SERVICE_COHORTS: Cohort[] = [
  {
    key: "research",
    label: "Research",
    title:
      "We clarify scope, workflows, and architecture before working on your B2B SaaS website design",
    services: [
      {
        number: "01",
        title: "UX audit",
        slug: "ux-audit",
        description:
          "Identify usability bottlenecks, improve engagement, and optimize for conversions.",
        video: "/landing/UX-audit.mp4",
      },
      {
        number: "02",
        title: "Product discovery",
        slug: "product-discovery",
        description:
          "Map out key features, user flows, and architecture to align your team and reduce risks.",
        video: "/landing/Product-discovery.mp4",
      },
      {
        number: "03",
        title: "Technical workshop",
        slug: "technical-workshop",
        description:
          "Validate your tech stack, architecture, and scalability path with senior engineers.",
        video: "/landing/Technical-workshop.mp4",
      },
    ],
  },
  {
    key: "design",
    label: "Design",
    title:
      "We deliver consistent, modular, and role-based UI/UX design for SaaS products",
    services: [
      {
        number: "01",
        title: "Web app design",
        slug: "web-app-design",
        description:
          "Design responsive, user-focused web platforms with strong UX/UI logic.",
        video: "/landing/cab5f51f-a135-4777-8895-398644445757.mp4",
      },
      {
        number: "02",
        title: "Mobile app design",
        slug: "mobile-app-design",
        description:
          "Create intuitive, performance-optimized mobile apps for iOS and Android.",
        video: "/landing/compressed-video-2.mp4",
      },
      {
        number: "03",
        title: "Website design",
        slug: "website-design",
        description:
          "Custom website layouts and UX/UI strategies to improve engagement and conversions.",
        video: "/landing/Website-redesign.mp4",
      },
      {
        number: "04",
        title: "Website redesign",
        slug: "website-redesign",
        description:
          "Modernize your web presence with product design that drives engagement and brand authority.",
        video: "/landing/Website-redesign.mp4",
      },
      {
        number: "05",
        title: "Branding",
        slug: "branding",
        description:
          "Develop a brand that resonates — visually, emotionally, and strategically.",
        video: "/landing/Branding.mp4",
      },
    ],
  },
  {
    key: "development",
    label: "Development",
    title: "End-to-end execution for SaaS launch and growth",
    services: [
      {
        number: "01",
        title: "Web development",
        slug: "web-development",
        description:
          "Custom web solutions, from complex platforms to interactive dashboards and scalable SaaS products, designed to boost functionality and drive growth.",
        video: "/landing/Website-development.mp4",
      },
      {
        number: "02",
        title: "Mobile app development",
        slug: "mobile-app-development",
        description:
          "End-to-end development of mobile applications for iOS and Android.",
        video: "/landing/compressed-video-2.mp4",
      },
      {
        number: "03",
        title: "Website development",
        slug: "website-development",
        description:
          "Launch a fast, scalable site that converts and supports product growth.",
        video: "/landing/Website-development.mp4",
      },
      {
        number: "04",
        title: "AI development",
        slug: "ai-development",
        description:
          "Ship production-grade AI — LLM apps, RAG, predictive models, and agents — built into your product.",
        video: "/landing/cab5f51f-a135-4777-8895-398644445757.mp4",
      },
      {
        number: "05",
        title: "Custom software development",
        // No dedicated page yet — the card falls back to the /services index.
        description:
          "Bespoke software built around your workflows, data, and scale — engineered for reliability and growth.",
        video: "/landing/Custom-MVP-development.mp4",
      },
    ],
  },
];
