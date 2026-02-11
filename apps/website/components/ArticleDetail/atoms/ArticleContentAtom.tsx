
"use client";
import React, { useMemo } from 'react';
import { Button } from 'ui';
import { ChevronDown } from 'lucide-react';

interface ContentProps {
  excerpt: string;
  content: string; // Ready-to-render HTML string
  isExpanded: boolean;
  onToggle: () => void;
}

export const ArticleContentAtom: React.FC<ContentProps> = ({ excerpt, content, isExpanded, onToggle }) => {
  
  // Logic: Split content strictly at 500 words (approx)
  // We use useMemo so this calculation only happens once when content loads
  const { previewContent, hiddenContent, hasHidden } = useMemo(() => {
    const WORD_LIMIT = 500;
    
    // Split by Paragraph closing tag to keep HTML valid
    const paragraphs = content.split('</p>');
    
    let wordCount = 0;
    let splitIndex = paragraphs.length;

    for (let i = 0; i < paragraphs.length; i++) {
        // Strip HTML tags to count actual readable words
        const text = paragraphs[i].replace(/<[^>]*>?/gm, '');
        const words = text.trim().split(/\s+/);
        
        // Accumulate word count
        if (text.trim().length > 0) {
            wordCount += words.length;
        }

        // Check if limit reached
        if (wordCount >= WORD_LIMIT) {
            splitIndex = i + 1; // Include this paragraph
            break;
        }
    }

    // If total content is less than limit, return all as preview
    if (splitIndex >= paragraphs.length) {
        return { previewContent: content, hiddenContent: '', hasHidden: false };
    }

    // Reconstruct HTML
    // We append '</p>' because split removed it
    const preview = paragraphs.slice(0, splitIndex).join('</p>') + '</p>';
    
    // For hidden part, we rejoin the rest. 
    // Careful: the last element of split might be an empty string if content ends with </p>
    const hidden = paragraphs.slice(splitIndex).filter(p => p.trim() !== '').join('</p>') + (paragraphs.length > splitIndex ? '</p>' : '');

    return { 
        previewContent: preview, 
        hiddenContent: hidden, 
        hasHidden: true 
    };
  }, [content]);

  // Typography Styles
  const typoClass = "space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed [&>p]:text-lg [&>p]:lg:text-xl [&>p]:font-medium [&>p]:text-zinc-600 [&>p]:dark:text-zinc-300 [&>p]:leading-relaxed [&_li]:text-lg [&_li]:lg:text-xl [&_li]:font-medium [&_li]:text-zinc-600 [&_li]:dark:text-zinc-300 [&_li]:leading-relaxed [&_li]:pl-2 [&_li::marker]:text-brand-600 [&_li::marker]:dark:text-brand-500 [&_li::marker]:font-black [&>ul]:space-y-4 [&>ol]:space-y-4 [&>ul]:list-disc [&>ol]:list-decimal [&>ul]:pl-6 [&>ol]:pl-6 [&_strong]:text-zinc-900 [&_strong]:dark:text-white [&_strong]:font-black [&_b]:text-zinc-900 [&_b]:dark:text-white [&_b]:font-black [&_em]:text-zinc-800 [&_em]:dark:text-zinc-200 [&_em]:font-bold [&>h3]:text-2xl [&>h3]:md:text-3xl [&>h3]:font-black [&>h3]:mt-16 [&>h3]:mb-6 [&>h3]:uppercase [&>h3]:tracking-tight [&>h3]:text-transparent [&>h3]:bg-clip-text [&>h3]:bg-gradient-to-r [&>h3]:from-brand-600 [&>h3]:to-red-600 [&>h3]:scroll-mt-32 [&>p.lead]:text-2xl [&>p.lead]:font-bold [&>p.lead]:text-zinc-900 [&>p.lead]:dark:text-white [&>p.lead]:leading-snug [&>blockquote]:border-l-4 [&>blockquote]:border-brand-500 [&>blockquote]:pl-8 [&>blockquote]:py-6 [&>blockquote]:my-10 [&>blockquote]:italic [&>blockquote]:text-xl [&>blockquote]:font-bold [&>blockquote]:text-zinc-800 [&>blockquote]:dark:text-zinc-100 [&>blockquote]:bg-zinc-100 [&>blockquote]:dark:bg-zinc-900 [&>blockquote]:rounded-r-2xl";

  return (
    <div className="relative">
       {/* Body Wrapper */}
       <article className="prose prose-lg dark:prose-invert max-w-none">
          
          {/* Excerpt / Lead Box */}
          <div className="mb-12 p-6 md:p-8 rounded-2xl bg-brand-600/20 dark:bg-brand-900/40 border-l-4 border-brand-500 backdrop-blur-sm">
             <p className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white leading-relaxed italic tracking-tight">
                "{excerpt}"
             </p>
          </div>

          {/* PART 1: Always Visible (First ~500 words) */}
          <div 
             className={typoClass}
             dangerouslySetInnerHTML={{ __html: previewContent }} 
          />

          {/* PART 2: Lazy Loaded (Rendered only if Expanded) */}
          {hasHidden && isExpanded && (
             <div 
                className={`${typoClass} mt-8 animate-fade-in-up`}
                dangerouslySetInnerHTML={{ __html: hiddenContent }} 
             />
          )}
       </article>

       {/* 
          Lazy Load Button & Gradient Mask 
          Only show if there is hidden content and it's not yet expanded
       */}
       {hasHidden && !isExpanded && (
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-zinc-50 via-zinc-50/95 dark:from-zinc-950 dark:via-zinc-950/95 to-transparent flex items-end justify-center pb-0 z-10 pt-20">
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
