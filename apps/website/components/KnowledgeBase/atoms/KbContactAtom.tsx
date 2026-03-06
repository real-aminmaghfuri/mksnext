
"use client";
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from 'ui';

interface KbContactProps {
  title: string;
  sub: string;
  btn: string;
}

export const KbContactAtom: React.FC<KbContactProps> = ({ title, sub, btn }) => {
  return (
    <div className="container mx-auto px-6 py-24 text-center">
      <div className="max-w-2xl mx-auto p-12 rounded-3xl bg-brand-500 text-white shadow-2xl shadow-brand-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <MessageCircle size={120} />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 relative z-10">
          {title}
        </h2>
        <p className="text-white/80 text-lg mb-8 relative z-10">
          {sub}
        </p>
        
        <Button 
          size="lg" 
          className="bg-white text-brand-600 hover:bg-zinc-100 font-black uppercase tracking-widest px-12 py-6 rounded-2xl relative z-10"
        >
          <MessageCircle size={20} className="mr-3" />
          {btn}
        </Button>
      </div>
    </div>
  );
};
