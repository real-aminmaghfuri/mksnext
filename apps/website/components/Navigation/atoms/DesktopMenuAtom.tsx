
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
  const navRef = useRef<HTMLDivElement>(null);

  // Toggle Logic (Manual Trigger - Click Only)
  const handleMenuClick = (idx: number, e: React.MouseEvent) => {
    // Check if the item has a dropdown (Mega Menu)
    if (structure[idx].hasDropdown) {
      e.preventDefault(); // Stop navigation
      // Toggle: If open, close. If closed, open.
      setActiveMenuIndex(activeMenuIndex === idx ? null : idx);
    } else {
      // Standard link, just close menu
      setActiveMenuIndex(null);
    }
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenuIndex(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="hidden lg:flex items-center gap-1 xl:gap-2" ref={navRef}>
      {structure.map((menu, idx) => {
        const isActive = currentPath === menu.path;
        const isOpen = activeMenuIndex === idx;
        
        return (
          <div key={idx} className="relative px-3 py-6">
            <Link 
              href={menu.path} 
              onClick={(e) => handleMenuClick(idx, e)}
              className={`flex items-center gap-1.5 text-[13px] font-bold tracking-wider uppercase transition-colors select-none
                ${isActive
                  ? 'text-brand-600 dark:text-brand-500' 
                  : isOpen 
                    ? 'text-brand-600 dark:text-brand-500' 
                    : 'text-zinc-600 dark:text-zinc-300 hover:text-brand-600 dark:hover:text-brand-500'
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

            {/* Mega Menu Atom: Only visible if isOpen is true (Manual Trigger) */}
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
