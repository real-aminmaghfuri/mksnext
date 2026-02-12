
"use client";

import React from 'react';
import Link from 'next/link';
import { X, ChevronRight } from 'lucide-react';
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
  
  const getTagline = (label: string = "") => {
    const l = label.toUpperCase();
    if (l.includes("MAIN") || l.includes("MENU")) return "KOMANDO";
    if (l.includes("PROFIL") || l.includes("ABOUT")) return "ARSIP";
    if (l.includes("LAYANAN") || l.includes("SERVICES")) return "JASA";
    if (l.includes("SOLUSI") || l.includes("SOLUTION")) return "ALAT";
    if (l.includes("SUPPORT") || l.includes("BANTUAN")) return "BANTUAN";
    if (l.includes("WAWASAN") || l.includes("INSIGHTS")) return "INTEL";
    return "AKSES";
  };

  if (!menuItem) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* 
         ADAPTIVE DRAWER PANEL:
         - Portrait: Bottom Sheet (Rounded Top, Slide Up)
         - Landscape: Left Sidebar Extension (Rounded Right, Slide Right)
      */}
      <div 
        className={`
            fixed z-[65] bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 shadow-2xl transition-transform duration-300 ease-out
            
            /* PORTRAIT MODE */
            bottom-0 left-0 w-full rounded-t-[32px] border-t
            ${isOpen ? 'translate-y-0' : 'translate-y-full'}
            
            /* LANDSCAPE MODE */
            landscape:top-0 landscape:left-[80px] landscape:h-full landscape:w-[320px] landscape:rounded-r-[32px] landscape:rounded-l-none landscape:border-r landscape:border-t-0
            landscape:${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        style={{ maxHeight: '85vh', height: 'auto' }}
      >
        {/* Handle Bar (Portrait Only) */}
        <div className="w-full flex justify-center pt-3 pb-1 landscape:hidden">
            <div className="w-12 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        </div>

        <div className="p-6 pt-2 h-full flex flex-col landscape:pt-8">
            {/* Header */}
            <div className="flex justify-between items-start mb-6 border-b border-zinc-100 dark:border-zinc-800 pb-4 shrink-0">
                <div className="flex flex-col pr-4">
                    <div className="flex items-center gap-2 mb-1 text-brand-600 dark:text-brand-500">
                        <div className="w-1.5 h-4 bg-brand-600 dark:bg-brand-500 rounded-full" />
                        <span className="text-[10px] font-black uppercase tracking-widest">{getTagline(menuItem.label)}</span>
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tight text-zinc-900 dark:text-white leading-none">
                        {menuItem.label}
                    </h3>
                </div>
                <button 
                    onClick={onClose}
                    className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors mt-1"
                >
                    <X size={20} />
                </button>
            </div>

            {/* Content Area - Scrollable */}
            <div className="overflow-y-auto pb-10 custom-scrollbar flex-1">
                {menuItem.columns ? (
                    <div className="space-y-8">
                        {menuItem.columns.map((col, idx) => (
                            <div key={idx}>
                                <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-3 pl-1">
                                    {col.title}
                                </h4>
                                <div className="grid grid-cols-4 min-[500px]:grid-cols-5 landscape:grid-cols-3 gap-2">
                                    {col.items.map((item, iIdx) => (
                                        <GridItem key={iIdx} item={item} onClose={onClose} index={iIdx + (idx * 10)} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-4 min-[500px]:grid-cols-5 landscape:grid-cols-3 gap-2">
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
