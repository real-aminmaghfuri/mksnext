
"use client";
import React from 'react';
import { useConfig } from 'ui';
import { LayoutDashboard, Users, Handshake, Wallet, Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const MobileNav: React.FC = () => {
  const pathname = usePathname();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dash', path: '/' },
    { icon: Users, label: 'Mitra', path: '/partners' },
    { icon: Handshake, label: 'Deal', path: '/activities' },
    { icon: Wallet, label: 'Cuan', path: '/payouts' },
    { icon: Settings, label: 'Set', path: '/settings' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-t border-zinc-200 dark:border-zinc-800 z-50 lg:hidden px-2 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-around h-full">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;
          return (
            <Link 
              key={item.path} 
              href={item.path}
              className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all active:scale-95 ${
                isActive ? 'text-brand-500' : 'text-zinc-500 dark:text-zinc-400'
              }`}
            >
              <div className={`p-1.5 rounded-lg ${isActive ? 'bg-brand-500/10' : ''}`}>
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={`text-[10px] font-black uppercase tracking-tighter ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
