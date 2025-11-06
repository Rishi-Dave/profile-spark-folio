import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Data Science Fellow",
    company: "UC Riverside, Information Technology Services",
    location: "Riverside, CA",
    period: "June 2025 – Present",
    description: [
      "Engineered a Python-based intelligent AI Agent powered by GPT-4.0 mini, adopted by over 500 UCR students",
      "Built a robust data backend using MongoDB and vector database for 10,000+ course offerings with RAG",
      "Implemented dynamic agent control functionalities, saving 2+ hours of decision-making per student"
    ],
    skills: ["Python", "GPT-4", "MongoDB", "RAG", "Vector DB", "FastAPI"],
    summary: "Demonstrated ability to ship production AI systems that drive real user adoption",
    learning: "Intelligent product design drives adoption - user understanding beats feature complexity"
  },
  {
    title: "Machine Learning Research Assistant",
    company: "UC Riverside, Computer Science Research Lab",
    location: "Riverside, CA",
    period: "April 2025 – Present",
    description: [
      "Developed and trained MiniRocket-based time series classification models across 106 UCR datasets",
      "Achieved average accuracy of ~92% across diverse time series classification tasks",
      "Implementing FPGA acceleration with preliminary speedups exceeding 20x over CPU baseline"
    ],
    skills: ["Machine Learning", "MiniRocket", "FPGA", "Python", "Time Series"],
    summary: "Research expertise combined with systems-level optimization - bridging theory and practical engineering",
    learning: "Performance gains require understanding both algorithms and hardware constraints"
  },
  {
    title: "Software Engineering Intern",
    company: "Reeko Cabinets, LLC",
    location: "Union City, CA",
    period: "June 2024 – September 2024",
    description: [
      "Engineered a PyTorch-based linear regression model to forecast bi-monthly parts demand",
      "Improved prediction accuracy by 25% through consolidated dataset of 1000+ historical records",
      "Designed automated ordering model minimizing stockout incidents and optimizing inventory"
    ],
    skills: ["PyTorch", "Linear Regression", "Data Analysis", "Python", "Excel"],
    summary: "Proved ability to drive direct business impact - 25% accuracy improvement reduced operational costs",
    learning: "Data engineering is as critical as modeling - quality data multiplies model effectiveness"
  },
  {
    title: "Software Engineer Intern",
    company: "Crest Data Systems",
    location: "San Jose, CA",
    period: "June 2023 – August 2023",
    description: [
      "Developed custom Splunk app ingesting 1000+ log files per minute from HR server",
      "Created real-time monitoring dashboards for system events and error tracking",
      "Corrected 12% login error rate, improving system stability for enterprise clients"
    ],
    skills: ["Splunk", "Python", "Linux", "Log Analysis", "Dashboards"],
    summary: "Hands-on experience with enterprise systems - operational visibility is as critical as features",
    learning: "Effective communication of technical findings to non-technical stakeholders drives adoption"
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-secondary/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional journey in software engineering and data science
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-12 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-glow z-10"></div>
                
                {/* Content Card */}
                <div className="ml-16 md:ml-24">
                  <Card 
                    className="p-6 md:p-8 bg-gradient-card backdrop-blur-sm border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="p-3 rounded-full bg-primary/20 w-fit group-hover:bg-primary/30 transition-colors">
                          <Briefcase className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      
                      <div className="flex-grow space-y-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{exp.title}</h3>
                          <p className="text-primary font-semibold">{exp.company}</p>
                          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mt-1">
                            <span>{exp.location}</span>
                            <span>•</span>
                            <span className="font-mono text-xs">{exp.period}</span>
                          </div>
                        </div>

                        <ul className="space-y-2">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-foreground/80 flex items-start gap-2">
                              <span className="text-primary mt-1.5">▹</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="grid md:grid-cols-2 gap-4 pt-3 border-t border-border/50">
                          <div className="p-3 bg-primary/5 rounded">
                            <p className="text-xs font-semibold text-primary mb-1">ROLE IMPACT</p>
                            <p className="text-sm text-foreground/80">{exp.summary}</p>
                          </div>
                          <div className="p-3 bg-accent/5 rounded">
                            <p className="text-xs font-semibold text-accent mb-1">KEY LEARNING</p>
                            <p className="text-sm text-foreground/80">{exp.learning}</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-3">
                          {exp.skills.map((skill, i) => (
                            <Badge key={i} variant="secondary" className="bg-secondary/60 hover:bg-secondary transition-colors">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
