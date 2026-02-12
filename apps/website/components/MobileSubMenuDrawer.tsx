
"use client";

import React from 'react';
import Link from 'next/link';
import { X, ArrowRight } from 'lucide-react';
import { MenuItem, SubMenuItem } from './Navigation/types';

// Color Palette for "Lively" Icons
const colorPalette = [
  "text-blue-600 bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800",
  "text-orange-600 bg-orange-50 dark:bg-orange-900/20 border-orange-100 dark:border-orange-800",
  "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-800",
  "text-purple-600 bg-purple-50 dark:bg-purple-900/20 border-purple-100 dark:border-purple-800",
  "text-rose-600 bg-rose-50 dark:bg-rose-900/20 border-rose-100 dark:border-rose-800",
  "text-cyan-600 bg-cyan-50 dark:bg-cyan-900/20 border-cyan-100 dark:border-cyan-800",
];

interface GridItemProps {
  item: SubMenuItem;
  onClose: () => void;
  index: number;
}

const GridItem: React.FC<GridItemProps> = ({ item, onClose, index }) => {
  const Icon = item.icon;
  const themeClass = colorPalette[index % colorPalette.length];

  return (
    <Link 
      href={item.path}
      onClick={onClose}
      className="flex flex-col items-center text-center gap-2 group active:scale-95 transition-transform duration-200 p-2 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
    >
      <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-sm transition-colors ${themeClass}`}>
          <Icon size={20} strokeWidth={2} />
      </div>
      <span className="text-[9px] font-bold text-zinc-700 dark:text-zinc-300 leading-tight line-clamp-2 max-w-[70px]">
          {item.label}
      </span>
    </Link>
  );
};

interface MobileSubMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  menuItem: MenuItem | null;
}

export const MobileSubMenuDrawer: React.FC<MobileSubMenuDrawerProps> = ({ isOpen, onClose, menuItem }) => {
  
  if (!menuItem) return null;

  return (
    <>
      {/* 
         Backdrop 
         CRITICAL FIX: In landscape, right is set to 80px. 
         This prevents the backdrop from covering the Right Sidebar, 
         solving the "Transparent Layer" issue.
      */}
      <div 
        className={`
            fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm transition-opacity duration-300
            landscape:right-[80px]
            ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={onClose}
      />

      {/* 
         === PORTRAIT DRAWER (Bottom Sheet) ===
         Visible only in portrait
      */}
      <div 
        className={`
            fixed z-[65] bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 shadow-2xl transition-transform duration-300 ease-out
            bottom-0 left-0 w-full rounded-t-[32px] landscape:hidden
            ${isOpen ? 'translate-y-0' : 'translate-y-full'}
        `}
        style={{ maxHeight: '85vh' }}
      >
        <div className="w-full flex justify-center pt-3 pb-1">
            <div className="w-12 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        </div>
        <div className="p-6 pt-2 overflow-y-auto pb-10 max-h-[80vh]">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-black uppercase text-zinc-900 dark:text-white">{menuItem.label}</h3>
                <button onClick={onClose}><X/></button>
            </div>
            {/* Portrait Grid Content Reused Logic */}
             <div className="grid grid-cols-4 gap-2">
                {menuItem.columns ? 
                    menuItem.columns.flatMap((col, idx) => col.items.map((item, i) => <GridItem key={i} item={item} onClose={onClose} index={idx + i} />)) 
                    : menuItem.items?.map((item, i) => <GridItem key={i} item={item} onClose={onClose} index={i} />)
                }
             </div>
        </div>
      </div>

      {/* 
         === LANDSCAPE DRAWER (Split Side Panel) ===
         Visible only in landscape.
         Constraint: Full Height, 2 Columns (Header Left, Grid Right)
      */}
      <div 
        className={`
            fixed z-[55] top-0 right-[80px] bottom-0 w-[400px] max-w-[calc(100vw-80px)]
            bg-white dark:bg-zinc-950 shadow-2xl border-l border-zinc-200 dark:border-zinc-800
            transition-transform duration-300 ease-out
            hidden landscape:flex flex-row overflow-hidden
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* COLUMN 1: Visual Header (Left - 35%) */}
        <div className="w-[35%] h-full bg-zinc-100 dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between relative overflow-hidden">
            {/* Decorative Background Element */}
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
                                    {col.items.map((item, iIdx) => (
                                        <Link 
                                            key={iIdx} 
                                            href={item.path}
                                            onClick={onClose}
                                            className="flex items-center gap-3 p-3 rounded-xl border border-zinc-100 dark:border-zinc-800 hover:border-brand-500/30 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all group"
                                        >
                                            <div className="text-zinc-400 group-hover:text-brand-500 transition-colors">
                                                <item.icon size={18} />
                                            </div>
                                            <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300 leading-tight">
                                                {item.label}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-3">
                        {menuItem.items?.map((item, iIdx) => (
                            <Link 
                                key={iIdx} 
                                href={item.path}
                                onClick={onClose}
                                className="flex items-center gap-3 p-3 rounded-xl border border-zinc-100 dark:border-zinc-800 hover:border-brand-500/30 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all group"
                            >
                                <div className="text-zinc-400 group-hover:text-brand-500 transition-colors">
                                    <item.icon size={18} />
                                </div>
                                <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300 leading-tight">
                                    {item.label}
                                </span>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>

      </div>
    </>
  );
};
