
"use client";

import React from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { MenuItem, SubMenuItem } from './Navigation/types';

interface MobileSubMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  menuItem: MenuItem | null;
}

export const MobileSubMenuDrawer: React.FC<MobileSubMenuDrawerProps> = ({ isOpen, onClose, menuItem }) => {
  if (!menuItem) return null;

  // Flatten items from either direct 'items' or 'columns'
  let subItems: SubMenuItem[] = [];
  
  if (menuItem.items) {
    subItems = menuItem.items;
  } else if (menuItem.columns) {
    menuItem.columns.forEach(col => {
      subItems = [...subItems, ...col.items];
    });
  }

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div 
        className={`fixed bottom-0 left-0 w-full z-[70] bg-zinc-100 dark:bg-zinc-900 rounded-t-3xl border-t border-zinc-200 dark:border-zinc-800 shadow-2xl transition-transform duration-300 ease-out ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
        style={{ maxHeight: '85vh' }}
      >
        {/* Handle Bar for aesthetics */}
        <div className="w-full flex justify-center pt-3 pb-1">
            <div className="w-12 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        </div>

        <div className="p-6 pt-2">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 border-b border-zinc-200 dark:border-zinc-800 pb-4">
                <h3 className="text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                    {menuItem.label}
                </h3>
                <button 
                    onClick={onClose}
                    className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                    <X size={20} />
                </button>
            </div>

            {/* Native Grid Layout */}
            <div className="grid grid-cols-2 gap-3 overflow-y-auto max-h-[60vh] pb-10 custom-scrollbar">
                {subItems.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <Link 
                            key={idx}
                            href={item.path}
                            onClick={onClose}
                            className="flex flex-col p-4 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-2xl active:scale-95 transition-transform shadow-sm"
                        >
                            <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-500 flex items-center justify-center mb-3">
                                <Icon size={20} strokeWidth={2.5} />
                            </div>
                            <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200 leading-tight">
                                {item.label}
                            </span>
                            <span className="text-[10px] text-zinc-500 mt-1 line-clamp-2 leading-relaxed">
                                {item.desc}
                            </span>
                        </Link>
                    )
                })}
            </div>
        </div>
      </div>
    </>
  );
};
