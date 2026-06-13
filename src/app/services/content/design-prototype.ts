import type { ServiceContent } from "../services-content";

export const designPrototype: ServiceContent = {
  slug: "design-prototype",
  category: "Validate",
  title: "Design prototype",
  heroTitle: "Prototypes that prove your idea before you invest in code",
  heroLead:
    "We turn your concept into an interactive prototype you can test with real users — validating flows and design before you commit to a full build.",
  metaDescription:
    "Design prototype services by Scalixity — interactive prototypes to validate flows and design with users before building.",
  summary:
    "Clickable prototypes that validate ideas and flows with real users before you build.",
  challengesTitle: "We validate the design so the build does not become the experiment.",
  challenges: [
    {
      problem: "Do you want proof that a concept works before you invest in building it?",
      solution:
        "We create a clickable prototype that lets you and your users experience the product before any code is written. Problems found at this stage cost a fraction of what they cost in development.",
    },
    {
      problem: "Is it hard to get stakeholders aligned on an idea or direction?",
      solution:
        "A tangible, interactive prototype makes the concept real — turning abstract discussions and competing interpretations into concrete, shared feedback and faster decisions.",
    },
    {
      problem: "Are you unsure which flows actually work for your users?",
      solution:
        "We test key journeys with real users and refine the design based on what we observe, so development starts from a validated foundation rather than a best guess.",
    },
  ],
  solutionsEyebrow: "Tailored design prototype solutions for your business",
  solutionsTitle: "Industry-specific design prototype solutions",
  solutions: [
    {
      title: "SaaS",
      description:
        "We prototype core workflows and onboarding sequences so SaaS teams can validate usability and conversion intent before committing to a full product build.",
    },
    {
      title: "FinTech",
      description:
        "We prototype financial transaction flows and data presentation patterns to validate that users can complete key actions confidently and without confusion.",
    },
    {
      title: "HealthTech",
      description:
        "We prototype clinical or patient-facing workflows to validate clarity, task completion, and error prevention before building interfaces where mistakes carry real consequences.",
    },
    {
      title: "EdTech",
      description:
        "We prototype learning journeys, course navigation, and interactive content patterns to test whether the pedagogical design actually produces the intended learner behaviour.",
    },
    {
      title: "Marketplace",
      description:
        "We prototype buyer and seller flows separately and together to identify friction and drop-off points in the two-sided experience before development begins.",
    },
    {
      title: "Mobile Apps",
      description:
        "We prototype touch-first interactions and onboarding sequences for iOS and Android to validate that the experience works on real devices before the native build starts.",
    },
  ],
  benefitsTitle: "Why teams choose us",
  benefits: [
    {
      title: "De-risk the build",
      icon: "ShieldCheck",
      description:
        "Catching problems in a prototype is a fraction of the cost of finding them in production code.",
    },
    {
      title: "Real user feedback",
      icon: "Users",
      description:
        "Decisions grounded in how people actually interact with the prototype, not what you think they will do.",
    },
    {
      title: "Faster stakeholder alignment",
      icon: "Zap",
      description:
        "A tangible, clickable artifact gets everyone on the same page far faster than slides or written specs.",
    },
    {
      title: "Validated direction into build",
      icon: "Rocket",
      description:
        "Development starts from a design that has already proven itself, reducing costly mid-build pivots.",
    },
    {
      title: "Focused on what matters",
      icon: "Target",
      description:
        "We prototype the flows that carry the most risk, not every screen — so the validation work is efficient.",
    },
    {
      title: "Research-led refinement",
      icon: "Lightbulb",
      description:
        "Prototype findings feed back into concrete design improvements, not just a list of observations.",
    },
  ],
  processEyebrow: "Our design prototype process",
  processTitle:
    "How we build and test prototypes to validate the right things before development begins",
  process: [
    {
      label: "Scope and goals",
      title: "Defining what to prototype and what questions it needs to answer",
      description:
        "We start by identifying the flows and assumptions that carry the most risk — the ones where being wrong would cost the most — so the prototype is focused on what actually needs validating.",
      keySteps: [
        "Key user flows and hypothesis identification",
        "Risk ranking — what most needs validation",
        "Success criteria for the testing sessions",
      ],
      deliverables: ["Prototype scope brief", "Testing hypothesis list"],
    },
    {
      label: "User and flow research",
      title: "Understanding users and mapping the journeys to prototype",
      description:
        "We review what is known about your users and the context they will use the product in, then map out the journeys we will prototype with enough detail to design them properly.",
      keySteps: [
        "User context and needs review",
        "Core journey mapping",
        "Edge case and error state identification",
      ],
      deliverables: ["User context summary", "Annotated flow maps"],
    },
    {
      label: "Wireframes",
      title: "Structuring the screens and interactions before adding visual detail",
      description:
        "We design wireframes for the key flows first, making layout, structure, and interaction decisions explicit before investing in visual polish — so structural problems are caught early.",
      keySteps: [
        "Screen layout and information hierarchy",
        "Navigation and interaction logic",
        "Content structure and component placement",
      ],
      deliverables: ["Low-fidelity wireframes", "Interaction logic notes"],
    },
    {
      label: "High-fidelity prototype",
      title: "Building an interactive prototype realistic enough to test meaningfully",
      description:
        "We develop the prototype to the fidelity needed for useful testing — interactive, with the right visual detail and micro-interactions so users respond as they would to a real product.",
      keySteps: [
        "High-fidelity screen designs for key flows",
        "Interactive links and transitions in Figma",
        "Realistic content and data states",
      ],
      deliverables: ["Interactive Figma prototype", "Prototype walkthrough notes"],
    },
    {
      label: "Usability testing",
      title: "Observing how real users interact with the prototype",
      description:
        "We plan and run structured usability sessions with people who match your target user profile, observing where they succeed, struggle, and form false impressions of how the product works.",
      keySteps: [
        "Test plan and task script",
        "Moderated sessions with target users",
        "Observation and issue logging",
      ],
      deliverables: ["Test session recordings", "Raw finding notes", "Issue log"],
    },
    {
      label: "Findings and refinements",
      title: "Translating what we learned into concrete design improvements",
      description:
        "We synthesize the testing findings into prioritized insights and apply the changes to the prototype, so it reflects what was validated and surfaces clearly what still needs revisiting.",
      keySteps: [
        "Finding synthesis and prioritization",
        "Design changes applied to prototype",
        "Before and after annotation",
      ],
      deliverables: ["Testing findings report", "Refined prototype", "Decision log"],
    },
    {
      label: "Handoff to build",
      title: "Packaging the validated design for development",
      description:
        "We prepare the validated prototype and supporting documentation for handoff, ensuring the engineering team has everything they need to build from a design that has already been tested.",
      keySteps: [
        "Final prototype review and sign-off",
        "Developer-ready Figma files with specs",
        "Handoff walkthrough with engineering if needed",
      ],
      deliverables: ["Dev-ready Figma file", "Prototype spec notes", "Validated flow summary"],
    },
  ],
  faqs: [
    {
      question: "Why prototype before building?",
      answer:
        "Testing a clickable prototype catches usability and flow problems while they are still cheap and easy to change. Problems found in a prototype take hours to fix; the same problem found in production can take weeks and cost significantly more.",
    },
    {
      question: "How realistic is the prototype?",
      answer:
        "Realistic enough to produce genuine user reactions — interactive, with the key flows in place and enough visual fidelity that users respond as they would to a real product rather than a sketch.",
    },
    {
      question: "Do you run the user testing sessions too?",
      answer:
        "Yes. We plan and run moderated usability sessions with users who match your target profile, then translate what we observe into concrete, prioritized design refinements.",
    },
    {
      question: "What happens after validation?",
      answer:
        "You have a validated, refined design ready to build from. Our design and engineering teams can take it straight into development, or we can hand it off cleanly to your own team.",
    },
  ],
  related: ["product-discovery", "web-app-design", "rapid-mvp-development"],
};
