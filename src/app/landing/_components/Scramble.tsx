"use client";

import { useEffect, useRef, useState } from "react";

const ALPHABET_UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const ALPHABET_LOWER = "abcdefghijklmnopqrstuvwxyz";

function randomLetter(target: string): string {
  // Case-match the scramble char so text width and visual rhythm stay
  // stable as letters flip. Non-letters (whitespace, digits, punctuation)
  // are returned unchanged so they sit fixed while letters resolve.
  if (target >= "A" && target <= "Z") {
    return ALPHABET_UPPER[Math.floor(Math.random() * 26)];
  }
  if (target >= "a" && target <= "z") {
    return ALPHABET_LOWER[Math.floor(Math.random() * 26)];
  }
  return target;
}

type ScrambleProps = {
  /** The final text. Changing this triggers a fresh scramble. */
  children: string;
  /** Total animation length in milliseconds. Default 900ms. */
  duration?: number;
  /** Visibility threshold (0–1) that triggers the scramble. Default 0.2. */
  threshold?: number;
  className?: string;
};

/**
 * Alphabet-only text scramble. Each letter shows a random case-matched
 * letter until its resolve frame, then snaps to the target. Replays
 * every time the element enters the viewport.
 */
export function Scramble({
  children: text,
  duration = 900,
  threshold = 0.2,
  className,
}: ScrambleProps) {
  const [display, setDisplay] = useState(text);
  const rafRef = useRef<number | null>(null);
  const elRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const runScramble = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      const totalFrames = Math.max(20, Math.ceil(duration / 16.67));
      // Linear left-to-right resolution: each character's end frame is
      // strictly later than the previous one's, so the text decodes as
      // a clean wave from the first character to the last.
      const divisor = Math.max(1, text.length - 1);
      const endTimes = Array.from({ length: text.length }, (_, i) =>
        Math.floor(totalFrames * (0.3 + (i / divisor) * 0.7))
      );
      const scrambleChars: (string | undefined)[] = new Array(text.length);
      let frame = 0;

      const tick = () => {
        let output = "";
        let complete = 0;

        for (let i = 0; i < text.length; i++) {
          const target = text[i];
          const isLetter =
            (target >= "A" && target <= "Z") ||
            (target >= "a" && target <= "z");

          // Non-letters pass through immediately.
          if (!isLetter) {
            output += target;
            complete++;
            continue;
          }

          if (frame >= endTimes[i]) {
            output += target;
            complete++;
          } else {
            // Re-pick the random letter ~30% of frames so it visibly
            // flickers rather than holding one char too long.
            if (!scrambleChars[i] || Math.random() < 0.3) {
              scrambleChars[i] = randomLetter(target);
            }
            output += scrambleChars[i];
          }
        }

        setDisplay(output);

        if (complete < text.length) {
          rafRef.current = requestAnimationFrame(tick);
          frame++;
        } else {
          rafRef.current = null;
        }
      };

      tick();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            runScramble();
          }
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [text, duration, threshold]);

  return (
    // Outer span carries the accessible label so screen readers always
    // announce the final text, not the in-flight scrambled letters.
    <span ref={elRef} className={className} aria-label={text}>
      <span aria-hidden="true">{display}</span>
    </span>
  );
}
