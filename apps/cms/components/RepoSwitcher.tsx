
"use client";
import React, { useState } from 'react';
import { useData, RepoMode } from '../contexts/DataContext';
import { Database, Cloud, Zap, ChevronDown } from 'lucide-react';

export const RepoSwitcher: React.FC = () => {
  const { repoMode, setRepoMode } = useData();
  const [isOpen, setIsOpen] = useState(false);

  const modes: { id: RepoMode; label: string; icon: React.ReactNode; color: string }[] = [
    { id: 'AUTO', label: 'Auto Detect', icon: <Zap size={14} />, color: 'text-amber-500' },
    { id: 'LOCAL', label: 'Local Storage', icon: <Database size={14} />, color: 'text-zinc-500' },
    { id: 'CLOUD', label: 'Cloud Supabase', icon: <Cloud size={14} />, color: 'text-brand-600' }
  ];

  const current = modes.find(m => m.id === repoMode) || modes[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-brand-500/50 transition-all"
      >
        <span className={current.color}>{current.icon}</span>
        <span className="text-[10px] font-black uppercase tracking-widest hidden md:block">{current.label}</span>
        <ChevronDown size={12} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-30" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl z-40 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="p-2 space-y-1">
              {modes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => {
                    setRepoMode(mode.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all
                    ${repoMode === mode.id 
                      ? 'bg-brand-500/10 text-brand-600' 
                      : 'hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-500'}`}
                >
                  <span className={mode.color}>{mode.icon}</span>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest">{mode.label}</span>
                    {repoMode === mode.id && <span className="text-[8px] font-bold opacity-60 uppercase">Active</span>}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
