import { FAQ, type QA } from "@/src/app/landing/_components/FAQ";

const FINTECH_FAQS: QA[] = [
  {
    question: "What fintech platforms do you specialize in?",
    answer:
      "We've worked on a wide range of fintech developments, including SaaS platforms, banking apps, DeFi exchanges, investment dashboards, and financial planning tools. Whether it's a B2B product or a consumer-facing platform, our team understands the nuances of designing for fintech — from fintech user experience to fintech UI design. We specialize in both early-stage MVPs and enterprise-grade systems that demand robust security, data clarity, and scalable design systems.",
  },
  {
    question:
      "How is UX different in financial services compared to other industries?",
    answer:
      "UX in finance demands more than clean design — it requires trust, clarity, and compliance. Our team specializes in user experience for financial services, where flows like onboarding, transactions, and account management must be intuitive and secure. With deep experience in UX for financial services, we build interfaces that reduce friction and support complex decision-making.",
  },
  {
    question: "Do you help with fintech MVPs?",
    answer:
      "Yes, MVPs are one of our core strengths. Our process for fintech app design and development is built to move fast without compromising quality. We handle UX discovery, UI systems, clickable prototyping, and development — whether it's a fintech website design, mobile app, or tokenized interface. Our MVPs are investor-ready, built to validate early, and structured to evolve into full-featured fintech products.",
  },
  {
    question: "Can you redesign our existing fintech user experience?",
    answer:
      "Absolutely. Redesigning for fintech is one of the most common requests we receive. We start with a full UX audit to uncover friction points, then apply modern UX design to fintech principles, improving onboarding, navigation, dashboard usability, and trust elements. Our financial UX design approach balances clean interfaces with compliance needs like KYC/AML, while elevating your product's clarity and conversion rate. Whether it's a full fintech product design overhaul or specific improvements to your fintech app UI, we've got it covered.",
  },
  {
    question: "How long does a typical fintech design project take?",
    answer:
      "It depends on the scope. Smaller fintech UX projects can be completed in 3–4 weeks. Larger platform redesigns or full fintech app design builds (including mobile, web, and admin portals) usually take 6–12 weeks. Our team is built for speed and flexibility, offering full-cycle delivery or collaboration with your in-house dev team. We adapt to agile sprints and provide weekly updates — no black box timelines.",
  },
  {
    question: "How are you different from other fintech design agencies?",
    answer:
      "As a fintech design agency, we don't just make things look good — we focus on designing for fintech products that perform. We combine UX financial services knowledge, data-driven decisions, and seamless dev handoff. Every component in our fintech UI systems is built to scale, from responsive layouts to interaction patterns optimized for transactions, compliance, and user retention. We also operate as a true extension of your product team. You get direct access to senior designers and strategists, not layers of account managers. Whether you need to hire fintech designers for a sprint, extend your internal team, or bring on a full squad for fintech developments, we embed into your tools and workflows to ship faster.",
  },
];

export function FintechFAQ() {
  return (
    <FAQ
      eyebrow="Frequently asked questions"
      title="Questions already answered"
      faqs={FINTECH_FAQS}
    />
  );
}
