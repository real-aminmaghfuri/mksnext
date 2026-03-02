
"use client";
import React from 'react';
import { CommentItem } from 'shared';
import { ArticleCommentsHeader } from './comments/ArticleCommentsHeader';
import { ArticleCommentsToggle } from './comments/ArticleCommentsToggle';
import { ArticleCommentList } from './comments/ArticleCommentList';
import { ArticleCommentForm } from './comments/ArticleCommentForm';

interface CommentsProps {
  comments: CommentItem[];
  isOpen: boolean;
  onToggle: () => void;
  onSubmit: (data: any) => void;
}

export const ArticleCommentsAtom: React.FC<CommentsProps> = ({ comments, isOpen, onToggle, onSubmit }) => {
  return (
    <div className="space-y-6">
       <ArticleCommentsHeader />

       <div className="bg-zinc-100 dark:bg-zinc-900 rounded-[24px] overflow-hidden border border-zinc-200 dark:border-zinc-800">
          <ArticleCommentsToggle 
            isOpen={isOpen} 
            onToggle={onToggle} 
            count={comments.length} 
          />

          <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
             <div className="p-6 md:p-8 pt-0 border-t border-zinc-200 dark:border-zinc-800">
                <ArticleCommentList comments={comments} />
                <ArticleCommentForm onSubmit={onSubmit} />
             </div>
          </div>
       </div>
    </div>
  );
};
