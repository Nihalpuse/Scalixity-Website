import { CTAButton } from "@/src/app/landing/_components/CTAButton";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";

// Centered call-to-action band — used between industry-page sections
// (mirrors the reference's "Need to build one of these?" / "See what it's
// like to work with us" interstitials). Light surface.
export function IndustryCtaBand({
  title,
  body,
  ctaLabel,
  ctaHref = "/contact",
}: {
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref?: string;
}) {
  return (
    <section
      data-nav-bg="light"
      className="brand-section-light px-5 lg:px-10 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-3xl flex flex-col items-center text-center">
        <CtaArtwork className="h-44 w-44 lg:h-56 lg:w-56" />
        <h2 className="mt-8 lg:mt-10 font-bricolage text-3xl lg:text-5xl text-brand-ink leading-tight max-w-[18ch]">
          <StaggerText>{title}</StaggerText>
        </h2>
        <p className="mt-5 font-albert text-brand-body-lg text-brand-ink-muted max-w-xl">
          {body}
        </p>
        <div className="mt-10">
          <CTAButton href={ctaHref} variant="primary" onLight>
            {ctaLabel}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

/**
 * CTA band illustration — a human silhouette tapping a tablet screen. Flat
 * brand-palette vector on the light surface: a purple figure reaches out with
 * an extended index finger to touch a dark tablet whose screen shows a small
 * UI (title, avatar dot, card, mini bar chart), with an animated touch-ripple
 * at the contact point. Pure vector, no external asset. Ripple motion is in
 * globals.css behind prefers-reduced-motion. aria-hidden — it's ornamental.
 */
function CtaArtwork({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="cta-screen" x1="115" y1="60" x2="171" y2="142" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3d0a52" />
          <stop offset="1" stopColor="#120318" />
        </linearGradient>
      </defs>

      {/* Backdrop disc */}
      <circle cx="100" cy="100" r="94" fill="#590178" fillOpacity="0.08" />

      {/* Person — purple silhouette (head + shoulders), behind the tablet */}
      <path d="M24 158 C 24 116 30 104 46 104 C 62 104 68 116 68 158 Z" fill="#590178" />
      <circle cx="46" cy="84" r="16" fill="#590178" />

      {/* Tablet frame + screen */}
      <rect x="108" y="48" width="70" height="106" rx="13" fill="#080d10" />
      <rect x="115" y="60" width="56" height="82" rx="7" fill="url(#cta-screen)" />

      {/* On-screen UI */}
      <rect x="122" y="68" width="26" height="5" rx="2.5" fill="#fffefd" fillOpacity="0.85" />
      <circle cx="163" cy="71" r="4" fill="#ff3d2e" />
      <rect x="122" y="82" width="43" height="16" rx="4" fill="#fffefd" fillOpacity="0.12" />
      {/* mini bar chart */}
      <rect x="127" y="108" width="6" height="14" rx="2" fill="#8a2bb0" />
      <rect x="138" y="102" width="6" height="20" rx="2" fill="#8a2bb0" />
      <rect x="149" y="112" width="6" height="10" rx="2" fill="#fffefd" fillOpacity="0.5" />
      <rect x="160" y="105" width="6" height="17" rx="2" fill="#fffefd" fillOpacity="0.5" />

      {/* Arm + hand reaching in front of the tablet to touch the screen */}
      <path d="M62 122 Q 92 120 108 104" stroke="#590178" strokeWidth="16" strokeLinecap="round" />
      <circle cx="109" cy="103" r="9" fill="#590178" />
      <rect x="108" y="97" width="26" height="11" rx="5.5" fill="#590178" transform="rotate(-6 108 102)" />

      {/* Touch ripple at the fingertip contact point */}
      <circle className="cta-ripple" cx="133" cy="99" r="7" stroke="#fffefd" strokeOpacity="0.7" strokeWidth="2" />
      <circle className="cta-ripple cta-ripple--delayed" cx="133" cy="99" r="7" stroke="#fffefd" strokeOpacity="0.45" strokeWidth="2" />
    </svg>
  );
}
