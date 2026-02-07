"use client";

import React from 'react';
import { useConfig, Button, Logo } from 'ui';
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

      {/* CONCEPT 1 VISUAL: Giant Watermark of the Blaster Logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-0">
        <Logo className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 w-full">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-900/20 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-sm font-bold animate-fade-in-up mx-auto">
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
            <p className="text-lg lg:text-xl text-zinc-700 dark:text-zinc-400 max-w-2xl mx-auto font-medium leading-relaxed">
              {text.heroSubtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </div>
    </section>
  );
};
