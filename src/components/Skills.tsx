import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Brain, Layers, Wrench } from "lucide-react";

const expertiseLevels = [
  {
    title: "Expert (4+ years)",
    skills: ["Python", "Machine Learning", "Data Analysis", "Problem Solving"],
    description: "Deep mastery with real-world impact"
  },
  {
    title: "Proficient (2+ years)",
    skills: ["Swift/iOS Development", "AWS Services", "PyTorch", "TensorFlow", "Flask", "React.js", "Full-Stack Development"],
    description: "Production-ready across multiple projects"
  },
  {
    title: "Familiar (In-depth projects)",
    skills: ["Next.js", "FPGA Programming", "Splunk", "Power BI", "RAG Systems", "Advanced Prompt Engineering"],
    description: "Deep expertise through specialized projects"
  }
];

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "C++", "Java", "Swift", "JavaScript/TypeScript", "SQL", "HTML/CSS"]
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: ["OpenAI API", "Llama", "Gemini", "PyTorch", "TensorFlow", "Pandas", "RAG", "LangChain", "LangGraph", "Model Context Protocol"]
  },
  {
    title: "Frontend & Mobile",
    icon: Layers,
    skills: ["React.js", "Next.js", "SwiftUI", "Core Location", "MapKit", "EventKit", "HTML/CSS", "Tailwind CSS"]
  },
  {
    title: "Backend & Cloud",
    icon: Wrench,
    skills: ["Node.js", "Flask", "Django", "AWS", "MongoDB", "MySQL", "Firebase", "Docker", "GraphQL", "REST APIs"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive toolkit with clearly defined proficiency levels
          </p>
        </div>

        {/* Expertise Levels */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {expertiseLevels.map((level, index) => (
            <Card
              key={index}
              className="p-6 bg-gradient-card backdrop-blur-sm border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-lg font-bold text-primary mb-2">{level.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{level.description}</p>
              <div className="flex flex-wrap gap-2">
                {level.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary" className="bg-primary/20 text-primary text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card backdrop-blur-sm border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/20 flex-shrink-0">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                
                <div className="flex-grow space-y-3">
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="bg-secondary/60 hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-8 p-6 bg-gradient-card backdrop-blur-sm border-border">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-3 text-foreground">Additional Tools & Methodologies</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {["Git", "VSCode", "Claude Code", "Splunk", "Azure", "PowerBI", "Linux", "CI/CD", "Agile", "Unit Testing", "XCTest"].map((tool, i) => (
                <Badge key={i} variant="outline" className="border-primary/30 hover:border-primary hover:bg-primary/10">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
