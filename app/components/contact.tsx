import { MapPin, Phone, Mail, Clock, ArrowRight, Send, Building, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["BAC Office, off paga road, Kasena Nankana District"],
      color: "from-blue-500 to-cyan-500",
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us Directly",
      details: ["+233 (20) 788 5790" , "+233 (54) 025-2576"],
      color: "from-green-500 to-emerald-500",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Our Team",
      details: ["info@rechub.com", "partnerships@rechub.com"],
      color: "from-purple-500 to-pink-500",
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
      color: "from-orange-500 to-amber-500",
      action: "View Calendar"
    },
  ];

  const stats = [
    { number: "24h", label: "Average Response Time" },
    { number: "95%", label: "Satisfaction Rate" },
    { number: "5,000+", label: "Community Members" },
    { number: "150+", label: "Startups Supported" }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 px-4 py-2 border-primary/20 bg-primary/5 text-primary font-semibold">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Let's Build{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Ready to join our community or have questions about our programs? 
            We would love to hear from you and help you get started on your journey.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className="space-y-8">
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Send className="size-5 text-white" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Send Us a Message
                  </CardTitle>
                </div>
                <p className="text-muted-foreground">Fill out the form below and our team will get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <Label htmlFor="firstName" className="text-sm font-semibold">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      className="h-12 border-2 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="lastName" className="text-sm font-semibold">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      className="h-12 border-2 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-sm font-semibold">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john.doe@example.com" 
                    className="h-12 border-2 focus:border-blue-500 transition-colors"
                  />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="company" className="text-sm font-semibold">Company (Optional)</Label>
                  <Input 
                    id="company" 
                    placeholder="Your Company" 
                    className="h-12 border-2 focus:border-blue-500 transition-colors"
                  />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="interest" className="text-sm font-semibold">What brings you here?</Label>
                  <select 
                    id="interest" 
                    className="flex h-12 w-full rounded-lg border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-colors"
                  >
                    <option value="">Select your interest</option>
                    <option value="startup-accelerator">Startup Accelerator</option>
                    <option value="developer-bootcamp">Developer Bootcamp</option>
                    <option value="community-membership">Community Membership</option>
                    <option value="corporate-innovation">Corporate Innovation</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="message" className="text-sm font-semibold">Your Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your goals and how we can help..."
                    className="min-h-[140px] border-2 focus:border-blue-500 transition-colors resize-none"
                  />
                </div>
                
                <Button 
                  className="w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group font-semibold text-lg"
                >
                  Send Message
                  <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`bg-gradient-to-br ${info.color} w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="size-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-3 text-gray-900">{info.title}</h3>
                      <div className="space-y-2 mb-4">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-2 text-sm font-semibold hover:bg-gray-50 transition-colors"
                      >
                        {info.action}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Interactive Map Section */}
            <Card className="border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 h-80 relative overflow-hidden">
                  {/* Map Visualization */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <MapPin className="size-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">Visit Our Office</h3>
                      <p className="text-muted-foreground mb-6 max-w-md">
                        Experience our state-of-the-art facilities and collaborative workspaces
                      </p>
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg">
                        <Building className="size-4 mr-2" />
                        Book a Campus Tour
                      </Button>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/80 backdrop-blur-sm text-gray-700 border-0">
                      Interactive Map
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-12 text-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:32px_32px]"></div>
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="size-8 text-white" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Ideas?
              </h3>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of entrepreneurs, developers, and innovators who have 
                turned their vision into reality through our comprehensive programs and community support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 h-14 px-8 group font-semibold"
                >
                  <Users className="size-5 mr-2" />
                  Start Your Journey
                  <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="h-14 px-8 border-2 border-white text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm transition-all duration-300 font-semibold"
                >
                  Book a Tour
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}