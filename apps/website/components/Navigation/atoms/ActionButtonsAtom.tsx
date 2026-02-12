
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
      {/* Theme Toggle: Hidden in Portrait Mobile (moved to Drawer Footer), Visible in Landscape & Desktop */}
      <button 
        onClick={toggleTheme}
        className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-zinc-600 dark:text-zinc-400 hidden landscape:flex md:flex"
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </button>
      
      {/* Language Toggle: Hidden in Portrait Mobile, Visible in Landscape & Desktop */}
      <button 
        onClick={toggleLang}
        className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-zinc-900 dark:text-white font-black text-[10px] md:text-xs border border-zinc-200 dark:border-zinc-700 hidden landscape:flex md:flex"
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
         - Visible in Portrait (Mobile/Tablet).
         - Hidden in Landscape (Mobile/Tablet) -> Because we use Right Sidebar now.
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
