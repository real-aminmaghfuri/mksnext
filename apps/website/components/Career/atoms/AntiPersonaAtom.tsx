
"use client";
import React from 'react';
import { AntiPersonaItem } from '../types';
import { AlertTriangle } from 'lucide-react';

interface AntiPersonaProps {
  title: string;
  items: AntiPersonaItem[];
}

export const AntiPersonaAtom: React.FC<AntiPersonaProps> = ({ title, items }) => {
  return (
    <div className="bg-red-950/10 border-y border-red-900/20 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.05)_0%,transparent_70%)]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center justify-center gap-3 mb-10 text-red-500">
                <AlertTriangle size={24} className="animate-pulse" />
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-widest">
                    {title}
                </h3>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
                {items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 px-6 py-3 rounded-full bg-black border border-red-900/30 text-zinc-300 text-sm font-bold uppercase tracking-wide">
                        <span className="w-2 h-2 rounded-full bg-red-600" />
                        {item.text}
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};
