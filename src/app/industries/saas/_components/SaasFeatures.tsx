import { IndustryFeatures, type Feature } from "../../_components/IndustryFeatures";

const EYEBROW = "Features we design for SaaS products";
const TITLE =
  "From dashboards to billing: designing interfaces that define successful SaaS user experiences";
const DESCRIPTION =
  "Designing SaaS applications requires defining all user-facing components, including onboarding flows, dashboards, permission management, billing interfaces, and SaaS homepage design. Here are some of the features we implement to improve usability and support core product functions:";

const FEATURES: Feature[] = [
  { title: "Onboarding flows", body: "Smooth first-time experiences that increase activation and reduce early churn." },
  { title: "Navigation & layouts", body: "Clear menus and layouts designed for role-based user journeys." },
  { title: "Dashboards", body: "Modular views for tracking KPIs, actions, and service metrics in real time." },
  { title: "Data visualizations", body: "Cards, tables, and charts that turn complex data into actionable insights." },
  { title: "Role-based access UI", body: "Interfaces for permissions, approvals, and secure multi-user workflows." },
  { title: "Billing screens", body: "Plan selection, usage metering, invoices, and upgrade flows designed for clarity." },
  { title: "Notifications & alerts", body: "Contextual, customizable messaging that keeps users informed without clutter." },
  { title: "Reporting panels", body: "Analytics screens with filters and exports for deep operational insight." },
  { title: "Search & filters", body: "Fast, intuitive controls to find data across complex SaaS structures." },
  { title: "Forms & data entry", body: "Well-structured inputs with validation and autosave to improve data quality." },
  { title: "Permissions & roles", body: "Secure user roles, groups, and access controls for scalable management." },
  { title: "Settings panels", body: "User-facing controls for preferences, integrations, and system behaviour." },
  { title: "Task management", body: "Assignment and tracking interfaces supporting team workflows." },
  { title: "Collaboration tools", body: "Commenting, shared views, and activity logs to support teamwork." },
  { title: "In-app support", body: "Embedded chat, help centre access, and contact widgets for user help." },
];

export function SaasFeatures() {
  return (
    <IndustryFeatures
      eyebrow={EYEBROW}
      title={TITLE}
      description={DESCRIPTION}
      features={FEATURES}
    />
  );
}
