
"use client";
import React from 'react';
import { RefreshCw } from 'lucide-react';
import Image from 'next/image';

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
    <header className="h-14 flex items-center justify-between px-4 border-b border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-black/50 backdrop-blur-md z-20 sticky top-0">
      <div className="flex items-center gap-4">
        <div>
          <h2 className="text-fluid-h2 font-black tracking-tight uppercase">{title}</h2>
          <div className="flex items-center gap-2">
            <div className={`w-1.5 h-1.5 rounded-full ${isLoading ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'}`} />
            <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">
              {isLoading ? 'Syncing...' : 'System Online'}
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <button 
          onClick={onRefresh} 
          className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors text-zinc-500"
          title="Refresh Data"
        >
          <RefreshCw size={16} className={isLoading ? "animate-spin" : ""} />
        </button>
        <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-800 hidden sm:block" />
        <div className="flex items-center gap-3">
           <div className="text-right hidden sm:block">
              <p className="text-xs font-black leading-none mb-0.5">{user.name}</p>
              <p className="text-[9px] text-zinc-500 font-bold uppercase leading-none">{user.role}</p>
           </div>
           <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700 overflow-hidden shadow-lg relative">
              <Image 
                src={user.avatar} 
                alt="Admin" 
                fill
                sizes="32px"
                className="object-cover grayscale" 
              />
           </div>
        </div>
      </div>
    </header>
  );
};
