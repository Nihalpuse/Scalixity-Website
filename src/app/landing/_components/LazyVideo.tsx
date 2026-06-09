"use client";

import { useEffect, useRef, useState } from "react";

type LazyVideoProps = {
  /** H.264 MP4 source (always required as the fallback). */
  src: string;
  /** Optional smaller modern-codec source; offered first when present. */
  webmSrc?: string;
  /** First-frame image shown instantly while the clip buffers. */
  poster?: string;
  className?: string;
  /** How far outside the viewport (px) to begin fetching. */
  rootMargin?: string;
};

/**
 * Looping, muted, in-view-gated background video. Defers ALL network work
 * until the element nears the viewport, then plays; pauses again when it
 * scrolls away (frees decode/CPU/battery). Replaces the old
 * `autoPlay preload="auto"` pattern that fetched every clip on page load
 * regardless of scroll position — the main cause of slow first paint on the
 * landing and industry pages.
 *
 * Sources are mounted only after `load` flips true, so nothing is requested up
 * front; `el.load()` then picks up the freshly-mounted <source> children.
 */
export function LazyVideo({
  src,
  webmSrc,
  poster,
  className,
  rootMargin = "200px",
}: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(false);

  // Begin loading once the video nears the viewport.
  useEffect(() => {
    const el = ref.current;
    if (!el || load) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [load, rootMargin]);

  // After the sources mount, pull them in and play while visible / pause while
  // off-screen. Reduced-motion users get the first frame without playback.
  useEffect(() => {
    const el = ref.current;
    if (!el || !load) return;
    el.load();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !reduced) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [load]);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      aria-hidden="true"
      className={className}
    >
      {load && webmSrc && <source src={webmSrc} type="video/webm" />}
      {load && <source src={src} type="video/mp4" />}
    </video>
  );
}
