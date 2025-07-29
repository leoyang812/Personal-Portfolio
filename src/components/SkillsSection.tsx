import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS", "Responsive Design"],
      icon: "💻"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Databases", "APIs", "Server Management"],
      icon: "⚙️"
    },
    {
      title: "Tools & Others",
      skills: ["Git", "VS Code", "Figma", "Testing", "Deployment"],
      icon: "🛠️"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring my ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-blue-400 rounded-xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-12 text-center">
                <div className="text-4xl mb-4 group-hover:animate-bounce">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default border border-blue-400"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "2+", label: "Years Learning" },
            { number: "3+", label: "Projects Built" },
            { number: "8+", label: "Technologies" },
            { number: "∞", label: "Passion for Code" }
          ].map((stat) => (
            <div key={stat.label} className="group">
              <div className="text-3xl md:text-4xl font-bold text-primary group-hover:text-accent transition-colors">
                {stat.number}
              </div>
              <div className="text-muted-foreground mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;