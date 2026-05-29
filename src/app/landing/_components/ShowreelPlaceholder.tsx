// Showreel embeds a 4-video YouTube playlist that cycles continuously.
// Video IDs ported from src/app/components/youtube-projects on the existing
// Scalixity landing. Autoplay + mute is required by browser policy for
// programmatic playback; controls are hidden for a cleaner showreel feel.

const VIDEO_IDS = [
  "EZhu3rh-LB4",
  "cMpIZsZROAc",
  "gtBVvFeRm-4",
  "JpRnWuI4aLU",
] as const;

const [firstVideo, ...restVideos] = VIDEO_IDS;
// `playlist` lists the *subsequent* videos to play after `firstVideo`.
// `loop=1` cycles the whole sequence back to the start once it finishes.
const SHOWREEL_SRC = `https://www.youtube-nocookie.com/embed/${firstVideo}?playlist=${restVideos.join(
  ","
)}&autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3`;

type ShowreelPlaceholderProps = {
  label: string;
};

export function ShowreelPlaceholder({ label }: ShowreelPlaceholderProps) {
  return (
    <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[36px] bg-brand-ink ring-1 ring-brand-bone-faint">
      <iframe
        src={SHOWREEL_SRC}
        title="Scalixity showreel"
        className="absolute inset-0 h-full w-full"
        allow="autoplay; encrypted-media; picture-in-picture"
        loading="lazy"
        // The videos play muted with no controls, so there's nothing to
        // interact with inside the frame — disable pointer events so the
        // showreel reads as ambient motion and clicks pass through to any
        // parent overlay (e.g., the label).
        style={{ pointerEvents: "none" }}
      />

      {/* Showreel label overlay, sits above the video as a static badge. */}
      <div className="pointer-events-none absolute inset-0 flex items-end p-6 lg:p-8">
        <span className="flex items-center gap-2 text-brand-bone text-xs tracking-[0.18em] font-medium uppercase">
          <span className="grid place-items-center h-5 w-5 rounded-full border border-brand-bone">
            <svg viewBox="0 0 10 10" className="h-2 w-2 fill-brand-bone">
              <path d="M1 0v10l8-5z" />
            </svg>
          </span>
          {label}
        </span>
      </div>
    </div>
  );
}
