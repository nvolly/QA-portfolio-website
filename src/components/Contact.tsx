import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:dragomirvalentin1994@yahoo.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailto;
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss how I can contribute to your team's quality goals? 
            Let's talk about your testing challenges and automation opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in new opportunities, challenging projects, and 
                connecting with fellow QA professionals. Whether you're looking to hire, 
                collaborate, or just want to discuss testing strategies, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">dragomirvalentin1994@yahoo.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-muted-foreground">+40750415501</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground">Bucharest, Europe</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/nvolly"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Github className="w-5 h-5" />
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/dragomir-valentin-672a05157/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                    <Input
                      name="firstName"
                      placeholder="John"
                      className="bg-background/50"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                    <Input
                      name="lastName"
                      placeholder="Doe"
                      className="bg-background/50"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="john.doe@company.com"
                    className="bg-background/50"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                  <Input
                    name="subject"
                    placeholder="Job Opportunity / Project Discussion"
                    className="bg-background/50"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    className="bg-background/50 min-h-[120px]"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" variant="hero" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default Contact;