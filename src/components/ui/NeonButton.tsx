import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "cyan" | "purple" | "blue";
  size?: "sm" | "md" | "lg";
}

const NeonButton = ({
  children,
  variant = "cyan",
  size = "md",
  className,
  ...props
}: NeonButtonProps) => {
  const variants = {
    cyan: "border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_hsl(185_100%_50%_/_0.5)]",
    purple: "border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground hover:shadow-[0_0_20px_hsl(270_100%_65%_/_0.5)]",
    blue: "border-accent text-accent hover:bg-accent hover:text-accent-foreground hover:shadow-[0_0_20px_hsl(220_100%_50%_/_0.5)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(
        "font-mono font-medium border-2 rounded-lg bg-transparent transition-all duration-300 transform hover:scale-105 active:scale-95",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default NeonButton;
