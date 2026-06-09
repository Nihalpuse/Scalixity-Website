"use client";

import { useEffect, useState, type RefObject } from "react";

/**
 * Shared client-side environment probes used by the landing sections to make
 * mobile/tablet behave well WITHOUT touching the desktop design.
 *
 * Both hooks start `false` so the SSR/first render matches a hover-capable
 * desktop exactly; they flip after mount only on the relevant device, so any
 * mobile-only behavior keyed off them can never alter the desktop render.
 */

/** True on pointer devices that cannot hover (phones, tablets incl. iPads). */
export function useIsTouch() {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: none)");
    const update = () => setIsTouch(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);
  return isTouch;
}

/** True when the user has asked the OS to minimize motion. */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);
  return reduced;
}

/**
 * Buffers a hover-triggered clip once its card nears the viewport, so the very
 * first hover plays instantly. The cards keep `preload="none"` in markup (no
 * eager fetch on landing); this only bumps the clip to `preload="auto"` and
 * calls `load()` when the card scrolls within `rootMargin` of the viewport —
 * cards still off-screen never fetch. Fires once, then disconnects.
 */
export function useVideoPrefetch(
  cardRef: RefObject<HTMLElement | null>,
  videoRef: RefObject<HTMLVideoElement | null>,
  enabled = true,
  rootMargin = "300px",
) {
  useEffect(() => {
    if (!enabled) return;
    const el = cardRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const v = videoRef.current;
        if (v) {
          v.preload = "auto";
          v.load();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [cardRef, videoRef, enabled, rootMargin]);
}
