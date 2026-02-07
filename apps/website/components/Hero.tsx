"use client";

import React from 'react';
import { useConfig, Button, GlassCard } from 'ui';
import { DICTIONARY } from 'shared';
import { Rocket, MonitorPlay, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[128px] animate-pulse delay-1000" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] mask-image-gradient" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-900/20 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-sm font-bold animate-fade-in-up">
              <Zap size={16} className="fill-brand-500 text-brand-500" />
              <span>System v2.0: SIAP TEMPUR</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight text-zinc-900 dark:text-white drop-shadow-sm">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-red-600 dark:from-brand-500 dark:to-red-500">
                PT MESIN KASIR SOLO
              </span>
              <br />
              {text.heroTitle}
            </h1>
            <p className="text-lg lg:text-xl text-zinc-700 dark:text-zinc-400 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              {text.heroSubtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group shadow-brand-500/25">
                <Rocket className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                {text.ctaPrimary}
              </Button>
              <Button variant="secondary" size="lg" className="border-2">
                <MonitorPlay className="mr-2 h-5 w-5" />
                {text.ctaSecondary}
              </Button>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg lg:max-w-xl">
            <GlassCard hoverEffect className="p-4 aspect-square flex items-center justify-center bg-white/50 dark:bg-zinc-900/50">
              <div className="relative w-full h-full bg-zinc-900 rounded-xl border border-zinc-700 flex flex-col overflow-hidden shadow-2xl">
                <div className="h-full bg-zinc-950 relative overflow-hidden">
                   <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 grayscale" />
                   <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                   
                   <div className="absolute bottom-0 left-0 w-full p-8">
                      <div className="flex items-end justify-between">
                         <div>
                            <p className="text-brand-500 font-mono text-xs mb-1">SYSTEM STATUS</p>
                            <h3 className="text-3xl font-bold text-white">READY TO KILL</h3>
                         </div>
                         <div className="w-12 h-12 bg-gradient-to-tr from-brand-500 to-red-600 rounded-full animate-pulse blur-sm" />
                      </div>
                   </div>
                </div>
                <div className="h-16 bg-zinc-900 border-t border-zinc-800 flex items-center justify-center">
                    <div className="text-zinc-500 font-bold tracking-widest text-xs">MKS WAR MACHINE</div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};