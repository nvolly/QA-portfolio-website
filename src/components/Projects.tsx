import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Test Automation Suite",
      description: "Comprehensive end-to-end testing framework for a major e-commerce platform covering user journeys, payment processing, and inventory management.",
      technologies: ["Selenium", "Java", "TestNG", "Maven", "Jenkins"],
      metrics: ["90% test coverage", "70% faster execution", "85% bug detection rate"],
      type: "Web Automation"
    },
    {
      title: "Mobile Banking App Testing",
      description: "Cross-platform mobile testing solution for iOS and Android banking applications including biometric authentication and transaction flows.",
      technologies: ["Appium", "Python", "Pytest", "BrowserStack", "GitLab CI"],
      metrics: ["15+ devices tested", "99.9% reliability", "50% time reduction"],
      type: "Mobile Testing"
    },
    {
      title: "Microservices API Test Framework",
      description: "Scalable API testing framework for microservices architecture with contract testing, load testing, and comprehensive reporting.",
      technologies: ["REST Assured", "Java", "Docker", "JMeter", "Allure"],
      metrics: ["200+ APIs tested", "Contract validation", "Performance baseline"],
      type: "API Testing"
    },
    {
      title: "Performance Testing Dashboard",
      description: "Real-time performance monitoring and testing dashboard that integrates with CI/CD pipeline to track application performance metrics.",
      technologies: ["K6", "JavaScript", "Grafana", "InfluxDB", "GitHub Actions"],
      metrics: ["Real-time monitoring", "Automated alerts", "Performance trending"],
      type: "Performance"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Web Automation": return "text-primary";
      case "Mobile Testing": return "text-tech-blue";
      case "API Testing": return "text-tech-green";
      case "Performance": return "text-tech-purple";
      default: return "text-foreground";
    }
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing real-world automation solutions that have driven quality improvements and efficiency gains across different industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card group">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className={`${getTypeColor(project.type)} border-current`}>
                    {project.type}
                  </Badge>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 opacity-60 group-hover:opacity-100 transition-opacity">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 opacity-60 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.metrics.map((metric, metricIndex) => (
                      <li key={metricIndex} className="text-sm text-muted-foreground flex items-center">
                        <Play className="w-3 h-3 mr-2 text-primary fill-current" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;