import type { ServiceContent } from "../services-content";

export const technicalWorkshop: ServiceContent = {
  slug: "technical-workshop",
  category: "Research",
  title: "Technical workshop",
  heroTitle: "Technical workshops that validate your stack before you build",
  heroLead:
    "A focused, collaborative session to align on architecture, scope, and approach — turning a complex idea into a clear, shared technical plan.",
  metaDescription:
    "Technical workshop services by Scalixity — collaborative sessions to align on architecture, scope, and a clear plan for your build.",
  summary:
    "Structured sessions to align on architecture, scope, and technical direction before you commit.",
  challengesTitle: "We turn vague technical direction into a plan everyone trusts.",
  challenges: [
    {
      problem: "Is the technical direction unclear or still being debated?",
      solution:
        "We facilitate a structured session to lay out the real options, weigh trade-offs honestly, and converge on an architecture that the team understands and can stand behind. You leave with a decision, not more debate.",
    },
    {
      problem: "Are your estimates and scope still too vague to plan around?",
      solution:
        "We decompose the work together in the workshop, surfacing dependencies and technical risks so scope and effort become concrete. Vague feels turns into a breakdown you can actually schedule.",
    },
    {
      problem: "Do business and engineering see the project differently?",
      solution:
        "We bring both sides into the room and translate between goals and technical reality, aligning on constraints and trade-offs so the project starts with a shared model — not two separate ones.",
    },
  ],
  solutionsEyebrow: "Tailored technical workshop solutions for your business",
  solutionsTitle: "Industry-specific technical workshop solutions",
  solutions: [
    {
      title: "SaaS",
      description:
        "We help SaaS teams align on multi-tenant architecture, data isolation, and the right level of infrastructure complexity for their current stage and growth trajectory.",
    },
    {
      title: "AI Products",
      description:
        "We workshop LLM integration strategy, data pipeline design, evaluation approaches, and the real cost and latency trade-offs before teams commit to a technical direction.",
    },
    {
      title: "FinTech",
      description:
        "We clarify compliance-driven architecture requirements, integration points with financial infrastructure, and the security and data residency considerations specific to financial products.",
    },
    {
      title: "HealthTech",
      description:
        "We work through data handling requirements, integration with clinical systems, and the architecture decisions shaped by regulatory and privacy obligations in healthcare.",
    },
    {
      title: "Marketplace",
      description:
        "We map out the real-time, search, and transaction infrastructure needs of two-sided marketplaces and sequence the technical build to match the business launch strategy.",
    },
    {
      title: "Enterprise",
      description:
        "We align on integration with existing enterprise systems, identity and access patterns, and the deployment and security constraints that shape what is technically feasible.",
    },
  ],
  benefitsTitle: "Why teams choose us",
  benefits: [
    {
      title: "Clarity in hours, not weeks",
      icon: "Zap",
      description:
        "A focused session produces concrete direction quickly — far faster than the back-and-forth of async decision-making.",
    },
    {
      title: "Honest trade-off analysis",
      icon: "Lightbulb",
      description:
        "We present the real options plainly, including the ones we would steer you away from and why.",
    },
    {
      title: "Business and engineering aligned",
      icon: "Handshake",
      description:
        "We translate between product goals and technical realities so both sides leave with the same understanding.",
    },
    {
      title: "Risks surfaced early",
      icon: "Shield",
      description:
        "Dependencies and unknowns identified in a workshop cost nothing to address compared to discovering them mid-build.",
    },
    {
      title: "Concrete output",
      icon: "BadgeCheck",
      description:
        "You leave with a recommended architecture, scoped work breakdown, and a plan — not just notes and action items.",
    },
    {
      title: "Experienced facilitators",
      icon: "Brain",
      description:
        "Engineers who have designed and built many products bring pattern recognition that shortcuts common dead ends.",
    },
  ],
  processEyebrow: "Our technical workshop process",
  processTitle:
    "How we structure technical workshops to surface risks, align teams, and produce a plan worth building from",
  process: [
    {
      label: "Pre-workshop intake",
      title: "Understanding the problem, context, and who needs to be in the room",
      description:
        "Before the session we gather the context needed to make it productive — the product idea, known constraints, what has already been decided, and who the right participants are.",
      keySteps: [
        "Problem and goal framing",
        "Existing technical context and constraints",
        "Participant identification — product, engineering, and relevant stakeholders",
      ],
      deliverables: ["Workshop brief", "Agenda and session plan"],
    },
    {
      label: "Problem decomposition",
      title: "Breaking the technical challenge into its real constituent parts",
      description:
        "We start the session by decomposing the problem space so participants are working from a shared, specific picture rather than a high-level description that means different things to different people.",
      keySteps: [
        "Core product requirements and constraints mapping",
        "Known unknowns and assumption inventory",
        "Technical component breakdown",
      ],
      deliverables: ["Problem decomposition map", "Assumption log"],
    },
    {
      label: "Architecture options",
      title: "Laying out the real technical approaches with their trade-offs",
      description:
        "We present and discuss the viable architectural options for the problem, making trade-offs explicit — so the team is choosing between real alternatives with eyes open, not defaulting to what is familiar.",
      keySteps: [
        "Two to three architectural options sketched",
        "Trade-off matrix across cost, complexity, speed, and scale",
        "Risk and dependency map per option",
      ],
      deliverables: ["Architecture options summary", "Trade-off comparison"],
    },
    {
      label: "Decision and recommendation",
      title: "Converging on the right approach for your context",
      description:
        "We facilitate the team toward a decision, with our honest recommendation where it is useful. The goal is a clear, agreed direction — not a list of things to think about later.",
      keySteps: [
        "Facilitated decision-making discussion",
        "Recommendation with reasoning",
        "Open questions logged and assigned",
      ],
      deliverables: ["Agreed architecture decision", "Open questions log"],
    },
    {
      label: "Scope and work breakdown",
      title: "Turning the chosen approach into a concrete, estimable plan",
      description:
        "With an architecture decided, we break the build into concrete workstreams and components, surface sequencing dependencies, and produce a scope you can estimate and plan against.",
      keySteps: [
        "Work breakdown by component and phase",
        "Sequencing and dependency mapping",
        "Rough sizing and phasing",
      ],
      deliverables: ["Work breakdown structure", "Phased build plan", "Rough effort estimates"],
    },
    {
      label: "Documentation and handoff",
      title: "Packaging the workshop output for the team that will build",
      description:
        "We document the decisions, rationale, and plan clearly so they can be handed to any engineer or stakeholder who was not in the room, and so the context does not evaporate after the session.",
      keySteps: [
        "Architecture decision record",
        "Scope and roadmap documentation",
        "Handoff walkthrough with build team if needed",
      ],
      deliverables: ["Architecture decision record", "Scope document", "Workshop summary"],
    },
  ],
  faqs: [
    {
      question: "Who should join a technical workshop?",
      answer:
        "Usually a mix of product and engineering stakeholders — the people who own the goals and those who will build it. We help you identify the right group during intake and tailor the session format to match.",
    },
    {
      question: "What comes out of the workshop?",
      answer:
        "A recommended architecture and approach, a concrete scope breakdown, surfaced risks and dependencies, and shared alignment across everyone in the room — documented in a form the build team can use.",
    },
    {
      question: "How long does a technical workshop take?",
      answer:
        "Most workshops run as one or two focused sessions — long enough to go deep, short enough to stay productive. We set the format during intake based on the complexity of your problem.",
    },
    {
      question: "What if we need help building after the workshop?",
      answer:
        "We can continue straight into development with the plan the workshop produced, or hand you a clean, documented output to take to your own team.",
    },
  ],
  related: ["product-discovery", "custom-mvp-development", "dedicated-team"],
};
