// Showreel embeds a 4-video YouTube playlist that cycles continuously.
// Video IDs ported from src/app/components/youtube-projects on the existing
// Scalixity landing. Autoplay + mute is required by browser policy for
// programmatic playback; controls are hidden for a cleaner showreel feel.
//
// When `videoSrc` is passed (e.g. a service page's own hero clip from
// public/services/*.mp4) it renders that looping mp4 instead of the YouTube
// playlist.

import { LazyVideo } from "./LazyVideo";

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

export function ShowreelPlaceholder({ videoSrc }: { videoSrc?: string } = {}) {
  return (
    <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[36px] bg-brand-ink ring-1 ring-brand-bone-faint">
      {videoSrc ? (
        // poster="" — these service clips have no generated .jpg poster, so
        // skip the default <name>.jpg lookup (avoids a 404); the ink bg covers
        // the brief load.
        <LazyVideo
          src={videoSrc}
          poster=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <iframe
          src={SHOWREEL_SRC}
          title="Scalixity showreel"
          className="absolute inset-0 h-full w-full"
          allow="autoplay; encrypted-media; picture-in-picture"
          loading="lazy"
        />
      )}
    </div>
  );
}
