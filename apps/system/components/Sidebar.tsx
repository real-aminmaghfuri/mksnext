import React from 'react';
import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { LayoutDashboard, Package, Settings, LogOut, ChevronRight } from 'lucide-react';

export const Sidebar: React.FC<{ collapsed?: boolean }> = ({ collapsed = false }) => {
  const { language } = useConfig();
  const text = DICTIONARY[language];
  
  const menuItems = [
    { icon: LayoutDashboard, label: text.navDashboard, active: true },
    { icon: Package, label: text.navInventory, active: false },
    { icon: Settings, label: text.navSettings, active: false },
  ];

  return (
    <aside className={`hidden md:flex h-screen sticky top-0 bg-white dark:bg-zinc-950 border-r border-zinc-300 dark:border-zinc-800 z-40 transition-all duration-300 flex-col justify-between ${collapsed ? 'w-20' : 'w-72'}`}>
      <div>
        <div className="h-20 flex items-center px-6 border-b border-zinc-300 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
          <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-red-600 rounded-lg shadow-sm flex-shrink-0 border border-brand-600/20" />
          {!collapsed && (
            <span className="ml-3 font-extrabold text-lg tracking-wider text-zinc-900 dark:text-white truncate">
              MKS<span className="text-brand-600">.SYS</span>
            </span>
          )}
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              className={`w-full flex items-center p-3 rounded-xl transition-all duration-200 group border
                ${item.active 
                  ? 'bg-brand-50 dark:bg-brand-900/20 border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-400 shadow-sm' 
                  : 'bg-transparent border-transparent text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:border-zinc-200 dark:hover:border-zinc-800'
                }`}
            >
              <item.icon className={`w-5 h-5 ${item.active ? 'text-brand-600 dark:text-brand-400' : ''}`} />
              {!collapsed && (
                <div className="ml-3 flex-1 flex justify-between items-center">
                  <span className={`font-semibold text-sm ${item.active ? 'text-brand-900 dark:text-brand-100' : ''}`}>{item.label}</span>
                  {item.active && <ChevronRight className="w-4 h-4 text-brand-500" />}
                </div>
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t border-zinc-300 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
        <a href="http://localhost:3000" className="w-full flex items-center p-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 border border-transparent hover:border-red-200 dark:hover:border-red-800 rounded-xl transition-all">
          <LogOut className="w-5 h-5" />
          {!collapsed && <span className="ml-3 font-bold text-sm">Logout</span>}
        </a>
      </div>
    </aside>
  );
};