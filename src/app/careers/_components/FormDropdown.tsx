"use client";

import { useEffect, useId, useRef, useState } from "react";

// Accessible custom dropdown (button trigger + popup listbox) styled to match
// the dark application-form fields. Replaces the native <select> so the open
// menu can be brand-styled. Supports mouse, touch, and keyboard:
// ArrowUp/Down/Home/End to move, Enter/Space to select, Escape/Tab to close,
// plus outside-click to dismiss. Value is controlled by the parent.

type FormDropdownProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
};

export function FormDropdown({
  label,
  value,
  onChange,
  options,
  placeholder,
  required = false,
  disabled = false,
}: FormDropdownProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  // Pointer-down position for tap-vs-scroll detection on the options (so
  // dragging to scroll the list doesn't select), mirroring CountrySelect.
  const ptrDown = useRef<{ x: number; y: number } | null>(null);

  const labelId = useId();
  const listId = useId();

  const hasValue = !!value;

  // Close when clicking outside the component.
  useEffect(() => {
    if (!open) return;
    const onDocPointer = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", onDocPointer);
    return () => document.removeEventListener("pointerdown", onDocPointer);
  }, [open]);

  // Move focus into the list when it opens so keyboard navigation works.
  useEffect(() => {
    if (open) listRef.current?.focus();
  }, [open]);

  // Keep the highlighted option in view during keyboard navigation.
  useEffect(() => {
    if (!open) return;
    const el = listRef.current?.children[activeIndex] as HTMLElement | undefined;
    el?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, open]);

  const openMenu = () => {
    if (disabled) return;
    const idx = options.indexOf(value);
    setActiveIndex(idx >= 0 ? idx : 0);
    setOpen(true);
  };

  const closeMenu = (refocus = true) => {
    setOpen(false);
    if (refocus) buttonRef.current?.focus();
  };

  const selectOption = (opt: string) => {
    onChange(opt);
    closeMenu();
  };

  const onButtonKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openMenu();
    }
  };

  const onListKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Escape":
        e.preventDefault();
        closeMenu();
        break;
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((i) => Math.min(options.length - 1, i + 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((i) => Math.max(0, i - 1));
        break;
      case "Home":
        e.preventDefault();
        setActiveIndex(0);
        break;
      case "End":
        e.preventDefault();
        setActiveIndex(options.length - 1);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (activeIndex >= 0) selectOption(options[activeIndex]);
        break;
      case "Tab":
        setOpen(false);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col gap-3" ref={rootRef}>
      <span id={labelId} className="brand-eyebrow text-brand-bone-muted">
        {label}
        {required && (
          <span aria-hidden="true" className="text-brand-purple ml-1">
            *
          </span>
        )}
      </span>

      <div className="relative">
        <button
          ref={buttonRef}
          type="button"
          disabled={disabled}
          onClick={() => (open ? closeMenu(false) : openMenu())}
          onKeyDown={onButtonKeyDown}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-labelledby={labelId}
          className={`flex w-full items-center justify-between gap-3 bg-transparent border-b pb-3 focus:outline-none uppercase text-base lg:text-sm font-semibold tracking-[0.04em] transition-colors disabled:opacity-60 ${
            open ? "border-brand-bone" : "border-brand-bone-faint"
          } ${hasValue ? "text-brand-bone" : "text-brand-bone-soft"}`}
        >
          <span className="truncate text-left">
            {hasValue ? value : placeholder ?? "Select"}
          </span>
          <svg
            viewBox="0 0 10 6"
            aria-hidden="true"
            className={`h-1.5 w-2.5 shrink-0 fill-current text-brand-bone-muted transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          >
            <path d="M0 0l5 6 5-6z" />
          </svg>
        </button>

        {open && (
          <div className="absolute left-0 right-0 top-full z-30 mt-3 overflow-hidden rounded-xl bg-[#0e1417] ring-1 ring-white/10 shadow-[0_24px_60px_-16px_rgba(0,0,0,0.75)]">
            {/* data-lenis-prevent stops the smooth-scroll engine from hijacking
                the wheel/touch so the list scrolls, not the page. */}
            <ul
              ref={listRef}
              role="listbox"
              tabIndex={-1}
              aria-labelledby={labelId}
              aria-activedescendant={
                activeIndex >= 0 ? `${listId}-${activeIndex}` : undefined
              }
              onKeyDown={onListKeyDown}
              data-lenis-prevent
              className="max-h-64 overflow-y-auto overscroll-contain py-1 focus:outline-none"
            >
              {options.map((opt, i) => {
                const selected = opt === value;
                const active = i === activeIndex;
                return (
                  <li
                    id={`${listId}-${i}`}
                    key={opt}
                    role="option"
                    aria-selected={selected}
                  >
                    <button
                      type="button"
                      tabIndex={-1}
                      onMouseEnter={() => setActiveIndex(i)}
                      onPointerDown={(e) => {
                        ptrDown.current = { x: e.clientX, y: e.clientY };
                      }}
                      onPointerCancel={() => {
                        ptrDown.current = null;
                      }}
                      onPointerUp={(e) => {
                        const d = ptrDown.current;
                        ptrDown.current = null;
                        // Select only on a near-stationary press (tap/click) so
                        // dragging to scroll the list doesn't pick an option.
                        if (d && Math.hypot(e.clientX - d.x, e.clientY - d.y) < 12) {
                          selectOption(opt);
                        }
                      }}
                      className={`flex w-full items-center justify-between gap-3 px-3 py-2.5 text-left text-sm transition-colors ${
                        active ? "bg-white/[0.07]" : ""
                      } ${
                        selected ? "text-brand-bone" : "text-brand-bone-muted"
                      } hover:text-brand-bone`}
                    >
                      <span className="flex-1 truncate">{opt}</span>
                      {selected && (
                        <svg
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 fill-none stroke-brand-purple"
                          strokeWidth="2"
                        >
                          <path
                            d="M3 8.5l3.5 3.5L13 4.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
