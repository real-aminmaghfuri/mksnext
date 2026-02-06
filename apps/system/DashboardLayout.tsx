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
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 3 }).format(num);
  };

  const dynamicStats = [
    { label: text.statsRevenue, value: formatIDR(stats.revenue), trend: '+12.5%' },
    { label: text.statsOrders, value: stats.orders.toString(), trend: '+5.2%' },
    { label: 'Active POS', value: stats.activePos.toString(), trend: '0%' },
  ];

  return (
    <div className="flex min-h-screen bg-zinc-100 dark:bg-black text-zinc-900 dark:text-white font-sans selection:bg-brand-500/30">
      <Sidebar />
      <MobileNav />
      
      <main className="flex-1 p-4 md:p-8 pb-24 md:pb-8 overflow-y-auto h-screen relative">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <header className="relative flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-10 pb-6 border-b border-zinc-200 dark:border-zinc-800">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">{text.dashboardTitle}</h2>
            <div className="flex items-center gap-2 mt-2">
              <p className="text-zinc-500 dark:text-zinc-400 font-medium flex items-center gap-2 text-sm md:text-base">
                <Activity className="w-4 h-4 text-brand-500" />
                {isLoading ? 'Syncing Data...' : 'System Operational.'}
              </p>
              <button onClick={() => refresh()} className="p-1 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full transition-colors">
                <RefreshCw size={14} className={isLoading ? "animate-spin" : ""} />
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto justify-end">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-zinc-900 dark:text-white">Admin User</p>
              <p className="text-xs text-zinc-500">Super Administrator</p>
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-zinc-200 dark:bg-zinc-800 bg-[url('https://picsum.photos/200')] bg-cover border-2 border-zinc-300 dark:border-zinc-700 shadow-sm" />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10 relative z-10">
          {dynamicStats.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <GlassCard key={idx} variant="solid" className="p-5 md:p-6" hoverEffect>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-500 mb-2">
                      {stat.label}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-black tracking-tight text-zinc-900 dark:text-white">
                      {stat.value}
                    </h3>
                  </div>
                  <div className="p-3 rounded-xl bg-gradient-to-br from-brand-500 to-red-600 text-white shadow-lg shadow-brand-500/20">
                    <Icon size={20} strokeWidth={2.5} />
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center text-sm font-bold text-emerald-600 dark:text-emerald-400">
                  <TrendingUp size={16} className="mr-1" />
                  {stat.trend} 
                  <span className="text-zinc-400 dark:text-zinc-600 ml-1 font-normal">vs last period</span>
                </div>
              </GlassCard>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
          <GlassCard variant="solid" className="lg:col-span-2 h-80 md:h-96 p-6 flex flex-col">
            <div className="mb-6 flex justify-between items-center">
               <h4 className="text-lg font-bold">Revenue Analytics</h4>
               <button className="text-xs font-bold text-brand-600 border border-brand-200 rounded-lg px-3 py-1 bg-brand-50">EXPORT</button>
            </div>
            <div className="flex-1 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50/50 dark:bg-black/20 flex items-center justify-center">
              <div className="text-center">
                <Activity className="w-10 h-10 text-zinc-300 mx-auto mb-2" />
                <p className="text-zinc-500 font-medium">Visualization Engine Loading...</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard variant="solid" className="h-80 md:h-96 p-6 flex flex-col">
             <h4 className="text-lg font-bold mb-6">Recent Transactions (Realtime)</h4>
             <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                {recentTransactions.map((tx, i) => (
                  <div key={i} className="flex gap-3 p-3 rounded-lg border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:border-brand-200 transition-colors">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${tx.status === 'COMPLETED' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200">
                           {formatIDR(tx.total)}
                        </p>
                        <span className="text-[10px] font-mono bg-zinc-200 dark:bg-zinc-800 px-1 rounded text-zinc-500">
                          {tx.paymentMethod}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-500">
                        {tx.createdAt instanceof Date ? tx.createdAt.toLocaleTimeString() : 'Just now'}
                      </p>
                    </div>
                  </div>
                ))}
                {recentTransactions.length === 0 && (
                  <p className="text-center text-zinc-500 text-sm py-4">No transactions found.</p>
                )}
             </div>
          </GlassCard>
        </div>
      </main>
    </div>
  );
};