
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
    <div className="space-y-6">
       
       {/* Narrative Text */}
       <div className="px-2">
          {/* UPDATED: Title to Brand Color */}
          <h4 className="text-xl md:text-2xl font-black text-brand-600 dark:text-brand-500 uppercase tracking-tight mb-2">
             Forum Bawah Tanah
          </h4>
          <p className="text-zinc-600 dark:text-zinc-400 font-medium">
             Ada insight tambahan? Atau lo gak setuju sama opini gue? <br className="hidden md:block"/>
             Jangan diem aja. Drop pemikiran liar lo di sini. Kita debat sehat pake data.
          </p>
       </div>

       <div className="bg-zinc-100 dark:bg-zinc-900 rounded-[24px] overflow-hidden border border-zinc-200 dark:border-zinc-800">
          {/* Accordion Trigger */}
          <button 
             onClick={onToggle}
             className="w-full flex items-center justify-between p-6 md:p-8 hover:bg-zinc-200 dark:hover:bg-zinc-800/50 transition-colors"
          >
             <div className="flex items-center gap-4">
                {/* UPDATED: Icon Color Logic (Always Brand when Open/Active, or distinct when closed) */}
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-inner transition-colors ${isOpen ? 'bg-brand-600 text-white' : 'bg-brand-100 dark:bg-brand-900/20 text-brand-600 dark:text-brand-500'}`}>
                   <MessageSquare size={20} />
                </div>
                <div className="text-left">
                   {/* UPDATED: Text Color */}
                   <h3 className="text-sm md:text-base font-black text-brand-600 dark:text-brand-500 uppercase tracking-widest">Buka Diskusi</h3>
                   <p className="text-xs font-bold text-zinc-500">{comments.length} Komentar Terverifikasi</p>
                </div>
             </div>
             <ChevronDown size={24} className={`text-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Accordion Content */}
          <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
             <div className="p-6 md:p-8 pt-0 border-t border-zinc-200 dark:border-zinc-800">
                
                {/* List */}
                <div className="space-y-6 mb-12 mt-8">
                   {comments.map((comment) => (
                      <div key={comment.id} className="flex gap-4 group">
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
                   ))}
                </div>

                {/* Form */}
                <div className="bg-white dark:bg-black p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
                   {/* Decorative gradient line */}
                   <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-600 to-red-600" />
                   
                   <h4 className="text-xs font-black text-zinc-900 dark:text-white uppercase tracking-widest mb-6">
                      Kirim Pesan Intel
                   </h4>
                   <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onSubmit({}); }}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div className="relative">
                            <User size={14} className="absolute top-3.5 left-4 text-zinc-400" />
                            <input 
                               type="text" 
                               placeholder="Nama Samaran" 
                               className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg py-3 pl-10 pr-4 text-xs font-bold focus:ring-1 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                            />
                         </div>
                         <div className="relative">
                            <LinkIcon size={14} className="absolute top-3.5 left-4 text-zinc-400" />
                            <input 
                               type="text" 
                               placeholder="Backlink (Opsional)" 
                               className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg py-3 pl-10 pr-4 text-xs font-bold focus:ring-1 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                            />
                         </div>
                      </div>
                      <textarea 
                         rows={3}
                         placeholder="Tulis argumen lo disini..."
                         className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 text-xs font-medium focus:ring-1 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all resize-none"
                      />
                      <div className="text-right">
                         <Button className="font-black tracking-widest text-[10px] uppercase shadow-lg shadow-brand-500/20 px-6 py-2 h-auto rounded-lg">
                            Kirim <Send size={12} className="ml-2" />
                         </Button>
                      </div>
                   </form>
                </div>

             </div>
          </div>
       </div>
    </div>
  );
};
