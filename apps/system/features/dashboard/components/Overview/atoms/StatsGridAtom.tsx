
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-3">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <GlassCard key={idx} variant="solid" className="p-3 border-zinc-200 dark:border-zinc-800/50" hoverEffect>
            <div className="flex justify-between items-start mb-2">
              <div className={`p-1.5 rounded-lg bg-gradient-to-br ${stat.color} text-white shadow-lg`}>
                <Icon size={16} strokeWidth={2.5} />
              </div>
              <span className="text-[8px] font-black px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500">
                LIVE
              </span>
            </div>
            <div>
              <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-0.5">{stat.label}</p>
              <h3 className="text-xl font-black tracking-tighter">{stat.value}</h3>
            </div>
            <div className="mt-2 pt-2 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-[9px]">
              <div className="flex items-center font-bold text-emerald-500">
                <TrendingUp size={10} className="mr-1" /> {stat.trend}
              </div>
              <span className="text-zinc-400 font-medium italic">vs last shift</span>
            </div>
          </GlassCard>
        );
      })}
    </div>
  );
};
