"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { LegalBlock, LegalSection } from "./LegalLayout";

type Card = {
  title?: string;
  rows: { label: string; value: string; href?: string }[];
};

function Block({ block }: { block: LegalBlock }) {
  if ("p" in block) {
    return (
      <p className="mt-4 font-albert text-base lg:text-lg text-brand-ink-muted leading-relaxed">
        {block.p}
      </p>
    );
  }
  if ("note" in block) {
    return (
      <div className="mt-5 rounded-2xl bg-brand-ink/[0.04] p-5 lg:p-6 font-albert text-base lg:text-lg text-brand-ink-muted leading-relaxed">
        {block.note}
      </div>
    );
  }
  if ("subhead" in block) {
    return (
      <p className="mt-6 font-bricolage text-lg text-brand-ink font-semibold">
        {block.subhead}
      </p>
    );
  }
  if ("card" in block) {
    return <ContactCard card={block.card} />;
  }
  const Tag = block.ordered ? "ol" : "ul";
  return (
    <Tag
      className={`mt-4 pl-5 space-y-2.5 marker:text-brand-purple font-albert text-base lg:text-lg text-brand-ink-muted leading-relaxed ${
        block.ordered ? "list-decimal" : "list-disc"
      }`}
    >
      {block.list.map((it, i) => (
        <li key={i} className="pl-1">
          {typeof it === "string" ? (
            it
          ) : (
            <>
              <strong className="text-brand-ink font-semibold">
                {it.term}:
              </strong>{" "}
              {it.text}
            </>
          )}
        </li>
      ))}
    </Tag>
  );
}

function ContactCard({ card }: { card: Card }) {
  return (
    <div className="mt-5 rounded-2xl bg-brand-ink/[0.04] p-6 lg:p-8 flex flex-col gap-3">
      {card.title && (
        <p className="font-bricolage text-lg text-brand-ink font-semibold">
          {card.title}
        </p>
      )}
      {card.rows.map((r) => (
        <p key={r.label} className="font-albert text-base text-brand-ink-muted">
          <strong className="text-brand-ink font-semibold">{r.label}:</strong>{" "}
          {r.href ? (
            <a
              href={r.href}
              className="text-brand-purple underline underline-offset-2 hover:text-brand-purple-hover transition-colors break-words"
            >
              {r.value}
            </a>
          ) : (
            r.value
          )}
        </p>
      ))}
    </div>
  );
}

type Pt = { x: number; y: number };

// Smooth curve through every point (Catmull-Rom → cubic bezier).
function buildPath(points: Pt[]): string {
  if (points.length < 2) return "";
  const f = (n: number) => n.toFixed(1);
  let d = `M ${f(points[0].x)} ${f(points[0].y)}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${f(c1x)} ${f(c1y)}, ${f(c2x)} ${f(c2y)}, ${f(p2.x)} ${f(p2.y)}`;
  }
  return d;
}

export function LegalBody({ sections }: { sections: LegalSection[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headingRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const [dims, setDims] = useState({ w: 0, h: 0 });
  const [points, setPoints] = useState<Pt[]>([]);
  const [progress, setProgress] = useState(0);
  const clipId = "legal-track-" + useId().replace(/:/g, "");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = () => window.matchMedia("(min-width: 1024px)").matches;

    const measure = () => {
      const track = trackRef.current;
      if (!track || !isDesktop()) {
        setPoints([]);
        return;
      }
      const w = track.offsetWidth;
      const h = track.offsetHeight;
      const trackTop = track.offsetTop;
      const pts = headingRefs.current
        .map((hEl, i) => {
          if (!hEl) return null;
          const y = hEl.offsetTop - trackTop + hEl.offsetHeight / 2;
          const x = i % 2 === 0 ? w * 0.34 : w * 0.66;
          return { x, y } as Pt;
        })
        .filter((p): p is Pt => p !== null);
      setDims({ w, h });
      setPoints(pts);
    };

    const updateProgress = () => {
      const c = containerRef.current;
      if (!c) return;
      if (reduce || !isDesktop()) {
        setProgress(c.offsetHeight);
        return;
      }
      const rect = c.getBoundingClientRect();
      const readerY = window.innerHeight * 0.4;
      setProgress(Math.max(0, Math.min(rect.height, readerY - rect.top)));
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateProgress();
        ticking = false;
      });
    };
    const onResize = () => {
      measure();
      updateProgress();
    };

    measure();
    updateProgress();

    const ro = new ResizeObserver(onResize);
    if (containerRef.current) ro.observe(containerRef.current);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    // Re-measure once fonts/layout settle.
    const t = setTimeout(onResize, 350);

    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      clearTimeout(t);
    };
  }, [sections]);

  const pathD = buildPath(points);
  const showTrack = points.length >= 2 && dims.w > 0;

  return (
    <div
      ref={containerRef}
      className="relative lg:grid lg:grid-cols-[minmax(0,46rem)_1fr] lg:gap-10 xl:gap-16"
    >
      <div className="max-w-3xl lg:max-w-none">
        {sections.map((s, i) => (
          <section key={s.heading} className="mt-14 first:mt-0 scroll-mt-28">
            <h2
              ref={(el) => {
                headingRefs.current[i] = el;
              }}
              className="font-bricolage text-2xl lg:text-3xl text-brand-ink leading-tight mb-5"
            >
              {s.heading}
            </h2>
            {s.blocks.map((b, j) => (
              <Block key={j} block={b} />
            ))}
          </section>
        ))}
      </div>

      {/* Decorative scroll-tracking line threading through each section (desktop only). */}
      <div ref={trackRef} className="hidden lg:block relative" aria-hidden="true">
        {showTrack && (
          <svg
            width={dims.w}
            height={dims.h}
            viewBox={`0 0 ${dims.w} ${dims.h}`}
            fill="none"
            className="absolute inset-0 overflow-visible"
          >
            <defs>
              <clipPath id={clipId}>
                <rect x="0" y="0" width={dims.w} height={Math.max(0, progress)} />
              </clipPath>
            </defs>

            {/* Base rail */}
            <path
              d={pathD}
              className="stroke-brand-ink/10"
              strokeWidth={1.5}
              strokeLinecap="round"
            />
            {/* Scrolled-through portion */}
            <path
              d={pathD}
              className="stroke-brand-purple"
              strokeWidth={1.5}
              strokeLinecap="round"
              clipPath={`url(#${clipId})`}
            />

            {/* Nodes */}
            {points.map((p, i) => {
              const active = p.y <= progress + 1;
              return (
                <g key={i}>
                  {active && (
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r={11}
                      className="fill-brand-purple/10"
                    />
                  )}
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={active ? 5 : 4}
                    strokeWidth={1.5}
                    className={
                      active
                        ? "fill-brand-purple stroke-brand-purple"
                        : "fill-brand-bone stroke-brand-ink/20"
                    }
                  />
                </g>
              );
            })}
          </svg>
        )}
      </div>
    </div>
  );
}
