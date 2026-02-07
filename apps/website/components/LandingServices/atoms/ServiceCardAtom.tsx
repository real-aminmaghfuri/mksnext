
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
    <GlassCard hoverEffect className="p-6 h-full flex flex-col">
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 text-white shadow-lg`}>
        <Icon size={28} strokeWidth={2} />
      </div>
      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
        {item.title}
      </h3>
      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {item.desc}
      </p>
    </GlassCard>
  );
};
