import { Rocket, Code, Users, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge }  from "@/components/ui/badge"

export function Programs() {
  const programs = [
    {
      icon: Rocket,
      title: "Startup Accelerator",
      duration: "3 Months",
      description: "Intensive program designed to accelerate early-stage startups with mentorship, funding opportunities, and market validation.",
      features: [
        "Weekly mentor sessions",
        "Investor pitch preparation",
        "Product development support",
        "Go-to-market strategy"
      ],
      badge: "Most Popular"
    },
    {
      icon: Code,
      title: "Developer Bootcamp",
      duration: "6 Months",
      description: "Comprehensive coding bootcamp covering full-stack development, DevOps, and modern software engineering practices.",
      features: [
        "Full-stack development",
        "Real-world projects",
        "Industry partnerships",
        "Job placement assistance"
      ],
      badge: "Career Track"
    },
    {
      icon: Users,
      title: "Community Membership",
      duration: "Ongoing",
      description: "Join our vibrant community of tech enthusiasts, entrepreneurs, and industry professionals for networking and collaboration.",
      features: [
        "Co-working space access",
        "Monthly networking events",
        "Expert workshops",
        "Resource library"
      ],
      badge: "Flexible"
    },
    {
      icon: Briefcase,
      title: "Corporate Innovation",
      duration: "Custom",
      description: "Partner with us to drive digital transformation and innovation within your organization through tailored programs.",
      features: [
        "Innovation workshops",
        "Digital transformation",
        "Team training",
        "Custom solutions"
      ],
      badge: "Enterprise"
    },
  ];

  return (
    <section id="programs" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Programs That Drive Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Choose from our comprehensive suite of programs designed to accelerate 
            your journey from idea to market-ready solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <program.icon className="size-6 text-primary" />
                  </div>
                  <Badge variant="secondary">{program.badge}</Badge>
                </div>
                <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                <div className="text-sm text-primary font-medium">{program.duration}</div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{program.description}</p>
                
                <div className="space-y-3 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full group">
                  Learn More
                  <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 border">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of successful entrepreneurs and developers who have 
              transformed their ideas into thriving businesses through our programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Apply Now</Button>
              <Button variant="outline" size="lg">Schedule a Call</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}