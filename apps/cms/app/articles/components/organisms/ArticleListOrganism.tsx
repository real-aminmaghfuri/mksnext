
import React from 'react';
import { Article } from 'data';
import { ArticleRowMolecule } from '../molecules/ArticleRowMolecule';

interface ArticleListOrganismProps {
  articles: Article[];
  isLoading: boolean;
  onDelete: (id: number, uuid?: string) => void;
}

export const ArticleListOrganism: React.FC<ArticleListOrganismProps> = ({ articles, isLoading, onDelete }) => {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="h-24 bg-zinc-100 dark:bg-zinc-900 animate-pulse rounded-2xl" />
        ))}
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-zinc-500 bg-white dark:bg-zinc-950 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-3xl">
        <p className="font-black uppercase tracking-widest text-xs">No articles found</p>
        <p className="text-[10px] mt-2">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {articles.map(article => (
        <ArticleRowMolecule key={article.id || article.uuid} article={article} onDelete={onDelete} />
      ))}
    </div>
  );
};
