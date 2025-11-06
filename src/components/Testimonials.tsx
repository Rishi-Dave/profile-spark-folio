import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Philp Brisk, Research Supervisor",
    role: "UC Riverside, Computer Science Research Lab",
    content:
      "Rishi brings solid technical depth to research problems. The work on time series classification and FPGA acceleration shows both rigor and practical thinking about performance constraints.",
    highlights: ["Research", "Optimization", "Technical Depth"],
  },
  {
    name: "Course Registration Users",
    role: "UC Riverside Students",
    content:
      "The course scheduling assistant is genuinely useful. It actually understands the constraints students care about and saves real time during registration.",
    highlights: ["User Focus", "Problem Solving", "Practical Impact"],
  },
  {
    name: "Anant Shah, Director Of Operations",
    role: "Crest Data Systems",
    content:
      "Rishi quickly picked up Splunk with minimal prior experience and independently built a production monitoring system that integrated with our microservices architecture. He went from unfamiliar with the platform to shipping a working solution in his internship, showing strong ability to learn new technologies and deliver results under time constraints.",
    highlights: ["Quick Learner", "Execution", "Technical Depth"],
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-6 bg-secondary/10">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Social Proof & Recognition
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What others say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-gradient-card backdrop-blur-sm border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-scale-in flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground/90 leading-relaxed mb-6 flex-grow italic">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="border-t border-border pt-4 mb-4">
                <p className="font-semibold text-foreground text-sm">
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {testimonial.role}
                </p>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {testimonial.highlights.map((highlight, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="bg-primary/20 text-primary text-xs"
                  >
                    {highlight}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* GitHub & Work Stats */}
        <Card className="mt-12 p-8 bg-gradient-card backdrop-blur-sm border-border text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Development Track Record
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-3xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground mt-2">
                Shipped Projects
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent">4+</p>
              <p className="text-sm text-muted-foreground mt-2">
                Years Experience
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">5+</p>
              <p className="text-sm text-muted-foreground mt-2">
                Companies & Research
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent">Full Stack</p>
              <p className="text-sm text-muted-foreground mt-2">
                iOS to Cloud ML
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
