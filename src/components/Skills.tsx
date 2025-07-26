import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Automation Frameworks",
      color: "text-primary",
      skills: ["Selenium WebDriver", "Cypress", "Playwright", "TestCafe", "Appium", "Robot Framework"]
    },
    {
      title: "Programming Languages",
      color: "text-tech-blue",
      skills: ["Java", "Python", "JavaScript", "TypeScript", "C#", "Groovy"]
    },
    {
      title: "API Testing",
      color: "text-tech-green", 
      skills: ["REST Assured", "Postman", "Newman", "SoapUI", "Karate", "Insomnia"]
    },
    {
      title: "CI/CD & DevOps",
      color: "text-tech-purple",
      skills: ["Jenkins", "GitHub Actions", "GitLab CI", "Docker", "Kubernetes", "Azure DevOps"]
    },
    {
      title: "Testing Tools",
      color: "text-primary",
      skills: ["JIRA", "TestRail", "Allure", "ExtentReports", "BrowserStack", "Sauce Labs"]
    },
    {
      title: "Performance Testing",
      color: "text-tech-blue",
      skills: ["JMeter", "LoadRunner", "K6", "Artillery", "BlazeMeter", "Gatling"]
    }
  ];

  const certifications = [
    "ISTQB Foundation Level",
    "Selenium WebDriver Certification",
    "AWS Cloud Practitioner",
    "Scrum Master Certified"
  ];

  return (
    <section className="py-20 px-6 bg-gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building robust, scalable testing solutions across different platforms and technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card">
              <CardHeader>
                <CardTitle className={`text-xl ${category.color}`}>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-secondary/50 hover:bg-secondary/70 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-card rounded-lg p-8 border border-primary/20">
          <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Certifications & Training</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-primary border-primary/40 hover:bg-primary/10 transition-colors px-4 py-2 text-sm"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;