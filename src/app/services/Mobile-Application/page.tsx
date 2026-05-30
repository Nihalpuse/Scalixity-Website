"use client";

import { ServiceDetail } from "@/src/app/services/_components/ServiceDetail";

export default function MobileApplicationPage() {
  return (
    <ServiceDetail
      // Matches the legacy fetch slug (the URL's last path segment).
      slug="Mobile-Application"
      images={[
        "/images/mobile application/1.png",
        "/images/mobile application/2.png",
        "/images/mobile application/3.png",
      ]}
    />
  );
}
