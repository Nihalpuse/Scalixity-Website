import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/**',
      },
    ],
    // Fallback for any domain in development
    domains: ['res.cloudinary.com', 'example.com', 'picsum.photos', 'images.unsplash.com', 'via.placeholder.com', 'localhost'],
  },

  // Legacy → new-design redirects (308 permanent). The old industry sub-pages
  // and the not-migrated top-level industries point at their nearest live
  // page so old URLs/SEO land somewhere relevant instead of 404ing.
  async redirects() {
    const subsToParent = (parent: string, subs: string[]) =>
      subs.map((s) => ({
        source: `/industries/${parent}/${s}`,
        destination: `/industries/${parent}`,
        permanent: true,
      }));

    return [
      // Sub-feature pages → their (migrated) parent industry
      ...subsToParent("saas", [
        "ai-agents", "ai-analytics", "ai-automation", "ai-chatbots",
        "ai-copilots", "ai-integration", "ai-personalization", "ai-solutions",
      ]),
      ...subsToParent("healthcare", [
        "ai-agents", "ai-solutions", "clinical-decision-support",
        "documentation-intelligence", "fraud-detection", "medical-imaging",
        "patient-data-analytics", "personalized-medicine",
      ]),
      ...subsToParent("fintech", [
        "ai-agents", "ai-solutions", "credit-risk", "document-automation",
        "personalized-engines", "regulatory-compliance", "risk-management",
        "underwriting-pricing",
      ]),

      // Retail has no migrated page yet → industries index (parent + all subs)
      { source: "/industries/retail", destination: "/industries", permanent: true },
      { source: "/industries/retail/:path*", destination: "/industries", permanent: true },

      // Top-level industries not migrated → industries index
      ...["construction", "fitness", "food", "insurance", "manufacturing", "travel"].map(
        (s) => ({ source: `/industries/${s}`, destination: "/industries", permanent: true }),
      ),
    ];
  },
};

export default nextConfig;
