
"use client";
import React from 'react';
import Link from 'next/link';
import { Moon, Sun, MessageCircle } from 'lucide-react';
import { Button } from 'ui';
import { NavbarLogic } from '../types';

interface ActionProps extends Pick<NavbarLogic, 'isDark' | 'toggleTheme' | 'toggleLang' | 'language' | 'text'> {
  onOpenMenu?: () => void;
}

export const ActionButtonsAtom: React.FC<ActionProps> = ({ isDark, toggleTheme, toggleLang, language, text }) => {
  return (
    <div className="flex items-center gap-2 shrink-0">
      {/* Theme Toggle: Always Visible */}
      <button 
        onClick={toggleTheme}
        aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        className="w-11 h-11 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-zinc-600 dark:text-zinc-400"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
      
      {/* Language Toggle: Always Visible */}
      <button 
        onClick={toggleLang}
        aria-label="Switch Language"
        className="w-11 h-11 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-zinc-900 dark:text-white font-black text-xs border border-zinc-200 dark:border-zinc-700"
      >
        {language}
      </button>

      {/* CTA Button: Hidden on Mobile, Visible on Tablet+ */}
      <Link href="/contact" className="hidden md:block">
        <Button size="md" variant="primary" className="font-bold shadow-brand-500/20 hover:shadow-brand-500/50 uppercase">
          {text.navContact} <MessageCircle size={18} className="ml-2" />
        </Button>
      </Link>
      
      {/* Hamburger Menu REMOVED: Navigation is now handled by Bottom Bar (Portrait) or Right Sidebar (Landscape) for all mobile/tablet devices. */}
    </div>
  );
};
