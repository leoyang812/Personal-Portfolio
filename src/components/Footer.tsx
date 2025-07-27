const Footer = () => {
    return (
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Alex Johnson</h3>
              <p className="text-background/80 leading-relaxed">
                Full-Stack Developer passionate about creating innovative digital experiences 
                that make a difference.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-background/80">
                {["About", "Skills", "Projects", "Contact"].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase()}`}
                      className="hover:text-background transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-background/80">
                <p>alex@example.com</p>
                <p>+1 (555) 123-4567</p>
                <p>San Francisco, CA</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p>© 2024 Alex Johnson. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  