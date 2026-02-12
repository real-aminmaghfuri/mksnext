"use client";

import React from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { MenuItem, SubMenuItem } from './Navigation/types';

// Helper component for grid items to ensure consistency
interface GridItemProps {
  item: SubMenuItem;
  onClose: () => void;
}

const GridItem: React.FC<GridItemProps> = ({ item, onClose }) => {
  const Icon = item.icon;
  return (
    <Link 
      href={item.path}
      onClick={onClose}
      className="flex flex-col items-center text-center gap-2 group active:scale-95 transition-transform duration-200"
    >
      <div className="w-14 h-14 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-600 dark:text-zinc-400 group-active:border-brand-500 group-active:text-brand-500 group-active:bg-brand-50 dark:group-active:bg-brand-900/20 shadow-sm transition-colors">
          <Icon size={24} strokeWidth={1.5} />
      </div>
      <span className="text-[10px] font-bold text-zinc-700 dark:text-zinc-300 leading-tight line-clamp-2 max-w-[60px]">
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
                                
                                {/* 4 Grid Layout */}
                                <div className="grid grid-cols-4 gap-4">
                                    {col.items.map((item, iIdx) => (
                                        <GridItem key={iIdx} item={item} onClose={onClose} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Layout 2: Flat List (Standard) */
                    <div className="grid grid-cols-4 gap-4">
                        {menuItem.items?.map((item, iIdx) => (
                            <GridItem key={iIdx} item={item} onClose={onClose} />
                        ))}
                    </div>
                )}
            </div>
        </div>
      </div>
    </>
  );
};