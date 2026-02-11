
"use client";
import React from 'react';
import { TechItem } from '../types';
import { GlassCard } from 'ui';

interface WebAppStackProps {
  content: {
    title: string;
    sub: string;
    items: TechItem[];
  }
}

export const WebAppStackAtom: React.FC<WebAppStackProps> = ({ content }) => {
  return (
    <div className="py-24 bg-black relative">
       <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">
                {content.title}
             </h2>
             <p className="text-lg text-zinc-400">
                {content.sub}
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {content.items.map((item, idx) => {
                const Icon = item.icon;
                return (
                   <GlassCard 
                        key={idx} 
                        variant="solid" 
                        className="p-8 bg-zinc-900 border-zinc-800 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500 group"
                   >
                      <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors text-white duration-300 border border-zinc-700 group-hover:border-blue-500">
                          <Icon size={28} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight">
                          {item.title}
                      </h3>
                      <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                          {item.desc}
                      </p>
                   </GlassCard>
                );
             })}
          </div>
       </div>
    </div>
  );
};
