import React from 'react';
import Link from 'next/link';
import { X, ArrowRight } from 'lucide-react';
import { MenuItem } from '../types';

interface LandscapeDrawerOrganismProps {
  isOpen: boolean;
  onClose: () => void;
  menuItem: MenuItem;
}

/**
 * LandscapeDrawerOrganism - The "Side Panel" layout for mobile landscape orientation.
 * Features a split layout with a visual header and a scrollable grid.
 */
export const LandscapeDrawerOrganism: React.FC<LandscapeDrawerOrganismProps> = ({ 
  isOpen, 
  onClose, 
  menuItem 
}) => {
  return (
    <div 
      className={`
        fixed z-[90] top-0 right-[80px] bottom-0 w-[400px] max-w-[calc(100vw-80px)]
        bg-white dark:bg-zinc-950 shadow-2xl border-l border-zinc-200 dark:border-zinc-800
        transition-transform duration-300 ease-out
        hidden landscape:flex flex-row overflow-hidden
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}
    >
      {/* COLUMN 1: Visual Header (Left - 35%) */}
      <div className="w-[35%] h-full bg-zinc-100 dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-brand-500/10 to-transparent pointer-events-none" />
        
        <div className="relative z-10">
          <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center mb-4 shadow-lg shadow-brand-500/30">
            <ArrowRight size={20} />
          </div>
          <h2 className="text-2xl font-black uppercase text-zinc-900 dark:text-white break-words leading-none tracking-tighter">
            {menuItem.label}
          </h2>
          <div className="w-8 h-1 bg-brand-500 mt-4 rounded-full" />
        </div>

        <div className="relative z-10">
          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
            Quick Access
          </p>
        </div>
      </div>

      {/* COLUMN 2: Scrollable Grid (Right - 65%) */}
      <div className="flex-1 h-full overflow-y-auto custom-scrollbar bg-white dark:bg-zinc-950 p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="mt-8">
          {menuItem.columns ? (
            <div className="space-y-8">
              {menuItem.columns.map((col, idx) => (
                <div key={idx}>
                  <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-3 pl-1 sticky top-0 bg-white/95 dark:bg-zinc-950/95 py-2 backdrop-blur-sm z-10">
                    {col.title}
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {col.items.map((item, iIdx) => {
                      const Icon = item.icon;
                      return (
                        <Link 
                          key={iIdx} 
                          href={item.path}
                          onClick={onClose}
                          className="flex items-center gap-3 p-3 rounded-xl border border-zinc-100 dark:border-zinc-800 hover:border-brand-500/30 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all group"
                        >
                          <div className="text-zinc-400 group-hover:text-brand-500 transition-colors">
                            <Icon size={18} />
                          </div>
                          <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300 leading-tight">
                            {item.label}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {menuItem.items?.map((item, iIdx) => {
                const Icon = item.icon;
                return (
                  <Link 
                    key={iIdx} 
                    href={item.path}
                    onClick={onClose}
                    className="flex items-center gap-3 p-3 rounded-xl border border-zinc-100 dark:border-zinc-800 hover:border-brand-500/30 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all group"
                  >
                    <div className="text-zinc-400 group-hover:text-brand-500 transition-colors">
                      <Icon size={18} />
                    </div>
                    <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300 leading-tight">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
