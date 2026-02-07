"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useConfig, Button } from 'ui';
import { Moon, Sun, Languages, ExternalLink } from 'lucide-react';
import { Language, DICTIONARY } from 'shared';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { theme, toggleTheme, language, setLanguage } = useConfig();
  const isDark = theme === 'dark';
  const text = DICTIONARY[language];

  const toggleLang = () => {
    setLanguage(language === Language.ID ? Language.EN : Language.ID);
  };

  const navLinkClass = (path: string) => 
    `text-sm font-semibold transition-colors hover:text-brand-500 ${
      pathname === path 
        ? 'text-brand-600 dark:text-brand-500' 
        : 'text-zinc-600 dark:text-zinc-400'
    }`;

  // In production, this would be an ENV variable
  const SYSTEM_URL = "http://localhost:3001";

  return (
    <nav className="fixed top-0 w-full z-50 px-4 md:px-6 py-3 md:py-4 transition-all duration-300 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200/50 dark:border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-8 bg-gradient-to-tr from-brand-500 to-red-600 rounded-lg group-hover:scale-110 transition-transform duration-300" />
          <span className="font-extrabold text-xl tracking-tighter text-zinc-900 dark:text-white">
            MKS<span className="text-brand-500">.SOLO</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className={navLinkClass('/')}>
            {text.navHome}
          </Link>
          <Link href="/services" className={navLinkClass('/services')}>
            {text.navServices}
          </Link>
          <Link href="/shop" className={navLinkClass('/shop')}>
            {text.navShop}
          </Link>
          <Link href="/about" className={navLinkClass('/about')}>
            {text.navAbout}
          </Link>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            onClick={toggleLang}
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400 flex items-center gap-1 font-mono text-xs"
          >
            <Languages size={20} />
            {language}
          </button>

          <a href={SYSTEM_URL} target="_blank" rel="noopener noreferrer" className="hidden md:block">
            <Button size="sm" variant="outline">
              System Login <ExternalLink size={14} className="ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};