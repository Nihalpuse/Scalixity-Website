// Team-voice quote grid (large quote mark → quote → author), appended at the
// bottom of the Life at Scalixity section — no heading of its own.
// MOCK PLACEHOLDER content: the names, roles, quotes, and initials-avatar
// images (public/avatars/*.svg) are stand-ins — replace with real team
// members (their own words + photos) before publishing.
type Voice = { quote: string; name: string; role: string; avatar: string };

const VOICES: Voice[] = [
  {
    quote:
      "There's no ego here — you can always ask for help, and people genuinely want you to do your best work. That's something I really value.",
    name: "Aarav Sharma",
    role: "Product Engineer",
    avatar: "/avatars/aarav.svg",
  },
  {
    quote:
      "What keeps me motivated is the team. Everyone cares about the craft, and that pushes me to keep raising my own bar.",
    name: "Priya Menon",
    role: "Product Designer",
    avatar: "/avatars/priya.svg",
  },
  {
    quote:
      "We work openly. Everyone brings something different, and that's what keeps our process improving and the team supported.",
    name: "Rohan Gupta",
    role: "Delivery Lead",
    avatar: "/avatars/rohan.svg",
  },
];

export function TeamVoices() {
  // Full-bleed: negative margins cancel the parent section's gutter so the
  // cards span edge to edge; each cell carries the px-5/px-10 gutter back so
  // the outer content still lines up with the heading above.
  return (
    <div className="mt-16 lg:mt-24 -mx-5 lg:-mx-10 border-t border-brand-ink/10">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {VOICES.map((v, i) => (
          <figure
            key={v.quote}
            className={`flex flex-col py-8 lg:py-12 px-5 lg:px-10 ${
              i === 0
                ? ""
                : "border-t border-brand-ink/10 md:border-t-0 md:border-l md:border-brand-ink/10"
            }`}
          >
            <span
              aria-hidden="true"
              className="font-bricolage text-5xl lg:text-6xl leading-none text-brand-ink/20"
            >
              &ldquo;
            </span>

            <blockquote className="mt-5 lg:mt-6 font-albert text-lg lg:text-xl text-brand-ink leading-snug">
              {v.quote}
            </blockquote>

            {/* mt-auto pins the author row to the bottom so uneven quote
                lengths still line up across the row. */}
            <figcaption className="mt-auto pt-8 lg:pt-10 flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={v.avatar}
                alt={v.name}
                className="h-10 w-10 shrink-0 rounded-full object-cover"
              />
              <span className="flex flex-col">
                <span className="font-albert text-sm text-brand-ink">{v.name}</span>
                <span className="font-albert text-sm text-brand-ink-muted">{v.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
