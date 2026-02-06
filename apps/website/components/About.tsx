import React from 'react';
import { useConfig, GlassCard } from 'ui';
import { DICTIONARY } from 'shared';
import { Footprints, Users, Code, Skull, Zap, ShieldAlert, Target, HeartCrack } from 'lucide-react';

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
      <div className="relative pt-12 pb-20 px-4 md:px-8 overflow-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 space-y-8">
            <GlassCard variant="solid" className="p-8 border-l-4 border-l-brand-600">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-zinc-200 dark:bg-zinc-800 bg-[url('https://api.dicebear.com/7.x/avataaars/svg?seed=Amin')] bg-cover" />
                <div>
                  <h3 className="text-xl font-black text-zinc-900 dark:text-white">AMIN MAGHFURI</h3>
                  <p className="text-xs font-bold text-brand-600 tracking-widest uppercase">The Founder</p>
                </div>
              </div>
              <blockquote className="text-zinc-700 dark:text-zinc-300 italic font-medium leading-relaxed">
                "{text.aboutFounderQuote}"
              </blockquote>
            </GlassCard>

            <div className="grid gap-4">
              {[
                { t: text.aboutPhil1Title, d: text.aboutPhil1Desc, i: Target },
                { t: text.aboutPhil2Title, d: text.aboutPhil2Desc, i: ShieldAlert },
                { t: text.aboutPhil3Title, d: text.aboutPhil3Desc, i: HeartCrack },
              ].map((p, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-brand-500/50 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <p.i size={18} className="text-brand-500" />
                    <h4 className="font-bold text-zinc-900 dark:text-white uppercase text-sm">{p.t}</h4>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{p.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-brand-500 via-zinc-300 dark:via-zinc-800 to-transparent" />
            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative pl-20 group">
                  <div className={`absolute left-0 w-16 h-16 rounded-2xl flex items-center justify-center border-4 border-white dark:border-black shadow-xl z-10 transition-transform group-hover:scale-110 ${item.color}`}>
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