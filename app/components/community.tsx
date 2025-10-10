import { MessageCircle, Github, Linkedin, Twitter, Users, Calendar, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Community() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder, AI Startup",
      content: "The mentorship and network I gained here was invaluable. Within 6 months, we raised our Series A and scaled to 50+ employees.",
      initials: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "Full-Stack Developer",
      content: "The bootcamp completely transformed my career. I went from zero coding experience to landing a senior developer role at a top tech company.",
      initials: "MR"
    },
    {
      name: "Jennifer Kim",
      role: "Product Manager",
      content: "The community here is incredible. The connections I've made have led to multiple partnerships and collaborative projects.",
      initials: "JK"
    }
  ];

  const communityStats = [
    {
      icon: Users,
      title: "Active Members",
      value: "2,500+",
      description: "Entrepreneurs, developers, and innovators"
    },
    {
      icon: Calendar,
      title: "Events Per Month",
      value: "20+",
      description: "Workshops, meetups, and networking sessions"
    },
    {
      icon: BookOpen,
      title: "Learning Resources",
      value: "500+",
      description: "Courses, tutorials, and industry insights"
    }
  ];

  const socialLinks = [
    { icon: MessageCircle, label: "Discord", href: "#" },
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" }
  ];

  return (
    <section id="community" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Join Our Thriving Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Connect with like-minded individuals, share knowledge, and build 
            lasting relationships that will accelerate your success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {communityStats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="size-8 text-primary" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <h3 className="text-lg font-semibold mb-2">{stat.title}</h3>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">What Our Members Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 border">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Connect With Us
            </h3>
            <p className="text-muted-foreground mb-8">
              Stay connected and engaged with our community across multiple platforms
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {socialLinks.map((link, index) => (
                <Button key={index} variant="outline" size="lg" className="gap-2">
                  <link.icon className="size-5" />
                  {link.label}
                </Button>
              ))}
            </div>

            <div className="max-w-md mx-auto">
              <h4 className="font-semibold mb-4">Get Community Updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-input bg-background text-sm"
                />
                <Button>Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Get weekly updates on events, opportunities, and community highlights
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}