import Mascot from "./Mascot";
import { Heart } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Pricing", "API", "Integrations"],
    Resources: ["Documentation", "Blog", "Case Studies", "Help Center"],
    Company: ["About", "Careers", "Contact", "Press"],
    Legal: ["Privacy", "Terms", "Cookies", "GDPR"],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Mascot size="sm" expression="happy" />
              <span className="text-xl font-display font-bold text-foreground">
                DroughtAI
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Empowering communities with AI-powered drought prediction for a more resilient future.
            </p>
            <div className="flex gap-4">
              {["twitter", "linkedin", "github"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <span className="sr-only">{social}</span>
                  <span className="text-sm font-bold capitalize">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-bold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 DroughtAI. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> for our planet
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
