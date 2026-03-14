
"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type RepoMode = 'AUTO' | 'LOCAL' | 'CLOUD';

// Simplified context for CMS
interface DataContextType {
  user: { name: string; role: string; avatar: string };
  repoMode: RepoMode;
  setRepoMode: (mode: RepoMode) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [repoMode, setRepoModeState] = useState<RepoMode>('AUTO');

  useEffect(() => {
    const saved = localStorage.getItem('MKS_REPO_MODE') as RepoMode;
    if (saved) setRepoModeState(saved);
  }, []);

  const setRepoMode = (mode: RepoMode) => {
    setRepoModeState(mode);
    if (mode === 'AUTO') {
      localStorage.removeItem('MKS_REPO_MODE');
    } else {
      localStorage.setItem('MKS_REPO_MODE', mode);
    }
    // Refresh page to apply changes across all components and data fetches
    window.location.reload();
  };

  const user = {
    name: "CONTENT LEAD",
    role: "Editor in Chief",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
  };

  return (
    <DataContext.Provider value={{ user, repoMode, setRepoMode }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used within DataProvider");
  return context;
};
