
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <GlassCard key={idx} variant="solid" className="p-5 border-zinc-200 dark:border-zinc-800/50" hoverEffect>
            <div className="flex justify-between items-start mb-3">
              <div className={`p-2.5 rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}>
                <Icon size={20} strokeWidth={2.5} />
              </div>
              <span className="text-[9px] font-black px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500">
                LIVE
              </span>
            </div>
            <div>
              <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-0.5">{stat.label}</p>
              <h3 className="text-2xl font-black tracking-tighter">{stat.value}</h3>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-[10px]">
              <div className="flex items-center font-bold text-emerald-500">
                <TrendingUp size={12} className="mr-1" /> {stat.trend}
              </div>
              <span className="text-zinc-400 font-medium italic">vs last shift</span>
            </div>
          </GlassCard>
        );
      })}
    </div>
  );
};
