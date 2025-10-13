import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, GraduationCap, Users, TrendingUp, ArrowRight, Shield, Zap, Target } from "lucide-react";

export function Partners() {
  const partners = [
    { 
      name: "Google", 
      category: "Technology Partner",
      logo: "/partners/google.svg",
      color: "from-blue-500 to-blue-600",
      since: "2019"
    },
    { 
      name: "Microsoft", 
      category: "Cloud Partner",
      logo: "/partners/microsoft.svg",
      color: "from-green-500 to-green-600",
      since: "2020"
    },
    { 
      name: "Amazon Web Services", 
      category: "Infrastructure Partner",
      logo: "/partners/aws.svg",
      color: "from-orange-500 to-orange-600",
      since: "2018"
    },
    { 
      name: "Meta", 
      category: "Innovation Partner",
      logo: "/partners/meta.svg",
      color: "from-blue-600 to-purple-600",
      since: "2021"
    },
    { 
      name: "Salesforce", 
      category: "Enterprise Partner",
      logo: "/partners/salesforce.svg",
      color: "from-blue-400 to-cyan-500",
      since: "2020"
    },
    { 
      name: "IBM", 
      category: "AI & Analytics Partner",
      logo: "/partners/ibm.svg",
      color: "from-blue-800 to-blue-900",
      since: "2019"
    },
    { 
      name: "Oracle", 
      category: "Database Partner",
      logo: "/partners/oracle.svg",
      color: "from-red-500 to-red-600",
      since: "2021"
    },
    { 
      name: "Stripe", 
      category: "Fintech Partner",
      logo: "/partners/stripe.svg",
      color: "from-purple-500 to-purple-600",
      since: "2022"
    },
  ];

  const investorPartners = [
    { 
      name: "Naara Rural Bank", 
      type: "Bank",
      logo: "/investors/sequoia.svg",
      focus: "Early & Growth Stage",
      investments: "150+"
    },
    { 
      name: "Teachers Co-Operative Credit Union", 
      type: "Credit Union",
      logo: "/investors/a16z.svg",
      focus: "Technology Companies",
      investments: "200+"
    },
    { 
      name: "GCB", 
      type: "Accelerator",
      logo: "/investors/yc.svg",
      focus: "Early Stage Startups",
      investments: "3,000+"
    },
  ];

  const universities = [
    { name: "CKT Uni. Applied Sciences", logo: "/universities/stanford.svg", programs: "25+" },
    { name: "St. Bosco Training College", logo: "/universities/mit.svg", programs: "18+" },
    { name: "Community Nursing College", logo: "/universities/berkeley.svg", programs: "22+" },
    
  ];

  const partnershipBenefits = [
    {
      icon: Zap,
      title: "$100M+ Partner Resources",
      description: "Access to credits, tools, and resources from our technology partners",
      metric: "100M+",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "500+ Mentor Network",
      description: "Industry experts and executives from our partner organizations",
      metric: "500+",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "80% Success Rate",
      description: "Startups that leverage partner resources achieve higher success rates",
      metric: "80%",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "150+ Funded Startups",
      description: "Companies that secured funding through our investor network",
      metric: "150+",
      color: "from-orange-500 to-amber-500"
    }
  ];

  return (
    <section id="partners" className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 px-4 py-2 border-primary/20 bg-primary/5 text-primary font-semibold">
            Our Network
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Strategic{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Partners
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            We collaborate with industry leaders, investors, and academic institutions 
            to provide our community with unparalleled resources and opportunities.
          </p>
        </div>

        {/* Partnership Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {partnershipBenefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 bg-white shadow-lg hover:-translate-y-2 text-center"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <CardContent className="p-8 relative">
                <div className={`bg-gradient-to-br ${benefit.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="size-8 text-white" />
                </div>
                
                <div className="text-3xl font-bold mb-2 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  {benefit.metric}
                </div>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  {benefit.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Partners */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <Building2 className="size-6 text-white" />
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Technology Partners</h3>
              <p className="text-muted-foreground">Leading technology companies powering our ecosystem</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-500 border-0 bg-white shadow-md hover:-translate-y-2 cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  {/* Logo Placeholder */}
                  <div className={`bg-gradient-to-br ${partner.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white font-bold text-lg">
                      {partner.name.split(' ').map(word => word.charAt(0)).join('')}
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">{partner.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{partner.category}</p>
                  
                  <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                    Since {partner.since}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Investor Network */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
              <TrendingUp className="size-6 text-white" />
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Investor Network</h3>
              <p className="text-muted-foreground">Top-tier investors backing our community&apos;s innovations</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investorPartners.map((investor, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-500 border-0 bg-white shadow-md hover:-translate-y-2 cursor-pointer"
              >
                <CardContent className="p-8 text-center">
                  {/* Investor Logo Placeholder */}
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <div className="text-white font-bold text-xl">
                      {investor.name.split(' ').map(word => word.charAt(0)).join('')}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{investor.name}</h4>
                  <Badge className="bg-green-50 text-green-700 border-green-200 font-semibold mb-4">
                    {investor.type}
                  </Badge>
                  
                  <div className="space-y-2 text-sm">
                    <div className="font-medium text-gray-700">{investor.focus}</div>
                    <div className="text-primary font-semibold">{investor.investments} Investments</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Academic Partners */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
              <GraduationCap className="size-6 text-white" />
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Academic Partners</h3>
              <p className="text-muted-foreground">World-leading institutions driving research and talent development</p>
            </div>
          </div>

          <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {universities.map((university, index) => (
                  <div 
                    key={index} 
                    className="text-center group p-6 rounded-xl hover:bg-white/50 transition-all duration-300 hover:shadow-lg"
                  >
                    {/* University Logo Placeholder */}
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white font-bold">
                        {university.name.split(' ').map(word => word.charAt(0)).join('').substring(0, 2)}
                      </div>
                    </div>
                    
                    <h4 className="font-semibold text-gray-900 mb-2">{university.name}</h4>
                    <Badge variant="outline" className="bg-white text-purple-700 border-purple-200">
                      {university.programs} Programs
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-12 text-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:32px_32px]"></div>
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="size-8 text-white" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Become a Partner
              </h3>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join our network of industry leaders and help shape the future of technology innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 h-14 px-8 group"
                >
                  Partner With Us
                  <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="h-14 px-8 border-2 border-white text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm transition-all duration-300"
                >
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}