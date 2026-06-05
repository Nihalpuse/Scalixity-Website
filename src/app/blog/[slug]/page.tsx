import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { PrimaryNav } from "@/src/app/landing/_components/PrimaryNav";
import {
  PRIMARY_NAV_LINKS,
  PRIMARY_NAV_CTA,
  PRIMARY_NAV_LOGO,
} from "@/src/app/components/primary-nav-config";
import { CurvedDivider } from "@/src/app/landing/_components/CurvedDivider";
import { ContactForm } from "@/src/app/landing/_components/ContactForm";
import { Footer } from "@/src/app/landing/_components/Footer";
import { BLOG_POSTS, getBlogPost, type BlogPost } from "../posts";
import { ArticleShare } from "../_components/ArticleShare";

export function generateStaticParams() {
  return BLOG_POSTS.filter((p) => !p.external).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article — Scalixity" };
  return { title: `${post.title} — Scalixity`, description: post.excerpt };
}

// Up to two more articles — same category first, then fill from the rest.
function relatedPosts(slug: string, category: string): BlogPost[] {
  const others = BLOG_POSTS.filter((p) => p.slug !== slug);
  const sameCat = others.filter((p) => p.category === category);
  const rest = others.filter((p) => p.category !== category);
  return [...sameCat, ...rest].slice(0, 2);
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = relatedPosts(slug, post.category);

  return (
    <div className="brand-root min-h-screen">
      <PrimaryNav
        logoText={PRIMARY_NAV_LOGO}
        links={PRIMARY_NAV_LINKS}
        cta={PRIMARY_NAV_CTA}
      />

      {/* Hero (dark) — breadcrumbs, tag, title, author/meta */}
      <section className="relative bg-brand-ink text-brand-bone">
        <div className="px-5 pt-36 pb-24 lg:px-10 lg:pt-44 lg:pb-32">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 brand-eyebrow text-brand-bone-muted">
              <li>
                <Link href="/" className="hover:text-brand-bone transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-brand-bone-soft">/</li>
              <li>
                <Link href="/blog" className="hover:text-brand-bone transition-colors">
                  Insights
                </Link>
              </li>
              <li aria-hidden="true" className="text-brand-bone-soft">/</li>
              <li className="text-brand-bone max-w-[40ch] truncate">{post.title}</li>
            </ol>
          </nav>

          <div className="mt-8">
            <span className="brand-eyebrow text-brand-purple">#{post.category}</span>
          </div>

          <h1 className="mt-5 max-w-[24ch] font-bricolage text-brand-display text-brand-bone leading-[1.02] tracking-[-0.02em]">
            {post.title}
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-bone/[0.08] text-brand-purple text-sm leading-none">
              ✻
            </span>
            <span className="brand-eyebrow text-brand-bone">{post.author}</span>
            <span aria-hidden="true" className="text-brand-bone-soft">•</span>
            <span className="brand-eyebrow text-brand-bone-muted">{post.date}</span>
            <span aria-hidden="true" className="text-brand-bone-soft">•</span>
            <span className="brand-eyebrow text-brand-bone-muted">{post.readTime}</span>
          </div>
        </div>
      </section>

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      {/* Body (light) */}
      <article
        data-nav-bg="light"
        className="brand-section-light px-5 lg:px-10 pt-16 pb-24 lg:pt-24 lg:pb-32"
      >
        <div className="mx-auto max-w-4xl">
          {/* Cover */}
          <div className="overflow-hidden rounded-3xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt={post.title}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>

          {/* Summary — left label, right lead */}
          <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12">
            <div className="lg:col-span-3">
              <p className="brand-eyebrow text-brand-ink-soft">Summary</p>
            </div>
            <div className="lg:col-span-9">
              <p className="font-albert text-xl lg:text-2xl text-brand-ink leading-snug">
                {post.excerpt}
              </p>
            </div>
          </div>

          <div className="mt-12 lg:mt-16 border-t border-brand-ink/10" />

          {/* Prose */}
          <div className="mt-12 lg:mt-16">
            {post.body?.map((section) => (
              <section key={section.heading} className="mt-12 first:mt-0 lg:mt-16">
                <h2 className="font-bricolage text-2xl lg:text-3xl text-brand-ink leading-tight">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="mt-5 font-albert text-base lg:text-lg text-brand-ink-muted leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {/* Share */}
          <div className="mt-16 pt-10 border-t border-brand-ink/10">
            <p className="font-albert text-lg text-brand-ink mb-5">
              Share this article
            </p>
            <ArticleShare />
          </div>
        </div>
      </article>

      {/* More insights */}
      {related.length > 0 && (
        <section
          data-nav-bg="light"
          className="brand-section-light px-5 lg:px-10 pb-14 lg:pb-24"
        >
          <div className="border-t border-brand-ink/10 pt-16 lg:pt-24">
            <p className="brand-eyebrow text-brand-ink-muted mb-8">More insights</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 lg:gap-x-12">
              {related.map((p) => (
                <article key={p.slug} className="flex flex-col">
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group block overflow-hidden rounded-2xl bg-brand-ink/[0.04]"
                  >
                    <div className="relative aspect-[5/4] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.image}
                        alt={p.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-brand-out group-hover:scale-105"
                      />
                    </div>
                  </Link>
                  <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="brand-eyebrow text-brand-ink-muted">{p.date}</span>
                    <span aria-hidden="true" className="text-brand-ink-soft">•</span>
                    <span className="brand-eyebrow text-brand-ink-muted">{p.readTime}</span>
                  </div>
                  <h3 className="mt-4 font-bricolage text-2xl lg:text-3xl text-brand-ink leading-tight">
                    <Link
                      href={`/blog/${p.slug}`}
                      className="hover:text-brand-purple transition-colors duration-200 ease-brand-out"
                    >
                      {p.title}
                    </Link>
                  </h3>
                  <div className="mt-6">
                    <span className="inline-flex items-center rounded-md bg-brand-ink/[0.05] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-ink">
                      {p.category}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-albert text-sm font-semibold uppercase tracking-[0.12em] text-brand-ink hover:text-brand-purple transition-colors"
              >
                <svg
                  viewBox="0 0 18 12"
                  aria-hidden="true"
                  className="h-3 w-[18px] rotate-180 fill-none stroke-current"
                  strokeWidth="1.6"
                >
                  <path d="M1 6h16M12 1l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back to all articles
              </Link>
            </div>
          </div>
        </section>
      )}

      <CurvedDivider fromColor="bone" className="-mt-px relative z-10" />

      <ContactForm />

      <CurvedDivider fromColor="ink" className="-mt-px relative z-10" />

      <Footer />
    </div>
  );
}
