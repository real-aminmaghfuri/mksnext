import React from 'react';
import { Trash2 } from 'lucide-react';
import { GlassCard } from 'ui';
import { BankAccount } from 'shared';
import { SettingInputAtom } from '../atoms/SettingInputAtom';

interface BankAccountMoleculeProps {
  bank: BankAccount;
  onUpdate: (field: keyof BankAccount, value: string) => void;
  onRemove: () => void;
}

export const BankAccountMolecule: React.FC<BankAccountMoleculeProps> = ({
  bank,
  onUpdate,
  onRemove
}) => {
  return (
    <GlassCard variant="solid" className="p-4 md:p-6 bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-black relative group">
      <button 
        onClick={onRemove} 
        className="absolute top-4 right-4 text-zinc-400 hover:text-red-500 transition-colors"
      >
        <Trash2 size={16} />
      </button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SettingInputAtom 
          label="Bank Name" 
          value={bank.bankName} 
          onChange={(e) => onUpdate('bankName', e.target.value)} 
        />
        <SettingInputAtom 
          label="Account Number" 
          value={bank.accountNumber} 
          onChange={(e) => onUpdate('accountNumber', e.target.value)}
          className="font-mono font-black text-brand-600"
        />
        <SettingInputAtom 
          label="Account Holder" 
          value={bank.accountHolder} 
          onChange={(e) => onUpdate('accountHolder', e.target.value)} 
        />
      </div>
    </GlassCard>
  );
};
