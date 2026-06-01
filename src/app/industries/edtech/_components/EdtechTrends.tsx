import { IndustryTrends, type Trend } from "../../_components/IndustryTrends";

const EYEBROW = "Advanced edtech technologies";
const TITLE =
  "We turn emerging tech into practical, high-impact education technology solutions";
const DESCRIPTION =
  "From blockchain to AI, we offer education software development services that deliver advanced education industry IT solutions, designed to remain intuitive, no matter how complex the stack.";

const TRENDS: Trend[] = [
  {
    number: "01",
    title: "Blockchain & Web3",
    body: "Tamper-proof certificates, token-based rewards, and decentralized content hosting — future-ready IT solutions for schools and institutions prioritizing transparency, trust, and learner ownership.",
  },
  {
    number: "02",
    title: "AI & machine learning",
    body: "Adaptive learning paths, predictive alerts, and smart content curation — core to improving learner outcomes with real-time personalization.",
  },
  {
    number: "03",
    title: "Augmented & virtual reality",
    body: "Immersive 3D simulations, AR overlays, and VR labs that turn abstract concepts into hands-on experiences — a staple of tech ed solutions built for modern, mobile-first classrooms.",
  },
  {
    number: "04",
    title: "Natural language processing",
    body: "Conversational chatbots, pronunciation tools, and AI essay reviewers — delivering education technology services that improve communication and assessment in diverse learning environments.",
  },
  {
    number: "05",
    title: "Learning analytics & big data",
    body: "Dashboards that turn student behavior into real-time insights — empowering educational technology research and development teams to optimize course delivery, retention, and performance.",
  },
  {
    number: "06",
    title: "Cloud-native & serverless infrastructure",
    body: "Always-on, cost-effective hosting for edtech websites and apps — supporting scale, speed, and resilience in IT solutions for the education industry with minimal ops overhead.",
  },
];

export function EdtechTrends() {
  return (
    <IndustryTrends
      eyebrow={EYEBROW}
      title={TITLE}
      description={DESCRIPTION}
      trends={TRENDS}
    />
  );
}
