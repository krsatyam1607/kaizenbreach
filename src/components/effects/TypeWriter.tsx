import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TypeWriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
}

const TypeWriter = ({
  text,
  speed = 50,
  delay = 0,
  className,
  showCursor = true,
}: TypeWriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsTyping(true);
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, delay]);

  return (
    <span className={cn("font-mono", className)}>
      {displayText}
      {showCursor && (
        <span
          className={cn(
            "inline-block w-2 h-5 ml-1 bg-primary align-middle",
            isTyping ? "animate-pulse" : "opacity-0"
          )}
        />
      )}
    </span>
  );
};

export default TypeWriter;
