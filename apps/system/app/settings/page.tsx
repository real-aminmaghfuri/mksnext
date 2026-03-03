
"use client";

import React from 'react';
import { Sidebar } from '../../components/Sidebar';
import { MobileNav } from '../../components/MobileNav';
import { DashboardHeaderAtom } from '../../components/Dashboard/atoms/DashboardHeaderAtom';
import { useSettings } from '../../components/Settings/hooks/useSettings';
import { SettingsBody } from '../../components/Settings/organisms/SettingsBody';

export default function SystemSettingsPage() {
  const logic = useSettings();

  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-luxury-dark text-zinc-900 dark:text-white overflow-hidden">
      
      {/* Main Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
         <DashboardHeaderAtom 
            title="SISTEM OPERASIONAL"
            isLoading={logic.isSaving}
            onRefresh={() => {}}
            user={logic.user}
         />

         <SettingsBody logic={logic} />

         <MobileNav />
      </div>

      <Sidebar />
    </div>
  );
}
