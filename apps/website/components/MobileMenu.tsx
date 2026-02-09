
"use client";

import React, { useState } from 'react';
import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { getMenuStructure } from './Navigation/data';
import { MobileMenuFooter } from './MobileMenuFooter';
import { MobileMenuHeader } from './MobileMenuHeader';
import { MobileMenuItem } from './MobileMenuItem';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { language } = useConfig();
  const text = DICTIONARY[language];
  const menuStructure = getMenuStructure(text);
  
  // State for Accordion Logic (One Open at a Time)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center md:hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Main Container */}
      <div className="relative w-full bg-white dark:bg-zinc-950 rounded-t-3xl p-6 shadow-2xl animate-fade-in-up border-t border-zinc-200 dark:border-zinc-800 max-h-[85vh] flex flex-col">
        
        {/* Particle 1: Header (Title & Close) */}
        <MobileMenuHeader title={text.navMenu} onClose={onClose} />

        {/* Particle 2: Navigation Items (Scrollable Area) */}
        <div className="flex-1 overflow-y-auto mb-6 pr-2 custom-scrollbar">
          <div className="space-y-1">
            {menuStructure.map((menu, idx) => (
              <MobileMenuItem 
                key={idx}
                item={menu}
                isExpanded={expandedIndex === idx}
                onToggle={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                onClose={onClose}
              />
            ))}
          </div>
        </div>

        {/* Particle 3: Footer Utilities (Login, Theme, Lang) */}
        <MobileMenuFooter />
        
      </div>
    </div>
  );
};
