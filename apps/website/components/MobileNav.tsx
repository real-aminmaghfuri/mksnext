
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

  // Helper to get Icon based on index/label match (Since Navigation/data.ts returns structure without top-level icons)
  // We map the 6 items manually to ensure correct icons
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return Home;       // Home
      case 1: return User;       // About
      case 2: return Layers;     // Services
      case 3: return Monitor;    // Hardware/Shop
      case 4: return HelpCircle; // Support
      case 5: return Lightbulb;  // Insights
      default: return Home;
    }
  };

  const handleMenuClick = (item: MenuItem) => {
    if (item.hasDropdown) {
      setActiveMenu(item);
    } 
    // If no dropdown, the Link component handles navigation
  };

  return (
    <>
      <nav className="fixed bottom-0 left-0 w-full bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 z-50 md:hidden safe-area-bottom shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
        <div className="grid grid-cols-6 h-[72px]">
          {menuStructure.map((item, idx) => {
            const Icon = getIcon(idx);
            
            // Check if active (for direct links) or if drawer is open (for parents)
            const isActive = pathname === item.path || (activeMenu?.label === item.label);
            
            // Render
            const content = (
                <div className={`flex flex-col items-center justify-center h-full w-full space-y-1 transition-all duration-200 ${isActive ? 'text-brand-600 dark:text-brand-500' : 'text-zinc-400 dark:text-zinc-500'}`}>
                    <Icon size={20} strokeWidth={isActive ? 2.5 : 2} className={isActive ? 'animate-pulse' : ''} />
                    <span className="text-[9px] font-bold text-center leading-none px-0.5 truncate w-full">
                        {item.label}
                    </span>
                </div>
            );

            // Logic: If hasDropdown, use button to open drawer. Else use Link.
            if (item.hasDropdown) {
                return (
                    <button 
                        key={idx}
                        onClick={() => handleMenuClick(item)}
                        className="active:scale-90 transition-transform focus:outline-none"
                    >
                        {content}
                    </button>
                )
            } else {
                return (
                    <Link 
                        key={idx} 
                        href={item.path}
                        className="active:scale-90 transition-transform focus:outline-none"
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
