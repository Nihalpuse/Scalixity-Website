"use client";

import { ServiceDetail } from "@/src/app/services/_components/ServiceDetail";

// Per-page config: the API slug + hero images. All layout/design lives in the
// shared ServiceDetail template.
export default function AIChatbotPage() {
  return (
    <ServiceDetail
      // Matches the legacy fetch slug (the URL's last path segment).
      slug="AI-Chatbot"
      images={[
        "/images/AI chatbot/1.png",
        "/images/AI chatbot/2.png",
        "/images/AI chatbot/3.png",
      ]}
    />
  );
}
