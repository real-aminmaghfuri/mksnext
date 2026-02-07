import React from 'react';
import { GlassCard } from 'ui';
import { LucideIcon } from 'lucide-react';

interface PhilosophyItem {
  title: string;
  desc: string;
  icon: LucideIcon;
}

interface PhilosophySectionProps {
  items: PhilosophyItem[];
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({ items }) => {
  return (
    <div className="mb-40 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {items.map((p, idx) => {
        const Icon = p.icon;
        return (
          <GlassCard key={idx} variant="solid" className="p-8 md:p-10 border-zinc-200 dark:border-zinc-800 hover:border-brand-500/30 transition-all hover:-translate-y-2">
            <div className="flex items-center gap-4 mb-6 text-brand-500">
              <div className="p-3 rounded-xl bg-brand-500/10">
                <Icon size={24} strokeWidth={2.5} />
              </div>
              <h5 className="font-black text-sm md:text-base uppercase tracking-wider">{p.title}</h5>
            </div>
            <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">{p.desc}</p>
          </GlassCard>
        );
      })}
    </div>
  );
};