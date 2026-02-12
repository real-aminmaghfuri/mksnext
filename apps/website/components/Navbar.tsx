
"use client";

import React, { useState, useEffect } from 'react';
import { useNavbar } from './Navigation/useNavbar';
import { getMenuStructure } from './Navigation/data';
import { LogoAtom } from './Navigation/atoms/LogoAtom';
import { DesktopMenuAtom } from './Navigation/atoms/DesktopMenuAtom';
import { ActionButtonsAtom } from './Navigation/atoms/ActionButtonsAtom';

export const Navbar: React.FC = () => {
  const logic = useNavbar();
  const menuStructure = getMenuStructure(logic.text);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/95 dark:bg-black/90 backdrop-blur-xl border-b border-zinc-200/50 dark:border-white/10 shadow-sm">
        {/* 
            PADDING LOGIC UPDATE:
            - Default: px-6
            - Mobile Landscape: pr-24 (80px sidebar + 16px buffer) to prevent overlap
            - Desktop (lg): px-12 (Sidebar is hidden, so standard padding)
        */}
        <div className="w-full h-20 flex items-center justify-between px-6 landscape:pr-24 lg:landscape:pr-12 lg:px-12 transition-all">
          
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
             />
          </div>

        </div>
      </nav>
    </>
  );
};
