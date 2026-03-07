"use client";

import React from 'react';
import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { LayoutDashboard, Package, Settings, LogOut, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const MobileNav: React.FC = () => {
  const { language } = useConfig();
  const text = DICTIONARY[language];
  const pathname = usePathname();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dash', path: '/' },
    { icon: ShoppingCart, label: 'POS', path: '/pos' },
    { icon: Package, label: 'Stok', path: '/inventory' },
    { icon: Settings, label: 'Set', path: '/settings' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-t border-zinc-200 dark:border-zinc-800 z-50 lg:hidden pb-safe shadow-2xl">
      <div className="grid grid-cols-5 h-[72px] items-center px-2">
        {menuItems.map((item, idx) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;
          return (
            <Link
              key={idx}
              href={item.path}
              aria-label={item.label}
              className={`flex flex-col items-center justify-center h-full space-y-1 active:scale-95 transition-transform
                ${isActive 
                  ? 'text-brand-600 dark:text-brand-500' 
                  : 'text-zinc-500 dark:text-zinc-500'}`}
            >
              <div className={`p-1 rounded-lg ${isActive ? 'bg-brand-100 dark:bg-brand-900/30' : ''}`}>
                 <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className="text-[10px] font-bold tracking-tight">{item.label}</span>
            </Link>
          );
        })}
         <a
            href="/"
            aria-label="Logout"
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