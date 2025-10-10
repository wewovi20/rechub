import { ArrowRight, Rocket, Users, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
export function Hero() {
  const stats = [
    { icon: Users, value: "500+", label: "Community Members" },
    { icon: Rocket, value: "50+", label: "Startups Launched" },
    { icon: Lightbulb, value: "100+", label: "Innovation Projects" },
  ];
  
  const CarouselItems = {
    title: "where Innovation ",
    subtitle: "meets Community",
    image: "",
    content: " Join the leading tech hub fostering innovation, collaboration, and growth.Connect with like-minded entrepreneurs, developers, and visionaries shaping the future."

  }
  
const array = [
   "i", "am", "going", "to"
];
console.log("this is a",  {CarouselItems});
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6">
            Where Innovation
            <span className="text-primary block">Meets Community</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance">
            Join the leading tech hub fostering innovation, collaboration, and growth. 
            Connect with like-minded entrepreneurs, developers, and visionaries shaping the future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="text-lg px-8">
              Join Our Community
              <ArrowRight className="ml-2 size-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Explore Programs
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <stat.icon className="size-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
