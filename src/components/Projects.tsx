import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "MemoirAI - AI Storytelling App",
    description: "Solves the problem of time-consuming journaling by transforming photos into personalized stories using AI. Full-stack iOS app powered by GPT-4 Vision API with serverless backend. Demonstrates end-to-end mobile + cloud integration.",
    tech: ["iOS", "SwiftUI", "GPT-4 Vision", "AWS Lambda", "DynamoDB", "Flask", "MVVM"],
    category: "Mobile Development",
    date: "March 2025",
    highlights: ["500+ API requests handled", "75% data transfer reduction", "Privacy-first architecture"],
    github: "https://github.com/Rishi-Dave"
  },
  {
    title: "UCR Course Scheduling Assistant",
    description: "Reduces student registration time from hours to minutes by using AI to autonomously plan optimal course schedules. Production AI system serving 500+ real users in first semester, proving user-centric design drives adoption.",
    tech: ["Python", "GPT-4", "MongoDB", "Vector DB", "RAG", "FastAPI"],
    category: "AI/ML",
    date: "June 2025",
    highlights: ["500+ students served", "2+ hours saved per user", "First-semester adoption success"],
    github: "https://github.com/Rishi-Dave"
  },
  {
    title: "Fitness Tracker Mobile App",
    description: "Full-stack iOS fitness app demonstrating production-ready mobile development with AWS backend integration. Features automated CI/CD, comprehensive testing, and user engagement optimization through location-based features.",
    tech: ["iOS", "SwiftUI", "AWS", "GraphQL", "DynamoDB", "Cognito", "CI/CD"],
    category: "Mobile Development",
    date: "December 2024",
    highlights: ["100+ automated tests", "90% QA cycle reduction", "25% engagement increase"],
    github: "https://github.com/Rishi-Dave"
  },
  {
    title: "R'Eats AI",
    description: "Enables personalized restaurant discovery for college students through fine-tuned LLM and data curation. Demonstrates complete ML pipeline: data collection → model fine-tuning → web deployment.",
    tech: ["Flask", "OpenAI API", "Fine Tuning", "Pandas", "Yelp API"],
    category: "AI/ML",
    date: "April 2025 - May 2025",
    highlights: ["200 restaurants curated", "1000 fine-tuning pairs", "Natural language queries"],
    github: "https://github.com/Rishi-Dave/r-eats.ai",
    demo: "https://r-eats.ai"
  },
  {
    title: "Jurassic Park Facial Recognition",
    description: "Custom image classification system for character identification demonstrating computer vision and ML deployment skills. Uses real-time inference API for practical applications in media analysis.",
    tech: ["TensorFlow", "Keras", "Flask", "React.js", "Azure AI", "REST API"],
    category: "AI/ML",
    date: "August 2025",
    highlights: ["80%+ accuracy", "Real-time inference", "Custom dataset creation"],
    github: "https://github.com/Rishi-Dave"
  },
  {
    title: "iOS Calendar AI Assistant",
    description: "Privacy-first AI solution for calendar management using on-device ML. Shows understanding of modern privacy requirements and Apple's latest ML frameworks without cloud dependency.",
    tech: ["SwiftUI", "Foundation Models", "EventKit", "iOS", "On-device ML"],
    category: "Mobile Development",
    date: "August 2025",
    highlights: ["Privacy-first design", "On-device processing", "Zero cloud dependency"],
    github: "https://github.com/Rishi-Dave"
  },
  {
    title: "Cricket T20 Analyzer",
    description: "End-to-end data analytics pipeline from web scraping to interactive dashboards. Demonstrates data science workflow: collection → cleaning → analysis → visualization with real-world sports data.",
    tech: ["Pandas", "Power BI", "Web Scraping", "Data Analysis", "DAX"],
    category: "Data Analytics",
    date: "March 2025 - April 2025",
    highlights: ["200+ players analyzed", "50k+ data points processed", "15+ custom KPIs"],
    github: "https://github.com/Rishi-Dave/cricket_analysis"
  },
  {
    title: "CommentPro AI - VS Code Extension",
    description: "Developer tool that automates code documentation and formatting using fine-tuned LLM. Shows ability to build developer experience tools and understand AI-assisted programming workflows.",
    tech: ["OpenAI API", "JavaScript", "VS Code Extension", "Prompt Engineering"],
    category: "Developer Tools",
    date: "June 2024",
    highlights: ["100k+ training files", "Auto documentation", "Code formatting"],
    github: "https://github.com/Rishi-Dave/CommentPro-AI"
  },
  {
    title: "Quick Alert - Emergency Dispatch",
    description: "iOS emergency alert app delivering critical notifications in under 1 second. Built during CutieHacks 2023, demonstrates understanding of real-time systems and security-critical applications.",
    tech: ["Swift", "SwiftUI", "Firebase", "Real-time messaging"],
    category: "Mobile Development",
    date: "November 2023",
    highlights: ["<1 second delivery time", "9 emergency alert types", "Firebase real-time backend"],
    github: "https://github.com/Rishi-Dave/quick_alert"
  },
  {
    title: "Terminal Library System",
    description: "Full library management system demonstrating software engineering fundamentals: system design, team collaboration, and project leadership. Built with SCRUM methodology and comprehensive UML documentation.",
    tech: ["C++", "Scrum", "UML Design", "Database Design"],
    category: "Systems Programming",
    date: "April 2024 - June 2024",
    highlights: ["Project Lead role", "SCRUM methodology", "Complete UML documentation"],
    github: "https://github.com/Rishi-Dave/LibrarySystem"
  }
];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get all unique categories
  const allCategories = useMemo(() => {
    const categorySet = new Set<string>();
    projects.forEach(project => {
      categorySet.add(project.category);
    });
    return Array.from(categorySet).sort();
  }, []);

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (!selectedCategory) return projects;
    return projects.filter(project => project.category === selectedCategory);
  }, [selectedCategory]);

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

        {/* Category Filter */}
        <div className="mb-8 animate-fade-in">
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <Badge
              onClick={() => setSelectedCategory(null)}
              variant={selectedCategory === null ? "default" : "secondary"}
              className={`cursor-pointer transition-all duration-300 ${
                selectedCategory === null 
                  ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                  : "bg-secondary/60 hover:bg-secondary"
              }`}
            >
              All Projects
            </Badge>
            {allCategories.map((category) => (
              <Badge
                key={category}
                onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                variant={selectedCategory === category ? "default" : "secondary"}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedCategory === category 
                    ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                    : "bg-secondary/60 hover:bg-secondary"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
          {selectedCategory && (
            <p className="text-center text-sm text-muted-foreground animate-fade-in">
              Showing {filteredProjects.length} {selectedCategory} project{filteredProjects.length !== 1 ? 's' : ''}
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
                    <div className="flex gap-2 flex-shrink-0">
                      {project.github && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          asChild
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="View live demo">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
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
