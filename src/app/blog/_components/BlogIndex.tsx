"use client";

import { useMemo, useState } from "react";
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
import { BLOG_POSTS, type BlogPost } from "../posts";

const ALL = "All";
const PER_PAGE = 6;

function ArticleCard({ post }: { post: BlogPost }) {
  const href = `/blog/${post.slug}`;
  return (
    <article className="flex h-full flex-col">
      <Link
        href={href}
        className="group block overflow-hidden rounded-2xl bg-brand-ink/[0.04]"
      >
        <div className="relative aspect-[5/4] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-brand-out group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Author + meta */}
      <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-ink/[0.06] text-brand-purple text-sm leading-none">
          ✻
        </span>
        <span className="brand-eyebrow text-brand-ink">{post.author}</span>
        <span className="brand-eyebrow text-brand-ink-soft" aria-hidden="true">
          •
        </span>
        <span className="brand-eyebrow text-brand-ink-muted">{post.date}</span>
        <span className="brand-eyebrow text-brand-ink-soft" aria-hidden="true">
          •
        </span>
        <span className="brand-eyebrow text-brand-ink-muted">
          {post.readTime}
        </span>
      </div>

      <h3 className="mt-4 font-bricolage text-2xl lg:text-3xl text-brand-ink leading-tight">
        <Link
          href={href}
          className="hover:text-brand-purple transition-colors duration-200 ease-brand-out"
        >
          {post.title}
        </Link>
      </h3>

      {/* Reserve ≥2 lines and grow to fill, so the separator + tag align
          across cards of differing title/excerpt lengths. */}
      <p className="mt-3 grow font-albert text-base text-brand-ink-muted leading-relaxed min-h-[3.25rem]">
        {post.excerpt}
      </p>

      <div className="mt-6 pt-6 border-t border-brand-ink/10">
        <span className="inline-flex items-center rounded-md bg-brand-ink/[0.05] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-ink">
          {post.category}
        </span>
      </div>
    </article>
  );
}

export function BlogIndex() {
  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))],
    []
  );
  const [filter, setFilter] = useState(ALL);
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () =>
      filter === ALL
        ? BLOG_POSTS
        : BLOG_POSTS.filter((p) => p.category === filter),
    [filter]
  );

  const pageCount = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, pageCount);
  const visible = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  const selectFilter = (c: string) => {
    setFilter(c);
    setPage(1); // new filter → back to the first page
  };

  const goTo = (p: number) => {
    setPage(p);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="brand-root min-h-screen">
      <PrimaryNav
        logoText={PRIMARY_NAV_LOGO}
        links={PRIMARY_NAV_LINKS}
        cta={PRIMARY_NAV_CTA}
      />

      {/* Articles (light) — "Expert articles" hero + category tabs + grid */}
      <section
        data-nav-bg="light"
        className="brand-section-light px-5 lg:px-10 pt-36 pb-24 lg:pt-48 lg:pb-32"
      >
        <p className="brand-eyebrow text-brand-ink-muted mb-8">
          <Scramble>Insights</Scramble>
        </p>
        <h1 className="font-bricolage text-brand-ink leading-[0.95] tracking-[-0.02em] text-[clamp(2.75rem,8vw,7rem)]">
          <StaggerText>Expert articles</StaggerText>
        </h1>

        {/* Category filter tabs */}
        <div className="mt-12 lg:mt-16 flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((c) => {
            const isActive = c === filter;
            return (
              <button
                key={c}
                type="button"
                onClick={() => selectFilter(c)}
                className={`shrink-0 px-6 py-3 rounded-lg text-xs uppercase tracking-[0.12em] font-semibold transition-colors ${
                  isActive
                    ? "bg-brand-ink text-brand-bone"
                    : "bg-brand-ink/[0.05] text-brand-ink hover:bg-brand-ink/10"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Article grid */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 lg:gap-x-12 lg:gap-y-20">
          {visible.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>

        {/* Pagination */}
        {pageCount > 1 && (
          <nav
            aria-label="Blog pagination"
            className="mt-16 lg:mt-24 flex items-center justify-center gap-2"
          >
            <PagerButton
              ariaLabel="Previous page"
              disabled={current === 1}
              onClick={() => goTo(current - 1)}
            >
              <Arrow dir="left" />
            </PagerButton>

            {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => goTo(p)}
                aria-current={p === current ? "page" : undefined}
                className={`h-11 min-w-[2.75rem] px-3 rounded-lg text-sm font-semibold transition-colors ${
                  p === current
                    ? "bg-brand-ink text-brand-bone"
                    : "bg-brand-ink/[0.05] text-brand-ink hover:bg-brand-ink/10"
                }`}
              >
                {p}
              </button>
            ))}

            <PagerButton
              ariaLabel="Next page"
              disabled={current === pageCount}
              onClick={() => goTo(current + 1)}
            >
              <Arrow dir="right" />
            </PagerButton>
          </nav>
        )}
      </section>

      <CurvedDivider fromColor="bone" className="-mt-px relative z-10" />

      <ContactForm />

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      <Footer />
    </div>
  );
}

function PagerButton({
  children,
  onClick,
  disabled,
  ariaLabel,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  ariaLabel: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className="grid h-11 w-11 place-items-center rounded-lg bg-brand-ink/[0.05] text-brand-ink transition-colors hover:bg-brand-ink/10 disabled:opacity-30 disabled:pointer-events-none"
    >
      {children}
    </button>
  );
}

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 18 12"
      aria-hidden="true"
      className={`h-3 w-[18px] fill-none stroke-current ${
        dir === "left" ? "rotate-180" : ""
      }`}
      strokeWidth="1.6"
    >
      <path d="M1 6h16M12 1l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
