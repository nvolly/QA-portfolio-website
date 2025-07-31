import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Automation Frameworks",
      color: "text-primary",
      skills: ["Playwright", "Cypress", "Appium", "Cucumber", "REST Assured"],
    },
    {
      title: "Programming Languages",
      color: "text-tech-blue",
      skills: ["JavaScript", "TypeScript", "Python"],
    },
    {
      title: "API Testing",
      color: "text-tech-green",
      skills: ["REST Assured", "Grpc", "Fix", "Postman", "Swagger"],
    },
    {
      title: "CI/CD & Cload platforms",
      color: "text-tech-purple",
      skills: [
        "Jenkins",
        "GitHub Actions",
        "Azure DevOps",
        "Google cloud platform",
      ],
    },
    {
      title: "Testing Tools",
      color: "text-primary",
      skills: ["JIRA", "TestRail", "Zephyr"],
    },
    {
      title: "Performance Testing",
      color: "text-tech-blue",
      skills: ["JMeter", "Artillery"],
    },
    {
      title: "SQL testing",
      color: "text-tech-blue",
      skills: ["Sqlserver", "PostgreSQL", "MySQL", "NoSQL"],
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-hero ">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building robust, scalable testing
            solutions across different platforms and technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 text-center">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card"
            >
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
                      variant="outline"
                      className="bg-secondary/50 hover:bg-secondary/70 transition-colors cursor-default hover:shadow-card"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <p className="text-lg text-muted-foreground">
            This diverse skill set enables me to tackle complex testing
            challenges and deliver high-quality software solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
