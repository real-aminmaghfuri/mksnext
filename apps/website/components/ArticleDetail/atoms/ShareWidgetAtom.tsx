
"use client";
import React from 'react';
import { Facebook, Twitter, Linkedin, Share2, Link as LinkIcon } from 'lucide-react';

export const ShareWidgetAtom: React.FC = () => {
  const btnClass = "w-10 h-10 rounded-full flex items-center justify-center border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-white hover:bg-brand-600 hover:border-brand-600 transition-all shadow-sm bg-white dark:bg-zinc-900";

  return (
    <div className="flex lg:flex-col gap-3 items-center sticky top-32">
       <div className="w-10 h-10 flex items-center justify-center text-zinc-400 font-bold mb-2 hidden lg:flex">
          <Share2 size={16} />
       </div>
       <button className={btnClass} title="Share to Facebook"><Facebook size={18} /></button>
       <button className={btnClass} title="Share to Twitter"><Twitter size={18} /></button>
       <button className={btnClass} title="Share to LinkedIn"><Linkedin size={18} /></button>
       <button className={btnClass} title="Copy Link"><LinkIcon size={18} /></button>
    </div>
  );
};
