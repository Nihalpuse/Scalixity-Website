"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedNumberProps = {
  /**
   * Final value to display. If it parses as `<number><suffix?>`
   * (e.g. "58%", "10+", "4", "5.0"), the number portion counts up
   * from 0 on viewport entry. Anything else (e.g. "30-60%") renders
   * as-is without animation.
   */
  value: string;
  /** Count-up duration in milliseconds. Default 1800ms. */
  duration?: number;
  /** IntersectionObserver threshold (0–1). Default 0.3. */
  threshold?: number;
  className?: string;
};

/**
 * Counts up from 0 to the parsed numeric value of `value` the first
 * time the element scrolls into view, then stays put. Uses the same
 * easeOutQuart curve as the existing Scalixity AnimatedCounter.
 */
export function AnimatedNumber({
  value,
  duration = 1800,
  threshold = 0.3,
  className,
}: AnimatedNumberProps) {
  const [display, setDisplay] = useState(value);
  const elRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Only animate "<digits>[.<digits>][%+]" patterns. Anything more
    // complex (ranges like "30-60%", currency, etc.) renders statically.
    const match = value.match(/^(\d+(?:\.\d+)?)([%+]?)$/);
    if (!match) return;

    const el = elRef.current;
    if (!el) return;

    const target = parseFloat(match[1]);
    const suffix = match[2] ?? "";
    const decimals = match[1].includes(".")
      ? match[1].split(".")[1].length
      : 0;

    let rafId: number | null = null;
    let hasRun = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun) return;
        hasRun = true;

        const startTime = performance.now();
        // Snap to 0 immediately so the count-up has somewhere to start
        // from instead of jumping from the final value.
        setDisplay(`0${suffix}`);

        const tick = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 4); // easeOutQuart
          const current = eased * target;
          setDisplay(`${current.toFixed(decimals)}${suffix}`);
          if (progress < 1) {
            rafId = requestAnimationFrame(tick);
          }
        };
        rafId = requestAnimationFrame(tick);
      },
      { threshold }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [value, duration, threshold]);

  return (
    <span ref={elRef} className={className}>
      {display}
    </span>
  );
}
