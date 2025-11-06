import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MapPin, Phone, Zap, Users, Target } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm currently seeking full-time opportunities in Software Engineering and Machine Learning. 
            Let's connect and build something amazing together!
          </p>
        </div>

        {/* What I'm Looking For */}
        <div className="mb-12 grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 rounded-full bg-primary/20">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">ML Engineering</h4>
                <p className="text-sm text-muted-foreground">
                  LLM systems, RAG, model optimization, and production ML ops
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 rounded-full bg-accent/20">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Full-Stack Engineering</h4>
                <p className="text-sm text-muted-foreground">
                  Backend systems, iOS integration, scalable architecture design
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 rounded-full bg-primary/20">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Early-Stage Impact</h4>
                <p className="text-sm text-muted-foreground">
                  Startups leveraging AI/ML for core product differentiation
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 md:p-10 bg-gradient-card backdrop-blur-sm border-border shadow-glow">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:rishipdave@gmail.com"
                  className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">rishipdave@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="tel:+15108949147"
                  className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">(510) 894-9147</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-foreground/80">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Riverside, CA & San Francisco Bay Area</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">Connect Online</h3>
              
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-border hover:border-primary hover:bg-primary/10 transition-all group"
                  asChild
                >
                  <a href="https://github.com/Rishi-Dave" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-3 h-5 w-5 group-hover:text-primary transition-colors" />
                    <span className="flex-grow text-left">GitHub Profile</span>
                  </a>
                </Button>

                <Button 
                  variant="outline" 
                  className="w-full justify-start border-border hover:border-primary hover:bg-primary/10 transition-all group"
                  asChild
                >
                  <a href="https://linkedin.com/in/rishi-dave1" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-3 h-5 w-5 group-hover:text-primary transition-colors" />
                    <span className="flex-grow text-left">LinkedIn Profile</span>
                  </a>
                </Button>

                <Button 
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow mt-6"
                  size="lg"
                  asChild
                >
                  <a href="mailto:rishipdave@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </a>
                </Button>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Open to full-time opportunities starting Summer 2027
                </p>
              </div>
            </div>
          </div>
        </Card>

        <div className="text-center mt-12 text-muted-foreground">
          <p className="text-sm">© 2025 Rishi Dave. Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </div>
    </section>
  );
};
