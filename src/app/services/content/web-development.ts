import type { ServiceContent } from "../services-content";

export const webDevelopment: ServiceContent = {
  slug: "web-development",
  category: "Development",
  title: "Web development",
  heroTitle: "Web development built to scale with your business",
  heroLead:
    "We build custom web applications — from complex SaaS platforms to dashboards and internal tools — engineered for performance, security, and long-term growth.",
  metaDescription:
    "Web development services by Scalixity — custom, scalable web applications and SaaS platforms built for performance, security, and growth.",
  summary: "Robust, scalable web platforms engineered for AI-first products.",
  challengesTitle: "We build web platforms that scale with your ambitions, not against them.",
  challenges: [
    {
      problem: "Are off-the-shelf tools forcing you to work around your own product?",
      solution:
        "We build custom web applications tailored to your exact workflows and business logic, so the product fits how your team actually works — not the other way around. Every architectural decision is made with your specific constraints in mind.",
    },
    {
      problem: "Does your platform slow down or break as usage grows?",
      solution:
        "We design for scale from the start — choosing the right data models, caching strategies, and infrastructure patterns so the app stays fast and reliable under real load, not just in demos.",
    },
    {
      problem: "Is design intent getting lost between Figma and production?",
      solution:
        "We work closely with design from day one, treating components and states as a shared system. The result matches the intent because engineers and designers are aligned throughout the build — not just at handoff.",
    },
  ],
  solutionsEyebrow: "Tailored web development solutions for your industry",
  solutionsTitle: "Industry-specific web development solutions",
  solutions: [
    {
      title: "SaaS",
      description:
        "Multi-tenant platforms, subscription billing, and role-based access built to scale from early adopters to enterprise — with the architecture to support it from day one.",
    },
    {
      title: "FinTech",
      description:
        "Secure, compliance-aware platforms for payments, reporting, and financial workflows — engineered with data integrity and audit-readiness at the core.",
    },
    {
      title: "Healthcare",
      description:
        "Patient portals, clinical dashboards, and care coordination tools built with privacy-first architecture and the reliability that healthcare workflows demand.",
    },
    {
      title: "EdTech",
      description:
        "Learning management platforms, instructor dashboards, and student-facing tools that handle concurrent users and dynamic content without performance compromises.",
    },
    {
      title: "E-commerce",
      description:
        "Custom storefronts, inventory systems, and order management platforms built for high-traffic events and complex catalog requirements that generic platforms can't handle.",
    },
    {
      title: "Logistics",
      description:
        "Fleet tracking dashboards, route optimization tools, and supply-chain portals that integrate with external data sources and keep operations teams informed in real time.",
    },
  ],
  benefitsTitle: "Why teams choose us",
  benefits: [
    {
      title: "Senior engineering throughout",
      icon: "Code2",
      description:
        "Experienced engineers who think about architecture and maintainability, not just shipping features quickly.",
    },
    {
      title: "Scalable from day one",
      icon: "Rocket",
      description:
        "We design data models and infrastructure patterns that grow with your product instead of being rebuilt when traffic arrives.",
    },
    {
      title: "Design-aligned builds",
      icon: "Palette",
      description:
        "We build faithfully to design intent and collaborate closely throughout so production matches what was designed.",
    },
    {
      title: "Performance and security built in",
      icon: "ShieldCheck",
      description:
        "Fast load times, secure coding practices, and sensible defaults across authentication, data handling, and third-party integrations.",
    },
    {
      title: "Transparent delivery",
      icon: "Eye",
      description:
        "Clear scope, realistic estimates, and progress you can follow in your own tools — no black box development.",
    },
    {
      title: "Clean, maintainable code",
      icon: "Wrench",
      description:
        "Documented, well-structured codebases your team can confidently extend — or hand to a future developer without a rewrite.",
    },
  ],
  processEyebrow: "Our web development process",
  processTitle:
    "How we scope, architect, and deliver custom web applications your team can grow on",
  process: [
    {
      label: "Discovery and scoping",
      title: "Understanding your goals, users, and technical constraints",
      description:
        "We start by understanding what you're building, who it's for, and what success looks like — so architecture and scope decisions are grounded in reality from the start.",
      keySteps: [
        "Business goals and product vision",
        "User types, roles, and core workflows",
        "Existing systems, integrations, and constraints",
      ],
      deliverables: ["Discovery brief", "Scope outline"],
    },
    {
      label: "Architecture planning",
      title: "Choosing the right stack and structure before writing a line of code",
      description:
        "We define the technical approach — stack, data model, infrastructure, and API design — so the build starts on solid foundations and scales predictably.",
      keySteps: [
        "Stack selection and trade-off analysis",
        "Data modeling and API contracts",
        "Infrastructure and deployment approach",
      ],
      deliverables: ["Architecture doc", "Tech stack decision record"],
    },
    {
      label: "Design alignment",
      title: "Establishing a shared component system before building",
      description:
        "We review designs with an engineering lens — flagging edge cases, agreeing on component boundaries, and setting up a shared component library so build and design stay in sync.",
      keySteps: [
        "Design review with engineering input",
        "Component breakdown and naming",
        "State and interaction inventory",
      ],
      deliverables: ["Component map", "Design-to-dev handoff notes"],
    },
    {
      label: "Core build",
      title: "Building the foundation and primary features in focused sprints",
      description:
        "We deliver in iterative sprints, with working software after each cycle — starting with the core flows and building out from there so you can review progress, not just wait for a big reveal.",
      keySteps: [
        "Sprint planning with prioritized backlog",
        "Feature implementation with code review",
        "Regular demos and feedback loops",
      ],
      deliverables: ["Working feature increments", "Sprint review notes"],
    },
    {
      label: "Integrations",
      title: "Connecting the platform to your wider ecosystem",
      description:
        "We build the integrations — APIs, third-party services, authentication providers, and data pipelines — that connect your app to the rest of your stack reliably.",
      keySteps: [
        "API and webhook integrations",
        "Auth provider and SSO setup",
        "Data pipeline and sync logic",
      ],
      deliverables: ["Integration specs", "API documentation"],
    },
    {
      label: "QA and performance",
      title: "Testing for correctness, speed, and resilience before launch",
      description:
        "We run structured QA across key flows, test under realistic load, and address performance bottlenecks before users encounter them — not after.",
      keySteps: [
        "Functional and regression testing",
        "Performance profiling and optimization",
        "Accessibility and cross-browser checks",
      ],
      deliverables: ["QA report", "Performance audit", "Fix log"],
    },
    {
      label: "Launch and deployment",
      title: "Deploying confidently with monitoring in place from day one",
      description:
        "We handle deployment, environment setup, and monitoring configuration so the app goes live with observability from the start and you have clear visibility into production health.",
      keySteps: [
        "Production environment setup",
        "CI/CD pipeline configuration",
        "Monitoring and alerting setup",
      ],
      deliverables: ["Deployment runbook", "Monitoring dashboard"],
    },
    {
      label: "Handover and support",
      title: "Leaving your team with a codebase they can own and extend",
      description:
        "We document the architecture, walk your team through the codebase, and stay available for questions — so ownership transfers cleanly and confidently.",
      keySteps: [
        "Codebase walkthrough sessions",
        "Documentation and ADRs",
        "Post-launch support window",
      ],
      deliverables: ["Technical documentation", "Handover guide"],
    },
  ],
  faqs: [
    {
      question: "What kinds of web applications do you build?",
      answer:
        "From SaaS platforms and internal tools to complex dashboards and customer portals — custom web applications designed around your specific workflows and business logic, not adapted from a template.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We choose the stack to fit the project, favoring modern, well-supported frameworks and infrastructure that keep the product fast, secure, and maintainable over the long term. We'll recommend an approach and explain the reasoning.",
    },
    {
      question: "Can you take over an existing codebase?",
      answer:
        "Yes. We can extend, stabilize, or modernize an existing web application — whether that means adding features, addressing technical debt, or migrating to a better architecture.",
    },
    {
      question: "Do you handle design as well as development?",
      answer:
        "We can — our design teams cover web app and website design, or we will build faithfully to designs you already have. Running design and engineering together under one team keeps things aligned.",
    },
  ],
  related: ["web-app-design", "custom-mvp-development", "website-development"],
};
