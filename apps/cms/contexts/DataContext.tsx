
"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Simplified context for CMS
interface DataContextType {
  user: { name: string; role: string; avatar: string };
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const user = {
    name: "CONTENT LEAD",
    role: "Editor in Chief",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
  };

  return (
    <DataContext.Provider value={{ user }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used within DataProvider");
  return context;
};
