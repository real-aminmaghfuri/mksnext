
"use client";

import React from 'react';
import { Logo, Button } from 'ui';
import { ShieldAlert, RefreshCw, Lock } from 'lucide-react';

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,88,12,0.15)_0%,transparent_70%)] animate-pulse" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
      
      <div className="relative z-10 max-w-2xl px-6 text-center">
        
        {/* Icon Animation */}
        <div className="mb-8 relative inline-block">
            <div className="absolute inset-0 bg-brand-600 blur-[40px] opacity-40 rounded-full" />
            <div className="relative bg-zinc-900 border border-zinc-800 p-6 rounded-3xl shadow-2xl">
                <Logo className="w-20 h-20" />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-brand-600 text-white p-2 rounded-full border-4 border-black">
                <RefreshCw size={20} className="animate-spin" />
            </div>
        </div>

        {/* Text Content */}
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 leading-none">
          System <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-red-600">Upgrade</span>
        </h1>
        
        <div className="h-1.5 w-32 bg-zinc-800 rounded-full mx-auto mb-8 overflow-hidden">
            <div className="h-full bg-brand-500 w-1/3 animate-[shimmer_2s_infinite]" />
        </div>

        <p className="text-xl text-zinc-400 font-medium mb-10 leading-relaxed">
          Markas Pusat sedang melakukan <strong>upgrade infrastruktur besar-besaran</strong> untuk performa tempur yang lebih sadis.
          <br className="hidden md:block"/>
          Jangan panik, data aman. Kami akan kembali online dalam waktu singkat.
        </p>

        {/* Access Code / Login for Internal Team */}
        <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm max-w-sm mx-auto">
            <div className="flex items-center gap-3 text-zinc-500 mb-4 justify-center">
                <Lock size={16} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Internal Access Only</span>
            </div>
            <a href="https://system.mesinkasirsolo.com" target="_blank" rel="noopener noreferrer">
                <Button fullWidth variant="outline" className="border-zinc-700 hover:bg-zinc-800 text-zinc-300">
                    LOGIN SYSTEM HQ
                </Button>
            </a>
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-zinc-600 text-xs font-mono">
            <p>OPERATION ID: #MKS-MAINT-2024</p>
            <p>ESTIMATED UPTIME: SOON</p>
        </div>

      </div>
    </div>
  );
}
