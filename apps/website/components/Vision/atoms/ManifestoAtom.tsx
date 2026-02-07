
"use client";
import React from 'react';

interface ManifestoProps {
  title: string;
  text: string;
}

export const ManifestoAtom: React.FC<ManifestoProps> = ({ title, text }) => {
  return (
    <div className="bg-zinc-900 dark:bg-zinc-950 py-24 relative overflow-hidden border-t border-zinc-800">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#1f1f23_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-5xl text-center">
        <h2 className="text-[100px] md:text-[180px] font-black text-white/5 leading-[0.8] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none uppercase whitespace-nowrap">
          WAR ROOM
        </h2>
        
        <h3 className="text-brand-500 font-black tracking-[0.5em] text-sm uppercase mb-6">
          {title}
        </h3>
        <p className="text-2xl md:text-4xl font-black text-white leading-tight tracking-tight uppercase">
          {text}
        </p>
      </div>
    </div>
  );
};
