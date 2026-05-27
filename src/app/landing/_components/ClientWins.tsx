// Ported from src/app/components/trusted-companies on the existing Scalixity
// landing. Hover-card descriptions/tags are placeholder content — replace
// with real positioning when finalized.
const EYEBROW = "AI solutions for data-driven companies";
const TITLE = "Our featured client wins";

type ClientLogo = {
  name: string;
  title: string;
  description: string;
  tags: string[];
  flag?: string;
};

const CLIENT_LOGOS: ClientLogo[] = [
  {
    name: "AOIN",
    title: "AOIN",
    description:
      "AI-powered platform built to scale operations and unlock data-driven decisions.",
    tags: ["AI", "India"],
    flag: "🇮🇳",
  },
  {
    name: "Pinegap",
    title: "Pinegap",
    description:
      "Modern web platform engineered for speed, scale, and conversion.",
    tags: ["SaaS", "India"],
    flag: "🇮🇳",
  },
  {
    name: "Ambitio",
    title: "Ambitio",
    description:
      "EdTech experience reimagined around real student outcomes and engagement.",
    tags: ["EdTech", "India"],
    flag: "🇮🇳",
  },
  {
    name: "Antis Overseas",
    title: "Antis Overseas",
    description:
      "Cross-border commerce platform powering logistics across markets.",
    tags: ["Logistics", "Global"],
    flag: "🌐",
  },
  {
    name: "Kyari",
    title: "Kyari",
    description:
      "D2C product experience built to drive loyalty and repeat purchase.",
    tags: ["D2C", "India"],
    flag: "🇮🇳",
  },
  {
    name: "Nakshatra Gyaan",
    title: "Nakshatra Gyaan",
    description:
      "Knowledge platform delivering personalized content at scale.",
    tags: ["Content", "India"],
    flag: "🇮🇳",
  },
];

export function ClientWins() {
  return (
    <section
      data-nav-bg="light"
      className="brand-section-light px-5 lg:px-10 pt-20 pb-24 lg:pt-32 lg:pb-32"
    >
      <p className="brand-eyebrow text-brand-ink-muted mb-8">{EYEBROW}</p>

      <h2 className="font-bricolage text-brand-display text-brand-ink max-w-[20ch]">
        {TITLE}
      </h2>

      <div className="mt-20 lg:mt-28 border-t border-brand-ink/10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-brand-ink/10">
          {CLIENT_LOGOS.map((logo) => (
            <ClientCard key={logo.name} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientCard({ logo }: { logo: ClientLogo }) {
  return (
    // [perspective] on the cell establishes the 3D context so the inner card's
    // rotateY reads as a perspective tilt, not a flat skew.
    <div className="group relative aspect-square bg-brand-bone flex items-center justify-center px-6 [perspective:1200px]">
      {/* Default state: logo only */}
      <span className="font-bricolage text-xl lg:text-2xl text-brand-ink text-center leading-tight transition-opacity duration-200 group-hover:opacity-0">
        {logo.name}
      </span>

      {/* Hover state: dark info card swings in from a rotated position */}
      <div
        className="
          absolute inset-2 lg:inset-3 z-10
          bg-brand-ink rounded-2xl
          p-5 lg:p-6
          flex flex-col justify-between text-brand-bone
          opacity-0 group-hover:opacity-100
          [transform:rotateY(30deg)]
          group-hover:[transform:rotateY(0deg)]
          transition-all duration-500 ease-brand-out
          pointer-events-none
        "
      >
        <div>
          <h3 className="font-bricolage text-2xl lg:text-3xl mb-3 leading-tight">
            {logo.title}
          </h3>
          <p className="font-albert text-xs lg:text-sm text-brand-bone-muted leading-relaxed">
            {logo.description}
          </p>
        </div>

        <div className="flex gap-2 flex-wrap">
          <span className="inline-flex items-center px-3 py-1.5 bg-brand-bone/10 rounded-md text-[10px] uppercase tracking-[0.12em] font-semibold">
            {logo.tags[0]}
          </span>
          {logo.tags[1] && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-bone/10 rounded-md text-[10px] uppercase tracking-[0.12em] font-semibold">
              {logo.flag && <span aria-hidden="true">{logo.flag}</span>}
              {logo.tags[1]}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
