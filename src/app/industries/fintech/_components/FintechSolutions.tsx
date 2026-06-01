import {
  IndustryScrollSlider,
  SlideMedia,
  type SliderSlide,
} from "../../_components/IndustryScrollSlider";

const EYEBROW = "What we do";
const TITLE = "What we design for fintech UX and UI";
const DESCRIPTION =
  "From digital banking and budgeting apps to payment flows and fintech websites, our UI and UX design for fintech focuses on clarity, usability, and performance across every screen.";

const SOLUTIONS: { tab: string; lead: string; video: string }[] = [
  {
    tab: "Digital banking",
    lead: "Custom interfaces for mobile and web banking — built for transfers, balance tracking, card management, and personalized financial insights. Designed with biometric login, real-time data, and secure UX patterns.",
    video:
      "/landing/industries/tinyvid_optimized_1_c3e89d72e9ca2837d9e85643956c8544.mp4",
  },
  {
    tab: "Budgeting & wealth management",
    lead: "We create tools for goal tracking, smart alerts, financial planning, and personalized budgeting — combining clean UX with features like account aggregation and AI-driven recommendations.",
    video:
      "/landing/industries/tinyvid_optimized_2_original-7d5a927fb8e1aed94b2f0dadb537fe63.mp4",
  },
  {
    tab: "Asset management",
    lead: "Dashboards and portals for investment tracking, asset allocation, and portfolio insights. We build modular interfaces that visualize performance, risk, and forecasts, designed for clarity at scale.",
    video:
      "/landing/industries/tinyvid_optimized_3_original-73b35d49f86d187eea5f51868f628bd4.mp4",
  },
  {
    tab: "Online payments & money transfers",
    lead: "Fast, intuitive flows for domestic and cross-border transfers, currency exchange, and wallet integrations. We optimize UX to reduce drop-offs, clarify fees, and support secure multi-step transactions.",
    video:
      "/landing/industries/tinyvid_optimized_5_original-c138f335ff5d89bfd76a54cb9b1b76f4.mp4",
  },
  {
    tab: "Fintech website design",
    lead: "We create high-converting fintech website designs with clean navigation, performance-driven layouts, responsive interactions, and real-time product demos or pricing calculators.",
    video: "/landing/Website-development.mp4",
  },
];

export function FintechSolutions() {
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
    <IndustryScrollSlider
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
