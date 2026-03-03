
import { useState } from 'react';

export interface UserProfile {
  name: string;
  role: string;
  avatar: string;
}

export interface HardwareConfig {
  id: string;
  name: string;
  connection: string;
  type: 'IP' | 'USB';
}

export interface ReceiptConfig {
  header: string;
  footer: string;
}

export interface ConnectivityStatus {
  localDb: {
    status: 'active' | 'inactive';
    label: string;
  };
  cloudSync: {
    lastSync: string;
    status: 'synced' | 'syncing';
  };
}

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

export const useSettings = (): SettingsLogic => {
  const [isSaving, setIsSaving] = useState(false);
  const [receipt, setReceipt] = useState<ReceiptConfig>({
    header: "PT MESIN KASIR SOLO",
    footer: "Terima Kasih, Selamat Belanja Kembali"
  });

  const user: UserProfile = {
    name: "AMIN MAGHFURI",
    role: "Commander",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100"
  };

  const hardware: HardwareConfig[] = [
    { id: 'h1', name: "Printer Dapur (Kitchen)", connection: "192.168.1.200", type: 'IP' },
    { id: 'h2', name: "Printer Kasir (Cashier)", connection: "USB-001", type: 'USB' }
  ];

  const connectivity: ConnectivityStatus = {
    localDb: { status: 'active', label: 'IndexedDB Active' },
    cloudSync: { lastSync: '2m ago', status: 'synced' }
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("HARDWARE CONFIG SAVED");
    }, 1000);
  };

  const handleTestPrint = (id: string) => {
    console.log(`Testing printer: ${id}`);
    alert(`TEST PRINT SENT TO ${id}`);
  };

  const handleSync = () => {
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
