import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-background/80 via-background/60 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black">
            Hi, I'm Leo Yang
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Aspiring Full-Stack Developer with a strong interest in computer engineering, building functional digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection("projects")}
              className="animate-glow bg-gradient-to-r from-primary to-accent text-white border-0 shadow-lg hover:from-accent hover:to-primary transition-colors"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="border-2 hover:border-primary"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float" />
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-8 w-12 h-12 bg-primary/30 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      </div>
    </section>
  );
};

export default HeroSection;
