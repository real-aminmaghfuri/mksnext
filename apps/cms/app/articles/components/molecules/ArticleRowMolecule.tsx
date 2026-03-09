
import React from 'react';
import { Article } from 'data';
import { StatusBadgeAtom } from '../atoms/StatusBadgeAtom';
import { Edit2, Trash2, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface ArticleRowMoleculeProps {
  article: Article;
  onDelete: (id: number, uuid?: string) => void;
}

export const ArticleRowMolecule: React.FC<ArticleRowMoleculeProps> = ({ article, onDelete }) => {
  return (
    <div className="group flex items-center gap-4 p-4 bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 rounded-2xl hover:border-brand-500/50 transition-all duration-300">
      <div className="w-16 h-16 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 flex-shrink-0">
        <img 
          src={article.coverImage || 'https://picsum.photos/seed/placeholder/200/200'} 
          alt={article.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <StatusBadgeAtom status={article.status} />
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">{article.category}</span>
        </div>
        <h3 className="font-bold text-sm text-zinc-900 dark:text-white truncate group-hover:text-brand-600 transition-colors">
          {article.title}
        </h3>
        <p className="text-xs text-zinc-500 truncate mt-0.5">{article.excerpt}</p>
      </div>

      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Link 
          href={`/articles/${article.slug}`}
          className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-brand-500 hover:text-white transition-all"
          title="Edit Article"
        >
          <Edit2 size={16} />
        </Link>
        <button 
          onClick={() => article.id && onDelete(article.id, article.uuid)}
          className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-red-500 hover:text-white transition-all"
          title="Delete Article"
        >
          <Trash2 size={16} />
        </button>
        <Link 
          href={`http://localhost:3000/blog/${article.slug}`}
          target="_blank"
          className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-900 dark:hover:bg-white dark:hover:text-black hover:text-white transition-all"
          title="View on Website"
        >
          <ExternalLink size={16} />
        </Link>
      </div>
    </div>
  );
};
