
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
      <div className="flex items-center gap-6 mb-24">
        <h3 className="text-5xl md:text-8xl font-black text-zinc-900 dark:text-white uppercase tracking-[-0.06em] leading-[0.8]">
          War Log <span className="text-brand-600 drop-shadow-[0_0_20px_rgba(234,88,12,0.3)]">&</span> Chronicle
        </h3>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-brand-600/50 via-zinc-200 dark:via-zinc-800 to-transparent" />
      </div>

      <div className="relative">
        <div className="absolute left-8 md:left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-600/50 via-zinc-200 dark:via-zinc-800 to-transparent" />
        <div className="space-y-20 md:space-y-32">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="relative pl-24 md:pl-36 group">
                <div className={`absolute left-0 w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-[2rem] flex items-center justify-center border-4 border-white dark:border-luxury-dark shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-10 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 ${item.color}`}>
                  <Icon size={28} strokeWidth={2.5} className="md:w-10 md:h-10" />
                </div>
                <div className="space-y-4">
                  <span className="inline-block px-4 py-1.5 rounded-xl bg-brand-500/5 dark:bg-brand-500/10 text-[10px] font-black text-brand-600 dark:text-brand-500 uppercase tracking-[0.3em] border border-brand-500/20">
                    {item.year}
                  </span>
                  <h4 className="text-3xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-[-0.04em] leading-[0.9]">
                    {item.title}
                  </h4>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-tight text-xl md:text-3xl max-w-3xl font-bold tracking-tight opacity-90">
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
