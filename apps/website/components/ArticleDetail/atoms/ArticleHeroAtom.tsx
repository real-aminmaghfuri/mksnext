
"use client";
import React from 'react';
import { ArticleItem } from 'shared';
import { X, Calendar, User, Clock } from 'lucide-react';
import { Button } from 'ui';

interface ArticleHeroProps {
  article: ArticleItem;
  isShrunk: boolean;
  onClose: () => void;
}

export const ArticleHeroAtom: React.FC<ArticleHeroProps> = ({ article, isShrunk, onClose }) => {
  return (
    <>
      {/* Dynamic Header Container */}
      <div 
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out border-b border-white/10
          ${isShrunk 
            ? 'h-[80px] bg-black/80 backdrop-blur-md shadow-2xl' 
            : 'h-[50vh] md:h-[60vh] bg-black'}
        `}
      >
        {/* Background Image (Fades out when shrunk) */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${isShrunk ? 'opacity-0' : 'opacity-60'}`}>
           <img src={article.image} alt="Cover" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-6 h-full relative z-10 flex flex-col justify-end pb-8 md:pb-12">
           
           {/* Shrunk State: Compact Title */}
           <div className={`absolute left-6 top-1/2 -translate-y-1/2 transition-all duration-500 ${isShrunk ? 'opacity-100 translate-y-[-50%]' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
              <h2 className="text-lg font-black text-white uppercase tracking-tight line-clamp-1 max-w-xl">
                {article.title}
              </h2>
           </div>

           {/* Expanded State: Full Hero Info */}
           <div className={`transition-all duration-500 origin-bottom-left ${isShrunk ? 'opacity-0 scale-90 translate-y-10' : 'opacity-100 scale-100 translate-y-0'}`}>
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

        {/* Close Button - Always Fixed Right */}
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 md:top-8 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-red-600 backdrop-blur-md flex items-center justify-center text-white transition-all hover:rotate-90 z-50 group"
        >
          <X size={24} />
        </button>
      </div>
    </>
  );
};
