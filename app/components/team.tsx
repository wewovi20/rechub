import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin } from "lucide-react";

export function Team() {
  const teamMembers = [
    {
      name: "Jonas Wewovi",
      role: "Chief Executive Officer",
      bio: "IT professional and ecosystem builder with a BSc in Information Technology and over four years’ experience in software development, technical training, and business development coaching. Jonas has mentored 200+ youth across Ghana and currently supports innovation initiatives with Afri-Consult (GIZ DTEG) and Northern Innovation Lab.",
      social: {
        linkedin: "https://www.linkedin.com/in/jonas-wewovi-904309154"
      }
    },
    {
      name: "Prosper Apepeh",
      role: "Operations Officer",
      bio: "Education and data professional with over eight years’ teaching experience and extensive involvement in national data collection, research, and civic programs. Prosper combines ICT education, operational oversight, and community leadership to strengthen RECHUB’s program delivery.",
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Stephen Tobigah Maldima",
      role: "Programs Manager",
      bio: "Technology and project management professional with over four years’ experience in digital innovation and social impact. Currently pursuing an MPhil in Big Data, Stephen leads RECHUB’s programs with expertise in AI, data analytics, stakeholder engagement, and community-focused innovation.",
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Rita Martey",
      role: "Administrative Officer",
      bio: "Detail-oriented administrative professional with over three years’ experience supporting operations, finance, and executive functions. Rita ensures smooth coordination, documentation, and stakeholder engagement across RECHUB’s activities.",
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Eleanor Abulu Adiane",
      role: "Finance Officer",
      bio: "Marketing and finance professional with strong experience in sales coordination, financial reporting, and community-based projects. Eleanor brings commercial discipline and accountability to RECHUB’s financial management.",
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Gbeng Baanmah Gloria",
      role: "Project Officer",
      bio: "Community development professional combining technical training in animal health with strong communication and project coordination skills. Gloria supports outreach, project implementation, and community engagement across RECHUB programs.",
      social: {
        linkedin: "#"
      }
    }
  ];

  return (
    <section id="team" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 px-4 py-2 border-primary/20 bg-primary/5 text-primary font-semibold">
            Leadership & Team
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The Team Powering
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}RECHUB
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            RECHUB is led by a multidisciplinary team with expertise in technology, education, 
            research, finance, and community development, working together to drive inclusive innovation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">

                {/* Avatar */}
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold mb-1 text-gray-900">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Social */}
                <div className="flex justify-center">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leadership Philosophy */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 p-10 rounded-3xl border">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Leadership Philosophy
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed italic">
              “Innovation thrives where community, technology, and entrepreneurship intersect. 
              At RECHUB, we don’t just teach skills—we create pathways for sustainable economic empowerment.”
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
