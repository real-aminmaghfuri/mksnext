
"use client";
import React from 'react';
import { Button } from 'ui';
import { Scissors } from 'lucide-react';

interface ServicesCtaProps {
  content: {
    title: string;
    sub: string;
    btn: string;
  }
}

export const ServicesCtaAtom: React.FC<ServicesCtaProps> = ({ content }) => {
  return (
    <div className="py-24 bg-gradient-to-br from-zinc-900 to-black relative overflow-hidden border-t border-zinc-800 transition-colors duration-500">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
                {content.title}
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg mb-10 leading-relaxed font-medium">
                {content.sub}
            </p>
            <a href="https://wa.me/628816566935?text=Halo%20MKS,%20saya%20tertarik%20solusi%20untuk%20Bisnis%20Jasa." target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-violet-600 hover:bg-violet-500 text-white font-black tracking-widest uppercase px-10 py-5 shadow-2xl shadow-violet-500/30">
                    <Scissors size={20} className="mr-2" /> {content.btn}
                </Button>
            </a>
        </div>
    </div>
  );
};
