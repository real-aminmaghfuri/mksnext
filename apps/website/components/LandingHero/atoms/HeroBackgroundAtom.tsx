
"use client";
import React from 'react';
import { Logo } from 'ui';

export const HeroBackgroundAtom: React.FC = () => {
  return (
    <>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[128px] animate-pulse delay-1000" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] mask-image-gradient" />
      
      {/* Watermark Logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.04] dark:opacity-[0.05] pointer-events-none z-0">
        <Logo className="w-full h-full" />
      </div>
    </>
  );
};
