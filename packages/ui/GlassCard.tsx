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
    default: "bg-white/80 dark:bg-luxury-panel/80 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]",
    solid: "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm"
  };

  const hover = hoverEffect 
    ? "hover:shadow-[0_20px_50px_rgba(249,115,22,0.1)] dark:hover:shadow-[0_20px_50px_rgba(249,115,22,0.05)] hover:border-brand-500/40 dark:hover:border-brand-500/40 hover:-translate-y-1.5 group" 
    : "";

  return (
    <div className={`${base} ${variants[variant]} ${hover} ${className}`} {...props}>
      {/* Top accent line for luxury feel, clearly defined */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {children}
    </div>
  );
};