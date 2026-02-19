
"use client";
import React from 'react';
import { ContactMapsData } from '../types';
import { Map } from 'lucide-react';

interface ContactMapsProps {
  data: ContactMapsData;
}

export const ContactMapsAtom: React.FC<ContactMapsProps> = ({ data }) => {
  return (
    <div className="container mx-auto px-6 mb-20 relative z-10">
      
      <div className="flex flex-col items-center mb-12 text-center">
         <div className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-500 mb-2">
            <Map size={24} />
            <h3 className="font-bold uppercase tracking-widest text-sm">NAVIGASI</h3>
         </div>
         <h2 className="text-4xl md:text-5xl font-black uppercase text-zinc-900 dark:text-white tracking-tighter mb-4">
            {data.title}
         </h2>
         <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-xl mx-auto">{data.desc}</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Full Width Dynamic Map */}
        <div className="h-[400px] relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-lg dark:shadow-none group">
           {data.embedUrl ? (
               <iframe 
                  src={data.embedUrl} 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  loading="lazy" 
                  className="grayscale group-hover:grayscale-0 transition-all duration-700"
               />
           ) : (
               <div className="w-full h-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 text-zinc-400 font-bold">
                   MAP DATA UNAVAILABLE
               </div>
           )}
           <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700">
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-900 dark:text-white">MARKAS PUSAT</p>
           </div>
        </div>
      </div>
    </div>
  );
};
