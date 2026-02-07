import React from 'react';
import { useConfig, GlassCard } from 'ui';
import { DICTIONARY } from 'shared';
import { Footprints, Users, Code, Skull, Zap, ShieldAlert, Target, HeartCrack, Quote } from 'lucide-react';

export const About: React.FC = () => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

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
        {/* 2. The Founder Portrait Section */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-brand-500/30 shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
                  alt="Amin Maghfuri - Founder" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-xs font-black tracking-widest uppercase mb-4">
                Commanding Officer
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white mb-2 tracking-tighter">
                AMIN MAGHFURI
              </h2>
              <p className="text-xl text-zinc-500 dark:text-zinc-400 font-bold mb-6">
                The Architect of Chaos & Cuan
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="w-12 h-[2px] bg-brand-500" />
                <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Since 2015</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. The Hero Quote - Dedicated Section Below Portrait */}
        <div className="mb-24">
          <GlassCard variant="solid" className="p-8 md:p-16 relative overflow-hidden bg-zinc-900 text-white border-brand-600/50">
             <Quote className="absolute -top-4 -left-4 w-32 h-32 text-brand-600/10 rotate-12" />
             <Quote className="absolute -bottom-4 -right-4 w-32 h-32 text-red-600/10 -rotate-12" />
             
             <div className="relative z-10 text-center max-w-4xl mx-auto">
               <p className="text-2xl md:text-4xl font-black italic leading-[1.3] md:leading-[1.4] tracking-tight mb-8">
                 "{text.aboutFounderQuote}"
               </p>
               <div className="flex items-center justify-center gap-2">
                 <div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center">
                    <Zap size={16} fill="white" className="text-white" />
                 </div>
                 <span className="font-bold text-brand-500 tracking-widest">STREET-TESTED PHILOSOPHY</span>
               </div>
             </div>
          </GlassCard>
        </div>

        {/* 4. Philosophy & Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-black text-zinc-900 dark:text-white uppercase tracking-wider mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-brand-500 rounded-full" />
              Core Operating Values
            </h3>
            <div className="grid gap-4">
              {[
                { t: text.aboutPhil1Title, d: text.aboutPhil1Desc, i: Target },
                { t: text.aboutPhil2Title, d: text.aboutPhil2Desc, i: ShieldAlert },
                { t: text.aboutPhil3Title, d: text.aboutPhil3Desc, i: HeartCrack },
              ].map((p, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-brand-500/50 transition-all hover:translate-x-1">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center">
                      <p.i size={20} className="text-brand-500" />
                    </div>
                    <h4 className="font-bold text-zinc-900 dark:text-white uppercase text-sm">{p.t}</h4>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <h3 className="text-xl font-black text-zinc-900 dark:text-white uppercase tracking-wider mb-8 px-4">
              War Log & Chronicle
            </h3>
            <div className="absolute left-8 top-16 bottom-8 w-0.5 bg-gradient-to-b from-brand-500 via-zinc-300 dark:via-zinc-800 to-transparent" />
            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative pl-20 group">
                  <div className={`absolute left-0 w-16 h-16 rounded-2xl flex items-center justify-center border-4 border-white dark:border-black shadow-xl z-10 transition-transform group-hover:scale-110 group-hover:rotate-6 ${item.color}`}>
                    <item.icon size={28} strokeWidth={2.5} />
                  </div>
                  
                  <GlassCard className="p-6 md:p-8" hoverEffect>
                    <span className="inline-block px-3 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-xs font-black text-zinc-500 mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base">
                      {item.desc}
                    </p>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};