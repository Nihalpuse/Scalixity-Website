"use client";

import { useState, type ComponentType } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiSolid,
  SiAstro,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPhp,
  SiLaravel,
  SiWordpress,
  SiWebflow,
  SiAmazonwebservices,
  SiDigitalocean,
  SiCloudflare,
  SiDocker,
  SiGithubactions,
  SiKubernetes,
  SiSwift,
  SiKotlin,
  SiFlutter,
  SiShadcnui,
  SiRadixui,
  SiMui,
  SiAntdesign,
  SiPrimereact,
  SiChakraui,
} from "react-icons/si";
import { Boxes } from "lucide-react";
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";

const DEFAULT_EYEBROW = "Technology stack";
const DEFAULT_TITLE = "Frameworks & tools we use";

type TechIcon = ComponentType<{ className?: string }>;
type Tech = { name: string; Icon: TechIcon };

// Fallback for brands without a Simple Icon (Bubble, Carbon Design System).
const Fallback: TechIcon = Boxes;

const TABS: { label: string; items: Tech[] }[] = [
  {
    label: "Frontend",
    items: [
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Solid.js", Icon: SiSolid },
      { name: "Astro", Icon: SiAstro },
      { name: "TypeScript", Icon: SiTypescript },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express.js", Icon: SiExpress },
      { name: "Nest.js", Icon: SiNestjs },
      { name: "PHP", Icon: SiPhp },
      { name: "Laravel", Icon: SiLaravel },
      { name: "TypeScript", Icon: SiTypescript },
    ],
  },
  {
    label: "CMS",
    items: [
      { name: "WordPress", Icon: SiWordpress },
      { name: "Webflow", Icon: SiWebflow },
    ],
  },
  {
    label: "Server",
    items: [
      { name: "Amazon Web Services", Icon: SiAmazonwebservices },
      { name: "Digital Ocean", Icon: SiDigitalocean },
      { name: "Cloudflare", Icon: SiCloudflare },
      { name: "Docker", Icon: SiDocker },
      { name: "GitLab / GitHub CI/CD", Icon: SiGithubactions },
      { name: "Kubernetes", Icon: SiKubernetes },
    ],
  },
  {
    label: "Mobile",
    items: [
      { name: "Swift", Icon: SiSwift },
      { name: "Kotlin", Icon: SiKotlin },
      { name: "React Native", Icon: SiReact },
      { name: "Flutter", Icon: SiFlutter },
    ],
  },
  {
    label: "No-code",
    items: [
      { name: "FlutterFlow", Icon: SiFlutter },
      { name: "Bubble", Icon: Fallback },
      { name: "Webflow", Icon: SiWebflow },
    ],
  },
  {
    label: "Pre-made libraries",
    items: [
      { name: "Shadcn", Icon: SiShadcnui },
      { name: "Radix", Icon: SiRadixui },
      { name: "MUI", Icon: SiMui },
      { name: "Ant Design", Icon: SiAntdesign },
      { name: "PrimeReact", Icon: SiPrimereact },
      { name: "Carbon Design System", Icon: Fallback },
      { name: "Chakra UI", Icon: SiChakraui },
    ],
  },
];

export function IndustryTechStack({
  eyebrow = DEFAULT_EYEBROW,
  title = DEFAULT_TITLE,
}: {
  eyebrow?: string;
  title?: string;
} = {}) {
  const [active, setActive] = useState(0);
  const items = TABS[active].items;

  return (
    <section
      data-nav-bg="light"
      className="brand-section-light px-5 lg:px-10 pt-14 pb-14 lg:pt-24 lg:pb-24"
    >
      <p className="brand-eyebrow text-brand-ink-muted mb-8">
        <Scramble>{eyebrow}</Scramble>
      </p>
      <h2 className="font-bricolage text-brand-display text-brand-ink max-w-[22ch]">
        <StaggerText>{title}</StaggerText>
      </h2>

      {/* Tab buttons */}
      <div className="mt-10 lg:mt-12 flex flex-wrap gap-2">
        {TABS.map((tab, i) => {
          const isActive = i === active;
          return (
            <button
              key={tab.label}
              type="button"
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-md text-xs uppercase tracking-[0.12em] font-semibold transition-colors ${
                isActive
                  ? "bg-brand-ink text-brand-bone"
                  : "bg-brand-ink/[0.05] text-brand-ink hover:bg-brand-ink/10"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Items grid — full-width top divider, interior dividers between
          cells, no outer left/right/bottom box. */}
      <div className="mt-10 lg:mt-12 border-t border-brand-ink/10 overflow-hidden">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 -mr-px -mb-px">
          {items.map((tech) => {
            const { Icon } = tech;
            return (
              <div
                key={tech.name}
                className="p-6 lg:p-8 min-h-[150px] lg:min-h-[200px] flex flex-col justify-between gap-10 border-r border-b border-brand-ink/10"
              >
                <Icon className="h-8 w-8 text-brand-ink/40" />
                <span className="font-bricolage text-lg lg:text-xl text-brand-ink leading-tight">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
