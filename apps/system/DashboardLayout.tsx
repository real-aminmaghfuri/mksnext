"use client";

import React from 'react';
import { Sidebar } from './components/Sidebar';
import { MobileNav } from './components/MobileNav';
import { useConfig, GlassCard } from 'ui';
import { DICTIONARY } from 'shared';
import { useData } from './contexts/DataContext';
import { TrendingUp, Users, DollarSign, Activity, RefreshCw } from 'lucide-react';

export const DashboardLayout: React.FC = () => {
  const { language } = useConfig();
  const { stats, recentTransactions, isLoading, refresh } = useData();
  const text = DICTIONARY[language];

  const icons = [DollarSign, Users, TrendingUp];
  
  const formatIDR = (num: number) => {
    return new Intl.NumberFormat('id-ID', { 
      style: 'currency', 
      currency: 'IDR', 
      maximumFractionDigits: 0 
    }).format(num);
  };

  const dynamicStats = [
    { label: text.statsRevenue, value: formatIDR(stats.revenue), trend: '+12.5%', color: 'from-brand-500 to-orange-600' },
    { label: text.statsOrders, value: stats.orders.toString(), trend: '+5.2%', color: 'from-blue-500 to-indigo-600' },
    { label: 'Active POS', value: stats.activePos.toString(), trend: 'Stable', color: 'from-emerald-500 to-teal-600' },
  ];

  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-luxury-dark text-zinc-900 dark:text-white overflow-hidden">
      {/* Sidebar - Desktop Only */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />

        {/* Top Header */}
        <header className="h-20 flex items-center justify-between px-6 md:px-10 border-b border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-black/50 backdrop-blur-md z-20">
          <div>
            <h2 className="text-xl md:text-2xl font-black tracking-tight uppercase">{text.dashboardTitle}</h2>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'}`} />
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                {isLoading ? 'Syncing...' : 'System Online'}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => refresh()} 
              className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors text-zinc-500"
              title="Refresh Data"
            >
              <RefreshCw size={18} className={isLoading ? "animate-spin" : ""} />
            </button>
            <div className="h-8 w-px bg-zinc-200 dark:bg-zinc-800 hidden sm:block" />
            <div className="flex items-center gap-3">
               <div className="text-right hidden sm:block">
                  <p className="text-xs font-black">AMIN MAGHFURI</p>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase">Commander</p>
               </div>
               <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100" alt="Admin" className="w-full h-full object-cover grayscale" />
               </div>
            </div>
          </div>
        </header>

        {/* Scrollable Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6 md:p-10 pb-32 md:pb-10 custom-scrollbar relative z-10">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {dynamicStats.map((stat, idx) => {
              const Icon = icons[idx % icons.length];
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Analytics Placeholder */}
            <GlassCard variant="solid" className="lg:col-span-2 p-8 min-h-[400px] flex flex-col border-zinc-200 dark:border-zinc-800/50">
              <div className="flex justify-between items-center mb-8">
                <h4 className="font-black text-lg uppercase tracking-tight">Revenue Analytics</h4>
                <div className="flex gap-2">
                  {['24H', '7D', '1M'].map(t => (
                    <button key={t} className={`px-3 py-1 text-[10px] font-black rounded-lg border ${t === '24H' ? 'bg-zinc-900 text-white border-zinc-800' : 'bg-transparent text-zinc-500 border-zinc-200 dark:border-zinc-800'}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex-1 rounded-2xl border-2 border-dashed border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20 flex flex-col items-center justify-center text-center p-10">
                <Activity className="w-12 h-12 text-zinc-300 dark:text-zinc-700 mb-4 animate-pulse" />
                <p className="font-black text-zinc-400 dark:text-zinc-600 uppercase tracking-widest text-sm">Visualizing Battlefield Data...</p>
                <p className="text-xs text-zinc-400 mt-2 max-w-xs">Connecting to Solo region POS nodes to aggregate real-time revenue streams.</p>
              </div>
            </GlassCard>

            {/* Recent Transactions */}
            <GlassCard variant="solid" className="p-8 border-zinc-200 dark:border-zinc-800/50 flex flex-col">
              <h4 className="font-black text-lg uppercase tracking-tight mb-8">Feed Transaksi</h4>
              <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar flex-1">
                {recentTransactions.map((tx, i) => (
                  <div key={i} className="group p-4 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 hover:border-brand-500/50 transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-sm font-black tracking-tight">{formatIDR(tx.total)}</p>
                      <span className={`text-[9px] font-black px-1.5 py-0.5 rounded ${tx.status === 'COMPLETED' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'}`}>
                        {tx.status}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold text-zinc-500 uppercase">{tx.paymentMethod}</span>
                      <span className="text-[10px] font-medium text-zinc-400">
                        {tx.createdAt instanceof Date ? tx.createdAt.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : 'Now'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </main>

        {/* Mobile Bottom Nav */}
        <MobileNav />
      </div>
    </div>
  );
};