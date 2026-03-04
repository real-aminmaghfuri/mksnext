"use client";

import React from 'react';
import { Sidebar } from '../../components/Sidebar';
import { Header } from '../../components/Header';
import { MobileNav } from '../../components/MobileNav';
import { useWriter } from './hooks/useWriter';
import { CommandCenterOrganism } from './components/organisms/CommandCenterOrganism';
import { PreviewAreaOrganism } from './components/organisms/PreviewAreaOrganism';

/**
 * WriterPage - AI Intel Propaganda Machine
 * Orchestrates Logic (Hooks) and Visuals (Atomic Organisms)
 * Separates Data, Visual, and Logic into Atomic particles.
 */
export default function WriterPage() {
  const {
    topic,
    setTopic,
    generatedHtml,
    isGenerating,
    isCopied,
    handleGenerate,
    handleCopy
  } = useWriter();

  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white overflow-hidden">
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
         <Header title="AI INTEL WRITER" />

         <main className="flex-1 overflow-hidden relative z-10 flex flex-col md:flex-row">
            <CommandCenterOrganism 
              topic={topic}
              setTopic={setTopic}
              handleGenerate={handleGenerate}
              isGenerating={isGenerating}
            />

            <PreviewAreaOrganism 
              generatedHtml={generatedHtml}
              isCopied={isCopied}
              handleCopy={handleCopy}
            />
         </main>
      </div>
      
      <Sidebar />
      <MobileNav />
    </div>
  );
}
