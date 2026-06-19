import { profile } from "@/content/profile";
import { StatBlock } from "@/components/StatBlock";
import { ProfileLinks } from "@/components/ProfileLinks";

export function HeroSection() {
  const { identity, heroStats } = profile;

  return (
    <section
      id="top"
      className="relative pt-[clamp(4.5rem,11vh,8rem)] pb-[clamp(3rem,7vw,5.5rem)]"
    >
      <div className="mx-auto w-full max-w-content px-6">
        <p className="label-mono mb-5 animate-rise">
          <span className="text-signal">●</span> Seeking Summer 2027 SWE / ML internships
        </p>

        <h1 className="font-serif text-[clamp(2.75rem,8vw,5rem)] font-medium leading-[1.02] tracking-tight text-foreground animate-rise [animation-delay:60ms]">
          {identity.name}
        </h1>

        <p className="mt-4 max-w-[36ch] text-step-2 leading-snug text-foreground/85 animate-rise [animation-delay:120ms]">
          {identity.positioning}
        </p>

        <p className="mt-6 font-mono text-step--1 leading-relaxed text-muted-foreground animate-rise [animation-delay:160ms]">
          UC Riverside · B.S. Computer Science, Minor in Mathematics · GPA {identity.gpa}
          <br className="hidden sm:block" />
          <span className="sm:hidden"> · </span>
          Graduating {identity.gradDate} · {identity.citizenship} · {identity.honors.join(" · ")}
        </p>

        <ProfileLinks links={identity.profiles} className="mt-7 animate-rise [animation-delay:200ms]" />

        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-border pt-10 sm:grid-cols-3 sm:gap-6">
          {heroStats.map((stat, i) => (
            <div
              key={stat.label}
              className="animate-rise"
              style={{ animationDelay: `${260 + i * 70}ms` }}
            >
              <StatBlock stat={stat} tone="accent" size="lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
