
"use client";
import React from 'react';

interface ServicesHeaderProps {
  title: string;
  subtitle: string;
}

export const ServicesHeaderAtom: React.FC<ServicesHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6 tracking-tight">
        {title}
      </h2>
      <p className="text-lg text-zinc-600 dark:text-zinc-400">
        {subtitle}
      </p>
    </div>
  );
};
