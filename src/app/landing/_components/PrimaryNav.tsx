"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
// what-we-offer on the existing Scalixity landing.
const DROPDOWN_DATA: Record<string, NavDropdownData> = {
  Services: {
    kind: "categorized",
    primary: [
      {
        key: "ai",
        label: "AI engineering",
        items: [
          { label: "AI transformation", href: "/services" },
          { label: "Machine learning models", href: "/services" },
          { label: "Computer vision", href: "/services" },
          { label: "Natural language processing", href: "/services" },
          { label: "AI chatbot development", href: "/services" },
        ],
      },
      {
        key: "product",
        label: "Product engineering",
        items: [
          { label: "Custom MVP development", href: "/services" },
          { label: "Rapid MVP development", href: "/services" },
          { label: "Web application development", href: "/services" },
          { label: "Mobile app development", href: "/services" },
        ],
      },
      {
        key: "discovery",
        label: "Discovery",
        items: [
          { label: "Product discovery", href: "/services" },
          { label: "Technical workshop", href: "/services" },
        ],
      },
    ],
    secondary: [
      {
        key: "growth",
        label: "Growth",
        items: [
          { label: "Growth systems engineering", href: "/services" },
          { label: "Workflow automation", href: "/services" },
        ],
      },
      {
        key: "platform",
        label: "Platform",
        items: [
          { label: "Cloud infrastructure", href: "/services" },
          { label: "Full-stack DevOps", href: "/services" },
          { label: "API engineering", href: "/services" },
        ],
      },
      {
        key: "team",
        label: "Team",
        items: [
          { label: "Product acceleration pod", href: "/services" },
          { label: "Team extension", href: "/services" },
          { label: "Dedicated team", href: "/services" },
        ],
      },
    ],
  },
  Industries: {
    kind: "flat",
    items: [
      { label: "Insurance", href: "/work" },
      { label: "Healthcare", href: "/work" },
      { label: "Manufacturing", href: "/work" },
      { label: "Fintech", href: "/work" },
    ],
    cta: {
      title: "Ready to bring your AI idea to life?",
      buttonLabel: "Let's talk",
      buttonHref: "#contact-form",
    },
  },
  Company: {
    kind: "flat",
    items: [
      { label: "About us", href: "/company" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
    cta: {
      title: "Want to know what we're about?",
      buttonLabel: "Read our story",
      buttonHref: "/company",
    },
  },
};

export function PrimaryNav({ logoText, links, cta }: PrimaryNavProps) {
  const [openLabel, setOpenLabel] = useState<string | null>(null);
  const [isOverLight, setIsOverLight] = useState(false);
  const [navHidden, setNavHidden] = useState(false);

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
      className="fixed inset-x-0 top-0 z-50"
      onMouseLeave={() => setOpenLabel(null)}
    >
      {/* Slide-out group: logo + nav links + (invisible CTA placeholder)
          + mega-menu panel. Everything here slides up together when the
          user scrolls down. The bg color also lives on this wrapper, so
          when it slides out the whole colored bar disappears. */}
      <div
        className={`transition-[transform,background-color,color] duration-300 ease-brand-out ${headerColors} ${
          navHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 lg:px-10">
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-semibold"
          >
            <span className="text-brand-orange text-3xl leading-none">✻</span>
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
                    className="flex items-center gap-1 text-sm font-bold tracking-wide uppercase hover:text-brand-orange transition-colors duration-200 ease-brand-out"
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
          <div className="hidden md:block invisible" aria-hidden="true">
            <CTAButton href={cta.href} variant={ctaVariant}>
              {cta.label}
            </CTAButton>
          </div>
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
      <div className="hidden md:block absolute top-4 right-5 lg:right-10">
        <CTAButton href={cta.href} variant={ctaVariant}>
          {cta.label}
        </CTAButton>
      </div>
    </header>
  );
}
