
"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { MenuItem } from '../types';
import { MegaMenuAtom } from './MegaMenuAtom';

interface DesktopMenuAtomProps {
  structure: MenuItem[];
  currentPath: string;
}

export const DesktopMenuAtom: React.FC<DesktopMenuAtomProps> = ({ structure, currentPath }) => {
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);
  // Ref to store the timeout ID so we can cancel it if the user comes back quickly
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 1. Mouse Enter: Open immediately & Clear any pending close timer
  const handleMouseEnter = (idx: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenuIndex(idx);
  };

  // 2. Mouse Leave: Wait 300ms before closing. 
  // This gives the user time to move cursor from Link to MegaMenu panel.
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenuIndex(null);
    }, 300); 
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Update: Visible from XL (1280px) upwards. Matches MobileNav hiding logic.
  return (
    <div className="hidden xl:flex items-center gap-1 xl:gap-2">
      {structure.map((menu, idx) => {
        const isActive = currentPath === menu.path;
        const isOpen = activeMenuIndex === idx;
        
        return (
          <div 
            key={idx} 
            className="relative px-3 py-6"
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
          >
            <Link 
              href={menu.path} 
              className={`flex items-center gap-1.5 text-[11px] font-black tracking-[0.15em] uppercase transition-all duration-300 select-none py-2 px-4 rounded-xl
                ${isActive
                  ? 'text-brand-600 dark:text-brand-500 bg-brand-500/5' 
                  : isOpen 
                    ? 'text-brand-600 dark:text-brand-500 bg-zinc-100 dark:bg-zinc-800/50' 
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/50'
                }`}
            >
              {menu.label}
              {menu.hasDropdown && (
                <ChevronDown 
                  size={14} 
                  className={`transition-transform duration-300 ${isOpen ? '-rotate-180' : ''}`} 
                />
              )}
            </Link>

            {/* Mega Menu Atom */}
            {menu.hasDropdown && (menu.items || menu.columns) && (
              <MegaMenuAtom 
                items={menu.items}
                columns={menu.columns}
                parentLabel={menu.label} 
                isVisible={isOpen}
                onLinkClick={() => setActiveMenuIndex(null)}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
