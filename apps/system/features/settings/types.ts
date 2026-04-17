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
