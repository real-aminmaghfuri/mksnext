
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
    <div className="group flex items-center gap-3 p-2 bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-200">
      <div className="w-10 h-10 rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-900 flex-shrink-0">
        <img 
          src={article.coverImage || 'https://picsum.photos/seed/placeholder/200/200'} 
          alt={article.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="flex-1 min-w-0 flex items-center justify-between">
        <div className="flex-1 min-w-0 pr-4">
          <div className="flex items-center gap-2 mb-0.5">
            <StatusBadgeAtom status={article.status} />
            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">{article.category}</span>
          </div>
          <h3 className="font-semibold text-xs text-zinc-900 dark:text-gray-100 truncate group-hover:text-brand-600 transition-colors">
            {article.title}
          </h3>
        </div>
        
        {/* We can hide excerpt on high density list, just show meta or keep it clean */}
        <div className="hidden md:flex items-center gap-4 text-[10px] text-zinc-400 w-1/3 truncate px-4">
            <span className="truncate">{article.excerpt || "No excerpt..."}</span>
        </div>
      </div>

      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <Link 
          href={`/articles/${article.slug}`}
          className="p-1.5 rounded-md text-zinc-500 hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-900/30 transition-all"
          title="Edit Article"
        >
          <Edit2 size={14} />
        </Link>
        <button 
          onClick={() => article.id && onDelete(article.id, article.uuid)}
          className="p-1.5 rounded-md text-zinc-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/30 transition-all"
          title="Delete Article"
        >
          <Trash2 size={14} />
        </button>
        <Link 
          href={`http://localhost:3000/blog/${article.slug}`}
          target="_blank"
          className="p-1.5 rounded-md text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
          title="View on Website"
        >
          <ExternalLink size={14} />
        </Link>
      </div>
    </div>
  );
};
