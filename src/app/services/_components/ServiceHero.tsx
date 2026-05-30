import { CTAButton } from "@/src/app/landing/_components/CTAButton";
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";

const EYEBROW = "What we offer";

// Slight fan rotations for the image trio at lg (echoes the old GSAP hero
// without the scroll choreography).
const ROTATIONS = ["lg:-rotate-3", "", "lg:rotate-3"];

export function ServiceHero({
  title,
  description,
  images,
}: {
  title: string;
  description: string;
  images: string[];
}) {
  return (
    <section className="relative bg-brand-ink text-brand-bone">
      <div className="px-5 pt-40 lg:px-10 lg:pt-48">
        <p className="brand-eyebrow text-brand-bone-muted mb-8">
          <Scramble>{EYEBROW}</Scramble>
        </p>

        <h1 className="font-bricolage text-brand-display text-brand-bone max-w-[18ch]">
          <StaggerText>{title}</StaggerText>
        </h1>

        <p className="font-albert text-brand-body-lg text-brand-bone-muted max-w-2xl mt-8">
          {description}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <CTAButton href="/contact" variant="primary">
            Start your project
          </CTAButton>
          <CTAButton href="/work" variant="secondary">
            View our work
          </CTAButton>
        </div>
      </div>

      {images.length > 0 && (
        <div className="px-5 lg:px-10 mt-16 lg:mt-24 pb-24 lg:pb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {images.slice(0, 3).map((src, i) => (
              <div
                key={src}
                className={`relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-brand-bone-faint transition-transform duration-500 ease-brand-out ${ROTATIONS[i] ?? ""}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
