
"use client";
import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface HeroBadgeProps {
  text: string;
}

export const HeroBadgeAtom: React.FC<HeroBadgeProps> = ({ text }) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-bold animate-fade-in-up mx-auto shadow-sm">
      <ShieldCheck size={16} className="text-brand-500" />
      <span>{text}</span>
    </div>
  );
};
