import { Link } from "react-router-dom";
import { Download, Youtube, Users } from "lucide-react";
import MatrixRain from "@/components/effects/MatrixRain";
import GlitchText from "@/components/effects/GlitchText";
import NeonButton from "@/components/ui/NeonButton";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary font-mono text-sm animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Offensive Security & Ethical Hacking
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <GlitchText
              text="KaizenBreach"
              className="text-primary text-glow-cyan"
            />
            <span className="block text-foreground mt-2">
              Continuous Improvement in{" "}
              <span className="text-secondary">Cyber Offense</span>
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-mono animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Master the art of ethical hacking through structured learning,
            hands-on practice, and continuous improvement.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/notes">
              <NeonButton variant="cyan" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download Notes
              </NeonButton>
            </Link>
            <a
              href="https://youtube.com/@KaizenBreach"
              target="_blank"
              rel="noopener noreferrer"
            >
              <NeonButton variant="purple" size="lg">
                <Youtube className="mr-2 h-5 w-5" />
                Watch on YouTube
              </NeonButton>
            </a>
            <Link to="/connect">
              <NeonButton variant="blue" size="lg">
                <Users className="mr-2 h-5 w-5" />
                Connect with Me
              </NeonButton>
            </Link>
          </div>

          {/* Terminal decoration */}
          <div className="mt-16 font-mono text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <span className="text-primary">$</span> sudo learn --hack --ethically
            <span className="inline-block w-2 h-4 ml-1 bg-primary animate-pulse" />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
