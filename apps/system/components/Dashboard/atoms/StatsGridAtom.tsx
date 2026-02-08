
"use client";
import React from 'react';
import { GlassCard } from 'ui';
import { LucideIcon, TrendingUp } from 'lucide-react';

export interface StatItem {
  label: string;
  value: string;
  trend: string;
  color: string;
  icon: LucideIcon;
}

interface StatsGridProps {
  stats: StatItem[];
}

export const StatsGridAtom: React.FC<StatsGridProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <GlassCard key={idx} variant="solid" className="p-6 border-zinc-200 dark:border-zinc-800/50" hoverEffect>
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}>
                <Icon size={24} strokeWidth={2.5} />
              </div>
              <span className="text-[10px] font-black px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500">
                LIVE
              </span>
            </div>
            <div>
              <p className="text-[11px] font-black text-zinc-500 uppercase tracking-widest mb-1">{stat.label}</p>
              <h3 className="text-3xl font-black tracking-tighter">{stat.value}</h3>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs">
              <div className="flex items-center font-bold text-emerald-500">
                <TrendingUp size={14} className="mr-1" /> {stat.trend}
              </div>
              <span className="text-zinc-400 font-medium italic">vs last shift</span>
            </div>
          </GlassCard>
        );
      })}
    </div>
  );
};
