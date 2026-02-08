"use client";
import React from 'react';
import { SubMenuItem } from '../types';
import { useMegaMenu } from '../hooks/useMegaMenu';
import { MegaMenuLinks } from './MegaMenuLinks';
import { MegaMenuBanner } from './MegaMenuBanner';

interface MegaMenuAtomProps {
  items: SubMenuItem[];
  parentLabel: string;
  isVisible: boolean;
  onLinkClick: () => void;
}

export const MegaMenuAtom: React.FC<MegaMenuAtomProps> = ({ items, parentLabel, isVisible, onLinkClick }) => {
  // 1. Get Visual Data from Hook (The Brain)
  const { visualData } = useMegaMenu(parentLabel);

  return (
    <div 
      className={`absolute top-full left-1/2 -translate-x-1/2 w-[900px] pt-2 z-50 transition-all duration-200 ease-out origin-top ${isVisible ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}
    >
      {/* Compact Container - Solid Background (No Transparency) */}
      <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden relative">
        
        {/* Accent Line */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-600 via-red-500 to-brand-600" />

        <div className="grid grid-cols-12 h-full">
          
          {/* LEFT SIDE: Menu Links Component */}
          <MegaMenuLinks 
            parentLabel={parentLabel} 
            items={items} 
            onLinkClick={onLinkClick} 
          />

          {/* RIGHT SIDE: Visual Banner Component */}
          <MegaMenuBanner 
            img={visualData.img} 
            title={visualData.title} 
          />

        </div>
      </div>
    </div>
  );
};