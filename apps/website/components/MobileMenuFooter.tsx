
"use client";

import React from 'react';
import { useConfig, GlassCard } from 'ui';
import { Language } from 'shared';
import { LogIn, Moon, Sun, Languages } from 'lucide-react';

export const MobileMenuFooter: React.FC = () => {
  const { theme, toggleTheme, language, setLanguage } = useConfig();
  const isDark = theme === 'dark';

  return (
    <div className="shrink-0 space-y-4">
        {/* System Login Button */}
        <a href="http://localhost:3001" target="_blank" rel="noopener noreferrer">
            <button 
            className="w-full flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-zinc-800 to-black text-white shadow-lg active:scale-95 transition-transform"
            >
            <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg">
                    <LogIn size={20} />
                </div>
                <div className="text-left">
                <p className="font-bold text-sm">System Login</p>
                <p className="text-[10px] text-zinc-400">Access ERP Dashboard</p>
                </div>
            </div>
            <div className="text-xs font-bold bg-white/20 px-2 py-1 rounded">SECURE</div>
            </button>
        </a>

        {/* Toggles Grid */}
        <div className="grid grid-cols-2 gap-4">
          <GlassCard 
            variant="solid" 
            className="p-3 flex flex-col items-center justify-center gap-2 cursor-pointer active:scale-95"
            onClick={toggleTheme}
          >
            <div className={`p-2 rounded-full ${isDark ? 'bg-zinc-800 text-yellow-400' : 'bg-orange-100 text-orange-600'}`}>
              {isDark ? <Moon size={20} /> : <Sun size={20} />}
            </div>
            <span className="font-bold text-xs text-zinc-700 dark:text-zinc-300">
              {isDark ? 'Dark Mode' : 'Light Mode'}
            </span>
          </GlassCard>

          <GlassCard 
            variant="solid" 
            className="p-3 flex flex-col items-center justify-center gap-2 cursor-pointer active:scale-95"
            onClick={() => setLanguage(language === Language.ID ? Language.EN : Language.ID)}
          >
            <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
              <Languages size={20} />
            </div>
            <span className="font-bold text-xs text-zinc-700 dark:text-zinc-300">
              {language === Language.ID ? 'Bahasa IND' : 'English US'}
            </span>
          </GlassCard>
        </div>

        {/* Copyright / Version */}
        <div className="text-center text-[10px] text-zinc-400 pt-2">
          v2.0.4 (Stable) &bull; &copy; 2024 PT Mesin Kasir Solo
        </div>
    </div>
  );
};
