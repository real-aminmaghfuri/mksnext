
"use client";

import React, { useState, useEffect } from 'react';
import { useNavbar } from './Navigation/useNavbar';
import { getMenuStructure } from './Navigation/data';
import { LogoAtom } from './Navigation/atoms/LogoAtom';
import { DesktopMenuAtom } from './Navigation/atoms/DesktopMenuAtom';
import { ActionButtonsAtom } from './Navigation/atoms/ActionButtonsAtom';
// LandscapeSidebar removed as we replaced it with persistent Rail in MobileNav

export const Navbar: React.FC = () => {
  const logic = useNavbar();
  const menuStructure = getMenuStructure(logic.text);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/95 dark:bg-black/90 backdrop-blur-xl border-b border-zinc-200/50 dark:border-white/10 shadow-sm landscape:pl-20 md:landscape:pl-0 lg:pl-0">
        <div className="w-full px-6 md:px-8 lg:px-12 flex items-center justify-between h-20">
          
          {/* Particle: Brand Logo */}
          <LogoAtom />

          {/* Particle: Desktop Navigation (Hidden on Tablet/Mobile) */}
          <DesktopMenuAtom 
            structure={menuStructure} 
            currentPath={logic.pathname} 
          />

          {/* Particle: User Actions */}
          <div className="flex items-center gap-2 shrink-0">
             <ActionButtonsAtom 
                isDark={logic.isDark}
                language={logic.language}
                toggleTheme={logic.toggleTheme}
                toggleLang={logic.toggleLang}
                // No onOpenMenu needed for landscape anymore
             />
          </div>

        </div>
      </nav>
    </>
  );
};
