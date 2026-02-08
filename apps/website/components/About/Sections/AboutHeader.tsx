
import React from 'react';

interface AboutHeaderProps {
  heading: string;
  tagline: string;
}

export const AboutHeader: React.FC<AboutHeaderProps> = ({ heading, tagline }) => {
  return (
    <div className="relative pt-24 pb-8 md:pb-12 border-b border-zinc-200 dark:border-zinc-800">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-brand-600/10 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center relative z-10">
        <h1 className="text-5xl md:text-8xl font-black text-zinc-900 dark:text-white mb-6 tracking-tighter uppercase leading-[0.85]">
          {heading.split(' ').map((word, i) => (
            <span key={i} className={i % 2 !== 0 ? "text-brand-600" : ""}>{word} </span>
          ))}
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-medium max-w-3xl mx-auto leading-relaxed opacity-80">
          {tagline}
        </p>
      </div>
    </div>
  );
};
