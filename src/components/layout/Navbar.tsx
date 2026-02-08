import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navLinks, siteConfig } from "@/data/config";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link to="/" className="font-bold text-xl tracking-tight text-foreground font-mono hover:text-primary transition-colors">
            ~/KrSatyam
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === link.href
                    ? "text-primary font-bold"
                    : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="h-6 w-px bg-border mx-2" />

            <a 
              href={siteConfig.socials.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>

            <Link to="/resume">
              <Button size="sm" variant="outline" className="border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                Resume
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </a>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-border bg-background/95 backdrop-blur absolute w-full animate-in slide-in-from-top-2">
          <div className="container px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 text-sm font-medium rounded-md hover:bg-secondary/50 transition-colors",
                  location.pathname === link.href ? "bg-secondary text-primary" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border mt-2">
              <Link to="/resume" onClick={() => setIsOpen(false)}>
                <Button className="w-full">
                  View Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;