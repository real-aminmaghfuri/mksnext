
"use client";
import React from 'react';
import { Button } from 'ui';
import { Rocket } from 'lucide-react';

interface StoreCtaProps {
  content: {
    title: string;
    sub: string;
    btn: string;
  }
}

export const StoreCtaAtom: React.FC<StoreCtaProps> = ({ content }) => {
  return (
    <div className="py-24 bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-900 dark:to-black relative overflow-hidden border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-600/5 dark:bg-emerald-600/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mb-6 leading-none">
                {content.title}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg mb-10 leading-relaxed font-medium">
                {content.sub}
            </p>
            <a href="https://wa.me/628816566935?text=Halo%20MKS,%20saya%20tertarik%20bikin%20Web%20Toko%20Online%20Auto-Pilot." target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:to-teal-500 text-white font-black tracking-widest uppercase px-10 py-5 shadow-2xl shadow-emerald-500/30 dark:shadow-emerald-900/50">
                    <Rocket size={20} className="mr-2" /> {content.btn}
                </Button>
            </a>
        </div>
    </div>
  );
};
