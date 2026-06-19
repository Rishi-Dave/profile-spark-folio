import type { z } from "zod";
import type {
  linkSchema,
  linkKindSchema,
  statSchema,
  pullRequestSchema,
  openSourceSchema,
  researchSchema,
  experienceSchema,
  projectSchema,
  leadershipSchema,
  identitySchema,
  profileSchema,
} from "./schema";

/**
 * Content-layer types — derived from the zod schemas in `schema.ts` so the
 * shape has a single source of truth. `import type` keeps zod out of the
 * client bundle. Components import these; content authors edit `profile.ts`.
 */

export type LinkKind = z.infer<typeof linkKindSchema>;
export type Link = z.infer<typeof linkSchema>;
export type Stat = z.infer<typeof statSchema>;
export type PullRequest = z.infer<typeof pullRequestSchema>;
export type OpenSource = z.infer<typeof openSourceSchema>;
export type Research = z.infer<typeof researchSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type Project = z.infer<typeof projectSchema>;
export type Leadership = z.infer<typeof leadershipSchema>;
export type Identity = z.infer<typeof identitySchema>;
export type Profile = z.infer<typeof profileSchema>;
