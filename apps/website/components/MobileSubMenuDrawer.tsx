
"use client";

import React from 'react';
import { MenuItem } from './Navigation/types';
import { DrawerBackdropAtom } from './Navigation/atoms/DrawerBackdropAtom';
import { PortraitDrawerOrganism } from './Navigation/organisms/PortraitDrawerOrganism';
import { LandscapeDrawerOrganism } from './Navigation/organisms/LandscapeDrawerOrganism';

interface MobileSubMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  menuItem: MenuItem | null;
}

/**
 * MobileSubMenuDrawer - Orchestrates the sub-menu drawer for mobile devices.
 * Switch between Portrait (Bottom Sheet) and Landscape (Side Panel) using CSS.
 */
export const MobileSubMenuDrawer: React.FC<MobileSubMenuDrawerProps> = ({ 
  isOpen, 
  onClose, 
  menuItem 
}) => {
  if (!menuItem) return null;

  return (
    <>
      <DrawerBackdropAtom isOpen={isOpen} onClose={onClose} />
      
      <PortraitDrawerOrganism 
        isOpen={isOpen} 
        onClose={onClose} 
        menuItem={menuItem} 
      />

      <LandscapeDrawerOrganism 
        isOpen={isOpen} 
        onClose={onClose} 
        menuItem={menuItem} 
      />
    </>
  );
};

