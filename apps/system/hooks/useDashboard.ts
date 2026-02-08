
"use client";

import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { useData } from '../contexts/DataContext';
import { DollarSign, Users, TrendingUp } from 'lucide-react';
import { StatItem } from '../components/Dashboard/atoms/StatsGridAtom';

export const useDashboard = () => {
  const { language } = useConfig();
  const { stats, recentTransactions, isLoading, refresh } = useData();
  const text = DICTIONARY[language];

  // Logic: Currency Formatter
  const formatIDR = (num: number) => {
    return new Intl.NumberFormat('id-ID', { 
      style: 'currency', 
      currency: 'IDR', 
      maximumFractionDigits: 0 
    }).format(num);
  };

  // Logic: Map Raw Data to UI Stats Cards
  const statItems: StatItem[] = [
    { 
      label: text.statsRevenue, 
      value: formatIDR(stats.revenue), 
      trend: '+12.5%', 
      color: 'from-brand-500 to-orange-600',
      icon: DollarSign
    },
    { 
      label: text.statsOrders, 
      value: stats.orders.toString(), 
      trend: '+5.2%', 
      color: 'from-blue-500 to-indigo-600',
      icon: Users
    },
    { 
      label: 'Active POS', 
      value: stats.activePos.toString(), 
      trend: 'Stable', 
      color: 'from-emerald-500 to-teal-600',
      icon: TrendingUp 
    },
  ];

  // Logic: Mock User Data (In real app, fetch from Auth Context)
  const user = {
    name: "AMIN MAGHFURI",
    role: "Commander",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100"
  };

  return {
    text,
    isLoading,
    refresh,
    statItems,
    recentTransactions,
    formatIDR,
    user
  };
};
