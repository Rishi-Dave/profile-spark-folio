#!/usr/bin/env tsx
/**
 * Build-time validation of the content layer. Parses `profile.ts` against the
 * zod schema so malformed, empty, or structurally-wrong content FAILS THE BUILD
 * rather than shipping silently. Also surfaces a console reminder of every stat
 * still flagged `confirm: true` (the [CONFIRM] items to verify before launch).
 */
import { profile } from "../src/content/profile";
import { profileSchema } from "../src/content/schema";

const result = profileSchema.safeParse(profile);

if (!result.success) {
  console.error("\n[content] ✖ profile.ts failed schema validation:\n");
  for (const issue of result.error.issues) {
    console.error(`  • ${issue.path.join(".") || "(root)"} — ${issue.message}`);
  }
  console.error("");
  process.exit(1);
}

// Surface unverified ([CONFIRM]) stats — informational, does not fail the build.
const unconfirmed: string[] = [];
const scan = (label: string, stats: { label: string; confirm?: boolean }[]) => {
  for (const s of stats) if (s.confirm) unconfirmed.push(`${label}: ${s.label}`);
};
scan("hero", profile.heroStats);
scan("open-source", [profile.openSource.mergedCount]);
for (const r of profile.research) scan(`research/${r.id}`, r.stats);

console.log("[content] ✓ profile.ts is valid.");
if (unconfirmed.length) {
  console.log(`[content] ⚠ ${unconfirmed.length} stat(s) still flagged [CONFIRM] — verify before launch:`);
  for (const u of unconfirmed) console.log(`    - ${u}`);
}
