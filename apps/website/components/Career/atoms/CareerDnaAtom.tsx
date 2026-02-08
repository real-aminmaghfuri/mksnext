
"use client";
import React from 'react';
import { DnaItem } from '../types';

interface CareerDnaProps {
  title: string;
  subtitle: string;
  items: DnaItem[];
}

export const CareerDnaAtom: React.FC<CareerDnaProps> = ({ title, subtitle, items }) => {
  return (
    <div className="container mx-auto px-6 py-24 relative z-10">
      
      {/* Section Header */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-6">
          {title.split(' ')[0]} <span className="text-brand-500">{title.split(' ')[1]}</span>
        </h2>
        <p className="text-zinc-400">
            {subtitle}
        </p>
      </div>

      {/* 3 Columns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="group p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
               <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-brand-900/30 bg-brand-950/20 text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors`}>
                  <Icon size={24} strokeWidth={2} />
               </div>
               <h3 className="text-xl font-bold text-white mb-4">
                 {item.title}
               </h3>
               <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                 {item.desc}
               </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
