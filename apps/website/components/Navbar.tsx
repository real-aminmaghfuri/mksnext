"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useConfig, Button, Logo } from 'ui';
import { Moon, Sun, Languages, ExternalLink, ChevronDown, User, Layers, Cpu, HelpCircle, BookOpen, ShoppingBag, Laptop } from 'lucide-react';
import { Language, DICTIONARY } from 'shared';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { theme, toggleTheme, language, setLanguage } = useConfig();
  const isDark = theme === 'dark';
  const text = DICTIONARY[language];

  const toggleLang = () => {
    setLanguage(language === Language.ID ? Language.EN : Language.ID);
  };

  // Logic: Mega Menu Structure
  const menuStructure = [
    { 
      label: text.navHome, 
      path: '/', 
      hasDropdown: false 
    },
    { 
      label: text.navAbout, 
      path: '#', 
      hasDropdown: true,
      items: [
        { label: text.navAboutProfile, path: '/about', icon: User, desc: "Sejarah, Visi & Legitimasi PT MKS" },
        { label: text.navAboutTeam, path: '#', icon: Layers, desc: "Struktur Komando & Tim Lapangan" },
        { label: text.navAboutVision, path: '#', icon: BookOpen, desc: "Blueprint Masa Depan" },
      ]
    },
    { 
      label: text.navSolutions, 
      path: '#', 
      hasDropdown: true,
      items: [
        { label: text.navSolHardware, path: '/shop', icon: ShoppingBag, desc: "Supply Mesin Kasir & Device" },
        { label: text.navSolSoftware, path: '/services', icon: Laptop, desc: "Aplikasi Kasir (SaaS) & Website" },
        { label: text.navSolConsulting, path: '/services', icon: User, desc: "Konsultasi Manajemen & SOP" },
      ]
    },
    { 
      label: text.navInnovation, 
      path: '#', 
      hasDropdown: true,
      items: [
        { label: "AI Integration", path: '#', icon: Cpu, desc: "Analisis Data Cerdas (Coming Soon)" },
        { label: "MKS Labs", path: '#', icon: Layers, desc: "Riset & Pengembangan Internal" },
      ]
    },
    { 
      label: text.navHelp, 
      path: '#', 
      hasDropdown: true,
      items: [
        { label: "Live Support", path: '#', icon: HelpCircle, desc: "Bantuan Teknis 24/7" },
        { label: "Knowledge Base", path: '#', icon: BookOpen, desc: "Tutorial & Dokumentasi" },
      ]
    },
    { 
      label: text.navInsights, 
      path: '#', 
      hasDropdown: false 
    },
  ];

  // In production, this would be an ENV variable
  const SYSTEM_URL = "http://localhost:3001";

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/95 dark:bg-black/90 backdrop-blur-xl border-b border-zinc-200/50 dark:border-white/10 shadow-sm">
      <div className="w-full px-6 md:px-8 lg:px-12 flex items-center justify-between h-20">
        
        {/* LEFT: LOGO */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer group shrink-0">
          <div className="group-hover:scale-110 transition-transform duration-300 drop-shadow-lg shadow-brand-500/50">
             <Logo className="w-10 h-10" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-black text-xl md:text-2xl tracking-tighter leading-none text-zinc-900 dark:text-white">
              MESIN KASIR <span className="text-brand-500">SOLO</span>
            </span>
            <span className="text-[8px] md:text-[10px] font-bold text-zinc-500 tracking-[0.2em] uppercase leading-tight mt-0.5">
              Digital Solutions Partner
            </span>
          </div>
        </Link>

        {/* CENTER: MEGA MENU ITEMS */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {menuStructure.map((menu, idx) => (
            <div key={idx} className="relative group px-3 py-6">
              <Link 
                href={menu.path} 
                className={`flex items-center gap-1.5 text-[13px] font-bold tracking-wider uppercase transition-colors 
                  ${pathname === menu.path 
                    ? 'text-brand-600 dark:text-brand-500' 
                    : 'text-zinc-600 dark:text-zinc-300 group-hover:text-brand-600 dark:group-hover:text-brand-500'
                  }`}
              >
                {menu.label}
                {menu.hasDropdown && (
                  <ChevronDown size={14} className="transition-transform duration-300 group-hover:-rotate-180" />
                )}
              </Link>

              {/* DROPDOWN PANEL */}
              {menu.hasDropdown && menu.items && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[340px] opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-50 pt-2">
                  <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-2xl p-4 overflow-hidden relative">
                    {/* Decorative Top Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-red-600" />
                    
                    <div className="grid gap-2">
                      {menu.items.map((item, itemIdx) => {
                        const Icon = item.icon;
                        return (
                          <Link 
                            key={itemIdx} 
                            href={item.path}
                            className="flex items-start gap-4 p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group/item"
                          >
                            <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-500 group-hover/item:text-brand-500 group-hover/item:bg-brand-500/10 transition-colors">
                              <Icon size={18} />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-zinc-900 dark:text-white group-hover/item:text-brand-500 transition-colors">
                                {item.label}
                              </p>
                              <p className="text-[11px] text-zinc-500 leading-tight mt-1 font-medium">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT: UTILS & LOGIN */}
        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400 hidden sm:block"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            onClick={toggleLang}
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400 flex items-center gap-1 font-mono text-xs hidden sm:block"
          >
            <Languages size={20} />
            {language}
          </button>

          <a href={SYSTEM_URL} target="_blank" rel="noopener noreferrer" className="hidden md:block">
            <Button size="sm" variant="outline" className="font-bold border-2">
              System Login <ExternalLink size={14} className="ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};
