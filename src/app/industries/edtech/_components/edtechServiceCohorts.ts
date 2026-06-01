import type { Cohort } from "@/src/app/landing/_components/Services";

// EdTech-specific cohorts for the shared landing <Services /> section:
// same component, cards, hover-video, and sticky left-rail — Research /
// Design / Development grouping and copy from the EdTech page.
export const EDTECH_SERVICE_COHORTS: Cohort[] = [
  {
    key: "research",
    label: "Research",
    title: "Service-driven discovery for EdTech teams",
    services: [
      {
        number: "01",
        title: "Product discovery",
        description:
          "Map out key features, user flows, and architecture to align your team and reduce risks.",
        video: "/landing/Product-discovery.mp4",
      },
      {
        number: "02",
        title: "UX audit",
        description:
          "Identify usability bottlenecks, improve engagement, and optimize for conversions.",
        video: "/landing/UX-audit.mp4",
      },
      {
        number: "03",
        title: "Technical workshop",
        description: "Validate your tech stack, architecture, and scalability path.",
        video: "/landing/Technical-workshop.mp4",
      },
    ],
  },
  {
    key: "design",
    label: "Design",
    title: "Learner-centric design systems for EdTech",
    services: [
      {
        number: "01",
        title: "Design prototype",
        description:
          "Test product ideas fast with clickable user journeys and visual flows.",
        video: "/landing/Design-prototype.mp4",
      },
      {
        number: "02",
        title: "Website design services",
        description:
          "Custom website layouts and UX/UI strategies to improve engagement and conversions.",
        video: "/landing/Website-redesign.mp4",
      },
      {
        number: "03",
        title: "Web app design",
        description:
          "Design responsive, user-focused web platforms with strong UX/UI logic.",
        video: "/landing/cab5f51f-a135-4777-8895-398644445757.mp4",
      },
      {
        number: "04",
        title: "Mobile app design",
        description:
          "Create intuitive, performance-optimized mobile apps for iOS and Android.",
        video: "/landing/compressed-video-2.mp4",
      },
      {
        number: "05",
        title: "Website redesign",
        description:
          "Modernize your web presence with product design that drives engagement and brand authority.",
        video: "/landing/Website-redesign.mp4",
      },
      {
        number: "06",
        title: "Branding",
        description:
          "Develop a brand that resonates — visually, emotionally, and strategically.",
        video: "/landing/Branding.mp4",
      },
    ],
  },
  {
    key: "development",
    label: "Development",
    title: "Scalable development of educational technology platforms",
    services: [
      {
        number: "01",
        title: "Custom MVP development",
        description:
          "Expand your prototype into a fully functional, production-ready product.",
        video: "/landing/Custom-MVP-development.mp4",
      },
      {
        number: "02",
        title: "Web development",
        description:
          "Custom web solutions, from complex platforms to interactive dashboards and scalable products, designed to boost functionality and drive growth.",
        video: "/landing/Website-development.mp4",
      },
      {
        number: "03",
        title: "Website development",
        description:
          "Launch a fast, scalable site that converts and supports product growth.",
        video: "/landing/Website-development.mp4",
      },
      {
        number: "04",
        title: "Mobile app development",
        description:
          "End-to-end development of mobile applications for iOS and Android.",
        video: "/landing/compressed-video-2.mp4",
      },
      {
        number: "05",
        title: "No-code development",
        description:
          "Fast and cost-effective product development using no-code and low-code platforms.",
        video: "/landing/Dedicated-team.mp4",
      },
      {
        number: "06",
        title: "Blockchain development",
        description:
          "Secure and scalable blockchain-based applications, including smart contracts and DeFi solutions.",
        video: "/landing/cab5f51f-a135-4777-8895-398644445757.mp4",
      },
    ],
  },
];
