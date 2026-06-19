import { Github, Linkedin, FileText, Mail, Globe, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Link, LinkKind } from "@/content/types";

const ICONS: Partial<Record<LinkKind, LucideIcon>> = {
  github: Github,
  "github-repo": Github,
  linkedin: Linkedin,
  resume: FileText,
  email: Mail,
  site: Globe,
};

/** The primary links row (GitHub / LinkedIn / Résumé / Email). */
export function ProfileLinks({
  links,
  className,
}: {
  links: Link[];
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-x-5 gap-y-2", className)}>
      {links.map((link) => {
        const Icon = ICONS[link.kind] ?? Globe;
        const external = link.href.startsWith("http");
        return (
          <li key={link.label}>
            <a
              href={link.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group inline-flex items-center gap-2 font-mono text-step--1 text-foreground/80 transition-colors hover:text-signal focus-visible:text-signal"
            >
              <Icon
                aria-hidden
                className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-signal"
              />
              <span className="border-b border-transparent pb-px transition-colors group-hover:border-signal">
                {link.label}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
