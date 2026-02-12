
"use client";

import React, { useState } from 'react';
import { useNavbar } from './Navigation/useNavbar';
import { getMenuStructure } from './Navigation/data';
import { LogoAtom } from './Navigation/atoms/LogoAtom';
import { DesktopMenuAtom } from './Navigation/atoms/DesktopMenuAtom';
import { ActionButtonsAtom } from './Navigation/atoms/ActionButtonsAtom';
import { MobileSubMenuDrawer } from './MobileSubMenuDrawer';
import { MenuItem, SubMenuItem } from './Navigation/types';
import { Grid } from 'lucide-react';

export const Navbar: React.FC = () => {
  // 1. Hook for Logic
  const logic = useNavbar();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // 2. Data Generator
  const menuStructure = getMenuStructure(logic.text);

  // 3. Transform Top-Level Menus into Grid Items for the Drawer
  // This creates a synthetic "Main Menu" object that contains all top-level items as children
  const mainMenuGrid: MenuItem = {
    label: "MAIN MENU",
    path: "#",
    hasDropdown: true,
    items: menuStructure.map((item) => ({
        label: item.label,
        path: item.path,
        icon: item.icon || Grid, // Fallback icon
        desc: "" // No description needed for top level grid
    } as SubMenuItem))
  };

  // 3. Render Composition
  return (
    <>
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/95 dark:bg-black/90 backdrop-blur-xl border-b border-zinc-200/50 dark:border-white/10 shadow-sm">
        <div className="w-full px-6 md:px-8 lg:px-12 flex items-center justify-between h-20">
          
          {/* Particle: Brand Logo */}
          <LogoAtom />

          {/* Particle: Desktop Navigation */}
          <DesktopMenuAtom 
            structure={menuStructure} 
            currentPath={logic.pathname} 
          />

          {/* Particle: User Actions */}
          <ActionButtonsAtom 
            isDark={logic.isDark}
            language={logic.language}
            toggleTheme={logic.toggleTheme}
            toggleLang={logic.toggleLang}
            onOpenMenu={() => setIsMobileMenuOpen(true)}
          />

        </div>
      </nav>

      {/* Mobile Main Menu Drawer (Grid Style) */}
      <MobileSubMenuDrawer 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        menuItem={mainMenuGrid}
      />
    </>
  );
};
