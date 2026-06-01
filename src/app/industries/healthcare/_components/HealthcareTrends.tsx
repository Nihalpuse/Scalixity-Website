import { IndustryTrends, type Trend } from "../../_components/IndustryTrends";

const EYEBROW = "Advanced healthtech technologies";
const TITLE =
  "Integrating new technologies into solutions that meet clinical, regulatory, and product demands";
const DESCRIPTION =
  "From AI triage to FHIR-native data exchange, our software development services for healthcare apply advanced tech without adding clinical friction.";

const TRENDS: Trend[] = [
  {
    number: "01",
    title: "AI & machine learning",
    body: "Predictive risk scores, computer-vision diagnostics, and auto-coding that surface issues early and cut manual workload.",
  },
  {
    number: "02",
    title: "Remote monitoring & IoT",
    body: "HIPAA-secure streams from wearables and in-home devices (SpO₂, ECG, CGM) with real-time alerts and longitudinal dashboards.",
  },
  {
    number: "03",
    title: "Blockchain for health records",
    body: "Tamper-proof audit trails, patient-controlled consent layers, and cross-institution sharing on permissioned ledgers.",
  },
  {
    number: "04",
    title: "FHIR / HL7 interoperability",
    body: "API gateways and smart mapping that sync legacy EHRs, labs, and pharmacies — unlocking clean, actionable data system-wide.",
  },
  {
    number: "05",
    title: "Natural language processing & voice",
    body: "Ambient scribing, multilingual chatbots, and sentiment analysis that reduce documentation time and boost patient engagement.",
  },
  {
    number: "06",
    title: "Cloud-native & serverless infrastructure",
    body: "Auto-scaling, cost-efficient hosting on AWS, GCP, or Azure — meeting SOC 2 and HIPAA requirements with minimal DevOps overhead.",
  },
];

export function HealthcareTrends() {
  return (
    <IndustryTrends
      eyebrow={EYEBROW}
      title={TITLE}
      description={DESCRIPTION}
      trends={TRENDS}
    />
  );
}
