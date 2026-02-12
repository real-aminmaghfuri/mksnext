
"use client";

import React from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { MenuItem, SubMenuItem } from './Navigation/types';

// Color Palette for "Lively" Icons (App Drawer Style)
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
  // Pick color based on index modulus
  const themeClass = colorPalette[index % colorPalette.length];

  return (
    <Link 
      href={item.path}
      onClick={onClose}
      className="flex flex-col items-center text-center gap-2 group active:scale-95 transition-transform duration-200"
    >
      <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center shadow-sm transition-colors ${themeClass}`}>
          <Icon size={24} strokeWidth={2} />
      </div>
      <span className="text-[10px] font-bold text-zinc-700 dark:text-zinc-300 leading-tight line-clamp-2 max-w-[64px]">
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
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div 
        className={`fixed bottom-0 left-0 w-full z-[70] bg-white dark:bg-zinc-950 rounded-t-3xl border-t border-zinc-200 dark:border-zinc-800 shadow-2xl transition-transform duration-300 ease-out ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
        style={{ maxHeight: '85vh', height: 'auto' }}
      >
        {/* Handle Bar */}
        <div className="w-full flex justify-center pt-3 pb-1">
            <div className="w-12 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        </div>

        <div className="p-6 pt-2 h-full flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 border-b border-zinc-100 dark:border-zinc-800 pb-4 shrink-0">
                <h3 className="text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                    {menuItem.label}
                </h3>
                <button 
                    onClick={onClose}
                    className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                    <X size={20} />
                </button>
            </div>

            {/* Content Area - Scrollable */}
            <div className="overflow-y-auto pb-10 custom-scrollbar flex-1">
                {menuItem.columns ? (
                    /* Layout 1: Categorized (Columns) */
                    <div className="space-y-8">
                        {menuItem.columns.map((col, idx) => (
                            <div key={idx}>
                                {/* Category Title */}
                                <div className="flex items-center gap-2 mb-4 px-1">
                                    <div className="w-1 h-3 bg-brand-500 rounded-full" />
                                    <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                                        {col.title}
                                    </h4>
                                </div>
                                
                                {/* Responsive Grid: 4 cols mobile, 5 cols tablet (md) */}
                                <div className="grid grid-cols-4 md:grid-cols-5 gap-4">
                                    {col.items.map((item, iIdx) => (
                                        <GridItem key={iIdx} item={item} onClose={onClose} index={iIdx + (idx * 10)} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Layout 2: Flat List (Standard) */
                    // Responsive Grid: 4 cols mobile, 5 cols tablet (md)
                    <div className="grid grid-cols-4 md:grid-cols-5 gap-4">
                        {menuItem.items?.map((item, iIdx) => (
                            <GridItem key={iIdx} item={item} onClose={onClose} index={iIdx} />
                        ))}
                    </div>
                )}
            </div>
        </div>
      </div>
    </>
  );
};
