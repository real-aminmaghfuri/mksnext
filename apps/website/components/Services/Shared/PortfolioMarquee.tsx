
"use client";

import React from 'react';
import { motion } from 'motion/react';
import { MOCK_PORTFOLIO } from 'shared';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface PortfolioMarqueeProps {
  filterKeywords?: string[];
  title?: string;
  titleAccent?: string;
  subtitle?: string;
  badge?: string;
}

export const PortfolioMarquee: React.FC<PortfolioMarqueeProps> = ({
  filterKeywords = ["compro"],
  title = "HASIL",
  titleAccent = "TEMPUR",
  subtitle = "Ini adalah beberapa markas digital yang udah gue bangun. Gak cuma cantik, tapi juga fungsional dan siap tempur di pasar.",
  badge = "PORTFOLIO PILIHAN"
}) => {
  // Filter projects based on keywords
  const filteredProjects = MOCK_PORTFOLIO.filter(item => 
    filterKeywords.some(keyword => 
      item.title.toLowerCase().includes(keyword.toLowerCase()) || 
      item.desc.toLowerCase().includes(keyword.toLowerCase()) ||
      item.tag.toLowerCase().includes(keyword.toLowerCase())
    )
  );

  // Fallback if no projects found for specific keyword
  const displayProjects = filteredProjects.length > 0 ? filteredProjects : MOCK_PORTFOLIO.slice(0, 6);

  // Duplicate items for seamless loop
  const marqueeItems = [...displayProjects, ...displayProjects];

  return (
    <div className="py-24 bg-white dark:bg-zinc-900 overflow-hidden border-y border-zinc-100 dark:border-zinc-800">
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-brand-600 dark:text-brand-500 font-black text-xs uppercase tracking-[0.2em] mb-3 block">
              {badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white leading-tight tracking-tighter">
              {title} <span className="text-brand-600">{titleAccent}</span> KAMI.
            </h2>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-md text-sm font-medium">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="relative flex overflow-hidden group">
        <motion.div 
          className="flex gap-6 whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          style={{ width: "max-content" }}
          whileHover={{ 
            transition: { duration: 120, ease: "linear" } 
          }}
        >
          {marqueeItems.map((item, idx) => (
            <Link 
              key={`${item.id}-${idx}`}
              href={`/portfolio/${item.id}`}
              className="relative w-[300px] md:w-[400px] aspect-[16/10] rounded-3xl overflow-hidden group/card flex-shrink-0 border border-zinc-200 dark:border-zinc-800"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover/card:opacity-100 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="flex items-end justify-between gap-4">
                  <div className="flex-1">
                    <span className="text-[10px] font-bold text-brand-500 uppercase tracking-widest mb-1 block">
                      {item.tag}
                    </span>
                    <h3 className="text-lg font-black text-white leading-tight line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover/card:bg-brand-600 group-hover/card:border-brand-600 transition-all">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
