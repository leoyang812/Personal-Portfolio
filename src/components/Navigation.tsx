import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isScrolled
          ? "bg-white shadow-lg backdrop-blur-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className={`w-full flex items-center justify-between px-8 max-w-7xl mx-auto transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="text-xl font-bold text-black">
          Portfolio
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {['about', 'skills', 'experiences', 'projects', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-foreground hover:text-primary transition-colors capitalize"
            >
              {section}
            </button>
          ))}
        </div>

        <Button
          onClick={() => scrollToSection("contact")}
          className="hidden md:inline-flex bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold shadow hover:from-purple-500 hover:to-blue-500 transition-colors border-0"
        >
          Get In Touch
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;