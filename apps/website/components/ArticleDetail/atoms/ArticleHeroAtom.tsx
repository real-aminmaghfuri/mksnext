
"use client";
import React from 'react';
import { ArticleItem } from 'shared';
import { X, Calendar, User, Clock } from 'lucide-react';

interface ArticleHeroProps {
  article: ArticleItem;
  scrollTop: number;
  onClose: () => void;
}

export const ArticleHeroAtom: React.FC<ArticleHeroProps> = ({ article, scrollTop, onClose }) => {
  // Logic: Calculate thresholds for opacity transitions
  const contentOpacity = Math.max(0, 1 - scrollTop / 300);
  const smallTitleOpacity = Math.min(1, Math.max(0, (scrollTop - 300) / 100));
  const isCompact = scrollTop > 300;

  return (
    <>
      {/* 
        Dynamic Header Container 
        CRITICAL FIX: 'pointer-events-none' ensures scroll events pass through this fixed layer 
        to the body/scroll container underneath.
      */}
      <div 
        className="fixed top-0 left-0 w-full z-40 border-b border-white/10 overflow-hidden [--initial-h:50vh] md:[--initial-h:60vh] pointer-events-none"
        style={{
            height: `max(80px, calc(var(--initial-h) - ${scrollTop}px))`,
            backgroundColor: isCompact ? 'rgba(0,0,0,0.9)' : '#000',
            backdropFilter: isCompact ? 'blur(12px)' : 'none',
            boxShadow: isCompact ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : 'none',
            transition: 'background-color 0.3s, backdrop-filter 0.3s' 
        }}
      >
        {/* Background Image - Passive */}
        <div 
            className="absolute inset-0 pointer-events-none"
            style={{ opacity: isCompact ? 0 : 0.6 }}
        >
           <img src={article.image} alt="Cover" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
        </div>

        {/* 
            Content Container 
            FIX: Removed 'pointer-events-auto' from text containers. 
            This ensures that even if the user hovers over the text, the scroll event falls through 
            to the page scroller. Only the Close button captures events.
        */}
        <div className="container mx-auto px-6 h-full relative z-10 flex flex-col justify-end pb-8 md:pb-12 pointer-events-none">
           
           {/* Shrunk State: Compact Title */}
           <div 
                className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center"
                style={{ opacity: smallTitleOpacity }}
           >
              <h2 className="text-lg font-black text-white uppercase tracking-tight line-clamp-1 max-w-xl">
                {article.title}
              </h2>
           </div>

           {/* Expanded State: Full Hero Info */}
           <div 
                className="origin-bottom-left"
                style={{ 
                    opacity: contentOpacity,
                    transform: `scale(${0.9 + (contentOpacity * 0.1)}) translateY(${scrollTop * 0.5}px)`, 
                }}
           >
              <div className="inline-block px-3 py-1 bg-brand-600 text-white text-[10px] font-black uppercase tracking-widest rounded mb-4 shadow-lg shadow-brand-600/30">
                  {article.category}
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tighter mb-6 max-w-4xl">
                  {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-xs md:text-sm font-bold text-zinc-400 uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                      <User size={16} className="text-brand-500" />
                      <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-brand-500" />
                      <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                      <Clock size={16} className="text-brand-500" />
                      <span>{article.readTime}</span>
                  </div>
              </div>
           </div>
        </div>

        {/* 
            Close Button 
            FIX: This is the ONLY interactive element in the header.
        */}
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 md:top-8 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-red-600 backdrop-blur-md flex items-center justify-center text-white transition-all hover:rotate-90 z-50 group pointer-events-auto"
        >
          <X size={24} />
        </button>
      </div>
    </>
  );
};
