import React from 'react';
import Link from 'next/link';
import { ChevronRight, ArrowRight, LucideIcon } from 'lucide-react';
import { NavIconAtom } from '../atoms/NavIconAtom';
import { NavLabelAtom } from '../atoms/NavLabelAtom';

interface NavCardMoleculeProps {
  label: string;
  icon: LucideIcon;
  isAction: boolean;
  onClick?: () => void;
  path?: string;
}

export const NavCardMolecule: React.FC<NavCardMoleculeProps> = ({ 
  label, 
  icon, 
  isAction, 
  onClick, 
  path 
}) => {
  const content = (
    <div className="h-full group relative overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 hover:border-brand-500/50 hover:shadow-xl dark:hover:shadow-brand-900/10 transition-all duration-300 active:scale-[0.98]">
      <div className="flex flex-col h-full justify-between gap-4">
        {/* Header Icon */}
        <div className="flex justify-between items-start">
          <NavIconAtom icon={icon} size={24} className="w-12 h-12" />
          
          <div className="w-8 h-8 rounded-full border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:border-brand-500 group-hover:text-brand-500 transition-colors">
            {isAction ? (
              <ChevronRight size={16} />
            ) : (
              <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-transform" />
            )}
          </div>
        </div>

        {/* Text */}
        <div>
          <NavLabelAtom text={label} variant="title" className="mb-2 block" />
          <NavLabelAtom text={isAction ? 'Lihat Opsi' : 'Akses Langsung'} variant="subtitle" />
        </div>
      </div>
    </div>
  );

  if (isAction && onClick) {
    return (
      <div onClick={onClick} className="h-full cursor-pointer">
        {content}
      </div>
    );
  }

  return (
    <Link href={path || '#'} className="h-full block">
      {content}
    </Link>
  );
};
