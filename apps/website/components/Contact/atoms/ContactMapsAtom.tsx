
"use client";
import React from 'react';

export const ContactMapsAtom: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 border-t border-zinc-200 dark:border-zinc-800">
      
      {/* Left: Legal Office */}
      <div className="h-[400px] relative bg-zinc-200 dark:bg-zinc-900 group">
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.127690623274!2d110.85257327476537!3d-7.561021792452899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a177f1057e00d%3A0x6b8253198084897f!2sPlaza%20Palur!5e0!3m2!1sen!2sid!4v1709440000000!5m2!1sen!2sid" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            loading="lazy" 
            className="grayscale group-hover:grayscale-0 transition-all duration-500"
         />
         <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-900 dark:text-white">KANTOR LEGAL</p>
         </div>
      </div>

      {/* Right: Operational Office */}
      <div className="h-[400px] relative bg-zinc-300 dark:bg-zinc-800 group border-l border-zinc-200 dark:border-zinc-800">
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.000000000!2d110.870000!3d-7.570000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMzQnMTIuMCJTIDExMMKwNTInMTIuMCJF!5e0!3m2!1sen!2sid!4v1709440000000!5m2!1sen!2sid" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            loading="lazy" 
            className="grayscale group-hover:grayscale-0 transition-all duration-500"
         />
         <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-900 dark:text-white">MARKAS OPERASIONAL</p>
         </div>
      </div>

    </div>
  );
};
