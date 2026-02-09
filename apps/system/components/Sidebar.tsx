
"use client";

import React from 'react';
import { useConfig, Logo } from 'ui';
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
    <aside className={`hidden lg:flex h-screen flex-col bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-800 transition-all duration-500 ${collapsed ? 'w-16' : 'w-64'}`}>
      {/* Sidebar Logo - Compact Height */}
      <div className="h-16 flex items-center px-6 border-b border-zinc-100 dark:border-zinc-900">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center">
             <Logo className="w-full h-full" />
          </div>
          {!collapsed && (
            <span className="font-black text-lg tracking-tighter">
              MKS<span className="text-brand-500">.SYS</span>
            </span>
          )}
        </div>
      </div>

      {/* Navigation - Tighter Spacing */}
      <nav className="flex-1 p-4 space-y-1">
        {!collapsed && <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-3 ml-2 mt-2">Main Command</p>}
        {menuItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <button
              key={idx}
              className={`w-full flex items-center p-3 rounded-xl transition-all duration-300 group
                ${item.active 
                  ? 'bg-zinc-900 dark:bg-white text-white dark:text-black shadow-lg' 
                  : 'text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white'
                }`}
            >
              <Icon size={18} strokeWidth={item.active ? 2.5 : 2} />
              {!collapsed && (
                <div className="ml-3 flex-1 flex justify-between items-center">
                  <span className="font-bold text-sm">{item.label}</span>
                  {item.active && <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />}
                </div>
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer / Logout - Compact */}
      <div className="p-4 border-t border-zinc-100 dark:border-zinc-900">
        <a 
          href="/" 
          className="flex items-center p-3 rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors font-bold text-sm"
        >
          <LogOut size={18} />
          {!collapsed && <span className="ml-3 uppercase tracking-widest text-[10px]">Exit System</span>}
        </a>
      </div>
    </aside>
  );
};
