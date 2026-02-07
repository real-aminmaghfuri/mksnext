"use client";

import React from 'react';
import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { LayoutDashboard, Package, Settings, LogOut } from 'lucide-react';

export const MobileNav: React.FC = () => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  const menuItems = [
    { icon: LayoutDashboard, label: text.navDashboard, active: true },
    { icon: Package, label: text.navInventory, active: false },
    { icon: Settings, label: text.navSettings, active: false },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white dark:bg-zinc-950 border-t border-zinc-300 dark:border-zinc-800 z-50 md:hidden safe-area-bottom">
      <div className="grid grid-cols-4 h-16 items-center px-2">
        {menuItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <button
              key={idx}
              className={`flex flex-col items-center justify-center h-full space-y-1 active:scale-95 transition-transform
                ${item.active 
                  ? 'text-brand-600 dark:text-brand-500' 
                  : 'text-zinc-500 dark:text-zinc-500'}`}
            >
              <div className={`p-1 rounded-lg ${item.active ? 'bg-brand-100 dark:bg-brand-900/30' : ''}`}>
                 <Icon size={22} strokeWidth={item.active ? 2.5 : 2} />
              </div>
              <span className="text-[10px] font-bold tracking-tight">{item.label}</span>
            </button>
          );
        })}
         <a
            href="/"
            className="flex flex-col items-center justify-center h-full space-y-1 text-red-600 dark:text-red-500 active:scale-95 transition-transform"
          >
             <div className="p-1">
                <LogOut size={22} strokeWidth={2} />
            </div>
            <span className="text-[10px] font-bold tracking-tight">Logout</span>
          </a>
      </div>
    </nav>
  );
};