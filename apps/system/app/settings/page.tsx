
"use client";

import React from 'react';
import { Sidebar } from '../../components/Sidebar';
import { MobileNav } from '../../components/MobileNav';
import { DashboardHeaderAtom } from '../../components/Dashboard/atoms/DashboardHeaderAtom';
import { useSettings, SettingsBody } from '../../features/settings';

export default function SystemSettingsPage() {
  const logic = useSettings();

  return (
    <>
       <DashboardHeaderAtom 
          title="SISTEM OPERASIONAL"
          isLoading={logic.isSaving}
          onRefresh={() => {}}
          user={logic.user}
       />

       <SettingsBody logic={logic} />
    </>
  );
}
