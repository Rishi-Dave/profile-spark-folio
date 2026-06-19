import { profile } from "@/content/profile";
import { Section, SectionHeader } from "@/components/Section";
import { ExperienceRow } from "@/components/ExperienceRow";

export function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeader index="01" title="Experience" kicker="Experience" />

      <p className="-mt-5 mb-8 max-w-[60ch] text-step-0 leading-relaxed text-muted-foreground">
        Four roles across industry &amp; research — shipping ML systems end to end, from data
        pipelines to deployed models.
      </p>

      <div>
        {profile.experience.map((item) => (
          <ExperienceRow key={item.org} item={item} />
        ))}
      </div>

      {/* Leadership — restrained tail, not foregrounded */}
      <div className="mt-12 border-t border-border pt-8">
        <h3 className="label-mono mb-4">Leadership</h3>
        <ul className="grid gap-3 sm:grid-cols-2">
          {profile.leadership.map((l) => (
            <li key={l.org} className="text-step--1 leading-snug">
              <span className="text-foreground">{l.org}</span>
              <span className="text-muted-foreground"> — {l.role}. {l.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
