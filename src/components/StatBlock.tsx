import { cn } from "@/lib/utils";
import type { Stat } from "@/content/types";
import { EvidenceLink } from "./EvidenceLink";

/**
 * The datasheet anchor: a number set as a typographic focal point, its unit,
 * a terse label, and a link to primary evidence. An accent hairline tick is the
 * "one focal rule". When `confirm` is set, a marker shows in dev/preview only
 * (the build log lists all [CONFIRM] stats) so unverified numbers can't ship
 * silently without cluttering the production page for recruiters.
 */
export function StatBlock({
  stat,
  tone = "plain",
  size = "md",
}: {
  stat: Stat;
  tone?: "plain" | "accent";
  size?: "md" | "lg";
}) {
  const showConfirm = stat.confirm && import.meta.env.DEV;
  return (
    <div className="relative pl-4">
      <span
        aria-hidden
        className="absolute left-0 top-1 h-7 w-px bg-signal"
      />
      <div className="flex items-baseline gap-2">
        <span
          className={cn(
            "font-mono font-medium leading-[1.02] tracking-tight tnum [overflow-wrap:anywhere]",
            size === "lg" ? "text-[clamp(2rem,5.5vw,3rem)]" : "text-step-4",
            tone === "accent" ? "text-signal" : "text-foreground",
          )}
        >
          {stat.value}
        </span>
        {stat.unit ? (
          <span className="label-mono leading-none">{stat.unit}</span>
        ) : null}
        {showConfirm ? (
          <span
            title="Unverified — confirm against the live source before launch"
            className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-destructive border border-destructive/50 rounded-sm px-1 py-px"
          >
            confirm
          </span>
        ) : null}
      </div>
      <p className="mt-2 max-w-[28ch] text-step--1 leading-snug text-muted-foreground">
        {stat.label}
      </p>
      <div className="mt-2">
        <EvidenceLink link={stat.evidence} />
      </div>
    </div>
  );
}
