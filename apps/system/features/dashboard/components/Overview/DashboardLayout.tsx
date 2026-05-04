
"use client";

import React from 'react';
import { Sidebar } from '../../../../components/Sidebar';
import { MobileNav } from '../../../../components/MobileNav';
import { useDashboard } from '../../hooks/useDashboard';
import { DashboardHeaderAtom } from './atoms/DashboardHeaderAtom';
import { StatsGridAtom } from './atoms/StatsGridAtom';
import { RevenueChartAtom } from './atoms/RevenueChartAtom';
import { TransactionFeedAtom } from './atoms/TransactionFeedAtom';

export const DashboardLayout: React.FC = () => {
  // The Brain: All logic is encapsulated here
  const { 
    text, 
    isLoading, 
    refresh, 
    statItems, 
    recentTransactions, 
    formatIDR, 
    user 
  } = useDashboard();

  return (
    <>
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Top Header Atom */}
      <DashboardHeaderAtom 
        title={text.dashboardTitle}
        isLoading={isLoading}
        onRefresh={refresh}
        user={user}
      />

      {/* Scrollable Dashboard Content - High Density Padding */}
      <main className="flex-1 overflow-y-auto p-3 md:p-4 custom-scrollbar relative z-10">
        
        {/* Statistics Grid Atom */}
        <StatsGridAtom stats={statItems} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* Analytics Chart Placeholder Atom */}
          <RevenueChartAtom />

          {/* Recent Transactions Feed Atom */}
          <TransactionFeedAtom 
            transactions={recentTransactions}
            formatIDR={formatIDR}
          />
        </div>
      </main>
    </>
  );
};
