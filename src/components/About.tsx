import { Card, CardContent } from "@/components/ui/card";
import { Code2, Zap, Target, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "Technical Excellence",
      description: "Expert in multiple testing frameworks including Playwright, Cypress, Appium, Cucumber and REST Assured"
    },
    {
      icon: <Zap className="w-8 h-8 text-tech-blue" />,
      title: "Automation Focus",
      description: "Specialized in building scalable automation frameworks that reduce testing time by 80%"
    },
    {
      icon: <Target className="w-8 h-8 text-tech-green" />,
      title: "Quality Driven",
      description: "Committed to delivering bug-free software through comprehensive testing strategies"
    },
    {
      icon: <Users className="w-8 h-8 text-tech-purple" />,
      title: "Team Collaboration",
      description: "Strong communicator who works effectively with development teams and stakeholders"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With over 5 years of experience in QA automation, I transform manual testing processes into efficient, 
            automated solutions that scale with business needs. My expertise spans web, mobile, and API testing across 
            various industries including fintech and high-traffic web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-card rounded-lg p-8 border border-primary/20">
          <h3 className="text-2xl font-bold mb-6 text-center text-foreground">My Testing Philosophy</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-3 text-primary">Shift-Left Testing</h4>
              <p className="text-muted-foreground text-sm">
                Integrating testing early in the development cycle to catch issues before they become expensive problems.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-3 text-tech-blue">Continuous Quality</h4>
              <p className="text-muted-foreground text-sm">
                Building automated testing pipelines that provide immediate feedback and maintain quality standards.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-3 text-tech-green">Strategic Automation</h4>
              <p className="text-muted-foreground text-sm">
                Focusing automation efforts on high-value, repetitive tasks while maintaining exploratory testing practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;