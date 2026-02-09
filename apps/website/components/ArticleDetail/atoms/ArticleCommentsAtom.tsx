
"use client";
import React from 'react';
import { CommentItem } from 'shared';
import { MessageSquare, ChevronDown, Send, User, Link as LinkIcon } from 'lucide-react';
import { Button } from 'ui';

interface CommentsProps {
  comments: CommentItem[];
  isOpen: boolean;
  onToggle: () => void;
  onSubmit: (data: any) => void;
}

export const ArticleCommentsAtom: React.FC<CommentsProps> = ({ comments, isOpen, onToggle, onSubmit }) => {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 rounded-[32px] overflow-hidden">
       {/* Accordion Trigger */}
       <button 
          onClick={onToggle}
          className="w-full flex items-center justify-between p-8 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
       >
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-lg shadow-brand-500/30">
                <MessageSquare size={20} />
             </div>
             <div className="text-left">
                <h3 className="text-xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">Diskusi Intel</h3>
                <p className="text-xs font-bold text-zinc-500">{comments.length} Komentar Terverifikasi</p>
             </div>
          </div>
          <ChevronDown size={24} className={`text-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
       </button>

       {/* Accordion Content */}
       <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="p-8 pt-0 border-t border-zinc-200 dark:border-zinc-800">
             
             {/* List */}
             <div className="space-y-6 mb-12 mt-8">
                {comments.map((comment) => (
                   <div key={comment.id} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-zinc-300 dark:bg-zinc-700 flex items-center justify-center text-xs font-black text-zinc-500 dark:text-zinc-300 shrink-0">
                         {comment.avatar}
                      </div>
                      <div>
                         <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-zinc-900 dark:text-white text-sm">{comment.name}</span>
                            <span className="text-[10px] font-bold text-zinc-400 uppercase">• {comment.date}</span>
                            {comment.url && (
                               <a href={`https://${comment.url}`} className="text-[10px] text-brand-600 hover:underline flex items-center gap-1">
                                  <LinkIcon size={10} /> {comment.url}
                               </a>
                            )}
                         </div>
                         <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            {comment.content}
                         </p>
                      </div>
                   </div>
                ))}
             </div>

             {/* Form */}
             <div className="bg-white dark:bg-black p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <h4 className="text-sm font-black text-zinc-900 dark:text-white uppercase tracking-wider mb-6">
                   Drop Komentar & Backlink
                </h4>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onSubmit({}); }}>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                         <User size={16} className="absolute top-3.5 left-4 text-zinc-400" />
                         <input 
                            type="text" 
                            placeholder="Nama Samaran" 
                            className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl py-3 pl-10 pr-4 text-sm font-bold focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                         />
                      </div>
                      <div className="relative">
                         <LinkIcon size={16} className="absolute top-3.5 left-4 text-zinc-400" />
                         <input 
                            type="text" 
                            placeholder="Link Website Lo (Optional)" 
                            className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl py-3 pl-10 pr-4 text-sm font-bold focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                         />
                      </div>
                   </div>
                   <textarea 
                      rows={3}
                      placeholder="Tulis pendapat intel lo disini..."
                      className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 text-sm font-bold focus:ring-2 focus:ring-brand-500 outline-none transition-all resize-none"
                   />
                   <div className="text-right">
                      <Button className="font-black tracking-widest text-xs uppercase shadow-lg shadow-brand-500/20">
                         Kirim Komentar <Send size={14} className="ml-2" />
                      </Button>
                   </div>
                </form>
             </div>

          </div>
       </div>
    </div>
  );
};
