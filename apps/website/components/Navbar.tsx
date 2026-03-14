
"use client";

import React, { useState, useEffect } from 'react';
import { useNavbar } from './Navigation/useNavbar';
import { getMenuStructure } from './Navigation/data';
import { LogoAtom } from './Navigation/atoms/LogoAtom';
import { DesktopMenuAtom } from './Navigation/atoms/DesktopMenuAtom';
import { ActionButtonsAtom } from './Navigation/atoms/ActionButtonsAtom';
import { RepoSwitcher } from 'ui';

export const Navbar: React.FC = () => {
  const logic = useNavbar();
  const menuStructure = getMenuStructure(logic.text);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/95 dark:bg-black/90 backdrop-blur-xl border-b border-zinc-200/50 dark:border-white/10 shadow-sm">
        {/* 
            PADDING LOGIC UPDATE:
            - Default (Portrait Mobile/Tablet): px-6
            - Landscape Mobile/Tablet: pr-28 (112px) to clear 80px sidebar.
            - Desktop (XL+): Reset to standard px-12. Sidebar is hidden here.
        */}
        <div className="w-full h-20 flex items-center justify-between px-6 landscape:pr-[max(100px,12vw)] xl:px-12 xl:landscape:pr-12 transition-all">
          
          <div className="flex items-center gap-6">
            {/* Particle: Brand Logo */}
            <LogoAtom />

            {/* Repo Switcher: Hidden on small mobile, visible on sm+ */}
            <div className="hidden sm:block">
              <RepoSwitcher />
            </div>
          </div>

          {/* Particle: Desktop Navigation (Hidden on Tablet/Mobile, Visible on XL+) */}
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
                text={logic.text}
             />
          </div>

        </div>
      </nav>
    </>
  );
};
