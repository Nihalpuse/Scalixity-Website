import type { ServiceContent } from "../services-content";

export const mobileAppDesign: ServiceContent = {
  slug: "mobile-app-design",
  category: "Design",
  title: "Mobile app design",
  heroTitle: "Mobile app design that users love to come back to",
  heroLead:
    "We design mobile experiences built for touch, real-world contexts, and the platforms people use every day — intuitive, high-performance, and engineered for engagement and retention.",
  metaDescription:
    "Mobile app design services by Scalixity — touch-first, accessible iOS and Android interfaces designed for engagement and retention.",
  summary: "Intuitive, high-performance app design for iOS and Android.",
  challengesTitle: "We design mobile apps that feel native, not ported.",
  challenges: [
    {
      problem:
        "Does your app feel awkward or cluttered on smaller screens?",
      solution:
        "We design touch-first, with clear visual hierarchy, generous tap targets, and platform-native patterns for iOS and Android so the app feels immediately natural to use, regardless of device size.",
    },
    {
      problem:
        "Are users dropping off before they reach the core value of your app?",
      solution:
        "We streamline onboarding and key user flows, removing every friction point so people reach the moment that matters faster — and come back for more.",
    },
    {
      problem:
        "Is your app experience inconsistent across devices and interaction states?",
      solution:
        "We design a thorough component system covering every state, edge case, and screen size — keeping the experience coherent from first launch to power user.",
    },
  ],
  solutionsEyebrow: "Tailored mobile app design for your industry",
  solutionsTitle: "Industry-specific mobile app design solutions",
  solutions: [
    {
      title: "SaaS",
      description:
        "Mobile-first interfaces for SaaS products that keep users productive on the go — streamlined dashboards, quick-action flows, and consistent experiences across devices.",
    },
    {
      title: "FinTech",
      description:
        "Clean, trustworthy financial app design that makes transactions, account management, and insights feel simple and secure to users unfamiliar with complex finance.",
    },
    {
      title: "Healthcare",
      description:
        "Accessible, straightforward health app interfaces for patients and practitioners — clear data presentation, easy appointment flows, and privacy-conscious layouts.",
    },
    {
      title: "EdTech",
      description:
        "Engaging learning app experiences with progress tracking, interactive content, and flows designed to keep learners motivated and returning to the app.",
    },
    {
      title: "E-commerce",
      description:
        "Conversion-focused shopping app design with frictionless browse, search, and checkout flows that reduce drop-off and encourage repeat purchases.",
    },
    {
      title: "Logistics",
      description:
        "Field-ready mobile interfaces for drivers, warehouse staff, and dispatchers — designed for glanceable information, fast data entry, and reliable use in demanding environments.",
    },
  ],
  benefitsTitle: "Why teams choose us",
  benefits: [
    {
      title: "Touch-first thinking",
      icon: "Smartphone",
      description:
        "Every layout and interaction is designed for thumbs and real-world contexts, not a desktop interface scaled down.",
    },
    {
      title: "Platform-native patterns",
      icon: "Layers",
      description:
        "We respect iOS and Android conventions separately, so each version feels at home on its platform while maintaining a coherent product identity.",
    },
    {
      title: "Engagement-focused design",
      icon: "TrendingUp",
      description:
        "We design for retention — clear value delivery, fast flows, and fewer drop-offs — so users come back rather than churn.",
    },
    {
      title: "Build-ready output",
      icon: "Code2",
      description:
        "Specs, components, and assets engineered for clean native or cross-platform handoff so development starts without ambiguity.",
    },
    {
      title: "Validated before build",
      icon: "BadgeCheck",
      description:
        "Interactive prototypes tested with users before development begins, so decisions are grounded in how people actually use the app.",
    },
    {
      title: "Accessible by default",
      icon: "Accessibility",
      description:
        "We apply accessibility best practices throughout — contrast, tap target size, screen-reader support — so your app works for the widest possible audience.",
    },
  ],
  processEyebrow: "Our mobile app design process",
  processTitle:
    "How our mobile app design team structures work to ship an app people want to use",
  process: [
    {
      label: "Stakeholder discovery",
      title: "Aligning on goals, users, and platform context",
      description:
        "We open with a focused session to understand your business goals, target users, and the technical environment — native, cross-platform, or hybrid — so every design decision has the right foundation.",
      keySteps: [
        "Business objectives and KPIs for the app",
        "Target user profiles and use-case context",
        "Platform requirements and tech stack overview",
      ],
      deliverables: ["Stakeholder brief", "Platform and scope summary"],
    },
    {
      label: "User & market research",
      title: "Grounding design in category expectations and real behavior",
      description:
        "We review how comparable apps in your category handle navigation, onboarding, and core flows — and map the patterns users already expect — so the design builds on proven foundations.",
      keySteps: [
        "Competitive app UX audit",
        "Platform pattern benchmarking",
        "User journey and behavior mapping",
      ],
      deliverables: ["UX audit report", "Competitive benchmark", "Behavioral insights summary"],
    },
    {
      label: "Feature scoping",
      title: "Deciding what to design for V1 and what comes later",
      description:
        "Together we prioritize features by user impact and feasibility so the first version focuses on the core experience rather than everything at once.",
      keySteps: [
        "Feature inventory and priority scoring",
        "MVP vs. roadmap boundary setting",
        "Phased release planning",
      ],
      deliverables: ["Feature map", "MVP scope outline", "Release phasing plan"],
    },
    {
      label: "User flows & wireframes",
      title: "Structuring how people move through the app",
      description:
        "We map end-to-end journeys for each user type and translate them into wireframes that lock in navigation structure, screen logic, and interaction patterns before any visual design begins.",
      keySteps: [
        "End-to-end user journeys per user type",
        "Navigation models and screen hierarchy",
        "Key interaction and transition logic",
      ],
      deliverables: ["User flow diagrams", "Navigation model", "Annotated wireframes"],
    },
    {
      label: "Visual direction",
      title: "Setting the visual tone for the app",
      description:
        "We explore visual styles, motion cues, and UI tone to establish a clear direction that aligns with your brand and the expectations of your platform before full visual design begins.",
      keySteps: [
        "Color, typography, and spacing foundations",
        "Platform-specific UI style samples",
        "Brand-to-product visual alignment",
      ],
      deliverables: ["Moodboard", "Visual style concepts"],
    },
    {
      label: "UI design",
      title: "Designing every screen, state, and breakpoint",
      description:
        "We build out the full app UI — every screen, variant, empty state, error state, and loading state — as a reusable component system ready for clean handoff.",
      keySteps: [
        "Complete screen designs by user flow",
        "Component library with all states and variants",
        "Responsive and device-size coverage",
      ],
      deliverables: ["Figma file with full screens", "Component library", "State coverage map"],
    },
    {
      label: "Prototype & testing",
      title: "Validating the experience before development begins",
      description:
        "We wire the designs into an interactive prototype and run usability sessions to find friction, confusion, and missed moments — then refine before the build starts.",
      keySteps: [
        "Clickable prototype of core flows",
        "Usability sessions with target users",
        "Prioritized refinements from findings",
      ],
      deliverables: ["Interactive prototype", "Usability findings report", "Design refinements"],
    },
    {
      label: "Handoff & support",
      title: "Setting development up to build with confidence",
      description:
        "We prepare final Figma files with clean specs, tokens, and assets — and stay available through build and QA to answer questions and catch mismatches before they ship.",
      keySteps: [
        "Specced Figma files with design tokens",
        "Asset exports and component documentation",
        "Build reviews and QA support",
      ],
      deliverables: ["Dev-ready Figma kit", "Asset library", "QA support notes"],
    },
  ],
  faqs: [
    {
      question: "Do you design for both iOS and Android?",
      answer:
        "Yes. We design for each platform's conventions and interaction patterns while keeping a coherent product identity across both, whether the app is native or cross-platform.",
    },
    {
      question: "How is mobile app design different from web app design?",
      answer:
        "Mobile design centers on touch input, smaller screens, and on-the-go use. That means larger tap targets, simpler navigation, gesture-based interactions, and content prioritized for glanceability — patterns very different from a desktop or browser-based product.",
    },
    {
      question: "Can you also handle mobile app development?",
      answer:
        "Yes. Our mobile app development team can take the designs straight into a native or cross-platform build, or we can hand off cleanly to your own engineers with complete specs.",
    },
    {
      question: "Will you test the design with real users before we build?",
      answer:
        "Yes — we create interactive prototypes of the core flows, run usability sessions with target users, and refine the design based on what we learn before development starts.",
    },
  ],
  related: ["mobile-app-development", "web-app-design", "design-prototype"],
};
