
"use client";

import React from 'react';
import { useMobileNav } from './Navigation/hooks/useMobileNav';
import { MobileNavOrganism } from './Navigation/organisms/MobileNavOrganism';
import { MobileSubMenuDrawer } from './MobileSubMenuDrawer';

/**
 * WebsiteMobileNav - The main entry point for mobile navigation.
 * Orchestrates the navigation bar and sub-menu drawer.
 */
export const WebsiteMobileNav: React.FC = () => {
  const { 
    menuStructure, 
    activeMenu, 
    setActiveMenu, 
    getIcon, 
    handleMenuClick, 
    isItemActive 
  } = useMobileNav();

  return (
    <>
      <MobileNavOrganism 
        menuStructure={menuStructure}
        getIcon={getIcon}
        isItemActive={isItemActive}
        onItemClick={handleMenuClick}
      />

      <MobileSubMenuDrawer 
        isOpen={!!activeMenu} 
        onClose={() => setActiveMenu(null)} 
        menuItem={activeMenu}
      />
    </>
  );
};

