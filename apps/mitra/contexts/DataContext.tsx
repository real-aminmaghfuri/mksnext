
"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

interface DataContextType {
  partners: any[];
  isLoading: boolean;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [partners, setPartners] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock fetch for now
    setTimeout(() => {
        setPartners([]);
        setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <DataContext.Provider value={{ partners, isLoading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
