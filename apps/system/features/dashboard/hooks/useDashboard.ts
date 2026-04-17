"use client";

import { useMemo } from 'react';
import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { useData } from '../../../contexts/DataContext';
import { DollarSign, Users, TrendingUp } from 'lucide-react';
import { DashboardService } from '../services/DashboardService';

/**
 * useDashboard (UI State Adapter)
 * STRICT RULE: Only manages UI bindings and delegates logic to Service.
 */
export const useDashboard = () => {
  const { language } = useConfig();
  const { stats, recentTransactions, isLoading, refresh } = useData();
  const text = DICTIONARY[language];

  // UI-Specific mapping delegated to Service
  const statItems = useMemo(() => {
    return DashboardService.mapToStatItems(stats, text, {
      DollarSign,
      Users,
      TrendingUp
    });
  }, [stats, text]);

  // Logic for user profile fetching delegated to Service
  const user = DashboardService.getMockOperator();

  return {
    text,
    isLoading,
    refresh,
    statItems,
    recentTransactions,
    formatIDR: DashboardService.formatIDR,
    user
  };
};
