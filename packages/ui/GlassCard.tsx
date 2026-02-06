import React, { ReactNode, HTMLAttributes } from 'react';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  variant?: 'default' | 'solid';
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = false,
  variant = 'default',
  ...props 
}) => {
  // Logic for distinct borders and fills (High Contrast)
  const base = "relative overflow-hidden rounded-xl transition-all duration-300";
  
  // Default: Slightly translucent but with strong borders
  // Solid: Fully opaque for maximum readability in System mode
  const variants = {
    default: "bg-white/90 dark:bg-luxury-panel/90 backdrop-blur-md border border-zinc-300 dark:border-zinc-700 shadow-lg",
    solid: "bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 shadow-sm"
  };

  const hover = hoverEffect 
    ? "hover:shadow-xl hover:border-brand-500/30 dark:hover:border-brand-500/30 hover:-translate-y-1 group" 
    : "";

  return (
    <div className={`${base} ${variants[variant]} ${hover} ${className}`} {...props}>
      {/* Top accent line for luxury feel, clearly defined */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {children}
    </div>
  );
};