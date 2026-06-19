import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Link } from "@/content/types";

/**
 * Renders a piece of primary evidence as a mono link with an external arrow.
 * When the link is `pending`, renders a clearly-marked, non-clickable
 * "forthcoming" slot instead of a fabricated URL.
 */
export function EvidenceLink({ link, className }: { link: Link; className?: string }) {
  if (link.pending) {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 font-mono text-step--1 text-muted-foreground",
          className,
        )}
      >
        <span
          aria-hidden
          className="inline-block h-1.5 w-1.5 rounded-full border border-current"
        />
        <span className="border-b border-dashed border-current/40 pb-px">
          {link.label}
        </span>
      </span>
    );
  }

  const external = link.href.startsWith("http");
  return (
    <a
      href={link.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group/ev inline-flex items-center gap-1 font-mono text-step--1 text-foreground/80",
        "underline decoration-border underline-offset-4 transition-colors",
        "hover:text-signal hover:decoration-signal focus-visible:text-signal",
        className,
      )}
    >
      {link.label}
      <ArrowUpRight
        aria-hidden
        className="h-3.5 w-3.5 transition-transform duration-200 group-hover/ev:-translate-y-px group-hover/ev:translate-x-px"
      />
    </a>
  );
}
