
"use client";
import React from 'react';
import { ContactMapsData } from '../types';
import { Map, Building2, Briefcase } from 'lucide-react';

interface ContactMapsProps {
  data: ContactMapsData;
}

export const ContactMapsAtom: React.FC<ContactMapsProps> = ({ data }) => {
  return (
    <div className="container mx-auto px-6 mb-24 relative z-10">
      
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* MAP 1: LEGAL OFFICE */}
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-500">
                    <Building2 size={16} />
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest text-zinc-900 dark:text-white">LEGAL OFFICE</h3>
            </div>
            
            <div className="h-[350px] relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-lg dark:shadow-none group bg-zinc-100 dark:bg-zinc-900">
                {data.mapLegalUrl ? (
                    <iframe 
                        src={data.mapLegalUrl} 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        loading="lazy" 
                        className="grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-400 font-bold text-xs uppercase tracking-widest">
                        MAP DATA UNAVAILABLE
                    </div>
                )}
            </div>
        </div>

        {/* MAP 2: OPS HQ */}
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-500">
                    <Briefcase size={16} />
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest text-zinc-900 dark:text-white">OPERATIONAL HQ</h3>
            </div>

            <div className="h-[350px] relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-lg dark:shadow-none group bg-zinc-100 dark:bg-zinc-900">
                {data.mapOpsUrl ? (
                    <iframe 
                        src={data.mapOpsUrl} 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        loading="lazy" 
                        className="grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-400 font-bold text-xs uppercase tracking-widest">
                        MAP DATA UNAVAILABLE
                    </div>
                )}
            </div>
        </div>

      </div>
    </div>
  );
};
