
"use client";
import React from 'react';
import { GlassCard } from 'ui';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  item: ServiceItem;
}

export const ServiceCardAtom: React.FC<ServiceCardProps> = ({ item }) => {
  const Icon = item.icon;
  return (
    <GlassCard hoverEffect className="p-8 h-full flex flex-col group/card">
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-8 text-white shadow-[0_10px_20px_rgba(0,0,0,0.1)] group-hover/card:scale-110 transition-transform duration-500`}>
        <Icon size={24} strokeWidth={2.5} />
      </div>
      <h3 className="text-lg font-black text-zinc-900 dark:text-white mb-4 tracking-tight">
        {item.title}
      </h3>
      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium opacity-80">
        {item.desc}
      </p>
    </GlassCard>
  );
};
