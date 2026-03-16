
"use client";
import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface HeroBadgeProps {
  text: string;
}

export const HeroBadgeAtom: React.FC<HeroBadgeProps> = ({ text }) => {
  return (
    <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-white/5 dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 text-zinc-500 dark:text-zinc-400 text-[10px] font-black uppercase tracking-[0.3em] animate-fade-in-up shadow-sm">
      <ShieldCheck size={12} strokeWidth={3} className="text-brand-500" />
      <span>{text}</span>
    </div>
  );
};
