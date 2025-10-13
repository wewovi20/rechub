import { Target, Users, Zap, Globe, ArrowRight, Trophy, TrendingUp, Award, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Innovation Focus",
      description: "We're dedicated to fostering breakthrough technologies and disruptive solutions that shape tomorrow's world.",
      color: "from-blue-500 to-cyan-500",
      stats: "500+ Innovations"
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building strong connections between entrepreneurs, developers, and industry leaders through collaboration.",
      color: "from-green-500 to-emerald-500",
      stats: "10K+ Members"
    },
    {
      icon: Zap,
      title: "Rapid Growth",
      description: "Accelerating startup success with mentorship, resources, and strategic partnerships.",
      color: "from-orange-500 to-amber-500",
      stats: "94% Growth Rate"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating solutions that transcend borders and address challenges on a worldwide scale.",
      color: "from-purple-500 to-pink-500",
      stats: "50+ Communities"
    },
  ];

  const achievements = [
    { icon: Trophy, number: "5+", label: "Years of Excellence", suffix: "" },
    { icon: TrendingUp, number: "GHC50M+", label: "Funding Raised", suffix: "" },
    { icon: Users, number: "200+", label: "Expert Mentors", suffix: "" },
    { icon: Award, number: "95%", label: "Success Rate", suffix: "" },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 px-4 py-2 border-primary/20 bg-primary/5 text-primary font-semibold">
            About Our Mission
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Empowering the{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Next Generation
            </span>{" "}
            of Tech Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
            RecHub is more than just a workspace, it's a thriving ecosystem where 
            innovation flourishes, partnerships form, and groundbreaking ideas become reality.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 bg-white shadow-lg hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <CardContent className="p-8 text-center relative">
                <div className={`bg-gradient-to-br ${value.color} w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="size-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  {value.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  {value.description}
                </p>
                
                <div className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
                  {value.stats}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission & Stats Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border shadow-xl relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,oklch(var(--primary))_1px,transparent_0)] bg-[length:48px_48px]"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
            {/* Mission Content */}
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge className="bg-blue-50 text-blue-700 border-blue-200 font-semibold mb-4">
                  <Sparkles className="size-3 mr-1" />
                  Our Vision
                </Badge>
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Building the Future, Together
                </h3>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                To create an inclusive environment where technology entrepreneurs can access 
                the resources, mentorship, and network they need to build successful, 
                impactful companies that solve real-world problems.
              </p>

              <div className="space-y-4">
                {[
                  "Provide world-class mentorship and guidance",
                  "Foster collaboration and knowledge sharing", 
                  "Connect startups with investors and partners",
                  "Drive sustainable technological innovation"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                    <p className="text-lg font-medium text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <Button className="bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                Learn Our Story
                <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className="text-center group p-6 rounded-xl hover:bg-white/50 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="size-6 text-white" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {achievement.number}
                      {achievement.suffix}
                    </div>
                    <div className="text-sm font-semibold text-muted-foreground">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Bottom CTA */}
              <div className="mt-8 p-4 bg-white/80 rounded-xl border text-center">
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  Join our growing community
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Become a Member
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl px-8 py-6 border border-blue-100">
            <div className="text-left">
              <h4 className="font-semibold text-gray-900">Ready to make an impact?</h4>
              <p className="text-sm text-muted-foreground">Join thousands of innovators shaping the future</p>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg">
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}