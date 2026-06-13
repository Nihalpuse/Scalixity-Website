import type { ServiceContent } from "../services-content";

export const noCodeDevelopment: ServiceContent = {
  slug: "no-code-development",
  category: "Development",
  title: "No-code development",
  heroTitle: "No-code products shipped fast, without the engineering overhead",
  heroLead:
    "We build production-ready products on no-code and low-code platforms — fast to launch, easy to change, and a smart fit for MVPs, internal tools, and automations.",
  metaDescription:
    "No-code development services by Scalixity — launch MVPs, internal tools, and automated workflows fast on no-code and low-code platforms without sacrificing quality.",
  summary: "Fast, flexible products built on no-code and low-code platforms.",
  challengesTitle: "We build no-code products that actually work in production.",
  challenges: [
    {
      problem:
        "Do you need to launch quickly without committing to a full engineering build?",
      solution:
        "We use proven no-code and low-code platforms to ship a working product in weeks rather than months. You get real users and real feedback before investing in custom code.",
    },
    {
      problem:
        "Are your no-code tools being pushed into territory they were never designed for?",
      solution:
        "We architect no-code solutions to match the platform's strengths — and introduce custom code or integrations at exactly the right layer. We also know when it's time to graduate to a full build and plan that transition clearly.",
    },
    {
      problem:
        "Do you want your team to iterate without a developer every time something changes?",
      solution:
        "We configure and hand over no-code products so your team owns the day-to-day. Content, logic, and workflows stay editable without engineering involvement, with clear documentation to back it up.",
    },
  ],
  solutionsEyebrow: "Tailored no-code solutions for your business",
  solutionsTitle: "Industry-specific no-code solutions",
  solutions: [
    {
      title: "SaaS",
      description:
        "Rapid SaaS MVPs built on no-code platforms to validate subscription models, test onboarding flows, and reach early customers before investing in a custom-code build.",
    },
    {
      title: "Internal tools",
      description:
        "Dashboards, admin panels, and approval workflows assembled quickly on low-code tools — so operations teams stop waiting for engineering sprints to get what they need.",
    },
    {
      title: "E-commerce",
      description:
        "Online stores and catalogue experiences launched fast on no-code platforms, with automations handling order management, notifications, and inventory syncing.",
    },
    {
      title: "Professional services",
      description:
        "Client portals, booking systems, and document workflows built without custom code — freeing service teams from manual coordination and reducing admin overhead.",
    },
    {
      title: "Marketplaces",
      description:
        "Two-sided marketplace MVPs that let you test supply, demand, and matching logic before committing to a custom platform build.",
    },
    {
      title: "Startups & founders",
      description:
        "Founders without a technical co-founder can get a real product live quickly, validate assumptions with users, and make informed decisions about when to bring in engineers.",
    },
  ],
  benefitsTitle: "Why teams choose us",
  benefits: [
    {
      title: "Speed to launch",
      icon: "Rocket",
      description:
        "Get a real product in front of users faster and for far less than a custom-code build requires.",
    },
    {
      title: "Right tool, right job",
      icon: "Wrench",
      description:
        "We know where no-code genuinely shines and where custom code is worth the investment — and we'll tell you honestly which applies.",
    },
    {
      title: "Easy to iterate",
      icon: "Repeat",
      description:
        "Products your team can update and extend without waiting on a development sprint.",
    },
    {
      title: "A clear path to scale",
      icon: "TrendingUp",
      description:
        "We design the architecture with growth in mind, so moving to custom code when the time comes is a planned step, not an emergency.",
    },
    {
      title: "Automations that save time",
      icon: "Workflow",
      description:
        "Connected workflows that eliminate repetitive manual work across your tools and processes.",
    },
    {
      title: "Confident handover",
      icon: "BadgeCheck",
      description:
        "We document what we build and train your team so you can own and extend it long after the project ends.",
    },
  ],
  processEyebrow: "Our no-code development process",
  processTitle:
    "How we build no-code products that launch fast, work in production, and stay easy to maintain",
  process: [
    {
      label: "Goals and constraints",
      title: "Understanding what you need to launch and what success looks like",
      description:
        "We begin by scoping the product, your timeline, and your team's technical comfort level so we can recommend the right platform and approach.",
      keySteps: [
        "Business goals and target users",
        "Timeline, budget, and team constraints",
        "Scale expectations and future roadmap",
      ],
      deliverables: ["Project brief", "Platform shortlist"],
    },
    {
      label: "Platform selection",
      title: "Choosing the tool that fits the job, not the one we know best",
      description:
        "We evaluate established no-code and low-code platforms against your specific requirements — considering capability, editability, pricing, and the upgrade path.",
      keySteps: [
        "Feature and capability mapping",
        "Vendor pricing and limitations review",
        "Assessment of custom-code extension points",
      ],
      deliverables: ["Platform recommendation", "Trade-off summary"],
    },
    {
      label: "User flows and information architecture",
      title: "Mapping the product before building a single screen",
      description:
        "We define the core user journeys and structure the product logically before touching any platform, reducing rework and wasted configuration later.",
      keySteps: [
        "Core user journeys by role",
        "Data model and page structure",
        "Edge cases and permission logic",
      ],
      deliverables: ["User flow diagrams", "Content and data model"],
    },
    {
      label: "Design and interface",
      title: "Visual design aligned to your brand before we build",
      description:
        "We create mockups or a light design direction so the product looks intentional and on-brand from day one, rather than using default platform styling throughout.",
      keySteps: [
        "Brand and visual guidelines applied",
        "Key screen designs or wireframes",
        "Responsive layout decisions",
      ],
      deliverables: ["Screen designs or mockups", "Style guide for platform"],
    },
    {
      label: "No-code build",
      title: "Assembling the product on the chosen platform",
      description:
        "We configure pages, logic, databases, and automations — building the full product iteratively with regular check-ins so nothing surprises you at the end.",
      keySteps: [
        "Pages, layouts, and navigation",
        "Database schema and relationships",
        "Automation and workflow logic",
      ],
      deliverables: ["Working product in platform", "Build progress notes"],
    },
    {
      label: "Integrations and automations",
      title: "Connecting your product to the tools and data it needs",
      description:
        "We wire up third-party services, APIs, and automation platforms so the product fits into your existing stack and removes manual steps for your team.",
      keySteps: [
        "Third-party API and service connections",
        "Automated notification and data sync flows",
        "Custom code extensions where needed",
      ],
      deliverables: ["Integration list", "Automation documentation"],
    },
    {
      label: "Testing and QA",
      title: "Checking every flow, edge case, and device before launch",
      description:
        "We test the product thoroughly across browsers and devices, catching broken logic and usability gaps before real users encounter them.",
      keySteps: [
        "Flow testing by user role",
        "Responsive and cross-browser checks",
        "Automation reliability testing",
      ],
      deliverables: ["QA report", "Bug fix log"],
    },
    {
      label: "Launch and handover",
      title: "Going live with documentation and training your team can use",
      description:
        "We deploy the product, configure the production environment, and run a handover session so your team can manage and extend it confidently from day one.",
      keySteps: [
        "Production deployment and domain setup",
        "Team training session",
        "Maintenance and upgrade guidance",
      ],
      deliverables: ["Live product", "Handover documentation", "Training notes"],
    },
  ],
  faqs: [
    {
      question: "Is no-code suitable for a real, production product?",
      answer:
        "For many MVPs, internal tools, and websites, yes — modern no-code platforms are capable, reliable, and used in production by serious companies. We help you judge where it fits and where a custom build serves you better based on your specific requirements.",
    },
    {
      question: "What happens when we outgrow no-code?",
      answer:
        "We plan for it from the start. We can extend with custom code at the right layer, integrate external APIs, or migrate to a full custom build when the product and team are ready to scale beyond the platform's limits.",
    },
    {
      question: "Can our team manage the product after you hand it over?",
      answer:
        "Yes — that's a core goal of the handover. We document what we build and run a training session so your team can update content, flows, and logic independently without needing us for routine changes.",
    },
    {
      question: "Which platforms do you work with?",
      answer:
        "We select platforms based on your specific use case, budget, and scale expectations, choosing established and well-supported no-code and low-code tools rather than defaulting to one platform for everything.",
    },
  ],
  related: ["rapid-mvp-development", "website-development", "custom-mvp-development"],
};
