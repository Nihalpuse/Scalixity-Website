import {
  UserCheck,
  Video,
  CalendarClock,
  FileText,
  Activity,
  Pill,
  Bot,
  ShieldCheck,
  ReceiptText,
  BarChart3,
  Stethoscope,
  Languages,
  Siren,
  BookOpen,
  ClipboardList,
} from "lucide-react";
import { IndustryFeatures, type Feature } from "../../_components/IndustryFeatures";

const EYEBROW = "Designing healthcare features that matter";
const TITLE =
  "Workflow-driven UX built for efficiency, data integrity, and regulatory fit";
const DESCRIPTION =
  "Below is a snapshot of the feature patterns we design most often, each mapped to a specific clinical task, tested with real users, and documented for smooth hand-off.";

const FEATURES: Feature[] = [
  {
    title: "Patient onboarding & identity verification",
    body: "Paper-free intake, e-consent, and ID checks that flow straight into the EHR.",
    Icon: UserCheck,
  },
  {
    title: "Telehealth video & secure messaging",
    body: "HIPAA-compliant HD calls, chat, and file exchange with auto-generated visit notes.",
    Icon: Video,
  },
  {
    title: "Appointment scheduling & smart reminders",
    body: "Provider-aware booking, calendar sync, SMS/email nudges, and wait-list back-fill.",
    Icon: CalendarClock,
  },
  {
    title: "EHR & lab integration",
    body: "Real-time APIs for orders, results, clinical notes, allergies, and med histories.",
    Icon: FileText,
  },
  {
    title: "Remote patient monitoring",
    body: "Wearable and IoT streams (SpO₂, BP, ECG) with threshold alerts and trend graphs.",
    Icon: Activity,
  },
  {
    title: "Medication management & e-prescribing",
    body: "Drug-interaction checks, refill tracking, pharmacy routing, and adherence nudges.",
    Icon: Pill,
  },
  {
    title: "AI-driven symptom triage",
    body: "Conversational intake that routes to self-care, telehealth, or urgent slots by risk score.",
    Icon: Bot,
  },
  {
    title: "Role-based access & audit trails",
    body: "Granular permissions for staff, admins, and patients, plus immutable compliance logs.",
    Icon: ShieldCheck,
  },
  {
    title: "Billing, insurance & claims automation",
    body: "Eligibility checks, coded encounters, e-claim submission, and payment reconciliation.",
    Icon: ReceiptText,
  },
  {
    title: "Population health & outcomes analytics",
    body: "Cohort dashboards, risk stratification, and KPI tracking for quality-of-care programs.",
    Icon: BarChart3,
  },
  {
    title: "Clinical decision support",
    body: "Evidence-based prompts, drug-dose calculators, and guideline reminders inside the workflow.",
    Icon: Stethoscope,
  },
  {
    title: "Multilingual & accessibility layers",
    body: "WCAG-compliant UI, screen-reader support, RTL layouts, and easy language toggles for global reach.",
    Icon: Languages,
  },
  {
    title: "Emergency buttons & escalation",
    body: "One-tap SOS triggers real-time alerts, location sharing, and priority routing to on-call teams.",
    Icon: Siren,
  },
  {
    title: "Patient education library",
    body: "Curated articles, videos, and care plans auto-recommended by condition and literacy level.",
    Icon: BookOpen,
  },
  {
    title: "Regulatory & quality reporting",
    body: "Built-in MIPS/PCMH metrics, automated report generation, and dashboards for auditors.",
    Icon: ClipboardList,
  },
];

export function HealthcareFeatures() {
  return (
    <IndustryFeatures
      eyebrow={EYEBROW}
      title={TITLE}
      description={DESCRIPTION}
      features={FEATURES}
    />
  );
}
