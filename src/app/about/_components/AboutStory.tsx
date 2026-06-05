import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";

// "What grounded us then, and still does" — adapted from the phenomenon
// about-us narrative, rebranded to Scalixity and stripped of named founders.
const EYEBROW = "What grounds us";
const TITLE =
  "It wasn't one client or one breakthrough — just consistent work, good people, and a clear sense of what matters";

const PARAGRAPHS = [
  "Scalixity started the way a lot of good teams do: long nights, early clients, and a refusal to ship anything we wouldn't be proud of. The first clients came — and stayed. The work scaled. So did the team.",
  "What's never changed is what grounded us at the start: high standards, deep thinking, and a shared drive to do things right. We care more about logic than decoration, and about outcomes more than output.",
];

export function AboutStory() {
  return (
    <section
      data-nav-bg="light"
      className="brand-section-light px-5 lg:px-10 pt-14 pb-14 lg:pt-24 lg:pb-24"
    >
      <p className="brand-eyebrow text-brand-ink-muted mb-8">
        <Scramble>{EYEBROW}</Scramble>
      </p>

      <h2 className="font-bricolage text-brand-display text-brand-ink max-w-[24ch]">
        <StaggerText>{TITLE}</StaggerText>
      </h2>

      <div className="mt-12 lg:mt-20 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
        <p className="md:col-span-4 font-albert text-brand-body-lg text-brand-ink leading-relaxed">
          In our words
        </p>
        <div className="md:col-span-8 flex flex-col gap-6 lg:gap-7">
          {PARAGRAPHS.map((p) => (
            <p
              key={p}
              className="font-albert text-xl lg:text-2xl text-brand-ink leading-relaxed tracking-[-0.01em]"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
