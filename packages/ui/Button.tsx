"use client";
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyle = "inline-flex items-center justify-center rounded-2xl font-black tracking-tight transition-all duration-500 ease-out active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-500/50 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    // High contrast primary with aggressive and luxurious shadow
    primary: "bg-gradient-to-br from-brand-500 via-brand-600 to-red-700 text-white shadow-[0_10px_40px_rgba(234,88,12,0.4)] hover:shadow-[0_20px_60px_rgba(234,88,12,0.5)] hover:scale-[1.03] border-t-2 border-white/20 active:scale-95",
    
    // Clear sharp borders for secondary
    secondary: "bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white border-2 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:border-brand-500/50 dark:hover:border-brand-500/50 shadow-md hover:shadow-lg",
    
    // Ghost remains subtle but text color is distinct
    ghost: "bg-transparent text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-brand-600 dark:hover:text-brand-400",
    
    // Strong outline with thicker border
    outline: "bg-transparent border-2 border-brand-500 text-brand-600 dark:text-brand-500 hover:bg-gradient-to-r hover:from-brand-500 hover:to-red-600 hover:text-white hover:border-transparent shadow-sm"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-8 py-4 text-base"
  };

  const widthClass = fullWidth ? "w-full" : "w-auto";

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};