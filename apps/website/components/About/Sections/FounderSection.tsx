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
    <div className="mt-8 md:mt-12 mb-32 relative">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* Portrait Column */}
        <div className="md:col-span-4 flex flex-col h-full">
          <div className="relative w-full h-full min-h-[450px] md:min-h-0 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl bg-zinc-900 group">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
              alt="Amin Maghfuri" 
              className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
          </div>
        </div>

        {/* Info Column */}
        <div className="md:col-span-8 flex flex-col">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-2 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-brand-600 dark:text-brand-500 border border-brand-500/20 text-[10px] font-bold tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
              Commanding Officer
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white mb-1 tracking-tighter leading-none uppercase">
              AMIN MAGHFURI
            </h2>
            <p className="text-base md:text-xl text-zinc-500 dark:text-zinc-400 font-bold italic opacity-70">
              The Architect of Chaos & Cuan
            </p>
          </div>

          <GlassCard variant="solid" className="flex-1 p-8 md:p-10 bg-white/50 dark:bg-zinc-900/40 border-brand-500/10 relative overflow-hidden shadow-xl w-full flex flex-col justify-center mb-8">
            <Quote className="absolute -top-8 -left-8 w-24 h-24 text-brand-500/5 rotate-12" />
            <h3 className="text-xl md:text-2xl font-bold text-brand-600 dark:text-brand-500 mb-6 italic tracking-tight">
              "{quote.heading}"
            </h3>
            <div className="space-y-6">
              <p className="text-sm md:text-base lg:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium tracking-tight">
                {quote.bodyPrefix}
              </p>
              <div className="p-5 md:px-8 md:py-7 rounded-2xl bg-brand-600/5 dark:bg-brand-600/10 border-l-[6px] border-brand-600 shadow-sm">
                <p className="text-lg md:text-2xl lg:text-3xl text-zinc-900 dark:text-white font-extrabold italic tracking-tight leading-snug">
                  {quote.emphasis} {quote.bodySuffix}
                </p>
              </div>
            </div>
          </GlassCard>

          <div className="flex items-center gap-6 pb-2">
            <div className="h-[2px] w-12 md:w-24 bg-brand-500" />
            <span className="font-mono text-[10px] md:text-xs font-black text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.4em]">Battle-Tested Since 2015</span>
          </div>
        </div>
      </div>
    </div>
  );
};