import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";
import { TeamVoices } from "./TeamVoices";

// Replaces the phenomenon "a bit more about us" team-quote block. Per brand
// rules we drop the named staff and fabricated quotes and keep an honest,
// first-person description of the culture instead.
const EYEBROW = "Life at Scalixity";
const TITLE = "A quality-first team that gives you room to do your best work";

const PARAGRAPHS = [
  "We're a small, senior team that cares about getting the details right. There's no hiding behind process here — you'll work directly on real products, make decisions that matter, and see your work reach users.",
  "We value curiosity, honesty, and ownership over titles. You'll have the space to question assumptions, propose better ways of doing things, and grow your craft alongside people who genuinely want to help you get there.",
];

export function LifeAtScalixity() {
  return (
    <section
      data-nav-bg="light"
      className="brand-section-light px-5 lg:px-10 pt-14 pb-14 lg:pt-24 lg:pb-24"
    >
      <p className="brand-eyebrow text-brand-ink-muted mb-6">
        <Scramble>{EYEBROW}</Scramble>
      </p>

      <h2 className="font-bricolage text-brand-display text-brand-ink mb-8 lg:mb-10 max-w-[20ch]">
        <StaggerText>{TITLE}</StaggerText>
      </h2>

      <div className="max-w-2xl flex flex-col gap-5">
        {PARAGRAPHS.map((p, i) => (
          <p
            key={i}
            className="font-albert text-brand-body-lg text-brand-ink-muted leading-relaxed"
          >
            {p}
          </p>
        ))}
      </div>

      {/* Team-voice quotes appended at the bottom of this section. */}
      <TeamVoices />
    </section>
  );
}
