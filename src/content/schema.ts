import { z } from "zod";

/**
 * Runtime schema for the content layer. This is the single source of truth for
 * the SHAPE of the profile data — the TypeScript types in `types.ts` are derived
 * from it, and `scripts/validate-content.ts` parses `profile.ts` against it at
 * build time so malformed or empty content fails the build (never ships silently).
 *
 * zod is imported ONLY here and in the build script — `types.ts` re-exports the
 * inferred types via `import type`, so zod is erased from the client bundle.
 */

export const linkKindSchema = z.enum([
  "github",
  "linkedin",
  "resume",
  "email",
  "site",
  "arxiv",
  "github-repo",
  "talk",
  "pr",
]);

export const linkSchema = z.object({
  label: z.string().min(1),
  /** A real URL, OR "#" when paired with `pending: true` (a not-yet-live slot). */
  href: z.string().min(1),
  kind: linkKindSchema,
  /** true => render a clearly-marked "forthcoming" slot instead of a live link. */
  pending: z.boolean().optional(),
});

export const statSchema = z.object({
  value: z.string().min(1),
  unit: z.string().optional(),
  label: z.string().min(1),
  evidence: linkSchema,
  /** true => stat is unverified; UI flags it so it can't ship unconfirmed. */
  confirm: z.boolean().optional(),
});

export const pullRequestSchema = z.object({
  repo: z.enum(["onnxruntime", "pytorch"]),
  number: z.number().int().positive(),
  title: z.string().min(1),
  impact: z.string().min(1),
  url: z.string().url(),
});

export const openSourceSchema = z.object({
  mergedCount: statSchema,
  totalNote: z.string().min(1),
  reviewers: z.array(z.object({ name: z.string().min(1), org: z.string().min(1) })),
  subsystems: z.array(z.string().min(1)),
  featured: z.array(pullRequestSchema).min(1),
  framing: z.string().min(1),
});

export const researchSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  advisor: z.string().min(1),
  role: z.string().min(1),
  summary: z.string().min(1),
  stats: z.array(statSchema),
  contributions: z.array(z.string().min(1)),
  status: z.string().min(1),
  links: z.array(linkSchema),
});

export const experienceSchema = z.object({
  org: z.string().min(1),
  role: z.string().min(1),
  track: z.string().optional(),
  location: z.string().min(1).optional(),
  period: z.string().min(1).optional(),
  /** Visually elevate this role (accent highlight) — e.g. the flagship company. */
  featured: z.boolean().optional(),
  oneLiner: z.string().min(1),
  details: z.array(z.string().min(1)).optional(),
});

export const projectSchema = z.object({
  name: z.string().min(1),
  blurb: z.string().min(1),
  stack: z.array(z.string().min(1)),
  highlights: z.array(z.string().min(1)),
  links: z.array(linkSchema).optional(),
});

export const leadershipSchema = z.object({
  org: z.string().min(1),
  role: z.string().min(1),
  note: z.string().min(1),
});

export const identitySchema = z.object({
  name: z.string().min(1),
  positioning: z.string().min(1),
  gpa: z.string().min(1),
  gradDate: z.string().min(1),
  honors: z.array(z.string().min(1)),
  citizenship: z.string().min(1),
  contact: z.object({ email: z.string().email(), phone: z.string().min(1) }),
  profiles: z.array(linkSchema),
});

export const profileSchema = z.object({
  identity: identitySchema,
  heroStats: z.array(statSchema).min(2),
  openSource: openSourceSchema,
  research: z.array(researchSchema).min(1),
  projects: z.array(projectSchema),
  experience: z.array(experienceSchema),
  leadership: z.array(leadershipSchema),
  meta: z.object({ siteUrl: z.string().url() }),
});
