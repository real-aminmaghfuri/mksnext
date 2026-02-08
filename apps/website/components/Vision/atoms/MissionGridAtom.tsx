
"use client";
import React from 'react';
import { GlassCard } from 'ui';
import { MissionItem } from '../types';
import { Flag } from 'lucide-react';

interface MissionGridProps {
  title: string;
  subtitle: string;
  items: MissionItem[];
}

export const MissionGridAtom: React.FC<MissionGridProps> = ({ title, subtitle, items }) => {
  return (
    <div className="bg-zinc-950 py-24 relative border-t border-zinc-900">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Section Header */}
        <div className="mb-12">
            <div className="flex items-center gap-3 mb-2 text-brand-500">
                <Flag size={20} />
                <h3 className="text-2xl font-black uppercase tracking-tight text-white">{title}</h3>
            </div>
            <p className="text-zinc-500 text-sm md:text-base font-bold uppercase tracking-widest ml-8">
                {subtitle}
            </p>
        </div>

        {/* The List Layout (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {items.map((item) => (
                <div key={item.id} className="group relative p-6 md:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
                    <div className="flex items-start gap-4">
                        <span className="text-4xl font-black text-zinc-800 group-hover:text-brand-900 transition-colors leading-none select-none">
                            {item.id}
                        </span>
                        <div>
                            <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                            <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
};
