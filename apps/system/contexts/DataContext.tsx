import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Repository, DashboardStats, Transaction } from 'data';

interface DataContextType {
  stats: DashboardStats;
  recentTransactions: Transaction[];
  isLoading: boolean;
  refresh: () => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [stats, setStats] = useState<DashboardStats>({ revenue: 0, orders: 0, activePos: 0 });
  const [recentTransactions, setRecentTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      // Ensure this runs only on client
      if (typeof window !== 'undefined') {
        await Repository.init(); 
        const newStats = await Repository.getStats();
        const txs = await Repository.getRecentTransactions();
        
        setStats(newStats);
        setRecentTransactions(txs);
      }
    } catch (e) {
      console.error("Data Load Failed:", e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ stats, recentTransactions, isLoading, refresh: fetchData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used within DataProvider");
  return context;
};