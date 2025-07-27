import myPhoto from "@/assets/Leo.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with 5+ years of experience creating digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
            I’m an aspiring full-stack developer with a passion for creating innovative digital experiences. My journey started with building my own computer and soon grew into experimenting with websites. I specialize in both frontend and backend development, always exploring new technologies to bring ideas to life.
            </p>
            
            

            <div className="flex flex-wrap gap-4 pt-4">
              {["Problem Solving", "Team Collaboration", "Determination", "User-Centric Design"].map((trait) => (
                <span 
                  key={trait}
                  className="inline-block bg-blue-100 text-blue-700 rounded-full px-4 py-2 font-semibold backdrop-blur-sm shadow"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* User Image on the right, styled */}
          <div className="flex justify-center items-center">
            <img src={myPhoto} alt="Leo" className="rounded-2xl shadow-lg w-72 h-72 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
