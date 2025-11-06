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
    category: "AI/ML",
    date: "August 2025",
    highlights: ["80%+ accuracy", "Real-time inference", "Custom dataset via Azure AI"],
    github: "https://github.com/Rishi-Dave"
  },
  {
    title: "MemoirAI - AI Storytelling App",
    description: "Full-stack iOS application transforming photos into personalized journal entries using GPT-4 Vision API. Built scalable Python Flask backend on AWS Lambda with DynamoDB and native SwiftUI frontend with MVVM architecture.",
    tech: ["iOS", "SwiftUI", "GPT-4 Vision", "AWS Lambda", "DynamoDB", "Flask", "MVVM"],
    category: "Mobile Development",
    date: "March 2025",
    highlights: ["500+ API requests handled", "75% data transfer reduction", "Secure CRUD operations"],
    github: "https://github.com/Rishi-Dave"
  },
  {
    title: "R'Eats AI",
    description: "Full-stack web application using Flask to provide personalized restaurant recommendations based on natural language user queries (e.g., cuisine, budget, ambiance) for Riverside, CA. Collected, cleaned, and structured data for 200 local restaurants using Yelp API and Pandas, then fine-tuned the GPT-3.5 Turbo LLM on 1000 curated instruction-response pairs.",
    tech: ["Yelp API", "OpenAI API", "Fine Tuning", "Flask", "Pandas"],
    category: "AI/ML",
    date: "April 2025 - May 2025",
    highlights: ["200 restaurants dataset", "1000 fine-tuning pairs", "GPT-3.5 Turbo LLM"],
    github: "https://github.com/Rishi-Dave/r-eats.ai",
    demo: "https://r-eats.ai"
  },
  {
    title: "iOS Calendar AI Assistant",
    description: "Privacy-first, on-device conversational assistant for calendar management using Apple's Foundation Models. Integrated EventKit for secure event handling without cloud processing, featuring minimalist SwiftUI design.",
    tech: ["SwiftUI", "Foundation Models", "EventKit", "iOS", "On-device ML"],
    category: "Mobile Development",
    date: "August 2025",
    highlights: ["Privacy-first design", "On-device processing", "Zero cloud dependency"],
    github: "https://github.com/Rishi-Dave"
  },
  {
    title: "Cricket T20 Analyzer",
    description: "End-to-end data analytics project involving web scraping T20 World Cup 2022 data (Bright Data), cleaning/processing (~200 players, >50k data points) with Pandas, and building a relational data model in Power BI. Designed and deployed interactive Power BI dashboards featuring 15+ custom DAX KPIs to visualize performance trends.",
    tech: ["Pandas", "Power BI", "Web Scraping", "Data Analysis", "DAX"],
    category: "Data Analytics",
    date: "March 2025 - April 2025",
    highlights: ["200+ players analyzed", "50k+ data points", "15+ custom KPIs"],
    github: "https://github.com/Rishi-Dave/cricket_analysis"
  },
  {
    title: "Fitness Tracker Mobile App",
    description: "Full-stack iOS fitness application with AWS backend using Amplify, GraphQL, and DynamoDB. Automated CI/CD pipeline with 100+ tests, secured with Amazon Cognito, and integrated geofencing for 25% engagement increase.",
    tech: ["iOS", "SwiftUI", "AWS", "GraphQL", "DynamoDB", "Cognito", "CI/CD"],
    category: "Mobile Development",
    date: "December 2024",
    highlights: ["100+ automated tests", "90% QA cycle reduction", "25% engagement increase"],
    github: "https://github.com/Rishi-Dave"
  },
  {
    title: "UCR Course Scheduling Assistant",
    description: "Python-based intelligent AI Agent using GPT-4.0 mini to autonomously plan course schedules. Built robust MongoDB backend with vector database for RAG, serving 250+ students and saving 2+ hours per user.",
    tech: ["Python", "GPT-4", "MongoDB", "Vector DB", "RAG", "FastAPI"],
    category: "AI/ML",
    date: "June 2025",
    highlights: ["500+ students served", "2+ hours saved per user", "Autonomous planning"],
    github: "https://github.com/Rishi-Dave"
  },
  {
    title: "CommentPro AI",
    description: "VS Code extension utilizing OpenAI's API to generate inline code documentation. Fine-tuned the LLM using a dataset containing 100k+ cleanly coded Python files to implement a code cleaning feature that automatically formats code using universal standards.",
    tech: ["OpenAI API", "JavaScript", "VS Code Extension", "Prompt Engineering"],
    category: "Developer Tools",
    date: "June 2024",
    highlights: ["100k+ training files", "Auto documentation", "Code formatting"],
    github: "https://github.com/Rishi-Dave/CommentPro-AI"
  },
  {
    title: "Terminal Library System",
    description: "Created a terminal library where users can sign in and checkout/return books with their account. Implemented a .txt file-based database to save and restore book and user information between sessions. As Project Lead, created the UML diagram for class relationships and Navigation Diagram for functionality using SCRUM methodology.",
    tech: ["C++", "Scrum", "Kanban Board", "UML"],
    category: "Systems Programming",
    date: "April 2024 - June 2024",
    highlights: ["Project Lead role", "File-based database", "SCRUM methodology"],
    github: "https://github.com/Rishi-Dave/LibrarySystem"
  },
  {
    title: "Quick Alert: CutieHacks 2023",
    description: "iOS app designed to send 9 specific emergency alerts, such as 'house on fire' or 'medical emergency,' to primary contacts instantly. Leveraged Firebase to create a robust backend, ensuring user accounts are securely linked and that emergency notifications are delivered to recipients in under 1 second.",
    tech: ["Swift", "SwiftUI", "Firebase"],
    category: "Mobile Development",
    date: "November 2023",
    highlights: ["<1 second delivery", "9 emergency types", "Firebase backend"],
    github: "https://github.com/Rishi-Dave/quick_alert"
  },
  {
    title: "AI Marketing Report",
    description: "Explored and evaluated 50+ AI-driven marketing strategies, including data analytics, customer segmentation, search engine optimization, and personalized content creation. Conducted a comparative analysis of AI marketing in large corporations like Starbucks and Alibaba versus startups, demonstrating that predictive analytics improved customer engagement by up to 35%.",
    tech: ["Research", "AI Strategy", "Data Analytics", "SEO"],
    category: "Research",
    date: "May 2022 - October 2022",
    highlights: ["50+ strategies analyzed", "35% engagement improvement", "Corporate vs startup analysis"],
    github: undefined
  },
  {
    title: "Electronic Waste Project",
    description: "Developed and launched a website to coordinate electronic waste pickups using HTML, CSS, and Django. Managed pickup coordination and logistics, implemented updates and improvements for user experience.",
    tech: ["Django", "JavaScript", "HTML", "CSS"],
    category: "Web Development",
    date: "November 2021 - August 2022",
    highlights: ["Full coordination system", "Logistics management", "Django backend"],
    github: "https://github.com/Rishi-Dave/Ewasteproject"
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
