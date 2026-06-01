import { FAQ, type QA } from "@/src/app/landing/_components/FAQ";

const EDTECH_FAQS: QA[] = [
  {
    question: "How much does it cost to build a custom EdTech platform?",
    answer:
      "The budget hinges on product scope, feature depth, regulatory compliance, platform coverage, design complexity, and third-party integrations. A lean MVP costs far less than a multi-platform suite with LMS connectivity, adaptive learning engines, robust analytics, and strict privacy safeguards. Team composition, timeline, and engagement model (fixed-scope, dedicated team, or outcome-based) further shape the bottom line, and we can match cost with your constraints.",
  },
  {
    question: "What's the typical timeline for EdTech development?",
    answer:
      "For a lean MVP — covering core edtech development, basic UI/UX design for EdTech, and compliance setup — you're looking at 6–8 weeks. Enterprise-grade education industry IT solutions, complete with SCORM/xAPI integration, higher education IT services, and ongoing support, generally run 4–6 months. We optimize dev cycles with sprint-based planning and clear milestones.",
  },
  {
    question: "What makes Scalixity different from other EdTech design agencies?",
    answer:
      "As an EdTech design agency, we combine educational technology research and development with hands-on product design and engineering. Unlike pure education technology vendors, we embed pedagogy, accessibility (WCAG/FERPA), and real-user testing into each sprint — so you launch audit-ready, learner-validated platforms.",
  },
  {
    question: "How do you ensure compliance and accessibility?",
    answer:
      "Compliance is baked in from day one. Our education IT services cover WCAG audits, FERPA workflows, GDPR tooling, and role-based data flows. We document every step and deliver audit-ready reports — so you meet regulatory obligations without last-minute fixes or surprise costs.",
  },
  {
    question: "How has the development of technology affected learning?",
    answer:
      "Modern IT solutions for the education industry — from AI-driven recommendations to mobile microlearning — have shifted education toward personalized, on-demand experiences. Students engage more deeply, instructors gain real-time insights, and institutions scale training globally. We harness these advances in the educational technology solutions we design.",
  },
  {
    question: "Do you provide UX/UI design for EdTech products?",
    answer:
      "Yes. Our edtech UX design and edtech UI design services include wireframing, interactive prototyping, and full visual systems — optimized for retention, clarity, and accessibility. We've delivered edtech website design, edtech UI design, and edtech UX design that reinforce brand trust and drive learner adoption.",
  },
  {
    question: "What about higher education IT solutions?",
    answer:
      "We've built higher education IT services for universities handling tens of thousands of users. From virtual labs and analytics dashboards to secure exam proctoring, our education industry solutions are designed for scale, reliability, and deep integration with campus systems.",
  },
  {
    question: "Can you support K–12 and corporate learning?",
    answer:
      "Absolutely. Our IT solutions for schools cover K–12 district portals, parent-teacher dashboards, and gamified learning modules. For corporate clients, we deliver learning technology solutions — compliance training, onboarding flows, and skill-up platforms — all with the same focus on engagement and ROI.",
  },
  {
    question: "How do I get started with Scalixity's EdTech services?",
    answer:
      "Reach out for a product discovery session where we discuss your vision, user needs, and value drivers. From there, we'll craft a tailored roadmap covering educational technology and design, education technology services, and full edtech platform design. It's the fastest path from idea to impact.",
  },
];

export function EdtechFAQ() {
  return (
    <FAQ
      eyebrow="Frequently asked questions"
      title="Questions already answered"
      faqs={EDTECH_FAQS}
    />
  );
}
