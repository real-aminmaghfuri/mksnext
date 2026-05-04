
"use client";

import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { MobileNav } from '../components/MobileNav';
import { GlassCard } from 'ui';
import { Users, Handshake, TrendingUp, Wallet } from 'lucide-react';

export default function MitraDashboard() {
  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white overflow-hidden text-sm">
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
         <Header title="Mitra Command Center" />
         <main className="flex-1 overflow-y-auto p-4 md:p-6 custom-scrollbar relative z-10">
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    { [
                        { label: "Total Partner", value: "42", icon: Users, color: "text-blue-500" },
                        { label: "Aktifitas", value: "128", icon: TrendingUp, color: "text-emerald-500" },
                        { label: "Deal Pending", value: "12", icon: Handshake, color: "text-orange-500" },
                        { label: "Revenue Share", value: "Rp 12.5M", icon: Wallet, color: "text-rose-500" },
                    ].map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <GlassCard key={idx} variant="solid" className="p-4 border-zinc-200 dark:border-zinc-800/50 flex items-center justify-between" hoverEffect>
                                <div>
                                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">{stat.label}</p>
                                    <h3 className="text-xl font-black tracking-tighter">{stat.value}</h3>
                                </div>
                                <div className={`p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 ${stat.color} shadow-sm`}>
                                    <Icon size={20} />
                                </div>
                            </GlassCard>
                        );
                    })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <GlassCard variant="solid" className="lg:col-span-2 p-6 h-[400px] border-zinc-200 dark:border-zinc-800/50 flex flex-col items-center justify-center border-dashed">
                    <h3 className="text-xl font-black text-zinc-300 uppercase tracking-widest">Partner Penetration Map</h3>
                    <p className="text-xs text-zinc-500 font-bold">Integrating Geographic Data...</p>
                </GlassCard>

                <GlassCard variant="solid" className="p-6 border-zinc-200 dark:border-zinc-800/50">
                    <h4 className="font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                        <TrendingUp size={14} className="text-emerald-500" /> Aktifitas Terbaru
                    </h4>
                    <div className="space-y-4">
                        {[
                            { name: "Andi (Solo)", act: "Closing Deal Resto A", time: "2m ago" },
                            { name: "Budi (Jogja)", act: "Maintenance Klien B", time: "15m ago" },
                            { name: "Citra (Semarang)", act: "Prospek Baru", time: "1h ago" },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-3 items-center p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
                                <div className="w-8 h-8 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-600 font-black text-[10px]">
                                    {item.name[0]}
                                </div>
                                <div className="flex-1">
                                    <p className="text-[11px] font-black">{item.name}</p>
                                    <p className="text-[10px] text-zinc-500">{item.act}</p>
                                </div>
                                <span className="text-[9px] text-zinc-400 font-bold">{item.time}</span>
                            </div>
                        ))}
                    </div>
                </GlassCard>
            </div>

         </main>
      </div>
      <Sidebar />
      <MobileNav />
    </div>
  );
}
