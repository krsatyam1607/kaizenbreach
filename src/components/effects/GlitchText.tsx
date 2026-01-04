import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchOnHover?: boolean;
}

const GlitchText = ({ text, className, glitchOnHover = false }: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(!glitchOnHover);

  useEffect(() => {
    if (!glitchOnHover) {
      const interval = setInterval(() => {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 200);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [glitchOnHover]);

  return (
    <span
      className={cn(
        "relative inline-block",
        glitchOnHover && "hover:animate-glitch",
        isGlitching && !glitchOnHover && "animate-glitch",
        className
      )}
      onMouseEnter={() => glitchOnHover && setIsGlitching(true)}
      onMouseLeave={() => glitchOnHover && setIsGlitching(false)}
    >
      {text}
    </span>
  );
};

export default GlitchText;
