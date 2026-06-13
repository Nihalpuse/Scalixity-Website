"use client";

import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";

// MOCK PLACEHOLDER — "Our key strength" growth-stories block, adapted from the
// phenomenon careers "we build leaders from within" sticky-rows section. The
// LAYOUT + sticky scroll-fade match the source, but per brand rules the names,
// quotes and portraits are stand-ins (see /public/careers + /public/avatars)
// and the copy is forward-looking: it does NOT assert multi-year promotion
// timelines, which would predate Scalixity's 2024 founding. Swap in real
// teammates + photos before publishing.
const EYEBROW = "Our key strength";
const TITLE = "We grow leaders from within";
const LEAD =
  "We invest in the people who join us. You'll have mentorship from your first day and an individual growth plan after onboarding — so as Scalixity grows, you grow with it, taking on more ownership and stepping into leadership.";

type Story = {
  /** Short growth headline (left column). */
  headline: string;
  /** The growth story (center column). */
  story: string;
  /** A teammate's words about the person. */
  quote: string;
  /** Quote author (a different teammate). */
  name: string;
  position: string;
  avatar: string;
  /** Portrait of the story's subject (right column). */
  portrait: string;
};

const STORIES: Story[] = [
  {
    headline: "From product engineer toward technical lead",
    story:
      "Aarav started on core product work and has taken on more architectural ownership with every project — the kind of growth path we build for everyone who joins.",
    quote:
      "Aarav always brings something useful — a sharper approach, a cleaner pattern, or a different way to look at a problem. He mentored me when I joined and it made a real difference.",
    name: "Priya Menon",
    position: "Product Designer, Scalixity",
    avatar: "/avatars/priya.svg",
    portrait: "/careers/strength-1.svg",
  },
  {
    headline: "From product designer toward design lead",
    story:
      "Priya joined on product design and now sets the bar for design quality across the team, bringing structured thinking and mentorship to everyone she works with.",
    quote:
      "Priya sets a high bar and makes you want to match it. She sees design in a broader context, always supports the team, and gives clear, well-reasoned feedback.",
    name: "Rohan Gupta",
    position: "Delivery Lead, Scalixity",
    avatar: "/avatars/rohan.svg",
    portrait: "/careers/strength-2.svg",
  },
  {
    headline: "From delivery toward leading the team",
    story:
      "Rohan grew into coordinating delivery across projects — staying calm under pressure, keeping work on track, and helping teammates do their best work.",
    quote:
      "Rohan is the person you rely on to keep things moving. He stays focused, thinks ahead, and supports the whole team without ever making it about himself.",
    name: "Aarav Sharma",
    position: "Product Engineer, Scalixity",
    avatar: "/avatars/aarav.svg",
    portrait: "/careers/strength-3.svg",
  },
];

export function KeyStrength() {
  return (
    <section
      data-nav-bg="dark"
      className="bg-brand-ink text-brand-bone px-5 lg:px-10 pt-14 pb-14 lg:pt-24 lg:pb-24"
    >
      <p className="brand-eyebrow text-brand-bone-muted mb-6 lg:mb-8">
        <Scramble>{EYEBROW}</Scramble>
      </p>

      <h2 className="font-bricolage text-brand-display text-brand-bone max-w-[20ch]">
        <StaggerText>{TITLE}</StaggerText>
      </h2>

      <p className="mt-8 lg:mt-10 font-albert text-brand-body-lg text-brand-bone-muted max-w-2xl leading-relaxed">
        {LEAD}
      </p>

      <div className="mt-16 lg:mt-24">
        {STORIES.map((s, i) => (
          <StoryRow
            key={s.headline}
            story={s}
            isLast={i === STORIES.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

function StoryRow({ story, isLast }: { story: Story; isLast: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  // Portrait reveal — same in-view trigger + easing as the landing case/industry
  // images, but inverted to a zoom-OUT: the image starts enlarged and settles
  // to 100% as it fades in. Fires once. Reduced-motion users see it immediately.
  useEffect(() => {
    const el = imageWrapRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Last row has no follower — it never fades. (Same desktop-only pinned
    // scroll-fade as Problems: the outgoing row fades as the next covers it.)
    if (isLast) return;

    const el = ref.current;
    if (!el) return;

    const allowed =
      window.matchMedia("(min-width: 1024px)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!allowed) {
      el.style.opacity = "1";
      return;
    }

    const next = el.nextElementSibling as HTMLElement | null;
    if (!next) return;

    const update = () => {
      const elRect = el.getBoundingClientRect();
      const nextRect = next.getBoundingClientRect();
      const overlap = Math.max(0, elRect.bottom - nextRect.top);
      const ratio = elRect.height > 0 ? overlap / elRect.height : 0;
      let opacity = 1;
      if (ratio > 0.9) {
        opacity = Math.max(0, 1 - (ratio - 0.9) / 0.1);
      }
      el.style.opacity = String(opacity);
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isLast]);

  return (
    <div
      ref={ref}
      className="sticky top-20 lg:top-24 max-lg:static bg-brand-ink py-12 lg:py-16 border-t border-brand-bone/15 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
    >
      {/* Left: growth headline */}
      <div className="lg:col-span-3">
        <p className="font-albert text-lg lg:text-xl text-brand-bone leading-relaxed">
          {story.headline}
        </p>
      </div>

      {/* Center: story + teammate quote */}
      <div className="lg:col-span-6">
        <p className="font-albert text-xl lg:text-2xl text-brand-bone leading-relaxed">
          {story.story}
        </p>

        <figure className="relative mt-8 lg:mt-10 rounded-2xl bg-brand-surface p-6 lg:p-7">
          <Quote
            aria-hidden="true"
            className="absolute right-6 lg:right-7 top-6 lg:top-7 h-7 w-7 fill-brand-purple/20 text-brand-purple/40"
          />
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={story.avatar}
              alt={story.name}
              className="h-10 w-10 shrink-0 rounded-full object-cover"
            />
            <figcaption className="flex flex-col">
              <span className="font-albert text-sm text-brand-bone">
                {story.name}
              </span>
              <span className="font-albert text-sm text-brand-bone-muted">
                {story.position}
              </span>
            </figcaption>
          </div>
          <blockquote className="mt-5 font-albert text-base lg:text-lg text-brand-bone leading-relaxed">
            {story.quote}
          </blockquote>
        </figure>
      </div>

      {/* Right: portrait of the story's subject. The row is sticky-pinned on
          desktop (top-24), so cap the portrait to the remaining viewport height
          — top offset (6rem) + row padding (2×4rem) ≈ 14rem — otherwise a tall
          portrait overflows the pinned row and its bottom is clipped by the
          screen edge. Mobile (static row) keeps the full aspect and scrolls.
          Narrower column (col-span-3) tightens the right-side space; the
          aspect + max-h cap keep the portrait from growing taller. */}
      <div className="lg:col-span-3">
        <div
          ref={imageWrapRef}
          className={`relative aspect-[0.69] max-lg:max-h-[440px] lg:max-h-[calc(100vh_-_14rem)] overflow-hidden rounded-2xl transition-opacity duration-700 ease-brand-out ${
            revealed ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={story.portrait}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-brand-out ${
              revealed ? "scale-100" : "scale-110"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
