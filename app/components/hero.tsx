import { useRef, useEffect, useState } from "react";
import {
  ArrowRight,
  Rocket,
  Users,
  Lightbulb,
  Pause,
  Play,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";
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
} from "@/components/ui/carousel";

export function Hero() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const stats = [
    {
      icon: Users,
      value: "1,000+",
      label: "Community Members",
      trend: "Founders, developers & mentors",
    },
    {
      icon: Rocket,
      value: "100+",
      label: "Startups Supported",
      trend: "Early to growth stage",
    },
    {
      icon: Lightbulb,
      value: "300+",
      label: "Innovation Projects",
      trend: "Ideas to MVPs",
    },
  ];

  const CarouselItems = [
    {
      title: "Where Innovation",
      subtitle: "Meets Opportunity",
      image:
        "https://res.cloudinary.com/dykjpcitp/image/upload/v1760216750/rechub/WhatsApp_Image_2025-09-01_at_6.07.35_AM_1_ooecq6.jpg",
      content:
        "RecHub is a collaborative innovation hub supporting entrepreneurs, developers, and problem-solvers to build impactful technology solutions.",
      badge: "Innovation Hub",
      gradient: "from-blue-600 to-purple-600",
    },
    {
      title: "Empowering Founders",
      subtitle: "From Idea to Impact",
      image:
        "https://res.cloudinary.com/dykjpcitp/image/upload/v1760217509/rechub/mime-attachment_vqqqnd.jpg",
      content:
        "We provide mentorship, training, and access to networks that help early-stage startups grow into sustainable businesses.",
      badge: "Startup Support",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "Build Together",
      subtitle: "Grow With Community",
      image:
        "https://res.cloudinary.com/dykjpcitp/image/upload/v1760217507/rechub/c330dd75-804a-4a76-a3ab-d4a8a1941d42_xxlicf.jpg",
      content:
        "Join a vibrant ecosystem of innovators, attend hands-on programs, and collaborate with people shaping the future of technology.",
      badge: "Ecosystem",
      gradient: "from-orange-500 to-amber-600",
    },
  ];

  /* Carousel state sync */
  useEffect(() => {
    if (!api) return;

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", updateCurrent);
    updateCurrent();

    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  /* Autoplay */
  useEffect(() => {
    if (!api || !isPlaying) return;

    intervalRef.current = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [api, isPlaying]);

  const toggleAutoplay = () => setIsPlaying(!isPlaying);

  const goToSlide = (index: number) => {
    api?.scrollTo(index);
    setCurrent(index);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url('${CarouselItems[current].image}')` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/40 z-0" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          className="max-w-7xl mx-auto"
        >
          <CarouselContent>
            {CarouselItems.map((item, idx) => (
              <CarouselItem key={idx}>
                <div className="text-center max-w-6xl mx-auto">
                  <Badge className="mb-8 bg-white/20 text-white border-white/20">
                    <Star className="size-3 mr-1 fill-current" />
                    {item.badge}
                  </Badge>

                  <h1 className="text-5xl md:text-7xl font-black mb-6 text-white">
                    {item.title}
                    <span
                      className={`block bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                    >
                      {item.subtitle}
                    </span>
                  </h1>

                  <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12">
                    {item.content}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <Button size="lg" className="px-12 py-6 text-lg">
                      Join the Community
                      <ArrowRight className="ml-2 size-5" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-12 py-6 text-lg text-white border-white"
                    >
                      Explore Programs
                      <Zap className="ml-2 size-5" />
                    </Button>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {stats.map((stat, i) => (
                      <Card
                        key={i}
                        className="bg-white/10 backdrop-blur-xl border-white/20"
                      >
                        <CardContent className="p-8 text-white text-center">
                          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <stat.icon className="size-8" />
                          </div>
                          <div className="text-4xl font-bold mb-1">
                            {stat.value}
                          </div>
                          <div className="font-semibold mb-1">
                            {stat.label}
                          </div>
                          <div className="text-sm text-white/70 flex justify-center gap-1">
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

          {/* Controls */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <CarouselPrevious />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleAutoplay}
              className="text-white"
            >
              {isPlaying ? <Pause /> : <Play />}
            </Button>
            <CarouselNext />
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-6">
            {CarouselItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`size-3 rounded-full ${
                  idx === current ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}
