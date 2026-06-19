import { profile } from "@/content/profile";
import { Section, SectionHeader } from "@/components/Section";
import { ResearchEntry } from "@/components/ResearchEntry";

export function ResearchSection() {
  return (
    <Section id="research">
      <SectionHeader index="03" title="Research" kicker="First-author systems research" />
      <div>
        {profile.research.map((entry) => (
          <ResearchEntry key={entry.id} entry={entry} />
        ))}
      </div>
    </Section>
  );
}
