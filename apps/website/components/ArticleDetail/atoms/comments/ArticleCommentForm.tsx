
import React from 'react';
import { User, Link as LinkIcon, Send } from 'lucide-react';
import { Button } from 'ui';
import { CommentInput } from './particles/CommentInput';
import { CommentTextarea } from './particles/CommentTextarea';
import { useArticleCommentForm } from './hooks/useArticleCommentForm';

interface FormProps {
  onSubmit: (data: any) => void;
}

export const ArticleCommentForm: React.FC<FormProps> = ({ onSubmit }) => {
  const { formData, handleChange, handleSubmit } = useArticleCommentForm(onSubmit);

  return (
    <div className="bg-white dark:bg-black p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-600 to-red-600" />
      
      <h4 className="text-xs font-black text-zinc-900 dark:text-white uppercase tracking-widest mb-6">
        Kirim Pesan Intel
      </h4>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CommentInput 
            icon={User}
            placeholder="Nama Samaran"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            required
          />
          <CommentInput 
            icon={LinkIcon}
            placeholder="Backlink (Opsional)"
            value={formData.url}
            onChange={(e) => handleChange('url', e.target.value)}
          />
        </div>
        <CommentTextarea 
          rows={3}
          placeholder="Tulis argumen lo disini..."
          value={formData.content}
          onChange={(e) => handleChange('content', e.target.value)}
          required
        />
        <div className="text-right">
          <Button 
            type="submit"
            className="font-black tracking-widest text-[10px] uppercase shadow-lg shadow-brand-500/20 px-6 py-2 h-auto rounded-lg"
          >
            Kirim <Send size={12} className="ml-2" />
          </Button>
        </div>
      </form>
    </div>
  );
};
