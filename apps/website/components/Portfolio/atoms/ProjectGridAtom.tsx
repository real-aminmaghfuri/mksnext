
"use client";
import React from 'react';
import { GlassCard } from 'ui';
import { PortfolioItem } from 'shared';
import { ArrowRight, Monitor, Box } from 'lucide-react';

interface ProjectGridProps {
  items: PortfolioItem[];
  viewText: string;
}

export const ProjectGridAtom: React.FC<ProjectGridProps> = ({ items, viewText }) => {
  return (
    <div className="container mx-auto px-6 mb-24 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <GlassCard key={item.id} variant="solid" className="group bg-zinc-900 border-zinc-800 overflow-hidden flex flex-col h-full hover:border-brand-900/50 transition-all duration-500">
            
            {/* Image Container */}
            <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-20">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-black/80 backdrop-blur text-[10px] font-bold text-white uppercase tracking-wider border border-white/10">
                        {item.category === 'DIGITAL' ? <Monitor size={10} /> : <Box size={10} />}
                        {item.tag}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 leading-tight group-hover:text-brand-500 transition-colors">
                    {item.title}
                </h3>
                <p className="text-sm text-zinc-500 mb-6 flex-1 leading-relaxed">
                    {item.desc}
                </p>
                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                    <button className="text-xs font-bold text-brand-600 uppercase tracking-widest flex items-center gap-2 group/btn">
                        {viewText} <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                    </button>
                </div>
            </div>

          </GlassCard>
        ))}
      </div>
    </div>
  );
};
