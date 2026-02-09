
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { MenuItem } from '../types';
import { MegaMenuAtom } from './MegaMenuAtom';

interface DesktopMenuAtomProps {
  structure: MenuItem[];
  currentPath: string;
}

export const DesktopMenuAtom: React.FC<DesktopMenuAtomProps> = ({ structure, currentPath }) => {
  // Use state to manage hover to allow programmatic closing
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);

  const handleMouseEnter = (idx: number) => {
    setActiveMenuIndex(idx);
  };

  const handleMouseLeave = () => {
    setActiveMenuIndex(null);
  };

  const closeMenu = () => {
    setActiveMenuIndex(null);
  };

  return (
    <div className="hidden lg:flex items-center gap-1 xl:gap-2">
      {structure.map((menu, idx) => {
        const isActive = currentPath === menu.path;
        const isHovered = activeMenuIndex === idx;
        
        return (
          <div 
            key={idx} 
            className="relative px-3 py-6 group"
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
          >
            <Link 
              href={menu.path} 
              onClick={closeMenu}
              className={`flex items-center gap-1.5 text-[13px] font-bold tracking-wider uppercase transition-colors 
                ${isActive
                  ? 'text-brand-600 dark:text-brand-500' 
                  : isHovered 
                    ? 'text-brand-600 dark:text-brand-500' 
                    : 'text-zinc-600 dark:text-zinc-300'
                }`}
            >
              {menu.label}
              {menu.hasDropdown && (
                <ChevronDown 
                  size={14} 
                  className={`transition-transform duration-300 ${isHovered ? '-rotate-180' : ''}`} 
                />
              )}
            </Link>

            {/* Render Mega Menu Atom if items or columns exist & is hovered */}
            {menu.hasDropdown && (menu.items || menu.columns) && (
              <MegaMenuAtom 
                items={menu.items}
                columns={menu.columns}
                parentLabel={menu.label} 
                isVisible={isHovered}
                onLinkClick={closeMenu}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
