
"use client";
import React from 'react';

interface LegalContentProps {
  content: string;
}

export const LegalContentAtom: React.FC<LegalContentProps> = ({ content }) => {
  return (
    <div className="max-w-3xl mx-auto">
        <article className="prose prose-lg dark:prose-invert max-w-none">
            <div 
                className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed [&>h3]:text-2xl [&>h3]:font-black [&>h3]:text-zinc-900 [&>h3]:dark:text-white [&>h3]:mb-4 [&>h3]:uppercase [&>h3]:tracking-tight [&>p]:font-medium"
                dangerouslySetInnerHTML={{ __html: content }} 
            />
        </article>
    </div>
  );
};
