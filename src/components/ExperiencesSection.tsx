import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const ExperiencesSection = () => {
  const experiences = [
    {
      title: "Founder",
      organization: "EchoHorizon",
      period: "2024 August - Ongoing",
      location: "Multiple Locations",
      description: "Founded and led EchoHorizon, a youth-driven nonprofit that empowers students to use their musical talents to make a social impact. EchoHorizon organizes volunteer performances at senior residences to combat loneliness and promote mental wellness. Outreached to over 100+ kids and partnered with multiple senior homes. Responsibilities include team leadership, community outreach, event coordination, partnership building, and nonprofit strategy.",
      skills: ["Leadership", "Nonprofit Management", "Community Outreach", "Event Coordination", "Partnership Building"],
      type: "Leadership",
      icon: "🎼"
    },
    {
      title: "Camp Assistant Volunteer",
      organization: "Cosmo Music",
      period: "2023 Aug 21-25",
      location: "Richmond Hill, ON",
      description: "Taught kids from ages 6-10 in three different instruments: Piano, drum, ukulele, and xylophone through demonstrations and music theory. Offered constructive feedback to support student learning.",
      skills: ["Teaching", "Music Theory", "Child Development", "Communication"],
      type: "Volunteer",
      icon: "🎵"
    },
    {
      title: "Coach (Volunteer for Little Rock)",
      organization: "Unionville Curling Club",
      period: "2022-2023 (Oct-Apr), 2023-2024 (Oct-Apr), 2024-2025 (Oct-Ongoing)",
      location: "Markham, ON",
      description: "Supervised the safety and conduct of kids from ages 5-11. Instructed kids on the principles of curling by demonstrating and giving positive suggestions for improvement. Encouraged active student engagement by delivering content through joy and high energy. Volunteered in multiple community events, and effectively communicated with people on the principles of the sport.",
      skills: ["Coaching", "Safety Management", "Community Engagement", "Youth Development"],
      type: "Volunteer",
      icon: "🥌"
    },
    {
      title: "Assistant Instructor Volunteer",
      organization: "Dagmar Snow School",
      period: "2022-2023 (Nov-Mar)",
      location: "Uxbridge, ON",
      description: "Assisted main instructors to teach kids how to snowboard. Encouraged student safety by actively demonstrating and showing of what to and not to do.",
      skills: ["Snowboarding", "Safety Instruction", "Teaching Assistance", "Risk Management"],
      type: "Volunteer",
      icon: "🏂"
    },
    {
      title: "Snowboard Instructor",
      organization: "Dagmar Snow School",
      period: "2023-2024 (Nov-Mar), 2024-2025 (Dec-Mar)",
      location: "Uxbridge, ON",
      description: "Using knowledge from the Canadian Association of Snowboarding Instructors to effectively teach kids ranging from 6-16 on the basics of snowboarding. Created lesson plans on the spot relative to the kids' experience, knowledge, and aptitude.",
      skills: ["Snowboarding Instruction", "Lesson Planning", "Adaptive Teaching", "CASI Certification"],
      type: "Professional",
      icon: "⛷️"
    },
    {
      title: "Umpire",
      organization: "Richmond Hill Baseball",
      period: "2022 June - 2024 August",
      location: "Location TBD",
      description: "Responsible for the flow, rules, and integrity of the baseball game for kids 6-13. Resolved verbal and physical complications through compromise. Encouraged friendly and orderly behavior among everyone in the baseball game.",
      skills: ["Conflict Resolution", "Rule Enforcement", "Youth Management", "Sports Officiating"],
      type: "Professional",
      icon: "⚾"
    },
    {
      title: "Finance Director",
      organization: "CodeUp",
      period: "2024 August - Ongoing",
      location: "Remote",
      description: "Responsible for managing and updating financial documents for CodeUp, a non-profit organization dedicated in providing free coding to the youth. Reached out to companies for sponsorships and grants.",
      skills: ["Financial Management", "Grant Writing", "Sponsorship", "Non-Profit Operations"],
      type: "Professional",
      icon: "💰"
    },
    {
      title: "Coach",
      organization: "Unionville Curling Club",
      period: "2024 Nov - Ongoing",
      location: "Markham, ON",
      description: "Supervised the safety and conduct of adults. Instructed both kids and adults on the cornerstones of curling through active demonstration and verbal feedback.",
      skills: ["Adult Coaching", "Safety Management", "Multi-Age Instruction", "Sports Coaching"],
      type: "Professional",
      icon: "🥌"
    }
  ];

  return (
    <section id="experiences" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Beyond <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Code</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experiences and activities that shape who I am outside of technical work
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card 
              key={experience.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon and Type */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-2xl group-hover:animate-bounce">
                      {experience.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {experience.title}
                        </h3>
                        <p className="text-lg text-accent font-semibold">
                          {experience.organization}
                        </p>
                      </div>
                      
                      <div className="mt-2 md:mt-0 flex flex-col items-start md:items-end gap-2">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-sm">{experience.period}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="text-sm">{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <Badge 
                          key={skill}
                          className="hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These experiences have taught me valuable skills in leadership, collaboration, and creative problem-solving that complement my technical abilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;