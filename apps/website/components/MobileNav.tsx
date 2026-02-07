"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Layers, Menu, ShoppingBag } from 'lucide-react';
import { DICTIONARY } from 'shared';
import { MobileMenu } from './MobileMenu';
import { useConfig } from 'ui';

export const WebsiteMobileNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language } = useConfig();
  const text = DICTIONARY[language];

  const getItemClass = (path: string) => 
    pathname === path ? 'text-brand-600 dark:text-brand-500' : 'text-zinc-500 dark:text-zinc-400';

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <nav className="fixed bottom-0 left-0 w-full bg-white dark:bg-zinc-950 shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.1)] border-t border-zinc-200 dark:border-zinc-800 z-50 md:hidden safe-area-bottom">
        <div className="grid grid-cols-5 h-16 items-center px-1 relative">
          
          <Link 
            href="/"
            className={`flex flex-col items-center justify-center h-full active:scale-95 transition-transform ${getItemClass('/')}`}
          >
              <Home size={20} strokeWidth={isActive('/') ? 2.5 : 2} />
              <span className="text-[10px] font-bold mt-1">{text.navHome}</span>
          </Link>
          
          <Link 
            href="/services"
            className={`flex flex-col items-center justify-center h-full active:scale-95 transition-transform ${getItemClass('/services')}`}
          >
              <Layers size={20} strokeWidth={isActive('/services') ? 2.5 : 2} />
              <span className="text-[10px] font-bold mt-1">{text.navServices}</span>
          </Link>

          <div className="relative h-full flex items-end justify-center">
             <Link 
              href="/shop"
              className={`absolute bottom-4 w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-brand-500/30 transition-transform active:scale-90
                ${isActive('/shop') 
                  ? 'bg-gradient-to-tr from-brand-600 to-red-600 text-white ring-4 ring-white dark:ring-zinc-950' 
                  : 'bg-zinc-800 dark:bg-zinc-700 text-zinc-400'}`}
             >
                <ShoppingBag size={24} strokeWidth={2.5} fill={isActive('/shop') ? "currentColor" : "none"} />
             </Link>
             <span className={`text-[10px] font-bold mb-1 ${isActive('/shop') ? 'text-brand-600' : 'text-zinc-500'}`}>
                {text.navShop}
             </span>
          </div>

          <Link 
            href="/about"
            className={`flex flex-col items-center justify-center h-full active:scale-95 transition-transform ${getItemClass('/about')}`}
          >
              <User size={20} strokeWidth={isActive('/about') ? 2.5 : 2} />
              <span className="text-[10px] font-bold mt-1">{text.navAbout}</span>
          </Link>

          <button 
              onClick={() => setIsMenuOpen(true)}
              className="flex flex-col items-center justify-center h-full text-zinc-500 dark:text-zinc-400 active:scale-95 transition-transform"
          >
               <Menu size={20} strokeWidth={2} />
               <span className="text-[10px] font-bold mt-1">{text.navMenu}</span>
          </button>
        </div>
      </nav>
      
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </>
  );
};