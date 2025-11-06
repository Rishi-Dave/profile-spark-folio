import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Jurassic Park Facial Recognition",
    description: "TensorFlow/Keras image classification model achieving 80%+ accuracy in character identification. Leveraged Microsoft Azure AI Agent for dataset creation and deployed Flask REST API for real-time inference with React.js frontend.",
    tech: ["TensorFlow", "Keras", "Flask", "React.js", "Azure AI", "REST API"],
    date: "August 2025",
    highlights: ["80%+ accuracy", "Real-time inference", "Custom dataset via Azure AI"]
  },
  {
    title: "MemoirAI - AI Storytelling App",
    description: "Full-stack iOS application transforming photos into personalized journal entries using GPT-4 Vision API. Built scalable Python Flask backend on AWS Lambda with DynamoDB and native SwiftUI frontend with MVVM architecture.",
    tech: ["iOS", "SwiftUI", "GPT-4 Vision", "AWS Lambda", "DynamoDB", "Flask", "MVVM"],
    date: "March 2025",
    highlights: ["500+ API requests handled", "75% data transfer reduction", "Secure CRUD operations"]
  },
  {
    title: "iOS Calendar AI Assistant",
    description: "Privacy-first, on-device conversational assistant for calendar management using Apple's Foundation Models. Integrated EventKit for secure event handling without cloud processing, featuring minimalist SwiftUI design.",
    tech: ["SwiftUI", "Foundation Models", "EventKit", "iOS", "On-device ML"],
    date: "August 2025",
    highlights: ["Privacy-first design", "On-device processing", "Zero cloud dependency"]
  },
  {
    title: "Fitness Tracker Mobile App",
    description: "Full-stack iOS fitness application with AWS backend using Amplify, GraphQL, and DynamoDB. Automated CI/CD pipeline with 100+ tests, secured with Amazon Cognito, and integrated geofencing for 25% engagement increase.",
    tech: ["iOS", "SwiftUI", "AWS", "GraphQL", "DynamoDB", "Cognito", "CI/CD"],
    date: "December 2024",
    highlights: ["100+ automated tests", "90% QA cycle reduction", "25% engagement increase"]
  },
  {
    title: "UCR Course Scheduling Assistant",
    description: "Python-based intelligent AI Agent using GPT-4.0 mini to autonomously plan course schedules. Built robust MongoDB backend with vector database for RAG, serving 250+ students and saving 2+ hours per user.",
    tech: ["Python", "GPT-4", "MongoDB", "Vector DB", "RAG", "FastAPI"],
    date: "June 2025",
    highlights: ["500+ students served", "2+ hours saved per user", "Autonomous planning"]
  }
];

export const Projects = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  // Get all unique technologies
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach(project => {
      project.tech.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // Filter projects based on selected technology
  const filteredProjects = useMemo(() => {
    if (!selectedTech) return projects;
    return projects.filter(project => project.tech.includes(selectedTech));
  }, [selectedTech]);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Building innovative solutions with cutting-edge technology
          </p>
        </div>

        {/* Technology Filter */}
        <div className="mb-8 animate-fade-in">
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <Badge
              onClick={() => setSelectedTech(null)}
              variant={selectedTech === null ? "default" : "secondary"}
              className={`cursor-pointer transition-all duration-300 ${
                selectedTech === null 
                  ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                  : "bg-secondary/60 hover:bg-secondary"
              }`}
            >
              All Projects
            </Badge>
            {allTechnologies.map((tech) => (
              <Badge
                key={tech}
                onClick={() => setSelectedTech(tech === selectedTech ? null : tech)}
                variant={selectedTech === tech ? "default" : "secondary"}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedTech === tech 
                    ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                    : "bg-secondary/60 hover:bg-secondary"
                }`}
              >
                {tech}
              </Badge>
            ))}
          </div>
          {selectedTech && (
            <p className="text-center text-sm text-muted-foreground animate-fade-in">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} with {selectedTech}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card backdrop-blur-sm border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{project.date}</p>
                  <p className="text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Key Highlights</p>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-foreground/70 flex items-start gap-2">
                          <span className="text-primary mt-1">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-secondary/60 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
