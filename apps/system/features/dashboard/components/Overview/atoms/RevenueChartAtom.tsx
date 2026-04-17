
"use client";
import React from 'react';
import { GlassCard } from 'ui';
import { Activity } from 'lucide-react';

export const RevenueChartAtom: React.FC = () => {
  return (
    <GlassCard variant="solid" className="lg:col-span-2 p-5 min-h-[350px] flex flex-col border-zinc-200 dark:border-zinc-800/50">
      <div className="flex justify-between items-center mb-6">
        <h4 className="font-black text-base uppercase tracking-tight">Revenue Analytics</h4>
        <div className="flex gap-1.5">
          {['24H', '7D', '1M'].map(t => (
            <button key={t} className={`px-2.5 py-0.5 text-[9px] font-black rounded-md border ${t === '24H' ? 'bg-zinc-900 text-white border-zinc-800' : 'bg-transparent text-zinc-500 border-zinc-200 dark:border-zinc-800'}`}>
              {t}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 rounded-xl border-2 border-dashed border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20 flex flex-col items-center justify-center text-center p-6">
        <Activity className="w-10 h-10 text-zinc-300 dark:text-zinc-700 mb-3 animate-pulse" />
        <p className="font-black text-zinc-400 dark:text-zinc-600 uppercase tracking-widest text-xs">Visualizing Battlefield Data...</p>
        <p className="text-[10px] text-zinc-400 mt-1 max-w-xs">Connecting to Solo region POS nodes to aggregate real-time revenue streams.</p>
      </div>
    </GlassCard>
  );
};
