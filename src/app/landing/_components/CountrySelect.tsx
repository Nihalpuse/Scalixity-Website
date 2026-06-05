"use client";

import { useEffect, useMemo, useRef, useState, type ComponentType } from "react";
import { getCountryCallingCode } from "react-phone-number-input";
import { useIsTouch } from "./useMobileEnv";

// Themed replacement for react-phone-number-input's native <select>. Plugged
// in via the library's `countrySelectComponent` prop, so it still receives the
// flag icon component + the full country option list from the library — we
// just render a searchable, keyboard-navigable dropdown in the dark theme.

type Option = { value?: string; label: string };

type CountrySelectProps = {
  value?: string;
  onChange: (value?: string) => void;
  options: Option[];
  iconComponent: ComponentType<{ country?: string; label: string }>;
  disabled?: boolean;
  readOnly?: boolean;
};

function callingCode(country?: string): string {
  if (!country) return "";
  try {
    return `+${getCountryCallingCode(country as Parameters<typeof getCountryCallingCode>[0])}`;
  } catch {
    return "";
  }
}

export function CountrySelect({
  value,
  onChange,
  options,
  iconComponent: Icon,
  disabled,
  readOnly,
}: CountrySelectProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [highlight, setHighlight] = useState(0);
  const isTouch = useIsTouch();

  const rootRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  // Pointer-down position for tap-vs-scroll detection on the options.
  const ptrDown = useRef<{ x: number; y: number } | null>(null);

  const current = options.find((o) => o.value === value);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return options;
    const digits = q.replace(/[^\d]/g, "");
    return options.filter(
      (o) =>
        o.label.toLowerCase().includes(q) ||
        (digits && callingCode(o.value).includes(digits))
    );
  }, [query, options]);

  // Close on outside click / Escape; focus the search field on open.
  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    // Auto-focus the search on pointer devices only. On touch, popping the
    // keyboard would cover the list (and on iOS zoom the page), so the first
    // option tap goes to dismissing the keyboard / mis-registers instead of
    // selecting — which read as "the dropdown won't close".
    const t = isTouch
      ? undefined
      : setTimeout(() => searchRef.current?.focus(), 0);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      if (t) clearTimeout(t);
    };
  }, [open, isTouch]);

  // Keep the highlighted row in view.
  useEffect(() => {
    if (!open) return;
    const el = listRef.current?.children[highlight] as HTMLElement | undefined;
    el?.scrollIntoView({ block: "nearest" });
  }, [highlight, open]);

  const choose = (v?: string) => {
    onChange(v);
    setOpen(false);
    setQuery("");
  };

  const onSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlight((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[highlight]) choose(filtered[highlight].value);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        disabled={disabled || readOnly}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select country"
        onClick={() => {
          if (disabled || readOnly) return;
          setQuery("");
          setHighlight(Math.max(0, filtered.findIndex((o) => o.value === value)));
          setOpen((v) => !v);
        }}
        className="flex items-center gap-1.5 pr-1 outline-none disabled:opacity-60"
      >
        <span className="block shrink-0">
          <Icon country={value} label={current?.label ?? "International"} />
        </span>
        <svg
          viewBox="0 0 10 6"
          aria-hidden="true"
          className={`h-1.5 w-2.5 fill-current text-brand-bone-muted transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path d="M0 0l5 6 5-6z" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute left-0 top-full z-50 mt-3 w-72 max-w-[80vw] overflow-hidden rounded-xl bg-[#0e1417] ring-1 ring-white/10 shadow-[0_24px_60px_-16px_rgba(0,0,0,0.75)]"
        >
          {/* Search */}
          <div className="border-b border-white/10 p-2">
            <input
              ref={searchRef}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setHighlight(0);
              }}
              onKeyDown={onSearchKeyDown}
              placeholder="Search country or code"
              className="w-full bg-transparent px-2 py-2 text-base lg:text-sm text-brand-bone placeholder:text-brand-bone-soft focus:outline-none"
            />
          </div>

          {/* Options. data-lenis-prevent stops the smooth-scroll engine from
              hijacking the wheel/touch so the list scrolls, not the page. */}
          <ul
            ref={listRef}
            role="listbox"
            data-lenis-prevent
            className="max-h-64 overflow-y-auto overscroll-contain py-1"
          >
            {filtered.map((o, i) => {
              const selected = o.value === value;
              const active = i === highlight;
              return (
                <li key={o.value ?? "ZZ-intl"} role="option" aria-selected={selected}>
                  <button
                    type="button"
                    onMouseEnter={() => setHighlight(i)}
                    onPointerDown={(e) => {
                      ptrDown.current = { x: e.clientX, y: e.clientY };
                    }}
                    onPointerCancel={() => {
                      ptrDown.current = null;
                    }}
                    onPointerUp={(e) => {
                      const d = ptrDown.current;
                      ptrDown.current = null;
                      // Select only on a near-stationary press (a tap/click) so
                      // dragging to scroll the list doesn't pick an option.
                      // Pointer events fire reliably on touch, where a
                      // synthesized click can get swallowed by scroll handling —
                      // which left the dropdown open after selecting on mobile.
                      if (d && Math.hypot(e.clientX - d.x, e.clientY - d.y) < 12) {
                        choose(o.value);
                      }
                    }}
                    className={`flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors ${
                      active ? "bg-white/[0.07]" : ""
                    } ${selected ? "text-brand-bone" : "text-brand-bone-muted"} hover:text-brand-bone`}
                  >
                    <span className="block shrink-0">
                      <Icon country={o.value} label={o.label} />
                    </span>
                    <span className="flex-1 truncate">{o.label}</span>
                    {o.value && (
                      <span className="shrink-0 text-xs tabular-nums text-brand-bone-soft">
                        {callingCode(o.value)}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
            {filtered.length === 0 && (
              <li className="px-3 py-3 text-sm text-brand-bone-soft">No matches</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
