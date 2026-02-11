
"use client";
import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { Button } from 'ui';

export const ArticleSubscribeWidget: React.FC = () => {
  return (
    <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 text-white relative overflow-hidden shadow-xl">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600/20 rounded-full blur-[40px] pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4 text-brand-500">
           <Mail size={18} />
           <span className="text-[10px] font-black uppercase tracking-widest">Intel Brief</span>
        </div>
        
        <h4 className="text-lg font-black uppercase leading-tight mb-2">
          Jangan Kudet.
        </h4>
        <p className="text-xs text-zinc-400 mb-4 leading-relaxed font-medium">
          Dapet strategi bisnis ritel & update teknis langsung ke inbox lo. No spam, daging semua.
        </p>

        <div className="space-y-3">
           <input 
              type="email" 
              placeholder="Email lo..." 
              className="w-full bg-black/50 border border-zinc-700 rounded-lg px-3 py-2.5 text-xs font-bold focus:outline-none focus:border-brand-500 transition-colors placeholder:text-zinc-600"
           />
           <Button fullWidth size="sm" className="bg-brand-600 hover:bg-brand-500 text-white font-black uppercase tracking-widest text-[10px]">
              Gabung <ArrowRight size={12} className="ml-2" />
           </Button>
        </div>
      </div>
    </div>
  );
};
