// Faint dotted world map with flag markers. The continents come from a real
// lightweight SVG world map (public/images/world-map.svg, MIT — flekschas/
// simple-world-map) used as a CSS mask over a dot pattern, so only the
// landmasses are dotted — matching the phenomenon locations look.
//
// Marker x/y are percentages within that map's viewBox, computed from each
// country's path centroid, so the flags land on their countries. They
// illustrate the regions Scalixity collaborates across, not offices.

type Marker = { code: string; label: string; x: number; y: number };

const MARKERS: Marker[] = [
  { code: "us", label: "United States", x: 20.7, y: 38.7 },
  { code: "ca", label: "Canada", x: 22.8, y: 23 },
  { code: "br", label: "Brazil", x: 31.2, y: 71.5 },
  { code: "gb", label: "United Kingdom", x: 47.3, y: 30.6 },
  { code: "de", label: "Germany", x: 50.9, y: 33 },
  { code: "ae", label: "United Arab Emirates", x: 64.2, y: 49.2 },
  { code: "in", label: "India", x: 72.8, y: 50.4 },
  { code: "sg", label: "Singapore", x: 80.2, y: 62.3 },
  { code: "au", label: "Australia", x: 87.7, y: 81.4 },
];

// Connector lines between marker indices (faint, dashed).
const LINES: [number, number][] = [
  [1, 0], // Canada → US
  [0, 3], // US → UK
  [4, 6], // Germany → India
  [6, 7], // India → Singapore
  [7, 8], // Singapore → Australia
  [5, 6], // UAE → India
];

const MAP_URL = "/images/world-map.svg";

// Dot pattern clipped to the continents via the world-map mask.
const DOTTED_MAP: React.CSSProperties = {
  backgroundImage:
    "radial-gradient(circle, rgba(8,13,16,0.32) 0.9px, transparent 1.3px)",
  backgroundSize: "11px 11px",
  WebkitMaskImage: `url(${MAP_URL})`,
  maskImage: `url(${MAP_URL})`,
  WebkitMaskSize: "100% 100%",
  maskSize: "100% 100%",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
};

export function WorldMap() {
  return (
    <div
      role="img"
      aria-label="A world map highlighting the regions Scalixity collaborates across"
      className="relative mx-auto w-full max-w-5xl"
      style={{ aspectRatio: "784.077 / 458.627" }}
    >
      {/* Dotted continents */}
      <div className="absolute inset-0 opacity-90" style={DOTTED_MAP} />

      {/* Connector lines */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {LINES.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={MARKERS[a].x}
            y1={MARKERS[a].y}
            x2={MARKERS[b].x}
            y2={MARKERS[b].y}
            stroke="rgba(8,13,16,0.18)"
            strokeWidth={0.12}
            strokeDasharray="0.7 0.7"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      {/* Flag markers */}
      {MARKERS.map((m) => (
        <div
          key={m.label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${m.x}%`, top: `${m.y}%` }}
          title={m.label}
        >
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-brand-purple/15"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/flags/${m.code}.svg`}
            alt={`${m.label} flag`}
            className="relative block h-5 w-7 rounded-[3px] object-cover shadow-[0_4px_14px_-4px_rgba(8,13,16,0.45)] ring-1 ring-brand-ink/10"
          />
        </div>
      ))}
    </div>
  );
}
