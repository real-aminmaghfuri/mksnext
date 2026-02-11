
"use client";

import React, { useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { MobileNav } from '../../components/MobileNav';
import { DashboardHeaderAtom } from '../../components/Dashboard/atoms/DashboardHeaderAtom';
import { GoogleGenAI } from "@google/genai";
import { AI_SYSTEM_PROMPT } from 'shared';
import { Button, GlassCard } from 'ui';
import { Sparkles, Copy, Check, Terminal } from 'lucide-react';

export default function WriterPage() {
  const [topic, setTopic] = useState('');
  const [generatedHtml, setGeneratedHtml] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const user = {
    name: "AMIN MAGHFURI",
    role: "Commander",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100"
  };

  const handleGenerate = async () => {
    if (!topic) return;
    setIsGenerating(true);
    setGeneratedHtml(''); // Reset previous

    try {
      // Initialize Gemini Client
      // Note: In production, API Key should be handled securely (e.g. Server Action)
      // Here we assume environment access for the demo scope
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
            {
                role: "user",
                parts: [{ text: `Topic: ${topic}` }]
            }
        ],
        config: {
            systemInstruction: AI_SYSTEM_PROMPT, // THE BRAIN: Injecting our Standard
            temperature: 0.8, // High creativity for "Barbar" style
        }
      });

      if (response.response.text()) {
        setGeneratedHtml(response.response.text());
      }
    } catch (error) {
      console.error("AI Error:", error);
      setGeneratedHtml("<p class='text-red-500 font-bold'>Error connecting to Neural Network. Check API Key or Signal.</p>");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedHtml);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Reusing the EXACT typo styles from ArticleContentAtom to ensure WYSIWYG
  const typoClass = "space-y-6 text-zinc-700 dark:text-zinc-300 leading-relaxed [&>p]:text-base [&>p]:md:text-lg [&>p]:font-medium [&>p]:text-zinc-600 [&>p]:dark:text-zinc-300 [&_li]:text-base [&_li]:pl-2 [&_li::marker]:text-brand-600 [&_li::marker]:dark:text-brand-500 [&_li::marker]:font-black [&>ul]:space-y-2 [&>ol]:space-y-2 [&>ul]:list-disc [&>ol]:list-decimal [&>ul]:pl-5 [&>ol]:pl-5 [&_strong]:text-zinc-900 [&_strong]:dark:text-white [&_strong]:font-black [&>h3]:text-xl [&>h3]:md:text-2xl [&>h3]:font-black [&>h3]:mt-12 [&>h3]:mb-4 [&>h3]:uppercase [&>h3]:tracking-tight [&>h3]:text-transparent [&>h3]:bg-clip-text [&>h3]:bg-gradient-to-r [&>h3]:from-brand-600 [&>h3]:to-red-600 [&>h4]:text-lg [&>h4]:font-black [&>h4]:text-zinc-900 [&>h4]:dark:text-white [&>h4]:mt-8 [&>h4]:mb-2 [&>p.lead]:text-xl [&>p.lead]:font-bold [&>p.lead]:text-zinc-900 [&>p.lead]:dark:text-white [&>p.lead]:leading-snug [&>blockquote]:border-l-4 [&>blockquote]:border-brand-500 [&>blockquote]:pl-6 [&>blockquote]:py-4 [&>blockquote]:my-8 [&>blockquote]:italic [&>blockquote]:text-lg [&>blockquote]:font-bold [&>blockquote]:text-zinc-800 [&>blockquote]:dark:text-zinc-100 [&>blockquote]:bg-zinc-100 [&>blockquote]:dark:bg-zinc-900 [&>blockquote]:rounded-r-xl";

  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-luxury-dark text-zinc-900 dark:text-white overflow-hidden">
      
      {/* Main Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
         <DashboardHeaderAtom 
            title="AI INTEL WRITER"
            isLoading={isGenerating}
            onRefresh={() => {}}
            user={user}
         />

         <main className="flex-1 overflow-hidden relative z-10 flex flex-col md:flex-row">
            
            {/* LEFT: CONTROL PANEL */}
            <div className="w-full md:w-1/3 p-6 border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex flex-col overflow-y-auto">
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-2 text-brand-600">
                        <Terminal size={20} />
                        <span className="text-xs font-black uppercase tracking-widest">Command Input</span>
                    </div>
                    <h2 className="text-2xl font-black uppercase tracking-tight mb-2">Deploy Propaganda</h2>
                    <p className="text-sm text-zinc-500">
                        System automatically injects <strong>'MKS Typography Standard'</strong> instructions.
                    </p>
                </div>

                <div className="space-y-4 flex-1">
                    <div>
                        <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Topik Artikel</label>
                        <textarea 
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            placeholder="Contoh: Cara mengelola stok opname tanpa tutup toko..."
                            className="w-full h-32 mt-2 bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-xl p-4 text-sm font-bold focus:ring-2 focus:ring-brand-500 outline-none resize-none transition-all placeholder:text-zinc-400"
                        />
                    </div>

                    <div className="p-4 rounded-xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2">Active Protocols:</p>
                        <ul className="space-y-1 text-[10px] font-mono text-brand-600 dark:text-brand-500">
                            <li>[✓] Tone: Brutal Honest</li>
                            <li>[✓] Formatting: HTML Raw</li>
                            <li>[✓] Internal Linking: Enabled</li>
                            <li>[✓] Language: ID (Street Smart)</li>
                        </ul>
                    </div>
                </div>

                <Button 
                    onClick={handleGenerate} 
                    disabled={isGenerating || !topic}
                    fullWidth 
                    size="lg" 
                    className="mt-6 shadow-xl shadow-brand-500/20"
                >
                    {isGenerating ? (
                        <span className="animate-pulse">PROCESSING DATA...</span>
                    ) : (
                        <><Sparkles size={18} className="mr-2" /> GENERATE INTEL</>
                    )}
                </Button>
            </div>

            {/* RIGHT: PREVIEW AREA */}
            <div className="w-full md:w-2/3 bg-zinc-50 dark:bg-black relative flex flex-col">
                {/* Preview Toolbar */}
                <div className="h-14 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between px-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur">
                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">LIVE RENDER PREVIEW</span>
                    {generatedHtml && (
                        <button 
                            onClick={handleCopy}
                            className="flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-brand-600 transition-colors"
                        >
                            {isCopied ? <Check size={14} /> : <Copy size={14} />}
                            {isCopied ? 'COPIED TO CLIPBOARD' : 'COPY HTML CODE'}
                        </button>
                    )}
                </div>

                {/* Content Render */}
                <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar">
                    {generatedHtml ? (
                        <div className="max-w-3xl mx-auto">
                            <article className={typoClass} dangerouslySetInnerHTML={{ __html: generatedHtml }} />
                        </div>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-zinc-300 dark:text-zinc-700 opacity-50">
                            <Sparkles size={64} strokeWidth={1} className="mb-4" />
                            <p className="font-black uppercase tracking-widest text-sm">Awaiting Input Data</p>
                        </div>
                    )}
                </div>
            </div>

         </main>

         <MobileNav />
      </div>

      <Sidebar />
    </div>
  );
}
