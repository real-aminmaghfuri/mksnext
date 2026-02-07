"use client";

import React from 'react';
import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { LayoutDashboard, Package, Settings, LogOut, ChevronRight, ShieldCheck } from 'lucide-react';

export const Sidebar: React.FC<{ collapsed?: boolean }> = ({ collapsed = false }) => {
  const { language } = useConfig();
  const text = DICTIONARY[language];
  
  const menuItems = [
    { icon: LayoutDashboard, label: text.navDashboard, active: true },
    { icon: Package, label: text.navInventory, active: false },
    { icon: Settings, label: text.navSettings, active: false },
  ];

  return (
    <aside className={`hidden lg:flex h-screen flex-col bg-white dark:bg-zinc-950 border-r border-zinc-200 dark:border-zinc-800 transition-all duration-500 ${collapsed ? 'w-20' : 'w-72'}`}>
      {/* Sidebar Logo */}
      <div className="h-20 flex items-center px-8 border-b border-zinc-100 dark:border-zinc-900">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-tr from-brand-600 to-red-600 rounded-xl shadow-lg shadow-brand-500/20 flex items-center justify-center text-white">
            <ShieldCheck size={20} />
          </div>
          {!collapsed && (
            <span className="font-black text-xl tracking-tighter">
              MKS<span className="text-brand-500">.SYS</span>
            </span>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6 space-y-2">
        {!collapsed && <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-4 ml-2">Main Command</p>}
        {menuItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <button
              key={idx}
              className={`w-full flex items-center p-4 rounded-2xl transition-all duration-300 group
                ${item.active 
                  ? 'bg-zinc-900 dark:bg-white text-white dark:text-black shadow-xl' 
                  : 'text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white'
                }`}
            >
              <Icon size={20} strokeWidth={item.active ? 2.5 : 2} />
              {!collapsed && (
                <div className="ml-4 flex-1 flex justify-between items-center">
                  <span className="font-bold text-sm">{item.label}</span>
                  {item.active && <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />}
                </div>
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer / Logout */}
      <div className="p-6 border-t border-zinc-100 dark:border-zinc-900">
        <a 
          href="/" 
          className="flex items-center p-4 rounded-2xl text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors font-bold text-sm"
        >
          <LogOut size={20} />
          {!collapsed && <span className="ml-4 uppercase tracking-widest text-xs">Exit System</span>}
        </a>
      </div>
    </aside>
  );
};