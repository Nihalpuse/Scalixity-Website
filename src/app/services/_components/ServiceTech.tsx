import type { ElementType } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiMysql,
} from "react-icons/si";
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";

const EYEBROW = "Our stack";
const TITLE = "Technology we use";

// Name → icon mapping (ported from the legacy TechnologiesUsed).
const ICON_MAP: Record<string, ElementType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  Nextjs: SiNextdotjs,
  TypeScript: SiTypescript,
  Typescript: SiTypescript,
  Python: SiPython,
  MySQL: SiMysql,
  SQL: SiMysql,
};

export function ServiceTech({
  technologies,
}: {
  technologies: Array<{ name: string; icon?: string }>;
}) {
  if (!technologies || technologies.length === 0) return null;

  return (
    <section className="bg-brand-ink text-brand-bone px-5 lg:px-10 pt-14 pb-14 lg:pt-24 lg:pb-24">
      <p className="brand-eyebrow text-brand-bone-muted mb-6 lg:mb-8">
        <Scramble>{EYEBROW}</Scramble>
      </p>
      <h2 className="font-bricolage text-brand-display text-brand-bone mb-12 lg:mb-16">
        <StaggerText>{TITLE}</StaggerText>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
        {technologies.map((tech) => {
          // icon may be a URL string; otherwise map by name, else no glyph.
          const iconUrl =
            typeof tech.icon === "string" && tech.icon.length > 0
              ? tech.icon
              : null;
          const Icon = !iconUrl
            ? ICON_MAP[tech.name] ?? ICON_MAP[tech.name.toLowerCase()] ?? null
            : null;

          return (
            <div
              key={tech.name}
              className="rounded-2xl bg-brand-bone-faint p-6 flex flex-col items-center justify-center gap-4 text-center transition-colors duration-300 ease-brand-out hover:bg-brand-bone/[0.12]"
            >
              {Icon ? (
                <Icon className="h-10 w-10 text-brand-bone" aria-hidden="true" />
              ) : iconUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={iconUrl}
                  alt=""
                  aria-hidden="true"
                  className="h-10 w-10 object-contain"
                />
              ) : (
                <span className="font-bricolage text-2xl text-brand-bone">
                  {tech.name.charAt(0)}
                </span>
              )}
              <span className="font-bricolage text-base lg:text-lg text-brand-bone">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
