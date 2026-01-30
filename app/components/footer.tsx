import { MapPin, Phone, Mail, Github, Linkedin, Twitter, Facebook, ArrowRight, Zap, Users, Rocket, Send, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export function Footer() {
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

    const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Community", href: "#community" },
    { label: "Events", href: "#events" },
    { label: "Partners", href: "#partners" },
    { label: "Contact", href: "#contact" },
  ];

  const programs = [
    { label: "Startup Accelerator", href: "#" },
    { label: "Developer Bootcamp", href: "#" },
    { label: "Community Membership", href: "#" },
    { label: "Corporate Innovation", href: "#" },
    { label: "Mentorship Program", href: "#" },
    { label: "Investor Network", href: "#" },
  ];

  const resources = [
    { label: "Blog & Insights", href: "#" },
    { label: "Success Stories", href: "#" },
    { label: "Resource Library", href: "#" },
    { label: "Career Center", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "API Documentation", href: "#" },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#", color: "hover:bg-gray-900 hover:text-white" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:bg-blue-600 hover:text-white" },
    { icon: Twitter, label: "Twitter", href: "#", color: "hover:bg-sky-500 hover:text-white" },
    { icon: Facebook, label: "Facebook", href: "#", color: "hover:bg-blue-600 hover:text-white" },
  ];

  const stats = [
    { number: "5,000+", label: "Community Members" },
    { number: "150+", label: "Startups Launched" },
    { number: "GHC50M+", label: "Funding Raised" },
    { number: "95%", label: "Success Rate" }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden transition-colors duration-1000">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 transition-all duration-700">
        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 group-hover:-translate-y-1">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  {/* <Zap className="size-6 text-white" /> */}
                  <img src="https://res.cloudinary.com/dykjpcitp/image/upload/v1760261089/rechub/IMG_0979_lkrqad-removebg-preview_gxsuwt.png" alt="RecHub Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">RecHub</h2>
                  <Badge variant="outline" className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs mt-1">
                    Innovation Since 2024
                  </Badge>
                </div>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                Empowering the next generation of tech leaders through innovation, 
                community, and world-class programs that transform ideas into successful businesses.
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 text-gray-300 group hover:text-white transition-colors">
                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                  <MapPin className="size-5 text-blue-400" />
                </div>
                <span className="text-sm">BAC Office, off paga road, Kasena Nankana District</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300 group hover:text-white transition-colors">
                <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <Phone className="size-5 text-green-400" />
                </div>
                <span className="text-sm">+233 (20) 788-5790</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300 group hover:text-white transition-colors">
                <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                  <Mail className="size-5 text-purple-400" />
                </div>
                <span className="text-sm">info@rechub.com</span>
              </div>
            </div>

            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`bg-white/5 hover:scale-110 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 border border-white/10 ${link.color} backdrop-blur-sm`}
                  aria-label={link.label}
                >
                  <link.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white text-lg mb-6 flex items-center gap-2">
              <Users className="size-5 text-blue-400" />
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group"
                  >
                    <ArrowRight className="size-3 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-bold text-white text-lg mb-6 flex items-center gap-2">
              <Rocket className="size-5 text-green-400" />
              Programs
            </h3>
            <ul className="space-y-4">
              {programs.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group"
                  >
                    <ArrowRight className="size-3 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-white text-lg mb-6 flex items-center gap-2">
              <Send className="size-5 text-purple-400" />
              Resources
            </h3>
            <ul className="space-y-4">
              {resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group"
                  >
                    <ArrowRight className="size-3 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enhanced Newsletter Signup */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Stay in the Loop</h3>
                <p className="text-gray-300 text-lg">
                  Get the latest news, events, and opportunities delivered to your inbox. Join 10,000+ innovators.
                </p>
              </div>
              <div className="flex gap-3 max-w-md w-full">
                <form onSubmit={handleSubscribe} className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 w-full px-6 py-4 rounded-xl border-2 border-white/20 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors backdrop-blur-sm"
                />
               
                <Button type="submit" disabled={loading} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 h-auto font-semibold">
                {loading ? "Joining..." : "Subscribe"}
                <ArrowRight className="ml-2 size-4" />
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
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 transition-all duration-700">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 transition-all duration-700">
            <div className="flex items-center gap-4 text-gray-400 transition-all duration-700">
              <div className="flex items-center gap-2 transition-all duration-700">
                <span>© {currentYear} RecHub. All rights reserved.</span>
                <Heart className="size-4 text-red-400 fill-current transition-all duration-700" />
              </div>
              <Badge variant="outline" className="bg-green-500/20 text-green-300 border-green-500/30 text-xs transition-all duration-700">
                Live
              </Badge>
            </div>
            <div className="flex flex-wrap gap-6 text-sm transition-all duration-700">
              <a href="#" className="text-gray-400 hover:text-white transition-colors hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors hover:underline">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors hover:underline">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors hover:underline">
                Accessibility
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center mt-8">
          <a 
            href="#home" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm group"
          >
            Back to Top
            <ArrowRight className="size-4 rotate-90 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
}