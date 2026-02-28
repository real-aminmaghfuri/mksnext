import React from 'react';

interface StatusBadgeAtomProps {
  label: string | number;
  variant?: 'brand' | 'dark';
  className?: string;
}

export const StatusBadgeAtom: React.FC<StatusBadgeAtomProps> = ({ 
  label, 
  variant = 'brand', 
  className = "" 
}) => {
  const variants = {
    brand: "bg-brand-100 dark:bg-brand-900/30 text-brand-600",
    dark: "bg-black/80 backdrop-blur text-white"
  };

  return (
    <span className={`px-3 py-1 text-[9px] font-black uppercase rounded-full ${variants[variant]} ${className}`}>
      {label}
    </span>
  );
};
