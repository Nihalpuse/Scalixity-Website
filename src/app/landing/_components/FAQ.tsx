"use client";

import { useState } from "react";
import { Scramble } from "./Scramble";
import { StaggerText } from "./StaggerText";

const DEFAULT_EYEBROW = "FAQ";
const DEFAULT_TITLE = "Questions already answered";

export type QA = { question: string; answer: string };

const DEFAULT_FAQS: QA[] = [
  {
    question: "What services does Scalixity offer?",
    answer:
      "We're an AI-first engineering partner. We cover product discovery and design, custom and rapid MVP development, AI chatbots and machine-learning models, web & mobile apps, dedicated teams, and ongoing scale, DevOps, and optimization — from first prototype to long-term growth.",
  },
  {
    question: "Can you help startups with product scalability and growth?",
    answer:
      "Yes. We design scalable architectures from day one — cloud infrastructure, CI/CD, and modular systems — and embed growth engineering so your product can handle more users and features without slowing down.",
  },
  {
    question: "What makes your designs user-friendly?",
    answer:
      "We start from real user flows and validate with interactive prototypes before writing code. Clean UX, accessible interfaces, and AI used where it genuinely helps — not added complexity — keep products intuitive and fast.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Discovery typically takes 1–3 days and design prototypes 3–7 days. Many teams have an embedded pod working or a production-ready MVP within a few weeks.",
  },
  {
    question: "Do you work with our existing team and codebase?",
    answer:
      "Absolutely. We extend your team with senior engineers and designers, integrate with your existing stack, and modernize legacy products with an AI transformation layer where it moves real metrics.",
  },
];

export function FAQ({
  eyebrow = DEFAULT_EYEBROW,
  title = DEFAULT_TITLE,
  faqs = DEFAULT_FAQS,
}: {
  eyebrow?: string;
  title?: string;
  faqs?: QA[];
} = {}) {
  // Single-open accordion: opening one closes the previous.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      data-nav-bg="light"
      className="brand-section-light px-5 lg:px-10 pt-14 pb-14 lg:pt-24 lg:pb-24"
    >
      <p className="brand-eyebrow text-brand-ink-muted mb-6 lg:mb-8">
        <Scramble>{eyebrow}</Scramble>
      </p>
      <h2 className="font-bricolage text-brand-display text-brand-ink max-w-[14ch]">
        <StaggerText>{title}</StaggerText>
      </h2>

      <div className="mt-12 lg:mt-20 border-b border-brand-ink/10">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={faq.question} className="border-t border-brand-ink/10">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full flex items-start gap-5 lg:gap-12 py-6 lg:py-8 text-left"
              >
                <span className="brand-eyebrow text-brand-ink-soft w-9 lg:w-[20%] shrink-0 pt-1.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-bricolage text-xl lg:text-2xl text-brand-ink leading-snug">
                  {faq.question}
                </span>
                <span className="flex items-center gap-2 brand-eyebrow text-brand-ink shrink-0 pt-1.5">
                  <span className="hidden sm:inline">More</span>
                  <svg
                    viewBox="0 0 12 8"
                    aria-hidden="true"
                    className={`h-2 w-3 fill-none stroke-current transition-transform duration-300 ease-brand-out ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    strokeWidth="1.6"
                  >
                    <path d="M1 1l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>

              {/* grid-rows 0fr→1fr animates the real content height for a
                  smooth open/close (no max-height jank). */}
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-brand-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pb-6 lg:pb-8 pl-14 lg:pl-[20%] max-w-3xl">
                    <p className="font-albert text-brand-body-lg text-brand-ink-muted leading-relaxed lg:pl-12">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
