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
const DESKTOP_NOTCH = `polygon(
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

// Phone (<md) variant: the same notch at ~half scale on a shorter 40px bar
// with 32px corners (mirrors the reference's `radius-32-mob` + compact
// mobile clipped-bottom). At full desktop scale the ±93px notch + 80px
// corners overwhelm a ~390px viewport (giant "ears", thin centre tongue);
// halving the geometry keeps a compact, centred notch with flat shoulders.
const MOBILE_NOTCH = `polygon(
  0 0,
  100% 0,
  100% 100%,
  calc(50% + 46.5px) calc(100% - 0.37px),
  calc(50% + 43px) calc(100% - 0.74px),
  calc(50% + 40.5px) calc(100% - 1.48px),
  calc(50% + 37.5px) calc(100% - 2.96px),
  calc(50% + 34px) calc(100% - 5.18px),
  calc(50% + 31.75px) calc(100% - 7.03px),
  calc(50% + 29px) calc(100% - 9.62px),
  calc(50% + 26.5px) calc(100% - 12.21px),
  calc(50% + 24px) calc(100% - 15.17px),
  calc(50% + 22px) calc(100% - 17.76px),
  calc(50% + 20px) calc(100% - 21.09px),
  calc(50% + 18px) calc(100% - 24.42px),
  calc(50% + 16.5px) calc(100% - 27.75px),
  calc(50% + 15.5px) calc(100% - 30.71px),
  calc(50% + 14.5px) calc(100% - 33.67px),
  calc(50% + 13.5px) calc(100% - 37px),
  calc(50% + 11px) calc(100% - 37px),
  calc(50% + 14px) calc(100% - 19.98px),
  calc(50% + 14.5px) calc(100% - 14.06px),
  calc(50% + 15px) 100%,
  calc(50% - 15px) 100%,
  calc(50% - 14.5px) calc(100% - 14.06px),
  calc(50% - 14px) calc(100% - 19.98px),
  calc(50% - 11px) calc(100% - 37px),
  calc(50% - 13.5px) calc(100% - 37px),
  calc(50% - 14.5px) calc(100% - 33.67px),
  calc(50% - 15.5px) calc(100% - 30.71px),
  calc(50% - 16.5px) calc(100% - 27.75px),
  calc(50% - 18px) calc(100% - 24.42px),
  calc(50% - 20px) calc(100% - 21.09px),
  calc(50% - 22px) calc(100% - 17.76px),
  calc(50% - 24px) calc(100% - 15.17px),
  calc(50% - 26.5px) calc(100% - 12.21px),
  calc(50% - 29px) calc(100% - 9.62px),
  calc(50% - 31.75px) calc(100% - 7.03px),
  calc(50% - 34px) calc(100% - 5.18px),
  calc(50% - 37.5px) calc(100% - 2.96px),
  calc(50% - 40.5px) calc(100% - 1.48px),
  calc(50% - 43px) calc(100% - 0.74px),
  calc(50% - 46.5px) calc(100% - 0.37px),
  0 100%
)`;

export function CurvedDivider({ fromColor, className = "" }: CurvedDividerProps) {
  return (
    <>
      {/* Desktop / tablet (≥768px): unchanged reference geometry. */}
      <div
        aria-hidden="true"
        className={`hidden md:block w-full h-20 ${className}`}
        style={{
          backgroundColor: FILL[fromColor],
          borderBottomLeftRadius: "80px",
          borderBottomRightRadius: "80px",
          clipPath: DESKTOP_NOTCH,
          WebkitClipPath: DESKTOP_NOTCH,
        }}
      />
      {/* Phones (<768px): compact, ~half-scale notch + 32px corners. */}
      <div
        aria-hidden="true"
        className={`block md:hidden w-full h-10 ${className}`}
        style={{
          backgroundColor: FILL[fromColor],
          borderBottomLeftRadius: "32px",
          borderBottomRightRadius: "32px",
          clipPath: MOBILE_NOTCH,
          WebkitClipPath: MOBILE_NOTCH,
        }}
      />
    </>
  );
}
