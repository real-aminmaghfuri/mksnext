
import React from 'react';
import { Save } from 'lucide-react';
import { Button } from 'ui';
import { HardwareSection } from '../molecules/HardwareSection';
import { ReceiptSection } from '../molecules/ReceiptSection';
import { ConnectivityGrid } from '../molecules/ConnectivityGrid';
import { SettingsLogic } from '../../hooks/useSettings';

interface SettingsBodyProps {
  logic: SettingsLogic;
}

export const SettingsBody: React.FC<SettingsBodyProps> = ({ logic }) => (
  <main className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar relative z-10 pb-24">
    <div className="max-w-4xl mx-auto space-y-8">
      
      <HardwareSection 
        hardware={logic.hardware} 
        onTest={logic.handleTestPrint} 
      />

      <ReceiptSection 
        config={logic.receipt} 
        onUpdate={logic.updateReceipt} 
      />

      <ConnectivityGrid 
        status={logic.connectivity} 
        onSync={logic.handleSync} 
      />

      <div className="pt-4">
        <Button 
          fullWidth 
          size="lg" 
          onClick={logic.handleSave}
          disabled={logic.isSaving}
          className="shadow-xl"
        >
          {logic.isSaving ? 'SAVING...' : <><Save size={18} className="mr-2" /> SIMPAN KONFIGURASI</>}
        </Button>
      </div>

    </div>
  </main>
);
