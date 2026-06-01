import {
  IndustryScrollSlider,
  SlideMedia,
  type SliderSlide,
} from "../../_components/IndustryScrollSlider";

const EYEBROW = "Education software solutions we deliver";
const TITLE =
  "Purpose-built platforms that scale with your learners and prove ROI to your stakeholders";
const DESCRIPTION =
  "When you're building something specific, you don't want guesses. You want a partner who's already designed education software solutions like yours, using the same tech stack. Here is what we've built — scroll down to read our clients' reviews.";

const SOLUTIONS: { tab: string; lead: string; video: string }[] = [
  {
    tab: "Learning management systems",
    lead: "Custom web and mobile LMS UX design for EdTech — built for course creation, user roles, content delivery, and analytics dashboards. We design them with responsive layouts, SCORM/xAPI compliance, and role-based access controls.",
    video:
      "/landing/industries/tinyvid_optimized_1_c3e89d72e9ca2837d9e85643956c8544.mp4",
  },
  {
    tab: "Assessment & quiz platforms",
    lead: "We design interactive testing engines for timed exams, auto-graded quizzes, and drag-and-drop exercises. Features include question banks, instant feedback flows, and detailed performance reports.",
    video:
      "/landing/industries/tinyvid_optimized_2_original-7d5a927fb8e1aed94b2f0dadb537fe63.mp4",
  },
  {
    tab: "Tutoring & mentorship marketplaces",
    lead: "End-to-end UX for platforms that match learners with vetted tutors or mentors, featuring smart search, booking flows, in-app messaging, and review systems. Designed to scale with referral features, secure payment gateways, and role-based access controls.",
    video:
      "/landing/industries/tinyvid_optimized_3_original-73b35d49f86d187eea5f51868f628bd4.mp4",
  },
];

export function EdtechSolutions() {
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
