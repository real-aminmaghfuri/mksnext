
import React from 'react';
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
      {/* Grid: items-start prevents image stretching */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">
        
        {/* Portrait Column - Reduced to 4/12 Grid (Smaller Photo) */}
        <div className="md:col-span-4 lg:col-span-4">
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl bg-zinc-900 group">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
              alt="Amin Maghfuri" 
              className="w-full h-full object-cover object-center grayscale transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
          </div>
        </div>

        {/* Info Column - Increased to 8/12 Grid */}
        <div className="md:col-span-8 lg:col-span-8 flex flex-col pt-2">
          {/* Name Block */}
          <div className="mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-brand-600 dark:text-brand-500 border border-brand-500/20 text-[10px] font-bold tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-50 animate-pulse" />
              Commanding Officer
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-zinc-900 dark:text-white mb-2 tracking-tighter leading-none uppercase">
              AMIN MAGHFURI
            </h2>
            
            <p className="text-base md:text-xl text-zinc-500 dark:text-zinc-400 font-bold italic opacity-70">
              The Architect of Chaos & Cuan
            </p>
          </div>

          {/* Text Content */}
          <div className="mb-6 relative">
            <Quote className="absolute -top-6 -left-6 w-24 h-24 text-brand-500/5 rotate-12 z-0" />
            
            <div className="relative z-10">
              {/* Heading */}
              <h3 className="text-xl md:text-2xl font-bold text-brand-600 dark:text-brand-500 mb-6 italic tracking-tight">
                "{quote.heading}"
              </h3>
              
              <div className="space-y-8">
                {/* Body text */}
                <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium tracking-tight">
                  {quote.bodyPrefix}
                </p>
                
                {/* EMPHASIS CONTAINER - Orange 500 with 80% Opacity + White Text */}
                <div className="p-6 md:px-10 md:py-8 rounded-2xl bg-orange-500/80 border-l-[6px] border-white shadow-sm backdrop-blur-md">
                  <p className="text-lg md:text-xl font-black text-white italic tracking-tight leading-snug drop-shadow-sm">
                    {quote.emphasis} {quote.bodySuffix}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Battle-Tested Bar */}
          <div className="flex items-center gap-6 mt-4">
            <div className="h-[2px] w-12 md:w-32 bg-brand-500" />
            <span className="font-mono text-[10px] md:text-xs font-black text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.5em]">Battle-Tested Since 2015</span>
          </div>
        </div>
      </div>
    </div>
  );
};
