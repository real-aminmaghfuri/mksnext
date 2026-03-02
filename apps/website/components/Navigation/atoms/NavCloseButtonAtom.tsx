import React from 'react';
import { X } from 'lucide-react';

interface NavCloseButtonAtomProps {
  onClick: () => void;
}

export const NavCloseButtonAtom: React.FC<NavCloseButtonAtomProps> = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center justify-center transition-all active:scale-90 group"
      aria-label="Close Navigation"
    >
      <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
    </button>
  );
};
