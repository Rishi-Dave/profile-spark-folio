import { profile } from "@/content/profile";
import { Section, SectionHeader } from "@/components/Section";
import { StatBlock } from "@/components/StatBlock";
import { PRRow } from "@/components/PRRow";

export function OpenSourceSection() {
  const os = profile.openSource;

  return (
    <Section id="open-source" className="bg-secondary/30">
      <SectionHeader index="02" title="Open source" kicker="Production ML infrastructure" />

      <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        {/* Left: the headline number + framing + reviewers + subsystems */}
        <div>
          <StatBlock stat={os.mergedCount} tone="accent" size="lg" />
          <p className="mt-2 font-mono text-step--1 text-muted-foreground">{os.totalNote}</p>

          <p className="mt-6 max-w-[44ch] text-step-0 leading-relaxed text-foreground/85">
            {os.framing}
          </p>

          <div className="mt-7">
            <h3 className="label-mono mb-2">Reviewed &amp; merged by</h3>
            <ul className="space-y-1">
              {os.reviewers.map((r) => (
                <li key={r.name} className="text-step--1 text-muted-foreground">
                  <span className="text-foreground">{r.name}</span> — {r.org}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="label-mono mb-2">Subsystems touched</h3>
            <p className="font-mono text-[0.7rem] uppercase leading-relaxed tracking-[0.08em] text-muted-foreground">
              {os.subsystems.map((s, i) => (
                <span key={s}>
                  {s}
                  {i < os.subsystems.length - 1 ? (
                    <span className="mx-2 text-border">/</span>
                  ) : null}
                </span>
              ))}
            </p>
          </div>
        </div>

        {/* Right: featured PRs */}
        <div>
          <h3 className="label-mono mb-1">Representative merged PRs</h3>
          <div>
            {os.featured.map((pr) => (
              <PRRow key={`${pr.repo}-${pr.number}`} pr={pr} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
