
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronRight, ChevronLeft, ArrowRight, LayoutGrid, Circle } from 'lucide-react';
import { MenuItem, SubMenuItem } from './types';

interface LandscapeSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  menuStructure: MenuItem[];
}

export const LandscapeSidebar: React.FC<LandscapeSidebarProps> = ({ isOpen, onClose, menuStructure }) => {
  // Navigation Stack: [] = Root, [Item] = Submenu
  const [navStack, setNavStack] = useState<MenuItem[]>([]);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [isClosing, setIsClosing] = useState(false);

  // Reset state when menu opens
  useEffect(() => {
    if (isOpen) {
      setNavStack([]);
      setDirection('forward');
      setIsClosing(false);
      // Lock body scroll
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  const pushMenu = (item: MenuItem) => {
    setDirection('forward');
    setNavStack([...navStack, item]);
  };

  const popMenu = () => {
    setDirection('backward');
    const newStack = [...navStack];
    newStack.pop();
    setNavStack(newStack);
  };

  // Helper to get flattened items
  const getSubItems = (item: MenuItem): SubMenuItem[] => {
    if (item.items) return item.items;
    if (item.columns) {
      return item.columns.flatMap(col => col.items);
    }
    return [];
  };

  const currentParent = navStack.length > 0 ? navStack[navStack.length - 1] : null;

  if (!isOpen && !isClosing) return null;

  return (
    <div className={`fixed inset-0 z-[100] bg-zinc-50 dark:bg-black transition-opacity duration-300 flex flex-col ${isClosing ? 'opacity-0' : 'opacity-100'}`}>
      
      {/* --- HEADER BAR (Sticky Top) --- */}
      <div className="h-20 px-6 md:px-12 flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shrink-0 relative z-20">
        
        {/* Left: Branding or Back Button */}
        <div className="flex items-center">
            {currentParent ? (
                <button 
                    onClick={popMenu}
                    className="group flex items-center gap-2 pr-4 py-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                    <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-colors">
                        <ChevronLeft size={20} />
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-none">KEMBALI</span>
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
        <button 
            onClick={handleClose}
            className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center justify-center transition-all active:scale-90"
        >
            <X size={24} />
        </button>
      </div>

      {/* --- CONTENT AREA (Scrollable) --- */}
      <div className="flex-1 overflow-hidden relative bg-zinc-50 dark:bg-black">
        
        {/* ANIMATION CONTAINER */}
        <div 
            key={currentParent ? currentParent.label : 'root'}
            className={`absolute inset-0 overflow-y-auto custom-scrollbar p-6 md:p-12 animate-in duration-300 ease-out fill-mode-forwards
                ${direction === 'forward' ? 'slide-in-from-right-10 fade-in-0' : 'slide-in-from-left-10 fade-in-0'}
            `}
        >
            <div className="max-w-7xl mx-auto">
                
                {!currentParent ? (
                    /* === LEVEL 0: ROOT MENU (GRID LAYOUT) === */
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {menuStructure.map((item, idx) => {
                            const Icon = item.icon;
                            const isAction = item.hasDropdown;

                            // Card Content
                            const content = (
                                <div className="h-full group relative overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 hover:border-brand-500/50 hover:shadow-xl dark:hover:shadow-brand-900/10 transition-all duration-300 active:scale-[0.98]">
                                    <div className="flex flex-col h-full justify-between gap-4">
                                        {/* Header Icon */}
                                        <div className="flex justify-between items-start">
                                            <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                                                {Icon && <Icon size={24} strokeWidth={2} />}
                                            </div>
                                            {isAction ? (
                                                <div className="w-8 h-8 rounded-full border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:border-brand-500 group-hover:text-brand-500 transition-colors">
                                                    <ChevronRight size={16} />
                                                </div>
                                            ) : (
                                                <div className="w-8 h-8 rounded-full border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:border-brand-500 group-hover:text-brand-500 transition-colors -rotate-45 group-hover:rotate-0">
                                                    <ArrowRight size={16} />
                                                </div>
                                            )}
                                        </div>

                                        {/* Text */}
                                        <div>
                                            <h3 className="text-xl font-black text-zinc-900 dark:text-white uppercase tracking-tight leading-none mb-2">
                                                {item.label}
                                            </h3>
                                            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                                                {isAction ? 'Lihat Opsi' : 'Akses Langsung'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );

                            return isAction ? (
                                <div key={idx} onClick={() => pushMenu(item)} className="h-full cursor-pointer">
                                    {content}
                                </div>
                            ) : (
                                <Link key={idx} href={item.path} onClick={handleClose} className="h-full block">
                                    {content}
                                </Link>
                            );
                        })}
                    </div>
                ) : (
                    /* === LEVEL 1: SUB MENU (LIST LAYOUT) === */
                    <div>
                        <div className="mb-8">
                            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mb-2">
                                {currentParent.label}
                            </h2>
                            <p className="text-zinc-500 text-lg">Pilih tujuan operasi lo.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {getSubItems(currentParent).map((subItem, sIdx) => {
                                const Icon = subItem.icon;
                                return (
                                    <Link 
                                        key={sIdx} 
                                        href={subItem.path}
                                        onClick={handleClose}
                                        className="group block"
                                    >
                                        <div className="flex items-center gap-6 p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-brand-500/50 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all duration-200 active:scale-[0.99]">
                                            <div className="w-14 h-14 shrink-0 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
                                                <Icon size={28} strokeWidth={1.5} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-1 group-hover:text-brand-600 transition-colors">
                                                    {subItem.label}
                                                </h4>
                                                <p className="text-xs text-zinc-500 line-clamp-1">
                                                    {subItem.desc}
                                                </p>
                                            </div>
                                            <div className="w-8 h-8 flex items-center justify-center text-zinc-300 group-hover:text-brand-500 transition-colors">
                                                <ArrowRight size={20} />
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}

            </div>
        </div>
      </div>

      {/* --- FOOTER STATUS --- */}
      <div className="h-12 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-center shrink-0 gap-3">
         <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
         <span className="text-[10px] font-mono font-black text-zinc-400 uppercase tracking-[0.2em]">
            System Online &bull; v2.0.5
         </span>
      </div>

    </div>
  );
};
