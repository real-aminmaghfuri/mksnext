
"use client";

import React from 'react';
import { Sidebar } from './components/Sidebar';
import { MobileNav } from './components/MobileNav';
import { useDashboard } from './hooks/useDashboard';
import { DashboardHeaderAtom } from './components/Dashboard/atoms/DashboardHeaderAtom';
import { StatsGridAtom } from './components/Dashboard/atoms/StatsGridAtom';
import { RevenueChartAtom } from './components/Dashboard/atoms/RevenueChartAtom';
import { TransactionFeedAtom } from './components/Dashboard/atoms/TransactionFeedAtom';

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
    <div className="flex h-screen bg-zinc-50 dark:bg-luxury-dark text-zinc-900 dark:text-white overflow-hidden">
      
      {/* Main Content Area - Moved to Left */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />

        {/* Top Header Atom */}
        <DashboardHeaderAtom 
          title={text.dashboardTitle}
          isLoading={isLoading}
          onRefresh={refresh}
          user={user}
        />

        {/* Scrollable Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6 md:p-10 pb-32 md:pb-10 custom-scrollbar relative z-10">
          
          {/* Statistics Grid Atom */}
          <StatsGridAtom stats={statItems} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Analytics Chart Placeholder Atom */}
            <RevenueChartAtom />

            {/* Recent Transactions Feed Atom */}
            <TransactionFeedAtom 
              transactions={recentTransactions}
              formatIDR={formatIDR}
            />
          </div>
        </main>

        {/* Mobile Bottom Nav */}
        <MobileNav />
      </div>

      {/* Sidebar - Desktop Only - Moved to Right */}
      <Sidebar />
      
    </div>
  );
};
