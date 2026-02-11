
"use client";
import React from 'react';
import { StoreFeatureItem } from '../types';
import { GlassCard } from 'ui';

interface StoreFeaturesProps {
  content: {
    title: string;
    sub: string;
    items: StoreFeatureItem[];
  }
}

export const StoreFeaturesAtom: React.FC<StoreFeaturesProps> = ({ content }) => {
  return (
    <div className="py-24 bg-zinc-50 dark:bg-zinc-950 relative transition-colors duration-500">
       <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mb-6">
                {content.title}
             </h2>
             <p className="text-lg text-zinc-600 dark:text-zinc-400">
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
                        className="p-8 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 group relative overflow-hidden"
                   >
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        {/* Icon Container with Gradient Border */}
                        <div className="w-14 h-14 mb-6 relative">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 opacity-100" />
                            <div className="absolute inset-[2px] rounded-[14px] bg-white dark:bg-zinc-800 group-hover:bg-emerald-600 transition-colors duration-300 flex items-center justify-center">
                                <Icon size={28} strokeWidth={1.5} className="text-emerald-600 dark:text-emerald-500 group-hover:text-white transition-colors duration-300" />
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 uppercase tracking-tight">
                            {item.title}
                        </h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
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
