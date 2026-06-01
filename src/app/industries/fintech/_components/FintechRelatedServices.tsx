import {
  IndustryRelatedServices,
  type RelatedService,
} from "../../_components/IndustryRelatedServices";

const EYEBROW = "Related services";
const TITLE = "Services that pair well with your fintech platform design";

const SERVICES: RelatedService[] = [
  {
    title: "Website development",
    body: "Launch a fast, scalable site that converts and supports product growth.",
    href: "/services",
  },
  {
    title: "Mobile app design",
    body: "Create intuitive, performance-optimized mobile apps for iOS and Android.",
    href: "/services",
  },
  {
    title: "Product redesign",
    body: "Upgrade legacy interfaces with scalable, business-driven UX and UI from a top-notch design agency.",
    href: "/services",
  },
];

export function FintechRelatedServices() {
  return (
    <IndustryRelatedServices eyebrow={EYEBROW} title={TITLE} services={SERVICES} />
  );
}
