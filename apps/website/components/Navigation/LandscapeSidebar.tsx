
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronRight, ChevronLeft, ArrowRight, LayoutGrid, CornerUpLeft } from 'lucide-react';
import { MenuItem, SubMenuItem } from './types';

interface LandscapeSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  menuStructure: MenuItem[];
}

export const LandscapeSidebar: React.FC<LandscapeSidebarProps> = ({ isOpen, onClose, menuStructure }) => {
  const [navStack, setNavStack] = useState<MenuItem[]>([]);
  const [isClosing, setIsClosing] = useState(false);

  // Reset state when menu opens
  useEffect(() => {
    if (isOpen) {
      setNavStack([]);
      setIsClosing(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
        onClose();
        setIsClosing(false); 
    }, 300);
  };

  const pushMenu = (item: MenuItem) => {
    setNavStack([...navStack, item]);
  };

  const popMenu = () => {
    const newStack = [...navStack];
    newStack.pop();
    setNavStack(newStack);
  };

  const getSubItems = (item: MenuItem): SubMenuItem[] => {
    if (item.items) return item.items;
    if (item.columns) {
      return item.columns.flatMap(col => col.items);
    }
    return [];
  };

  const currentParent = navStack.length > 0 ? navStack[navStack.length - 1] : null;

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex justify-end transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}>
      
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* 
         MAIN PANEL CONTAINER
         - Portrait: Width 85%, Flex Column, Slide from Right
         - Landscape: Width 100%, Flex Row, Split View
      */}
      <div className={`
          relative h-full bg-zinc-50 dark:bg-black shadow-2xl transition-transform duration-300
          
          /* PORTRAIT STYLES (Default) */
          w-[85vw] max-w-sm flex flex-col border-l border-zinc-200 dark:border-zinc-800
          ${isClosing ? 'translate-x-full' : 'translate-x-0'}
          animate-in slide-in-from-right duration-300

          /* LANDSCAPE STYLES (Override) */
          landscape:w-full landscape:max-w-none landscape:flex-row landscape:border-l-0
      `}>
      
        {/* === HEADER / CONTROL PANEL === */}
        <div className={`
            bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 flex-shrink-0
            
            /* Portrait */
            w-full p-6 border-b flex flex-col gap-6

            /* Landscape */
            landscape:w-[35%] landscape:h-full landscape:border-b-0 landscape:border-r landscape:p-8 landscape:justify-between
        `}>
            
            {/* Top: Branding / Back Navigation */}
            <div className="space-y-6">
                {currentParent ? (
                    <button 
                        onClick={popMenu}
                        className="group flex items-center gap-4 text-left"
                    >
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-brand-600 group-hover:border-brand-500 transition-all shadow-sm">
                            <CornerUpLeft size={20} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-0.5">KEMBALI KE</p>
                            <h2 className="text-xl md:text-2xl font-black text-zinc-900 dark:text-white leading-none">MAIN MENU</h2>
                        </div>
                    </button>
                ) : (
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-500/30">
                            <LayoutGrid size={20} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-0.5">SYSTEM NAV</p>
                            <h2 className="text-xl md:text-2xl font-black text-zinc-900 dark:text-white leading-none">KOMANDO</h2>
                        </div>
                    </div>
                )}
            </div>

            {/* Middle: Info (Visible mainly in Landscape or if space permits) */}
            <div className="hidden landscape:flex flex-1 items-center">
                {currentParent && (
                    <div className="animate-in slide-in-from-left-4 fade-in duration-300">
                        <div className="w-12 h-1 bg-brand-500 mb-6" />
                        <h1 className="text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter leading-[0.9] mb-4">
                            {currentParent.label}
                        </h1>
                        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 leading-relaxed">
                            Akses modul dan fitur yang tersedia di sektor ini.
                        </p>
                    </div>
                )}
            </div>

            {/* Bottom: Status Footer */}
            <div className="hidden landscape:block">
                <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800 mb-6" />
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono font-black text-zinc-400 uppercase tracking-[0.2em]">
                        System v2.0.5 &bull; Online
                    </span>
                </div>
            </div>
        </div>

        {/* === CONTENT AREA === */}
        <div className="flex-1 overflow-y-auto bg-white dark:bg-black relative custom-scrollbar">
            
            {/* Floating Close Button */}
            <button 
                onClick={handleClose}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-500 hover:text-white hover:bg-red-600 transition-all flex items-center justify-center shadow-lg"
            >
                <X size={20} />
            </button>

            <div className="p-6 md:p-8 min-h-full flex flex-col landscape:justify-center">
                
                {/* CONTENT RENDERER */}
                {!currentParent ? (
                    // ROOT GRID
                    <div className="grid grid-cols-1 landscape:grid-cols-2 gap-3 md:gap-4 animate-in slide-in-from-right-8 fade-in duration-300 pt-8 landscape:pt-0">
                        {menuStructure.map((item, idx) => {
                            const Icon = item.icon;
                            const isAction = item.hasDropdown;
                            
                            const Card = (
                                <div className="group h-full p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-brand-500/50 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300 cursor-pointer flex items-center landscape:flex-col landscape:items-start gap-4">
                                    <div className={`p-3 rounded-xl bg-white dark:bg-black border border-zinc-100 dark:border-zinc-800 text-zinc-500 group-hover:text-brand-600 transition-colors shrink-0 ${!isAction ? 'group-hover:bg-brand-600 group-hover:text-white group-hover:border-brand-600' : ''}`}>
                                        {Icon && <Icon size={20} strokeWidth={2} />}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-base md:text-lg font-black text-zinc-900 dark:text-white uppercase tracking-tight group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
                                            {item.label}
                                        </h3>
                                        {!isAction && <p className="text-[9px] font-bold text-zinc-400 mt-0.5">DIRECT LINK</p>}
                                    </div>
                                    {isAction && <ChevronRight size={16} className="text-zinc-300 group-hover:text-brand-500 transition-colors landscape:absolute landscape:top-5 landscape:right-5" />}
                                </div>
                            );

                            return isAction ? (
                                <div key={idx} onClick={() => pushMenu(item)}>{Card}</div>
                            ) : (
                                <Link key={idx} href={item.path} onClick={handleClose}>{Card}</Link>
                            );
                        })}
                    </div>
                ) : (
                    // SUBMENU LIST
                    <div className="grid grid-cols-1 gap-3 animate-in slide-in-from-right-8 fade-in duration-300 pt-8 landscape:pt-0">
                        {/* Portrait Submenu Header (Since left panel is small in portrait) */}
                        <div className="landscape:hidden mb-4">
                             <h2 className="text-3xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter leading-none mb-2">
                                {currentParent.label}
                            </h2>
                            <p className="text-xs text-zinc-500">Pilih akses modul dibawah ini.</p>
                        </div>

                        {getSubItems(currentParent).map((subItem, sIdx) => {
                            const Icon = subItem.icon;
                            return (
                                <Link 
                                    key={sIdx} 
                                    href={subItem.path}
                                    onClick={handleClose}
                                    className="group flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:border-brand-500/30 transition-all active:scale-[0.98]"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-brand-600 transition-colors shrink-0">
                                        <Icon size={18} strokeWidth={2} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm md:text-base font-bold text-zinc-900 dark:text-white group-hover:text-brand-600 transition-colors">
                                            {subItem.label}
                                        </h4>
                                        <p className="text-[10px] md:text-xs text-zinc-500 line-clamp-1 mt-0.5">
                                            {subItem.desc}
                                        </p>
                                    </div>
                                    <div className="w-6 h-6 rounded-full bg-white dark:bg-black flex items-center justify-center text-zinc-300 group-hover:text-brand-500 transition-colors">
                                        <ArrowRight size={12} />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>

      </div>
    </div>
  );
};
