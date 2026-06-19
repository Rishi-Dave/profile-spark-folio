# rishidave.com

Personal site for Rishi Dave — a fast, recruiter-first credibility router. Built as a
"technical datasheet": numbers are the visual anchors, and every headline stat links to
primary evidence (merged PRs, arXiv, GitHub, talk recordings).

Stack: Vite + React + TypeScript + Tailwind + shadcn-ui, deployed on Vercel.

## Develop

```sh
npm install
npm run dev        # http://localhost:8080
npm run build      # runs prebuild (PR fetch + content validation), then builds to dist/
npm run preview    # serve the production build
npm run typecheck  # tsc --noEmit
```

## ✏️ Updating content — the one file that matters

**All** stats, projects, PRs, experience, research, and links live in a single typed file:

```
src/content/profile.ts
```

Edit a number, add an experience, swap a link — the page re-renders from this data. You
never touch component code to update content. The shape is enforced by a zod schema
(`src/content/schema.ts`); types are derived from it (`src/content/types.ts`).

Two flags control how items render:

- **`confirm: true`** on a stat → the number is **unverified**. A `CONFIRM` marker shows in
  `npm run dev` / preview (hidden in production), and **every build prints the full list of
  CONFIRM stats** so nothing unverified ships by accident. Verify against the live source,
  then delete the flag.
- **`pending: true`** on a link → the target isn't live yet (e.g. an arXiv preprint). The UI
  renders a clearly-marked "forthcoming" slot instead of a fake URL. When the link goes live,
  drop in the real `href` and remove `pending`.

The build **fails** if `profile.ts` is structurally invalid or has empty required fields, so
malformed content can't reach production.

### Live merged-PR count (optional, self-updating)

The merged-PR number is fetched at build time from the GitHub Search API
(`scripts/fetch-pr-count.mjs`) so it never goes stale, and is written to
`src/content/generated/pr-stats.json`. It counts merged PRs authored by `Rishi-Dave` in
`microsoft/onnxruntime` + `pytorch/pytorch`.

- It **degrades gracefully**: if the fetch fails (offline, rate limit), the last committed
  value is kept and the content layer falls back to `STATIC_MERGED_PRS` in `profile.ts`.
- Set `GITHUB_TOKEN` for a higher rate limit (recommended on CI / Vercel):
  add it under **Vercel → Settings → Environment Variables**.
- Run it manually: `npm run fetch:prs`.

## Architecture

```
src/
  content/
    profile.ts               # ← single source of truth (edit here)
    schema.ts                # zod schema (shape contract, build-time validation)
    types.ts                 # types derived from schema
    generated/pr-stats.json  # build-time merged-PR count (+ static fallback)
  components/                # StatBlock, EvidenceLink, PRRow, ResearchEntry, ExperienceRow,
                             # ProjectCard, SectionHeader, ThemeToggle, SiteNav, SiteFooter …
  sections/                  # Hero / OpenSource / Research / Projects / Experience
  pages/Index.tsx            # assembles the sections in recruiter-first order
scripts/
  fetch-pr-count.mjs         # optional live PR count
  validate-content.ts        # zod validation + CONFIRM reminder (build gate)
```

Design system lives in `src/index.css` (tokens, light "paper" / dark "terminal") and
`tailwind.config.ts` (type scale, fonts). Fonts are self-hosted via `@fontsource`
(IBM Plex Sans/Mono + Newsreader) — no render-blocking Google Fonts, no layout shift.

## Deploy — Vercel + rishidave.com

The project deploys on Vercel (config in `vercel.json`: SPA rewrites + immutable asset
caching). To put it on the custom domain:

1. **Vercel → Project → Settings → Domains** → add `rishidave.com` **and** `www.rishidave.com`.
2. Set `rishidave.com` as the **primary** domain; let `www` 308-redirect to it. Enable
   **"redirect to primary domain"** so the `*.vercel.app` URL is no longer canonical.
3. **DNS at your registrar** (use the exact records Vercel shows — current values):
   - `A`  `@`  → `76.76.21.21`
   - `CNAME`  `www`  → `cname.vercel-dns.com`
4. Wait for DNS + automatic TLS. `index.html` already declares
   `<link rel="canonical" href="https://rishidave.com/">`.

Optional: add `GITHUB_TOKEN` as a build env var (see live-PR-count above).

## Quality bar

Lighthouse (production build): **Performance 95 · Accessibility 100 · Best Practices 100 ·
SEO 100**, CLS 0, TBT 0 ms. Responsive from 360px; light/dark both first-class;
keyboard-navigable with a skip link and semantic landmarks.
