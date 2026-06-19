import { profile } from "@/content/profile";
import { ThemeToggle } from "./ThemeToggle";

const SECTIONS = [
  { label: "Experience", href: "#experience" },
  { label: "Open source", href: "#open-source" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
];

const resume = profile.identity.profiles.find((p) => p.kind === "resume");

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-content items-center justify-between px-6">
        <a
          href="#top"
          className="font-mono text-step--1 font-medium tracking-tight text-foreground transition-colors hover:text-signal"
        >
          rishidave<span className="text-signal">.com</span>
        </a>

        <nav aria-label="Sections" className="hidden items-center gap-7 md:flex">
          {SECTIONS.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="font-mono text-step--1 text-muted-foreground transition-colors hover:text-signal"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {resume ? (
            <a
              href={resume.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden font-mono text-step--1 text-foreground/80 underline decoration-border underline-offset-4 transition-colors hover:text-signal hover:decoration-signal sm:inline"
            >
              Résumé
            </a>
          ) : null}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
