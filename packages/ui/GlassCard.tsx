"use client";
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
  const base = "relative overflow-hidden rounded-2xl transition-all duration-500";
  
  // Default: Slightly translucent but with strong borders
  // Solid: Fully opaque for maximum readability in System mode
  const variants = {
    // Default: Slightly translucent but with VERY strong borders and luxury shadows
    default: "bg-white/80 dark:bg-luxury-panel/90 backdrop-blur-2xl border-2 border-zinc-200/50 dark:border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.3)]",
    // Solid: Fully opaque for high-density System mode
    solid: "bg-white dark:bg-zinc-950 border-2 border-zinc-300 dark:border-zinc-800 shadow-xl"
  };

  const hover = hoverEffect 
    ? "hover:shadow-[0_20px_80px_rgba(249,115,22,0.15)] dark:hover:shadow-[0_30px_100px_rgba(249,115,22,0.08)] hover:border-brand-500/60 dark:hover:border-brand-500/30 hover:-translate-y-2 group" 
    : "";

  return (
    <div className={`${base} ${variants[variant]} ${hover} ${className}`} {...props}>
      {/* Permanent Accent Line (Bottom or Top) - Orange-Red Gradient as requested */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-500 via-orange-600 to-red-600 opacity-30 dark:opacity-20 translate-y-[1px]" />
      
      {/* Top reveal accent on hover */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-brand-500 via-brand-600 to-red-600 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-[1px]" />
      {children}
    </div>
  );
};