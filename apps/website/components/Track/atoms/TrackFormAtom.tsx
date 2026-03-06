
"use client";
import React from 'react';
import { Truck, Search, Loader2 } from 'lucide-react';
import { Button } from 'ui';

interface TrackFormProps {
  heading: string;
  sub: string;
  placeholder: string;
  btn: string;
  resi: string;
  setResi: (v: string) => void;
  loading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  example: string;
}

export const TrackFormAtom: React.FC<TrackFormProps> = ({
  heading,
  sub,
  placeholder,
  btn,
  resi,
  setResi,
  loading,
  onSubmit,
  example
}) => {
  return (
    <div className="pt-40 pb-20 relative overflow-hidden bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white text-center border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1)_0%,transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.15)_0%,transparent_60%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-bold animate-fade-in-up mx-auto shadow-sm mb-8">
            <Truck size={16} className="text-brand-500 animate-pulse" />
            <span>ORDER TRACKING</span>
         </div>

         <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9] text-zinc-900 dark:text-white">
            {heading}
         </h1>
         
         <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-12">
            {sub}
         </p>

         <form onSubmit={onSubmit} className="relative max-w-2xl mx-auto">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400" size={24} />
            <input
              type="text"
              placeholder={placeholder}
              value={resi}
              onChange={(e) => setResi(e.target.value)}
              className="w-full pl-16 pr-48 py-6 rounded-3xl bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 focus:border-brand-500 outline-none transition-all text-lg shadow-2xl shadow-black/5"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <Button 
                type="submit" 
                disabled={loading}
                className="bg-brand-500 hover:bg-brand-600 text-white font-black uppercase tracking-widest px-8 py-4 rounded-2xl h-auto"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : btn}
              </Button>
            </div>
         </form>
         
         <p className="mt-6 text-zinc-400 text-sm font-bold italic">
           {example}
         </p>
      </div>
    </div>
  );
};
