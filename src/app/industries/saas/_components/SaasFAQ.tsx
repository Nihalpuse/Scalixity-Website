import { FAQ, type QA } from "@/src/app/landing/_components/FAQ";

const SAAS_FAQS: QA[] = [
  {
    question: "What is SaaS design?",
    answer:
      "SaaS design is the practice of creating the UI and UX for cloud-delivered software-as-a-service applications. Unlike single-purpose apps, SaaS products serve diverse user roles, handle complex data, and support ongoing subscriptions — so design has to structure workflows, dashboards, role-based permissions, and billing into something intuitive, efficient, and consistent. Good SaaS design isn't just polished screens; it lets real user needs drive layout, navigation, and visual hierarchy so the product is easy to learn and supports long-term retention.",
  },
  {
    question: "What is SaaS product design?",
    answer:
      "SaaS product design goes beyond looks — it structures the entire user experience around real business goals, workflows, and user needs. That means handling role management, multi-step onboarding, data-rich dashboards, billing, and subscriptions in a clear, consistent way, often with modular design systems that let you roll out features without breaking consistency. Done well, it reduces churn by improving usability and supports adoption, retention, and sustainable growth as the product scales.",
  },
  {
    question: "How to design a SaaS application?",
    answer:
      "Start by understanding your users, their roles, and the workflows they need to complete, then map real user journeys to find friction and simplify onboarding, task flows, and data presentation. Define clear navigation, role-based dashboards, and responsive layouts, then validate with interactive prototypes and usability testing before development. Throughout, collaborate closely with engineering so designs stay feasible, accessible, and performant.",
  },
  {
    question: "How to design a SaaS product?",
    answer:
      "Designing a SaaS product is a strategic, user-centred process that balances business goals, user workflows, and technical constraints. It starts with discovery — understanding users and their pain points — to plan role-based access and workflows, then moves through wireframing, prototyping, and usability testing to validate ideas before build. Design systems and reusable components keep the experience consistent and scalable as new features are added.",
  },
  {
    question: "How to design SaaS architecture?",
    answer:
      "SaaS architecture design plans the foundation for usability, scalability, and maintainability. It starts with user roles and permissions to define how data flows securely — role-based access control is core — and favours modular, service-oriented components that can evolve independently without breaking existing features. Designers and engineers collaborate to translate real user journeys into technical structure, from API design to data storage, allowing configuration over constant redevelopment.",
  },
  {
    question: "How to design SaaS software?",
    answer:
      "Designing SaaS software means creating experiences that are intuitive, scalable, and adaptable as business needs evolve, often across multiple user roles and real-time data. Start with research into user goals and workflows, then plan modular UI components and consistent patterns that cut development and maintenance time. Close collaboration between designers and developers — with clear specs, design tokens, and accessibility built in — plus prototyping and testing, keeps the result developer-ready and flexible.",
  },
  {
    question: "What is the typical SaaS cost for design and development?",
    answer:
      "There's no universal price tag — cost varies with product complexity, scope, timeline, and team experience. Simple MVPs with a couple of roles cost far less than full-featured platforms with complex dashboards, role-based access, integrations, and compliance needs. Investing in solid design upfront reduces long-term cost by preventing rework and delivering developer-ready handoffs, so the goal is always to balance quality, maintainability, and return on investment.",
  },
  {
    question: "What makes for the best SaaS websites design?",
    answer:
      "The best SaaS website design balances marketing, product education, and trust-building while guiding visitors toward conversion. Clarity is key — strong messaging and an intuitive layout make the value proposition obvious — reinforced by visual hierarchy, consistent branding, clear calls-to-action, and responsive design. Product previews, testimonials, and security assurances reduce friction, and a shared design system keeps the experience seamless from site visit to in-app use.",
  },
  {
    question: "How do you prioritize features in SaaS product design?",
    answer:
      "Prioritization starts by aligning on your core value proposition — the real problem your software solves — so you don't build a bloated product. Combine user research, business goals, and technical feasibility, using frameworks like MoSCoW or RICE to rank ideas objectively, with design, product, and engineering collaborating on usability and dependencies. Prototyping and testing validate priorities before full build, and regular backlog reviews keep the roadmap focused as needs evolve.",
  },
];

export function SaasFAQ() {
  return (
    <FAQ
      eyebrow="Frequently asked questions"
      title="Questions already answered"
      faqs={SAAS_FAQS}
    />
  );
}
