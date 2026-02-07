
"use client";
import React from 'react';
import { Moon, Sun, MessageCircle } from 'lucide-react';
import { Button } from 'ui';
import { NavbarLogic } from '../types';

type ActionProps = Pick<NavbarLogic, 'isDark' | 'toggleTheme' | 'toggleLang' | 'language'>;

export const ActionButtonsAtom: React.FC<ActionProps> = ({ isDark, toggleTheme, toggleLang, language }) => {
  return (
    <div className="flex items-center gap-2 shrink-0">
      <button 
        onClick={toggleTheme}
        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400 hidden sm:flex"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
      
      <button 
        onClick={toggleLang}
        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-900 dark:text-white font-black text-xs border border-zinc-200 dark:border-zinc-800 hidden sm:flex"
      >
        {language}
      </button>

      <a href="https://wa.me/62812XXXXXXXX" target="_blank" rel="noopener noreferrer" className="hidden md:block">
        <Button size="md" variant="primary" className="font-bold shadow-brand-500/20 hover:shadow-brand-500/50">
          HUBUNGI GUE <MessageCircle size={18} className="ml-2" />
        </Button>
      </a>
    </div>
  );
};
