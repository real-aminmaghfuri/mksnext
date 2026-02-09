
"use client";
import React from 'react';
import { Button } from 'ui';
import { MessageCircle } from 'lucide-react';

interface ArticleCtaProps {
  title: string;
  desc: string;
  btn: string;
}

export const ArticleCtaAtom: React.FC<ArticleCtaProps> = ({ title, desc, btn }) => {
  return (
    <div className="my-16 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 relative overflow-hidden text-center shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/20 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-4">
                {title}
            </h3>
            <p className="text-zinc-400 max-w-xl mx-auto mb-8 text-lg">
                {desc}
            </p>
            <a href="/contact">
                <Button size="lg" className="bg-brand-600 hover:bg-brand-500 text-white font-black tracking-widest uppercase shadow-lg shadow-brand-600/40">
                    <MessageCircle size={18} className="mr-2" /> {btn}
                </Button>
            </a>
        </div>
    </div>
  );
};
