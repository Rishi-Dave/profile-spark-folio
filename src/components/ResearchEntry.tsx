import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import type { Research } from "@/content/types";
import { StatBlock } from "./StatBlock";
import { EvidenceLink } from "./EvidenceLink";

/**
 * One research entry. Terse by default (title, role, summary, stat anchors);
 * contributions + status + links live behind progressive disclosure so adding
 * depth doesn't add noise.
 */
export function ResearchEntry({ entry }: { entry: Research }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="border-t border-border py-9 first:border-t-0 first:pt-0">
      <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h3 className="font-serif text-step-2 font-medium leading-tight tracking-tight text-foreground">
          {entry.title}
        </h3>
        <span className="label-mono shrink-0">
          {entry.role} · {entry.advisor}
        </span>
      </div>

      <p className="mt-3 max-w-[72ch] text-step-0 leading-relaxed text-muted-foreground">
        {entry.summary}
      </p>

      {entry.stats.length > 0 ? (
        <div className="mt-7 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {entry.stats.map((s) => (
            <StatBlock key={s.label} stat={s} />
          ))}
        </div>
      ) : null}

      <Collapsible open={open} onOpenChange={setOpen} className="mt-7">
        <CollapsibleTrigger className="group inline-flex items-center gap-2 font-mono text-step--1 uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-signal focus-visible:text-signal">
          {open ? (
            <Minus className="h-3.5 w-3.5" aria-hidden />
          ) : (
            <Plus className="h-3.5 w-3.5" aria-hidden />
          )}
          {open ? "Less" : "Contributions, status & links"}
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
          <div className="grid gap-8 pt-6 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h4 className="label-mono mb-3">Novel contributions</h4>
              <ul className="space-y-2">
                {entry.contributions.map((c) => (
                  <li
                    key={c}
                    className="relative pl-4 text-step--1 leading-snug text-foreground/85 before:absolute before:left-0 before:top-[0.55em] before:h-px before:w-2 before:bg-signal"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="label-mono mb-3">Status</h4>
              <p className="text-step--1 leading-snug text-muted-foreground">{entry.status}</p>
              {entry.links.length > 0 ? (
                <div className="mt-4 flex flex-col gap-2">
                  {entry.links.map((l) => (
                    <EvidenceLink key={l.label} link={l} />
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </article>
  );
}
