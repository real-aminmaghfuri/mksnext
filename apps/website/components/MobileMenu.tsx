
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useConfig, GlassCard } from 'ui';
import { DICTIONARY, Language } from 'shared';
import { X, Moon, Sun, Languages, Globe, LogIn, ChevronDown, ChevronRight } from 'lucide-react';
import { getMenuStructure } from './Navigation/data';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { theme, toggleTheme, language, setLanguage } = useConfig();
  const text = DICTIONARY[language];
  const isDark = theme === 'dark';
  const menuStructure = getMenuStructure(text);

  // Accordion State
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center md:hidden">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full bg-white dark:bg-zinc-950 rounded-t-3xl p-6 shadow-2xl animate-fade-in-up border-t border-zinc-200 dark:border-zinc-800 max-h-[85vh] overflow-y-auto flex flex-col">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6 shrink-0">
          <h3 className="text-xl font-extrabold text-zinc-900 dark:text-white">
            {text.navMenu}
          </h3>
          <button onClick={onClose} className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-500">
            <X size={20} />
          </button>
        </div>

        {/* Dynamic Navigation List */}
        <div className="flex-1 overflow-y-auto mb-6 pr-2 custom-scrollbar">
          <div className="space-y-1">
            {menuStructure.map((menu, idx) => {
              const isExpanded = expandedIndex === idx;
              const hasChildren = menu.hasDropdown;
              
              return (
                <div key={idx} className="border-b border-zinc-100 dark:border-zinc-900 last:border-0">
                  <div 
                    onClick={() => hasChildren ? toggleAccordion(idx) : onClose()}
                    className="flex items-center justify-between py-4 cursor-pointer group"
                  >
                    {hasChildren ? (
                      <span className={`text-lg font-bold transition-colors ${isExpanded ? 'text-brand-600 dark:text-brand-500' : 'text-zinc-800 dark:text-zinc-200'}`}>
                        {menu.label}
                      </span>
                    ) : (
                      <Link href={menu.path} className="text-lg font-bold text-zinc-800 dark:text-zinc-200 w-full">
                        {menu.label}
                      </Link>
                    )}

                    {hasChildren && (
                      <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180 text-brand-500' : 'text-zinc-400'}`}>
                        <ChevronDown size={18} />
                      </div>
                    )}
                  </div>

                  {/* Dropdown Content */}
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                    
                    {/* Case 1: Split Layout (Columns) - e.g. Layanan */}
                    {menu.columns && (
                      <div className="space-y-6 pl-2">
                        {menu.columns.map((col, cIdx) => (
                          <div key={cIdx}>
                            <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                               <div className="w-1 h-2 bg-brand-500 rounded-full"/>
                               {col.title}
                            </h4>
                            <div className="space-y-3 pl-3 border-l-2 border-zinc-100 dark:border-zinc-800">
                              {col.items.map((item, iIdx) => {
                                const Icon = item.icon;
                                return (
                                  <Link 
                                    key={iIdx} 
                                    href={item.path} 
                                    onClick={onClose}
                                    className="flex items-center gap-3 py-1"
                                  >
                                     <Icon size={16} className="text-brand-500 shrink-0" />
                                     <div>
                                        <p className="text-sm font-bold text-zinc-700 dark:text-zinc-300 leading-none mb-0.5">{item.label}</p>
                                        <p className="text-[10px] text-zinc-500 line-clamp-1">{item.desc}</p>
                                     </div>
                                  </Link>
                                )
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Case 2: Standard List (Items) - e.g. About */}
                    {menu.items && !menu.columns && (
                       <div className="space-y-3 pl-2">
                          {menu.items.map((item, iIdx) => {
                             const Icon = item.icon;
                             return (
                                <Link 
                                  key={iIdx} 
                                  href={item.path} 
                                  onClick={onClose}
                                  className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 active:scale-95 transition-transform"
                                >
                                   <div className="p-2 bg-white dark:bg-zinc-800 rounded-lg text-brand-500 shadow-sm">
                                      <Icon size={18} />
                                   </div>
                                   <div>
                                      <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200">{item.label}</p>
                                      <p className="text-[10px] text-zinc-500">{item.desc}</p>
                                   </div>
                                </Link>
                             )
                          })}
                       </div>
                    )}

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Utilities */}
        <div className="shrink-0 space-y-4">
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

            <div className="text-center text-[10px] text-zinc-400 pt-2">
              v2.0.4 (Stable) &bull; &copy; 2024 PT Mesin Kasir Solo
            </div>
        </div>
      </div>
    </div>
  );
};
