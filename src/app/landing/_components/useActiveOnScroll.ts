"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-driven active-item tracking shared by the sticky-rail sections
 * (Services, Process, and the SaaS scroll slider).
 *
 * Picks the item whose vertical range spans a horizontal "probe" line
 * `probeRatio` of the way down the viewport (40% by default). Items fully
 * above the probe count as recently-passed (so the active state sticks
 * after you scroll past them); items fully below haven't been reached yet.
 *
 * Attach `setRef(i)` to each item in order, then read `activeIndex`.
 */
export function useActiveOnScroll(count: number, probeRatio = 0.4) {
  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef<Array<HTMLElement | null>>([]);

  const setRef = (i: number) => (el: HTMLElement | null) => {
    refs.current[i] = el;
  };

  useEffect(() => {
    const update = () => {
      const probe = window.innerHeight * probeRatio;
      let active = 0;

      for (let i = 0; i < count; i++) {
        const el = refs.current[i];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.bottom < probe) {
          active = i;
        } else if (rect.top <= probe) {
          active = i;
          break;
        } else {
          break;
        }
      }

      setActiveIndex(active);
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [count, probeRatio]);

  return { activeIndex, setRef };
}
