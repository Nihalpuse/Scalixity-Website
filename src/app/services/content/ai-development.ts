import type { ServiceContent } from "../services-content";

export const aiDevelopment: ServiceContent = {
  slug: "ai-development",
  category: "Development",
  title: "AI development",
  heroTitle: "AI development that turns models into real product value",
  heroLead:
    "We design, build, and ship production-grade AI — from LLM and RAG applications to predictive models and autonomous agents — engineered for reliability, cost control, and real business impact.",
  metaDescription:
    "AI development services by Scalixity — production-grade LLM apps, RAG systems, predictive models, and AI agents engineered for reliability, evaluation, and real business impact.",
  summary: "Production-grade LLM apps, agents, and predictive models that work in the real world.",
  challengesTitle: "We build AI that works in production, not just in demos.",
  challenges: [
    {
      problem:
        "Does your AI prototype work beautifully in a demo but fall apart with real users and real data?",
      solution:
        "We engineer AI systems for production reality — proper data pipelines, retrieval grounding, evaluation harnesses, and monitoring so they stay accurate, reliable, and cost-effective at scale, not just in a controlled showcase.",
    },
    {
      problem:
        "Not sure where AI actually adds value in your product versus where it adds noise?",
      solution:
        "We start from outcomes, not hype: we map your workflows to identify where LLMs, predictive models, or agents move a real metric, and where a simpler deterministic approach wins. You invest in AI where it earns its keep.",
    },
    {
      problem:
        "Worried about runaway inference costs, hallucinations, or outputs you can't trust?",
      solution:
        "We ground models in your data through retrieval and fine-tuning, add evaluation pipelines that measure quality honestly, and tune prompts and model selection for cost and latency — with guardrails and monitoring so regressions surface before users notice.",
    },
  ],
  solutionsEyebrow: "Tailored AI solutions for your business",
  solutionsTitle: "Industry-specific AI solutions",
  solutions: [
    {
      title: "SaaS",
      description:
        "AI features embedded directly into your product — intelligent search, copilot assistants, and automated workflows that increase engagement and reduce churn without blowing up inference costs.",
    },
    {
      title: "FinTech",
      description:
        "Predictive risk models, transaction classification, fraud-signal detection, and AI-assisted compliance workflows grounded in proprietary data with the auditability financial services demands.",
    },
    {
      title: "Healthcare",
      description:
        "Clinical document intelligence, patient-communication assistants, and predictive triage models built with the safety guardrails and data handling that healthcare environments require.",
    },
    {
      title: "E-commerce & Retail",
      description:
        "Personalized recommendation engines, dynamic merchandising, and AI-powered customer support assistants that increase conversion and reduce support load at the same time.",
    },
    {
      title: "Legal & Professional services",
      description:
        "Document analysis, contract review assistants, and knowledge retrieval systems that let professionals work faster without sacrificing accuracy or accountability.",
    },
    {
      title: "Enterprise operations",
      description:
        "Internal knowledge bases powered by RAG, process automation agents, and reporting assistants that reduce time-on-task for operations, HR, and support teams across large organizations.",
    },
  ],
  benefitsTitle: "Why teams choose us",
  benefits: [
    {
      title: "AI-first engineering",
      icon: "Brain",
      description:
        "AI is our core discipline, not an add-on — practical, current expertise across the full AI engineering stack from data to deployment.",
    },
    {
      title: "Outcome over hype",
      icon: "Target",
      description:
        "We build where AI earns its keep and tell you honestly when a simpler, cheaper approach gives you the same result.",
    },
    {
      title: "Production-ready from day one",
      icon: "ShieldCheck",
      description:
        "Monitoring, cost controls, evaluation pipelines, and guardrails engineered in from the start — not bolted on after the demo.",
    },
    {
      title: "Grounded in your data",
      icon: "Database",
      description:
        "RAG pipelines, fine-tuning, and structured retrieval that anchor model outputs in what your business actually knows.",
    },
    {
      title: "Measurable quality",
      icon: "BarChart3",
      description:
        "We define and track accuracy, relevance, and latency metrics so you know what quality looks like and can catch regressions early.",
    },
    {
      title: "Agents with the right oversight",
      icon: "Bot",
      description:
        "Autonomous agents and multi-step workflows designed with clear human-in-the-loop checkpoints where the stakes require them.",
    },
  ],
  processEyebrow: "Our AI development process",
  processTitle:
    "How we take AI from a promising idea to a reliable, cost-efficient production system",
  process: [
    {
      label: "Problem framing",
      title: "Defining where AI genuinely belongs in your product",
      description:
        "Before any model is touched, we map your workflows to identify the specific tasks where AI creates real leverage — and rule out the ones where it adds complexity without value.",
      keySteps: [
        "Business outcome and success metric definition",
        "Workflow decomposition and AI opportunity mapping",
        "Build vs buy vs fine-tune decision framework",
      ],
      deliverables: ["AI opportunity brief", "Recommended approach"],
    },
    {
      label: "Data assessment",
      title: "Understanding what data you have and what shape it needs to be in",
      description:
        "The quality of an AI system is largely determined by its data. We audit your available data, identify gaps, and plan the pipelines needed to make it usable for training, retrieval, or evaluation.",
      keySteps: [
        "Data source inventory and quality review",
        "Labeling and annotation requirements",
        "Privacy, compliance, and access mapping",
      ],
      deliverables: ["Data readiness report", "Pipeline requirements"],
    },
    {
      label: "Architecture design",
      title: "Choosing the right AI pattern for your use case",
      description:
        "We select the architecture — RAG, fine-tuning, predictive ML, agent orchestration, or a hybrid — based on your data, latency requirements, cost targets, and reliability needs.",
      keySteps: [
        "Model and provider selection",
        "Retrieval and grounding strategy",
        "Orchestration and tool-use design",
      ],
      deliverables: ["System architecture", "Technology and model selection rationale"],
    },
    {
      label: "Evaluation framework",
      title: "Defining what good looks like before writing the first prompt",
      description:
        "We establish the evaluation harness — ground-truth datasets, metrics, and automated tests — before building the system, so quality is measurable from the first iteration and improvements are verifiable.",
      keySteps: [
        "Ground-truth dataset construction",
        "Metric definition (accuracy, relevance, latency, cost)",
        "Automated evaluation pipeline setup",
      ],
      deliverables: ["Evaluation dataset", "Metrics dashboard", "Baseline scores"],
    },
    {
      label: "Data pipeline and infrastructure",
      title: "Building the foundation that keeps AI fast, fresh, and affordable",
      description:
        "We build ingestion, chunking, embedding, and vector storage pipelines alongside the serving infrastructure so the AI system has reliable, current data and predictable operating costs.",
      keySteps: [
        "Ingestion and preprocessing pipelines",
        "Embedding and vector index setup",
        "Serving infrastructure and caching strategy",
      ],
      deliverables: ["Data pipelines", "Vector store", "Infrastructure configuration"],
    },
    {
      label: "Model and prompt engineering",
      title: "Building and iterating toward quality against the evaluation harness",
      description:
        "We develop and systematically improve prompts, retrieval logic, and model interactions — measuring every change against the evaluation framework to ensure improvements are real, not subjective.",
      keySteps: [
        "Prompt engineering and chain construction",
        "Retrieval tuning and re-ranking",
        "Fine-tuning where evaluation shows it's warranted",
      ],
      deliverables: ["Prompt library", "Retrieval pipeline", "Evaluation benchmark results"],
    },
    {
      label: "Integration and product build",
      title: "Connecting the AI layer to your product and user experience",
      description:
        "We integrate the AI system into your product — APIs, streaming responses, UI state management for async outputs, and fallback handling — so the experience is smooth even when the model is slow or uncertain.",
      keySteps: [
        "API and streaming interface design",
        "UI integration for AI outputs and loading states",
        "Fallback and graceful degradation logic",
      ],
      deliverables: ["Integrated AI feature", "API documentation", "Error handling spec"],
    },
    {
      label: "Monitoring and continuous improvement",
      title: "Keeping quality high and costs predictable after launch",
      description:
        "We set up observability so production behavior is visible — latency, cost per query, user feedback signals, and output quality — and establish a feedback loop so the system improves with usage rather than drifting.",
      keySteps: [
        "LLM observability and tracing setup",
        "Cost and latency dashboards",
        "Feedback loop and re-evaluation cadence",
      ],
      deliverables: ["Monitoring setup", "Cost dashboard", "Improvement runbook"],
    },
  ],
  faqs: [
    {
      question: "What kinds of AI products do you build?",
      answer:
        "LLM and RAG applications, domain-specific chatbots and copilots, autonomous agents and multi-step workflows, predictive and classification models, and AI features embedded in existing products — always grounded in your data and tied to a specific use case.",
    },
    {
      question: "How do you handle hallucinations and accuracy?",
      answer:
        "We ground models in your data with retrieval-augmented generation, add evaluation pipelines that measure quality continuously, and apply guardrails to catch out-of-scope or low-confidence outputs. Quality is measured with real metrics, not claimed qualitatively.",
    },
    {
      question: "Can you integrate AI into our existing product and data?",
      answer:
        "Yes. We work with your existing stack, data sources, and APIs, building the pipelines and infrastructure needed to connect AI features to what you already have rather than requiring a rebuild.",
    },
    {
      question: "Will AI actually pay off for us?",
      answer:
        "We give you an honest answer based on your specific workflows and data. We focus AI investment where it moves a real, measurable outcome and recommend simpler, cheaper approaches when they serve you just as well.",
    },
  ],
  related: ["custom-mvp-development", "technical-workshop", "product-discovery"],
};
