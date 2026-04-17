"use client";

import { useState, useEffect, useCallback } from 'react';
import { SettingsService } from '../services/SettingsService';
import { UserProfile, HardwareConfig, ReceiptConfig, ConnectivityStatus } from '../types';

export interface SettingsLogic {
  isSaving: boolean;
  user: UserProfile;
  hardware: HardwareConfig[];
  receipt: ReceiptConfig;
  connectivity: ConnectivityStatus;
  handleSave: () => void;
  handleTestPrint: (id: string) => void;
  handleSync: () => void;
  updateReceipt: (field: keyof ReceiptConfig, value: string) => void;
}

/**
 * useSettings (UI Adapter)
 * STRICT RULE: Only manages UI state (isSaving, input forms) and binds to Service.
 */
export const useSettings = (): SettingsLogic => {
  const [isSaving, setIsSaving] = useState(false);
  const [user, setUser] = useState<UserProfile>({ name: '', role: '', avatar: '' });
  const [hardware, setHardware] = useState<HardwareConfig[]>([]);
  const [receipt, setReceipt] = useState<ReceiptConfig>({ header: "", footer: "" });
  const [connectivity, setConnectivity] = useState<ConnectivityStatus>({
    localDb: { status: 'inactive', label: 'Loading...' },
    cloudSync: { lastSync: '...', status: 'syncing' }
  });

  const refreshSettings = useCallback(async () => {
    try {
      const data = await SettingsService.loadAllSettings();
      setUser(data.user);
      setHardware(data.hardware);
      setReceipt(data.receipt);
      setConnectivity(data.connectivity);
    } catch (e) {
      console.error("Failed to load settings hook", e);
    }
  }, []);

  useEffect(() => {
    refreshSettings();
  }, [refreshSettings]);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // Delegate business logic and storage to Service
      await SettingsService.updateTerminalConfig(receipt);
      alert("HARDWARE CONFIG SAVED");
    } catch (e) {
      alert("FAIL_SAVE_CONFIG");
    } finally {
      setIsSaving(false);
    }
  };

  const handleTestPrint = async (id: string) => {
    // Calling business service logic
    await SettingsService.testPrinterConnection(id);
    alert(`TEST PRINT SENT TO ${id}`);
  };

  const handleSync = async () => {
    await SettingsService.triggerCloudSync();
    alert("SYNCING WITH CLOUD...");
  };

  const updateReceipt = (field: keyof ReceiptConfig, value: string) => {
    setReceipt(prev => ({ ...prev, [field]: value }));
  };

  return {
    isSaving,
    user,
    hardware,
    receipt,
    connectivity,
    handleSave,
    handleTestPrint,
    handleSync,
    updateReceipt
  };
};
