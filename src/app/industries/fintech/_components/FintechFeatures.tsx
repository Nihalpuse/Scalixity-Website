import {
  UserCheck,
  LayoutDashboard,
  ArrowLeftRight,
  PiggyBank,
  Landmark,
  Bitcoin,
  Bell,
  ShieldCheck,
  ReceiptText,
  GitBranch,
  KeyRound,
  Gauge,
  ShieldAlert,
  Coins,
  CreditCard,
  Webhook,
  FileSpreadsheet,
  Blocks,
} from "lucide-react";
import { IndustryFeatures, type Feature } from "../../_components/IndustryFeatures";

const EYEBROW = "Features we design for fintech products";
const TITLE =
  "Designing the features your fintech product needs to activate users and retain them longer";
const DESCRIPTION =
  "From onboarding flows to transaction systems, we design the parts of your platform that drive revenue, trust, and long-term use.";

const FEATURES: Feature[] = [
  {
    title: "Onboarding & KYC flows",
    body: "Reduce drop-off with clear, step-by-step onboarding and integrated identity verification logic.",
    Icon: UserCheck,
  },
  {
    title: "Dashboard & account views",
    body: "Design data-rich user panels for spending, investments, or transfers — clean, scannable, and role-aware.",
    Icon: LayoutDashboard,
  },
  {
    title: "Money transfer & payment flows",
    body: "Optimize transaction UX to cut errors, reduce time-to-send, and support complex use cases like cross-border remittance.",
    Icon: ArrowLeftRight,
  },
  {
    title: "Budgeting, saving & goal trackers",
    body: "Create habit-forming features with strong visual feedback and financial wellness logic.",
    Icon: PiggyBank,
  },
  {
    title: "Loan applications & credit tools",
    body: "UX for complex multi-step forms with real-time feedback, pre-fill logic, and decision clarity.",
    Icon: Landmark,
  },
  {
    title: "Crypto & DeFi interfaces",
    body: "Design for token swaps, staking, or wallets — with a focus on user safety, clarity, and mobile responsiveness.",
    Icon: Bitcoin,
  },
  {
    title: "Notification & alert systems",
    body: "Craft alert hierarchies that help users act fast on risk, updates, or transaction confirmations.",
    Icon: Bell,
  },
  {
    title: "Admin panels & compliance views",
    body: "Tools for internal teams to manage users, flag activity, and meet regulatory obligations.",
    Icon: ShieldCheck,
  },
  {
    title: "Invoicing & billing dashboards",
    body: "Clean, filterable UI for generating, tracking, and managing payments across users or vendors.",
    Icon: ReceiptText,
  },
  {
    title: "B2B fund movement & approval chains",
    body: "Interfaces for enterprise finance teams to manage large-volume transfers, permissions, and fund flows.",
    Icon: GitBranch,
  },
  {
    title: "Security & permission settings",
    body: "User-facing controls to manage 2FA, devices, roles, and access — with transparency built in.",
    Icon: KeyRound,
  },
  {
    title: "Accessibility & performance tuning",
    body: "Fintech UX optimized for WCAG compliance, fast load times, and responsive use across devices.",
    Icon: Gauge,
  },
  {
    title: "Fraud detection & risk analytics",
    body: "Real-time dashboards that surface suspicious patterns, automate flags, and shorten investigation cycles.",
    Icon: ShieldAlert,
  },
  {
    title: "Multi-currency & FX management",
    body: "Unified wallets, live conversion quotes, and hedging controls for users transacting across global markets.",
    Icon: Coins,
  },
  {
    title: "Card issuance & tokenized wallets",
    body: "Flows for creating virtual/physical cards, provisioning to Apple Pay/Google Pay, and managing spend limits.",
    Icon: CreditCard,
  },
  {
    title: "Open banking & API hubs",
    body: "Secure endpoints, sandbox environments, and granular permission layers for third-party data and payment integrations.",
    Icon: Webhook,
  },
  {
    title: "Automated reconciliation & reporting",
    body: "Back-office tools that match transactions, generate audit-ready ledgers, and export tax or compliance reports.",
    Icon: FileSpreadsheet,
  },
  {
    title: "Embedded finance & white-label portals",
    body: "Modular components that let partners embed payments, lending, or wallets directly in their apps.",
    Icon: Blocks,
  },
];

export function FintechFeatures() {
  return (
    <IndustryFeatures
      eyebrow={EYEBROW}
      title={TITLE}
      description={DESCRIPTION}
      features={FEATURES}
    />
  );
}
