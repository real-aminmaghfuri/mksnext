
"use client";
import React from 'react';
import { Button } from 'ui';
import { ChevronDown } from 'lucide-react';

interface ContentProps {
  excerpt: string;
  content: string; // Ready-to-render HTML string
  isExpanded: boolean;
  onToggle: () => void;
}

export const ArticleContentAtom: React.FC<ContentProps> = ({ excerpt, content, isExpanded, onToggle }) => {
  return (
    <div className="relative">
       {/* Body Wrapper */}
       <article 
         className={`prose prose-lg dark:prose-invert max-w-none transition-all duration-700 ease-in-out
            ${isExpanded ? '' : 'max-h-[600px] overflow-hidden'}
         `}
       >
          {/* Excerpt / Lead Box */}
          <div className="mb-12 p-6 md:p-8 rounded-2xl bg-brand-600/20 dark:bg-brand-900/40 border-l-4 border-brand-500 backdrop-blur-sm">
             <p className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white leading-relaxed italic tracking-tight">
                "{excerpt}"
             </p>
          </div>

          {/* 
             Main Content Injection 
             Styles are applied via Tailwind classes targeting standard HTML tags.
          */}
          <div 
             className="
                space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed
                
                /* --- BASE TYPOGRAPHY --- */
                [&>p]:text-lg [&>p]:lg:text-xl [&>p]:font-medium [&>p]:text-zinc-600 [&>p]:dark:text-zinc-300 [&>p]:leading-relaxed
                
                /* --- LISTS STYLING --- */
                [&_li]:text-lg [&_li]:lg:text-xl [&_li]:font-medium [&_li]:text-zinc-600 [&_li]:dark:text-zinc-300 [&_li]:leading-relaxed [&_li]:pl-2
                [&_li::marker]:text-brand-600 [&_li::marker]:dark:text-brand-500 [&_li::marker]:font-black
                [&>ul]:space-y-4 [&>ol]:space-y-4 [&>ul]:list-disc [&>ol]:list-decimal [&>ul]:pl-6 [&>ol]:pl-6
                
                /* --- INLINE EMPHASIS --- */
                [&_strong]:text-zinc-900 [&_strong]:dark:text-white [&_strong]:font-black
                [&_b]:text-zinc-900 [&_b]:dark:text-white [&_b]:font-black
                [&_em]:text-zinc-800 [&_em]:dark:text-zinc-200 [&_em]:font-bold
                
                /* --- HEADINGS (H3) --- */
                [&>h3]:text-2xl [&>h3]:md:text-3xl [&>h3]:font-black 
                [&>h3]:mt-16 [&>h3]:mb-6 [&>h3]:uppercase [&>h3]:tracking-tight
                [&>h3]:text-transparent [&>h3]:bg-clip-text [&>h3]:bg-gradient-to-r [&>h3]:from-brand-600 [&>h3]:to-red-600
                [&>h3]:scroll-mt-32
                
                /* --- SPECIAL ELEMENTS --- */
                [&>p.lead]:text-2xl [&>p.lead]:font-bold [&>p.lead]:text-zinc-900 [&>p.lead]:dark:text-white [&>p.lead]:leading-snug
                
                [&>blockquote]:border-l-4 [&>blockquote]:border-brand-500 [&>blockquote]:pl-8 [&>blockquote]:py-6 [&>blockquote]:my-10 
                [&>blockquote]:italic [&>blockquote]:text-xl [&>blockquote]:font-bold 
                [&>blockquote]:text-zinc-800 [&>blockquote]:dark:text-zinc-100 
                [&>blockquote]:bg-zinc-100 [&>blockquote]:dark:bg-zinc-900 
                [&>blockquote]:rounded-r-2xl
             "
             dangerouslySetInnerHTML={{ __html: content }} 
          />
       </article>

       {/* 
          Lazy Load Mask & Button 
          UPDATED: Gradient colors now perfectly match the parent container (zinc-950) 
          instead of generic black, ensuring no visible seam in dark mode.
       */}
       {!isExpanded && (
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-zinc-50 via-zinc-50/90 dark:from-zinc-950 dark:via-zinc-950/90 to-transparent flex items-end justify-center pb-0 z-10">
             <Button 
                onClick={onToggle}
                className="bg-brand-600 hover:bg-brand-500 text-white font-black tracking-widest px-8 py-4 rounded-full shadow-2xl shadow-brand-500/50 animate-bounce mb-4"
             >
                BACA SELENGKAPNYA <ChevronDown size={18} className="ml-2" />
             </Button>
          </div>
       )}
    </div>
  );
};
