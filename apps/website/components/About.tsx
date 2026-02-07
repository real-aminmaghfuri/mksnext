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
        {/* 2. The Founder Section - UPDATED LAYOUT */}
        <div className="mt-8 md:mt-16 mb-32 relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Portrait Column - 5/12 Grid (Wider) */}
            <div className="md:col-span-5 lg:col-span-5">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl bg-zinc-900 group">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
                  alt="Amin Maghfuri - Founder" 
                  className="w-full h-full object-cover object-center grayscale transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>
            </div>

            {/* Info Column - 7/12 Grid - Removed h-full/flex-col stretch */}
            <div className="md:col-span-7 lg:col-span-7 flex flex-col pt-2">
               {/* Name Block */}
               <div className="mb-6 md:mb-8">
                 <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-brand-600 dark:text-brand-500 border border-brand-500/20 text-[10px] font-bold tracking-widest uppercase mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
                    Commanding Officer
                 </div>
                 
                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-zinc-900 dark:text-white mb-2 tracking-tighter leading-none uppercase">
                  AMIN MAGHFURI
                 </h2>
                 
                 <p className="text-base md:text-xl text-zinc-500 dark:text-zinc-400 font-bold italic opacity-70">
                  The Architect of Chaos & Cuan
                 </p>
               </div>

               {/* Quote Block - NO CONTAINER (Removed GlassCard) */}
               <div className="mb-10 relative">
                  <Quote className="absolute -top-6 -left-6 w-20 h-20 text-brand-500/5 rotate-12 z-0" />
                  
                  <div className="relative z-10">
                    <h3 className="text-lg md:text-xl font-bold text-brand-600 dark:text-brand-500 mb-4 italic tracking-tight">
                      "{quoteHeading}"
                    </h3>
                    
                    <div className="space-y-6">
                      <p className="text-sm md:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium tracking-tight">
                        {beforeEmphasis}
                      </p>
                      
                      {/* Emphasized Quote: ONLY this part has a container/styling */}
                      <div className="p-5 md:px-8 md:py-6 rounded-2xl bg-brand-600/5 dark:bg-brand-600/10 border-l-[6px] border-brand-600 shadow-sm">
                        <p className="text-base md:text-lg lg:text-xl text-zinc-900 dark:text-white font-black italic tracking-tight leading-snug">
                          {emphasisTrigger} {afterEmphasis}
                        </p>
                      </div>
                    </div>
                  </div>
               </div>

               {/* Battle-Tested Bar */}
               <div className="flex items-center gap-6 mt-2">
                  <div className="h-[2px] w-12 md:w-32 bg-brand-500" />
                  <span className="font-mono text-[10px] md:text-xs font-black text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.5em]">Battle-Tested Since 2015</span>
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