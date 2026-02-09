
"use client";
import React from 'react';
import { ArticleItem } from 'shared';

interface ArticleBodyProps {
  content: string;
}

export const ArticleBodyAtom: React.FC<ArticleBodyProps> = ({ content }) => {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
        {/* 
            Since we don't have tailwind-typography plugin installed in this env,
            We style the HTML elements manually via global CSS or utility classes inside the dangerouslySetInnerHTML content.
            However, assuming standard HTML structure:
        */}
        <div 
            className="
                space-y-8 text-zinc-700 dark:text-zinc-300 leading-loose
                
                [&>p]:text-lg [&>p]:md:text-xl [&>p]:font-medium [&>p]:text-zinc-600 [&>p]:dark:text-zinc-300
                [&>p.lead]:text-2xl [&>p.lead]:font-bold [&>p.lead]:text-zinc-900 [&>p.lead]:dark:text-white [&>p.lead]:leading-snug
                
                [&>h3]:text-2xl [&>h3]:md:text-3xl [&>h3]:font-black [&>h3]:text-zinc-900 [&>h3]:dark:text-white [&>h3]:mt-12 [&>h3]:mb-4 [&>h3]:uppercase [&>h3]:tracking-tight
                
                [&>blockquote]:border-l-4 [&>blockquote]:border-brand-500 [&>blockquote]:pl-6 [&>blockquote]:py-2 [&>blockquote]:italic [&>blockquote]:text-xl [&>blockquote]:font-bold [&>blockquote]:text-zinc-800 [&>blockquote]:dark:text-zinc-200 [&>blockquote]:bg-brand-50 [&>blockquote]:dark:bg-brand-900/10 [&>blockquote]:rounded-r-xl
                
                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2
                [&>li]:text-lg
            "
            dangerouslySetInnerHTML={{ __html: content }} 
        />
    </article>
  );
};
