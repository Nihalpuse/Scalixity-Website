type CurvedDividerProps = {
  fromColor: "ink" | "bone";
  className?: string;
};

const FILL = {
  ink: "#080d10",
  bone: "#fffefd",
} as const;

// Exact `clip-path` geometry lifted from the reference stylesheet's
// `.clipped-bottom` rule (fixed-pixel, centered): a solid bar of the
// "from" colour whose bottom edge carves into a centred tongue flanked by
// two notches. The bar is 80px tall; the notch reaches 74px deep
// (`calc(100% - 74px)` → 6px from the top), and a `border-radius` of 80px
// on the bottom corners restores the rounded left/right edges (the
// reference's `radius-80` / `0 0 80px 80px` on the dark sections). The
// clip-path and border-radius compose — the visible area is their
// intersection, so the corners round inward while the centre keeps the
// notch.
const NOTCH = `polygon(
  0 0,
  100% 0,
  100% 100%,
  calc(50% + 93px) calc(100% - 0.74px),
  calc(50% + 86px) calc(100% - 1.48px),
  calc(50% + 81px) calc(100% - 2.96px),
  calc(50% + 75px) calc(100% - 5.92px),
  calc(50% + 68px) calc(100% - 10.36px),
  calc(50% + 63.5px) calc(100% - 14.06px),
  calc(50% + 58px) calc(100% - 19.24px),
  calc(50% + 53px) calc(100% - 24.42px),
  calc(50% + 48px) calc(100% - 30.34px),
  calc(50% + 44px) calc(100% - 35.52px),
  calc(50% + 40px) calc(100% - 42.18px),
  calc(50% + 36px) calc(100% - 48.84px),
  calc(50% + 33px) calc(100% - 55.5px),
  calc(50% + 31px) calc(100% - 61.42px),
  calc(50% + 29px) calc(100% - 67.34px),
  calc(50% + 27px) calc(100% - 74px),
  calc(50% + 22px) calc(100% - 74px),
  calc(50% + 28px) calc(100% - 39.96px),
  calc(50% + 29px) calc(100% - 28.12px),
  calc(50% + 30px) 100%,
  calc(50% - 30px) 100%,
  calc(50% - 29px) calc(100% - 28.12px),
  calc(50% - 28px) calc(100% - 39.96px),
  calc(50% - 22px) calc(100% - 74px),
  calc(50% - 27px) calc(100% - 74px),
  calc(50% - 29px) calc(100% - 67.34px),
  calc(50% - 31px) calc(100% - 61.42px),
  calc(50% - 33px) calc(100% - 55.5px),
  calc(50% - 36px) calc(100% - 48.84px),
  calc(50% - 40px) calc(100% - 42.18px),
  calc(50% - 44px) calc(100% - 35.52px),
  calc(50% - 48px) calc(100% - 30.34px),
  calc(50% - 53px) calc(100% - 24.42px),
  calc(50% - 58px) calc(100% - 19.24px),
  calc(50% - 63.5px) calc(100% - 14.06px),
  calc(50% - 68px) calc(100% - 10.36px),
  calc(50% - 75px) calc(100% - 5.92px),
  calc(50% - 81px) calc(100% - 2.96px),
  calc(50% - 86px) calc(100% - 1.48px),
  calc(50% - 93px) calc(100% - 0.74px),
  0 100%
)`;

export function CurvedDivider({ fromColor, className = "" }: CurvedDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`block w-full h-20 ${className}`}
      style={{
        backgroundColor: FILL[fromColor],
        borderBottomLeftRadius: "80px",
        borderBottomRightRadius: "80px",
        clipPath: NOTCH,
        WebkitClipPath: NOTCH,
      }}
    />
  );
}
