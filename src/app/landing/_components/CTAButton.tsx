import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark";

type CTAButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  /**
   * Set when the button sits on a light/bone background. Flips the
   * primary variant's hover reveal from bone (invisible on light bg)
   * to ink, and the hover text to bone so it reads on the dark reveal.
   */
  onLight?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
};

const REST_BY_VARIANT: Record<Variant, string> = {
  primary: "bg-brand-purple text-brand-bone",
  secondary: "bg-brand-bone-faint text-brand-bone border border-brand-bone-faint",
  ghost: "bg-brand-bone text-brand-ink",
  dark: "bg-brand-ink text-brand-bone",
};

const REVEAL_BY_VARIANT: Record<Variant, string> = {
  primary: "bg-brand-bone",
  secondary: "bg-brand-bone",
  ghost: "bg-brand-purple",
  dark: "bg-brand-purple",
};

const HOVER_TEXT_BY_VARIANT: Record<Variant, string> = {
  primary: "hover:text-brand-ink",
  secondary: "hover:text-brand-ink",
  ghost: "hover:text-brand-bone",
  dark: "hover:text-brand-ink",
};

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 18 12"
      aria-hidden="true"
      className={`h-3 w-[18px] fill-none stroke-current ${className}`}
      strokeWidth="1.6"
    >
      <path d="M1 6h16M12 1l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CTAButton({
  children,
  href,
  onClick,
  variant = "ghost",
  onLight = false,
  className = "",
  type = "button",
}: CTAButtonProps) {
  // On a light surface the default bone reveal washes out against the
  // bg. Swap to ink + bone-colored hover text for the primary variant.
  const isPrimaryOnLight = onLight && variant === "primary";
  const revealClass = isPrimaryOnLight
    ? "bg-brand-ink"
    : REVEAL_BY_VARIANT[variant];
  const hoverTextClass = isPrimaryOnLight
    ? "hover:text-brand-bone"
    : HOVER_TEXT_BY_VARIANT[variant];

  const baseClasses = [
    "group relative inline-flex items-center justify-center overflow-hidden",
    "rounded-brand-btn px-7 py-5",
    "text-sm font-semibold tracking-[0.14em] uppercase",
    "transition-colors duration-500 ease-brand-out",
    REST_BY_VARIANT[variant],
    hoverTextClass,
    className,
  ].join(" ");

  const content = (
    <>
      {/* Radial fill that expands from center on hover */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute left-1/2 top-1/2 aspect-square w-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-[width] duration-700 ease-brand-out group-hover:w-[150%] ${revealClass}`}
      />

      {/* Inline content: text + arrow centered as a group. Arrow slot expands/collapses on either side. */}
      <span className="relative z-[1] flex items-center justify-center">
        <span
          aria-hidden="true"
          className="flex items-center overflow-hidden w-0 opacity-0 transition-all duration-500 ease-brand-out group-hover:w-[30px] group-hover:opacity-100"
        >
          <Arrow className="shrink-0 mr-3" />
        </span>

        <span>{children}</span>

        <span
          aria-hidden="true"
          className="flex items-center justify-end overflow-hidden w-[30px] opacity-100 transition-all duration-500 ease-brand-out group-hover:w-0 group-hover:opacity-0"
        >
          <Arrow className="shrink-0 ml-3" />
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
}
