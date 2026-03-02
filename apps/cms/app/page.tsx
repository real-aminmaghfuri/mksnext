
"use client";

import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { GlassCard } from 'ui';
import { Eye, ThumbsUp, TrendingUp, FileText } from 'lucide-react';

export default function CMSDashboard() {
  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white overflow-hidden">
      {/* Main Content First */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
         <Header title="Content Overview" />
         <main className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar relative z-10">
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    { [
                        { label: "Total Views", value: "124.5K", icon: Eye, color: "text-blue-500" },
                        { label: "Avg Read Time", value: "4m 12s", icon: TrendingUp, color: "text-emerald-500" },
                        { label: "Engagement", value: "8.4%", icon: ThumbsUp, color: "text-orange-500" },
                        { label: "Published", value: "142", icon: FileText, color: "text-rose-500" },
                    ].map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <GlassCard key={idx} variant="solid" className="p-6 flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">{stat.label}</p>
                                    <h3 className="text-2xl font-black">{stat.value}</h3>
                                </div>
                                <div className={`p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 ${stat.color}`}>
                                    <Icon size={24} />
                                </div>
                            </GlassCard>
                        );
                    })}
            </div>

            <div className="text-center py-20 bg-zinc-100 dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 border-dashed">
                <h3 className="text-xl font-bold text-zinc-400">Content Performance Chart</h3>
                <p className="text-sm text-zinc-500">Connecting to Google Analytics 4...</p>
            </div>

         </main>
      </div>
      {/* Sidebar Second (Right Side) */}
      <Sidebar />
    </div>
  );
}
