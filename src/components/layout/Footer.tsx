import { Github, Youtube, Linkedin, Instagram } from "lucide-react";
import { siteConfig } from "@/data/config";

const Footer = () => {
  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm py-8 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} {siteConfig.author}. All rights reserved.
        </div>
        
        <div className="flex items-center gap-6">
           <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href={siteConfig.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-destructive transition-colors">
            <Youtube className="h-5 w-5" />
          </a>
          <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-pink-500 transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;