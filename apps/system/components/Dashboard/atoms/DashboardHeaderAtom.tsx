
"use client";
import React from 'react';
import { RefreshCw } from 'lucide-react';

interface DashboardHeaderProps {
  title: string;
  isLoading: boolean;
  onRefresh: () => void;
  user: {
    name: string;
    role: string;
    avatar: string;
  };
}

export const DashboardHeaderAtom: React.FC<DashboardHeaderProps> = ({ title, isLoading, onRefresh, user }) => {
  return (
    <header className="h-20 flex items-center justify-between px-6 md:px-10 border-b border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-black/50 backdrop-blur-md z-20 sticky top-0">
      <div>
        <h2 className="text-xl md:text-2xl font-black tracking-tight uppercase">{title}</h2>
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'}`} />
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
            {isLoading ? 'Syncing...' : 'System Online'}
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button 
          onClick={onRefresh} 
          className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors text-zinc-500"
          title="Refresh Data"
        >
          <RefreshCw size={18} className={isLoading ? "animate-spin" : ""} />
        </button>
        <div className="h-8 w-px bg-zinc-200 dark:bg-zinc-800 hidden sm:block" />
        <div className="flex items-center gap-3">
           <div className="text-right hidden sm:block">
              <p className="text-xs font-black">{user.name}</p>
              <p className="text-[10px] text-zinc-500 font-bold uppercase">{user.role}</p>
           </div>
           <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 overflow-hidden shadow-lg">
              <img src={user.avatar} alt="Admin" className="w-full h-full object-cover grayscale" />
           </div>
        </div>
      </div>
    </header>
  );
};
