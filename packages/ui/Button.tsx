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
  const baseStyle = "inline-flex items-center justify-center rounded-xl font-bold transition-all duration-300 ease-out active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-500/50 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    // High contrast primary with shadow
    primary: "bg-gradient-to-r from-brand-600 to-red-600 text-white shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:to-red-500 border border-transparent",
    
    // Clear borders for secondary
    secondary: "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border-2 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700",
    
    // Ghost remains subtle but text color is distinct
    ghost: "bg-transparent text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-brand-600 dark:hover:text-brand-400",
    
    // Strong outline
    outline: "bg-transparent border-2 border-brand-500 text-brand-600 dark:text-brand-500 hover:bg-brand-500 hover:text-white"
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