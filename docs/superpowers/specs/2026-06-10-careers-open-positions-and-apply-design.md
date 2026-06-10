# Careers: Open Positions section + Apply page — Design

**Date:** 2026-06-10
**Status:** Approved (pending spec review)
**Scope:** Two related careers-page features — an "Open positions" listing section and a dedicated job-inquiry/application page.

## Goal

Let prospective candidates (1) see the roles Scalixity is hiring for and (2) apply/inquire through a specialized form. Both live on/under `/careers`. No backend/ATS exists in this repo, so the form reuses the one submission endpoint the site already has.

## Confirmed decisions

| Decision | Choice |
| --- | --- |
| Form placement | Dedicated page `/careers/apply`, role preselected via `?role=<slug>` |
| Open Positions data | Static placeholder roles, clearly flagged MOCK |
| CV / resume | File upload, mirroring `ContactForm`'s attach UI (only the filename reaches the backend today) |
| Extra fields | Phone (optional), Years of experience, Availability/start, Location/timezone |
| Code sharing | **Approach B** — `ApplicationForm` is self-contained; `ContactForm` is NOT modified |
| Empty state | Proper, designed empty state when `POSITIONS` is empty (not an afterthought) |

## Existing context (constraints)

- **No jobs/ATS API.** The site has no `src/app/api` routes. `ContactForm` POSTs to an external backend at `${NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000"}/api/contact` with `{ name, email, phone, message }`, folding extras (budget, attachment filename) into `message`. The new form follows the same pattern.
- **File uploads are name-only.** The existing `/api/contact` is JSON, not multipart — it records the attachment's *filename*, not its bytes. The application form has the same limitation; this is called out in code and to the user. Real resume delivery needs a multipart endpoint (out of scope, backend lives outside this repo).
- **Chrome model.** Redesigned pages render their own `brand-root` chrome (`PrimaryNav` + `Footer`) and are listed in `ClientLayout.hideLayout` (exact-match `.includes(pathname)`). The new `/careers/apply` route needs an explicit entry.
- **Brand rules.** Honest content only — mock roles/quotes are clearly flagged; no fabricated metrics or named real staff.

## Architecture

New/changed files:

```
src/app/careers/
  careers-positions.ts            (new) static positions data + helpers
  apply/page.tsx                  (new) server component: chrome + ApplicationForm
  _components/
    OpenPositions.tsx             (new) jobs-board listing + empty state
    ApplicationForm.tsx           (new) self-contained client form (Approach B)
  page.tsx                        (edit) insert <OpenPositions/>; repoint closers (see below)
src/app/components/ClientLayout.tsx (edit) add "/careers/apply" to hideLayout
```

`ContactForm.tsx` is intentionally **not** touched.

### 1. Data — `careers-positions.ts`

Static module, mirroring the accepted `services-content.ts` / `posts.ts` pattern.

```ts
export type Position = {
  slug: string;     // url-safe id, e.g. "product-engineer"
  title: string;    // "Product Engineer"
  team: string;     // "Engineering"
  type: string;     // "Full-time"
  location: string; // "Remote"
  summary: string;  // one-line blurb for the list
};

export const POSITIONS: Position[] = [ /* ~4 MOCK roles */ ];

export function getPosition(slug?: string): Position | undefined;
```

~4 realistic mock roles (e.g. Product Engineer, AI/ML Engineer, Product Designer, Open application), each flagged MOCK in a file comment. Making `POSITIONS` an empty array must produce the empty state with no other code change — this is the switch the user will flip when there are genuinely no openings.

### 2. `OpenPositions.tsx` (light section, `id="open-positions"`)

- Eyebrow "Open positions" + display title + short lead.
- **Populated state:** a jobs-board-style stacked list. Each row: title, meta line (`team · type · location`), one-line summary, and an **Apply** affordance (CTAButton or arrow link) → `/careers/apply?role=<slug>`. Rows separated by `border-t border-brand-ink/10`; subtle hover (e.g. row bg / arrow shift) using `ease-brand-out`. Whole row is a `next/link` for a large click target.
- **Empty state (designed, first-class):** when `POSITIONS.length === 0`, render a centered panel within the same section:
  - Eyebrow stays "Open positions".
  - Headline: "No open roles right now."
  - Body: "We're not actively hiring at the moment — but we're always glad to meet people who care about great work. Tell us about yourself and we'll reach out when something opens up."
  - Primary CTA "Introduce yourself" → `/careers/apply` (no role param → form defaults to "General / Other").
  - Visual treatment consistent with brand (e.g. a bordered/`bg-brand-ink/[0.03]` rounded panel with a lucide icon mark), so it reads as intentional, not a blank gap.
- Placement on `/careers`: after `Perks`, before the `ReadyToJoin` / `CareersCTA` closers (sell culture + benefits first, then show roles, then the closing CTAs).

### 3. Closer wiring (small edits to existing components)

So the existing closers tie into the new section:
- `CareersCTA` ("Don't see your role? Reach out anyway.") button → `/careers/apply` (was `/contact`).
- `ReadyToJoin` ("Ready to join us?") button → `#open-positions` (was `/contact`), label adjusted to "See open roles".

> Note for reviewer: this repointing was proposed, not explicitly confirmed. If you'd rather leave those two CTAs pointing at `/contact`, say so during spec review and I'll drop this part.

### 4. Apply page — `careers/apply/page.tsx` (server component)

- `searchParams: Promise<{ role?: string }>` (Next 15 async) → `await` → `getPosition(role)`; unknown/missing role is fine (no `notFound()`) — the form defaults to "General / Other".
- `generateMetadata` → `{ title: "Apply — Careers — Scalixity", description: ... }`.
- Renders `<div className="brand-root min-h-screen">`: `PrimaryNav` (props from `primary-nav-config`) → `<ApplicationForm initialRole={...} />` → `CurvedDivider fromColor="ink"` → `Footer`.
- Add `"/careers/apply"` to `ClientLayout.hideLayout`.

### 5. `ApplicationForm.tsx` (self-contained client component — Approach B)

Reuses shared design primitives only: `CTAButton`, `Scramble`, `StaggerText`, `CountrySelect`, and the `react-phone-number-input` / `libphonenumber-js` libraries. The phone-validation helpers and the dark field component are **copied locally** (Approach B) — `ContactForm` is not refactored.

Section style: dark (`bg-brand-ink text-brand-bone`), same as `ContactForm`, header via `Scramble`/`StaggerText` (eyebrow "Apply", title e.g. "Tell us about yourself").

Fields:
- **Name** * (text)
- **Email** * (validated)
- **Role** (select: every `POSITIONS` title + "General / Other"; default = `initialRole?.title ?? "General / Other"`)
- **Phone** (optional; reused `PhoneInput` + local validation helpers, default country IN)
- **Years of experience** (select: "0–2", "3–5", "5+")
- **Availability** (select: "Immediately", "2 weeks", "1 month", "Flexible")
- **Location / timezone** (text, optional)
- **Message / cover note** * (text)
- **Resume** (file attach, same UI/limits as ContactForm: 10 MB cap, `.pdf,.doc,.docx`; filename-only delivery, flagged)

Behaviour:
- Inline validation + error styling + success state mirroring `ContactForm` (own local copies).
- Submit → `POST ${baseURL}/api/contact` with `{ name, email, phone, message }`, where `message` folds the specialised fields:
  ```
  <cover note>

  Position: <role title>
  Years of experience: <exp>
  Availability: <availability>
  Location/Timezone: <location>
  Resume: <filename> (<size>)   // only if a file was attached
  ```
- Success view: tailored copy ("Application received — thanks for your interest. We'll review it and get back to you.").

## Edge cases

- `?role=` missing or unknown → form opens on "General / Other"; no 404.
- `POSITIONS` empty → `OpenPositions` renders the empty state; `/careers/apply` still works (role select shows only "General / Other").
- Submit failure → inline error with fallback email, same as ContactForm.
- Reduced motion / mobile → inherit the brand components' existing handling.

## Out of scope

- A real `/api/careers` multipart endpoint for actual resume-file delivery (backend lives outside this repo).
- Per-role detail pages (the listing + apply page are sufficient; YAGNI).
- Any change to `ContactForm` (Approach B).

## Verification

1. `npx tsc --noEmit` → exit 0.
2. Clean `npm run build` → exit 0; route count grows by one (`/careers/apply`); existing pages still prerender.
3. Manual spot-checks (dev): `/careers` shows Open Positions; an "Apply" link opens `/careers/apply?role=<slug>` with the role preselected; `/careers/apply` (no param) defaults to "General / Other"; unknown `?role=` falls back gracefully; submitting hits `/api/contact` with folded message; success state renders.
4. Empty-state check: temporarily set `POSITIONS = []` → `OpenPositions` shows the designed empty state and "Introduce yourself" → `/careers/apply`; restore the mock roles.
