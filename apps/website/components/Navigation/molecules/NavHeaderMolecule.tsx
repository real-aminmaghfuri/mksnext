import React from 'react';
import { ChevronLeft, LayoutGrid } from 'lucide-react';
import { NavLabelAtom } from '../atoms/NavLabelAtom';
import { NavCloseButtonAtom } from '../atoms/NavCloseButtonAtom';

interface NavHeaderMoleculeProps {
  isSubMenu: boolean;
  onBack: () => void;
  onClose: () => void;
}

export const NavHeaderMolecule: React.FC<NavHeaderMoleculeProps> = ({ 
  isSubMenu, 
  onBack, 
  onClose 
}) => {
  return (
    <div className="h-20 px-6 md:px-12 flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shrink-0 relative z-20">
      
      {/* Left: Branding or Back Button */}
      <div className="flex items-center">
        {isSubMenu ? (
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 pr-4 py-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-colors">
              <ChevronLeft size={20} />
            </div>
            <div className="flex flex-col items-start">
              <NavLabelAtom text="KEMBALI" variant="meta" className="leading-none" />
              <span className="text-sm font-bold text-zinc-900 dark:text-white leading-none mt-1">MAIN MENU</span>
            </div>
          </button>
        ) : (
          <div className="flex items-center gap-3">
            <div className="p-2 bg-brand-600 rounded-lg text-white">
              <LayoutGrid size={20} />
            </div>
            <span className="text-lg font-black text-zinc-900 dark:text-white tracking-tighter uppercase">
              NAVIGASI <span className="text-brand-600">PUSAT</span>
            </span>
          </div>
        )}
      </div>

      {/* Right: Close Button */}
      <NavCloseButtonAtom onClick={onClose} />
    </div>
  );
};
