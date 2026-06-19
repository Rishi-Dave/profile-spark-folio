import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { HeroSection } from "@/sections/HeroSection";
import { OpenSourceSection } from "@/sections/OpenSourceSection";
import { ResearchSection } from "@/sections/ResearchSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ExperienceSection } from "@/sections/ExperienceSection";

const Index = () => {
  return (
    <div className="paper-grain min-h-screen overflow-x-clip bg-background text-foreground">
      <a
        href="#experience"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-foreground focus:px-3 focus:py-2 focus:font-mono focus:text-step--1 focus:text-background"
      >
        Skip to content
      </a>

      <SiteNav />

      <main className="pt-14">
        <HeroSection />
        <ExperienceSection />
        <OpenSourceSection />
        <ResearchSection />
        <ProjectsSection />
      </main>

      <SiteFooter />
    </div>
  );
};

export default Index;
