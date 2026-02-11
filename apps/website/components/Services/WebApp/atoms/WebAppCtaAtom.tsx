
"use client";
import React from 'react';
import { Button } from 'ui';
import { Cpu } from 'lucide-react';

interface WebAppCtaProps {
  content: {
    title: string;
    sub: string;
    btn: string;
    message: string;
  }
}

export const WebAppCtaAtom: React.FC<WebAppCtaProps> = ({ content }) => {
  return (
    <div className="py-24 bg-gradient-to-b from-zinc-100 to-white dark:from-black dark:to-zinc-900 relative overflow-hidden border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(37,99,235,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[shimmer_5s_infinite]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mb-6 leading-none">
                {content.title}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg mb-10 leading-relaxed font-medium">
                {content.sub}
            </p>
            <a 
              href={`https://wa.me/628816566935?text=${encodeURIComponent(content.message)}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:to-cyan-500 text-white font-black tracking-widest uppercase px-10 py-5 shadow-2xl shadow-blue-500/30 dark:shadow-blue-900/50">
                    <Cpu size={20} className="mr-2" /> {content.btn}
                </Button>
            </a>
        </div>
    </div>
  );
};
