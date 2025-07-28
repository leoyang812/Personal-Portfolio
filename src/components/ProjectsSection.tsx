import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio built with React and modern web technologies. Features smooth animations and optimized performance.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      liveUrl: "https://leoyangportfolio.vercel.app",
      githubUrl: "https://github.com/leoyang812/Personal-Portfolio",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop"
    },
    {
      title: "Bench Press Percentile Website",
      description: "A basic website that takes in age, weight, gender, and bench press and shows the user's percentile or strength level.",
      technologies: ["JavaScript", "HTML", "CSS", "Tailwind CSS"],
      liveUrl: "https://benchpresscalc.netlify.app",
      githubUrl: "https://github.com/leoyang812/BenchPressPercentileCalculator",
      image: "https://images.pexels.com/photos/812746/pexels-photo-812746.jpeg"
    },
    {
      title: "Math Education Website",
      description: "A platform that uses AI to analyze and improve students' weaknesses in mathematics. Still in development, this app will aim to improve education, well-being, and provide personalized learning experiences through adaptive practice and AI-driven insights for students.",
      technologies: ["React", "API Integration", "Responsive Design", "AI"],
      liveUrl: "#",
      githubUrl: "https://github.com/EduApp101",
      image: "https://images.pexels.com/photos/18069230/pexels-photo-18069230.png"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent personal and collaborative projects
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    className="flex-1"
                    style={project.title === "Math Education Website" ? { background: "#6b7280", cursor: "not-allowed" } : {}}
                    onClick={() => project.title !== "Math Education Website" && window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
                    disabled={project.title === "Math Education Website"}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    className="flex-1"
                    onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Removed "View All Projects" button */}
      </div>
    </section>
  );
};

export default ProjectsSection;