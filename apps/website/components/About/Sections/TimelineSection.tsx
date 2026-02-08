
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
}

interface TimelineSectionProps {
  items: TimelineItem[];
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ items }) => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center gap-6 mb-16">
        <h3 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter">
          War Log & Chronicle
        </h3>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-brand-600/30 via-zinc-300 dark:via-zinc-800 to-transparent" />
      </div>

      <div className="relative">
        <div className="absolute left-8 md:left-10 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />
        <div className="space-y-16 md:space-y-24">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="relative pl-20 md:pl-28 group">
                <div className={`absolute left-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center border-4 border-white dark:border-black shadow-2xl z-10 transition-all group-hover:scale-110 group-hover:rotate-6 ${item.color}`}>
                  <Icon size={28} strokeWidth={2.5} className="md:size-32" />
                </div>
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-[10px] font-black text-brand-600 dark:text-brand-500 uppercase tracking-[0.2em] border border-brand-500/20">
                    {item.year}
                  </span>
                  <h4 className="text-2xl md:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base md:text-xl max-w-3xl font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
