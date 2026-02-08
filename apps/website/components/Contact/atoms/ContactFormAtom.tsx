
"use client";
import React from 'react';
import { Button } from 'ui';
import { Send } from 'lucide-react';

interface ContactFormProps {
  data: {
    title: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    msgPlaceholder: string;
    btn: string;
  }
}

export const ContactFormAtom: React.FC<ContactFormProps> = ({ data }) => {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-950 rounded-[32px] p-8 md:p-12 border border-zinc-200 dark:border-zinc-800">
        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter">
                    {data.title}
                </h2>
            </div>

            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">Identity</label>
                        <input 
                            type="text" 
                            placeholder={data.namePlaceholder}
                            className="w-full bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl px-4 py-3 font-bold text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all placeholder:font-normal"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">Comms Channel</label>
                        <input 
                            type="email" 
                            placeholder={data.emailPlaceholder}
                            className="w-full bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl px-4 py-3 font-bold text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all placeholder:font-normal"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">Briefing</label>
                    <textarea 
                        rows={5}
                        placeholder={data.msgPlaceholder}
                        className="w-full bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl px-4 py-3 font-bold text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all placeholder:font-normal resize-none"
                    />
                </div>

                <Button fullWidth size="lg" className="shadow-xl shadow-brand-500/20 mt-4 font-black tracking-widest">
                    {data.btn} <Send size={18} className="ml-2" />
                </Button>
            </form>
        </div>
    </div>
  );
};
