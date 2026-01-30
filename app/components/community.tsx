'use client';
import React, { useState } from "react";
import { MessageCircle, Github, Linkedin, Twitter, Users, Calendar, BookOpen, Star, Zap, TrendingUp, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function Community() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setSuccess(true);
      setEmail("");
    } else {
      setError("Unable to subscribe. Try again.");
    }

    setLoading(false);
  }
  const testimonials = [
    {
      name: "Sarah Akiwebe",
      role: "Founder, AI Startup",
      content: "The mentorship and network I gained here was invaluable. Within 6 months, we raised our Series A and scaled to 50+ employees.",
      initials: "SA",
      avatar: "",
      rating: 5,
      company: "TechInnovate AI"
    },
    {
      name: "Mary Addah",
      role: "Full-Stack Developer",
      content: "The bootcamp completely transformed my career. I went from zero coding experience to landing a senior developer role at a top tech company.",
      initials: "MA",
      avatar: "",
      rating: 5,
      company: "Google"
    },
    {
      name: "Vincent Kaba",
      role: "Product Manager",
      content: "The community here is incredible. The connections I&apos;ve made have led to multiple partnerships and collaborative projects.",
      initials: "VK",
      avatar: "",
      rating: 5,
      company: "Meta"
    }
  ];

  const communityStats = [
    {
      icon: Users,
      title: "Active Members",
      value: "2,500+",
      description: "Entrepreneurs, developers, and innovators",
      color: "from-blue-500 to-cyan-500",
      trend: "+15% this month"
    },
    {
      icon: Calendar,
      title: "Events Per Month",
      value: "20+",
      description: "Workshops, meetups, and networking sessions",
      color: "from-green-500 to-emerald-500",
      trend: "5 events this week"
    },
    {
      icon: BookOpen,
      title: "Learning Resources",
      value: "500+",
      description: "Courses, tutorials, and industry insights",
      color: "from-purple-500 to-pink-500",
      trend: "50 new resources"
    },
    {
      icon: Zap,
      title: "Projects Launched",
      value: "150+",
      description: "Successful startups and products",
      color: "from-orange-500 to-amber-500",
      trend: "12 this quarter"
    }
  ];

  const socialLinks = [
    { 
      icon: MessageCircle, 
      label: "Instagram", 
      href: "#", 
      members: "2.5K+",
      color: "from-purple-500 to-indigo-500",
      description: "Live community chat"
    },
    { 
      icon: Github, 
      label: "Facebook", 
      href: "#", 
      members: "1.8K+",
      color: "from-gray-700 to-gray-900",
      description: "Open source projects"
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      href: "#", 
      members: "3.2K+",
      color: "from-blue-600 to-blue-800",
      description: "Professional network"
    },
    { 
      icon: Twitter, 
      label: "X", 
      href: "#", 
      members: "4.1K+",
      color: "from-sky-400 to-blue-500",
      description: "Daily updates"
    }
  ];

  const upcomingEvents = [
    { title: "AI Innovation Workshop", date: "Dec 15", attendees: "120+" },
    { title: "Founder Networking Mixer", date: "Dec 18", attendees: "80+" },
    { title: "Tech Career Fair", date: "Dec 22", attendees: "200+" },
  ];

  return (
    <section id="community" className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 px-4 py-2 border-primary/20 bg-primary/5 text-primary font-semibold">
            Join Our Network
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Join Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Thriving Community
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Connect with like-minded individuals, share knowledge, and build 
            lasting relationships that will accelerate your success.
          </p>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {communityStats.map((stat, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 bg-white shadow-lg hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <CardContent className="p-8 text-center relative">
                <div className={`bg-gradient-to-br ${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="size-8 text-white" />
                </div>
                
                <div className="text-3xl font-bold mb-2 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  {stat.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-3">
                  {stat.description}
                </p>
                
                <div className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                  {stat.trend}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Testimonials Section */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Star className="size-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">What Our Members Say</h3>
                <p className="text-muted-foreground">Real stories from our community</p>
              </div>
            </div>

            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index} 
                  className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 border-0 shadow-md"
                >
                  <CardContent className="p-6">
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed italic">
                      {testimonial.content}
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12 border-2 border-white shadow-lg">
                        <AvatarImage src={testimonial.avatar} />
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <div className="text-xs text-primary font-medium">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Social & Events Section */}
          <div className="space-y-8">
            {/* Social Platforms */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <Button 
                    key={index}
                    variant="outline" 
                    className="h-auto p-6 justify-start group hover:shadow-lg transition-all duration-300 border-2"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <link.icon className="size-6 text-white" />
                    </div>
                    <div className="text-left flex-1">
                      <div className="font-semibold text-gray-900">{link.label}</div>
                      <div className="text-xs text-muted-foreground">{link.members} members</div>
                      <div className="text-xs text-primary font-medium">{link.description}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="size-6 text-primary" />
                  <h3 className="text-xl font-bold">Upcoming Events</h3>
                </div>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/50 rounded-lg border border-white/80">
                      <div>
                        <div className="font-semibold text-gray-900">{event.title}</div>
                        <div className="text-sm text-muted-foreground">{event.attendees} attending</div>
                      </div>
                      <Badge variant="secondary" className="bg-white text-gray-700 font-semibold">
                        {event.date}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 group">
                  View All Events
                  <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:32px_32px]"></div>
          </div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="size-8 text-white" />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Stay in the Loop
            </h3>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get weekly updates on events, opportunities, and community highlights delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
               <form onSubmit={handleSubscribe} className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            
               <Button type="submit" disabled={loading} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 h-14 px-8">
                  {loading ? "Joining..." : "Subscribe"}
                  <TrendingUp className="ml-2 size-5" />
                </Button>
            </form>
                {success && (
                  <p className="text-green-600 text-sm mt-4">
                    You’re subscribed 🎉
                  </p>
                )}

                {error && (
                  <p className="text-red-600 text-sm mt-4">
                    {error}
                  </p>
                )}
            </div>
            
            <p className="text-sm text-gray-400 mt-4">
              Join 5,000+ subscribers. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}