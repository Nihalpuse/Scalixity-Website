import type { ServiceContent } from "../services-content";

export const uxAudit: ServiceContent = {
  slug: "ux-audit",
  category: "Research",
  title: "UX audit",
  heroTitle: "A UX audit that pinpoints what's costing you conversions",
  heroLead:
    "We review your product against real user needs and best practice, then hand you a prioritized, practical plan to fix what is costing you engagement and conversions.",
  metaDescription:
    "UX audit services by Scalixity — an expert review of your product with prioritized, actionable recommendations to improve usability and conversion.",
  summary:
    "Expert usability review with a prioritized fix roadmap for your product.",
  challengesTitle: "We find the friction you have stopped noticing.",
  challenges: [
    {
      problem: "Do you know something is off with your product but cannot pinpoint what?",
      solution:
        "We evaluate the experience systematically — flows, usability, information architecture, and interface quality — to identify the specific issues, not just the symptoms. You get a clear picture of what is actually breaking the experience.",
    },
    {
      problem: "Are users dropping off at key moments and you are not sure why?",
      solution:
        "We trace where and why people disengage, combining expert heuristic review with available analytics signals to surface the highest-impact friction points. The result is a targeted set of fixes, not a general wishlist.",
    },
    {
      problem: "Is your team unsure which issues to tackle first?",
      solution:
        "We deliver a prioritized roadmap ranked by impact and implementation effort, so your team can act on the most valuable changes in the right order without wasting time on low-return fixes.",
    },
  ],
  solutionsEyebrow: "Tailored UX audit solutions for your business",
  solutionsTitle: "Industry-specific UX audit solutions",
  solutions: [
    {
      title: "SaaS",
      description:
        "We audit onboarding flows, dashboard usability, and feature discoverability to reduce churn and improve activation rates in subscription products.",
    },
    {
      title: "FinTech",
      description:
        "We evaluate trust signals, transaction flows, and compliance-driven UI patterns to ensure financial products feel safe, clear, and easy to complete.",
    },
    {
      title: "EdTech",
      description:
        "We review learner journeys, content navigation, and progress feedback to improve course completion rates and learner satisfaction.",
    },
    {
      title: "eCommerce",
      description:
        "We audit product discovery, cart flows, and checkout friction to identify the specific drop-off points costing you conversions.",
    },
    {
      title: "HealthTech",
      description:
        "We assess patient or clinician interfaces for clarity, accessibility, and task efficiency — areas where poor UX carries real operational and safety risk.",
    },
    {
      title: "B2B Platforms",
      description:
        "We review complex multi-role workflows, admin interfaces, and data-heavy dashboards to surface usability issues that slow teams down day to day.",
    },
  ],
  benefitsTitle: "Why teams choose us",
  benefits: [
    {
      title: "Practical findings",
      icon: "Target",
      description:
        "Every recommendation ties to a real product outcome, not abstract best-practice theory.",
    },
    {
      title: "Prioritized by impact",
      icon: "BarChart3",
      description:
        "We rank issues by effort and potential gain so your team knows exactly what to fix first.",
    },
    {
      title: "Expert eyes on the product",
      icon: "Eye",
      description:
        "Senior designers who have reviewed many products bring patterns and blind spots your internal team may miss.",
    },
    {
      title: "Accessibility included",
      icon: "Accessibility",
      description:
        "We check against accessibility best practices as a standard part of every audit, not an optional add-on.",
    },
    {
      title: "Fast turnaround",
      icon: "Clock",
      description:
        "Audits are intentionally focused and efficient — designed to give you direction quickly without a long engagement.",
    },
    {
      title: "Clear next step",
      icon: "Compass",
      description:
        "You leave with a roadmap that converts findings into momentum your team can act on right away.",
    },
  ],
  processEyebrow: "Our UX audit process",
  processTitle:
    "How we structure a UX audit to surface the right issues and give you a plan you can act on",
  process: [
    {
      label: "Intake and scoping",
      title: "Understanding your goals, product, and what to focus on",
      description:
        "We start by understanding your business goals, who your users are, and where you suspect the biggest problems are, so the audit is focused rather than generic.",
      keySteps: [
        "Goals and success metrics discussion",
        "Scope definition — full product or focused area",
        "Access to product, analytics, and existing research",
      ],
      deliverables: ["Audit scope document", "Access checklist"],
    },
    {
      label: "Heuristic evaluation",
      title: "Reviewing the product against established usability principles",
      description:
        "Our designers walk through the product systematically, assessing each area against proven usability heuristics and interface best practices.",
      keySteps: [
        "Nielsen heuristics review across key screens",
        "Navigation and information architecture assessment",
        "Visual hierarchy and feedback clarity check",
      ],
      deliverables: ["Annotated heuristic findings", "Issue severity ratings"],
    },
    {
      label: "User flow analysis",
      title: "Tracing the journeys that matter most to your business",
      description:
        "We map and walk through critical user flows — onboarding, core task completion, conversion — to identify where friction accumulates and drops off occur.",
      keySteps: [
        "Critical flow identification",
        "Step-by-step friction mapping",
        "Drop-off point analysis",
      ],
      deliverables: ["Annotated flow maps", "Drop-off summary"],
    },
    {
      label: "Accessibility review",
      title: "Checking for gaps that exclude users and create compliance risk",
      description:
        "We review the product against WCAG guidelines and common accessibility pitfalls, surfacing issues that affect a wider user base than most teams expect.",
      keySteps: [
        "Colour contrast and typography check",
        "Keyboard and screen-reader navigation review",
        "Touch target and interactive element sizing",
      ],
      deliverables: ["Accessibility findings list", "WCAG gap summary"],
    },
    {
      label: "Data and research triangulation",
      title: "Grounding findings in evidence where available",
      description:
        "Where analytics, session recordings, or existing user feedback are available, we incorporate them to validate or sharpen the expert review findings.",
      keySteps: [
        "Analytics review for drop-off signals",
        "Session recording spot-check where available",
        "Existing user feedback synthesis",
      ],
      deliverables: ["Evidence summary", "Finding confidence ratings"],
    },
    {
      label: "Prioritization and roadmap",
      title: "Sorting the findings by impact so you know what to fix first",
      description:
        "We score every finding against impact on users and business goals, weighed against implementation effort, to produce a prioritized action plan.",
      keySteps: [
        "Impact and effort scoring per finding",
        "Quick wins vs. strategic changes separation",
        "Sequencing for your team's capacity",
      ],
      deliverables: ["Prioritized findings matrix", "Action roadmap"],
    },
    {
      label: "Readout and handoff",
      title: "Walking your team through findings and answering their questions",
      description:
        "We present the audit in a live session, ensure the team understands the reasoning behind each finding, and hand over the full documented report.",
      keySteps: [
        "Live presentation of findings and roadmap",
        "Team Q&A to clarify recommendations",
        "Handoff of full annotated report",
      ],
      deliverables: ["Full audit report", "Presentation deck", "Action roadmap doc"],
    },
  ],
  faqs: [
    {
      question: "What do we get from a UX audit?",
      answer:
        "A clear, prioritized set of findings and recommendations — what is hurting the experience, why it matters, and what to fix first — documented in a report your team can act on immediately.",
    },
    {
      question: "Do you use real user data in the audit?",
      answer:
        "Where it is available we factor in analytics and existing feedback alongside expert review. If deeper evidence is needed, we can recommend lightweight usability testing to complement the audit.",
    },
    {
      question: "How long does an audit take?",
      answer:
        "It depends on the scope of the product, but audits are designed to be focused and efficient — most move from intake to delivered report in one to two weeks.",
    },
    {
      question: "Can you implement the fixes after the audit?",
      answer:
        "Yes. Our design and engineering teams can take the recommendations through redesign and build, so the audit connects directly into action.",
    },
  ],
  related: ["product-redesign", "website-redesign", "product-discovery"],
};
