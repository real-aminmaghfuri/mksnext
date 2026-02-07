
"use client";
import React from 'react';
import { GlassCard } from 'ui';
import { MissionItem } from '../types';

interface MissionGridProps {
  title: string;
  items: MissionItem[];
}

export const MissionGridAtom: React.FC<MissionGridProps> = ({ title, items }) => {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="flex items-center gap-6 mb-12">
        <h2 className="text-4xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter">
          {title}
        </h2>
        <div className="flex-1 h-[2px] bg-zinc-200 dark:bg-zinc-800" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <GlassCard key={idx} variant="solid" hoverEffect className="p-8 h-full flex flex-col group">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border-2 transition-transform group-hover:scale-110 ${item.color}`}>
                <Icon size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black text-zinc-900 dark:text-white uppercase tracking-tight mb-4">
                {item.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                {item.desc}
              </p>
            </GlassCard>
          );
        })}
      </div>
    </div>
  );
};
