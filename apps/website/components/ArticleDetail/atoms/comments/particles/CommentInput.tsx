
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CommentInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: LucideIcon;
}

export const CommentInput: React.FC<CommentInputProps> = ({ icon: Icon, ...props }) => {
  return (
    <div className="relative">
      <Icon size={14} className="absolute top-3.5 left-4 text-zinc-400" />
      <input 
        {...props}
        className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg py-3 pl-10 pr-4 text-xs font-bold focus:ring-1 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
      />
    </div>
  );
};
