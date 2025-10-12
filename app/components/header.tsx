import { useState, useEffect } from "react";
import { Menu, X, Sparkles, ArrowRight, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home", featured: false },
    { label: "About", href: "#about", featured: false },
    { label: "Programs", href: "#programs", featured: true },
    { label: "Community", href: "#community", featured: false },
    { label: "Events", href: "#events", featured: false },
    { label: "Partners", href: "#partners", featured: false },
    { label: "Contact", href: "#contact", featured: false },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50" 
          : "bg-transparent backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700">
        <div className="flex items-center justify-between h-20 transition-all duration-700">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              {/* <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"> */}
                {/* <Zap className="size-5 text-white" /> */}
                <img src="https://res.cloudinary.com/dykjpcitp/image/upload/v1760261089/rechub/IMG_0979_lkrqad-removebg-preview_gxsuwt.png" alt="RecHub Logo" className="w-full h-full size-5 object-contain" />
              {/* </div> */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            {/* <div className="flex flex-col">
              <h1 className="text-2xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
                RecHub
              </h1>
              <Badge variant="outline" className="text-[10px] px-1 py-0 h-4 border-blue-200 text-blue-600 hidden sm:block">
                Beta
              </Badge>
            </div> */}
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 group ${
                    item.featured 
                      ? "text-blue-600 hover:text-blue-700" 
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                  {item.featured && (
                    <Sparkles className="size-3 absolute -top-1 -right-1 fill-amber-400 text-amber-400" />
                  )}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 ${
                    item.featured ? 'bg-blue-500 group-hover:w-8' : 'bg-gray-400 group-hover:w-8'
                  }`}></div>
                </a>
              ))}
            </div>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant="ghost" 
              className="text-gray-600 hover:text-gray-900 font-semibold hover:bg-gray-100/50"
            >
              Sign In
            </Button>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Users className="size-4 mr-2" />
              Join Community
              <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-3 rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? "bg-gray-100 hover:bg-gray-200 text-gray-600" 
                  : "bg-white/80 hover:bg-white text-gray-600 backdrop-blur-sm"
              }`}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                    item.featured
                      ? "bg-blue-50 text-blue-600 border border-blue-200"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.featured && <Sparkles className="size-4 fill-amber-400 text-amber-400" />}
                  {item.label}
                </a>
              ))}
              
              <div className="pt-4 space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-center border-gray-300 text-gray-600 hover:bg-gray-50 h-12 font-semibold"
                >
                  Sign In
                </Button>
                <Button 
                  className="w-full justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg h-12 font-semibold group"
                >
                  <Users className="size-4 mr-2" />
                  Join Community
                  <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Mobile Footer */}
              <div className="pt-6 border-t border-gray-200">
                <div className="text-center text-sm text-gray-500">
                  <p>Join 5,000+ innovators already with us</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}