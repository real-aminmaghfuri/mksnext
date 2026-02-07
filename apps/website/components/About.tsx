"use client";

import React from 'react';
import { useConfig, GlassCard } from 'ui';
import { DICTIONARY } from 'shared';
import { Footprints, Users, Code, Skull, Zap, ShieldAlert, Target, HeartCrack, Quote } from 'lucide-react';

export const About: React.FC = () => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  // Logic to parse the quote: Heading vs Body
  const quoteHeading = language === 'ID' ? "Jujur-jujuran aja..." : "To be honest...";
  const quoteBody = text.aboutFounderQuote.replace(quoteHeading, "").trim();

  // Robustly handle the emphasized text in the quote
  const emphasisTrigger = language === 'ID' ? 'Bisnis tanpa sistem' : 'Business without a strong system';
  const parts = quoteBody.split(emphasisTrigger);
  const beforeEmphasis = parts[0] || "";
  const afterEmphasis = parts[1] || "";

  const timeline = [
    { year: '2015', title: text.hist2015Title, desc: text.hist2015Desc, icon: Footprints, color: 'text-zinc-500 bg-zinc-100 dark:bg-zinc-800' },
    { year: '2018', title: text.hist2018Title, desc: text.hist2018Desc, icon: Users, color: 'text-blue-600 bg-blue-100 dark:bg-blue-900/20' },
    { year: '2021', title: text.hist2021Title, desc: text.hist2021Desc, icon: Code, color: 'text-brand-600 bg-brand-100 dark:bg-brand-900/20' },
    { year: '2022', title: text.hist2022Title, desc: text.hist2022Desc, icon: Skull, color: 'text-red-600 bg-red-100 dark:bg-red-900/20' },
    { year: '2025', title: text.hist2025Title, desc: text.hist2025Desc, icon: Zap, color: 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/20' },
  ];

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-500 pb-24 overflow-x-hidden">
      {/* 1. Header Section (Hero of About Page) - Reduced spacing from pb-52 to pb-16/20 */}
      <div className="relative pt-24 pb-16 md:pb-20 px-4 md:px-8 border-b border-zinc-200/10 dark:border-white/5">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-brand-600/10 to-transparent rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h1 className="text-5xl md:text-8xl font-black text-zinc-900 dark:text-white mb-8 tracking-tighter uppercase leading-[0.85]">
            {text.aboutHeading.split(' ').map((word, i) => (
              <span key={i} className={i % 2 !== 0 ? "text-brand-600" : ""}>{word} </span>
            ))}
          </h1>
          <p className="text-lg md:text-2xl text-zinc-600 dark:text-zinc-400 font-medium max-w-3xl mx-auto leading-relaxed opacity-90">
            {text.aboutTagline}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* 2. The Founder Section - Reduced top margin from mt-44 to mt-12/16 */}
        <div className="mt-12 md:mt-16 mb-32 relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-start">
            
            {/* Portrait Column */}
            <div className="md:col-span-6 lg:col-span-6 md:sticky md:top-28">
              <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden border-2 border-zinc-800 dark:border-zinc-700 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] bg-zinc-900 group">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
                  alt="Amin Maghfuri - Founder" 
                  className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>
            </div>

            {/* Info Column */}
            <div className="md:col-span-6 lg:col-span-6 flex flex-col justify-center">
               {/* Name Block */}
               <div className="mb-6">
                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 text-brand-500 border border-brand-500/30 text-[10px] font-black tracking-widest uppercase mb-4">
                    <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                    Commanding Officer
                 </div>
                 
                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 dark:text-white mb-2 tracking-tighter leading-none uppercase">
                  AMIN MAGHFURI
                 </h2>
                 
                 <p className="text-base md:text-xl text-zinc-500 dark:text-zinc-400 font-bold mb-8 italic opacity-70">
                  The Architect of Chaos & Cuan
                 </p>
               </div>

               {/* Quote Block */}
               <div className="relative">
                  <GlassCard variant="solid" className="p-8 md:p-10 bg-zinc-900/40 border-brand-500/20 relative overflow-hidden shadow-2xl">
                    <Quote className="absolute -top-4 -left-4 w-24 h-24 text-brand-500/5 rotate-12" />
                    <h3 className="text-xl md:text-3xl font-black text-brand-500 mb-6 italic tracking-tight">
                      "{quoteHeading}"
                    </h3>
                    <div className="space-y-6">
                      <p className="text-sm md:text-lg text-zinc-300 leading-relaxed font-medium">
                        {beforeEmphasis}
                      </p>
                      <div className="p-5 rounded-2xl bg-brand-600/10 border-l-4 border-brand-600 shadow-inner">
                        <p className="text-base md:text-xl text-white font-black italic tracking-tight leading-snug">
                          {emphasisTrigger} {afterEmphasis}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                  
                  {/* Battle-Tested Text */}
                  <div className="flex items-center gap-6 mt-16">
                    <div className="h-[3px] w-16 bg-brand-500" />
                    <span className="font-mono text-xs md:text-lg font-black text-zinc-400 uppercase tracking-[0.4em]">Battle-Tested Since 2015</span>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* 3. Philosophy Section */}
        <div className="mb-40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: text.aboutPhil1Title, d: text.aboutPhil1Desc, i: Target },
              { t: text.aboutPhil2Title, d: text.aboutPhil2Desc, i: ShieldAlert },
              { t: text.aboutPhil3Title, d: text.aboutPhil3Desc, i: HeartCrack },
            ].map((p, idx) => {
              const Icon = p.i;
              return (
                <GlassCard key={idx} variant="solid" className="p-10 border-zinc-200 dark:border-zinc-800 hover:border-brand-500/30 transition-all hover:-translate-y-2">
                  <div className="flex items-center gap-5 mb-6 text-brand-500">
                    <div className="p-4 rounded-2xl bg-brand-500/10">
                      <Icon size={28} strokeWidth={2.5} />
                    </div>
                    <h5 className="font-black text-base md:text-lg uppercase tracking-wider">{p.t}</h5>
                  </div>
                  <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">{p.d}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>

        {/* 4. Timeline Section */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-6 mb-20">
            <h3 className="text-4xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter">
              War Log & Chronicle
            </h3>
            <div className="flex-1 h-[2px] bg-gradient-to-r from-brand-600/30 via-zinc-800 to-transparent" />
          </div>

          <div className="relative">
            <div className="absolute left-10 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />
            
            <div className="space-y-24">
              {timeline.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="relative pl-28 group">
                    <div className={`absolute left-0 w-20 h-20 rounded-3xl flex items-center justify-center border-4 border-white dark:border-black shadow-2xl z-10 transition-all group-hover:scale-110 group-hover:rotate-6 ${item.color}`}>
                      <Icon size={32} strokeWidth={2.5} />
                    </div>
                    
                    <div className="space-y-4">
                      <span className="inline-block px-4 py-1.5 rounded-lg bg-zinc-900 text-[11px] font-black text-brand-500 uppercase tracking-[0.2em] border border-brand-500/20">
                        {item.year}
                      </span>
                      <h4 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-xl max-w-2xl font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};