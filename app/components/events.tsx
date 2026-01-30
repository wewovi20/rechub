import { Calendar, Clock, MapPin, Users, ExternalLink, Zap, Star, TrendingUp, ArrowRight, Plus, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { EventRegistrationModal } from "./event-registration-modal";

export function Events() {
  const [registrationModalOpen, setRegistrationModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<string>("");

  const upcomingEvents = [
    {
      title: "AI & Machine Learning Summit",
      date: "March 15, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "BAC Main Conference Room",
      attendees: "200+ Registered",
      type: "Conference",
      description: "Join industry leaders and AI experts for a day of insights into the future of artificial intelligence and machine learning applications.",
      featured: true,
      image: "/events/ai-summit.jpg",
      speakers: 12,
      price: "GHC500",
      earlyBird: true
    },
    {
      title: "Startup Pitch Night",
      date: "March 22, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "BAC Main Conference Room",
      attendees: "85 Registered",
      type: "Networking",
      description: "Watch promising startups pitch their ideas to a panel of investors and industry experts. Network with entrepreneurs and VCs.",
      featured: false,
      image: "/events/pitch-night.jpg",
      speakers: 8,
      price: "Free",
      earlyBird: false
    },
    {
      title: "Full-Stack Development Workshop",
      date: "March 28, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "BAC Main Conference Room",
      attendees: "45 Registered",
      type: "Workshop",
      description: "Hands-on workshop covering modern full-stack development techniques using React, Node.js, and cloud deployment strategies.",
      featured: false,
      image: "/events/workshop.jpg",
      speakers: 3,
      price: "GHC500",
      earlyBird: true
    }
  ];

  const eventTypes = [
    {
      title: "Tech Talks",
      description: "Weekly presentations by industry experts",
      frequency: "Every Wednesday",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      count: "52+ yearly"
    },
    {
      title: "Networking Mixers",
      description: "Connect with fellow entrepreneurs and developers",
      frequency: "Bi-weekly",
      icon: Users,
      color: "from-green-500 to-emerald-500",
      count: "26+ yearly"
    },
    {
      title: "Workshops",
      description: "Hands-on learning sessions on emerging technologies",
      frequency: "Monthly",
      icon: Calendar,
      color: "from-purple-500 to-pink-500",
      count: "12+ yearly"
    },
    {
      title: "Demo Days",
      description: "Showcase your projects to the community",
      frequency: "Quarterly",
      icon: Star,
      color: "from-orange-500 to-amber-500",
      count: "4+ yearly"
    }
  ];

  const stats = [
    { number: "200+", label: "Events Yearly" },
    { number: "15K+", label: "Attendees" },
    { number: "95%", label: "Satisfaction Rate" },
    { number: "50+", label: "Partner Companies" }
  ];

  return (
    <section id="events" className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-20 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 px-4 py-2 border-primary/20 bg-primary/5 text-primary font-semibold">
            Upcoming Events
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Events &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Workshops
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Stay ahead of the curve with our curated events, workshops, and networking 
            opportunities designed to accelerate your learning and growth.
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

        {/* Featured Events */}
        <div className="space-y-8 mb-20">
          {upcomingEvents.map((event, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 ${
                event.featured 
                  ? 'bg-gradient-to-r from-blue-50 to-purple-50 ring-2 ring-blue-200' 
                  : 'bg-white shadow-lg'
              } hover:-translate-y-1`}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Event Image */}
                <div className="lg:w-2/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10 lg:hidden"></div>
                  <div className="w-full h-48 lg:h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <Calendar className="size-12 text-gray-400" />
                  </div>
                  
                  {/* Featured Badge */}
                  {event.featured && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 z-20">
                      <Star className="size-3 fill-current mr-1" />
                      Featured Event
                    </Badge>
                  )}
                  
                  {/* Early Bird Badge */}
                  {event.earlyBird && (
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 z-20">
                      Early Bird
                    </Badge>
                  )}
                </div>

                {/* Event Content */}
                <div className="lg:w-3/5 p-8">
                  <CardHeader className="p-0 pb-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-bold mb-3 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
                          {event.title}
                        </CardTitle>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                            {event.type}
                          </Badge>
                          <Badge variant="outline" className="border-green-200 text-green-700">
                            {event.speakers} Speakers
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900 mb-1">{event.price}</div>
                        <div className="text-sm text-muted-foreground">Per ticket</div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      {event.description}
                    </p>
                    
                    {/* Event Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-3 text-sm">
                        <Calendar className="size-4 text-blue-500" />
                        <span className="font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Clock className="size-4 text-green-500" />
                        <span className="font-medium">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <MapPin className="size-4 text-purple-500" />
                        <span className="font-medium">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Users className="size-4 text-orange-500" />
                        <span className="font-medium">{event.attendees}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        className="flex-1 bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group/btn h-12"
                        onClick={() => {
                          setSelectedEvent(event.title);
                          setRegistrationModalOpen(true);
                        }}
                      >
                        Register Now
                        <ArrowRight className="ml-2 size-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                      <Button variant="outline" className="h-12">
                        <Plus className="size-4 mr-2" />
                        Save Event
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Event Types */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Regular <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Programs</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our recurring events designed to keep you connected and learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((type, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden group hover:shadow-xl transition-all duration-500 border-0 bg-white shadow-lg hover:-translate-y-2 text-center"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardContent className="p-8 relative">
                  <div className={`bg-gradient-to-br ${type.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <type.icon className="size-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {type.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {type.description}
                  </p>
                  
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 font-semibold mb-3">
                    {type.frequency}
                  </Badge>
                  
                  <div className="text-sm font-semibold text-primary">
                    {type.count}
                  </div>
                </CardContent>
              </Card>
            ))}
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
                <TrendingUp className="size-8 text-white" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Never Miss an Event
              </h3>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Subscribe to our event calendar and get notifications about upcoming 
                workshops, networking events, and exclusive community gatherings.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
              
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 h-14 px-8 group"
                >
                  Subscribe to our Newsletter below
                  <ArrowDown className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                {/* <Button 
                  variant="outline" 
                  size="lg" 
                  className="h-14 px-8 border-2 border-white text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm transition-all duration-300"
                >
                  View All Events
                </Button> */}
              </div>
              
              <p className="text-sm text-gray-400 mt-6">
                Join 3,000+ subscribers getting event updates
              </p>
            </div>
          </div>
        </div>
      </div>

      <EventRegistrationModal
        isOpen={registrationModalOpen}
        onClose={() => setRegistrationModalOpen(false)}
        eventTitle={selectedEvent}
      />
    </section>
  );
}