"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type StaggerTextProps = {
  /** The text to reveal. Re-fires on each viewport entry. */
  children: string;
  /** Delay between each word's animation start, in ms. Default 60ms. */
  stagger?: number;
  /** How long each word takes to slide into place, in ms. Default 700ms. */
  duration?: number;
  /** Visibility threshold (0–1) that triggers the reveal. Default 0.2. */
  threshold?: number;
  /** Re-play when element scrolls back into view. Default true. */
  replay?: boolean;
  className?: string;
};

/**
 * Word-by-word staggered reveal: each word starts hidden below an
 * overflow-clipped mask and slides up into view with a small delay
 * between words, producing the classic "phenomenon-style" headline
 * reveal. Replays every time the element re-enters the viewport.
 */
export function StaggerText({
  children: text,
  stagger = 60,
  duration = 700,
  threshold = 0.2,
  replay = true,
  className,
}: StaggerTextProps) {
  const [visible, setVisible] = useState(false);
  const elRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else if (replay) {
          setVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, replay]);

  // Split on whitespace boundaries but preserve the whitespace tokens
  // so word spacing renders naturally in the inline flow.
  const tokens = text.split(/(\s+)/);
  let wordIndex = 0;

  return (
    // aria-label carries the full text so screen readers announce it
    // once instead of word-by-word from the visual spans.
    <span ref={elRef} className={className} aria-label={text}>
      {tokens.map((token, i) => {
        if (/^\s+$/.test(token)) {
          return (
            <span key={i} aria-hidden="true">
              {token}
            </span>
          );
        }
        const idx = wordIndex++;
        const style: CSSProperties = {
          transform: visible ? "translateY(0)" : "translateY(110%)",
          transition: `transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`,
          transitionDelay: visible ? `${idx * stagger}ms` : "0ms",
        };
        return (
          // Outer span clips its content. The pb gives descenders (g, p,
          // y, etc.) breathing room so the final letter shapes aren't
          // shaved off at the bottom of the clip rectangle.
          <span
            key={i}
            aria-hidden="true"
            className="inline-block overflow-hidden align-bottom pb-[0.15em]"
          >
            <span
              className="inline-block will-change-transform"
              style={style}
            >
              {token}
            </span>
          </span>
        );
      })}
    </span>
  );
}
