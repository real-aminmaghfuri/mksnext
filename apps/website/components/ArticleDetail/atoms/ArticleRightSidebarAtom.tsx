
"use client";
import React from 'react';
import { Tag, Files, Search } from 'lucide-react';
import { ArticleItem } from 'shared';
import Link from 'next/link';
import Image from 'next/image';
import { SidebarCategories } from '../../Articles/atoms/SidebarCategories';
import { useRouter } from 'next/navigation';

interface RightSidebarProps {
  relatedArticles: ArticleItem[];
  text: any;
  currentCategory: string;
}

export const ArticleRightSidebarAtom: React.FC<RightSidebarProps> = ({ relatedArticles, text, currentCategory }) => {
  const router = useRouter();

  // Redirect to main blog list when searching or filtering
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const val = (e.target as HTMLInputElement).value;
      router.push(`/articles?search=${val}`);
    }
  };

  const handleCategoryChange = (cat: string) => {
    router.push(`/articles?category=${cat}`);
  };

  return (
    <div className="space-y-4">
       
       {/* 1. SEARCH WIDGET - Compacted */}
       <div className="relative">
          <input 
             type="text" 
             placeholder={text.blogSearchPlaceholder || "Cari data intel..."}
             onKeyDown={handleSearch}
             className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-2 pl-10 text-xs font-bold focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-zinc-900 dark:text-white placeholder:text-zinc-400"
          />
          <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
       </div>

       {/* 2. Categories - Reduced Margins */}
       <div>
          <h4 className="flex items-center gap-2 text-xs font-black text-brand-600 dark:text-brand-500 uppercase tracking-widest mb-1.5">
             <Tag size={14} /> {text.blogSidebarTitle}
          </h4>
          <SidebarCategories 
            text={{
               sidebarTitle: text.blogSidebarTitle,
               catAll: text.blogCatAll,
               catBiz: text.blogCatBiz,
               catTech: text.blogCatTech
            }}
            activeCategory={currentCategory}
            onCategoryChange={handleCategoryChange}
          />
       </div>

       {/* 3. Related Articles Widget - Ultra Compact Mode */}
       <div>
          <h4 className="flex items-center gap-2 text-xs font-black text-brand-600 dark:text-brand-500 uppercase tracking-widest mb-1.5">
             <Files size={14} /> Dokumen Terkait
          </h4>
          <div className="space-y-0.5">
             {relatedArticles.map((article) => (
                <Link href={`/articles/${article.slug}`} key={article.id} className="block group">
                   
                   <div className="flex gap-2.5 items-center p-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
                      
                      {/* Thumbnail - Compact 4:3 Ratio (48x36px) */}
                      <div className="w-12 h-9 rounded bg-zinc-100 dark:bg-zinc-800 overflow-hidden shrink-0 relative border border-zinc-200 dark:border-zinc-800 group-hover:border-brand-500/50 transition-colors">
                          <Image 
                            src={article.image} 
                            alt={article.title} 
                            fill
                            sizes="48px"
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                          />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                          <h5 className="font-bold text-xs text-zinc-800 dark:text-zinc-200 line-clamp-2 leading-tight group-hover:text-brand-600 transition-colors mb-0.5">
                              {article.title}
                          </h5>
                          <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-wide flex items-center gap-2">
                              {article.category}
                          </p>
                      </div>

                   </div>
                </Link>
             ))}
          </div>
       </div>

    </div>
  );
};
