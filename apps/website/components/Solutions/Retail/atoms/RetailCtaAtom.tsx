
"use client";
import React from 'react';
import { Button } from 'ui';
import { ShieldAlert } from 'lucide-react';

interface RetailCtaProps {
  content: {
    title: string;
    sub: string;
    btn: string;
  }
}

export const RetailCtaAtom: React.FC<RetailCtaProps> = ({ content }) => {
  return (
    <div className="py-24 bg-zinc-900 dark:bg-zinc-950 relative overflow-hidden border-t border-zinc-800 transition-colors duration-500">
        {/* Warning Stripes */}
        <div className="absolute top-0 left-0 w-full h-2 bg-[repeating-linear-gradient(45deg,#000,#000_10px,#f59e0b_10px,#f59e0b_20px)]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
                {content.title}
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg mb-10 leading-relaxed font-medium">
                {content.sub}
            </p>
            <a href="https://wa.me/628816566935?text=Halo%20MKS,%20saya%20tertarik%20konsultasi%20Sistem%20Ritel%20Anti-Maling." target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-red-600 hover:bg-red-500 text-white font-black tracking-widest uppercase px-10 py-5 shadow-2xl shadow-red-500/30">
                    <ShieldAlert size={20} className="mr-2" /> {content.btn}
                </Button>
            </a>
        </div>
    </div>
  );
};
