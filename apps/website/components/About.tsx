"use client";

import React from 'react';
import { useConfig, GlassCard } from 'ui';
import { DICTIONARY } from 'shared';
import { Footprints, Users, Code, Skull, Zap, ShieldAlert, Target, HeartCrack, Quote } from 'lucide-react';

export const About: React.FC = () => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  // Logic to parse the quote: Heading vs Body
  const quoteHeading = language === 'ID' ? "Jujur-jujuran aja..." : "Let's be honest...";
  const quoteBody = text.aboutFounderQuote.replace(quoteHeading, "").trim();

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
      <div className="relative pt-16 pb-12 px-4 md:px-8">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-brand-600/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h1 className="text-5xl md:text-8xl font-black text-zinc-900 dark:text-white mb-6 tracking-tighter uppercase leading-[0.9]">
            {text.aboutHeading.split(' ').map((word, i) => (
              <span key={i} className={i % 2 !== 0 ? "text-brand-600" : ""}>{word} </span>
            ))}
          </h1>
          <p className="text-lg md:text-2xl text-zinc-600 dark:text-zinc-400 font-medium max-w-3xl mx-auto leading-relaxed">
            {text.aboutTagline}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* 2. The Founder Section with Overlay Quote */}
        <div className="mb-24 relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Portrait Column */}
            <div className="md:col-span-5 lg:col-span-4 group">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-zinc-800 dark:border-zinc-700 shadow-2xl bg-zinc-900">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
                  alt="Amin Maghfuri - Founder" 
                  className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Area Nomor 2: Quote Overlay on Image */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <div className="relative">
                    <Quote className="absolute -top-4 -left-4 w-12 h-12 text-zinc-500/20" />
                    <h4 className="text-xl md:text-2xl font-black text-white mb-3 italic">
                      "{quoteHeading}"
                    </h4>
                    <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-medium">
                      {quoteBody.split('Bisnis tanpa sistem')[0]}
                      <span className="font-black text-white">Bisnis tanpa sistem {quoteBody.split('Bisnis tanpa sistem')[1]}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Column - "Naikkan Blok Nama" */}
            <div className="md:col-span-7 lg:col-span-8 md:pt-12">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-zinc-900 text-brand-500 border border-brand-500/30 text-[10px] font-black tracking-widest uppercase mb-4">
                  <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                  Commanding Officer
               </div>
               
               <h2 className="text-6xl md:text-8xl font-black text-zinc-900 dark:text-white mb-2 tracking-tighter leading-none">
                AMIN <br className="hidden md:block" /> MAGHFURI
               </h2>
               
               <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 font-bold mb-8">
                The Architect of Chaos & Cuan
               </p>

               <div className="flex items-center gap-4 mb-12">
                  <div className="h-[2px] w-12 bg-brand-500" />
                  <span className="font-mono text-sm font-black text-zinc-400 uppercase tracking-[0.2em]">Established 2015</span>
               </div>

               {/* Philosophy Pill Grid */}
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { t: text.aboutPhil1Title, d: text.aboutPhil1Desc, i: Target },
                    { t: text.aboutPhil2Title, d: text.aboutPhil2Desc, i: ShieldAlert },
                  ].map((p, idx) => (
                    <GlassCard key={idx} variant="solid" className="p-5 border-zinc-200 dark:border-zinc-800">
                      <div className="flex items-center gap-3 mb-2 text-brand-500">
                        <p.i size={18} strokeWidth={3} />
                        <h5 className="font-black text-xs uppercase tracking-wider">{p.t}</h5>
                      </div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">{p.d}</p>
                    </GlassCard>
                  ))}
               </div>
            </div>
          </div>
        </div>

        {/* 3. Timeline Section */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-2xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter">
              War Log & Chronicle
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-zinc-300 dark:from-zinc-800 to-transparent" />
          </div>

          <div className="relative">
            {/* Continuous Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />
            
            <div className="space-y-16">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative pl-20 group">
                  {/* Icon Node */}
                  <div className={`absolute left-0 w-16 h-16 rounded-2xl flex items-center justify-center border-4 border-white dark:border-black shadow-lg z-10 transition-all group-hover:scale-110 group-hover:rotate-3 ${item.color}`}>
                    <item.icon size={28} strokeWidth={2.5} />
                  </div>
                  
                  <div className="space-y-2">
                    <span className="inline-block px-2 py-0.5 rounded bg-zinc-900 text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                      {item.year}
                    </span>
                    <h4 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base max-w-2xl">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};