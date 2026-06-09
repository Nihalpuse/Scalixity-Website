"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";
import { useVideoPrefetch } from "@/src/app/landing/_components/useMobileEnv";

const EYEBROW = "Our team";
const TITLE = "Meet the people behind our projects";
const DESCRIPTION =
  "We believe great work doesn't come from titles — it comes from people. Ours think deeply, care fiercely, and take pride in what they build. From product leads and designers to developers, we share the same core: curiosity, honesty, and a hands-on commitment to doing things right.";

type Member = { name: string; role: string; image: string; video?: string };

// TODO: replace the placeholder clip with a per-person "saying hi" video at
// /videos/team/<name>.mp4 (or .webm). Until then every card hovers to the
// same Scalixity reel so the interaction is visible/testable.
const PLACEHOLDER_VIDEO = "/videos/Scalixity.mp4";

// Team preserved from the original About-us team (ourteam.tsx), grouped into
// the two tabs shown in the design.
const GROUPS: { key: string; label: string; members: Member[] }[] = [
  {
    key: "leadership",
    label: "Leadership",
    members: [
      { name: "Ashendra Sharma", role: "CEO", image: "/images/team/ashendra.png", video: PLACEHOLDER_VIDEO },
      { name: "Aryan Yadav", role: "CTO", image: "/images/team/aryan.png", video: PLACEHOLDER_VIDEO },
    ],
  },
  {
    key: "team",
    label: "Talented team",
    members: [
      { name: "Ojshav", role: "Tech Head", image: "/images/team/avatar2.png", video: PLACEHOLDER_VIDEO },
      { name: "Nihal", role: "Developer", image: "/images/team/avatar3.png", video: PLACEHOLDER_VIDEO },
      { name: "Rishabh", role: "Developer", image: "/images/team/avatar5.png", video: PLACEHOLDER_VIDEO },
    ],
  },
];

function MemberCard({ member }: { member: Member }) {
  const cardRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);
  // Falls back to the static image if the video is missing or fails to load.
  const [videoOk, setVideoOk] = useState(true);
  const hasVideo = Boolean(member.video) && videoOk;

  // Buffer the hover clip once the card nears the viewport so the first hover
  // plays instantly instead of waiting on a fetch.
  useVideoPrefetch(cardRef, videoRef, hasVideo);

  const handleEnter = () => {
    if (!hasVideo) return;
    setHovered(true);
    const v = videoRef.current;
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
  };

  const handleLeave = () => {
    setHovered(false);
    videoRef.current?.pause();
  };

  return (
    <article
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-brand-ink"
    >
      <Image
        src={member.image}
        alt={member.name}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
        className={`object-cover transition-opacity duration-500 ease-brand-out ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
      />

      {member.video && (
        <video
          ref={videoRef}
          src={member.video}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          onError={() => setVideoOk(false)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-brand-out ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {/* Name/role on a gradient scrim so they stay legible over both the
          photo and the video. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-ink via-brand-ink/70 to-transparent p-4 pt-12 lg:p-5 lg:pt-16">
        <h3 className="font-bricolage text-lg lg:text-xl text-brand-bone leading-tight">
          {member.name}
        </h3>
        <p className="brand-eyebrow text-brand-bone-soft mt-1">{member.role}</p>
      </div>
    </article>
  );
}

export function Team() {
  const [activeKey, setActiveKey] = useState(GROUPS[0].key);
  const active = GROUPS.find((g) => g.key === activeKey) ?? GROUPS[0];

  return (
    <section
      data-nav-bg="light"
      className="brand-section-light px-5 lg:px-10 pt-14 pb-14 lg:pt-24 lg:pb-24"
    >
      <p className="brand-eyebrow text-brand-ink-muted mb-6 lg:mb-8">
        <Scramble>{EYEBROW}</Scramble>
      </p>

      <h2 className="font-bricolage text-brand-display text-brand-ink mb-8 max-w-[20ch]">
        <StaggerText>{TITLE}</StaggerText>
      </h2>

      <p className="font-albert text-brand-body-lg text-brand-ink-muted max-w-2xl">
        {DESCRIPTION}
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mt-12 lg:mt-16 mb-10 lg:mb-12">
        {GROUPS.map((g) => {
          const isActive = g.key === activeKey;
          return (
            <button
              key={g.key}
              type="button"
              onClick={() => setActiveKey(g.key)}
              className={`px-6 py-3 rounded-md text-xs lg:text-sm font-semibold tracking-[0.14em] uppercase transition-colors duration-300 ease-brand-out ${
                isActive
                  ? "bg-brand-ink text-brand-bone"
                  : "bg-transparent text-brand-ink hover:bg-brand-ink/5"
              }`}
            >
              {g.label}
            </button>
          );
        })}
      </div>

      {/* Active group — full-bleed cards that play the member's clip on hover. */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6">
        {active.members.map((m) => (
          <MemberCard key={m.name} member={m} />
        ))}
      </div>
    </section>
  );
}
