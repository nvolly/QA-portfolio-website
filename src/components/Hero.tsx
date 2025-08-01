import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-tech-blue/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 pt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="break-words overflow-visible text-3xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-glow">
            QA Automation Engineer
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Building Quality Through Intelligent Testing Solutions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating robust automated testing frameworks that
            ensure software quality and accelerate delivery cycles. Specialized
            in end-to-end testing, API automation, and performance testing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 mt-16">
            <a
              href="QA_Automation_Valentin_Dragomir.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg" className="group">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </a>
          </div>

          <div className="flex justify-center space-x-12">
            <a
              href="https://www.linkedin.com/in/dragomir-valentin-672a05157/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="w-16 h-16" />
              </Button>
            </a>
            <a
              href="https://github.com/nvolly"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="w-16 h-16" />
              </Button>
            </a>
            <a
              href="mailto:dragomirvalentin1994@yahoo.com"
              aria-label="Send email"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary transition-colors"
              >
                <Mail className="w-16 h-16" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
