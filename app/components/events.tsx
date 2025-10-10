import { Calendar, Clock, MapPin, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Events() {
  const upcomingEvents = [
    {
      title: "AI & Machine Learning Summit",
      date: "March 15, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "TechHub Main Auditorium",
      attendees: "200+ Expected",
      type: "Conference",
      description: "Join industry leaders and AI experts for a day of insights into the future of artificial intelligence and machine learning applications.",
      featured: true
    },
    {
      title: "Startup Pitch Night",
      date: "March 22, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Innovation Theater",
      attendees: "50+ Expected",
      type: "Networking",
      description: "Watch promising startups pitch their ideas to a panel of investors and industry experts. Network with entrepreneurs and VCs.",
      featured: false
    },
    {
      title: "Full-Stack Development Workshop",
      date: "March 28, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Learning Lab A",
      attendees: "30+ Expected",
      type: "Workshop",
      description: "Hands-on workshop covering modern full-stack development techniques using React, Node.js, and cloud deployment strategies.",
      featured: false
    }
  ];

  const eventTypes = [
    {
      title: "Tech Talks",
      description: "Weekly presentations by industry experts",
      frequency: "Every Wednesday"
    },
    {
      title: "Networking Mixers",
      description: "Connect with fellow entrepreneurs and developers",
      frequency: "Bi-weekly"
    },
    {
      title: "Workshops",
      description: "Hands-on learning sessions on emerging technologies",
      frequency: "Monthly"
    },
    {
      title: "Demo Days",
      description: "Showcase your projects to the community",
      frequency: "Quarterly"
    }
  ];

  return (
    <section id="events" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Upcoming Events & Workshops
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Stay ahead of the curve with our curated events, workshops, and networking 
            opportunities designed to accelerate your learning and growth.
          </p>
        </div>

        <div className="space-y-6 mb-16">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className={`overflow-hidden ${event.featured ? 'ring-2 ring-primary/20 bg-gradient-to-r from-primary/5 to-transparent' : ''}`}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <Badge variant={event.featured ? "default" : "secondary"}>
                        {event.type}
                      </Badge>
                      {event.featured && <Badge className="bg-primary/10 text-primary">Featured</Badge>}
                    </div>
                  </div>
                  <Button className="md:w-auto w-full">
                    Register Now
                    <ExternalLink className="ml-2 size-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{event.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="size-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="size-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="size-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="size-4 text-primary" />
                    <span>{event.attendees}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {eventTypes.map((type, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-lg mb-2">{type.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{type.description}</p>
                <Badge variant="outline">{type.frequency}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 border">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Never Miss an Event
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to our event calendar and get notifications about upcoming 
              workshops, networking events, and exclusive community gatherings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Subscribe to Calendar</Button>
              <Button variant="outline" size="lg">View All Events</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}