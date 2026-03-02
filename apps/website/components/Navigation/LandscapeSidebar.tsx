
"use client";

import React from 'react';
import { MenuItem } from './types';
import { useSidebarNav } from './hooks/useSidebarNav';
import { NavHeaderMolecule } from './molecules/NavHeaderMolecule';
import { NavRootGridOrganism } from './organisms/NavRootGridOrganism';
import { NavSubListOrganism } from './organisms/NavSubListOrganism';
import { NavFooterOrganism } from './organisms/NavFooterOrganism';

interface LandscapeSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  menuStructure: MenuItem[];
}

/**
 * LandscapeSidebar - The main navigation overlay for desktop/tablet.
 * Orchestrates navigation stack and visual organisms.
 */
export const LandscapeSidebar: React.FC<LandscapeSidebarProps> = ({ 
  isOpen, 
  onClose, 
  menuStructure 
}) => {
  const {
    direction,
    isClosing,
    currentParent,
    handleClose,
    pushMenu,
    popMenu,
    getSubItems
  } = useSidebarNav({ isOpen, onClose });

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-[100] bg-zinc-50 dark:bg-black transition-opacity duration-300 flex flex-col ${isClosing ? 'opacity-0' : 'opacity-100'}`}>
      
      <NavHeaderMolecule 
        isSubMenu={!!currentParent} 
        onBack={popMenu} 
        onClose={handleClose} 
      />

      {/* --- CONTENT AREA (Scrollable) --- */}
      <div className="flex-1 overflow-hidden relative bg-zinc-50 dark:bg-black">
        <div 
          key={currentParent ? currentParent.label : 'root'}
          className={`absolute inset-0 overflow-y-auto custom-scrollbar p-6 md:p-12 animate-in duration-300 ease-out fill-mode-forwards
            ${direction === 'forward' ? 'slide-in-from-right-10 fade-in-0' : 'slide-in-from-left-10 fade-in-0'}
          `}
        >
          <div className="max-w-7xl mx-auto">
            {!currentParent ? (
              <NavRootGridOrganism 
                menuStructure={menuStructure} 
                onPushMenu={pushMenu} 
                onClose={handleClose} 
              />
            ) : (
              <NavSubListOrganism 
                parent={currentParent} 
                subItems={getSubItems(currentParent)} 
                onClose={handleClose} 
              />
            )}
          </div>
        </div>
      </div>

      <NavFooterOrganism />
    </div>
  );
};

