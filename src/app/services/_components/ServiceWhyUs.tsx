import {
  Users,
  UserPlus,
  Code2,
  MessageSquare,
  MessagesSquare,
  Layers,
  Gauge,
  Accessibility,
  Sparkles,
  Zap,
  Shield,
  ShieldCheck,
  Rocket,
  Search,
  PenTool,
  Smartphone,
  Globe,
  Database,
  Cpu,
  LineChart,
  BarChart3,
  Target,
  Workflow,
  Boxes,
  GitBranch,
  Lock,
  Eye,
  Palette,
  Wrench,
  Repeat,
  Clock,
  BadgeCheck,
  Compass,
  Lightbulb,
  TrendingUp,
  Puzzle,
  Server,
  Cloud,
  Heart,
  Handshake,
  Bot,
  Brain,
  Network,
  Settings2,
  Blocks,
  Component,
  Activity,
  Plug,
  Star,
  Timer,
  type LucideIcon,
} from "lucide-react";
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";
import type { ServiceBenefit } from "../services-content";

// "Why us" benefits grid (dark) for the dynamic /services/[slug] template.
// Each card shows a lucide icon resolved from `benefit.icon`. Extend ICONS as
// more services roll out; unknown/empty names fall back to Sparkles.
const ICONS: Record<string, LucideIcon> = {
  Users,
  UserPlus,
  Code2,
  MessageSquare,
  MessagesSquare,
  Layers,
  Gauge,
  Accessibility,
  Sparkles,
  Zap,
  Shield,
  ShieldCheck,
  Rocket,
  Search,
  PenTool,
  Smartphone,
  Globe,
  Database,
  Cpu,
  LineChart,
  BarChart3,
  Target,
  Workflow,
  Boxes,
  GitBranch,
  Lock,
  Eye,
  Palette,
  Wrench,
  Repeat,
  Clock,
  BadgeCheck,
  Compass,
  Lightbulb,
  TrendingUp,
  Puzzle,
  Server,
  Cloud,
  Heart,
  Handshake,
  Bot,
  Brain,
  Network,
  Settings2,
  Blocks,
  Component,
  Activity,
  Plug,
  Star,
  Timer,
};

export function ServiceWhyUs({
  title,
  benefits,
}: {
  title: string;
  benefits: ServiceBenefit[];
}) {
  return (
    <section className="relative bg-brand-ink text-brand-bone pt-14 pb-14 lg:pt-24 lg:pb-24">
      {/* Heading keeps the page gutter; the card grid below goes full-bleed. */}
      <div className="px-5 lg:px-10">
        <p className="brand-eyebrow text-brand-bone-muted mb-6 lg:mb-8">
          <Scramble>Why us</Scramble>
        </p>
        <h2 className="font-bricolage text-brand-display text-brand-bone max-w-[18ch]">
          <StaggerText>{title}</StaggerText>
        </h2>
      </div>

      <div className="mt-12 lg:mt-16 border-t border-brand-bone/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-bone/10">
          {benefits.map((b) => {
            const Icon = (b.icon && ICONS[b.icon]) || Sparkles;
            return (
              <article
                key={b.title}
                className="bg-brand-ink px-5 py-7 lg:px-10 lg:py-9 flex flex-col min-h-[260px]"
              >
                <Icon
                  className="h-10 w-10 lg:h-12 lg:w-12 text-brand-purple"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div className="mt-auto pt-12">
                  <h3 className="font-bricolage text-xl lg:text-2xl text-brand-bone leading-tight">
                    {b.title}
                  </h3>
                  <p className="mt-3 font-albert text-sm lg:text-base text-brand-bone-muted leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
