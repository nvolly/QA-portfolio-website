import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior QA Automation Engineer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Lead automation testing initiatives for enterprise-level applications serving 10M+ users. Design and implement comprehensive testing strategies that reduced production bugs by 60%.",
      achievements: [
        "Architected test automation framework reducing test execution time by 75%",
        "Led team of 5 QA engineers implementing best practices across multiple projects",
        "Integrated automated testing into CI/CD pipeline achieving 99.5% deployment success rate",
        "Mentored junior engineers and conducted technical interviews"
      ],
      technologies: ["Selenium", "Java", "Kubernetes", "Jenkins", "AWS"]
    },
    {
      title: "QA Automation Engineer",
      company: "FinanceFlow Inc",
      location: "New York, NY",
      period: "2020 - 2022",
      type: "Full-time", 
      description: "Developed automated testing solutions for financial applications with strict compliance requirements. Specialized in API testing and performance validation.",
      achievements: [
        "Built comprehensive API testing suite covering 200+ endpoints",
        "Implemented performance testing reducing response time by 40%",
        "Achieved 95% automated test coverage for critical user journeys",
        "Collaborated with security team on vulnerability testing protocols"
      ],
      technologies: ["REST Assured", "Python", "JMeter", "Docker", "Postman"]
    },
    {
      title: "QA Engineer",
      company: "StartupTech",
      location: "Austin, TX",
      period: "2019 - 2020",
      type: "Full-time",
      description: "Established testing processes and automation practices for a rapidly growing startup. Transitioned from manual to automated testing workflows.",
      achievements: [
        "Created first automated testing framework for the company",
        "Reduced manual testing effort by 80% through strategic automation",
        "Implemented bug tracking and test management processes",
        "Supported product launches with zero critical defects"
      ],
      technologies: ["Cypress", "JavaScript", "GitHub Actions", "TestRail"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-hero">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven track record of delivering quality solutions across diverse industries and company sizes.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-primary mb-1">
                      <Building2 className="w-4 h-4 mr-2" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-start md:items-end">
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {exp.type}
                    </Badge>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-muted-foreground flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-primary/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;