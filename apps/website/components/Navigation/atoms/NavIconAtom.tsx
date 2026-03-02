import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavIconAtomProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
  variant?: 'default' | 'brand';
}

export const NavIconAtom: React.FC<NavIconAtomProps> = ({ 
  icon: Icon, 
  size = 24, 
  className = "",
  variant = 'default'
}) => {
  const baseStyles = "rounded-2xl flex items-center justify-center transition-colors duration-300";
  const variants = {
    default: "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 group-hover:bg-brand-600 group-hover:text-white",
    brand: "bg-brand-600 text-white"
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      <Icon size={size} strokeWidth={2} />
    </div>
  );
};
