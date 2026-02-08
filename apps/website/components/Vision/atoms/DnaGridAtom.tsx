
"use client";
import React from 'react';
import { DnaItem } from '../types';
import { Fingerprint } from 'lucide-react';

interface DnaGridProps {
  title: string;
  subtitle: string;
  items: DnaItem[];
}

export const DnaGridAtom: React.FC<DnaGridProps> = ({ title, subtitle, items }) => {
  
  // Custom color palette to make icons lively
  const colors = [
    { bg: 'bg-orange-500/10 dark:bg-orange-500/20', text: 'text-orange-600 dark:text-orange-500', border: 'border-orange-200 dark:border-orange-500/30' },
    { bg: 'bg-blue-500/10 dark:bg-blue-500/20', text: 'text-blue-600 dark:text-blue-500', border: 'border-blue-200 dark:border-blue-500/30' },
    { bg: 'bg-emerald-500/10 dark:bg-emerald-500/20', text: 'text-emerald-600 dark:text-emerald-500', border: 'border-emerald-200 dark:border-emerald-500/30' },
    { bg: 'bg-purple-500/10 dark:bg-purple-500/20', text: 'text-purple-600 dark:text-purple-500', border: 'border-purple-200 dark:border-purple-500/30' },
    { bg: 'bg-red-500/10 dark:bg-red-500/20', text: 'text-red-600 dark:text-red-500', border: 'border-red-200 dark:border-red-500/30' },
    { bg: 'bg-cyan-500/10 dark:bg-cyan-500/20', text: 'text-cyan-600 dark:text-cyan-500', border: 'border-cyan-200 dark:border-cyan-500/30' },
  ];

  return (
    <div className="bg-white dark:bg-zinc-950 py-24 relative border-t border-zinc-200 dark:border-zinc-900">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#f4f4f5_25%,transparent_25%,transparent_75%,#f4f4f5_75%,#f4f4f5),linear-gradient(45deg,#f4f4f5_25%,transparent_25%,transparent_75%,#f4f4f5_75%,#f4f4f5)] dark:bg-[linear-gradient(45deg,#09090b_25%,transparent_25%,transparent_75%,#09090b_75%,#09090b),linear-gradient(45deg,#09090b_25%,transparent_25%,transparent_75%,#09090b_75%,#09090b)] bg-[size:60px_60px] bg-[position:0_0,30px_30px] opacity-40 dark:opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Centered */}
        <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-brand-200 dark:border-brand-900/50 bg-brand-50 dark:bg-brand-950/30 text-brand-600 dark:text-brand-500 text-[10px] font-black uppercase tracking-widest mb-4">
                <Fingerprint size={12} /> PREMIUM ARSENAL
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mb-4">
                {title.split(' ')[0]} <span className="text-brand-600 dark:text-brand-500">{title.split(' ')[1]}</span>
            </h2>
            <p className="text-zinc-500 dark:text-zinc-500 font-medium italic">
                {subtitle}
            </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, idx) => {
                const Icon = item.icon;
                const style = colors[idx % colors.length];

                return (
                    <div key={idx} className="group bg-zinc-50 dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1 shadow-sm">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors border ${style.bg} ${style.text} ${style.border}`}>
                            <Icon size={28} strokeWidth={2} />
                        </div>
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">
                            {item.title}
                        </h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-500 leading-relaxed font-medium">
                            {item.desc}
                        </p>
                    </div>
                );
            })}
        </div>

      </div>
    </div>
  );
};
