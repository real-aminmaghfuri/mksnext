
"use client";
import React from 'react';
import { EducationFeature } from '../types';
import { GlassCard } from 'ui';

interface EducationSystemProps {
  content: {
    title: string;
    sub: string;
    features: EducationFeature[];
  }
}

export const EducationSystemAtom: React.FC<EducationSystemProps> = ({ content }) => {
  return (
    <div className="py-24 bg-zinc-50 dark:bg-black relative transition-colors duration-500">
       <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mb-6">
                {content.title}
             </h2>
             <p className="text-lg text-zinc-600 dark:text-zinc-400">
                {content.sub}
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
             {content.features.map((item, idx) => {
                const Icon = item.icon;
                return (
                   <GlassCard 
                        key={idx} 
                        variant="solid" 
                        className="p-8 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-900/20 transition-all duration-500 group flex items-start gap-6"
                   >
                      <div className="w-16 h-16 shrink-0 rounded-2xl bg-cyan-50 dark:bg-cyan-900/20 flex items-center justify-center text-cyan-600 dark:text-cyan-500 border border-cyan-200 dark:border-cyan-800 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300 group-hover:border-cyan-500">
                          <Icon size={32} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 uppercase tracking-tight">
                            {item.title}
                        </h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                            {item.desc}
                        </p>
                      </div>
                   </GlassCard>
                );
             })}
          </div>
       </div>
    </div>
  );
};
