
"use client";
import React, { useEffect, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface LegalContentProps {
  content: string;
}

export const LegalContentAtom: React.FC<LegalContentProps> = ({ content }) => {
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const isBabActive = activeHash.startsWith('#bab-');

  return (
    <div className="max-w-3xl mx-auto">
        {isBabActive && (
            <div className="mb-8 flex items-center justify-between p-4 rounded-2xl bg-brand-50 dark:bg-brand-900/10 border border-brand-200 dark:border-brand-800 animate-fade-in">
                <div className="flex items-center gap-3 text-brand-700 dark:text-brand-400">
                    <Eye size={18} />
                    <span className="text-sm font-black uppercase tracking-widest">Focus Mode: {activeHash.replace('#', '').toUpperCase()}</span>
                </div>
                <button 
                    onClick={() => {
                        window.location.hash = '';
                        setActiveHash('');
                    }}
                    className="text-xs font-bold text-brand-600 dark:text-brand-500 hover:underline flex items-center gap-1"
                >
                    <EyeOff size={14} />
                    Tampilkan Semua Pasal
                </button>
            </div>
        )}

        <article className="prose prose-lg dark:prose-invert max-w-none">
            <div 
                className={`space-y-8 text-fluid-body text-zinc-700 dark:text-zinc-300 leading-relaxed [&>h3]:text-fluid-h2 [&>h3]:font-black [&>h3]:text-zinc-900 [&>h3]:dark:text-white [&>h3]:mb-4 [&>h3]:uppercase [&>h3]:tracking-tight [&>p]:font-medium ${
                    isBabActive ? '[&>div>section]:hidden' : ''
                }`}
                dangerouslySetInnerHTML={{ __html: content }} 
            />
            {isBabActive && (
                <style dangerouslySetInnerHTML={{ __html: `
                    section${activeHash} {
                        display: block !important;
                    }
                ` }} />
            )}
        </article>
    </div>
  );
};
