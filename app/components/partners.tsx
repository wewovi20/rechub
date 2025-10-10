import { Card, CardContent } from "@/components/ui/card";

export function Partners() {
  const partners = [
    { name: "Google", category: "Technology Partner" },
    { name: "Microsoft", category: "Cloud Partner" },
    { name: "Amazon Web Services", category: "Infrastructure Partner" },
    { name: "Meta", category: "Innovation Partner" },
    { name: "Salesforce", category: "Enterprise Partner" },
    { name: "IBM", category: "AI & Analytics Partner" },
    { name: "Oracle", category: "Database Partner" },
    { name: "Stripe", category: "Fintech Partner" },
  ];

  const investorPartners = [
    { name: "Sequoia Capital", type: "Venture Capital" },
    { name: "Andreessen Horowitz", type: "Growth Equity" },
    // { name: "Y Combinator", type: "Accelerator" },
    // { name: "Techstars", type: "Accelerator" },
    // { name: "500 Startups", type: "Early Stage VC" },
    // { name: "Accel Partners", type: "Venture Capital" },
  ];

  const universities = [
    "Stanford University",
    "MIT",
    "UC Berkeley",
    "Carnegie Mellon",
    "Harvard Business School",
    "Wharton School"
  ];

  return (
    <section id="partners" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Our Strategic Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            We collaborate with industry leaders, investors, and academic institutions 
            to provide our community with unparalleled resources and opportunities.
          </p>
        </div>

        <div className="space-y-16">
          {/* Technology Partners */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">Technology Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {partners.map((partner, index) => (
                <Card key={index} className="group hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-2xl font-bold text-primary">
                        {partner.name.charAt(0)}
                      </span>
                    </div>
                    <h4 className="font-semibold mb-1">{partner.name}</h4>
                    <p className="text-xs text-muted-foreground">{partner.category}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Investor Network */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">Investor Network</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {investorPartners.map((investor, index) => (
                <Card key={index} className="group hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-to-br from-secondary/50 to-secondary/20 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                      <span className="text-xl font-bold">
                        {investor.name.split(' ').map(word => word.charAt(0)).join('')}
                      </span>
                    </div>
                    <h4 className="font-semibold mb-2">{investor.name}</h4>
                    <p className="text-sm text-muted-foreground">{investor.type}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Academic Partners */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">Academic Partners</h3>
            <div className="bg-card rounded-2xl p-8 border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {universities.map((university, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-gradient-to-br from-accent/50 to-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <span className="text-lg font-bold">
                        {university.split(' ').map(word => word.charAt(0)).join('').substring(0, 2)}
                      </span>
                    </div>
                    <h4 className="font-medium">{university}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Partnership Benefits */}
          <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 border">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Partnership Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">$100M+</div>
                <h4 className="font-semibold mb-2">Partner Resources</h4>
                <p className="text-sm text-muted-foreground">
                  Access to credits, tools, and resources from our technology partners
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <h4 className="font-semibold mb-2">Mentor Network</h4>
                <p className="text-sm text-muted-foreground">
                  Industry experts and executives from our partner organizations
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">80%</div>
                <h4 className="font-semibold mb-2">Success Rate</h4>
                <p className="text-sm text-muted-foreground">
                  Startups that leverage partner resources achieve higher success rates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}