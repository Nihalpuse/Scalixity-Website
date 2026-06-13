import type { ServiceContent } from "../services-content";

export const productDiscovery: ServiceContent = {
  slug: "product-discovery",
  category: "Research",
  title: "Product discovery",
  heroTitle: "Product discovery that de-risks what you build next",
  heroLead:
    "We help you define the right product before you build — aligning goals, users, and scope so you invest in what matters and de-risk the path to launch.",
  metaDescription:
    "Product discovery services by Scalixity — align goals, users, and scope to define the right product and de-risk your build.",
  summary:
    "Structured discovery to define the right product, scope, and roadmap before you build.",
  challengesTitle: "We help you build the right thing, not just build things.",
  challenges: [
    {
      problem: "Are you unsure what to build first or how to scope an MVP?",
      solution:
        "We work through your business goals, user needs, and technical constraints together to define a focused, realistic scope. You leave with a clear MVP or V1 definition that a team can act on immediately.",
    },
    {
      problem: "Is your team misaligned on direction or priorities?",
      solution:
        "We run structured sessions that bring stakeholders into a shared understanding of goals, trade-offs, and the plan. Everyone walks out with the same picture — not their own interpretation of it.",
    },
    {
      problem: "Do you want to reduce the risk of spending months building the wrong thing?",
      solution:
        "We pressure-test assumptions early using research and lightweight prototyping before you commit to a full build. The goal is confident investment, not cautious second-guessing after the fact.",
    },
  ],
  solutionsEyebrow: "Tailored product discovery solutions for your business",
  solutionsTitle: "Industry-specific product discovery solutions",
  solutions: [
    {
      title: "SaaS",
      description:
        "We define the core workflow and differentiation your product needs to earn its subscription, scoping an MVP that validates market fit without overbuilding.",
    },
    {
      title: "FinTech",
      description:
        "We map user trust requirements, regulatory constraints, and the key financial jobs-to-be-done so the product scope reflects real-world compliance and user needs.",
    },
    {
      title: "HealthTech",
      description:
        "We explore clinical or patient workflows, regulatory considerations, and the specific jobs your product needs to perform to fit into healthcare routines.",
    },
    {
      title: "EdTech",
      description:
        "We align on learner outcomes, instructor needs, and the minimum feature set that produces genuine educational value before building a full platform.",
    },
    {
      title: "Marketplace",
      description:
        "We untangle two-sided demand problems, define the supply and demand MVP separately, and sequence a launch strategy that avoids the classic cold-start trap.",
    },
    {
      title: "Internal Tools",
      description:
        "We interview the people who will actually use the tool, map their real workflows, and scope a build that solves the genuine bottleneck rather than the assumed one.",
    },
  ],
  benefitsTitle: "Why teams choose us",
  benefits: [
    {
      title: "Focused investment",
      icon: "Target",
      description:
        "We direct your time and budget toward the features that move real metrics, not the ones that sound compelling in a meeting.",
    },
    {
      title: "Shared team alignment",
      icon: "Users",
      description:
        "Everyone leaves discovery with the same goals, priorities, and scope — no lingering ambiguity to resurface during build.",
    },
    {
      title: "Evidence-led decisions",
      icon: "Search",
      description:
        "We validate assumptions with research and lightweight prototyping rather than relying on internal consensus alone.",
    },
    {
      title: "Reduced build risk",
      icon: "ShieldCheck",
      description:
        "Surfacing misaligned expectations and bad assumptions early costs far less than reworking a built product.",
    },
    {
      title: "Ready-to-build output",
      icon: "Rocket",
      description:
        "Discovery ends with a prioritized scope, roadmap, and context a design or engineering team can pick up and run with.",
    },
    {
      title: "Honest trade-off guidance",
      icon: "Lightbulb",
      description:
        "We lay out the real options and consequences clearly so you make informed decisions rather than optimistic ones.",
    },
  ],
  processEyebrow: "Our product discovery process",
  processTitle:
    "How we run discovery to align stakeholders and define a product scope worth building",
  process: [
    {
      label: "Stakeholder alignment",
      title: "Understanding business goals, constraints, and what success looks like",
      description:
        "We start by getting the right people in the room and building a shared picture of what the product needs to achieve, the constraints it operates within, and how success will be measured.",
      keySteps: [
        "Business goals and success metrics",
        "Known constraints — timeline, budget, tech",
        "Stakeholder priorities and trade-off preferences",
      ],
      deliverables: ["Goals and constraints brief", "Stakeholder map"],
    },
    {
      label: "User and market research",
      title: "Understanding who you are building for and what they actually need",
      description:
        "We research your target users and the competitive landscape to ground the product definition in real needs and category expectations rather than internal assumptions.",
      keySteps: [
        "User interviews or existing research synthesis",
        "Jobs-to-be-done mapping",
        "Competitive landscape review",
      ],
      deliverables: ["User insight summary", "Competitive reference snapshot"],
    },
    {
      label: "Assumption mapping",
      title: "Surfacing and stress-testing the beliefs the product depends on",
      description:
        "We identify the assumptions baked into the product idea — about users, market fit, technical feasibility — and separate the safe ones from those that need validation before committing to scope.",
      keySteps: [
        "Assumption inventory across product, user, and business",
        "Risk ranking by probability and impact",
        "Validation approach for high-risk assumptions",
      ],
      deliverables: ["Assumption risk map", "Validation plan"],
    },
    {
      label: "Feature definition and prioritization",
      title: "Deciding what the product needs to do — and what can wait",
      description:
        "We break down the product space into specific capabilities, then score them by user value, business impact, and build effort to define a clear, defensible scope.",
      keySteps: [
        "Full feature space mapping",
        "Impact and effort scoring",
        "MVP vs. roadmap triage",
      ],
      deliverables: ["Feature map", "Prioritized MVP scope", "Roadmap outline"],
    },
    {
      label: "Early validation",
      title: "Testing key concepts before committing to a full build",
      description:
        "Where assumptions carry meaningful risk, we create lightweight flows or wireframes to test them with users or stakeholders — answering the critical questions before you invest in engineering.",
      keySteps: [
        "Concept sketches or low-fidelity flows",
        "User or stakeholder validation sessions",
        "Findings synthesis and scope adjustment",
      ],
      deliverables: ["Validation findings", "Scope refinements"],
    },
    {
      label: "Scope and roadmap definition",
      title: "Documenting a clear plan the team can build from",
      description:
        "We pull together everything from discovery into a focused MVP definition and phased roadmap — concrete enough that a design or engineering team can start immediately.",
      keySteps: [
        "MVP feature list with acceptance criteria",
        "Phase 2 and beyond roadmap",
        "Open questions and next-step recommendations",
      ],
      deliverables: ["MVP scope document", "Phased product roadmap", "Open questions log"],
    },
    {
      label: "Readout and handoff",
      title: "Aligning the full team on the plan before build begins",
      description:
        "We present the discovery output to all relevant stakeholders, walk through the reasoning, and ensure the team leaves with a shared understanding they can carry confidently into design and build.",
      keySteps: [
        "Discovery readout session",
        "Stakeholder Q&A and final alignment",
        "Handoff of all discovery artifacts",
      ],
      deliverables: ["Full discovery pack", "Presentation deck", "Aligned MVP brief"],
    },
  ],
  faqs: [
    {
      question: "What is product discovery?",
      answer:
        "It is the work of defining what to build and why — aligning goals, users, and scope — before committing to a full build. Done well, it reduces the risk of investing in the wrong product and gives the team a clear, shared direction.",
    },
    {
      question: "How is discovery different from just writing a spec?",
      answer:
        "Discovery is collaborative and evidence-led. We surface and pressure-test the assumptions behind the idea, research real user needs, and often prototype to validate — so the plan that comes out is grounded rather than just documented.",
    },
    {
      question: "What do we walk away with?",
      answer:
        "A clear scope, a prioritized roadmap, surfaced risks, and shared alignment across the team — everything needed to start design and build with confidence rather than starting with half an idea.",
    },
    {
      question: "Can discovery flow straight into design and build?",
      answer:
        "Yes — discovery is designed to set up our design, prototype, and development teams to move quickly. The output is ready to hand directly to whoever is building next.",
    },
  ],
  related: ["design-prototype", "technical-workshop", "custom-mvp-development"],
};
