import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Page section: consistent vertical rhythm + content max-width. */
export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-20 py-[clamp(4rem,9vw,8rem)]", className)}
    >
      <div className="mx-auto w-full max-w-content px-6">{children}</div>
    </section>
  );
}

/** Mono index + serif title, with a hairline rule. */
export function SectionHeader({
  index,
  title,
  kicker,
}: {
  index: string;
  title: string;
  kicker?: string;
}) {
  return (
    <header className="mb-10 border-b border-border pb-5">
      <div className="label-mono mb-3">
        <span className="text-signal">{index}</span>
        <span className="mx-2 text-border">/</span>
        <span>{title}</span>
      </div>
      <h2 className="font-serif text-step-3 font-medium leading-tight tracking-tight text-foreground sm:text-step-4">
        {kicker ?? title}
      </h2>
    </header>
  );
}
