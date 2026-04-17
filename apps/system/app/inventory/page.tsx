
"use client";

import React from 'react';
import { Sidebar } from '../../components/Sidebar';
import { MobileNav } from '../../components/MobileNav';
import { Inventory } from '../../features/inventory';
import { DashboardHeaderAtom } from '../../components/Dashboard/atoms/DashboardHeaderAtom';

export default function InventoryPage() {
  // Reuse header structure or create layout wrapper later
  const user = {
    name: "AMIN MAGHFURI",
    role: "Commander",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100"
  };

  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-luxury-dark text-zinc-900 dark:text-white overflow-hidden">
      
      {/* Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
         <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
         
         <DashboardHeaderAtom 
            title="Gudang Logistik"
            isLoading={false}
            onRefresh={() => window.location.reload()}
            user={user}
         />

         <main className="flex-1 overflow-y-auto relative z-10 custom-scrollbar">
            <Inventory />
         </main>

         <MobileNav />
      </div>

      <Sidebar />
    </div>
  );
}
