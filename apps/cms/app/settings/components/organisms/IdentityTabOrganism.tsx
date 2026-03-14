import React from 'react';
import { 
  User, Building2, CreditCard, Phone, MapPin, 
  Quote, ShieldCheck, Plus 
} from 'lucide-react';
import { GlassCard, Button } from 'ui';
import { CompanyIdentity, BankAccount } from 'shared';

import { SectionHeaderAtom } from '../atoms/SectionHeaderAtom';
import { SettingInputAtom } from '../atoms/SettingInputAtom';
import { FounderPhotoMolecule } from '../molecules/FounderPhotoMolecule';
import { BankAccountMolecule } from '../molecules/BankAccountMolecule';
import { MapEmbedMolecule } from '../molecules/MapEmbedMolecule';

interface IdentityTabOrganismProps {
  identity: CompanyIdentity;
  handleIdentityChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  addBankAccount: () => void;
  removeBankAccount: (idx: number) => void;
  updateBankAccount: (idx: number, field: keyof BankAccount, value: string) => void;
  isUploading: boolean;
  uploadStep: string;
  handlePhotoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemovePhoto: () => void;
}

export const IdentityTabOrganism: React.FC<IdentityTabOrganismProps> = ({
  identity,
  handleIdentityChange,
  addBankAccount,
  removeBankAccount,
  updateBankAccount,
  isUploading,
  uploadStep,
  handlePhotoUpload,
  handleRemovePhoto
}) => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
      {/* FOUNDER PROFILE */}
      <section>
        <SectionHeaderAtom icon={User} title="Founder Profile" />
        <GlassCard variant="solid" className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <FounderPhotoMolecule
              photoUrl={identity.founderPhoto}
              isUploading={isUploading}
              uploadStep={uploadStep}
              onUpload={handlePhotoUpload}
              onRemove={handleRemovePhoto}
            />
            <div className="w-full md:w-3/4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <SettingInputAtom
                  label="Founder Name"
                  name="founderName"
                  value={identity.founderName}
                  onChange={handleIdentityChange}
                />
                <SettingInputAtom
                  label="Role / Title"
                  name="founderRole"
                  value={identity.founderRole}
                  onChange={handleIdentityChange}
                />
              </div>
              <div className="grid grid-cols-1 gap-4">
                <SettingInputAtom
                  label="Quote Hook (The Story)"
                  icon={Quote}
                  isTextarea
                  rows={3}
                  name="founderQuoteHook"
                  value={identity.founderQuoteHook}
                  onChange={handleIdentityChange}
                />
                <SettingInputAtom
                  label="Quote Emphasis (The Lesson)"
                  icon={Quote}
                  isTextarea
                  rows={2}
                  name="founderQuoteEmphasis"
                  value={identity.founderQuoteEmphasis}
                  onChange={handleIdentityChange}
                />
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* COMPANY & LEGALITY */}
      <section>
        <SectionHeaderAtom icon={Building2} title="Legal Entity" />
        <GlassCard variant="solid" className="p-6 md:p-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SettingInputAtom
              label="Official PT Name"
              name="companyName"
              value={identity.companyName}
              onChange={handleIdentityChange}
            />
            <SettingInputAtom
              label="Brand Short Name"
              name="brandName"
              value={identity.brandName}
              onChange={handleIdentityChange}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <SettingInputAtom
              label="NIB"
              icon={ShieldCheck}
              name="nib"
              value={identity.nib}
              onChange={handleIdentityChange}
              className="font-mono text-xs"
            />
            <SettingInputAtom
              label="SK KEMENKUMHAM"
              icon={ShieldCheck}
              name="skKemenkumham"
              value={identity.skKemenkumham}
              onChange={handleIdentityChange}
              className="font-mono text-xs"
            />
            <SettingInputAtom
              label="NPWP"
              icon={ShieldCheck}
              name="npwp"
              value={identity.npwp}
              onChange={handleIdentityChange}
              className="font-mono text-xs"
            />
          </div>
        </GlassCard>
      </section>

      {/* FINANCE */}
      <section>
        <div className="flex items-center gap-3 mb-4 justify-between">
          <SectionHeaderAtom icon={CreditCard} title="Official Bank Accounts" />
          <Button size="sm" onClick={addBankAccount} className="h-8 text-xs font-bold bg-zinc-800 hover:bg-zinc-700">
            <Plus size={14} className="mr-1"/> Add Bank
          </Button>
        </div>
        <div className="space-y-4">
          {identity.bankAccounts.map((bank, idx) => (
            <BankAccountMolecule
              key={idx}
              bank={bank}
              onUpdate={(field, value) => updateBankAccount(idx, field, value)}
              onRemove={() => removeBankAccount(idx)}
            />
          ))}
        </div>
      </section>

      {/* ADDRESS & MAPS */}
      <section>
        <SectionHeaderAtom icon={MapPin} title="Locations & Maps" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MapEmbedMolecule
            title="Legal Office"
            address={identity.addressLegal}
            mapUrl={identity.mapLegalUrl}
            indicatorColor="blue"
            onAddressChange={(e) => handleIdentityChange({ ...e, target: { ...e.target, name: 'addressLegal' } as EventTarget & (HTMLInputElement | HTMLTextAreaElement) })}
            onMapUrlChange={(e) => handleIdentityChange({ ...e, target: { ...e.target, name: 'mapLegalUrl' } as EventTarget & (HTMLInputElement | HTMLTextAreaElement) })}
            namePrefix="legal"
          />
          <MapEmbedMolecule
            title="Operational HQ"
            address={identity.addressOps}
            mapUrl={identity.mapOpsUrl}
            indicatorColor="brand"
            onAddressChange={(e) => handleIdentityChange({ ...e, target: { ...e.target, name: 'addressOps' } as EventTarget & (HTMLInputElement | HTMLTextAreaElement) })}
            onMapUrlChange={(e) => handleIdentityChange({ ...e, target: { ...e.target, name: 'mapOpsUrl' } as EventTarget & (HTMLInputElement | HTMLTextAreaElement) })}
            namePrefix="ops"
          />
        </div>
      </section>

      {/* CONTACT */}
      <section>
        <SectionHeaderAtom icon={Phone} title="Contacts & Hours" />
        <GlassCard variant="solid" className="p-6 md:p-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SettingInputAtom
              label="WhatsApp (No +)"
              icon={Phone}
              name="whatsapp"
              value={identity.whatsapp}
              onChange={handleIdentityChange}
            />
            <SettingInputAtom
              label="Email"
              icon={User}
              name="email"
              value={identity.email}
              onChange={handleIdentityChange}
            />
          </div>
          <SettingInputAtom
            label="Operating Hours"
            icon={CreditCard}
            isTextarea
            rows={2}
            name="operatingHours"
            value={identity.operatingHours}
            onChange={handleIdentityChange}
          />
        </GlassCard>
      </section>
    </div>
  );
};
