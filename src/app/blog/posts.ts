// Central blog catalogue. The first three posts (`external: true`) keep their
// existing hand-built detail pages under /blog/<slug>/. The rest are served by
// the shared /blog/[slug] route, rendering the `body` sections below.
//
// Cover photos are topic-matched, commercial-use stock (LoremFlickr → Flickr
// Creative Commons), self-hosted in public/images/blog/.

export type BlogSection = { heading: string; paragraphs: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  external?: boolean;
  body?: BlogSection[];
};

const img = (slug: string) => `/images/blog/${slug}.jpg`;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "future-of-generative-ai",
    title: "The Future of Generative AI in Business",
    excerpt:
      "Explore how generative AI is reshaping industries and creating new opportunities for innovation.",
    image: img("future-of-generative-ai"),
    category: "Artificial Intelligence",
    author: "Scalixity Team",
    date: "May 15, 2024",
    readTime: "8 min read",
    external: true,
  },
  {
    slug: "blockchain-in-supply-chain",
    title: "Blockchain in Supply Chain: A Game Changer",
    excerpt:
      "Discover how blockchain technology is revolutionizing supply chain management and increasing transparency.",
    image: img("blockchain-in-supply-chain"),
    category: "Blockchain",
    author: "Scalixity Team",
    date: "June 2, 2024",
    readTime: "6 min read",
    external: true,
  },
  {
    slug: "ai-predictive-maintenance",
    title: "AI-Driven Predictive Maintenance in Manufacturing",
    excerpt:
      "Learn how AI is transforming equipment maintenance, reducing downtime, and cutting costs in the manufacturing sector.",
    image: img("ai-predictive-maintenance"),
    category: "Machine Learning",
    author: "Scalixity Team",
    date: "June 20, 2024",
    readTime: "7 min read",
    external: true,
  },
  {
    slug: "llm-rag-architecture",
    title: "RAG Done Right: Architecting Retrieval-Augmented LLM Apps",
    excerpt:
      "A practical look at retrieval-augmented generation — when it beats fine-tuning, and how to keep answers grounded.",
    image: img("llm-rag-architecture"),
    category: "Artificial Intelligence",
    author: "Scalixity Team",
    date: "July 8, 2024",
    readTime: "9 min read",
    body: [
      {
        heading: "Why retrieval beats memorization",
        paragraphs: [
          "Large language models are confident even when they're wrong. Retrieval-augmented generation (RAG) fixes that by grounding every answer in your own documents, so the model reasons over facts it can cite rather than statistics it half-remembers.",
          "For most product teams, RAG is the cheaper, faster path to a useful assistant. You skip expensive fine-tuning cycles and update behavior by changing the knowledge base, not the model.",
        ],
      },
      {
        heading: "Getting the retrieval layer right",
        paragraphs: [
          "Quality lives in chunking, embeddings, and ranking. Chunk too large and you bury the answer; too small and you lose context. We tune chunk size per content type, add metadata filters, and re-rank candidates before they ever reach the model.",
          "A good evaluation harness matters more than a clever prompt. We measure groundedness, answer relevance, and citation accuracy on a fixed test set so every change is a measured improvement, not a vibe.",
        ],
      },
      {
        heading: "Shipping it responsibly",
        paragraphs: [
          "Production RAG needs guardrails: refusal when confidence is low, visible sources, and logging that lets you trace any answer back to its documents. Those details are what turn a demo into something a business can trust.",
        ],
      },
    ],
  },
  {
    slug: "mlops-in-production",
    title: "MLOps in Production: From Notebook to Reliable Service",
    excerpt:
      "The gap between a working model and a dependable service is mostly engineering. Here's how we close it.",
    image: img("mlops-in-production"),
    category: "Engineering",
    author: "Scalixity Team",
    date: "July 22, 2024",
    readTime: "8 min read",
    body: [
      {
        heading: "A model is not a product",
        paragraphs: [
          "A notebook that scores 0.92 on a test set is a starting point, not a deliverable. Turning it into a service means versioning data and models, reproducible training, automated evaluation, and a deployment path you can roll back in seconds.",
        ],
      },
      {
        heading: "The pipeline that keeps it honest",
        paragraphs: [
          "We wire training, validation, and deployment into CI so a model only ships if it beats the incumbent on the metrics that matter. Feature stores keep training and serving consistent, and shadow deployments let us compare candidates on live traffic before promoting them.",
          "Monitoring closes the loop. Drift detection, latency budgets, and quality alerts mean you hear about a regression from your dashboards, not your customers.",
        ],
      },
    ],
  },
  {
    slug: "computer-vision-quality",
    title: "Computer Vision for Automated Quality Control",
    excerpt:
      "How vision models catch defects faster and more consistently than manual inspection — and what it takes to deploy them.",
    image: img("computer-vision-quality"),
    category: "Machine Learning",
    author: "Scalixity Team",
    date: "August 5, 2024",
    readTime: "7 min read",
    body: [
      {
        heading: "Consistency at the speed of the line",
        paragraphs: [
          "Human inspectors are skilled but they tire, and standards drift across shifts. A well-trained vision model applies the same criteria to every unit, around the clock, and flags borderline cases for a person to confirm.",
        ],
      },
      {
        heading: "Data is the hard part",
        paragraphs: [
          "Defects are rare by definition, so naive datasets are wildly imbalanced. We combine targeted collection, augmentation, and synthetic defects to give the model enough signal, then validate against held-out lines to prove it generalizes.",
          "Edge deployment keeps inference fast and private — the model runs next to the camera, and only results leave the factory floor.",
        ],
      },
    ],
  },
  {
    slug: "mvp-in-six-weeks",
    title: "Shipping an Investor-Ready MVP in Six Weeks",
    excerpt:
      "Scope discipline, a senior team, and a few hard 'nos' are how you get a credible product in front of users fast.",
    image: img("mvp-in-six-weeks"),
    category: "Product",
    author: "Scalixity Team",
    date: "August 19, 2024",
    readTime: "6 min read",
    body: [
      {
        heading: "Decide what not to build",
        paragraphs: [
          "A six-week MVP is an exercise in subtraction. We start from the single riskiest assumption and build only what's needed to test it — every other idea goes on a roadmap, not in the sprint.",
        ],
      },
      {
        heading: "Build on rails you won't regret",
        paragraphs: [
          "Speed today shouldn't mean a rewrite next quarter. We lean on a battle-tested stack and a clean architecture so the MVP can grow into the real product instead of being thrown away after the demo.",
        ],
      },
    ],
  },
  {
    slug: "design-systems-at-scale",
    title: "Design Systems That Hold Up at Scale",
    excerpt:
      "A design system is a product, not a sticker sheet. Here's how to build one teams actually adopt.",
    image: img("design-systems-at-scale"),
    category: "Design",
    author: "Scalixity Team",
    date: "September 3, 2024",
    readTime: "7 min read",
    body: [
      {
        heading: "Tokens before components",
        paragraphs: [
          "Durable systems start with tokens — color, type, spacing, and motion expressed as named decisions, not hard-coded values. Components inherit from tokens, so a brand change is a config update rather than a manual sweep.",
        ],
      },
      {
        heading: "Adoption is a feature",
        paragraphs: [
          "The best system is the one engineers reach for by default. We ship it as a versioned package with accessible defaults, clear docs, and Figma parity, so design and code never drift apart.",
        ],
      },
    ],
  },
  {
    slug: "cloud-cost-optimization",
    title: "Cutting Cloud Costs Without Slowing Your Team Down",
    excerpt:
      "Most cloud bills are 20–40% waste. A few structural changes recover it without a painful migration.",
    image: img("cloud-cost-optimization"),
    category: "Engineering",
    author: "Scalixity Team",
    date: "September 17, 2024",
    readTime: "8 min read",
    body: [
      {
        heading: "Make cost visible",
        paragraphs: [
          "You can't optimize what you can't see. Tagging, per-service budgets, and a shared dashboard turn the bill from a monthly surprise into a metric the team owns alongside latency and uptime.",
        ],
      },
      {
        heading: "Right-size, then automate",
        paragraphs: [
          "We start with the boring wins — idle resources, oversized instances, and forgotten environments — then add autoscaling and lifecycle policies so savings stick without anyone babysitting them.",
        ],
      },
    ],
  },
  {
    slug: "api-first-platforms",
    title: "API-First: Building Platforms Other Teams Want to Use",
    excerpt:
      "Treating your API as the product — versioned, documented, and consistent — pays off long after launch.",
    image: img("api-first-platforms"),
    category: "Engineering",
    author: "Scalixity Team",
    date: "October 1, 2024",
    readTime: "7 min read",
    body: [
      {
        heading: "Design the contract first",
        paragraphs: [
          "API-first means the schema is agreed before a line of implementation. Frontend, backend, and partners build against the same contract in parallel, and the spec doubles as living documentation.",
        ],
      },
      {
        heading: "Consistency compounds",
        paragraphs: [
          "Predictable naming, pagination, and error shapes make an API feel trustworthy. We codify those conventions and lint against them, so the tenth endpoint behaves exactly like the first.",
        ],
      },
    ],
  },
  {
    slug: "modern-data-pipelines",
    title: "Modern Data Pipelines for AI-Ready Products",
    excerpt:
      "Clean, well-modeled data is the quiet prerequisite for everything AI. Here's how we lay the plumbing.",
    image: img("modern-data-pipelines"),
    category: "Data",
    author: "Scalixity Team",
    date: "October 15, 2024",
    readTime: "9 min read",
    body: [
      {
        heading: "From raw events to trusted tables",
        paragraphs: [
          "AI features are only as good as the data behind them. We build pipelines that ingest, validate, and model raw events into trusted tables, with tests that fail loudly when an upstream change breaks an assumption.",
        ],
      },
      {
        heading: "Built for both analytics and ML",
        paragraphs: [
          "The same well-modeled layer powers dashboards and model training. That shared foundation means your metrics and your models always agree on what a 'customer' or a 'conversion' actually is.",
        ],
      },
    ],
  },
  {
    slug: "ai-agents-and-workflows",
    title: "From Chatbots to Agents: Automating Real Workflows",
    excerpt:
      "Agents earn their keep when they take action, not just answer questions. The trick is scoping them tightly.",
    image: img("ai-agents-and-workflows"),
    category: "Artificial Intelligence",
    author: "Scalixity Team",
    date: "November 5, 2024",
    readTime: "8 min read",
    body: [
      {
        heading: "Tools turn talk into action",
        paragraphs: [
          "An agent is a model plus a set of tools and a goal. Give it well-defined tools — search, lookups, a booking call — and clear boundaries, and it can complete multi-step tasks instead of just describing them.",
        ],
      },
      {
        heading: "Keep a human in the loop",
        paragraphs: [
          "For anything consequential, we add confirmation steps, audit logs, and hard limits on what an agent can do unattended. Autonomy is a dial, not a switch — we turn it up only as trust is earned.",
        ],
      },
    ],
  },
  {
    slug: "fintech-compliance-ux",
    title: "Designing Fintech UX That Stays Compliant",
    excerpt:
      "Compliance and good UX aren't opposites. Done well, the guardrails are invisible to honest users.",
    image: img("fintech-compliance-ux"),
    category: "Industry",
    author: "Scalixity Team",
    date: "November 19, 2024",
    readTime: "7 min read",
    body: [
      {
        heading: "Make KYC feel effortless",
        paragraphs: [
          "Onboarding is where fintech products lose the most users. Progressive KYC, smart defaults, and clear copy let people prove who they are without abandoning the flow — while still satisfying the regulator.",
        ],
      },
      {
        heading: "Design the audit trail in",
        paragraphs: [
          "Consent, disclosures, and decisions all need to be captured. We bake that record-keeping into the interaction design so it's complete by construction, not bolted on before launch.",
        ],
      },
    ],
  },
  {
    slug: "healthcare-ai-and-privacy",
    title: "Healthcare AI Without Compromising Privacy",
    excerpt:
      "Building clinical tools that are useful and trustworthy means treating privacy as a first-class requirement.",
    image: img("healthcare-ai-and-privacy"),
    category: "Industry",
    author: "Scalixity Team",
    date: "December 3, 2024",
    readTime: "8 min read",
    body: [
      {
        heading: "Privacy by design",
        paragraphs: [
          "In healthcare, data minimization isn't optional. We process the least data needed, keep sensitive inference on-prem or at the edge where possible, and encrypt everything in transit and at rest.",
        ],
      },
      {
        heading: "Earning clinician trust",
        paragraphs: [
          "Clinicians adopt tools they can interrogate. Explainable outputs, clear confidence, and a visible path to the underlying evidence turn an AI suggestion into a second opinion worth considering.",
        ],
      },
    ],
  },
  {
    slug: "edge-ai-on-iot",
    title: "Edge AI: Running Models Where the Data Lives",
    excerpt:
      "Pushing inference to the device cuts latency, protects data, and keeps products working offline.",
    image: img("edge-ai-on-iot"),
    category: "Engineering",
    author: "Scalixity Team",
    date: "December 17, 2024",
    readTime: "6 min read",
    body: [
      {
        heading: "Why the edge wins",
        paragraphs: [
          "When a model runs on the device, decisions happen in milliseconds, raw data never leaves the hardware, and the product keeps working when the network doesn't. For many IoT use cases that's the difference between a feature and a gimmick.",
        ],
      },
      {
        heading: "Shrinking models to fit",
        paragraphs: [
          "Quantization, pruning, and distillation let us fit capable models onto modest hardware. We trade a sliver of accuracy for a large gain in speed and cost, and validate that the trade-off holds on the target device.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug && !p.external);
}
