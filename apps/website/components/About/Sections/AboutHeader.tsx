
import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface AboutHeaderProps {
  heading: string;
  tagline: string;
}

export const AboutHeader: React.FC<AboutHeaderProps> = ({ heading, tagline }) => {
  return (
    <div className="relative pt-32 pb-12 border-b border-zinc-200 dark:border-zinc-800">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-brand-600/10 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center relative z-10">
        
        {/* Uniform Hero Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-bold animate-fade-in-up mx-auto shadow-sm mb-8">
            <ShieldCheck size={16} className="text-brand-500" />
            <span>PROFILE & LEGITIMACY</span>
        </div>

        <h1 className="text-fluid-display font-black text-zinc-900 dark:text-white mb-8 tracking-tighter uppercase leading-[0.9] animate-fade-in-up">
          {heading.split(' ').map((word, i) => (
            <span key={i} className={i % 2 !== 0 ? "text-brand-600" : ""}>{word} </span>
          ))}
        </h1>
        <p className="text-fluid-body text-zinc-600 dark:text-zinc-400 font-medium max-w-3xl mx-auto leading-relaxed opacity-80 animate-fade-in-up [animation-delay:100ms]">
          {tagline}
        </p>
      </div>
    </div>
  );
};
