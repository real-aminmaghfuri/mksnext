
"use client";
import React from 'react';

interface ManifestoProps {
  title: string;
  text: string;
  footer: string;
}

export const ManifestoAtom: React.FC<ManifestoProps> = ({ title, text, footer }) => {
  // Parsing logic to remove the duplicate "Senjata Perang" from the black text part
  const parts = text.split(',');
  const part1 = parts[0]; 
  // Removes 'Senjata Perang' (case insensitive) and trailing dots/spaces from the second part
  const part2 = parts[1] ? parts[1].replace(/Senjata Perang\.?/i, "").trim() : "";

  return (
    <div className="bg-zinc-100 dark:bg-zinc-950/50 py-32 relative overflow-hidden border-t border-zinc-200 dark:border-zinc-900">
      
      <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
        
        <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white leading-tight tracking-tighter uppercase mb-2">
            {part1},
        </h2>
        <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white leading-tight tracking-tighter uppercase mb-12">
            {part2} <span className="text-brand-600 dark:text-brand-500">Senjata Perang.</span>”
        </h2>

        {/* Updated Card: Orange 500 with 15% Opacity */}
        <div className="p-8 md:p-10 rounded-3xl border border-brand-500/30 bg-orange-500/15 relative shadow-xl backdrop-blur-md">
            <p className="text-lg md:text-xl text-brand-800 dark:text-white font-medium italic leading-relaxed">
                {footer}
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-brand-500/50" />
                <span className="text-[10px] font-black text-brand-700 dark:text-brand-400 uppercase tracking-[0.2em]">AMIN MAGHFURI, FOUNDER</span>
                <div className="h-px w-12 bg-brand-500/50" />
            </div>
        </div>

      </div>
    </div>
  );
};
