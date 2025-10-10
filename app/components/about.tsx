import { Target, Users, Zap, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Innovation Focus",
      description: "We're dedicated to fostering breakthrough technologies and disruptive solutions that shape tomorrow's world."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building strong connections between entrepreneurs, developers, and industry leaders through collaboration."
    },
    {
      icon: Zap,
      title: "Rapid Growth",
      description: "Accelerating startup success with mentorship, resources, and strategic partnerships."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating solutions that transcend borders and address challenges on a worldwide scale."
    },
  ];

  return (
    <section id="about" className="py-10 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Empowering the Next Generation of Tech Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Our tech hub is more than just a workspace—it's a thriving ecosystem where 
            innovation flourishes, partnerships form, and groundbreaking ideas become reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="text-center h-full">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="size-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Our Mission
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                To create an inclusive environment where technology entrepreneurs can access 
                the resources, mentorship, and network they need to build successful, 
                impactful companies that solve real-world problems.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">Provide world-class mentorship and guidance</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">Foster collaboration and knowledge sharing</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">Connect startups with investors and partners</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">$50M+</div>
                  <div className="text-sm text-muted-foreground">Funding Raised</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">200+</div>
                  <div className="text-sm text-muted-foreground">Mentors Network</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
