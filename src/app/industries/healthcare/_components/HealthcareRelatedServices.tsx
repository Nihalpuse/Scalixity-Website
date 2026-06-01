import {
  IndustryRelatedServices,
  type RelatedService,
} from "../../_components/IndustryRelatedServices";

const EYEBROW = "Related services";
const TITLE =
  "Services that pair well with your healthcare platform or medical website design";

const SERVICES: RelatedService[] = [
  {
    title: "Web development",
    body: "Custom web solutions, from complex platforms to interactive dashboards and scalable products, designed to boost functionality and drive growth.",
    href: "/services",
  },
  {
    title: "UX audit",
    body: "Identify usability bottlenecks, improve engagement, and optimize for conversions.",
    href: "/services",
  },
  {
    title: "Web app design",
    body: "Design responsive, user-focused web platforms with strong UX/UI logic.",
    href: "/services",
  },
];

export function HealthcareRelatedServices() {
  return (
    <IndustryRelatedServices eyebrow={EYEBROW} title={TITLE} services={SERVICES} />
  );
}
