"use client";

import { useEffect, useRef } from "react";

type ZoomGuardProps = {
  children: React.ReactNode;
};

/**
 * Counters browser zoom (Ctrl/Cmd +/-) by applying an inverse CSS scale
 * to a wrapper, inflating its layout box so the visible result stays
 * the same regardless of zoom level.
 *
 * Baseline is captured on mount, so a user's *initial* zoom is respected;
 * only subsequent zoom changes are neutralized. This avoids fighting OS
 * DPI scaling or a user's existing accessibility preference.
 */
export function ZoomGuard({ children }: ZoomGuardProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const baseRatio = window.devicePixelRatio || 1;

    const apply = () => {
      const zoom = (window.devicePixelRatio || 1) / baseRatio;

      // No measurable change — clear any inline styles we set.
      if (Math.abs(zoom - 1) < 0.005) {
        wrapper.style.transform = "";
        wrapper.style.transformOrigin = "";
        wrapper.style.width = "";
        wrapper.style.minHeight = "";
        return;
      }

      wrapper.style.transformOrigin = "0 0";
      wrapper.style.transform = `scale(${1 / zoom})`;
      wrapper.style.width = `${100 * zoom}%`;
      wrapper.style.minHeight = `${100 * zoom}vh`;
    };

    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  return <div ref={wrapperRef}>{children}</div>;
}
