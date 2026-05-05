
"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useConfig, Logo } from 'ui';
import { DICTIONARY } from 'shared';
import { LayoutDashboard, Package, Settings, LogOut, ShoppingCart, FileText, Image, PenTool, Layout, ChevronDown } from 'lucide-react';

export const Sidebar: React.FC<{ collapsed?: boolean }> = ({ collapsed = false }) => {
  const { language } = useConfig();
  const text = DICTIONARY[language];
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = React.useState<string[]>(['konten']);
  
  const toggleMenu = (key: string) => {
    setOpenMenus(prev => 
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };

  const menuItems = [
    { icon: LayoutDashboard, label: text.navDashboard, path: '/' },
    { icon: ShoppingCart, label: 'Terminal Kasir', path: '/pos' },
    { icon: Package, label: text.navInventory, path: '/inventory' },
    { icon: FileText, label: 'Articles', path: '/articles' },
    { icon: Image, label: 'Media Library', path: '/media' },
    { icon: PenTool, label: 'AI Writer', path: '/writer' },
    { 
      icon: Layout, 
      label: 'Konten Halaman', 
      id: 'konten',
      children: [
        { label: 'Beranda', path: '/content/home' },
      ]
    },
    { icon: Settings, label: text.navSettings, path: '/settings' },
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
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {!collapsed && <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-3 ml-2 mt-2">Main Command</p>}
        {menuItems.map((item, idx) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;
          const hasChildren = 'children' in item && item.children;
          const isOpen = item.id ? openMenus.includes(item.id) : false;

          if (hasChildren) {
            return (
              <div key={idx} className="space-y-1">
                <button
                  onClick={() => item.id && toggleMenu(item.id)}
                  className={`w-full flex items-center p-3 rounded-xl transition-all duration-300 group text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white`}
                >
                  <Icon size={18} strokeWidth={2} />
                  {!collapsed && (
                    <div className="ml-3 flex-1 flex justify-between items-center">
                      <span className="font-bold text-sm">{item.label}</span>
                      <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                  )}
                </button>
                {isOpen && !collapsed && (
                  <div className="ml-4 pl-4 border-l border-zinc-100 dark:border-zinc-800 space-y-1">
                    {item.children.map((child, cIdx) => {
                      const isChildActive = pathname === child.path;
                      return (
                        <Link
                          key={cIdx}
                          href={child.path}
                          className={`flex items-center p-2 rounded-lg text-xs font-bold transition-all
                            ${isChildActive 
                              ? 'text-brand-500 bg-brand-500/5' 
                              : 'text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                            }`}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={idx}
              href={item.path}
              aria-label={item.label}
              className={`w-full flex items-center p-3 rounded-xl transition-all duration-300 group
                ${isActive 
                  ? 'bg-zinc-900 dark:bg-white text-white dark:text-black shadow-lg' 
                  : 'text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white'
                }`}
            >
              <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
              {!collapsed && (
                <div className="ml-3 flex-1 flex justify-between items-center">
                  <span className="font-bold text-sm">{item.label}</span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />}
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer / Logout - Compact */}
      <div className="p-4 border-t border-zinc-100 dark:border-zinc-900">
        <a 
          href="/" 
          aria-label="Exit System"
          className="flex items-center p-3 rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors font-bold text-sm"
        >
          <LogOut size={18} />
          {!collapsed && <span className="ml-3 uppercase tracking-widest text-[10px]">Exit System</span>}
        </a>
      </div>
    </aside>
  );
};
