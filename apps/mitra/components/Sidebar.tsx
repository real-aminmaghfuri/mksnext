
"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from 'ui';
import { LayoutDashboard, Users, Handshake, MessageSquare, Wallet, LogOut, Settings, ShieldCheck } from 'lucide-react';

export const Sidebar: React.FC<{ collapsed?: boolean }> = ({ collapsed = false }) => {
  const pathname = usePathname();
  
  const menuItems = [
    { icon: LayoutDashboard, label: 'Overview', path: '/' },
    { icon: Users, label: 'Partner Database', path: '/partners' },
    { icon: Handshake, label: 'Aktifitas', path: '/activities' },
    { icon: MessageSquare, label: 'Forum Mitra', path: '/forum' },
    { icon: Wallet, label: 'Bagi Hasil', path: '/payouts' },
    { icon: Settings, label: 'Konfigurasi', path: '/settings' },
  ];

  return (
    <aside className={`hidden lg:flex h-screen flex-col bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-800 transition-all duration-500 ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="h-16 flex items-center px-6 border-b border-zinc-100 dark:border-zinc-900">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center">
             <Logo className="w-full h-full" color="brand" /> 
          </div>
          {!collapsed && (
            <div className="flex flex-col leading-none">
              <span className="font-black text-lg tracking-tighter uppercase">
                MKS<span className="text-brand-600">.MITRA</span>
              </span>
              <span className="text-[8px] font-black text-zinc-400 tracking-[0.2em] uppercase">Partnership</span>
            </div>
          )}
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {!collapsed && <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-3 ml-2 mt-2">Empire Control</p>}
        {menuItems.map((item, idx) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;
          return (
            <Link
              key={idx}
              href={item.path}
              className={`w-full flex items-center p-3 rounded-xl transition-all duration-300 group
                ${isActive 
                  ? 'bg-zinc-900 dark:bg-white text-white dark:text-black shadow-lg shadow-zinc-900/20 dark:shadow-white/5' 
                  : 'text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white'
                }`}
            >
              <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
              {!collapsed && (
                <div className="ml-3 flex-1 flex justify-between items-center">
                  <span className="font-bold text-sm">{item.label}</span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-brand-600" />}
                </div>
              )}
            </Link>
          );
        })}
        
        <div className="mt-8 border-t border-zinc-100 dark:border-zinc-800 pt-4">
             <Link
              href="/verify"
              className="w-full flex items-center p-3 rounded-xl text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
                <ShieldCheck size={18} />
                {!collapsed && <span className="ml-3 font-bold text-sm">Security Hub</span>}
            </Link>
        </div>
      </nav>

      <div className="p-4 border-t border-zinc-100 dark:border-zinc-900">
        <a 
          href="/" 
          className="flex items-center p-3 rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors font-bold text-sm"
        >
          <LogOut size={18} />
          {!collapsed && <span className="ml-3 uppercase tracking-widest text-[10px]">Logout</span>}
        </a>
      </div>
    </aside>
  );
};
