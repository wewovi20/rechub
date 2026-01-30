import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building2,
  GraduationCap,
  Users,
  TrendingUp,
  ArrowRight,
  Shield,
  Zap,
  Target,
} from "lucide-react";

export function Partners() {
  const partners = [
    {
      name: "Technology Service Providers",
      category: "Digital Infrastructure & Tools",
      color: "from-blue-500 to-blue-600",
      since: "Ongoing",
    },
    {
      name: "Startup Support Organizations",
      category: "Incubation & Acceleration",
      color: "from-green-500 to-emerald-600",
      since: "Ongoing",
    },
    {
      name: "Financial Institutions",
      category: "Banking & Business Finance",
      color: "from-orange-500 to-amber-600",
      since: "Ongoing",
    },
    {
      name: "NGOs & Development Partners",
      category: "Entrepreneurship & Impact",
      color: "from-purple-500 to-pink-600",
      since: "Ongoing",
    },
  ];

  const investorPartners = [
    {
      name: "Naara Rural Bank",
      type: "Rural Bank",
      focus: "SMEs & Early-Stage Businesses",
    },
    {
      name: "Teachers Co-operative Credit Union",
      type: "Credit Union",
      focus: "Micro & Small Enterprises",
    },
    {
      name: "GCB Bank",
      type: "Commercial Bank",
      focus: "Business & Startup Finance",
    },
  ];

  const universities = [
    { name: "CKT University of Applied Sciences", programs: "Training & Innovation" },
    { name: "St. Bosco Training College", programs: "Skills Development" },
    { name: "Community Nursing College", programs: "Health Innovation" },
  ];

  const partnershipBenefits = [
    {
      icon: Zap,
      title: "Access to Tools & Resources",
      description:
        "Our partners support startups with essential digital tools, platforms, and technical resources.",
      metric: "Practical Support",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Mentorship & Expertise",
      description:
        "Founders gain guidance from experienced professionals across technology, business, and finance.",
      metric: "Expert Network",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      title: "Improved Startup Outcomes",
      description:
        "Partner-backed startups are better positioned for growth, funding readiness, and sustainability.",
      metric: "Growth Focus",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Target,
      title: "Ecosystem Collaboration",
      description:
        "Strong partnerships enable cross-sector collaboration and shared innovation initiatives.",
      metric: "Shared Impact",
      color: "from-orange-500 to-amber-500",
    },
  ];

  return (
    <section
      id="partners"
      className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge
            variant="outline"
            className="mb-6 px-4 py-2 border-primary/20 bg-primary/5 text-primary font-semibold"
          >
            Our Network
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted <span className="text-primary">Partners</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            RecHub works with financial institutions, academic bodies, development
            organizations, and service providers to strengthen startup success.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {partnershipBenefits.map((benefit, i) => (
            <Card key={i} className="bg-white shadow-lg border-0 text-center">
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center bg-gradient-to-br ${benefit.color}`}
                >
                  <benefit.icon className="size-8 text-white" />
                </div>
                <div className="font-bold text-lg mb-2">{benefit.metric}</div>
                <h3 className="font-semibold mb-3">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ecosystem Partners */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Building2 className="mx-auto size-8 text-primary mb-4" />
            <h3 className="text-3xl font-bold">Ecosystem Partners</h3>
            <p className="text-muted-foreground">
              Organizations that support innovation and entrepreneurship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {partners.map((partner, i) => (
              <Card key={i} className="bg-white shadow-md border-0 text-center">
                <CardContent className="p-6">
                  <div
                    className={`w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br ${partner.color}`}
                  >
                    <Building2 className="text-white" />
                  </div>
                  <h4 className="font-semibold">{partner.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {partner.category}
                  </p>
                  <Badge variant="outline" className="mt-3">
                    {partner.since}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Financial Partners */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <TrendingUp className="mx-auto size-8 text-primary mb-4" />
            <h3 className="text-3xl font-bold">Financial & Investment Partners</h3>
            <p className="text-muted-foreground">
              Institutions supporting access to finance and business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investorPartners.map((partner, i) => (
              <Card key={i} className="bg-white shadow-md border-0 text-center">
                <CardContent className="p-8">
                  <Shield className="mx-auto mb-4 text-primary" />
                  <h4 className="font-bold text-lg mb-2">{partner.name}</h4>
                  <Badge className="mb-3">{partner.type}</Badge>
                  <p className="text-sm text-muted-foreground">
                    {partner.focus}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Academic Partners */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <GraduationCap className="mx-auto size-8 text-primary mb-4" />
            <h3 className="text-3xl font-bold">Academic Partners</h3>
            <p className="text-muted-foreground">
              Institutions supporting skills development and applied research
            </p>
          </div>

          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-xl">
            <CardContent className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {universities.map((uni, i) => (
                <div key={i} className="text-center">
                  <GraduationCap className="mx-auto mb-4 text-purple-600" />
                  <h4 className="font-semibold">{uni.name}</h4>
                  <Badge variant="outline" className="mt-2">
                    {uni.programs}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gray-900 text-white rounded-3xl p-12">
            <h3 className="text-3xl font-bold mb-4">Partner With RecHub</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              We welcome organizations interested in supporting innovation,
              entrepreneurship, and inclusive economic growth.
            </p>
            <Button size="lg" className="px-8">
              Become a Partner
              <ArrowRight className="ml-2 size-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
