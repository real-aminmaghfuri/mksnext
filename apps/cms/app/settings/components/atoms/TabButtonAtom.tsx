import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TabButtonAtomProps {
  label: string;
  icon: LucideIcon;
  isActive: boolean;
  onClick: () => void;
}

export const TabButtonAtom: React.FC<TabButtonAtomProps> = ({ label, icon: Icon, isActive, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`px-6 py-4 text-xs font-black uppercase tracking-widest border-b-2 transition-colors flex items-center gap-2 ${
        isActive 
          ? 'border-brand-600 text-brand-600' 
          : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
      }`}
    >
      <Icon size={16} /> {label}
    </button>
  );
};
