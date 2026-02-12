
"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from 'ui';
import { AlertTriangle, Home, MoveLeft } from 'lucide-react';

export default function NotFound() {
  return (
    // STRATEGY: Fixed + Z-Index 100 to cover the underlying Layout (Navbar/Footer)
    // Updated Background: Adaptive Zinc-50 (Light) / Black (Dark)
    <div className="fixed inset-0 z-[100] bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white flex flex-col items-center justify-center overflow-hidden text-center px-6 transition-colors duration-500">
      
      {/* Background FX - Adaptive Opacity */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,88,12,0.05)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_center,rgba(234,88,12,0.15)_0%,transparent_50%)] animate-pulse pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 dark:opacity-20 pointer-events-none" />
      
      {/* Glitchy 404 Background Text - Watermark Style */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
        <h1 className="text-[120px] md:text-[300px] font-black leading-none text-zinc-200 dark:text-zinc-900 opacity-60 dark:opacity-50 blur-sm tracking-tighter">
            404
        </h1>
      </div>

      <div className="relative z-10 max-w-2xl backdrop-blur-md p-8 rounded-3xl border border-zinc-200 dark:border-white/5 bg-white/60 dark:bg-black/20 shadow-xl dark:shadow-none">
        
        <div className="mb-6 inline-flex p-4 rounded-2xl bg-red-50 dark:bg-gradient-to-br dark:from-red-600/20 dark:to-orange-600/20 border border-red-200 dark:border-red-500/30 shadow-[0_0_30px_rgba(220,38,38,0.1)] dark:shadow-[0_0_30px_rgba(220,38,38,0.2)]">
            <AlertTriangle size={40} className="text-red-600 dark:text-red-500" strokeWidth={1.5} />
        </div>

        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-zinc-900 dark:text-white leading-[0.9]">
            JALUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-500 dark:to-orange-600">BUNTU</span>
        </h2>

        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-medium mb-10 max-w-md mx-auto leading-relaxed">
            Halaman yang lo cari kayaknya udah diculik intel musuh, atau emang gak pernah ada dari awal.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
                <Button size="lg" className="shadow-2xl shadow-brand-500/20 font-black tracking-widest uppercase px-8">
                    <Home size={18} className="mr-2" /> BALIK MARKAS
                </Button>
            </Link>
            <button 
                onClick={() => window.history.back()}
                className="px-6 py-3 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-600 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white font-bold uppercase tracking-widest text-xs transition-all flex items-center gap-2 shadow-sm dark:shadow-none"
            >
                <MoveLeft size={16} /> MUNDUR
            </button>
        </div>

        {/* Tech Footer */}
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-white/5 font-mono text-[10px] text-zinc-400 dark:text-zinc-600 uppercase tracking-[0.2em] flex flex-col gap-1">
            <p>ERROR_CODE: PAGE_MISSING</p>
            <p>SYSTEM_STATUS: COMPROMISED</p>
        </div>

      </div>
    </div>
  );
}
