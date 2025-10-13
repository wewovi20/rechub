import { useRef, useEffect, useState } from "react";
import { ArrowRight, Rocket, Users, Lightbulb, Pause, Play, Star, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel"

export function Hero() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const stats = [
    { icon: Users, value: "2,500+", label: "Community Members", trend: "+15% this month" },
    { icon: Rocket, value: "150+", label: "Startups Launched", trend: "GHC50M+ raised" },
    { icon: Lightbulb, value: "500+", label: "Innovation Projects", trend: "94% success rate" },
  ];
  
  const CarouselItems = [
    {
      title: "Where Innovation",
      subtitle: "Meets Community",
      image: "https://res.cloudinary.com/dykjpcitp/image/upload/v1760216750/rechub/WhatsApp_Image_2025-09-01_at_6.07.35_AM_1_ooecq6.jpg",
      content: "Join the leading tech hub fostering innovation, collaboration, and growth. Connect with like-minded entrepreneurs, developers, and visionaries shaping the future.",
      badge: "Featured",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "Empowering Startups",
      subtitle: "From Idea to Launch",
      image: "https://res.cloudinary.com/dykjpcitp/image/upload/v1760217509/rechub/mime-attachment_vqqqnd.jpg",
      content: "Access resources, mentorship, and a vibrant network to turn your startup dreams into reality.",
      badge: "Accelerator",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Collaborate & Grow",
      subtitle: "Join Our Community",
      image: "https://res.cloudinary.com/dykjpcitp/image/upload/v1760217507/rechub/c330dd75-804a-4a76-a3ab-d4a8a1941d42_xxlicf.jpg",
      content: "Connect with innovators, attend exclusive events, and be part of a thriving tech ecosystem.",
      badge: "Network",
      gradient: "from-orange-500 to-amber-600"
    }
  ];

  // Auto-slide functionality with play/pause control
  useEffect(() => {
    if (!api) return

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", updateCurrent)
    updateCurrent()

    // Cleanup
    return () => {
      api.off("select", updateCurrent)
    }
  }, [api])

  useEffect(() => {
    if (!api || !isPlaying) return

    intervalRef.current = setInterval(() => {
      api.scrollNext()
    }, 5000) // Change slide every 5 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [api, isPlaying])

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying)
  }

  const goToSlide = (index: number) => {
    api?.scrollTo(index)
    setCurrent(index)
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 transition-colors duration-1000"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden transition-all duration-1000">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse transition-all duration-1000"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000 transition-all duration-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-10 animate-pulse delay-500 transition-all duration-1000"></div>
      </div>

      {/* Background image with overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover transition-all duration-1000 ease-in-out z-0"
        style={{ backgroundImage: `url('${CarouselItems[current].image}')` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/30 z-0 transition-colors duration-1000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full transition-all duration-700">
        <Carousel 
          setApi={setApi}
          opts={{ 
            align: "start", 
            loop: true,
          }} 
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="flex">
            {CarouselItems.map((item, idx) => (
              <CarouselItem key={idx} className="flex-[0_0_100%] min-w-0">
                <div className="text-center max-w-6xl mx-auto px-4">
                  {/* Hero Badge */}
                  <Badge className="mb-8 bg-white/20 backdrop-blur-sm text-white border-white/20 px-4 py-2 text-sm font-semibold hover:bg-white/30 transition-all duration-300 group">
                    <Star className="size-3 mr-1 fill-current group-hover:scale-110 transition-transform" />
                    {item.badge}
                  </Badge>

                  {/* Main Content */}
                  <div className="mb-12">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-balance mb-6 text-white drop-shadow-2xl">
                      {item.title}
                      <span className={`block bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                        {item.subtitle}
                      </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-10 text-balance leading-relaxed font-medium drop-shadow-lg">
                      {item.content}
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <Button 
                      size="lg" 
                      className="text-lg px-12 py-6 h-16 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 group font-bold"
                    >
                      Join Our Community
                      <ArrowRight className="ml-3 size-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button 
                      variant="outline"
                      size="lg" 
                      className="text-lg px-12 py-6 h-16 border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-gray-900 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 font-bold"
                    >
                      Explore Programs
                      <Zap className="ml-3 size-5" />
                    </Button>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {stats.map((stat, statIdx) => (
                      <Card 
                        key={statIdx} 
                        className="border-white/20 bg-white/10 backdrop-blur-xl hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 shadow-2xl hover:shadow-3xl group"
                      >
                        <CardContent className="p-8 text-center text-white">
                          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <stat.icon className="size-8 text-white" />
                          </div>
                          <div className="text-4xl font-black mb-2 text-white drop-shadow">{stat.value}</div>
                          <div className="text-lg font-semibold mb-2 text-white/90 drop-shadow">{stat.label}</div>
                          <div className="text-sm text-white/70 flex items-center justify-center gap-1">
                            <TrendingUp className="size-3" />
                            {stat.trend}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Enhanced Navigation */}
          <div className="flex items-center justify-center gap-8 mt-12">
            <CarouselPrevious className="relative static transform-none size-14 border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300" />
            
            {/* Play/Pause and Dots */}
            <div className="flex items-center gap-6">
              <Button
                variant="ghost"
                size="lg"
                onClick={toggleAutoplay}
                className="size-12 p-0 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
              >
                {isPlaying ? <Pause className="size-5" /> : <Play className="size-5" />}
              </Button>
              
              <div className="flex gap-3">
                {CarouselItems.map((_, idx) => (
                  <button
                    key={idx}
                    className={`size-4 rounded-full transition-all duration-500 ${
                      idx === current 
                        ? 'bg-white scale-125 shadow-lg' 
                        : 'bg-white/40 hover:bg-white/60 backdrop-blur-sm'
                    }`}
                    onClick={() => goToSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <CarouselNext className="relative static transform-none size-14 border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300" />
          </div>

          {/* Progress Bar */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-out"
                style={{ 
                  width: isPlaying ? '100%' : '0%',
                  animation: isPlaying ? 'progress 5s linear infinite' : 'none'
                }}
              />
            </div>
          </div>
        </Carousel>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}