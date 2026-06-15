type CurvedDividerProps = {
  fromColor: "ink" | "bone";
  className?: string;
};

const FILL = {
  ink: "#080d10",
  bone: "#fffefd",
} as const;

// Smooth sine-wave seam, rendered as an SVG <path> filled with the "from"
// colour. The top is a solid bar; the bottom edge is a true curve (cubic
// béziers, not polyline segments — so no faceting/choppiness). Everything
// below the curve is transparent, revealing the next section — the same
// reveal the old notch used, so ink↔bone transitions keep working.
//
// preserveAspectRatio="none" stretches the path to the divider's full width
// (Y stays 1:1 with the px height, so no vertical distortion).
type Pt = [number, number];

function wavePath(
  width: number,
  height: number,
  amplitude: number,
  periods: number,
  pointsPerPeriod: number,
): string {
  const baseline = height / 2;
  const n = periods * pointsPerPeriod;
  const pts: Pt[] = [];
  for (let i = 0; i <= n; i++) {
    const x = (width * i) / n;
    const y = baseline + amplitude * Math.sin((i / pointsPerPeriod) * 2 * Math.PI);
    pts.push([x, y]);
  }

  const f = (v: number) => v.toFixed(2);
  // Catmull-Rom → cubic bézier through the samples for a smooth curve.
  let d = `M ${f(pts[0][0])} ${f(pts[0][1])}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${f(c1x)} ${f(c1y)}, ${f(c2x)} ${f(c2y)}, ${f(p2[0])} ${f(p2[1])}`;
  }
  // Close the top: down the right edge isn't needed — fill up to the top bar.
  d += ` L ${width} 0 L 0 0 Z`;
  return d;
}

// Desktop / tablet (≥768px): taller bar, more gentle periods.
const DESKTOP_W = 1440;
const DESKTOP_H = 80;
const DESKTOP_PATH = wavePath(DESKTOP_W, DESKTOP_H, 18, 7, 12);
// Phones (<768px): shorter bar, fewer periods so it stays soft, not busy.
const MOBILE_W = 420;
const MOBILE_H = 40;
const MOBILE_PATH = wavePath(MOBILE_W, MOBILE_H, 9, 4, 12);

export function CurvedDivider({ fromColor, className = "" }: CurvedDividerProps) {
  const fill = FILL[fromColor];
  return (
    <>
      {/* Desktop / tablet (≥768px) */}
      <svg
        aria-hidden="true"
        viewBox={`0 0 ${DESKTOP_W} ${DESKTOP_H}`}
        preserveAspectRatio="none"
        className={`hidden md:block w-full h-20 ${className}`}
      >
        <path d={DESKTOP_PATH} fill={fill} />
      </svg>
      {/* Phones (<768px) */}
      <svg
        aria-hidden="true"
        viewBox={`0 0 ${MOBILE_W} ${MOBILE_H}`}
        preserveAspectRatio="none"
        className={`block md:hidden w-full h-10 ${className}`}
      >
        <path d={MOBILE_PATH} fill={fill} />
      </svg>
    </>
  );
}
