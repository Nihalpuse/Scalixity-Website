"use client";

import { ServiceDetail } from "@/src/app/services/_components/ServiceDetail";

export default function CustomDashboardPage() {
  return (
    <ServiceDetail
      slug="custom-dashboard"
      images={[
        "/images/custom-dashboard/1 2.png",
        "/images/custom-dashboard/2.png",
        "/images/custom-dashboard/3.png",
      ]}
    />
  );
}
