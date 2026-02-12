
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
    <div className={`fixed inset-0 z-[100] flex bg-zinc-50 dark:bg-black transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}>
      
      {/* === LEFT PANEL (THE HEADER/CONTROL) - 35% Width === */}
      <div className="w-[35%] h-full bg-zinc-100 dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 flex flex-col justify-between p-8 relative z-20">
        
        {/* Top: Branding / Back Navigation */}
        <div className="space-y-6">
            {currentParent ? (
                <button 
                    onClick={popMenu}
                    className="group flex flex-col items-start gap-4"
                >
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-brand-600 group-hover:border-brand-500 transition-all shadow-sm">
                        <CornerUpLeft size={24} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">KEMBALI KE</p>
                        <h2 className="text-2xl font-black text-zinc-900 dark:text-white leading-none">MAIN MENU</h2>
                    </div>
                </button>
            ) : (
                <div className="flex flex-col items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-500/30">
                        <LayoutGrid size={24} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">SYSTEM NAV</p>
                        <h2 className="text-2xl font-black text-zinc-900 dark:text-white leading-none">PUSAT KOMANDO</h2>
                    </div>
                </div>
            )}
        </div>

        {/* Middle: Active Context Info */}
        <div className="flex-1 flex items-center">
            {currentParent && (
                <div className="animate-in slide-in-from-left-4 fade-in duration-300">
                    <div className="w-12 h-1 bg-brand-500 mb-6" />
                    <h1 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter leading-[0.9] mb-4">
                        {currentParent.label}
                    </h1>
                    <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        Akses modul dan fitur yang tersedia di sektor ini.
                    </p>
                </div>
            )}
        </div>

        {/* Bottom: Status Footer */}
        <div>
            <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800 mb-6" />
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono font-black text-zinc-400 uppercase tracking-[0.2em]">
                    System v2.0.5 &bull; Online
                </span>
            </div>
        </div>
      </div>

      {/* === RIGHT PANEL (CONTENT GRID) - 65% Width === */}
      <div className="flex-1 h-full bg-white dark:bg-black relative overflow-y-auto custom-scrollbar">
        
        {/* Floating Close Button */}
        <button 
            onClick={handleClose}
            className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-500 hover:text-white hover:bg-red-600 transition-all flex items-center justify-center shadow-lg"
        >
            <X size={24} />
        </button>

        <div className="p-8 min-h-full flex flex-col justify-center">
            
            {/* CONTENT RENDERER */}
            {!currentParent ? (
                // ROOT GRID
                <div className="grid grid-cols-2 gap-4 animate-in slide-in-from-right-8 fade-in duration-300">
                    {menuStructure.map((item, idx) => {
                        const Icon = item.icon;
                        const isAction = item.hasDropdown;
                        
                        const Card = (
                            <div className="group h-full p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-brand-500/50 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300 cursor-pointer flex flex-col gap-4">
                                <div className="flex justify-between items-start">
                                    <div className={`p-3 rounded-xl bg-white dark:bg-black border border-zinc-100 dark:border-zinc-800 text-zinc-500 group-hover:text-brand-600 transition-colors ${!isAction ? 'group-hover:bg-brand-600 group-hover:text-white group-hover:border-brand-600' : ''}`}>
                                        {Icon && <Icon size={24} strokeWidth={2} />}
                                    </div>
                                    {isAction && <ChevronRight size={20} className="text-zinc-300 group-hover:text-brand-500 transition-colors" />}
                                </div>
                                <div>
                                    <h3 className="text-lg font-black text-zinc-900 dark:text-white uppercase tracking-tight group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
                                        {item.label}
                                    </h3>
                                    {!isAction && <p className="text-[10px] font-bold text-zinc-400 mt-1">DIRECT LINK</p>}
                                </div>
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
                <div className="grid grid-cols-1 gap-3 animate-in slide-in-from-right-8 fade-in duration-300">
                    {getSubItems(currentParent).map((subItem, sIdx) => {
                        const Icon = subItem.icon;
                        return (
                            <Link 
                                key={sIdx} 
                                href={subItem.path}
                                onClick={handleClose}
                                className="group flex items-center gap-6 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:border-brand-500/30 transition-all active:scale-[0.98]"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-brand-600 transition-colors">
                                    <Icon size={20} strokeWidth={2} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-brand-600 transition-colors">
                                        {subItem.label}
                                    </h4>
                                    <p className="text-xs text-zinc-500 line-clamp-1 mt-0.5">
                                        {subItem.desc}
                                    </p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white dark:bg-black flex items-center justify-center text-zinc-300 group-hover:text-brand-500 transition-colors">
                                    <ArrowRight size={14} />
                                </div>
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
