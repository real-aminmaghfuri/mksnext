
"use client";
import React from 'react';
import { AlertTriangle, XCircle } from 'lucide-react';

interface ProfileRealityProps {
  content: {
    title: string;
    desc: string;
    points: string[];
  }
}

export const ProfileRealityAtom: React.FC<ProfileRealityProps> = ({ content }) => {
  return (
    <div className="py-24 bg-red-50 dark:bg-red-950/10 relative overflow-hidden border-y border-red-100 dark:border-red-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(220,38,38,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                <div>
                    <div className="inline-flex items-center gap-2 text-red-600 dark:text-red-500 mb-4">
                        <AlertTriangle size={24} className="animate-pulse" />
                        <h4 className="font-black uppercase tracking-widest text-sm">REALITY CHECK</h4>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mb-6">
                        {content.title}
                    </h2>
                    <p className="text-lg text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed mb-8">
                        {content.desc}
                    </p>
                </div>

                <div className="bg-white dark:bg-black p-8 rounded-3xl border border-red-200 dark:border-red-900/30 shadow-xl relative overflow-hidden">
                    {/* Dramatic Red Glow inside card */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-[60px] pointer-events-none" />
                    
                    <ul className="space-y-6 relative z-10">
                        {content.points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-4">
                                <div className="p-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-500 mt-1 shrink-0">
                                    <XCircle size={20} />
                                </div>
                                <p className="text-zinc-700 dark:text-zinc-300 font-bold text-lg leading-tight">
                                    {point}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    </div>
  );
};
