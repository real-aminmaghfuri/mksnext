
"use client";
import React from 'react';
import { FeatureItem } from '../types';
import { GlassCard } from 'ui';

interface ProfileFeaturesProps {
  content: {
    title: string;
    sub: string;
    items: FeatureItem[];
  }
}

export const ProfileFeaturesAtom: React.FC<ProfileFeaturesProps> = ({ content }) => {
  return (
    <div className="py-24 bg-zinc-50 dark:bg-black">
       <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mb-6">
                {content.title}
             </h2>
             <p className="text-zinc-600 dark:text-zinc-400 text-lg">
                {content.sub}
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {content.items.map((item, idx) => {
                const Icon = item.icon;
                return (
                   <GlassCard key={idx} variant="solid" className="p-8 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-brand-500/50 transition-all duration-300 group">
                      <div className="w-14 h-14 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors text-zinc-900 dark:text-white">
                         <Icon size={28} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 uppercase tracking-tight">
                         {item.title}
                      </h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
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
