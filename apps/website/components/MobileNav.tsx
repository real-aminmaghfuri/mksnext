
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useConfig } from 'ui';
import { DICTIONARY, Language } from 'shared';
import { getMenuStructure } from './Navigation/data';
import { MenuItem } from './Navigation/types';
import { MobileSubMenuDrawer } from './MobileSubMenuDrawer';
import { 
  Home, User, Layers, Monitor, HelpCircle, Lightbulb, 
  Settings, LogIn, Moon, Sun, Languages
} from 'lucide-react';

export const WebsiteMobileNav: React.FC = () => {
  const pathname = usePathname();
  const { language, setLanguage, theme, toggleTheme } = useConfig();
  const text = DICTIONARY[language];
  const menuStructure = getMenuStructure(text);

  // State for Submenu Drawer
  const [activeMenu, setActiveMenu] = useState<MenuItem | null>(null);

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return Home;       
      case 1: return User;       
      case 2: return Layers;     
      case 3: return Monitor;    
      case 4: return HelpCircle; 
      case 5: return Lightbulb;  
      default: return Home;
    }
  };

  const handleMenuClick = (item: MenuItem) => {
    if (item.hasDropdown) {
      setActiveMenu(activeMenu?.label === item.label ? null : item);
    } 
  };

  const isDark = theme === 'dark';

  return (
    <>
      {/* 
         RESPONSIVE CONTAINER:
         - Portrait: Fixed Bottom, Full Width, Height 72px
         - Landscape: Fixed Left, Full Height, Width 80px (Compact Rail)
      */}
      <nav className="
        fixed z-[60] bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-zinc-200 dark:border-zinc-800 transition-all duration-300 shadow-2xl
        
        /* PORTRAIT STYLES */
        bottom-0 left-0 w-full h-[72px] border-t
        md:hidden
        
        /* LANDSCAPE STYLES (Rail Mode) */
        landscape:top-0 landscape:left-0 landscape:w-[80px] landscape:h-full landscape:border-r landscape:border-t-0 landscape:flex landscape:flex-col landscape:justify-between landscape:py-6
      ">
        
        {/* MENU ITEMS AREA */}
        <div className="
            grid grid-cols-6 h-full items-center
            landscape:flex landscape:flex-col landscape:h-auto landscape:w-full landscape:gap-4
        ">
          {menuStructure.map((item, idx) => {
            const Icon = getIcon(idx);
            const isActive = pathname === item.path || (activeMenu?.label === item.label);
            
            const content = (
                <div className={`
                    flex flex-col items-center justify-center transition-all duration-200 group
                    ${isActive ? 'text-brand-600 dark:text-brand-500' : 'text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300'}
                `}>
                    <div className={`
                        p-1.5 rounded-xl transition-all duration-300
                        ${isActive ? 'bg-brand-50 dark:bg-brand-900/20 translate-y-0' : 'translate-y-1 landscape:translate-y-0'}
                    `}>
                        <Icon size={20} strokeWidth={isActive ? 2.5 : 2} className={isActive ? 'animate-pulse' : ''} />
                    </div>
                    <span className="text-[9px] font-bold text-center leading-none px-0.5 truncate w-full mt-1 landscape:hidden">
                        {item.label}
                    </span>
                </div>
            );

            if (item.hasDropdown) {
                return (
                    <button 
                        key={idx}
                        onClick={() => handleMenuClick(item)}
                        className="h-full w-full landscape:h-auto landscape:w-full focus:outline-none active:scale-90 transition-transform"
                    >
                        {content}
                    </button>
                )
            } else {
                return (
                    <Link 
                        key={idx} 
                        href={item.path}
                        className="h-full w-full landscape:h-auto landscape:w-full flex items-center justify-center focus:outline-none active:scale-90 transition-transform"
                    >
                        {content}
                    </Link>
                )
            }
          })}
        </div>

        {/* 
            FOOTER ACTIONS (Only visible in LANDSCAPE RAIL) 
            Merged directly into the sidebar for compactness
        */}
        <div className="hidden landscape:flex flex-col gap-4 items-center w-full pt-4 border-t border-zinc-200 dark:border-zinc-800">
            {/* Theme Toggle */}
            <button onClick={toggleTheme} className="text-zinc-400 hover:text-brand-500 transition-colors active:scale-90">
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Language Toggle */}
            <button 
                onClick={() => setLanguage(language === Language.ID ? Language.EN : Language.ID)} 
                className="text-zinc-400 hover:text-brand-500 transition-colors active:scale-90 font-black text-[10px]"
            >
                {language}
            </button>

            {/* Login System */}
            <a href="https://system.mesinkasirsolo.com" target="_blank" rel="noopener noreferrer">
                <button className="w-10 h-10 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-black flex items-center justify-center shadow-lg active:scale-90 transition-transform">
                    <LogIn size={18} />
                </button>
            </a>
        </div>

      </nav>

      {/* Drawer Component */}
      <MobileSubMenuDrawer 
        isOpen={!!activeMenu} 
        onClose={() => setActiveMenu(null)} 
        menuItem={activeMenu}
      />
    </>
  );
};
