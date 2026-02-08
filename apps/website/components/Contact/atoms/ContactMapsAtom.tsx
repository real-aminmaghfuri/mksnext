
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
      
      {/* Section Header */}
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left: Legal Office Container */}
        <div className="h-[400px] relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-lg dark:shadow-none group">
           <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.127690623274!2d110.85257327476537!3d-7.561021792452899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a177f1057e00d%3A0x6b8253198084897f!2sPlaza%20Palur!5e0!3m2!1sen!2sid!4v1709440000000!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              loading="lazy" 
              className="grayscale group-hover:grayscale-0 transition-all duration-700"
           />
           <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700">
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-900 dark:text-white">KANTOR LEGAL</p>
           </div>
        </div>

        {/* Right: Operational Office Container */}
        <div className="h-[400px] relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-lg dark:shadow-none group">
           <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.000000000!2d110.870000!3d-7.570000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMzQnMTIuMCJTIDExMMKwNTInMTIuMCJF!5e0!3m2!1sen!2sid!4v1709440000000!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              loading="lazy" 
              className="grayscale group-hover:grayscale-0 transition-all duration-700"
           />
           <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700">
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-900 dark:text-white">MARKAS OPERASIONAL</p>
           </div>
        </div>

      </div>
    </div>
  );
};
