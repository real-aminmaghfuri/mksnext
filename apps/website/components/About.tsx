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
      {/* 1. Header Section */}
      <div className="relative pt-24 pb-8 md:pb-12 border-b border-zinc-200/10 dark:border-white/5">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-brand-600/10 to-transparent rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center relative z-10">
          <h1 className="text-5xl md:text-8xl font-black text-zinc-900 dark:text-white mb-6 tracking-tighter uppercase leading-[0.85]">
            {text.aboutHeading.split(' ').map((word, i) => (
              <span key={i} className={i % 2 !== 0 ? "text-brand-600" : ""}>{word} </span>
            ))}
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-medium max-w-3xl mx-auto leading-relaxed opacity-80">
            {text.aboutTagline}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* 2. The Founder Section - Locked Proportions */}
        <div className="mt-8 md:mt-12 mb-32 relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Portrait Column - Ratio 4/12 (Standard Portrait) */}
            <div className="md:col-span-4 flex flex-col h-full">
              <div className="relative w-full h-full min-h-[400px] md:min-h-0 rounded-2xl overflow-hidden border-2 border-zinc-800 dark:border-zinc-700 shadow-2xl bg-zinc-900 group">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
                  alt="Amin Maghfuri - Founder" 
                  className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>
            </div>

            {/* Info Column - Ratio 8/12 (Compact Layout) */}
            <div className="md:col-span-8 flex flex-col pt-2">
               {/* Name Block - Compact */}
               <div className="mb-2">
                 <div className="inline-flex items-center gap-2 px-2 py-1 rounded-lg bg-zinc-900 text-brand-500 border border-brand-500/30 text-[8px] font-black tracking-widest uppercase mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
                    Commanding Officer
                 </div>
                 
                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-zinc-900 dark:text-white mb-0.5 tracking-tighter leading-none uppercase">
                  AMIN MAGHFURI
                 </h2>
                 
                 <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 font-bold mb-4 italic opacity-70">
                  The Architect of Chaos & Cuan
                 </p>
               </div>

               {/* Quote Block - Compact Padding */}
               <div className="relative w-full mb-6">
                  <GlassCard variant="solid" className="p-6 md:p-8 bg-zinc-900/40 border-brand-500/20 relative overflow-hidden shadow-2xl w-full">
                    <Quote className="absolute -top-4 -left-4 w-16 h-16 text-brand-500/5 rotate-12" />
                    <h3 className="text-base md:text-lg font-black text-brand-500 mb-3 italic tracking-tight">
                      "{quoteHeading}"
                    </h3>
                    <div className="space-y-3">
                      <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-medium">
                        {beforeEmphasis}
                      </p>
                      {/* Forced Single Line Bold Quote */}
                      <div className="p-3 md:px-5 md:py-3.5 rounded-xl bg-brand-600/10 border-l-4 border-brand-600 shadow-inner">
                        <p className="text-sm md:text-base lg:text-lg text-white font-black italic tracking-tighter leading-tight whitespace-normal md:whitespace-nowrap overflow-hidden text-ellipsis">
                          {emphasisTrigger} {afterEmphasis}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
               </div>

               {/* Battle-Tested Text - Fixed Bottom Alignment */}
               <div className="mt-auto flex items-center gap-6 pb-2">
                  <div className="h-[2px] w-12 md:w-20 bg-brand-500" />
                  <span className="font-mono text-[10px] md:text-xs font-black text-zinc-400 uppercase tracking-[0.4em]">Battle-Tested Since 2015</span>
               </div>
            </div>
          </div>
        </div>

        {/* 3. Philosophy Section */}
        <div className="mb-40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { t: text.aboutPhil1Title, d: text.aboutPhil1Desc, i: Target },
              { t: text.aboutPhil2Title, d: text.aboutPhil2Desc, i: ShieldAlert },
              { t: text.aboutPhil3Title, d: text.aboutPhil3Desc, i: HeartCrack },
            ].map((p, idx) => {
              const Icon = p.i;
              return (
                <GlassCard key={idx} variant="solid" className="p-8 md:p-10 border-zinc-200 dark:border-zinc-800 hover:border-brand-500/30 transition-all hover:-translate-y-2">
                  <div className="flex items-center gap-4 mb-6 text-brand-500">
                    <div className="p-3 rounded-xl bg-brand-500/10">
                      <Icon size={24} strokeWidth={2.5} />
                    </div>
                    <h5 className="font-black text-sm md:text-base uppercase tracking-wider">{p.t}</h5>
                  </div>
                  <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">{p.d}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>

        {/* 4. Timeline Section */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <h3 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter">
              War Log & Chronicle
            </h3>
            <div className="flex-1 h-[2px] bg-gradient-to-r from-brand-600/30 via-zinc-800 to-transparent" />
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-10 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />
            
            <div className="space-y-16 md:space-y-24">
              {timeline.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="relative pl-20 md:pl-28 group">
                    <div className={`absolute left-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center border-4 border-white dark:border-black shadow-2xl z-10 transition-all group-hover:scale-110 group-hover:rotate-6 ${item.color}`}>
                      <Icon size={28} strokeWidth={2.5} className="md:size-32" />
                    </div>
                    
                    <div className="space-y-2">
                      <span className="inline-block px-3 py-1 rounded-lg bg-zinc-900 text-[10px] font-black text-brand-500 uppercase tracking-[0.2em] border border-brand-500/20">
                        {item.year}
                      </span>
                      <h4 className="text-2xl md:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base md:text-xl max-w-3xl font-medium">
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