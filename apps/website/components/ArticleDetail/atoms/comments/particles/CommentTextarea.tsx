
import React from 'react';

interface CommentTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const CommentTextarea: React.FC<CommentTextareaProps> = (props) => {
  return (
    <textarea 
      {...props}
      className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 text-xs font-medium focus:ring-1 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all resize-none"
    />
  );
};
