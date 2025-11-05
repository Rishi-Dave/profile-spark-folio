import { Card } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pursuing excellence in Computer Science with a focus on AI and Machine Learning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-full bg-primary/20">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Education</h3>
                <p className="text-muted-foreground">University of California, Riverside</p>
                <p className="text-sm text-foreground/80 mt-2">B.S. Computer Science, Minor in Math</p>
                <p className="text-sm text-muted-foreground">Expected June 2027</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-full bg-accent/20">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Achievements</h3>
                <p className="text-muted-foreground">GPA: 3.95/4.00</p>
                <p className="text-sm text-foreground/80 mt-2">Dean's & Chancellor's Honor List</p>
                <p className="text-sm text-muted-foreground">Tau Beta Pi Honors</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-full bg-primary/20">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Focus Areas</h3>
                <p className="text-muted-foreground">Machine Learning & AI</p>
                <p className="text-sm text-foreground/80 mt-2">Full-Stack Development</p>
                <p className="text-sm text-muted-foreground">Data Science & Analytics</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-gradient-card backdrop-blur-sm border-border">
          <p className="text-foreground/90 leading-relaxed text-center max-w-4xl mx-auto">
            I'm a Computer Science student at UC Riverside with a passion for leveraging technology to solve complex problems. 
            Currently working as a Data Science Fellow and Machine Learning Research Assistant, I've developed AI-powered systems 
            that serve hundreds of users and achieved 92% accuracy in time series classification models. My experience spans from 
            building iOS applications with SwiftUI to implementing scalable backend systems with AWS and MongoDB. I'm driven by 
            the challenge of creating intelligent, user-centric solutions that make a real-world impact.
          </p>
        </Card>
      </div>
    </section>
  );
};
