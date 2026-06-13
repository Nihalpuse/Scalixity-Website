import type { ServiceContent } from "../services-content";

export const blockchainDevelopment: ServiceContent = {
  slug: "blockchain-development",
  category: "Development",
  title: "Blockchain development",
  heroTitle: "Blockchain products built secure, usable, and ready to scale",
  heroLead:
    "We build decentralized applications and smart contracts with security and clarity at the core — from concept through to a usable, audited-ready product your users can trust.",
  metaDescription:
    "Blockchain development services by Scalixity — secure smart contracts and decentralized apps built with clear interfaces and production-grade engineering.",
  summary: "Secure smart contracts and dApps engineered for trust and usability.",
  challengesTitle: "We build on-chain systems that are secure, usable, and honest.",
  challenges: [
    {
      problem:
        "Is on-chain logic risky to get right — and expensive to fix after deployment?",
      solution:
        "We write smart contracts carefully, with comprehensive test coverage, well-understood patterns, and security best practices baked in from the first line of code. Contracts are prepared and structured for independent third-party audits before anything of value goes live.",
    },
    {
      problem:
        "Are your decentralized apps too confusing for everyday users to adopt?",
      solution:
        "We design clear, intuitive interfaces on top of complex protocols so people can interact with your product without needing deep crypto knowledge. The blockchain should be an implementation detail to the user, not a barrier.",
    },
    {
      problem:
        "Does your on-chain product need to connect reliably with off-chain systems and data?",
      solution:
        "We build the backends, APIs, and indexing layers that bridge your contracts to the rest of your product — wallets, databases, notification systems, and third-party services — without coupling things in fragile ways.",
    },
  ],
  solutionsEyebrow: "Tailored blockchain solutions for your business",
  solutionsTitle: "Industry-specific blockchain solutions",
  solutions: [
    {
      title: "DeFi & Finance",
      description:
        "Lending protocols, DEX integrations, staking mechanisms, and treasury management contracts built with the security and auditability standards the DeFi space demands.",
    },
    {
      title: "NFT & Digital Ownership",
      description:
        "NFT minting platforms, marketplaces, and royalty-enforcing contracts with clear, accessible interfaces for creators and collectors who may not be crypto-native.",
    },
    {
      title: "Supply Chain",
      description:
        "On-chain provenance and traceability systems that give supply chain stakeholders transparent, tamper-evident records across suppliers, logistics partners, and end customers.",
    },
    {
      title: "Gaming & Digital Goods",
      description:
        "In-game asset ownership, interoperability contracts, and economy smart contracts that give players genuine ownership without turning gameplay into a wallet-management exercise.",
    },
    {
      title: "Identity & Credentials",
      description:
        "Decentralized identity and verifiable credential systems that let users control their data while organizations verify claims without storing sensitive information centrally.",
    },
    {
      title: "DAOs & Governance",
      description:
        "Governance contract systems, voting mechanisms, and treasury management tooling for organizations that want transparent, on-chain decision-making with accessible participation.",
    },
  ],
  benefitsTitle: "Why teams choose us",
  benefits: [
    {
      title: "Security-first engineering",
      icon: "ShieldCheck",
      description:
        "We treat on-chain code with the care irreversibility demands — tested thoroughly, structured clearly, and prepared for independent audit.",
    },
    {
      title: "Usable by default",
      icon: "Users",
      description:
        "Interfaces designed to make decentralized products approachable to people who aren't already deep in crypto.",
    },
    {
      title: "Full-stack capable",
      icon: "Layers",
      description:
        "On-chain contracts and off-chain backends, APIs, and frontends under one team so nothing falls through the gap between them.",
    },
    {
      title: "Honest guidance",
      icon: "Lightbulb",
      description:
        "We'll tell you when blockchain is genuinely the right tool for your problem — and when a conventional approach serves you better.",
    },
    {
      title: "Chain-agnostic thinking",
      icon: "Network",
      description:
        "We evaluate the right chain for your use case rather than defaulting to one network for everything.",
    },
    {
      title: "Audit-ready output",
      icon: "BadgeCheck",
      description:
        "Contracts structured, commented, and documented so third-party security auditors can work efficiently and findings are actionable.",
    },
  ],
  processEyebrow: "Our blockchain development process",
  processTitle:
    "How we build decentralized products that are secure, usable, and ready for the real world",
  process: [
    {
      label: "Problem fit assessment",
      title: "Confirming blockchain is the right answer before we write a line of code",
      description:
        "We review the use case honestly and map out where on-chain logic genuinely adds value versus where a conventional system would serve you just as well at lower complexity and cost.",
      keySteps: [
        "Use case and business model review",
        "On-chain vs off-chain boundary analysis",
        "Chain selection and trade-off mapping",
      ],
      deliverables: ["Architecture recommendation", "Chain selection rationale"],
    },
    {
      label: "Architecture design",
      title: "Planning the full system before any smart contract is written",
      description:
        "We design the complete system — contracts, off-chain services, data flows, and wallet interactions — so the architecture is understood and agreed before any code is written.",
      keySteps: [
        "Contract architecture and modularity",
        "Off-chain service and indexer design",
        "Upgrade and governance strategy",
      ],
      deliverables: ["System architecture diagram", "Contract specification"],
    },
    {
      label: "Smart contract development",
      title: "Writing careful, well-structured on-chain logic",
      description:
        "We develop contracts with clarity, test coverage, and recognized security patterns as non-negotiable standards — not afterthoughts applied before audit.",
      keySteps: [
        "Contract logic implementation",
        "Unit and integration test suite",
        "Security pattern application",
      ],
      deliverables: ["Contracts codebase", "Test suite", "NatSpec documentation"],
    },
    {
      label: "Off-chain backend and integrations",
      title: "Building the services that connect on-chain to the rest of your product",
      description:
        "We build the APIs, event indexers, and backend services that bridge your contracts to wallets, frontends, databases, and third-party systems reliably.",
      keySteps: [
        "Event indexing and data sync",
        "Wallet connection and signing flows",
        "Third-party API integrations",
      ],
      deliverables: ["Backend services", "API documentation"],
    },
    {
      label: "Frontend and UX",
      title: "Designing interfaces that make on-chain interactions clear and confident",
      description:
        "We build the user-facing product on top of the contracts and backend, with transaction flows, state feedback, and error handling designed to reduce confusion and abandoned interactions.",
      keySteps: [
        "Wallet connection and transaction flows",
        "Loading, confirmation, and error states",
        "Responsive, accessible interface",
      ],
      deliverables: ["Frontend application", "UX specifications"],
    },
    {
      label: "Testing and security hardening",
      title: "Rigorous testing before anything of value is at risk",
      description:
        "We run the full test suite against forked mainnet conditions, simulate edge cases and adversarial inputs, and address everything surfaced before recommending an external audit.",
      keySteps: [
        "Mainnet fork and integration testing",
        "Adversarial and edge-case scenarios",
        "Static analysis and internal review",
      ],
      deliverables: ["Test report", "Internal security review", "Audit-ready package"],
    },
    {
      label: "Deployment and monitoring",
      title: "Going live carefully, with observability in place from the start",
      description:
        "We deploy to testnet first, validate behavior, then move to mainnet with monitoring configured so on-chain events and anomalies are visible immediately.",
      keySteps: [
        "Testnet deployment and validation",
        "Mainnet deployment procedure",
        "Event monitoring and alerting setup",
      ],
      deliverables: ["Deployed contracts", "Monitoring dashboard", "Deployment runbook"],
    },
  ],
  faqs: [
    {
      question: "Do you audit the smart contracts?",
      answer:
        "We engineer and test contracts with security best practices and structure them for independent third-party audits. We recommend a professional audit before going live with any meaningful value at stake — and we prepare the codebase so that process goes smoothly.",
    },
    {
      question: "Which chains do you work with?",
      answer:
        "We evaluate the right chain for your use case based on your requirements — considering security model, ecosystem tooling, transaction costs, and community support — rather than defaulting to one network for everything.",
    },
    {
      question: "Can you make a dApp accessible to users without crypto experience?",
      answer:
        "Yes. We design clear interfaces and transaction flows so people can use the product confidently without understanding the underlying blockchain. The goal is making the technology invisible to the user wherever possible.",
    },
    {
      question: "Is blockchain actually the right choice for what we're building?",
      answer:
        "We'll give you an honest answer early in the engagement. Blockchain solves specific problems well — decentralization, tamper-evidence, programmatic ownership — but where a conventional approach serves you better, we'll recommend that instead.",
    },
  ],
  related: ["web-development", "custom-mvp-development", "technical-workshop"],
};
