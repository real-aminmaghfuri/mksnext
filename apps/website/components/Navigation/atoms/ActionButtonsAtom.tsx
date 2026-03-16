
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
        className="w-10 h-10 flex items-center justify-center rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-brand-500/50 transition-all duration-300 text-zinc-600 dark:text-zinc-400 shadow-sm"
      >
        {isDark ? <Sun size={18} strokeWidth={2.5} /> : <Moon size={18} strokeWidth={2.5} />}
      </button>
      
      {/* Language Toggle: Always Visible */}
      <button 
        onClick={toggleLang}
        aria-label="Switch Language"
        className="w-10 h-10 flex items-center justify-center rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-brand-500/50 transition-all duration-300 text-zinc-900 dark:text-white font-black text-[10px] uppercase tracking-tighter shadow-sm"
      >
        {language}
      </button>

      {/* CTA Button: Hidden on Mobile, Visible on Tablet+ */}
      <Link href="/contact" className="hidden md:block ml-2">
        <Button size="md" variant="primary" className="font-black shadow-brand-500/20 hover:shadow-brand-500/50 uppercase tracking-tight">
          {text.navContact} <MessageCircle size={16} strokeWidth={3} className="ml-2" />
        </Button>
      </Link>
      
      {/* Hamburger Menu REMOVED: Navigation is now handled by Bottom Bar (Portrait) or Right Sidebar (Landscape) for all mobile/tablet devices. */}
    </div>
  );
};
