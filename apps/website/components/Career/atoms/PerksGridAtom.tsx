"use client";
import React from 'react';
import { GlassCard } from 'ui';
import { DnaItem } from '../types';

interface PerksGridProps {
  items: DnaItem[];
}

export const PerksGridAtom: React.FC<PerksGridProps> = ({ items }) => {
  return (
    <div className="container mx-auto px-6 py-12 relative -mt-10 z-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <GlassCard key={idx} variant="solid" className="p-8 bg-zinc-900/80 border-zinc-800 backdrop-blur-xl">
               <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${item.color}`}>
                  <Icon size={28} strokeWidth={2.5} />
               </div>
               <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3">
                 {item.title}
               </h3>
               <p className="text-zinc-400 leading-relaxed text-sm">
                 {item.desc}
               </p>
            </GlassCard>
          );
        })}
      </div>
    </div>
  );
};