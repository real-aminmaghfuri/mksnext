
import React from 'react';

export const ArticleCommentsHeader: React.FC = () => {
  return (
    <div className="px-2">
      <h4 className="text-xl md:text-2xl font-black text-brand-600 dark:text-brand-500 uppercase tracking-tight mb-2">
        Forum Bawah Tanah
      </h4>
      <p className="text-zinc-600 dark:text-zinc-400 font-medium">
        Ada insight tambahan? Atau lo gak setuju sama opini gue? <br className="hidden md:block"/>
        Jangan diem aja. Drop pemikiran liar lo di sini. Kita debat sehat pake data.
      </p>
    </div>
  );
};
