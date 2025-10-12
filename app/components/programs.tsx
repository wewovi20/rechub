import { Rocket, Code, Users, Briefcase, ArrowRight, Star, Clock, Users2, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
      badge: "Most Popular",
      stats: "92% Success Rate",
      color: "from-blue-500 to-cyan-500"
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
      badge: "Career Track",
      stats: "1000+ Graduates",
      color: "from-green-500 to-emerald-500"
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
      badge: "Flexible",
      stats: "5000+ Members",
      color: "from-purple-500 to-pink-500"
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
      badge: "Enterprise",
      stats: "50+ Partners",
      color: "from-orange-500 to-red-500"
    },
  ];

  const stats = [
    { icon: Users2, number: "10,000+", label: "Alumni Network" },
    { icon: Star, number: "94%", label: "Success Rate" },
    { icon: Building, number: "500+", label: "Startups Funded" },
    { icon: Clock, number: "5 Years", label: "Proven Track Record" },
  ];

  return (
    <section id="programs" className="py-24 bg-gradient-to-b from-slate-50/50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 px-4 py-2 border-primary/20 bg-primary/5 text-primary font-semibold">
            Our Programs
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Programs That{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Drive Success
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Choose from our comprehensive suite of programs designed to accelerate 
            your journey from idea to market-ready solution.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="size-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 bg-white shadow-lg hover:-translate-y-2"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${program.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`bg-gradient-to-br ${program.color} w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg`}>
                    <program.icon className="size-6 text-white" />
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 font-semibold">
                      {program.badge}
                    </Badge>
                    <div className="text-sm font-semibold text-primary flex items-center gap-1">
                      <Clock className="size-3" />
                      {program.duration}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  {program.title}
                </CardTitle>
                <div className="text-sm font-semibold text-green-600 flex items-center gap-1">
                  <Star className="size-3 fill-current" />
                  {program.stats}
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  {program.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3 group/feature">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0 group-hover/feature:scale-150 transition-transform duration-300"></div>
                      <span className="text-base font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-12 text-base font-semibold group/btn">
                  Explore Program
                  <ArrowRight className="ml-2 size-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-12 md:p-16 text-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:24px_24px]"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Launch Your{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Journey?
                </span>
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of successful entrepreneurs and developers who have 
                transformed their ideas into thriving businesses through our programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-gray-900 hover:bg-gray-100 h-14 px-8 text-base font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1"
                >
                  Apply Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="h-14 px-8 text-base font-semibold border-2 border-white text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
                >
                  Schedule a Call
                </Button>
              </div>
              <p className="text-sm text-gray-400 mt-6">
                Next cohort starts in 2 weeks • Limited spots available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}