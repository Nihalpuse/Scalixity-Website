type CurvedDividerProps = {
  fromColor: "ink" | "bone";
  className?: string;
};

const FILL = {
  ink: "#080d10",
  bone: "#fffefd",
} as const;

export function CurvedDivider({ fromColor, className = "" }: CurvedDividerProps) {
  const fill = FILL[fromColor];

  return (
    <svg
      aria-hidden="true"
      preserveAspectRatio="none"
      viewBox="0 0 1440 80"
      className={`block w-full h-[40px] md:h-[64px] lg:h-[80px] ${className}`}
    >
      <path
        d="
          M 0,0
          H 1440
          C 1440,36 1404,80 1360,80
          H 760
          C 752,80 750,38 744,38
          C 738,38 736,80 728,80
          H 712
          C 704,80 702,38 696,38
          C 690,38 688,80 680,80
          H 80
          C 36,80 0,36 0,0
          Z
        "
        fill={fill}
      />
    </svg>
  );
}
