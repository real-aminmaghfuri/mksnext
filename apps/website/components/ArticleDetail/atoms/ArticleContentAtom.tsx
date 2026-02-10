
"use client";
import React from 'react';
import { Button } from 'ui';
import { ChevronDown } from 'lucide-react';

interface ContentProps {
  content: string;
  isExpanded: boolean;
  onToggle: () => void;
}

export const ArticleContentAtom: React.FC<ContentProps> = ({ content, isExpanded, onToggle }) => {
  return (
    <div className="relative">
       {/* Body */}
       <article 
         className={`prose prose-lg dark:prose-invert max-w-none transition-all duration-700
            ${isExpanded ? '' : 'max-h-[600px] overflow-hidden'}
         `}
       >
          <div 
             className="
                space-y-8 text-zinc-700 dark:text-zinc-300 leading-loose
                
                [&>p]:text-lg [&>p]:md:text-xl [&>p]:font-medium [&>p]:text-zinc-600 [&>p]:dark:text-zinc-300
                [&>p.lead]:text-2xl [&>p.lead]:font-bold [&>p.lead]:text-zinc-900 [&>p.lead]:dark:text-white [&>p.lead]:leading-snug
                
                /* UPDATED H3 STYLING: Gradient Text */
                [&>h3]:text-2xl [&>h3]:md:text-3xl [&>h3]:font-black 
                [&>h3]:mt-12 [&>h3]:mb-4 [&>h3]:uppercase [&>h3]:tracking-tight
                [&>h3]:text-transparent [&>h3]:bg-clip-text [&>h3]:bg-gradient-to-r [&>h3]:from-brand-600 [&>h3]:to-red-600
                
                [&>blockquote]:border-l-4 [&>blockquote]:border-brand-500 [&>blockquote]:pl-6 [&>blockquote]:py-4 [&>blockquote]:my-8 [&>blockquote]:italic [&>blockquote]:text-xl [&>blockquote]:font-bold [&>blockquote]:text-zinc-800 [&>blockquote]:dark:text-zinc-200 [&>blockquote]:bg-brand-50 [&>blockquote]:dark:bg-brand-900/10 [&>blockquote]:rounded-r-xl
                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2
             "
             dangerouslySetInnerHTML={{ __html: content }} 
          />
       </article>

       {/* Lazy Load Mask & Button */}
       {!isExpanded && (
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-zinc-50 dark:from-black to-transparent flex items-end justify-center pb-0">
             <Button 
                onClick={onToggle}
                className="bg-brand-600 hover:bg-brand-500 text-white font-black tracking-widest px-8 py-4 rounded-full shadow-2xl shadow-brand-500/50 animate-bounce"
             >
                BACA SELENGKAPNYA <ChevronDown size={18} className="ml-2" />
             </Button>
          </div>
       )}
    </div>
  );
};
