
"use client";
import React from 'react';
import { Button } from 'ui';
import { ShieldAlert } from 'lucide-react';

interface OpenRolesProps {
  roleTitle: string;
  roleSub: string;
  forceHireTitle: string;
  forceHireDesc: string;
  forceHireBtn: string;
}

export const OpenRolesAtom: React.FC<OpenRolesProps> = ({ roleTitle, roleSub, forceHireTitle, forceHireDesc, forceHireBtn }) => {
  return (
    <div className="container mx-auto px-6 py-24">
      
      {/* Header */}
      <div className="text-center mb-16">
         <div className="inline-block px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-black text-brand-600 uppercase tracking-widest mb-4">
             PREMIUM ARSENAL
         </div>
         <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            {roleTitle.split(' ')[0]} <span className="text-brand-500">{roleTitle.split(' ')[1]}</span>
         </h2>
         <p className="text-zinc-500 font-medium italic">
            {roleSub}
         </p>
      </div>

      {/* Force Hire / Empty State Card */}
      <div className="max-w-4xl mx-auto">
        <div className="relative p-1 rounded-3xl bg-gradient-to-b from-zinc-800 to-black overflow-hidden group">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_3s_infinite]" />
            
            <div className="relative rounded-[20px] bg-black p-12 md:p-20 text-center flex flex-col items-center">
                
                <div className="w-20 h-20 mb-8 flex items-center justify-center">
                    <ShieldAlert size={64} className="text-brand-500" strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-4">
                    {forceHireTitle}
                </h3>
                
                <p className="text-lg text-zinc-400 max-w-lg mb-10 leading-relaxed">
                    {forceHireDesc}
                </p>

                <Button className="bg-brand-600 hover:bg-brand-500 text-white font-black uppercase tracking-widest px-8 py-4 shadow-lg shadow-brand-900/50">
                    {forceHireBtn}
                </Button>

            </div>
        </div>
      </div>

    </div>
  );
};
