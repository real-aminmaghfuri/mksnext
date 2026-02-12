
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import { MenuItem, SubMenuItem } from './types';

interface LandscapeSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  menuStructure: MenuItem[];
}

export const LandscapeSidebar: React.FC<LandscapeSidebarProps> = ({ isOpen, onClose, menuStructure }) => {
  // Navigation Stack for "Slide" Effect
  // [] = Main Menu
  // [Item] = Submenu of Item
  const [navStack, setNavStack] = useState<MenuItem[]>([]);
  const [isClosing, setIsClosing] = useState(false);

  // Reset stack when opening/closing
  useEffect(() => {
    if (isOpen) {
      setNavStack([]);
      setIsClosing(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300); // Wait for animation
  };

  const pushMenu = (item: MenuItem) => {
    setNavStack([...navStack, item]);
  };

  const popMenu = () => {
    const newStack = [...navStack];
    newStack.pop();
    setNavStack(newStack);
  };

  // Determine current items to display
  const currentParent = navStack.length > 0 ? navStack[navStack.length - 1] : null;
  
  // Helper to extract flat list of subitems from either 'items' or 'columns'
  const getSubItems = (item: MenuItem): SubMenuItem[] => {
    if (item.items) return item.items;
    if (item.columns) {
      return item.columns.flatMap(col => col.items);
    }
    return [];
  };

  if (!isOpen && !isClosing) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
        onClick={handleClose}
      />

      {/* Sidebar Panel - Right Side */}
      <div 
        className={`fixed top-0 right-0 h-full w-[350px] max-w-[90vw] bg-zinc-50 dark:bg-black border-l border-zinc-200 dark:border-zinc-800 z-[70] shadow-2xl transition-transform duration-300 ease-out flex flex-col ${isClosing ? 'translate-x-full' : 'translate-x-0'}`}
      >
        
        {/* Header Area */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shrink-0 h-20">
            {currentParent ? (
                <button 
                    onClick={popMenu}
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-500 hover:text-brand-600 dark:hover:text-brand-500 transition-colors"
                >
                    <ChevronLeft size={16} /> KEMBALI
                </button>
            ) : (
                <span className="text-sm font-black uppercase tracking-widest text-zinc-400">
                    MAIN MENU
                </span>
            )}
            
            <button 
                onClick={handleClose}
                className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-full hover:bg-red-100 dark:hover:bg-red-900/30 hover:text-red-600 transition-colors"
            >
                <X size={20} />
            </button>
        </div>

        {/* Content Area with Slide Animation */}
        <div className="flex-1 overflow-x-hidden relative bg-zinc-50 dark:bg-zinc-950">
            
            {/* View Container */}
            <div className="absolute inset-0 overflow-y-auto custom-scrollbar p-4 space-y-3">
                
                {/* 
                    LOGIC: If currentParent exists, show its children.
                    If null, show Main Menu roots.
                */}
                
                {!currentParent ? (
                    // --- ROOT MENU LIST ---
                    <div className="space-y-3 animate-in slide-in-from-left-10 duration-300">
                        {menuStructure.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div 
                                    key={idx}
                                    onClick={() => item.hasDropdown ? pushMenu(item) : handleClose()}
                                    className="block"
                                >
                                    {/* If link, wrap content. If dropdown, div acts as button */}
                                    {item.hasDropdown ? (
                                        <div className="group cursor-pointer bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-brand-500/50 transition-all active:scale-[0.98] shadow-sm flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400 group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
                                                    {Icon && <Icon size={20} strokeWidth={2} />}
                                                </div>
                                                <span className="font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-tight text-sm">
                                                    {item.label}
                                                </span>
                                            </div>
                                            <ChevronRight size={18} className="text-zinc-400 group-hover:text-brand-500 group-hover:translate-x-1 transition-all" />
                                        </div>
                                    ) : (
                                        <Link href={item.path} onClick={handleClose}>
                                            <div className="group cursor-pointer bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-brand-500/50 transition-all active:scale-[0.98] shadow-sm flex items-center justify-between">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400 group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
                                                        {Icon && <Icon size={20} strokeWidth={2} />}
                                                    </div>
                                                    <span className="font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-tight text-sm">
                                                        {item.label}
                                                    </span>
                                                </div>
                                                <ArrowRight size={18} className="text-zinc-400 group-hover:text-brand-500 -rotate-45 group-hover:rotate-0 transition-all" />
                                            </div>
                                        </Link>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    // --- SUB MENU LIST ---
                    <div className="space-y-3 animate-in slide-in-from-right-10 duration-300">
                        
                        <div className="mb-6 px-2">
                            <h3 className="text-xl font-black text-brand-600 dark:text-brand-500 uppercase tracking-tighter leading-none mb-1">
                                {currentParent.label}
                            </h3>
                            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                                Select Option
                            </p>
                        </div>

                        {getSubItems(currentParent).map((subItem, sIdx) => {
                            const Icon = subItem.icon;
                            return (
                                <Link 
                                    key={sIdx} 
                                    href={subItem.path}
                                    onClick={handleClose}
                                    className="block group"
                                >
                                    <div className="bg-white dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-brand-500/50 active:scale-[0.98] transition-all flex items-start gap-4">
                                        <div className="shrink-0 mt-1 text-brand-500">
                                            <Icon size={18} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-brand-600 transition-colors">
                                                {subItem.label}
                                            </h4>
                                            <p className="text-[10px] text-zinc-500 leading-tight mt-1 line-clamp-2">
                                                {subItem.desc}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                )}

            </div>
        </div>

        {/* Footer Info */}
        <div className="p-4 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 text-[10px] text-zinc-400 text-center font-mono uppercase tracking-widest shrink-0">
            System v2.0 &bull; Secure Connection
        </div>

      </div>
    </>
  );
};
