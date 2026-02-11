
"use client";
import React from 'react';
import { Button } from 'ui';
import { MessageCircle } from 'lucide-react';

interface ProfileCtaProps {
  content: {
    title: string;
    sub: string;
    btn: string;
  }
}

export const ProfileCtaAtom: React.FC<ProfileCtaProps> = ({ content }) => {
  return (
    <div className="py-24 bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-900 dark:to-black relative overflow-hidden border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(249,115,22,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[shimmer_5s_infinite]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mb-6 leading-none">
                {content.title}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg mb-10 leading-relaxed font-medium">
                {content.sub}
            </p>
            <a href="https://wa.me/628816566935?text=Halo%20MKS,%20saya%20mau%20bikin%20website%20Company%20Profile%20yang%20gahar." target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-brand-600 to-red-600 hover:to-red-500 text-white font-black tracking-widest uppercase px-10 py-5 shadow-2xl shadow-brand-500/30 dark:shadow-brand-900/50">
                    <MessageCircle size={20} className="mr-2" /> {content.btn}
                </Button>
            </a>
        </div>
    </div>
  );
};
