import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ActionButtonAtomProps {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  variant?: 'default' | 'danger';
  className?: string;
}

export const ActionButtonAtom: React.FC<ActionButtonAtomProps> = ({ 
  label, 
  icon: Icon, 
  onClick, 
  variant = 'default', 
  className = "" 
}) => {
  const variants = {
    default: "bg-zinc-100 dark:bg-zinc-800 hover:bg-brand-50 dark:hover:bg-brand-900/20 text-zinc-600 dark:text-zinc-400 hover:text-brand-600",
    danger: "bg-red-50 dark:bg-red-900/20 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/40"
  };

  return (
    <button 
      onClick={onClick}
      className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1 ${variants[variant]} ${className}`}
    >
      <Icon size={12} /> {label}
    </button>
  );
};
