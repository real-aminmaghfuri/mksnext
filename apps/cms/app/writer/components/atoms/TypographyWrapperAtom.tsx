import React from 'react';

interface TypographyWrapperAtomProps {
  content: string;
  className?: string;
}

export const TypographyWrapperAtom: React.FC<TypographyWrapperAtomProps> = ({ content, className = "" }) => {
  const typoClass = "space-y-6 text-zinc-700 dark:text-zinc-300 leading-relaxed [&>p]:text-base [&>p]:md:text-lg [&>p]:font-medium [&>p]:text-zinc-600 [&>p]:dark:text-zinc-300 [&_li]:text-base [&_li]:pl-2 [&_li::marker]:text-brand-600 [&_li::marker]:dark:text-brand-500 [&_li::marker]:font-black [&>ul]:space-y-2 [&>ol]:space-y-2 [&>ul]:list-disc [&>ol]:list-decimal [&>ul]:pl-5 [&>ol]:pl-5 [&_strong]:text-zinc-900 [&_strong]:dark:text-white [&_strong]:font-black [&>h3]:text-xl [&>h3]:md:text-2xl [&>h3]:font-black [&>h3]:mt-12 [&>h3]:mb-4 [&>h3]:uppercase [&>h3]:tracking-tight [&>h3]:text-transparent [&>h3]:bg-clip-text [&>h3]:bg-gradient-to-r [&>h3]:from-brand-600 [&>h3]:to-red-600 [&>h4]:text-lg [&>h4]:font-black [&>h4]:text-zinc-900 [&>h4]:dark:text-white [&>h4]:mt-8 [&>h4]:mb-2 [&>p.lead]:text-xl [&>p.lead]:font-bold [&>p.lead]:text-zinc-900 [&>p.lead]:dark:text-white [&>p.lead]:leading-snug [&>blockquote]:border-l-4 [&>blockquote]:border-brand-500 [&>blockquote]:pl-6 [&>blockquote]:py-4 [&>blockquote]:my-8 [&>blockquote]:italic [&>blockquote]:text-lg [&>blockquote]:font-bold [&>blockquote]:text-zinc-800 [&>blockquote]:dark:text-zinc-100 [&>blockquote]:bg-zinc-100 [&>blockquote]:dark:bg-zinc-900 [&>blockquote]:rounded-r-xl";

  return (
    <article 
      className={`${typoClass} ${className}`} 
      dangerouslySetInnerHTML={{ __html: content }} 
    />
  );
};
