import type { QA } from "../landing/_components/FAQ";

// Content for the dynamic /services/[slug] template. One static entry per
// service listed in the PrimaryNav "Services" mega-menu. Mirrors the
// blog/posts.ts pattern: a typed array + lookup helpers, consumed by a
// server component with generateStaticParams.
//
// Brand rule: honest, Scalixity-specific copy only — no fabricated metrics,
// client names, testimonials, or awards. Claims stay qualitative.

export type ServiceChallenge = { problem: string; solution: string };
export type ServiceCard = { title: string; description: string };

export type ServiceContent = {
  slug: string;
  /** One of: Design | Development | Research | Validate | Build | Scale. */
  category: string;
  /** Page H1 / nav label, e.g. "Web app design". */
  title: string;
  /** 1–2 sentence intro shown under the hero title. */
  heroLead: string;
  /** <meta name="description"> for generateMetadata. */
  metaDescription: string;
  /** ~3 honest problem → how-we-approach-it pairs. */
  challenges: ServiceChallenge[];
  /** Heading above the deliverables grid. */
  deliverTitle: string;
  /** ~5 capability cards. */
  deliverables: ServiceCard[];
  /** Heading above the benefits grid. */
  benefitsTitle: string;
  /** ~4 differentiators. */
  benefits: ServiceCard[];
  /** ~4 honest Q&A reusing the FAQ component's QA shape. */
  faqs: QA[];
  /** 2–3 related service slugs for cross-navigation. */
  related: string[];
};

export const SERVICES_CONTENT: ServiceContent[] = [
  // ----------------------------------------------------------------- Design
  {
    slug: "web-app-design",
    category: "Design",
    title: "Web app design",
    heroLead:
      "We design intuitive, user-centric web apps that simplify workflows, improve usability, and stay easy to build — so your product is both functional and future-proof.",
    metaDescription:
      "Web app design services by Scalixity — user-centric, development-ready interfaces for SaaS and complex web products.",
    challenges: [
      {
        problem:
          "Is your web app frustrating users with confusing navigation and low engagement?",
        solution:
          "We map real user journeys, simplify information architecture, and apply clear UI patterns and accessibility best practices so people can find what they need and stay engaged.",
      },
      {
        problem:
          "Are clunky workflows slowing your team down and creating errors?",
        solution:
          "We streamline interactions, reduce friction step by step, and design for the edge cases — so common tasks get faster and mistakes get rarer.",
      },
      {
        problem:
          "Do designs keep getting reinterpreted or reworked during development?",
        solution:
          "We design with implementation in mind: reusable components, defined states, and clean specs that hand off cleanly to engineering.",
      },
    ],
    deliverTitle: "What we deliver",
    deliverables: [
      {
        title: "UX research & flows",
        description:
          "User journeys, navigation models, and wireframes grounded in how people actually use your product.",
      },
      {
        title: "Interface design",
        description:
          "Clean, consistent screens for every state and breakpoint, built around clarity and usability.",
      },
      {
        title: "Design systems",
        description:
          "Reusable components, tokens, and patterns so the product stays coherent as it grows.",
      },
      {
        title: "Prototypes",
        description:
          "Clickable prototypes to validate flows with users and stakeholders before code is written.",
      },
      {
        title: "Developer handoff",
        description:
          "Specced Figma files, component docs, and ongoing support through build and QA.",
      },
    ],
    benefitsTitle: "Why teams choose us",
    benefits: [
      {
        title: "User-centric approach",
        description:
          "We design from real research and validate with testing, not guesswork.",
      },
      {
        title: "Built for development",
        description:
          "Scalable, dev-ready designs that follow UX best practices and reduce rework.",
      },
      {
        title: "Close collaboration",
        description:
          "We work inside your tools and workflow with clear, honest communication.",
      },
      {
        title: "Design that lasts",
        description:
          "System-based interfaces that stay usable and consistent as your product evolves.",
      },
    ],
    faqs: [
      {
        question: "How do you approach designing a web app?",
        answer:
          "We start with your goals, users, and technical context, then move through research, flows, wireframes, visual design, and prototyping — validating along the way so the final design is both usable and ready to build.",
      },
      {
        question: "Do you design with our developers in mind?",
        answer:
          "Yes. Every screen, state, and component is built for clean implementation — reusable elements, clear specs, and design tokens — and we stay available through build and QA.",
      },
      {
        question: "Can you work with our existing design system?",
        answer:
          "Absolutely. We can extend an existing system or build one from scratch, reusing what already works so the product stays consistent.",
      },
      {
        question: "How quickly can we get started?",
        answer:
          "A short discovery usually takes a few days, with early flows and concepts following soon after. Exact timelines depend on scope, which we scope together up front.",
      },
    ],
    related: ["mobile-app-design", "web-development", "design-prototype"],
  },
  {
    slug: "mobile-app-design",
    category: "Design",
    title: "Mobile app design",
    heroLead:
      "We design mobile experiences built for touch, smaller screens, and real-world use — intuitive, fast, and optimized for engagement and retention.",
    metaDescription:
      "Mobile app design services by Scalixity — touch-first, accessible iOS and Android interfaces designed for engagement.",
    challenges: [
      {
        problem:
          "Does your app feel awkward or cluttered on smaller screens?",
        solution:
          "We design touch-first, with clear hierarchy, generous targets, and patterns native to iOS and Android so the app feels natural to use.",
      },
      {
        problem: "Are users dropping off before they reach the core value?",
        solution:
          "We streamline onboarding and key flows, removing friction so people reach the moment that matters faster.",
      },
      {
        problem: "Is the experience inconsistent across devices and states?",
        solution:
          "We design a component system covering every state and screen size, keeping the experience coherent everywhere.",
      },
    ],
    deliverTitle: "What we deliver",
    deliverables: [
      {
        title: "Platform-aware UX",
        description:
          "Flows and navigation that respect iOS and Android conventions and gestures.",
      },
      {
        title: "UI design",
        description:
          "Polished screens for every state, optimized for touch and varied screen sizes.",
      },
      {
        title: "Onboarding flows",
        description:
          "First-run experiences designed to get users to value quickly.",
      },
      {
        title: "Design system",
        description:
          "Reusable components and tokens for consistency across the app.",
      },
      {
        title: "Prototypes & handoff",
        description:
          "Interactive prototypes plus dev-ready specs and documentation.",
      },
    ],
    benefitsTitle: "Why teams choose us",
    benefits: [
      {
        title: "Touch-first thinking",
        description:
          "Interfaces designed for thumbs and real contexts, not just desktop scaled down.",
      },
      {
        title: "Engagement-focused",
        description:
          "We design for retention — clear value, fast flows, fewer drop-offs.",
      },
      {
        title: "Build-ready output",
        description:
          "Specs and components engineered for clean native or cross-platform handoff.",
      },
      {
        title: "Validated decisions",
        description:
          "Prototypes tested with users before development de-risk the build.",
      },
    ],
    faqs: [
      {
        question: "Do you design for both iOS and Android?",
        answer:
          "Yes. We design for each platform's conventions while keeping a coherent product identity, whether the app is native or cross-platform.",
      },
      {
        question: "How is mobile design different from web design?",
        answer:
          "Mobile design centers on touch, smaller screens, and on-the-go use — larger targets, simpler navigation, and lightweight, responsive interactions tailored to device contexts.",
      },
      {
        question: "Can you also handle development?",
        answer:
          "We can. Our mobile app development team can take the designs straight into a build, or we can hand off cleanly to your engineers.",
      },
      {
        question: "Will you test the design before we build?",
        answer:
          "Yes — we validate key flows with interactive prototypes and refine based on feedback before development starts.",
      },
    ],
    related: ["mobile-app-development", "web-app-design", "design-prototype"],
  },
  {
    slug: "website-design",
    category: "Design",
    title: "Website design",
    heroLead:
      "We design marketing and product websites that communicate clearly, convert visitors, and reflect your brand — fast, responsive, and easy to maintain.",
    metaDescription:
      "Website design services by Scalixity — conversion-focused, responsive, on-brand websites that are easy to build and maintain.",
    challenges: [
      {
        problem: "Does your site fail to communicate what you actually do?",
        solution:
          "We structure content around your story and your audience, with clear messaging hierarchy that gets the point across quickly.",
      },
      {
        problem: "Are visitors leaving without taking action?",
        solution:
          "We design intentional journeys toward your key goals — sign-ups, demos, contact — with clear calls to action throughout.",
      },
      {
        problem: "Is the site slow, dated, or hard to update?",
        solution:
          "We design lightweight, responsive layouts on a flexible component system that's straightforward to build and maintain.",
      },
    ],
    deliverTitle: "What we deliver",
    deliverables: [
      {
        title: "Content structure",
        description:
          "Sitemap, messaging hierarchy, and page structure that lead visitors to action.",
      },
      {
        title: "Visual design",
        description:
          "On-brand, responsive page designs for every key breakpoint.",
      },
      {
        title: "Conversion design",
        description:
          "Clear CTAs and journeys mapped to your business goals.",
      },
      {
        title: "Reusable sections",
        description:
          "A modular section library so the site can grow without redesigns.",
      },
      {
        title: "Build-ready handoff",
        description:
          "Specced designs ready for development, with support through launch.",
      },
    ],
    benefitsTitle: "Why teams choose us",
    benefits: [
      {
        title: "Clarity first",
        description:
          "Messaging and structure that make your value obvious in seconds.",
      },
      {
        title: "Built to convert",
        description:
          "Intentional journeys designed around the actions that matter to you.",
      },
      {
        title: "Responsive by default",
        description:
          "Designs that look sharp and work well on every screen.",
      },
      {
        title: "Easy to maintain",
        description:
          "A modular system your team can extend without starting over.",
      },
    ],
    faqs: [
      {
        question: "What's the difference between website design and a web app design?",
        answer:
          "A website is primarily about communication and conversion — telling your story and driving action. A web app is a product with complex, interactive workflows. We do both, and scope the right approach with you.",
      },
      {
        question: "Can you match our existing brand?",
        answer:
          "Yes. We design to your existing brand guidelines, or we can develop the brand foundations alongside the site.",
      },
      {
        question: "Do you build the website too?",
        answer:
          "We can take the design through to a custom or no-code build, or hand off clean, specced designs to your team.",
      },
      {
        question: "Will the site be easy for us to update?",
        answer:
          "We design with a reusable section system so common updates and new pages are straightforward, whether on a CMS or a custom stack.",
      },
    ],
    related: ["website-development", "website-redesign", "branding"],
  },
  {
    slug: "website-redesign",
    category: "Design",
    title: "Website redesign",
    heroLead:
      "We modernize dated websites with scalable, conversion-driven UX and UI — improving clarity, performance, and results without losing what already works.",
    metaDescription:
      "Website redesign services by Scalixity — modernize your site with conversion-focused UX, UI, and a maintainable design system.",
    challenges: [
      {
        problem: "Does your current site look dated or off-brand?",
        solution:
          "We refresh the visual language and structure while keeping the equity you've built, so the redesign feels like an upgrade, not a reset.",
      },
      {
        problem: "Has the site stopped converting as well as it used to?",
        solution:
          "We audit the current experience, find where visitors drop off, and redesign the journeys around your goals.",
      },
      {
        problem: "Is the site hard to maintain or extend?",
        solution:
          "We rebuild on a modular component system so new pages and updates don't require a redesign every time.",
      },
    ],
    deliverTitle: "What we deliver",
    deliverables: [
      {
        title: "Experience audit",
        description:
          "A review of the current site to surface what's working and what's costing you.",
      },
      {
        title: "Restructured IA",
        description:
          "Clearer sitemap and navigation aligned with how visitors actually browse.",
      },
      {
        title: "Refreshed UI",
        description:
          "A modern, on-brand visual layer applied consistently across the site.",
      },
      {
        title: "Conversion improvements",
        description:
          "Reworked journeys and CTAs focused on your key outcomes.",
      },
      {
        title: "Maintainable system",
        description:
          "A reusable section library that makes future changes easy.",
      },
    ],
    benefitsTitle: "Why teams choose us",
    benefits: [
      {
        title: "Evidence-led",
        description:
          "We redesign based on an audit of the real experience, not assumptions.",
      },
      {
        title: "Keep what works",
        description:
          "We protect your existing equity and SEO while modernizing the rest.",
      },
      {
        title: "Conversion-focused",
        description:
          "Every change ties back to clearer journeys and better outcomes.",
      },
      {
        title: "Future-proof",
        description:
          "A scalable system so the site keeps improving after launch.",
      },
    ],
    faqs: [
      {
        question: "Will a redesign hurt our SEO?",
        answer:
          "Handled well, a redesign protects and often improves SEO. We plan structure, redirects, and content carefully so you keep the equity you've built.",
      },
      {
        question: "Do we have to redo everything at once?",
        answer:
          "No. We can phase the redesign — starting with the highest-impact pages — so you see results without a risky big-bang launch.",
      },
      {
        question: "How do you decide what to change?",
        answer:
          "We start with an audit of the current experience and your goals, then prioritize the changes most likely to move your metrics.",
      },
      {
        question: "Can you also rebuild the site?",
        answer:
          "Yes — our development teams can take the redesign through to a modern, maintainable build.",
      },
    ],
    related: ["website-design", "product-redesign", "ux-audit"],
  },
  {
    slug: "branding",
    category: "Design",
    title: "Branding",
    heroLead:
      "We shape clear, consistent brand foundations — identity, voice, and a usable system — that make your product recognizable across every touchpoint.",
    metaDescription:
      "Branding services by Scalixity — identity, voice, and a practical brand system that stays consistent across product and marketing.",
    challenges: [
      {
        problem: "Does your brand feel inconsistent across product and marketing?",
        solution:
          "We define a clear identity and system so everything from the app to the website looks and sounds like one company.",
      },
      {
        problem: "Is it hard to explain what makes you different?",
        solution:
          "We help sharpen your positioning and voice so the brand communicates your value clearly and consistently.",
      },
      {
        problem: "Does your team lack a usable brand toolkit?",
        solution:
          "We deliver practical guidelines and assets your team can actually apply day to day, not just a static logo file.",
      },
    ],
    deliverTitle: "What we deliver",
    deliverables: [
      {
        title: "Brand foundations",
        description:
          "Positioning, personality, and the core ideas your brand stands on.",
      },
      {
        title: "Visual identity",
        description:
          "Logo, color, type, and visual language designed for digital products.",
      },
      {
        title: "Brand voice",
        description:
          "Tone and messaging guidance so the brand sounds consistent everywhere.",
      },
      {
        title: "Brand system",
        description:
          "Usable guidelines and components that connect to your product design.",
      },
      {
        title: "Asset toolkit",
        description:
          "Ready-to-use assets and templates for product and marketing teams.",
      },
    ],
    benefitsTitle: "Why teams choose us",
    benefits: [
      {
        title: "Product-aware",
        description:
          "We build brand systems that work in real interfaces, not just on a deck.",
      },
      {
        title: "Consistent everywhere",
        description:
          "One coherent identity across app, website, and marketing.",
      },
      {
        title: "Practical guidelines",
        description:
          "Toolkits your team can actually use without us in the room.",
      },
      {
        title: "Distinctive, not trendy",
        description:
          "Identity designed to stay relevant rather than chase fads.",
      },
    ],
    faqs: [
      {
        question: "Do you do full rebrands or just refinements?",
        answer:
          "Both. We can establish a brand from scratch, evolve an existing one, or tighten the system so it stays consistent as you grow.",
      },
      {
        question: "How does branding connect to our product design?",
        answer:
          "We design brand systems with the product in mind, so the identity flows naturally into your app and website rather than fighting them.",
      },
      {
        question: "What do we get at the end?",
        answer:
          "Practical brand foundations, visual identity, voice guidance, and a usable toolkit your team can apply across every touchpoint.",
      },
      {
        question: "Can branding and website design happen together?",
        answer:
          "Yes — running them together keeps the brand and the site perfectly aligned and often saves time overall.",
      },
    ],
    related: ["website-design", "web-app-design", "product-redesign"],
  },

  // ------------------------------------------------------------ Development
  {
    slug: "web-development",
    category: "Development",
    title: "Web development",
    heroLead:
      "We build custom web applications — from complex platforms to dashboards and scalable SaaS — engineered for performance, security, and growth.",
    metaDescription:
      "Web development services by Scalixity — custom, scalable web applications and SaaS platforms built for performance and growth.",
    challenges: [
      {
        problem: "Are off-the-shelf tools holding your product back?",
        solution:
          "We build custom web applications tailored to your workflows, so the product fits your business instead of the other way around.",
      },
      {
        problem: "Does your platform struggle as usage grows?",
        solution:
          "We design scalable architectures with the right data, caching, and infrastructure choices so the app stays fast under load.",
      },
      {
        problem: "Is design intent getting lost in the build?",
        solution:
          "We work closely with design, treating components and states as a shared system so the result matches the intent.",
      },
    ],
    deliverTitle: "What we deliver",
    deliverables: [
      {
        title: "Custom web apps",
        description:
          "Tailored platforms, dashboards, and SaaS products built around your needs.",
      },
      {
        title: "Scalable architecture",
        description:
          "Foundations designed to handle growth in users, data, and features.",
      },
      {
        title: "API & integrations",
        description:
          "Robust APIs and third-party integrations that connect your stack.",
      },
      {
        title: "Performance & security",
        description:
          "Fast, secure builds following modern engineering best practices.",
      },
      {
        title: "Maintainable code",
        description:
          "Clean, documented codebases your team can confidently build on.",
      },
    ],
    benefitsTitle: "Why teams choose us",
    benefits: [
      {
        title: "Senior engineering",
        description:
          "Experienced engineers who care about architecture, not just shipping.",
      },
      {
        title: "Design-aligned",
        description:
          "We build faithfully to design and collaborate closely throughout.",
      },
      {
        title: "Scalable from day one",
        description:
          "Architectures that grow with your product instead of being rebuilt later.",
      },
      {
        title: "Transparent delivery",
        description:
          "Clear scope, estimates, and progress you can follow in your tools.",
      },
    ],
    faqs: [
      {
        question: "What kinds of web applications do you build?",
        answer:
          "From SaaS platforms and internal tools to complex dashboards and customer portals — custom web apps designed around your specific workflows.",
      },
      {
        question: "What technologies do you use?",
        answer:
          "We choose the stack to fit the project, favoring modern, well-supported frameworks and infrastructure that keep the product fast, secure, and maintainable.",
      },
      {
        question: "Can you take over an existing codebase?",
        answer:
          "Yes. We can extend, stabilize, or modernize an existing application as well as build new ones from scratch.",
      },
      {
        question: "Do you handle design too?",
        answer:
          "We can — our design teams cover web app and website design, or we'll build to designs you already have.",
      },
    ],
    related: ["web-app-design", "custom-mvp-development", "website-development"],
  },
  {
    slug: "mobile-app-development",
    category: "Development",
    title: "Mobile app development",
    heroLead:
      "We build reliable, performant mobile apps for iOS and Android — native or cross-platform — that feel great to use and are built to scale.",
    metaDescription:
      "Mobile app development services by Scalixity — native and cross-platform iOS and Android apps built for performance and scale.",
    challenges: [
      {
        problem: "Do you need to ship on iOS and Android without doubling the work?",
        solution:
          "We help you choose between native and cross-platform based on your goals, then build efficiently for both where it makes sense.",
      },
      {
        problem: "Is your app slow, unstable, or draining batteries?",
        solution:
          "We focus on performance, reliability, and resource use so the app stays smooth on real devices.",
      },
      {
        problem: "Does the app need to work with your existing systems?",
        solution:
          "We build robust integrations with your APIs and backends so the mobile app fits cleanly into your product.",
      },
    ],
    deliverTitle: "What we deliver",
    deliverables: [
      {
        title: "Native & cross-platform",
        description:
          "iOS and Android apps using the right approach for your goals and budget.",
      },
      {
        title: "Performance-tuned builds",
        description:
          "Apps optimized for speed, stability, and efficient resource use.",
      },
      {
        title: "Backend & APIs",
        description:
          "Reliable APIs and integrations connecting the app to your systems.",
      },
      {
        title: "Release support",
        description:
          "Help with store submission, QA, and post-launch iterations.",
      },
      {
        title: "Maintainable code",
        description:
          "Clean, documented codebases ready for ongoing development.",
      },
    ],
    benefitsTitle: "Why teams choose us",
    benefits: [
      {
        title: "Right-fit approach",
        description:
          "We pick native or cross-platform based on your needs, not a default.",
      },
      {
        title: "Quality-focused",
        description:
          "Performance, reliability, and a smooth experience on real devices.",
      },
      {
        title: "End to end",
        description:
          "Design, build, and release support under one roof when you need it.",
      },
      {
        title: "Transparent delivery",
        description:
          "Clear scope and visible progress throughout the build.",
      },
    ],
    faqs: [
      {
        question: "Should we build native or cross-platform?",
        answer:
          "It depends on your performance needs, timeline, and budget. We help you weigh the trade-offs and choose the approach that fits — sometimes native, sometimes a shared cross-platform codebase.",
      },
      {
        question: "Can you take our designs and build the app?",
        answer:
          "Yes. We can build from your designs or provide mobile app design as part of the engagement.",
      },
      {
        question: "Do you help with app store release?",
        answer:
          "We support QA, store submission, and the iterations that follow launch.",
      },
      {
        question: "Can you maintain the app after launch?",
        answer:
          "Yes — we can stay on for ongoing development, or hand over a clean, documented codebase to your team.",
      },
    ],
    related: ["mobile-app-design", "web-development", "dedicated-team"],
  },
  {
    slug: "website-development",
    category: "Development",
    title: "Website development",
    heroLead:
      "We build fast, responsive, maintainable websites — from marketing sites to content-driven platforms — that are easy to update and ready to grow.",
    metaDescription:
      "Website development services by Scalixity — fast, responsive, maintainable websites and content platforms built to scale.",
    challenges: [
      {
        problem: "Is your website slow or unreliable?",
        solution:
          "We build lightweight, optimized sites with performance and reliability as first-class concerns.",
      },
      {
        problem: "Is it painful for your team to make updates?",
        solution:
          "We set up the right CMS or content structure so non-developers can update content confidently.",
      },
      {
        problem: "Does the site need to scale with more pages and traffic?",
        solution:
          "We build on a modular foundation and solid infrastructure so the site grows without breaking.",
      },
    ],
    deliverTitle: "What we deliver",
    deliverables: [
      {
        title: "Custom builds",
        description:
          "Marketing sites, content platforms, and landing systems tailored to you.",
      },
      {
        title: "CMS integration",
        description:
          "A content setup that lets your team publish and update with ease.",
      },
      {
        title: "Performance & SEO",
        description:
          "Fast-loading, accessible, search-friendly implementations.",
      },
      {
        title: "Responsive front-end",
        description:
          "Pixel-faithful builds that work across every device and breakpoint.",
      },
      {
        title: "Launch & support",
        description:
          "Deployment, QA, and post-launch support to keep the site healthy.",
      },
    ],
    benefitsTitle: "Why teams choose us",
    benefits: [
      {
        title: "Fast & accessible",
        description:
          "Sites built for speed, accessibility, and search from the start.",
      },
      {
        title: "Editor-friendly",
        description:
          "Content setups your team can manage without engineering help.",
      },
      {
        title: "Faithful to design",
        description:
          "Clean front-end builds that match the design exactly.",
      },
      {
        title: "Built to grow",
        description:
          "Modular foundations that scale with content and traffic.",
      },
    ],
    faqs: [
      {
        question: "Which CMS or stack do you use?",
        answer:
          "We choose based on your team and content needs — from headless CMS setups to custom or no-code builds — favoring tools that keep the site fast and easy to maintain.",
      },
      {
        question: "Can you build from our designs?",
        answer:
          "Yes. We build faithfully from your designs, or provide website design as part of the project.",
      },
      {
        question: "Will the site be SEO-friendly?",
        answer:
          "Yes — performance, accessibility, and clean, search-friendly markup are built in.",
      },
      {
        question: "Can our team update content ourselves?",
        answer:
          "We set up a content structure so non-technical team members can publish and edit confidently.",
      },
    ],
    related: ["website-design", "no-code-development", "web-development"],
  },
  {
    slug: "no-code-development",
    category: "Development",
    title: "No-code development",
    heroLead:
      "We build production-ready products on no-code and low-code platforms — fast to launch, easy to change, and a smart fit for MVPs and internal tools.",
    metaDescription:
      "No-code development services by Scalixity — launch MVPs, internal tools, and websites fast on no-code and low-code platforms.",
    challenges: [
      {
        problem: "Do you need to launch quickly without a big engineering build?",
        solution:
          "We use proven no-code and low-code platforms to get a working product live faster and at lower cost.",
      },
      {
        problem: "Are no-code tools being pushed beyond their limits?",
        solution:
          "We architect no-code solutions properly — and know when to add custom code or move to a full build as you scale.",
      },
      {
        problem: "Do you want to change things without a developer every time?",
        solution:
          "We set up your no-code product so your team can update and iterate independently after launch.",
      },
    ],
    deliverTitle: "What we deliver",
    deliverables: [
      {
        title: "No-code MVPs",
        description:
          "Working products built fast to test ideas and reach the market sooner.",
      },
      {
        title: "Internal tools",
        description:
          "Dashboards, admin panels, and workflow tools without heavy engineering.",
      },
      {
        title: "Automations",
        description:
          "Connected workflows that remove manual, repetitive work.",
      },
      {
        title: "Platform selection",
        description:
          "Guidance on the right tools for your use case, budget, and roadmap.",
      },
      {
        title: "Handover & training",
        description:
          "Setup and training so your team can run and extend it confidently.",
      },
    ],
    benefitsTitle: "Why teams choose us",
    benefits: [
      {
        title: "Speed to launch",
        description:
          "Get a real product in front of users faster and for less.",
      },
      {
        title: "Right tool, right job",
        description:
          "We know where no-code shines and where custom code is worth it.",
      },
      {
        title: "Easy to iterate",
        description:
          "Products your team can change without waiting on engineering.",
      },
      {
        title: "A path to scale",
        description:
          "Clear options to extend with custom code as you grow.",
      },
    ],
    faqs: [
      {
        question: "Is no-code suitable for a real product?",
        answer:
          "For many MVPs, internal tools, and websites, yes — modern no-code platforms are capable and reliable. We help you judge where it fits and where a custom build serves you better.",
      },
      {
        question: "What happens when we outgrow no-code?",
        answer:
          "We plan for it. We can extend with custom code, integrate APIs, or migrate to a full build when the product is ready to scale.",
      },
      {
        question: "Can our team manage it afterwards?",
        answer:
          "Yes. We hand over with training so your team can update content, flows, and logic without us.",
      },
      {
        question: "Which platforms do you work with?",
        answer:
          "We select platforms based on your needs, choosing established, well-supported no-code and low-code tools for the job.",
      },
    ],
    related: ["rapid-mvp-development", "website-development", "custom-mvp-development"],
  },
  {
    slug: "blockchain-development",
    category: "Development",
    title: "Blockchain development",
    heroLead:
      "We build decentralized applications and smart contracts with security and clarity at the core — from concept to a usable, audited-ready product.",
    metaDescription:
      "Blockchain development services by Scalixity — secure smart contracts and decentralized apps with clear, usable interfaces.",
    challenges: [
      {
        problem: "Is on-chain logic risky to get right?",
        solution:
          "We write smart contracts carefully, with testing and security best practices, and prepare them for third-party audits.",
      },
      {
        problem: "Are decentralized apps confusing for everyday users?",
        solution:
          "We design clear, intuitive interfaces on top of complex protocols so people can use them without deep crypto knowledge.",
      },
      {
        problem: "Does on-chain need to connect with off-chain systems?",
        solution:
          "We build the integrations and backends that bridge your contracts to apps, data, and existing infrastructure.",
      },
    ],
    deliverTitle: "What we deliver",
    deliverables: [
      {
        title: "Smart contracts",
        description:
          "Carefully written, tested contracts prepared for security audits.",
      },
      {
        title: "dApps",
        description:
          "Decentralized apps with clear, usable interfaces over complex protocols.",
      },
      {
        title: "Wallet & chain integration",
        description:
          "Connections to wallets, chains, and on-chain data sources.",
      },
      {
        title: "Backends & APIs",
        description:
          "Off-chain services that bridge contracts to your wider product.",
      },
      {
        title: "Testing & hardening",
        description:
          "Thorough testing and security-minded engineering throughout.",
      },
    ],
    benefitsTitle: "Why teams choose us",
    benefits: [
      {
        title: "Security-minded",
        description:
          "We treat on-chain code with the care it requires and prepare for audits.",
      },
      {
        title: "Usable by default",
        description:
          "Interfaces that make decentralized products approachable.",
      },
      {
        title: "Full-stack capable",
        description:
          "On-chain and off-chain engineering under one team.",
      },
      {
        title: "Honest guidance",
        description:
          "We'll tell you when blockchain is the right tool — and when it isn't.",
      },
    ],
    faqs: [
      {
        question: "Do you audit the smart contracts?",
        answer:
          "We engineer and test contracts with security best practices and prepare them for independent third-party audits, which we recommend before going live with value at stake.",
      },
      {
        question: "Which chains do you work with?",
        answer:
          "We select the chain to fit your use case, working with established networks and the tooling around them.",
      },
      {
        question: "Can you make a dApp easy for non-crypto users?",
        answer:
          "Yes. We design clear interfaces and flows so people can use the product without deep blockchain knowledge.",
      },
      {
        question: "Is blockchain the right fit for our idea?",
        answer:
          "We'll give you an honest answer. Blockchain is powerful for specific problems; where a conventional approach serves you better, we'll say so.",
      },
    ],
    related: ["web-development", "custom-mvp-development", "technical-workshop"],
  },

  // --------------------------------------------------------------- Research
  {
    slug: "ux-audit",
    category: "Research",
    title: "UX audit",
    heroLead:
      "We review your product against real user needs and best practice, then hand you a prioritized, practical plan to fix what's costing you engagement and conversions.",
    metaDescription:
      "UX audit services by Scalixity — an expert review of your product with prioritized, actionable recommendations to improve usability and conversion.",
    challenges: [
      {
        problem: "Do you know something is off but not exactly what?",
        solution:
          "We evaluate the experience systematically — flows, usability, and friction — to pinpoint the specific issues, not just the symptoms.",
      },
      {
        problem: "Are you losing users at key moments?",
        solution:
          "We trace where and why people drop off, and identify the highest-impact fixes for retention and conversion.",
      },
      {
        problem: "Is your team unsure what to fix first?",
        solution:
          "We deliver a prioritized roadmap so you can act on the changes that matter most, in the right order.",
      },
    ],
    deliverTitle: "What we deliver",
    deliverables: [
      {
        title: "Heuristic review",
        description:
          "An expert evaluation of usability, flows, and interface quality.",
      },
      {
        title: "Friction analysis",
        description:
          "Where users struggle or drop off, and why it happens.",
      },
      {
        title: "Accessibility check",
        description:
          "A review against accessibility best practices and common gaps.",
      },
      {
        title: "Prioritized findings",
        description:
          "Issues ranked by impact and effort so you know what to tackle first.",
      },
      {
        title: "Actionable roadmap",
        description:
          "Clear recommendations your team can implement right away.",
      },
    ],
    benefitsTitle: "Why teams choose us",
    benefits: [
      {
        title: "Practical, not theoretical",
        description:
          "Findings you can act on, tied to real product outcomes.",
      },
      {
        title: "Prioritized by impact",
        description:
          "We focus your effort on the changes most likely to move metrics.",
      },
      {
        title: "Experienced eyes",
        description:
          "Senior designers who've seen these patterns across many products.",
      },
      {
        title: "A clear next step",
        description:
          "A roadmap that turns the audit into momentum.",
      },
    ],
    faqs: [
      {
        question: "What do we get from a UX audit?",
        answer:
          "A clear, prioritized set of findings and recommendations — what's hurting the experience, why, and what to fix first — that your team can act on immediately.",
      },
      {
        question: "Do you use real user data?",
        answer:
          "Where it's available, we factor in analytics and feedback alongside expert review. We can also recommend lightweight testing if deeper evidence is needed.",
      },
      {
        question: "How long does an audit take?",
        answer:
          "It depends on the size of the product, but audits are intentionally focused and fast — designed to give you direction quickly.",
      },
      {
        question: "Can you implement the fixes too?",
        answer:
          "Yes. Our design and engineering teams can take the recommendations through to redesign and build.",
      },
    ],
    related: ["product-redesign", "website-redesign", "product-discovery"],
  },
  {
    slug: "product-discovery",
    category: "Research",
    title: "Product discovery",
    heroLead:
      "We help you define the right product before you build — aligning goals, users, and scope so you invest in what matters and de-risk the path to launch.",
    metaDescription:
      "Product discovery services by Scalixity — align goals, users, and scope to define the right product and de-risk your build.",
    challenges: [
      {
        problem: "Are you unsure what to build first?",
        solution:
          "We work through goals, users, and constraints to define a focused scope and a clear MVP or V1.",
      },
      {
        problem: "Is the team misaligned on direction?",
        solution:
          "We bring stakeholders together around shared goals, priorities, and a concrete plan everyone understands.",
      },
      {
        problem: "Do you want to reduce the risk of building the wrong thing?",
        solution:
          "We pressure-test assumptions early — with research and prototypes where useful — so you commit with confidence.",
      },
    ],
    deliverTitle: "What we deliver",
    deliverables: [
      {
        title: "Goals & context",
        description:
          "A shared understanding of business goals, users, and constraints.",
      },
      {
        title: "User & market insight",
        description:
          "Research into your users and the landscape to guide decisions.",
      },
      {
        title: "Feature breakdown",
        description:
          "Features mapped by value and feasibility into a clear scope.",
      },
      {
        title: "Scope & roadmap",
        description:
          "A prioritized MVP or V1 plan and the path beyond it.",
      },
      {
        title: "Early validation",
        description:
          "Flows or prototypes to test key assumptions before building.",
      },
    ],
    benefitsTitle: "Why teams choose us",
    benefits: [
      {
        title: "Build the right thing",
        description:
          "We focus your investment on what actually matters to users and the business.",
      },
      {
        title: "Shared alignment",
        description:
          "Everyone leaves with the same understanding and plan.",
      },
      {
        title: "Less risk",
        description:
          "Assumptions tested early mean fewer expensive surprises later.",
      },
      {
        title: "Ready to build",
        description:
          "You finish with a scope and roadmap a team can act on immediately.",
      },
    ],
    faqs: [
      {
        question: "What is product discovery?",
        answer:
          "It's the work of defining what to build and why — aligning goals, users, and scope — before committing to a full build, so you invest in the right product.",
      },
      {
        question: "How is it different from just writing a spec?",
        answer:
          "Discovery is collaborative and evidence-led. We pressure-test assumptions, prioritize ruthlessly, and often prototype — so the plan is grounded, not just documented.",
      },
      {
        question: "What do we walk away with?",
        answer:
          "A clear scope, a prioritized roadmap, and shared alignment — everything a team needs to start building with confidence.",
      },
      {
        question: "Can discovery flow straight into design and build?",
        answer:
          "Yes — discovery sets up our design, prototype, and development teams to move quickly with a clear direction.",
      },
    ],
    related: ["design-prototype", "technical-workshop", "custom-mvp-development"],
  },
  {
    slug: "technical-workshop",
    category: "Research",
    title: "Technical workshop",
    heroLead:
      "A focused, collaborative session to align on architecture, scope, and approach — turning a complex idea into a clear, shared technical plan.",
    metaDescription:
      "Technical workshop services by Scalixity — collaborative sessions to align on architecture, scope, and a clear plan for your build.",
    challenges: [
      {
        problem: "Is the technical direction unclear or contested?",
        solution:
          "We facilitate a structured session to weigh options and converge on an architecture everyone understands and supports.",
      },
      {
        problem: "Are estimates and scope vague?",
        solution:
          "We break the work down together, surfacing risks and dependencies so scope and effort become concrete.",
      },
      {
        problem: "Do business and engineering see the project differently?",
        solution:
          "We bring both sides into the room and translate between them, aligning on goals, constraints, and trade-offs.",
      },
    ],
    deliverTitle: "What we deliver",
    deliverables: [
      {
        title: "Architecture options",
        description:
          "A clear look at approaches with their trade-offs for your context.",
      },
      {
        title: "Scope breakdown",
        description:
          "The work decomposed into understandable, estimable pieces.",
      },
      {
        title: "Risk & dependency map",
        description:
          "The unknowns and dependencies surfaced early, before they bite.",
      },
      {
        title: "Recommended plan",
        description:
          "A concrete technical direction and sequencing you can act on.",
      },
      {
        title: "Shared alignment",
        description:
          "Business and engineering leaving with the same understanding.",
      },
    ],
    benefitsTitle: "Why teams choose us",
    benefits: [
      {
        title: "Focused and fast",
        description:
          "A short, structured session that produces real clarity.",
      },
      {
        title: "Honest trade-offs",
        description:
          "We lay out the options plainly, including the ones we'd avoid.",
      },
      {
        title: "Bridges the gap",
        description:
          "We translate between business goals and technical reality.",
      },
      {
        title: "Actionable output",
        description:
          "You leave with a plan, not just notes.",
      },
    ],
    faqs: [
      {
        question: "Who should join a technical workshop?",
        answer:
          "Usually a mix of product and engineering stakeholders — the people who own the goals and the people who'll build it. We tailor the format to your team.",
      },
      {
        question: "What comes out of it?",
        answer:
          "A recommended architecture and approach, a scope breakdown, surfaced risks and dependencies, and shared alignment on the plan.",
      },
      {
        question: "How long does it take?",
        answer:
          "Workshops are intentionally compact — often a focused session or two — designed to create clarity quickly.",
      },
      {
        question: "What if we need help building afterwards?",
        answer:
          "We can continue straight into development, or hand you a clear plan to take to your own team.",
      },
    ],
    related: ["product-discovery", "custom-mvp-development", "dedicated-team"],
  },

  // --------------------------------------------------------------- Validate
  {
    slug: "design-prototype",
    category: "Validate",
    title: "Design prototype",
    heroLead:
      "We turn your concept into an interactive prototype you can test with real users — validating flows and design before you commit to a full build.",
    metaDescription:
      "Design prototype services by Scalixity — interactive prototypes to validate flows and design with users before building.",
    challenges: [
      {
        problem: "Do you want proof a concept works before building it?",
        solution:
          "We create a clickable prototype that lets you and your users experience the product before any code is written.",
      },
      {
        problem: "Is it hard to get stakeholders aligned on an idea?",
        solution:
          "A tangible prototype makes the concept real, turning abstract debates into concrete feedback and decisions.",
      },
      {
        problem: "Are you unsure which flows actually work?",
        solution:
          "We test key journeys with users and refine the design based on what we learn, before development begins.",
      },
    ],
    deliverTitle: "What we deliver",
    deliverables: [
      {
        title: "Key user flows",
        description:
          "The core journeys mapped and designed for testing.",
      },
      {
        title: "Interactive prototype",
        description:
          "A clickable prototype that feels like the real product.",
      },
      {
        title: "Usability testing",
        description:
          "Sessions with users to see how the design holds up in practice.",
      },
      {
        title: "Findings & refinements",
        description:
          "What we learned and the design changes it points to.",
      },
      {
        title: "Build-ready direction",
        description:
          "A validated foundation to take confidently into development.",
      },
    ],
    benefitsTitle: "Why teams choose us",
    benefits: [
      {
        title: "De-risk the build",
        description:
          "Catch problems while they're cheap to fix — in design, not code.",
      },
      {
        title: "Real feedback",
        description:
          "Decisions grounded in how people actually use the prototype.",
      },
      {
        title: "Faster alignment",
        description:
          "A tangible artifact gets stakeholders on the same page quickly.",
      },
      {
        title: "Momentum into build",
        description:
          "A validated design that flows straight into development.",
      },
    ],
    faqs: [
      {
        question: "Why prototype before building?",
        answer:
          "Testing a clickable prototype catches usability and flow problems while they're still cheap and easy to change — saving time and money in development.",
      },
      {
        question: "How realistic is the prototype?",
        answer:
          "Realistic enough to test meaningfully — interactive, with the key flows in place — so users react as they would to a real product.",
      },
      {
        question: "Do you run the user testing too?",
        answer:
          "Yes. We can plan and run usability sessions, then translate what we learn into concrete design refinements.",
      },
      {
        question: "What happens after validation?",
        answer:
          "You have a validated design ready to build — and our design and engineering teams can take it from there.",
      },
    ],
    related: ["product-discovery", "web-app-design", "rapid-mvp-development"],
  },

  // ------------------------------------------------------------------ Build
  {
    slug: "custom-mvp-development",
    category: "Build",
    title: "Custom MVP development",
    heroLead:
      "We design and build a focused, production-ready MVP around your core value — fast enough to learn from, solid enough to grow on.",
    metaDescription:
      "Custom MVP development by Scalixity — focused, production-ready MVPs built to validate your idea and scale beyond launch.",
    challenges: [
      {
        problem: "Do you need to get to market without overbuilding?",
        solution:
          "We help you scope to the core value and build only what's needed to start learning from real users.",
      },
      {
        problem: "Worried an MVP will be throwaway code?",
        solution:
          "We build MVPs on solid foundations, so the product you validate is one you can keep growing rather than rewriting.",
      },
      {
        problem: "Is the idea still taking shape?",
        solution:
          "We pair lightweight discovery and design with the build, so the product sharpens as it comes together.",
      },
    ],
    deliverTitle: "What we deliver",
    deliverables: [
      {
        title: "Focused scope",
        description:
          "A clear MVP definition centered on your core value, not everything at once.",
      },
      {
        title: "Design & build",
        description:
          "Design and engineering working together to ship a real product.",
      },
      {
        title: "Production-ready foundation",
        description:
          "An architecture you can build on after launch, not throw away.",
      },
      {
        title: "Launch support",
        description:
          "Help getting the MVP live and into users' hands.",
      },
      {
        title: "A path to V2",
        description:
          "A clear route to grow the product based on what you learn.",
      },
    ],
    benefitsTitle: "Why teams choose us",
    benefits: [
      {
        title: "Right-sized scope",
        description:
          "We build what's needed to learn — and resist the rest.",
      },
      {
        title: "Built to grow",
        description:
          "Solid foundations so your MVP becomes your product, not a rewrite.",
      },
      {
        title: "Design + engineering",
        description:
          "One team covering product, design, and build.",
      },
      {
        title: "Honest scoping",
        description:
          "Clear estimates and transparent progress from day one.",
      },
    ],
    faqs: [
      {
        question: "How is this different from rapid MVP development?",
        answer:
          "Custom MVP development is tailored and built on production-grade foundations for products meant to scale. Rapid MVP focuses on maximum speed to test an idea, often more lightly. We help you pick the right fit.",
      },
      {
        question: "Will the MVP be throwaway?",
        answer:
          "No — we build on solid foundations so the validated product can keep growing rather than being rebuilt from scratch.",
      },
      {
        question: "Do you help define the scope?",
        answer:
          "Yes. We can run discovery first, then scope the MVP to the core value before building.",
      },
      {
        question: "What happens after launch?",
        answer:
          "We help you learn from real usage and plan the next iterations — and can keep building with you as a dedicated team.",
      },
    ],
    related: ["rapid-mvp-development", "product-discovery", "web-development"],
  },
  {
    slug: "rapid-mvp-development",
    category: "Build",
    title: "Rapid MVP development",
    heroLead:
      "We help you validate an idea fast — building a lean MVP in focused sprints with proven building blocks, so you can learn from real users sooner.",
    metaDescription:
      "Rapid MVP development by Scalixity — lean MVPs built in focused sprints to validate your idea and reach the market faster.",
    challenges: [
      {
        problem: "Do you need to test an idea quickly?",
        solution:
          "We work in focused sprints with proven frameworks and building blocks to get a usable MVP live faster.",
      },
      {
        problem: "Is a full custom build too slow or too costly right now?",
        solution:
          "We keep the MVP lean — just enough to validate the core hypothesis — so you spend less before you have proof.",
      },
      {
        problem: "Worried speed means a dead end?",
        solution:
          "We build pragmatically and flag clearly where you'd invest in a sturdier foundation once the idea is validated.",
      },
    ],
    deliverTitle: "What we deliver",
    deliverables: [
      {
        title: "Lean scope",
        description:
          "The smallest build that genuinely tests your core idea.",
      },
      {
        title: "Sprint-based build",
        description:
          "Focused sprints that turn the concept into a working product fast.",
      },
      {
        title: "Proven building blocks",
        description:
          "Reusable frameworks and components to move quickly without cutting corners.",
      },
      {
        title: "Live MVP",
        description:
          "A real product in users' hands so you can start learning.",
      },
      {
        title: "Next-step guidance",
        description:
          "A clear view of what to firm up if the idea proves out.",
      },
    ],
    benefitsTitle: "Why teams choose us",
    benefits: [
      {
        title: "Speed with judgment",
        description:
          "Fast, but with sensible engineering decisions behind it.",
      },
      {
        title: "Lower upfront cost",
        description:
          "Spend less to get the proof you need before investing more.",
      },
      {
        title: "Learn sooner",
        description:
          "Real user feedback in weeks, not quarters.",
      },
      {
        title: "Clear next steps",
        description:
          "We show you exactly what to strengthen once you scale.",
      },
    ],
    faqs: [
      {
        question: "How fast can we launch?",
        answer:
          "Rapid MVPs are built in focused sprints using proven building blocks, so timelines are short — exact speed depends on scope, which we keep deliberately lean.",
      },
      {
        question: "Is the quality good enough for real users?",
        answer:
          "Yes — it's a real, usable product. We make pragmatic choices for speed and tell you clearly where to invest further once the idea is validated.",
      },
      {
        question: "When should we choose custom MVP instead?",
        answer:
          "If you already have strong conviction and need production-grade foundations to scale, custom MVP development is the better fit. We help you decide.",
      },
      {
        question: "What if the idea works?",
        answer:
          "We help you strengthen the foundation and keep building — often continuing as your dedicated team.",
      },
    ],
    related: ["custom-mvp-development", "no-code-development", "product-discovery"],
  },
  {
    slug: "dedicated-team",
    category: "Build",
    title: "Dedicated team",
    heroLead:
      "Get a dedicated, senior product team — design and engineering — that integrates with your workflow and ships continuously, like an extension of your own.",
    metaDescription:
      "Dedicated software development team by Scalixity — senior designers and engineers who integrate with your workflow and ship continuously.",
    challenges: [
      {
        problem: "Do you need to move faster than hiring allows?",
        solution:
          "We give you a ready, senior team that can start quickly and scale up or down as your needs change.",
      },
      {
        problem: "Worried an outside team won't feel like yours?",
        solution:
          "We embed in your tools, rituals, and workflow, working as part of your team with direct, day-to-day collaboration.",
      },
      {
        problem: "Do you need consistency over the long term?",
        solution:
          "A dedicated team builds deep context over time, so velocity and quality compound instead of resetting.",
      },
    ],
    deliverTitle: "What we deliver",
    deliverables: [
      {
        title: "Senior, cross-functional team",
        description:
          "Designers and engineers matched to your product and stack.",
      },
      {
        title: "Embedded collaboration",
        description:
          "We work in your tools and rituals as part of your team.",
      },
      {
        title: "Continuous delivery",
        description:
          "Steady, predictable shipping rather than one-off handoffs.",
      },
      {
        title: "Flexible scaling",
        description:
          "Scale the team up or down as priorities shift.",
      },
      {
        title: "Shared ownership",
        description:
          "A team that takes responsibility for outcomes, not just tickets.",
      },
    ],
    benefitsTitle: "Why teams choose us",
    benefits: [
      {
        title: "Start quickly",
        description:
          "A ready team that skips the long hiring cycle.",
      },
      {
        title: "Truly embedded",
        description:
          "We work inside your workflow, not at arm's length.",
      },
      {
        title: "Compounding context",
        description:
          "Deep product knowledge that builds over time.",
      },
      {
        title: "Flexible commitment",
        description:
          "Scale the team to match your roadmap and budget.",
      },
    ],
    faqs: [
      {
        question: "How is a dedicated team different from team extension?",
        answer:
          "A dedicated team is a self-contained, cross-functional unit that owns delivery. Team extension adds individual specialists into your existing team. We help you choose based on how you want to work.",
      },
      {
        question: "How involved are we day to day?",
        answer:
          "As involved as you want. We embed in your tools and rituals, with direct communication and visible progress throughout.",
      },
      {
        question: "Can we scale the team over time?",
        answer:
          "Yes — you can scale up or down as priorities and budget change.",
      },
      {
        question: "What kinds of work can the team take on?",
        answer:
          "Full product delivery — discovery, design, and engineering — across web, mobile, and AI features.",
      },
    ],
    related: ["team-extension", "custom-mvp-development", "web-development"],
  },

  // ------------------------------------------------------------------ Scale
  {
    slug: "product-redesign",
    category: "Scale",
    title: "Product redesign",
    heroLead:
      "We modernize maturing products with scalable, business-driven UX and UI — improving usability and consistency without disrupting the users you already have.",
    metaDescription:
      "Product redesign services by Scalixity — modernize a maturing product with scalable, business-driven UX and UI.",
    challenges: [
      {
        problem: "Has your product grown into an inconsistent, hard-to-use interface?",
        solution:
          "We bring order back with a coherent design system and reworked flows, improving usability without a disruptive rebuild.",
      },
      {
        problem: "Is the experience holding back growth?",
        solution:
          "We align the redesign with your business goals, focusing on the flows that drive activation, retention, and expansion.",
      },
      {
        problem: "Worried a redesign will alienate existing users?",
        solution:
          "We evolve thoughtfully and can phase the rollout, so improvements land without breaking familiar workflows.",
      },
    ],
    deliverTitle: "What we deliver",
    deliverables: [
      {
        title: "Experience audit",
        description:
          "A clear-eyed review of where the current product helps and hurts.",
      },
      {
        title: "Reworked flows",
        description:
          "Key journeys redesigned around real usage and business goals.",
      },
      {
        title: "Design system",
        description:
          "A scalable system that restores consistency across the product.",
      },
      {
        title: "Modern UI",
        description:
          "A refreshed interface that's cleaner, clearer, and on-brand.",
      },
      {
        title: "Phased rollout plan",
        description:
          "A path to ship improvements without disrupting existing users.",
      },
    ],
    benefitsTitle: "Why teams choose us",
    benefits: [
      {
        title: "Business-driven",
        description:
          "We tie design decisions to the metrics that matter to you.",
      },
      {
        title: "Scalable systems",
        description:
          "Consistency that holds as the product keeps growing.",
      },
      {
        title: "Low disruption",
        description:
          "Thoughtful, phased change that respects existing users.",
      },
      {
        title: "Design + build",
        description:
          "Our engineers can take the redesign all the way to production.",
      },
    ],
    faqs: [
      {
        question: "How do you redesign without disrupting users?",
        answer:
          "We evolve the experience deliberately and can phase the rollout, introducing improvements in a way that respects familiar workflows rather than forcing a jarring change.",
      },
      {
        question: "Where do you start?",
        answer:
          "With an audit of the current product and your goals, so the redesign targets the flows and issues with the most impact.",
      },
      {
        question: "Can you build the redesign too?",
        answer:
          "Yes — our engineering teams can implement the redesign, working from a shared design system.",
      },
      {
        question: "How is this different from a website redesign?",
        answer:
          "Product redesign focuses on interactive product UX — complex flows and systems — while a website redesign focuses on marketing and conversion. We do both.",
      },
    ],
    related: ["ux-audit", "website-redesign", "team-extension"],
  },
  {
    slug: "team-extension",
    category: "Scale",
    title: "Team extension",
    heroLead:
      "We plug senior designers and engineers straight into your team — filling capability and capacity gaps so you can move faster without the hiring overhead.",
    metaDescription:
      "Team extension services by Scalixity — senior designers and engineers who integrate into your team to add capacity and skills fast.",
    challenges: [
      {
        problem: "Do you need specific skills you don't have in-house?",
        solution:
          "We provide senior specialists who slot into your team to cover the exact capabilities you're missing.",
      },
      {
        problem: "Is hiring too slow for your current roadmap?",
        solution:
          "We add experienced people quickly, so you keep momentum while you hire — or instead of it.",
      },
      {
        problem: "Worried external people will create overhead?",
        solution:
          "Our people work inside your processes and tools and ramp up fast, contributing as part of your team from early on.",
      },
    ],
    deliverTitle: "What we deliver",
    deliverables: [
      {
        title: "Senior specialists",
        description:
          "Designers and engineers matched to your stack and the gaps you need filled.",
      },
      {
        title: "Fast onboarding",
        description:
          "People who ramp into your codebase and processes quickly.",
      },
      {
        title: "Your way of working",
        description:
          "We adopt your tools, rituals, and standards, not the reverse.",
      },
      {
        title: "Flexible capacity",
        description:
          "Scale the support up or down as your roadmap changes.",
      },
      {
        title: "Real contribution",
        description:
          "Hands-on delivery, not just advice — they ship with your team.",
      },
    ],
    benefitsTitle: "Why teams choose us",
    benefits: [
      {
        title: "Skills on demand",
        description:
          "Exactly the capabilities you need, exactly when you need them.",
      },
      {
        title: "Faster than hiring",
        description:
          "Add experienced people without the long recruitment cycle.",
      },
      {
        title: "Low friction",
        description:
          "We work in your process and integrate quickly.",
      },
      {
        title: "Flexible",
        description:
          "Adjust the support as priorities and budget shift.",
      },
    ],
    faqs: [
      {
        question: "How is team extension different from a dedicated team?",
        answer:
          "Team extension adds individual specialists into your existing team under your direction. A dedicated team is a self-contained unit that owns delivery. We help you pick what fits.",
      },
      {
        question: "How quickly can people start?",
        answer:
          "Faster than hiring. We match experienced specialists to your needs and get them ramped into your tools and codebase quickly.",
      },
      {
        question: "Will they follow our processes?",
        answer:
          "Yes. Our people adopt your workflow, standards, and tools and work as part of your team.",
      },
      {
        question: "Can we change the level of support over time?",
        answer:
          "Absolutely — you can scale the support up or down as your roadmap and budget evolve.",
      },
    ],
    related: ["dedicated-team", "product-redesign", "web-development"],
  },
];

export function getService(slug: string): ServiceContent | undefined {
  return SERVICES_CONTENT.find((s) => s.slug === slug);
}

// Resolve a service's `related` slugs to full entries, dropping any that
// don't match (defensive against typos in the data above).
export function getRelated(slug: string): ServiceContent[] {
  const svc = getService(slug);
  if (!svc) return [];
  return svc.related
    .map((rs) => getService(rs))
    .filter((s): s is ServiceContent => Boolean(s));
}
