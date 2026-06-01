import { SaasScrollSlider, SlideMedia, type SliderSlide } from "./SaasScrollSlider";

const EYEBROW = "Industry-specific solutions we design";
const TITLE =
  "SaaS design with the right architecture, flows, and systems for your users and business model";
const DESCRIPTION =
  "From managing transactions to planning inventory, SaaS app design must support critical business needs. Our solutions below focus on users' challenges and how good UX design for SaaS turns them into easy workflows.";

const SOLUTIONS: { tab: string; lead: string; video: string }[] = [
  {
    tab: "Retail SaaS",
    lead: "We deliver role-based SaaS dashboard designs, intuitive checkout flows, and clear inventory views that simplify complexity. This means your users work faster and reduce training time.",
    video: "/landing/industries/tinyvid_optimized_1_c3e89d72e9ca2837d9e85643956c8544.mp4",
  },
  {
    tab: "Banking & fintech SaaS",
    lead: "We design secure onboarding, role-based permissions, and clear transaction UX for B2B SaaS website design. This builds trust and keeps customers engaged.",
    video: "/landing/industries/tinyvid_optimized_2_original-7d5a927fb8e1aed94b2f0dadb537fe63.mp4",
  },
  {
    tab: "Social media management SaaS",
    lead: "We design scheduling interfaces, collaborative planning tools, and SaaS reporting solutions that make it easy to create, measure, and refine content. This keeps marketing teams productive and on target.",
    video: "/landing/industries/tinyvid_optimized_3_original-73b35d49f86d187eea5f51868f628bd4.mp4",
  },
  {
    tab: "Proptech SaaS solutions",
    lead: "We design listing management dashboards, integrated calendars, and clear transaction records that streamline workflows and reduce costly errors.",
    video: "/landing/industries/tinyvid_optimized_5_original-c138f335ff5d89bfd76a54cb9b1b76f4.mp4",
  },
  {
    tab: "Car rental & booking SaaS",
    lead: "We design booking flows, fleet management screens, and pricing dashboards that handle real-time availability, user roles, and payment integrations. This improves conversion rates and operational speed.",
    video: "/landing/Website-development.mp4",
  },
  {
    tab: "Data governance & compliance SaaS",
    lead: "We plan SaaS architecture design that includes role-based access, consent management, and audit logs. This reduces compliance costs and protects user trust.",
    video: "/landing/UX-audit.mp4",
  },
  {
    tab: "Manufacturing ERP SaaS",
    lead: "For this SaaS platform design, we create order tracking, production planning, and inventory dashboards with clear roles and workflows. This unifies operations and improves decision-making.",
    video: "/landing/Product-discovery.mp4",
  },
  {
    tab: "SaaS reporting & analytics",
    lead: "The best SaaS website design tools for this category go with smart filters, clear visualizations, and export options that help users find and share the right data fast. This drives real adoption and ROI.",
    video: "/landing/Technical-workshop.mp4",
  },
];

export function SaasSolutions() {
  const slides: SliderSlide[] = SOLUTIONS.map((s) => ({
    tab: s.tab,
    content: (
      <>
        <p className="font-albert text-brand-body-lg lg:text-2xl text-brand-ink leading-relaxed max-w-2xl">
          {s.lead}
        </p>
        <SlideMedia theme="light" src={s.video} />
      </>
    ),
  }));

  return (
    <SaasScrollSlider
      theme="light"
      eyebrow={EYEBROW}
      title={TITLE}
      description={DESCRIPTION}
      slides={slides}
      ctaLabel="Explore all"
      ctaHref="/work"
    />
  );
}
