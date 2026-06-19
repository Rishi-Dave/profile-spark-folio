#!/usr/bin/env node
/**
 * OPTIONAL build-time fetch of the merged-PR count from the GitHub Search API,
 * so the headline number self-updates and never goes stale.
 *
 * - Counts merged PRs authored by AUTHOR in microsoft/onnxruntime + pytorch/pytorch.
 * - Writes src/content/generated/pr-stats.json.
 * - Degrades GRACEFULLY: on any failure (offline, rate limit, bad response) it
 *   leaves the previously-committed JSON untouched, so the build never breaks
 *   and the content layer falls back to its static value.
 * - Set GITHUB_TOKEN in the environment for a higher rate limit (recommended on CI).
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const AUTHOR = "Rishi-Dave";
const REPOS = ["microsoft/onnxruntime", "pytorch/pytorch"];

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "src", "content", "generated", "pr-stats.json");

async function searchCount(repo) {
  const q = `repo:${repo} author:${AUTHOR} is:pr is:merged`;
  const url = `https://api.github.com/search/issues?q=${encodeURIComponent(q)}&per_page=1`;
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "rishidave.com-build",
  };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`${repo}: HTTP ${res.status}`);
  const json = await res.json();
  if (typeof json.total_count !== "number") throw new Error(`${repo}: no total_count`);
  return json.total_count;
}

async function main() {
  try {
    const [onnxruntime, pytorch] = await Promise.all(REPOS.map(searchCount));
    const merged = onnxruntime + pytorch;
    const payload = {
      merged,
      onnxruntime,
      pytorch,
      fetchedAt: new Date().toISOString(),
      source: "github-search-api",
    };
    writeFileSync(OUT, JSON.stringify(payload, null, 2) + "\n");
    console.log(`[pr-count] merged=${merged} (onnxruntime=${onnxruntime}, pytorch=${pytorch})`);
  } catch (err) {
    let existing = "static-fallback";
    try {
      existing = JSON.parse(readFileSync(OUT, "utf8")).merged;
    } catch {}
    console.warn(
      `[pr-count] fetch failed (${err.message}); keeping existing value (${existing}). Build continues.`,
    );
    process.exitCode = 0; // never break the build
  }
}

main();
