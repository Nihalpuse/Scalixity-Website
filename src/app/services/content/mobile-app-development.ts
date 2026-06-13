import type { ServiceContent } from "../services-content";

export const mobileAppDevelopment: ServiceContent = {
  slug: "mobile-app-development",
  category: "Development",
  title: "Mobile app development",
  heroTitle: "Mobile apps engineered for speed, scale, and retention",
  heroLead:
    "We build reliable, high-performance mobile apps for iOS and Android — native or cross-platform — that feel natural to use and are built to scale well beyond launch.",
  metaDescription:
    "Mobile app development services by Scalixity — native and cross-platform iOS and Android apps built for performance, reliability, and scale.",
  summary: "Native and cross-platform iOS and Android apps built to perform and scale.",
  challengesTitle: "We build mobile apps that perform on real devices and hold up as you grow.",
  challenges: [
    {
      problem: "Do you need to ship on both iOS and Android without doubling the effort and cost?",
      solution:
        "We help you choose the right approach — native or cross-platform — based on your performance needs, timeline, and budget. Where a shared codebase makes sense, we build it well rather than compromising for convenience.",
    },
    {
      problem: "Is your app slow, unreliable, or draining device resources?",
      solution:
        "Performance and reliability are first-class concerns throughout our builds. We profile on real devices, address bottlenecks early, and make considered decisions about battery, memory, and startup time.",
    },
    {
      problem: "Does the mobile app need to connect reliably with your existing systems?",
      solution:
        "We design robust, well-documented integrations with your APIs and backends — handling offline states, error conditions, and sync logic so the mobile experience stays solid regardless of connectivity.",
    },
  ],
  solutionsEyebrow: "Tailored mobile development solutions for your industry",
  solutionsTitle: "Industry-specific mobile app development solutions",
  solutions: [
    {
      title: "SaaS",
      description:
        "Mobile companions and standalone apps for SaaS products — extending your platform to users on the go with feature-parity where it matters and mobile-native patterns where it doesn't.",
    },
    {
      title: "Healthcare",
      description:
        "Patient-facing apps, clinician tools, and care management experiences built with privacy-first architecture, offline capability, and the reliability critical care workflows demand.",
    },
    {
      title: "FinTech",
      description:
        "Secure mobile banking, payment, and investment apps engineered for data integrity, biometric authentication, and the compliance considerations financial products require.",
    },
    {
      title: "E-commerce",
      description:
        "Shopping and loyalty apps built for smooth browsing, fast checkout, and push-driven re-engagement — with real-time inventory and order tracking baked in.",
    },
    {
      title: "Logistics",
      description:
        "Driver and field-team apps designed for heavy real-world use — GPS integration, offline support, barcode scanning, and backend sync that keeps operations moving.",
    },
    {
      title: "EdTech",
      description:
        "Mobile learning apps with offline content access, interactive assessments, and push notifications that keep learners engaged and progressing on their schedule.",
    },
  ],
  benefitsTitle: "Why teams choose us",
  benefits: [
    {
      title: "Right-fit platform approach",
      icon: "Smartphone",
      description:
        "We choose native or cross-platform based on your actual needs — not a default preference — and explain the trade-offs clearly.",
    },
    {
      title: "Performance on real devices",
      icon: "Gauge",
      description:
        "We test and optimize on real hardware throughout the build, not just in simulators at the end.",
    },
    {
      title: "Reliable integrations",
      icon: "Plug",
      description:
        "Robust API connections that handle offline states, errors, and data sync predictably in the field.",
    },
    {
      title: "End-to-end capability",
      icon: "Layers",
      description:
        "Design, build, and release support under one roof — so the product stays coherent from concept to launch.",
    },
    {
      title: "Transparent delivery",
      icon: "Eye",
      description:
        "Clear scope, realistic timelines, and visible progress throughout — so you're never guessing what's happening.",
    },
    {
      title: "Clean, maintainable code",
      icon: "Code2",
      description:
        "Well-structured, documented codebases ready for your team to own and extend after handover.",
    },
  ],
  processEyebrow: "Our mobile app development process",
  processTitle:
    "How we plan, build, and ship mobile apps that hold up on real devices in the real world",
  process: [
    {
      label: "Discovery and scoping",
      title: "Aligning on goals, users, and platform approach before building",
      description:
        "We explore your goals, user contexts, and existing systems to choose the right platform approach and define a realistic scope before any code is written.",
      keySteps: [
        "Target users, devices, and use contexts",
        "iOS vs. Android vs. cross-platform trade-offs",
        "Backend and integration dependencies",
      ],
      deliverables: ["Platform recommendation", "Scope outline"],
    },
    {
      label: "Architecture and tech setup",
      title: "Establishing the technical foundation for a performant, maintainable build",
      description:
        "We define the app architecture, data flow, offline strategy, and state management approach — so the build starts on solid ground and common mobile pitfalls are avoided from the start.",
      keySteps: [
        "App architecture and navigation model",
        "Offline and sync strategy",
        "Authentication and security approach",
      ],
      deliverables: ["Architecture doc", "Tech decision record"],
    },
    {
      label: "Design alignment",
      title: "Reviewing designs with a mobile engineering lens before implementation",
      description:
        "We work through designs with platform conventions and implementation realities in mind — agreeing on component boundaries, gesture behaviors, and edge cases before building.",
      keySteps: [
        "Platform-specific UI conventions review",
        "Component and interaction inventory",
        "Edge cases and empty states",
      ],
      deliverables: ["Component map", "Design-to-dev notes"],
    },
    {
      label: "Core build",
      title: "Delivering working app increments in focused sprints",
      description:
        "We build in iterative sprints — starting with core navigation and primary flows, expanding outward — with working builds after each cycle so you can test and give feedback throughout.",
      keySteps: [
        "Sprint planning with prioritized features",
        "Feature implementation with code review",
        "Regular device testing and demos",
      ],
      deliverables: ["Testable builds per sprint", "Sprint review notes"],
    },
    {
      label: "Backend and integrations",
      title: "Connecting the app to your APIs, services, and data sources",
      description:
        "We build the API integrations, push notification setup, analytics hooks, and third-party SDK connections that make the app a real, connected product.",
      keySteps: [
        "REST or GraphQL API integration",
        "Push notification and deep linking setup",
        "Third-party SDK and analytics wiring",
      ],
      deliverables: ["Integration specs", "API documentation"],
    },
    {
      label: "QA and performance",
      title: "Testing across real devices, OS versions, and network conditions",
      description:
        "We run structured QA across a range of real devices and OS versions, test under degraded network conditions, and profile performance to catch regressions before users do.",
      keySteps: [
        "Multi-device and OS version testing",
        "Offline and slow-network behavior checks",
        "Performance profiling and memory analysis",
      ],
      deliverables: ["QA report", "Performance findings", "Fix log"],
    },
    {
      label: "Store submission and launch",
      title: "Navigating App Store and Play Store submission with you",
      description:
        "We handle the submission process — preparing assets, writing listing copy, addressing review feedback — so the launch goes smoothly and on schedule.",
      keySteps: [
        "App store asset preparation",
        "Review guideline compliance check",
        "Submission and review management",
      ],
      deliverables: ["Store listings", "Submission checklist"],
    },
    {
      label: "Handover and post-launch support",
      title: "Leaving your team with a codebase and process ready for iteration",
      description:
        "We document the codebase, walk your team through the architecture, and stay available post-launch — so your team can own the product and iterate with confidence.",
      keySteps: [
        "Codebase walkthrough and documentation",
        "Post-launch monitoring setup",
        "Iteration planning for V2",
      ],
      deliverables: ["Technical documentation", "Post-launch support notes"],
    },
  ],
  faqs: [
    {
      question: "Should we build native or cross-platform?",
      answer:
        "It depends on your performance needs, feature requirements, timeline, and team. We help you weigh the trade-offs honestly — sometimes a shared cross-platform codebase is the smart choice, sometimes native gives you things that matter. We recommend based on your situation, not a preferred tool.",
    },
    {
      question: "Can you take our designs and build the app?",
      answer:
        "Yes. We can build directly from your existing designs, or provide mobile app design as part of the engagement — our design and engineering teams work closely together either way.",
    },
    {
      question: "Do you help with App Store and Play Store submission?",
      answer:
        "Yes — we support the full submission process including asset preparation, listing copy, compliance checks, and managing reviewer feedback. We aim to get it through on the first attempt.",
    },
    {
      question: "Can you maintain the app after launch?",
      answer:
        "Yes. We can stay on as your ongoing development team for updates, new features, and OS compatibility, or hand over a clean, well-documented codebase to your in-house team.",
    },
  ],
  related: ["mobile-app-design", "web-development", "dedicated-team"],
};
