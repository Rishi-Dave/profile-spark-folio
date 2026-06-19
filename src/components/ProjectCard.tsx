import type { Project } from "@/content/types";
import { EvidenceLink } from "./EvidenceLink";

/** A curated project, presented as a datasheet card. */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col border border-border bg-card/40 p-6 transition-colors hover:border-signal/50">
      <h3 className="font-serif text-step-1 font-medium leading-tight text-foreground">
        {project.name}
      </h3>
      <p className="mt-2 text-step--1 leading-snug text-muted-foreground">{project.blurb}</p>

      <ul className="mt-4 space-y-1.5">
        {project.highlights.map((h) => (
          <li
            key={h}
            className="relative pl-4 text-step--1 leading-snug text-foreground/85 before:absolute before:left-0 before:top-[0.55em] before:h-px before:w-2 before:bg-signal"
          >
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5 border-t border-border pt-4">
        {project.stack.map((tech) => (
          <span key={tech} className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-muted-foreground">
            {tech}
          </span>
        ))}
      </div>

      {project.links?.length ? (
        <div className="mt-4 flex flex-wrap gap-4">
          {project.links.map((l) => (
            <EvidenceLink key={l.label} link={l} />
          ))}
        </div>
      ) : null}
    </article>
  );
}
