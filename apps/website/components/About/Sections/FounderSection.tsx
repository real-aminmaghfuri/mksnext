import React from 'react';
import { GlassCard } from 'ui';
import { Quote } from 'lucide-react';

interface FounderSectionProps {
  quote: {
    heading: string;
    bodyPrefix: string;
    emphasis: string;
    bodySuffix: string;
  };
}

export const FounderSection: React.FC<FounderSectionProps> = ({ quote }) => {
  return (
    <div className="mt-8 md:mt-16 mb-32 relative">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">
        
        {/* Portrait Column - 5/12 Grid (Lebih lebar biar gak kurus) */}
        <div className="md:col-span-5 lg:col-span-5">
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl bg-zinc-900 group">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
              alt="Amin Maghfuri" 
              className="w-full h-full object-cover object-center grayscale transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay gradient subtle */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
          </div>
        </div>

        {/* Info Column - 7/12 Grid - Stretching to match Image Bottom */}
        <div className="md:col-span-7 lg:col-span-7 flex flex-col self-stretch pt-2">
          {/* Name Block */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-brand-600 dark:text-brand-500 border border-brand-500/20 text-[10px] font-bold tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
              Commanding Officer
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-zinc-900 dark:text-white mb-2 tracking-tighter leading-none uppercase">
              AMIN MAGHFURI
            </h2>
            <p className="text-lg md:text-2xl text-zinc-500 dark:text-zinc-400 font-bold italic opacity-70">
              The Architect of Chaos & Cuan
            </p>
          </div>

          {/* Quote Block - Optimized with flex-1 to fill vertical gap */}
          <div className="flex-1 flex flex-col mb-10">
            <GlassCard variant="solid" className="flex-1 p-8 md:p-12 bg-white/50 dark:bg-zinc-900/40 border-brand-500/10 relative overflow-hidden shadow-xl w-full flex flex-col justify-center">
              <Quote className="absolute -top-10 -left-10 w-32 h-32 text-brand-500/5 rotate-12" />
              
              <h3 className="text-xl md:text-2xl font-bold text-brand-600 dark:text-brand-500 mb-6 italic tracking-tight">
                "{quote.heading}"
              </h3>
              
              <div className="space-y-6">
                <p className="text-base md:text-lg lg:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium tracking-tight">
                  {quote.bodyPrefix}
                </p>
                
                <div className="p-6 md:px-10 md:py-8 rounded-3xl bg-brand-600/5 dark:bg-brand-600/10 border-l-[8px] border-brand-600 shadow-sm">
                  <p className="text-lg md:text-2xl lg:text-3xl text-zinc-900 dark:text-white font-black italic tracking-tight leading-snug">
                    {quote.emphasis} {quote.bodySuffix}
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Battle-Tested Bar - Bottom Aligned */}
          <div className="flex items-center gap-6 mt-auto">
            <div className="h-[2px] w-12 md:w-32 bg-brand-500" />
            <span className="font-mono text-[10px] md:text-xs font-black text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.5em]">Battle-Tested Since 2015</span>
          </div>
        </div>
      </div>
    </div>
  );
};