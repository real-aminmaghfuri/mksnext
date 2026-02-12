
"use client";
import React from 'react';
import { Scale, Lock, HelpCircle } from 'lucide-react';
import { LegalPageType } from '../types';

interface LegalHeaderProps {
  title: string;
  sub: string;
  type: LegalPageType;
}

export const LegalHeaderAtom: React.FC<LegalHeaderProps> = ({ title, sub, type }) => {
  const getIcon = () => {
    switch(type) {
        case 'TERMS': return Scale;
        case 'PRIVACY': return Lock;
        case 'FAQ': return HelpCircle;
        default: return Scale;
    }
  };

  const Icon = getIcon();

  return (
    <div className="pt-40 pb-20 relative overflow-hidden bg-zinc-50 dark:bg-black border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-500">
       <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(161,161,170,0.05)_100%)] dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(161,161,170,0.15)_100%)]" />
       
       <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 text-xs font-black animate-fade-in-up mx-auto shadow-sm mb-8 uppercase tracking-widest">
             <Icon size={14} />
             <span>OFFICIAL PROTOCOL</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mb-6 leading-[0.9]">
            {title}
          </h1>
          
          <p className="text-lg lg:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed font-medium">
            {sub}
          </p>
       </div>
    </div>
  );
};
