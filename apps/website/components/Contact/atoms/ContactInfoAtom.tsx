
"use client";
import React from 'react';
import { ContactInfoItem } from '../types';
import { Button } from 'ui';
import { ArrowRight } from 'lucide-react';

interface ContactInfoProps {
  items: ContactInfoItem[];
}

export const ContactInfoAtom: React.FC<ContactInfoProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      {items.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div key={idx} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl relative overflow-hidden group hover:border-brand-500/50 transition-colors">
            <div className="absolute top-0 right-0 p-8 opacity-5 text-zinc-900 dark:text-white group-hover:scale-110 transition-transform duration-500">
                <Icon size={80} />
            </div>
            
            <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-500 flex items-center justify-center mb-6">
                    <Icon size={24} strokeWidth={2} />
                </div>
                
                <h3 className="text-lg font-black text-zinc-900 dark:text-white uppercase tracking-tight mb-2">
                    {item.title}
                </h3>
                
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6 min-h-[40px]">
                    {item.desc}
                </p>

                <p className="text-base font-bold text-zinc-900 dark:text-white mb-6 font-mono">
                    {item.value}
                </p>

                {item.action && (
                    <a href={item.action} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline" className="text-xs uppercase tracking-widest font-bold">
                            {item.actionLabel} <ArrowRight size={14} className="ml-2" />
                        </Button>
                    </a>
                )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
