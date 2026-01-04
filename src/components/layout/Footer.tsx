import { Link } from "react-router-dom";
import { Shield, Youtube, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Motto */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link to="/" className="flex items-center gap-2 group">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-mono text-lg font-bold">
                <span className="text-primary">Kaizen</span>
                <span className="text-foreground">Breach</span>
              </span>
            </Link>
            <p className="font-mono text-sm text-muted-foreground">
              Improve. Break. Secure.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://youtube.com/@KaizenBreach"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-destructive transition-colors duration-300"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/kaizenbreach"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-secondary transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/kaizenbreach"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-accent transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright & Author */}
          <div className="text-center md:text-right">
            <p className="font-mono text-sm text-muted-foreground">
              © {new Date().getFullYear()} KaizenBreach
            </p>
            <p className="font-mono text-xs text-muted-foreground/60 mt-1">
              Created by <span className="text-primary/80">Kr Satyam</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;