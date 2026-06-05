"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CTAButton } from "./CTAButton";
import { NavDropdown, type NavDropdownData } from "./NavDropdown";

// Y-range of the fixed CTA: top-4 (16px) + ~60px button height = 16..76px.
// Sections that overlap this range flip the CTA to its dark variant.
const CTA_TOP = 16;
const CTA_BOTTOM = 80;

type NavLink = { label: string; href: string; hasDropdown: boolean };

type PrimaryNavProps = {
  logoText: string;
  links: NavLink[];
  cta: { label: string; href: string };
};

// Dropdown content adapted from src/app/components/growth-partner +
// what-we-offer on the existing Scalixity landing. Exported so the Footer's
// "All services" list can mirror the same source of truth.
export const DROPDOWN_DATA: Record<string, NavDropdownData> = {
  Services: {
    kind: "categorized",
    primary: [
      {
        key: "design",
        label: "Design",
        items: [
          { label: "Web app design", href: "/services/web-app-design" },
          { label: "Mobile app design", href: "/services/mobile-app-design" },
          { label: "Website design", href: "/services/website-design" },
          { label: "Website redesign", href: "/services/website-redesign" },
          { label: "Branding", href: "/services/branding" },
        ],
      },
      {
        key: "development",
        label: "Development",
        items: [
          { label: "Web development", href: "/services/web-development" },
          { label: "Mobile app development", href: "/services/mobile-app-development" },
          { label: "Website development", href: "/services/website-development" },
          { label: "No-code development", href: "/services/no-code-development" },
          { label: "Blockchain development", href: "/services/blockchain-development" },
        ],
      },
      {
        key: "research",
        label: "Research",
        items: [
          { label: "UX audit", href: "/services/ux-audit" },
          { label: "Product discovery", href: "/services/product-discovery" },
          { label: "Technical workshop", href: "/services/technical-workshop" },
        ],
      },
    ],
    secondary: [
      {
        key: "validate",
        label: "Validate",
        items: [
          { label: "Design prototype", href: "/services/design-prototype" },
          { label: "Product discovery", href: "/services/product-discovery" },
          { label: "Website development", href: "/services/website-development" },
        ],
      },
      {
        key: "build",
        label: "Build",
        items: [
          { label: "Branding", href: "/services/branding" },
          { label: "Technical workshop", href: "/services/technical-workshop" },
          { label: "Custom MVP development", href: "/services/custom-mvp-development" },
          { label: "Rapid MVP development", href: "/services/rapid-mvp-development" },
          { label: "Dedicated team", href: "/services/dedicated-team" },
        ],
      },
      {
        key: "scale",
        label: "Scale",
        items: [
          { label: "UX audit", href: "/services/ux-audit" },
          { label: "Product redesign", href: "/services/product-redesign" },
          { label: "Team extension", href: "/services/team-extension" },
          { label: "Website redesign", href: "/services/website-redesign" },
        ],
      },
    ],
  },
  Industries: {
    kind: "flat",
    items: [
      { label: "SaaS", href: "/industries/saas" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Fintech", href: "/industries/fintech" },
      { label: "EdTech", href: "/industries/edtech" },
    ],
    cta: {
      title: "Ready to bring your AI idea to life?",
      buttonLabel: "Let's talk",
      buttonHref: "/contact",
    },
    preview: "/images/industries.webp",
  },
  Company: {
    kind: "flat",
    items: [
      { label: "About us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    cta: {
      title: "Want to know what we're about?",
      buttonLabel: "Read our story",
      buttonHref: "/about",
    },
    preview: "/images/company.webp",
  },
};

// Total number of links under a dropdown, shown as the muted count next to
// each expandable item in the mobile menu (e.g. "Services 19").
function countItems(data: NavDropdownData | undefined): number {
  if (!data) return 0;
  if (data.kind === "flat") return data.items.length;
  return [...data.primary, ...(data.secondary ?? [])].reduce(
    (n, c) => n + c.items.length,
    0
  );
}

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-6 w-6 fill-none stroke-current"
      strokeWidth="1.8"
    >
      <path d="M3 8h18M3 16h18" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 fill-none stroke-current"
      strokeWidth="1.8"
    >
      <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
    </svg>
  );
}

// WhatsApp / Telegram quick-contact icons — commented out for now along with
// the buttons that used them (mobile menu footer). Re-enable together.
// function WhatsAppIcon() {
//   return (
//     <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
//       <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2z" />
//     </svg>
//   );
// }
//
// function TelegramIcon() {
//   return (
//     <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.6">
//       <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// }

// Expanded contents for a dropdown link inside the mobile accordion. Flat
// dropdowns render a simple list; categorized ones group items under their
// category label so the structure mirrors the desktop mega-menu.
function MobileSubItems({
  data,
  onNavigate,
}: {
  data: NavDropdownData | undefined;
  onNavigate: () => void;
}) {
  if (!data) return null;

  if (data.kind === "flat") {
    return (
      <ul className="flex flex-col gap-3 pb-5 pl-1">
        {data.items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className="block text-lg text-brand-ink-muted hover:text-brand-purple transition-colors duration-200 ease-brand-out"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  const categories = [...data.primary, ...(data.secondary ?? [])];
  return (
    <div className="flex flex-col gap-5 pb-5 pl-1">
      {categories.map((cat) => (
        <div key={cat.key}>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-ink-soft">
            {cat.label}
          </p>
          <ul className="flex flex-col gap-2">
            {cat.items.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  className="block text-lg text-brand-ink-muted hover:text-brand-purple transition-colors duration-200 ease-brand-out"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function PrimaryNav({ logoText, links, cta }: PrimaryNavProps) {
  const [openLabel, setOpenLabel] = useState<string | null>(null);
  const [isOverLight, setIsOverLight] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const barRef = useRef<HTMLDivElement>(null);

  const isOpen = openLabel !== null;
  const dropdownData = openLabel ? DROPDOWN_DATA[openLabel] ?? null : null;

  // Tracks whether a [data-nav-bg="light"] section currently overlaps the
  // nav's vertical range, so we can flip text + CTA colors when the nav
  // sits over a bone background.
  useEffect(() => {
    const update = () => {
      const lightSections = document.querySelectorAll<HTMLElement>(
        "[data-nav-bg='light']"
      );
      let over = false;
      lightSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= CTA_BOTTOM && rect.bottom >= CTA_TOP) {
          over = true;
        }
      });
      setIsOverLight(over);
    };

    let ticking = false;
    const onScrollOrResize = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  // Hide the nav while scrolling down past the top region, show it while
  // scrolling up. Re-firing on every scroll direction change so the user
  // can scrub back-and-forth and the nav follows.
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const THRESHOLD = 5; // ignore sub-pixel jitter
    const TOP_PIN = 80; // always-visible region near the top

    const update = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastY;

      if (currentY < TOP_PIN) {
        setNavHidden(false);
      } else if (Math.abs(diff) > THRESHOLD) {
        if (diff > 0) {
          setNavHidden(true);
          setOpenLabel(null); // close dropdown when nav slides out
        } else {
          setNavHidden(false);
        }
      }

      lastY = currentY;
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Publish the nav's height as a CSS var so in-page sticky sub-bars (e.g. the
  // Services mobile tab bar) can pin directly below the always-visible mobile
  // nav. Additive layout hint; nothing in the nav's own rendering depends on it.
  useEffect(() => {
    const root = document.documentElement;
    const apply = () => {
      const h = barRef.current?.offsetHeight ?? 0;
      root.style.setProperty("--nav-offset", `${h}px`);
    };
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  // Lock body scroll while the full-screen mobile menu is open so the page
  // behind it doesn't scroll under the panel.
  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileSection(null);
  };

  const ctaVariant = isOpen || isOverLight ? "dark" : "ghost";

  const handleNavEnter = (link: NavLink) => {
    if (!link.hasDropdown) {
      setOpenLabel(null);
      return;
    }
    setOpenLabel(link.label);
  };

  // Text + bg color combos for each state. The nav is fully opaque in
  // every state — it adopts the surface color of whatever section sits
  // below it so it blends in cleanly rather than showing through.
  //   dropdown open → bone fill + ink text (mega-menu panel context)
  //   over light section → bone fill + ink text
  //   default (over dark) → ink fill + bone text
  const headerColors =
    isOpen || isOverLight
      ? "bg-brand-bone text-brand-ink shadow-[0_1px_0_rgba(8,13,16,0.06)]"
      : "bg-brand-ink text-brand-bone";

  return (
    <header
      // Header itself has no background — only the slide-out wrapper does.
      // That way when the wrapper translates off-screen, the bg goes with
      // it and the only thing that remains visible is the floating CTA
      // anchored at the header level.
      //
      // pointer-events-none so this fixed, full-width, transparent box never
      // intercepts clicks on the page beneath it (e.g. when the bar is hidden
      // on scroll-down). The actual interactive layers below re-enable events
      // with pointer-events-auto.
      className="pointer-events-none fixed inset-x-0 top-0 z-50"
    >
      {/* Slide-out group: logo + nav links + (invisible CTA placeholder)
          + mega-menu panel. Everything here slides up together when the
          user scrolls down. The bg color also lives on this wrapper, so
          when it slides out the whole colored bar disappears. */}
      <div
        onMouseLeave={() => setOpenLabel(null)}
        className={`pointer-events-auto transition-[transform,background-color,color] duration-300 ease-brand-out ${headerColors} ${
          navHidden ? "lg:-translate-y-full" : "translate-y-0"
        }`}
      >
        <div
          ref={barRef}
          className="flex items-center justify-between px-5 py-4 lg:px-10"
        >
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-semibold"
          >
            <span className="text-brand-purple text-3xl leading-none">✻</span>
            <span>{logoText}</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => {
              const isLinkActive = openLabel === link.label;
              return (
                <div
                  key={link.label}
                  onMouseEnter={() => handleNavEnter(link)}
                  className="relative py-2"
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-sm font-bold tracking-wide uppercase hover:text-brand-purple transition-colors duration-200 ease-brand-out"
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <svg
                        viewBox="0 0 8 5"
                        className={`h-[5px] w-2 fill-current transition-transform duration-300 ease-brand-out ${
                          isLinkActive ? "rotate-180" : ""
                        }`}
                      >
                        <path d="M0 0l4 5 4-5z" />
                      </svg>
                    )}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Layout placeholder — invisible so the row width and the logo /
              nav positions match what they were when the visible CTA was
              in flow. The visible CTA sits absolutely positioned outside
              this slide-out wrapper. */}
          <div className="hidden lg:block invisible" aria-hidden="true">
            <CTAButton href={cta.href} variant={ctaVariant}>
              {cta.label}
            </CTAButton>
          </div>

          {/* Mobile/tablet hamburger — opens the full-screen menu. Inherits
              currentColor so it reads against both the ink and bone header
              states. */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            className="lg:hidden inline-grid h-11 w-11 place-items-center text-current"
          >
            <MenuIcon />
          </button>
        </div>

        {/* Mega-menu panel */}
        <div
          className={`overflow-hidden bg-brand-bone text-brand-ink transition-[max-height,opacity] duration-300 ease-brand-out ${
            isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {dropdownData && <NavDropdown data={dropdownData} />}
        </div>
      </div>

      {/* Always-visible CTA. Sits OUTSIDE the slide-out wrapper so the
          translate-y on that wrapper doesn't move it. Absolutely positioned
          at the same coordinates as the in-flow placeholder above, so they
          line up pixel-perfect when the nav is fully visible. */}
      <div className="pointer-events-auto hidden lg:block absolute top-4 right-5 lg:right-10">
        <CTAButton href={cta.href} variant={ctaVariant}>
          {cta.label}
        </CTAButton>
      </div>

      {/* Full-screen mobile menu. Lives outside the slide-out wrapper so the
          scroll-hide transform never moves it. Slides in from the right and
          covers the viewport in bone with ink text. */}
      <div
        id="mobile-menu"
        aria-hidden={!mobileOpen}
        className={`lg:hidden fixed inset-0 z-[60] flex flex-col bg-brand-bone text-brand-ink transition-transform duration-300 ease-brand-out ${
          mobileOpen
            ? "translate-x-0 pointer-events-auto"
            : "translate-x-full pointer-events-none"
        }`}
      >
        {/* Panel header: logo + close button in a soft square. */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-brand-ink/10">
          <Link
            href="/"
            onClick={closeMobile}
            className="flex items-center gap-2 text-2xl font-semibold"
          >
            <span className="text-brand-purple text-3xl leading-none">✻</span>
            <span>{logoText}</span>
          </Link>
          <button
            type="button"
            onClick={closeMobile}
            aria-label="Close menu"
            className="grid h-11 w-11 place-items-center rounded-brand-btn bg-brand-ink-faint text-brand-ink transition-colors duration-200 ease-brand-out hover:bg-brand-ink/10"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Scrollable link list. data-lenis-prevent keeps the smooth-scroll
            engine from hijacking touch scrolling inside the panel. */}
        <nav
          data-lenis-prevent
          className="flex-1 overflow-y-auto px-5"
          aria-label="Mobile"
        >
          {links.map((link) => {
            const data = link.hasDropdown
              ? DROPDOWN_DATA[link.label] ?? undefined
              : undefined;
            const count = countItems(data);
            const expanded = mobileSection === link.label;

            return (
              <div key={link.label} className="border-b border-brand-ink/10">
                {link.hasDropdown ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setMobileSection(expanded ? null : link.label)
                      }
                      aria-expanded={expanded}
                      className="flex w-full items-center justify-between py-5 text-left"
                    >
                      <span className="font-bricolage text-3xl text-brand-ink">
                        {link.label}
                        {count > 0 && (
                          <span className="ml-2 text-brand-ink-soft">
                            {count}
                          </span>
                        )}
                      </span>
                      <svg
                        viewBox="0 0 12 8"
                        aria-hidden="true"
                        className={`h-3 w-4 fill-none stroke-current text-brand-ink transition-transform duration-300 ease-brand-out ${
                          expanded ? "rotate-180" : ""
                        }`}
                        strokeWidth="1.6"
                      >
                        <path
                          d="M1 1l5 5 5-5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-brand-out ${
                        expanded ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <MobileSubItems data={data} onNavigate={closeMobile} />
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={closeMobile}
                    className="block py-5 font-bricolage text-3xl text-brand-ink hover:text-brand-purple transition-colors duration-200 ease-brand-out"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        {/* Footer: full-width CTA. Quick-contact WhatsApp / Telegram buttons
            are commented out for now. */}
        <div className="px-5 pb-8 pt-6">
          <CTAButton href={cta.href} variant="dark" className="w-full">
            {cta.label}
          </CTAButton>
          {/* TODO: re-enable once real WhatsApp / Telegram links exist.
          <div className="mt-4 grid grid-cols-2 gap-4">
            <a
              href="#"
              aria-label="Chat on WhatsApp"
              className="grid h-14 place-items-center rounded-brand-btn bg-brand-ink-faint text-brand-ink transition-colors duration-200 ease-brand-out hover:bg-brand-ink/10"
            >
              <WhatsAppIcon />
            </a>
            <a
              href="#"
              aria-label="Message on Telegram"
              className="grid h-14 place-items-center rounded-brand-btn bg-brand-ink-faint text-brand-ink transition-colors duration-200 ease-brand-out hover:bg-brand-ink/10"
            >
              <TelegramIcon />
            </a>
          </div>
          */}
        </div>
      </div>
    </header>
  );
}
