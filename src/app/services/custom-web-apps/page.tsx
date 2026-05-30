"use client";

import { ServiceDetail } from "@/src/app/services/_components/ServiceDetail";

export default function CustomWebAppsPage() {
  return (
    <ServiceDetail
      slug="custom-web-apps"
      images={[
        "/images/custom-web-apps/1.png",
        "/images/custom-web-apps/2.png",
        "/images/custom-web-apps/3.png",
      ]}
    />
  );
}
