"use client";
import {
  Target,
  Users,
  Zap,
  Globe,
  ArrowRight,
  Trophy,
  TrendingUp,
  Award,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Innovation-Driven",
      description:
        "We support the development of practical, technology-driven solutions that address real social and economic challenges.",
      color: "from-blue-500 to-cyan-500",
      stats: "Startup Support",
    },
    {
      icon: Users,
      title: "Community-Centered",
      description:
        "Our ecosystem brings together entrepreneurs, developers, mentors, and partners to collaborate and grow together.",
      color: "from-green-500 to-emerald-500",
      stats: "Growing Network",
    },
    {
      icon: Zap,
      title: "Capacity Building",
      description:
        "We strengthen early-stage founders through training, mentorship, and access to essential business resources.",
      color: "from-orange-500 to-amber-500",
      stats: "Hands-on Mentorship",
    },
    {
      icon: Globe,
      title: "Local Roots, Global Reach",
      description:
        "While rooted in our local community, we prepare startups to compete and collaborate on a global stage.",
      color: "from-purple-500 to-pink-500",
      stats: "Global Exposure",
    },
  ];

  const achievements = [
    { icon: Trophy, number: "5+", label: "Years of Experience" },
    { icon: TrendingUp, number: "100+", label: "Startups Supported" },
    { icon: Users, number: "50+", label: "Mentors & Experts" },
    { icon: Award, number: "90%", label: "Founder Satisfaction" },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge
            variant="outline"
            className="mb-6 px-4 py-2 border-primary/20 bg-primary/5 text-primary font-semibold"
          >
            About Us
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Empowering{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Innovative Founders
            </span>{" "}
            to Build Impactful Solutions
          </h2>

          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            RecHub is a collaborative innovation hub that supports technology
            entrepreneurs from idea to growth. We provide the environment,
            guidance, and connections needed to turn ideas into sustainable
            businesses.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => (
            <Card
              key={index}
              className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 bg-white shadow-lg hover:-translate-y-2"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              <CardContent className="p-8 text-center relative">
                <div
                  className={`bg-gradient-to-br ${value.color} w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className="size-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {value.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {value.description}
                </p>

                <div className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
                  {value.stats}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission & Stats */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mission */}
            <div className="space-y-8">
              <Badge className="bg-blue-50 text-blue-700 border-blue-200 font-semibold w-fit">
                <Sparkles className="size-3 mr-1" />
                Our Mission
              </Badge>

              <h3 className="text-3xl md:text-4xl font-bold">
                Building Sustainable Tech Businesses
              </h3>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Our mission is to nurture innovative entrepreneurs by providing
                mentorship, skills development, and access to networks that
                enable them to build scalable and impactful technology
                solutions.
              </p>

              <div className="space-y-4">
                {[
                  "Support early-stage founders with practical guidance",
                  "Encourage collaboration and peer learning",
                  "Connect startups to funding and partnership opportunities",
                  "Promote responsible and inclusive innovation",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <p className="text-lg font-medium text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <Button className="bg-gradient-to-r from-gray-900 to-gray-700 text-white">
                Learn Our Story
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border">
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-6 rounded-xl bg-white/60"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <item.icon className="size-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {item.number}
                    </div>
                    <div className="text-sm font-semibold text-muted-foreground">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-white rounded-xl text-center">
                <p className="text-sm font-semibold mb-2">
                  Be part of our innovation ecosystem
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Join the Community
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-6 text-lg shadow-lg">
            Start Building With Us
          </Button>
        </div>
      </div>
    </section>
  );
}
