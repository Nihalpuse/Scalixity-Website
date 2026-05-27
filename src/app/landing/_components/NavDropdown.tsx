"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CTAButton } from "./CTAButton";

export type NavSubItem = { label: string; href: string };

export type NavCategory = {
  key: string;
  label: string;
  items: NavSubItem[];
  preview?: string;
};

export type CategorizedDropdown = {
  kind: "categorized";
  primary: NavCategory[];
  secondary?: NavCategory[];
};

export type FlatDropdown = {
  kind: "flat";
  items: NavSubItem[];
  cta: { title: string; buttonLabel: string; buttonHref: string };
  preview?: string;
};

export type NavDropdownData = CategorizedDropdown | FlatDropdown;

type NavDropdownProps = { data: NavDropdownData };

export function NavDropdown({ data }: NavDropdownProps) {
  if (data.kind === "categorized") {
    return <CategorizedLayout data={data} />;
  }
  return <FlatLayout data={data} />;
}

/* ---------- Categorized (SERVICES) ---------- */

function CategorizedLayout({ data }: { data: CategorizedDropdown }) {
  const firstKey = data.primary[0]?.key ?? "";
  const [activeKey, setActiveKey] = useState(firstKey);

  useEffect(() => {
    setActiveKey(firstKey);
  }, [firstKey]);

  const allCategories = [...data.primary, ...(data.secondary ?? [])];
  const active = allCategories.find((c) => c.key === activeKey) ?? allCategories[0];

  return (
    <div className="grid grid-cols-[340px_1fr_minmax(0,1.1fr)] gap-12 px-5 lg:px-10 py-10 border-t border-brand-ink/10">
      <div className="flex flex-col">
        <CategoryList categories={data.primary} activeKey={activeKey} onHover={setActiveKey} />
        {data.secondary && data.secondary.length > 0 && (
          <>
            <div className="my-5 border-t border-brand-ink-faint" />
            <CategoryList categories={data.secondary} activeKey={activeKey} onHover={setActiveKey} />
          </>
        )}
      </div>

      <ItemsList items={active.items} />

      <PreviewPane src={active.preview} />
    </div>
  );
}

function CategoryList({
  categories,
  activeKey,
  onHover,
}: {
  categories: NavCategory[];
  activeKey: string;
  onHover: (key: string) => void;
}) {
  return (
    <ul className="flex flex-col gap-3">
      {categories.map((cat) => {
        const isActive = cat.key === activeKey;
        return (
          <li key={cat.key}>
            <button
              type="button"
              onMouseEnter={() => onHover(cat.key)}
              onFocus={() => onHover(cat.key)}
              className={`flex w-full items-center justify-between text-sm font-semibold tracking-[0.12em] uppercase transition-colors duration-200 ease-brand-out ${
                isActive ? "text-brand-ink" : "text-brand-ink-soft hover:text-brand-ink"
              }`}
            >
              <span>{cat.label}</span>
              <svg viewBox="0 0 14 10" aria-hidden="true" className="h-2.5 w-3.5 fill-none stroke-current" strokeWidth="1.6">
                <path d="M1 5h12M9 1l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

/* ---------- Flat (INDUSTRIES / COMPANY) ---------- */

function FlatLayout({ data }: { data: FlatDropdown }) {
  return (
    <div className="grid grid-cols-[340px_1fr_minmax(0,1.1fr)] gap-12 px-5 lg:px-10 py-10 border-t border-brand-ink/10">
      {/* Left: tall CTA card */}
      <div className="flex flex-col justify-between rounded-brand-card bg-brand-ink-faint p-8 min-h-[380px]">
        <h3 className="font-bricolage text-[clamp(1.75rem,2vw,2.25rem)] leading-[1.15] text-brand-ink">
          {data.cta.title}
        </h3>
        <div>
          <CTAButton href={data.cta.buttonHref} variant="primary">
            {data.cta.buttonLabel}
          </CTAButton>
        </div>
      </div>

      <ItemsList items={data.items} />

      <PreviewPane src={data.preview} />
    </div>
  );
}

/* ---------- Shared sub-components ---------- */

function ItemsList({ items }: { items: NavSubItem[] }) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className="font-bricolage text-2xl text-brand-ink hover:text-brand-orange transition-colors duration-200 ease-brand-out"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function PreviewPane({ src }: { src?: string }) {
  return (
    <div className="relative overflow-hidden rounded-brand-card bg-brand-ink-faint min-h-[280px]">
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <div className="absolute inset-0 grid place-items-center text-brand-ink-soft text-sm uppercase tracking-widest">
          Preview placeholder
        </div>
      )}
    </div>
  );
}
