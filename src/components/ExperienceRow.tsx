import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import type { Experience } from "@/content/types";

/** Compact timeline row: period | org — role + one-liner, with optional detail. */
export function ExperienceRow({ item }: { item: Experience }) {
  const [open, setOpen] = useState(false);
  const hasDetails = !!item.details?.length;
  const featured = !!item.featured;

  return (
    <div
      className={
        "grid grid-cols-1 gap-1.5 border-t border-border py-6 sm:grid-cols-[10rem_1fr] sm:gap-6" +
        (featured ? " -mx-4 border-t-2 border-t-signal bg-signal/[0.04] px-4" : "")
      }
    >
      <div className="label-mono pt-0.5">
        {item.period ?? "—"}
        {item.location ? (
          <div className="mt-1 normal-case tracking-normal text-muted-foreground">
            {item.location}
          </div>
        ) : null}
      </div>

      <div>
        <h3 className="text-step-1 font-medium leading-tight text-foreground">
          {item.org}
          <span className="text-muted-foreground">
            {" — "}
            {item.role}
            {item.track ? ` · ${item.track}` : ""}
          </span>
        </h3>
        <p className="mt-1.5 max-w-[68ch] text-step--1 leading-snug text-muted-foreground">
          {item.oneLiner}
        </p>

        {hasDetails ? (
          <Collapsible open={open} onOpenChange={setOpen} className="mt-3">
            <CollapsibleTrigger className="group inline-flex items-center gap-2 font-mono text-step--1 uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-signal focus-visible:text-signal">
              {open ? <Minus className="h-3 w-3" aria-hidden /> : <Plus className="h-3 w-3" aria-hidden />}
              {open ? "Less" : "Detail"}
            </CollapsibleTrigger>
            <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              <ul className="space-y-2 pt-4">
                {item.details!.map((d) => (
                  <li
                    key={d}
                    className="relative pl-4 text-step--1 leading-snug text-foreground/85 before:absolute before:left-0 before:top-[0.55em] before:h-px before:w-2 before:bg-signal"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        ) : null}
      </div>
    </div>
  );
}
