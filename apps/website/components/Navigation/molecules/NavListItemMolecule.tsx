import React from 'react';
import Link from 'next/link';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { NavIconAtom } from '../atoms/NavIconAtom';

interface NavListItemMoleculeProps {
  label: string;
  desc: string;
  icon: LucideIcon;
  path: string;
  onClick: () => void;
}

export const NavListItemMolecule: React.FC<NavListItemMoleculeProps> = ({ 
  label, 
  desc, 
  icon, 
  path, 
  onClick 
}) => {
  return (
    <Link 
      href={path}
      onClick={onClick}
      className="group block"
    >
      <div className="flex items-center gap-6 p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-brand-500/50 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all duration-200 active:scale-[0.99]">
        <NavIconAtom icon={icon} size={28} className="w-14 h-14 shrink-0" />
        
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-1 group-hover:text-brand-600 transition-colors">
            {label}
          </h4>
          <p className="text-xs text-zinc-500 line-clamp-1">
            {desc}
          </p>
        </div>
        
        <div className="w-8 h-8 flex items-center justify-center text-zinc-300 group-hover:text-brand-500 transition-colors">
          <ArrowRight size={20} />
        </div>
      </div>
    </Link>
  );
};
