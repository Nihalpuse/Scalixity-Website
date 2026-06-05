import {
  IndustryScrollSlider,
  SlideMedia,
  type SliderSlide,
} from "../../_components/IndustryScrollSlider";

const EYEBROW = "Healthcare website designs we deliver";
const TITLE =
  "What you'd expect from a healthcare design and development company — and more";
const DESCRIPTION =
  "From wellness apps to EHR interfaces, our medical web design company creates digital health tools that do more than look good — they improve outcomes, reduce admin friction, and earn user trust.";

const SOLUTIONS: { tab: string; lead: string; video: string }[] = [
  {
    tab: "Health tracking",
    lead: "Custom health tracking apps designed for logging sleep, fitness, heart rate, glucose levels, and more — paired with smart visualizations, habit loops, and adaptive UX that keeps users engaged long term.",
    video: "/landing/industries/tinyvid_optimized_1_c3e89d72e9ca2837d9e85643956c8544.mp4",
  },
  {
    tab: "Remote patient monitoring systems",
    lead: "Dashboards and mobile apps that connect patients and providers through real-time data sync, wearable integrations, and proactive alerts. Built to streamline reporting and reduce avoidable visits.",
    video: "/landing/industries/tinyvid_optimized_2_original-7d5a927fb8e1aed94b2f0dadb537fe63.mp4",
  },
  {
    tab: "EHR interfaces",
    lead: "We rebuild bloated EHR platforms into modular, intuitive interfaces that reduce charting time and cognitive fatigue. Designed for physicians, administrators, and compliance — all in one ecosystem.",
    video: "/landing/industries/tinyvid_optimized_3_original-73b35d49f86d187eea5f51868f628bd4.mp4",
  },
  {
    tab: "Medication management tools",
    lead: "From daily med reminders to pharmacy integrations, we design medication management flows that improve adherence and simplify tracking for patients, caregivers, and providers.",
    video: "/landing/industries/tinyvid_optimized_5_original-c138f335ff5d89bfd76a54cb9b1b76f4.mp4",
  },
  {
    tab: "Telemedicine platforms",
    lead: "End-to-end UX and development for telehealth websites, mobile apps, and clinic portals — including appointment booking, secure video, e-prescriptions, and follow-up workflows.",
    video: "/landing/Website-development.mp4",
  },
  {
    tab: "Mental health & well-being apps",
    lead: "We design mental health apps with modular content, emotion-first UX, and features like guided therapy, journaling, chatbots, and mood tracking. Optimized for privacy, safety, and emotional impact.",
    video: "/landing/Product-discovery.mp4",
  },
];

export function HealthcareSolutions() {
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
      mobileTabs
    />
  );
}
