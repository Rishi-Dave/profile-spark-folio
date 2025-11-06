import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, X, MessageCircle } from "lucide-react";

export const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Contact Menu */}
      {isOpen && (
        <div className="animate-fade-in space-y-2">
          <a
            href="mailto:rishipdave@gmail.com"
            className="flex items-center justify-end gap-3 p-3 bg-gradient-card backdrop-blur-sm border border-border rounded-lg hover:shadow-glow transition-all duration-300"
          >
            <span className="text-sm font-medium text-foreground">Email Me</span>
            <div className="p-2 rounded-full bg-primary/20">
              <Mail className="h-4 w-4 text-primary" />
            </div>
          </a>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-end gap-3 p-3 bg-gradient-card backdrop-blur-sm border border-border rounded-lg hover:shadow-glow transition-all duration-300"
          >
            <span className="text-sm font-medium text-foreground">Full Contact</span>
            <div className="p-2 rounded-full bg-accent/20">
              <MessageCircle className="h-4 w-4 text-accent" />
            </div>
          </a>
        </div>
      )}

      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="lg"
        className="rounded-full w-16 h-16 bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow flex items-center justify-center"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Mail className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
};
