import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(195_100%_50%/0.1),transparent_50%)]" />
      
      <div className="container max-w-5xl relative z-10 animate-fade-in">
        <div className="text-center space-y-6">
          <div className="inline-block">
            <h2 className="text-muted-foreground text-lg mb-2 font-mono">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
              Rishi Dave
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Computer Science Student at <span className="text-primary font-semibold">UC Riverside</span>
          </p>
          
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Full-Stack Software Engineer & AI/ML Specialist focused on building production systems
            from research concepts to deployed applications. I combine deep technical knowledge with
            practical engineering to solve real-world problems.
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground">Shipped Projects</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">4+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Users Reached</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow"
              asChild
            >
              <a href="/rishi-resume.pdf" download>
                <FileText className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 hover:border-primary hover:bg-primary/10 backdrop-blur-sm"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Discuss Opportunities
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 hover:border-primary hover:bg-primary/10 backdrop-blur-sm"
              asChild
            >
              <a href="#projects">
                View Projects
              </a>
            </Button>
          </div>

          <div className="flex gap-4 justify-center pt-8">
            <a 
              href="https://github.com/Rishi-Dave" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors hover:shadow-glow"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/rishi-dave1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors hover:shadow-glow"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:rishipdave@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors hover:shadow-glow"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
