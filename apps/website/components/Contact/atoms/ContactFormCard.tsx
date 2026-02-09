
"use client";
import React from 'react';
import { Button } from 'ui';
import { Send } from 'lucide-react';
import { FormData } from '../types';
import { ContactFormTopicSelector } from './ContactFormTopicSelector';

interface ContactFormCardProps {
  form: FormData;
  selectedTopic: string;
  onTopicChange: (topic: string) => void;
  onSubmit: () => void;
}

export const ContactFormCard: React.FC<ContactFormCardProps> = ({ 
  form, 
  selectedTopic, 
  onTopicChange,
  onSubmit 
}) => {
  return (
    <div className="lg:col-span-8 bg-white dark:bg-black p-8 md:p-12 rounded-[32px] border border-zinc-200 dark:border-zinc-800 shadow-2xl dark:shadow-brand-900/10 relative">
        
        <h3 className="text-3xl font-black text-zinc-900 dark:text-white mb-6">{form.title}</h3>
        <div className="h-px bg-zinc-200 dark:bg-zinc-800 w-full mb-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
                <label className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider ml-1">NAMA PANGGILAN</label>
                <input 
                    type="text" 
                    placeholder={form.namePlaceholder}
                    className="w-full bg-transparent border border-zinc-300 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm font-medium text-zinc-900 dark:text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                />
            </div>
            <div className="space-y-2">
                <label className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider ml-1">NOMOR WHATSAPP</label>
                <input 
                    type="tel" 
                    placeholder={form.waPlaceholder}
                    className="w-full bg-transparent border border-zinc-300 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm font-medium text-zinc-900 dark:text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                />
            </div>
        </div>

        <div className="space-y-2 mb-6">
              <label className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider ml-1">ALAMAT / LOKASI LO</label>
              <input 
                  type="text" 
                  placeholder={form.addressPlaceholder}
                  className="w-full bg-transparent border border-zinc-300 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm font-medium text-zinc-900 dark:text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
              />
        </div>

        <ContactFormTopicSelector 
            topics={form.topics}
            selectedTopic={selectedTopic}
            onTopicChange={onTopicChange}
            label={form.topicLabel}
        />

        <div className="space-y-2 mb-8">
              <label className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider ml-1">DETAIL PESAN</label>
              <textarea 
                rows={5}
                placeholder={form.msgPlaceholder}
                className="w-full bg-transparent border border-zinc-300 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm font-medium text-zinc-900 dark:text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600 resize-none"
              />
        </div>

        <Button 
          fullWidth 
          size="lg" 
          onClick={onSubmit}
          className="bg-gradient-to-r from-brand-600 to-red-600 hover:to-red-500 font-black tracking-widest shadow-xl shadow-brand-500/20 py-4"
        >
            <Send size={18} className="mr-2" /> {form.btn}
        </Button>
        
        <p className="text-[10px] text-zinc-500 text-center mt-6 italic">
            {form.note}
        </p>
    </div>
  );
};
