import Link from "next/link";
import { PrimaryNav } from "@/src/app/landing/_components/PrimaryNav";
import {
  PRIMARY_NAV_LINKS,
  PRIMARY_NAV_CTA,
  PRIMARY_NAV_LOGO,
} from "@/src/app/components/primary-nav-config";
import { CurvedDivider } from "@/src/app/landing/_components/CurvedDivider";
import { ContactForm } from "@/src/app/landing/_components/ContactForm";
import { Footer } from "@/src/app/landing/_components/Footer";
import { Scramble } from "@/src/app/landing/_components/Scramble";
import { StaggerText } from "@/src/app/landing/_components/StaggerText";

type Post = {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  link: string;
};

// Posts preserved from the legacy BlogPosts component.
const POSTS: Post[] = [
  {
    title: "The Future of Generative AI in Business",
    excerpt: "Explore how generative AI is reshaping industries and creating new opportunities for innovation.",
    image: "/images/generativeai.svg",
    category: "Artificial Intelligence",
    date: "May 15, 2024",
    link: "/blog/future-of-generative-ai",
  },
  {
    title: "Blockchain in Supply Chain: A Game Changer",
    excerpt: "Discover how blockchain technology is revolutionizing supply chain management and increasing transparency.",
    image: "/images/blockchain.svg",
    category: "Blockchain",
    date: "June 2, 2024",
    link: "/blog/blockchain-in-supply-chain",
  },
  {
    title: "AI-Driven Predictive Maintenance in Manufacturing",
    excerpt: "Learn how AI is transforming equipment maintenance, reducing downtime, and cutting costs in the manufacturing sector.",
    image: "/images/ai.svg",
    category: "AI in Manufacturing",
    date: "June 20, 2024",
    link: "/blog/ai-predictive-maintenance",
  },
];

function Meta({ category, date, tone = "ink" }: { category: string; date: string; tone?: "ink" | "bone" }) {
  const muted = tone === "bone" ? "text-brand-bone-soft" : "text-brand-ink-soft";
  return (
    <div className="flex items-center gap-3 brand-eyebrow">
      <span className={tone === "bone" ? "text-brand-bone-muted" : "text-brand-ink-muted"}>
        {category}
      </span>
      <span className={muted} aria-hidden="true">
        •
      </span>
      <span className={muted}>{date}</span>
    </div>
  );
}

export function BlogIndex() {
  const [featured, ...rest] = POSTS;

  return (
    <div className="brand-root min-h-screen">
      <PrimaryNav
        logoText={PRIMARY_NAV_LOGO}
        links={PRIMARY_NAV_LINKS}
        cta={PRIMARY_NAV_CTA}
      />

      {/* Hero (dark) */}
      <section className="relative bg-brand-ink text-brand-bone">
        <div className="px-5 pt-40 pb-24 lg:px-10 lg:pt-48 lg:pb-32">
          <p className="brand-eyebrow text-brand-bone-muted mb-8">
            <Scramble>Insights</Scramble>
          </p>
          <h1 className="font-bricolage text-brand-display text-brand-bone max-w-[16ch]">
            <StaggerText>Latest insights &amp; articles</StaggerText>
          </h1>
          <p className="font-albert text-brand-body-lg text-brand-bone-muted max-w-2xl mt-8">
            Cutting-edge AI and blockchain topics, handpicked for you.
          </p>
        </div>
      </section>

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      {/* Posts (light) */}
      <section
        data-nav-bg="light"
        className="brand-section-light px-5 lg:px-10 pt-20 pb-24 lg:pt-32 lg:pb-32"
      >
        {/* Featured post */}
        <Link
          href={featured.link}
          className="group block rounded-2xl bg-brand-ink text-brand-bone overflow-hidden mb-5 lg:mb-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[360px] overflow-hidden bg-brand-bone/[0.06]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featured.image}
                alt={featured.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-brand-out group-hover:scale-105"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center gap-5">
              <Meta category={featured.category} date={featured.date} tone="bone" />
              <h2 className="font-bricolage text-brand-h3 text-brand-bone leading-tight">
                {featured.title}
              </h2>
              <p className="font-albert text-brand-body-lg text-brand-bone-muted leading-relaxed">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-bone">
                Read article
                <svg viewBox="0 0 18 12" aria-hidden="true" className="h-3 w-[18px] fill-none stroke-current transition-transform duration-300 ease-brand-out group-hover:translate-x-1" strokeWidth="1.6">
                  <path d="M1 6h16M12 1l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </Link>

        {/* Remaining posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {rest.map((post) => (
            <Link
              key={post.link}
              href={post.link}
              className="group rounded-2xl bg-brand-ink/[0.04] overflow-hidden flex flex-col transition-colors duration-300 ease-brand-out hover:bg-brand-ink/[0.06]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-ink/[0.06]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 ease-brand-out group-hover:scale-105"
                />
              </div>
              <div className="p-6 lg:p-8 flex flex-col gap-4 flex-grow">
                <Meta category={post.category} date={post.date} />
                <h3 className="font-bricolage text-xl lg:text-2xl text-brand-ink leading-tight">
                  {post.title}
                </h3>
                <p className="font-albert text-brand-body text-brand-ink-muted leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CurvedDivider fromColor="bone" className="-mt-px relative z-10" />

      <ContactForm />

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      <Footer />
    </div>
  );
}
