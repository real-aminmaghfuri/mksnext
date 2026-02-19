
"use client";

import React, { useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { Header } from '../../components/Header';
import { AI_SYSTEM_PROMPT } from 'shared';
import { Button } from 'ui';
import { Sparkles, Copy, Check, Terminal, AlertTriangle, FileCode } from 'lucide-react';
import { generateWriterAction } from '../actions/gemini';

export default function WriterPage() {
  const [topic, setTopic] = useState('');
  const [generatedHtml, setGeneratedHtml] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleGenerate = async () => {
    if (!topic) return;
    setIsGenerating(true);
    setGeneratedHtml(''); 

    try {
      // Execute via Server Action (Secure)
      const content = await generateWriterAction(topic, AI_SYSTEM_PROMPT);
      
      if (content) {
        setGeneratedHtml(content);
      }
    } catch (error: any) {
      console.error("AI Error:", error);
      setGeneratedHtml(`<div class="p-6 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/50 rounded-xl text-red-600 dark:text-red-400 font-bold flex flex-col items-center gap-2"><AlertTriangle size={32}/> <p>CONNECTION SEVERED: ${error.message}</p></div>`);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedHtml);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const typoClass = "space-y-6 text-zinc-700 dark:text-zinc-300 leading-relaxed [&>p]:text-base [&>p]:md:text-lg [&>p]:font-medium [&>p]:text-zinc-600 [&>p]:dark:text-zinc-300 [&_li]:text-base [&_li]:pl-2 [&_li::marker]:text-brand-600 [&_li::marker]:dark:text-brand-500 [&_li::marker]:font-black [&>ul]:space-y-2 [&>ol]:space-y-2 [&>ul]:list-disc [&>ol]:list-decimal [&>ul]:pl-5 [&>ol]:pl-5 [&_strong]:text-zinc-900 [&_strong]:dark:text-white [&_strong]:font-black [&>h3]:text-xl [&>h3]:md:text-2xl [&>h3]:font-black [&>h3]:mt-12 [&>h3]:mb-4 [&>h3]:uppercase [&>h3]:tracking-tight [&>h3]:text-transparent [&>h3]:bg-clip-text [&>h3]:bg-gradient-to-r [&>h3]:from-brand-600 [&>h3]:to-red-600 [&>h4]:text-lg [&>h4]:font-black [&>h4]:text-zinc-900 [&>h4]:dark:text-white [&>h4]:mt-8 [&>h4]:mb-2 [&>p.lead]:text-xl [&>p.lead]:font-bold [&>p.lead]:text-zinc-900 [&>p.lead]:dark:text-white [&>p.lead]:leading-snug [&>blockquote]:border-l-4 [&>blockquote]:border-brand-500 [&>blockquote]:pl-6 [&>blockquote]:py-4 [&>blockquote]:my-8 [&>blockquote]:italic [&>blockquote]:text-lg [&>blockquote]:font-bold [&>blockquote]:text-zinc-800 [&>blockquote]:dark:text-zinc-100 [&>blockquote]:bg-zinc-100 [&>blockquote]:dark:bg-zinc-900 [&>blockquote]:rounded-r-xl";

  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white overflow-hidden">
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
         <Header title="AI INTEL WRITER" />

         <main className="flex-1 overflow-hidden relative z-10 flex flex-col md:flex-row">
            
            {/* LEFT: COMMAND CENTER */}
            <div className="w-full md:w-1/3 p-6 border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex flex-col overflow-y-auto">
                <div className="mb-8 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center gap-2 mb-2 text-brand-600">
                        <Terminal size={20} />
                        <span className="text-xs font-black uppercase tracking-widest">PROPAGANDA MACHINE</span>
                    </div>
                    <h2 className="text-2xl font-black uppercase tracking-tight mb-2 leading-none">Create Content</h2>
                    <p className="text-xs text-zinc-500 font-medium">
                        System automatically injects <strong>'MKS Typography Standard'</strong> & <strong>'Street Smart'</strong> persona.
                    </p>
                </div>

                <div className="space-y-4 flex-1">
                    <div>
                        <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                            <FileCode size={12}/> Target Topic
                        </label>
                        <textarea 
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            placeholder="Contoh: Bongkar rahasia markup harga supplier nakal..."
                            className="w-full h-40 mt-2 bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 text-sm font-bold focus:ring-2 focus:ring-brand-500 outline-none resize-none transition-all placeholder:text-zinc-400 custom-scrollbar"
                        />
                    </div>
                </div>

                <Button 
                    onClick={handleGenerate} 
                    disabled={isGenerating || !topic}
                    fullWidth 
                    size="lg" 
                    className="mt-6 shadow-2xl shadow-brand-500/20 bg-gradient-to-r from-brand-600 to-red-600 hover:to-red-500 border-none font-black tracking-widest"
                >
                    {isGenerating ? (
                        <span className="animate-pulse">GENERATING INTEL...</span>
                    ) : (
                        <><Sparkles size={18} className="mr-2" /> EXECUTE</>
                    )}
                </Button>
            </div>

            {/* RIGHT: PREVIEW AREA */}
            <div className="w-full md:w-2/3 bg-zinc-50 dark:bg-black relative flex flex-col">
                <div className="h-14 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between px-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur relative z-20">
                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${generatedHtml ? 'bg-emerald-500' : 'bg-zinc-300'}`} />
                        RENDER PREVIEW
                    </span>
                    {generatedHtml && (
                        <button 
                            onClick={handleCopy}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-xs font-bold text-zinc-600 dark:text-zinc-400 hover:text-brand-600 dark:hover:text-white transition-all hover:scale-105"
                        >
                            {isCopied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                            {isCopied ? 'COPIED TO CLIPBOARD' : 'COPY HTML CODE'}
                        </button>
                    )}
                </div>

                <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar bg-white dark:bg-black relative">
                    {/* Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                    {generatedHtml ? (
                        <div className="max-w-3xl mx-auto relative z-10 animate-fade-in-up">
                            <article className={typoClass} dangerouslySetInnerHTML={{ __html: generatedHtml }} />
                        </div>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-zinc-300 dark:text-zinc-800 opacity-50">
                            <div className="w-20 h-20 border-4 border-zinc-200 dark:border-zinc-800 border-dashed rounded-full flex items-center justify-center mb-4">
                                <Sparkles size={32} strokeWidth={1} />
                            </div>
                            <p className="font-black uppercase tracking-widest text-sm">Awaiting Input Data</p>
                        </div>
                    )}
                </div>
            </div>
         </main>
      </div>
      
      <Sidebar />
    </div>
  );
}
