import { IndustryTrends, type Trend } from "../../_components/IndustryTrends";

const EYEBROW = "Advanced fintech technologies";
const TITLE =
  "Turning emerging tech into practical, high-impact financial technology solutions";
const DESCRIPTION =
  "From blockchain rails to instant payouts, our fintech development services simplify complex stacks into products that remain intuitive for end users.";

const TRENDS: Trend[] = [
  {
    number: "01",
    title: "Blockchain & digital ledger",
    body: "Tokenized assets, instant settlement rails, and tamper-proof audit trails that cut costs and boost transparency.",
  },
  {
    number: "02",
    title: "AI & machine learning",
    body: "Fraud scores, credit-risk models, and predictive personalization that shrink losses and lift retention.",
  },
  {
    number: "03",
    title: "Open banking & embedded finance",
    body: "Secure APIs, consent flows, and partner sandboxes powering account aggregation, card issuing, and white-label payments.",
  },
  {
    number: "04",
    title: "Real-time payments & wallets",
    body: "RTP rails, multi-currency wallets, and payout logic giving users immediate fund access and merchants faster settlement.",
  },
  {
    number: "05",
    title: "Biometric & behavioural authentication",
    body: "Face ID, voiceprints, and passive behavior signals that harden security without adding login friction.",
  },
  {
    number: "06",
    title: "Cloud-native & microservices",
    body: "Autoscaling clusters, containerized services, and CI/CD pipelines that keep trading platforms steady under peak load while controlling spend.",
  },
];

export function FintechTrends() {
  return (
    <IndustryTrends
      eyebrow={EYEBROW}
      title={TITLE}
      description={DESCRIPTION}
      trends={TRENDS}
    />
  );
}
