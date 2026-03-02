
import React from 'react';
import { CommentItem } from 'shared';
import { Link as LinkIcon } from 'lucide-react';

interface ItemProps {
  comment: CommentItem;
}

export const ArticleCommentItem: React.FC<ItemProps> = ({ comment }) => {
  return (
    <div className="flex gap-4 group">
      <div className="w-8 h-8 rounded-lg bg-zinc-300 dark:bg-zinc-700 flex items-center justify-center text-[10px] font-black text-zinc-500 dark:text-zinc-300 shrink-0 border border-transparent group-hover:border-brand-500 transition-colors">
        {comment.avatar}
      </div>
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span className="font-bold text-zinc-900 dark:text-white text-sm">{comment.name}</span>
          <span className="text-[9px] font-bold text-zinc-400 uppercase bg-zinc-200 dark:bg-zinc-800 px-1.5 py-0.5 rounded">{comment.date}</span>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {comment.content}
        </p>
        {comment.url && (
          <a href={`https://${comment.url}`} className="inline-flex items-center gap-1 text-[10px] text-brand-600 font-bold mt-1 hover:underline">
            <LinkIcon size={10} /> {comment.url}
          </a>
        )}
      </div>
    </div>
  );
};
