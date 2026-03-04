"use client";

import React from 'react';
import { Sidebar } from '../../components/Sidebar';
import { Header } from '../../components/Header';
import { MobileNav } from '../../components/MobileNav';
import { useMediaLibrary } from './hooks/useMediaLibrary';
import { useMediaUpload } from './hooks/useMediaUpload';
import { UploadSectionOrganism } from './components/organisms/UploadSectionOrganism';
import { MediaGridOrganism } from './components/organisms/MediaGridOrganism';

/**
 * MediaPage - Orchestrator for Media Intelligence
 * Separates Logic (Hooks), Data (Repository), and Visuals (Atomic Organisms)
 */
export default function MediaPage() {
  // 1. DATA LOGIC: Manage Library State
  const { mediaList, setMediaList, isLoadingList } = useMediaLibrary();

  // 2. ACTION LOGIC: Manage AI Analysis & Upload Pipeline
  const {
    uploading,
    analyzing,
    previewUrl,
    analysis,
    setAnalysis,
    fileInputRef,
    handleFileSelect,
    handleUpload
  } = useMediaUpload({
    onUploadSuccess: (newItem) => setMediaList(prev => [newItem, ...prev])
  });

  // 3. UTILITY: Clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("URL Copied!");
  };

  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white overflow-hidden">
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
         <Header title="MEDIA INTELLIGENCE" />

         <main className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar relative z-10 pb-24">
            
            {/* ORGANISM: UPLOAD & AI ANALYSIS ZONE */}
            <UploadSectionOrganism 
              fileInputRef={fileInputRef}
              handleFileSelect={handleFileSelect}
              previewUrl={previewUrl}
              analyzing={analyzing}
              uploading={uploading}
              analysis={analysis}
              setAnalysis={setAnalysis}
              handleUpload={handleUpload}
            />

            {/* ORGANISM: GALLERY GRID ARCHIVE */}
            <MediaGridOrganism 
              mediaList={mediaList}
              isLoadingList={isLoadingList}
              onCopy={copyToClipboard}
            />

         </main>
      </div>

      <Sidebar />
      <MobileNav />
    </div>
  );
}
