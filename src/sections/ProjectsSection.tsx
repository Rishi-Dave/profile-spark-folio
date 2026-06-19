import { profile } from "@/content/profile";
import { Section, SectionHeader } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectsSection() {
  return (
    <Section id="projects" className="bg-secondary/30">
      <SectionHeader index="04" title="Selected projects" kicker="Selected projects" />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {profile.projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </Section>
  );
}
