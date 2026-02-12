
"use client";

import React, { useState, useEffect } from 'react';
import { useNavbar } from './Navigation/useNavbar';
import { getMenuStructure } from './Navigation/data';
import { LogoAtom } from './Navigation/atoms/LogoAtom';
import { DesktopMenuAtom } from './Navigation/atoms/DesktopMenuAtom';
import { ActionButtonsAtom } from './Navigation/atoms/ActionButtonsAtom';
import { LandscapeSidebar } from './Navigation/LandscapeSidebar';

export const Navbar: React.FC = () => {
  // 1. Hook for Logic
  const logic = useNavbar();
  
  // State for Landscape Sidebar (triggered by Hamburger)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // FIX: Close sidebar automatically when path changes (Navigation occurred)
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [logic.pathname]);

  // 2. Data Generator
  const menuStructure = getMenuStructure(logic.text);

  // 3. Render Composition
  return (
    <>
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/95 dark:bg-black/90 backdrop-blur-xl border-b border-zinc-200/50 dark:border-white/10 shadow-sm">
        <div className="w-full px-6 md:px-8 lg:px-12 flex items-center justify-between h-20">
          
          {/* Particle: Brand Logo */}
          <LogoAtom />

          {/* Particle: Desktop Navigation (Hidden on Tablet/Mobile) */}
          <DesktopMenuAtom 
            structure={menuStructure} 
            currentPath={logic.pathname} 
          />

          {/* Particle: User Actions (Includes Hamburger Trigger) */}
          <ActionButtonsAtom 
            isDark={logic.isDark}
            language={logic.language}
            toggleTheme={logic.toggleTheme}
            toggleLang={logic.toggleLang}
            onOpenMenu={() => setIsSidebarOpen(true)}
          />

        </div>
      </nav>

      {/* 
         NEW: Landscape Sidebar Component 
         Handles navigation for Tablets & Mobile Landscape 
      */}
      <LandscapeSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        menuStructure={menuStructure}
      />
    </>
  );
};
