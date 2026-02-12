
"use client";
import React from 'react';
import Link from 'next/link';
import { Moon, Sun, MessageCircle, Menu } from 'lucide-react';
import { Button } from 'ui';
import { NavbarLogic } from '../types';

interface ActionProps extends Pick<NavbarLogic, 'isDark' | 'toggleTheme' | 'toggleLang' | 'language'> {
  onOpenMenu?: () => void;
}

export const ActionButtonsAtom: React.FC<ActionProps> = ({ isDark, toggleTheme, toggleLang, language, onOpenMenu }) => {
  return (
    <div className="flex items-center gap-2 shrink-0">
      {/* Theme Toggle: Hidden in Mobile Landscape (moved to Rail), Visible elsewhere */}
      <button 
        onClick={toggleTheme}
        className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-zinc-600 dark:text-zinc-400 landscape:hidden lg:landscape:flex"
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </button>
      
      {/* Language Toggle: Hidden in Mobile Landscape (moved to Rail), Visible elsewhere */}
      <button 
        onClick={toggleLang}
        className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-zinc-900 dark:text-white font-black text-[10px] md:text-xs border border-zinc-200 dark:border-zinc-700 landscape:hidden lg:landscape:flex"
      >
        {language}
      </button>

      {/* CTA Button: Hidden on Mobile to save space for toggles */}
      <Link href="/contact" className="hidden md:block">
        <Button size="md" variant="primary" className="font-bold shadow-brand-500/20 hover:shadow-brand-500/50">
          HUBUNGI GUE <MessageCircle size={18} className="ml-2" />
        </Button>
      </Link>

      {/* 
         Hamburger Menu:
         - Visible in Portrait (Mobile/Tablet) -> Triggers LandscapeSidebar (acting as Portrait Drawer).
         - Hidden in Landscape (Mobile) -> Because we use Left Rail.
         - Hidden in Desktop -> Because we use Top Menu.
      */}
      <button 
        onClick={onOpenMenu}
        className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white flex items-center justify-center lg:hidden landscape:hidden"
      >
        <Menu size={20} strokeWidth={2.5} />
      </button>
    </div>
  );
};
