"use client";

import { useEffect, useState } from "react";

// Share row for an article — LinkedIn / Facebook / X + copy-link, adapted from
// the phenomenon article share block. Reads the live URL on the client so the
// share intents and the copied link are always correct.
export function ArticleShare() {
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const enc = encodeURIComponent(url);
  const targets = [
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc}`,
      icon: (
        <path d="M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3 8.98h4V21H3V8.98zM9 8.98h3.8v1.64h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.33c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.81V21H9V8.98z" />
      ),
    },
    {
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${enc}`,
      icon: (
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.87h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
      ),
    },
    {
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?url=${enc}`,
      icon: (
        <path d="M17.53 3H20.5l-6.49 7.41L21.75 21h-5.97l-4.68-6.12L5.74 21H2.77l6.94-7.93L2.25 3h6.12l4.23 5.59L17.53 3zm-1.05 16.2h1.65L7.6 4.71H5.83l10.65 14.49z" />
      ),
    },
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      {targets.map((t) => (
        <a
          key={t.label}
          href={t.href}
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label={t.label}
          className="grid h-11 w-11 place-items-center rounded-lg bg-brand-ink/[0.05] text-brand-ink transition-colors hover:bg-brand-ink hover:text-brand-bone"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-current">
            {t.icon}
          </svg>
        </a>
      ))}
      <button
        type="button"
        onClick={copy}
        aria-label="Copy link"
        className="inline-flex h-11 items-center gap-2 rounded-lg bg-brand-ink/[0.05] px-4 text-brand-ink transition-colors hover:bg-brand-ink/10"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-none stroke-current" strokeWidth="1.7">
          <path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07L11.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 0 0 7.07 7.07l1.32-1.32" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-albert text-xs font-semibold uppercase tracking-[0.12em]">
          {copied ? "Copied!" : "Copy link"}
        </span>
      </button>
    </div>
  );
}
