# Mobile/Tablet Responsive Prompt — Scalixity Landing Page

A reusable prompt for making the landing page mobile- and tablet-responsive
**without changing the desktop design (≥1024px) at all**, with the layout/feel
of [phenomenonstudio.com](https://phenomenonstudio.com) as the quality bar.

## How to use it

- The landing page is already mobile-first responsive (it collapses to single
  columns). The real work is (A) fixing desktop-only interactions that break on
  touch, and (B) upgrading generic stacks into intentional mobile layouts.
- Run it **one section component at a time**, in the order listed under PROCESS.
  Replace the `Start with:` line each run. Components live in
  [src/app/landing/_components/](../src/app/landing/_components/).
- This is a **mobile-first Tailwind** codebase, so the desktop design lives in the
  `lg:`/`xl:` classes. The lock = don't edit `lg:`/`xl:` utilities; make mobile
  changes with `max-lg:`/`max-md:`/`max-sm:` variants.
- **Verify desktop cheaply:** `git diff` each change — any edit to an existing
  `lg:`/`xl:` class is a red flag. New classes should all be `max-*`-scoped or a
  paired `lg:` restore.
- Confirm the Tailwind config supports `max-*` variants (standard in Tailwind v3+).
  The prompt tells the AI to stop and ask rather than work around it by editing
  `lg:` classes.

---

## The prompt

```
GOAL
Improve the mobile (<768px) and tablet (768–1023px) experience of the Scalixity
landing page. The DESKTOP design (≥1024px / Tailwind lg and up) is FINAL and must
render pixel-identical — do not change it even slightly. The page is already
mobile-first responsive and collapses to single columns, so this is NOT a
build-responsiveness-from-scratch task. It's two jobs:
  (A) Fix desktop-only interactions that break on touch.
  (B) Upgrade the generic single-column stacks into intentional, mobile-native
      layouts with the QUALITY and FEEL of phenomenonstudio.com — not lazy
      stacking, but also not flashy gimmicks.

STACK: Next.js + Tailwind (mobile-first utility classes; brand-* tokens; no CSS
modules, no custom media queries). Breakpoints are Tailwind defaults:
sm 640, md 768, lg 1024, xl 1280. Desktop design = lg/xl utilities.

HARD CONSTRAINT — desktop must stay byte-identical at ≥1024px
- Do NOT modify, remove, or reorder any `lg:` or `xl:` utility, and do NOT touch
  the desktop branch of any responsive toggle (e.g. `hidden lg:flex`, `lg:sticky`,
  `lg:grid-cols-12`, `lg:col-span-*`).
- Apply ALL mobile/tablet changes using `max-lg:`, `max-md:`, `max-sm:` variants,
  which only take effect below the breakpoint. If you must change an UNPREFIXED
  base utility, pair it with an `lg:` utility that restores the exact current
  desktop value, so ≥1024px is unaffected. (If `max-*` variants aren't enabled in
  this Tailwind config, tell me — don't work around it by editing lg: classes.)
- Sanity check after each change: at ≥1024px, the only classes in effect are the
  originals; every new class is `max-*`-scoped or `lg:`-restored.
- Don't introduce new colors — reuse existing brand-* tokens. If you do change any
  fill/background/text color, re-verify the paired property's contrast in every
  state (default/hover/active/disabled).
- Don't reorder DOM/markup to achieve a mobile layout — that can ripple to desktop.
  If a section genuinely needs reordering, STOP and ask me first.

REFERENCE FOR MOBILE FEEL: phenomenonstudio.com
Same kind of site, near-identical section structure. Match its mobile PATTERNS
and interaction quality, not its code. Its motion is dialed DOWN on mobile — do
the same: simpler flow, lighter animation, snappy interactions.

(A) FIX THESE TOUCH-BROKEN INTERACTIONS (highest priority)
- ClientWins: the 3D hover-rotate that reveals the dark info card does NOT work on
  touch — on mobile the info is unreachable. Make the info visible without hover:
  either always-shown on the card, or tap-to-flip. Consider a horizontal snap-
  scroll carousel (2-up with the next card peeking) instead of a flat grid.
- Services: cards play video on mouse-hover and reveal the arrow on hover — both
  dead on touch. On mobile, show a poster (or autoplay muted/inline lightly) and
  make the arrow/Explore affordance permanently visible.
- Anything else hover-only (arrows, reveals, color shifts that convey info) needs a
  visible/tap equivalent at <1024px.

(B) PER-SECTION MOBILE TREATMENT (use max-lg:/max-md: only)
- PrimaryNav: already has a slide-in drawer + hamburger — keep it. Ensure the
  mega-menu collapses into expandable accordion groups inside the drawer (not a
  flat dump), tap targets ≥44px, and the scroll-hide + color-flip behave on mobile.
- Hero: keep single column. Make CTAs full-width and thumb-friendly (stack them),
  ensure the showreel/video sits at a clean aspect ratio, keep the investor logos
  2-up and the stats readable. Don't shrink the headline into illegibility.
- Problems: desktop is scroll-pinned sticky rows with custom JS fade. On mobile,
  drop the pin/overlap and render as clean stacked cards in normal flow; gate the
  scroll-fade JS to ≥1024px (or honor reduced-motion) so it doesn't fight touch.
- Services: turn the sticky left cohort nav into a horizontally scrollable
  chip/segmented-control row pinned under the header; cards go 1-up.
- Process: the giant sticky number is already `hidden lg:flex` — good. Keep inline
  step numbers on mobile; keep the FlipNumber scramble cheap or static under
  reduced-motion.
- Cases: desktop is overlapping sticky cards (image 5 / content 7) with scroll pop.
  On mobile, disable the sticky overlap, stack image-over-content per case, keep a
  visible Explore button, and gate the pop/overlap motion to desktop / reduced-
  motion.
- Industries: tabbed. Turn the tab row into a horizontally scrollable chip row with
  a clear active state; content stacks; challenges/solutions stack.
- GlobalImpact: keep the 2-col stat grid compact and legible; ensure the world map
  scales within the viewport with no horizontal overflow (simplify it on mobile if
  needed).
- WhyChooseUs: 1-up (or 2-up on md) is fine; hover bg is passive, no touch fix
  needed. Just tune padding/type.
- Testimonials: featured quote on top, supporting quotes below — optionally make
  the supporting set a swipeable carousel with dot indicators rather than a long
  stack.
- ContactForm: stack form then aside; full-width submit; budget chips wrap or
  scroll horizontally; keep file upload usable; reduce/disable the paper-plane
  animation under reduced-motion. Consider a sticky bottom submit on mobile.
- Footer: already stacks with a working accordion — just verify tap targets and
  spacing.

GLOBAL MOBILE RULES
- Respect prefers-reduced-motion; reduce scroll/IntersectionObserver/parallax/
  hover-driven motion on mobile generally.
- Touch targets ≥44px; retune spacing rhythm for thumb reach, don't just scale px.
- Correct image/video aspect ratios per breakpoint; no letterboxing or cropped
  content; no horizontal overflow anywhere.

PROCESS
- Work ONE section component at a time, in this order: ClientWins, Services
  (the two touch-broken ones first), then Problems, Cases, Industries, Hero,
  Testimonials, ContactForm, GlobalImpact, PrimaryNav, WhyChooseUs, Footer.
- Before editing a section, audit its current desktop structure and tell me which
  mobile pattern you're applying and why.
- After editing, confirm ≥1024px is untouched (only max-*/lg:-restored classes
  added) and describe how the section looks/behaves at 768px and 375px.

Start with: src/app/landing/_components/ClientWins.tsx
```

---

## Self-verify checklist

Paste this at the end of each run so the AI self-verifies before reporting done.

```
SELF-VERIFY BEFORE YOU REPORT DONE — answer each with evidence, not just a tick.

DESKTOP UNCHANGED (≥1024px)
[ ] I did not edit, remove, or reorder any `lg:` or `xl:` utility. (If I changed
    any, list them and why — this should be empty.)
[ ] I did not touch the desktop branch of any toggle (`hidden lg:flex`,
    `lg:sticky`, `lg:grid-cols-*`, `lg:col-span-*`, etc.).
[ ] Every change I made is scoped with `max-lg:` / `max-md:` / `max-sm:`, OR is a
    base-class change paired with an `lg:` utility restoring the exact prior
    desktop value. List each new class and its scope.
[ ] At ≥1024px the computed styles are identical to before. State how you know
    (e.g. "all new classes are max-* scoped, so they're inert ≥1024px").
[ ] git diff contains no edits to existing lg:/xl: classes. Paste the diff
    summary or confirm.
[ ] I did not reorder or restructure DOM/markup. (If a reorder seemed needed, I
    stopped and asked instead.)

TOUCH & INTERACTION (<1024px)
[ ] No information or action is reachable only via hover. Hover-only reveals,
    arrows, video-on-hover, and color-coded states have a visible or tap
    equivalent on touch.
[ ] All tap targets are ≥44px.

MOBILE QUALITY
[ ] No horizontal overflow at 375px or 768px (no element wider than the viewport).
[ ] Images/videos have correct aspect ratios — no letterboxing or cropped content.
[ ] Motion is reduced on mobile and respects prefers-reduced-motion (scroll-pin,
    IntersectionObserver pops, parallax, plane/scramble animations gated or
    lightened).
[ ] Text is legible — nothing shrunk into an unreadable size.

CONTRAST (only if I changed any color)
[ ] I reused existing brand-* tokens (no new colors). If I changed a fill/bg/text
    color, I re-checked the paired property's contrast in default, hover, active,
    and disabled states.

REPORT
[ ] Which mobile pattern I applied to this section and why.
[ ] How it looks/behaves at 768px and at 375px.
```
