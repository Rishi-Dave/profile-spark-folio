import { ArrowUpRight } from "lucide-react";
import type { PullRequest } from "@/content/types";

const REPO_LABEL: Record<PullRequest["repo"], string> = {
  onnxruntime: "ONNX Runtime",
  pytorch: "PyTorch",
};

/** A single featured pull request as a datasheet row. */
export function PRRow({ pr }: { pr: PullRequest }) {
  return (
    <a
      href={pr.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid grid-cols-[1fr_auto] items-start gap-4 border-t border-border py-5 transition-colors hover:bg-secondary/40"
    >
      <div>
        <span className="font-mono text-step--1 text-signal tnum">
          {REPO_LABEL[pr.repo]} #{pr.number}
        </span>
        <h3 className="mt-1.5 text-step-0 font-medium leading-snug text-foreground">
          {pr.title}
        </h3>
        <p className="mt-1 max-w-[60ch] text-step--1 leading-snug text-muted-foreground">
          {pr.impact}
        </p>
      </div>
      <ArrowUpRight
        aria-hidden
        className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-all duration-200 group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-signal"
      />
    </a>
  );
}
