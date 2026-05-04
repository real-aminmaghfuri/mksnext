
"use client";
import React from 'react';
import { Bell, Search } from 'lucide-react';

export const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-black/50 backdrop-blur-md sticky top-0 z-20">
      <div className="flex items-center gap-6">
        <h2 className="text-xl font-black tracking-tight uppercase leading-none">{title}</h2>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input 
            type="text" 
            placeholder="Cari fitur mitra..." 
            className="pl-9 pr-4 py-1.5 bg-zinc-100 dark:bg-zinc-900 border-none rounded-lg text-xs w-48 focus:ring-1 focus:ring-brand-500 transition-all font-bold"
          />
        </div>
        
        <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-500 hover:text-brand-500 transition-colors relative">
          <Bell size={18} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-brand-500 rounded-full border-2 border-white dark:border-zinc-950"></span>
        </button>

        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-rose-600 flex items-center justify-center text-white font-black text-xs shadow-lg">
           M
        </div>
      </div>
    </header>
  );
};
