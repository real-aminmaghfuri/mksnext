
"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FileText, Settings, LogOut, Image as ImageIcon } from 'lucide-react';

export const MobileNav: React.FC = () => {
  const pathname = usePathname();
  
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: FileText, label: 'Writer', path: '/writer' },
    { icon: ImageIcon, label: 'Media', path: '/media' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 z-50 md:hidden safe-area-bottom">
      <div className="grid grid-cols-5 h-16 items-center px-2">
        {menuItems.map((item, idx) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;
          return (
            <Link
              key={idx}
              href={item.path}
              className={`flex flex-col items-center justify-center h-full space-y-1 active:scale-95 transition-transform
                ${isActive 
                  ? 'text-brand-600 dark:text-brand-500' 
                  : 'text-zinc-500 dark:text-zinc-500'}`}
            >
              <div className={`p-1 rounded-lg ${isActive ? 'bg-brand-100 dark:bg-brand-900/30' : ''}`}>
                 <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className="text-[9px] font-bold tracking-tight">{item.label}</span>
            </Link>
          );
        })}
         <a
            href="/"
            className="flex flex-col items-center justify-center h-full space-y-1 text-red-600 dark:text-red-500 active:scale-95 transition-transform"
          >
             <div className="p-1">
                <LogOut size={20} strokeWidth={2} />
            </div>
            <span className="text-[9px] font-bold tracking-tight">Exit</span>
          </a>
      </div>
    </nav>
  );
};
