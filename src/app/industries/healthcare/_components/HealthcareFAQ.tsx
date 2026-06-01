import { FAQ, type QA } from "@/src/app/landing/_components/FAQ";

const HEALTHCARE_FAQS: QA[] = [
  {
    question:
      "How much does it cost to design and develop clinic websites or healthcare apps?",
    answer:
      "Pricing depends on scope, complexity, and regulatory needs. We've built everything from lightweight web design for doctors to complex platforms involving medical product design, EHR integrations, and multilingual support. Whether you're planning clinic websites, wellness apps, or admin dashboards, we offer tailored estimates aligned with your goals and resources.",
  },
  {
    question:
      "What makes your agency different from other healthcare web design companies?",
    answer:
      "We combine product thinking with execution. We don't just ship pages — we help you prioritize features, align with user behaviours, and deliver scalable systems that support compliance, usability, and long-term product growth.",
  },
  {
    question: "Do you offer web design for hospitals or larger health systems?",
    answer:
      "Yes. We specialize in web design for hospitals, medical networks, and enterprise health systems. That includes content architecture, multi-role dashboards, secure portals, and infrastructure that can support both public-facing and internal clinical tools.",
  },
  {
    question: "Can you redesign an outdated medical website or patient portal?",
    answer:
      "Absolutely. We provide full healthcare website redesign services — from UX audits and performance fixes to visual rebranding and backend upgrades. Whether you're a startup or a growing practice, we transform underperforming medical websites into modern, high-performing tools.",
  },
  {
    question:
      "Do you handle web design for medical practices with multiple services?",
    answer:
      "Yes. We structure web design for medical practices around real workflows — combining clear service pages, scheduling systems, EHR logic, and content hierarchies. We also optimize navigation and searchability for multi-specialty care, helping practices convert visitors and manage complex service offerings more efficiently.",
  },
  {
    question:
      "What if we need full website development for doctors, not just design?",
    answer:
      "We do both. From frontend layout to backend logic, our web design for doctors — as well as development — ensures HIPAA compliance, mobile responsiveness, SEO performance, and integration with CRMs, booking tools, lab APIs, and patient portals. You get a complete, scalable platform, not just a layout.",
  },
  {
    question: "Do you also build telehealth websites and patient portals?",
    answer:
      "Yes. We design and build telehealth websites, patient-facing dashboards, secure chat/video tools, and medical web applications that integrate with third-party systems like labs, pharmacies, and billing tools. Our platforms prioritize accessibility, HIPAA compliance, and provider–patient continuity across mobile and desktop.",
  },
  {
    question: "What defines the best medical website design in your opinion?",
    answer:
      "The best medical web design balances trust, performance, and usability. It's not just about visual polish — it's about fast load times, intuitive patient flows, accessible interfaces, and a backend that supports scale. We also prioritize SEO, compliance, and long-term adaptability so your platform evolves with your organization.",
  },
  {
    question: "Are you a medical web design company or more of a dev shop?",
    answer:
      "We're a full-service medical website design company that blends research, UX, branding, and full-stack development. Whether you need an MVP, custom admin logic, or an enterprise-grade platform, we handle strategy, execution, and post-launch support — all under one experienced product team.",
  },
  {
    question: "Do you provide custom platforms or web design for physicians?",
    answer:
      "Yes. We create tailored platforms and web design for physicians with role-based workflows, booking systems, and secure messaging. We also support integrations with EHRs and practice management tools — helping individual providers or multi-location clinics deliver a better patient experience.",
  },
];

export function HealthcareFAQ() {
  return (
    <FAQ
      eyebrow="Frequently asked questions"
      title="Questions already answered"
      faqs={HEALTHCARE_FAQS}
    />
  );
}
