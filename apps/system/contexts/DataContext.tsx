"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface DataContextType {
  siteData: any;
  saveData: (newData: any) => Promise<void>;
  isLoading: boolean;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [siteData, setSiteData] = useState({
    hero: {
      headline: "Solusi Mesin Kasir Modern",
      ctaLabel: "Konsultasi Gratis"
    }
  });
  const [isLoading, setIsLoading] = useState(false);

  const saveData = async (newData: any) => {
    setIsLoading(true);
    // Mock save delay
    await new Promise(r => setTimeout(r, 1000));
    setSiteData(newData);
    setIsLoading(false);
  };

  return (
    <DataContext.Provider value={{ siteData, saveData, isLoading }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
