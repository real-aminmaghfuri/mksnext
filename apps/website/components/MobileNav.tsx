
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { getMenuStructure } from './Navigation/data';
import { MenuItem } from './Navigation/types';
import { MobileSubMenuDrawer } from './MobileSubMenuDrawer';
import { 
  Home, User, Layers, Monitor, HelpCircle, Lightbulb
} from 'lucide-react';

export const WebsiteMobileNav: React.FC = () => {
  const pathname = usePathname();
  const { language } = useConfig();
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

  return (
    <>
      {/* 
         RESPONSIVE CONTAINER:
         - Portrait: Fixed Bottom, Full Width, Height 72px
         - Landscape: Fixed RIGHT, Full Height, Width 80px. NO SCROLL.
         - Desktop (xl+): Hidden (Strictly for 1280px and up)
         - Z-Index: 70 (Highest priority UI)
      */}
      <nav className="
        fixed z-[70] bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-zinc-200 dark:border-zinc-800 transition-all duration-300 shadow-2xl
        
        /* PORTRAIT STYLES */
        bottom-0 left-0 w-full h-[72px] border-t
        
        /* BREAKPOINT: Hide on XL (Desktop), Show on LG (Tablet Landscape) */
        xl:hidden
        
        /* LANDSCAPE STYLES (Right Sidebar for Mobile/Tablet) */
        landscape:top-0 landscape:right-0 landscape:left-auto landscape:bottom-auto 
        landscape:w-[80px] landscape:h-full landscape:border-l landscape:border-t-0 
        landscape:flex landscape:flex-col landscape:justify-center
        
        /* Constraint: No Scroll on Nav Bar */
        landscape:overflow-hidden
      ">
        
        {/* MENU ITEMS AREA */}
        <div className="
            grid grid-cols-6 h-full items-center
            /* Landscape: Vertical Stack, Distributed Evenly */
            landscape:flex landscape:flex-col landscape:h-full landscape:w-full landscape:justify-evenly landscape:py-4
        ">
          {menuStructure.map((item, idx) => {
            const Icon = getIcon(idx);
            const isActive = pathname === item.path || (activeMenu?.label === item.label);
            
            const content = (
                <div className={`
                    flex flex-col items-center justify-center transition-all duration-200 group w-full
                    ${isActive ? 'text-brand-600 dark:text-brand-500' : 'text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300'}
                `}>
                    <div className={`
                        p-1.5 rounded-xl transition-all duration-300
                        ${isActive ? 'bg-brand-50 dark:bg-brand-900/20 translate-y-0' : 'translate-y-1 landscape:translate-y-0'}
                    `}>
                        <Icon size={20} strokeWidth={isActive ? 2.5 : 2} className={isActive ? 'animate-pulse' : ''} />
                    </div>
                    
                    <span className="text-[9px] font-bold text-center leading-none px-0.5 truncate w-full mt-1">
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
