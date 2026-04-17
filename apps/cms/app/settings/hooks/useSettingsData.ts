import { useState, useEffect } from 'react';
import { Repository } from 'data';
import { CompanyIdentity, BankAccount } from 'shared';

export const useSettingsData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const [webConfig, setWebConfig] = useState({
    maintenanceMode: false,
    visibility: 'PUBLIC' as 'PUBLIC' | 'STEALTH',
    gsc: '', ga4: '', gMerchant: '', bing: '', yandex: '', pinterest: ''
  });

  const [identity, setIdentity] = useState<CompanyIdentity>({
    founderName: '', founderRole: '', founderPhoto: '', 
    founderQuoteHook: '', founderQuoteEmphasis: '',
    companyName: '', brandName: '', addressLegal: '', addressOps: '',
    mapLegalUrl: '', mapOpsUrl: '', operatingHours: '',
    nib: '', skKemenkumham: '', npwp: '',
    bankAccounts: [], whatsapp: '', email: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [protocolsRes, idRes] = await Promise.all([
          Repository.getWebProtocols(),
          Repository.getCompanyIdentity()
        ]);
        
        if (protocolsRes.success && protocolsRes.data) {
          const protocols = protocolsRes.data;
          setWebConfig({
            maintenanceMode: protocols.maintenanceMode ?? false,
            visibility: protocols.visibility || 'PUBLIC',
            gsc: protocols.gsc || '',
            ga4: protocols.ga4 || '',
            gMerchant: protocols.gMerchant || '',
            bing: protocols.bing || '',
            yandex: protocols.yandex || '',
            pinterest: protocols.pinterest || ''
          });
        }

        if (idRes.success && idRes.data) {
          const idData = idRes.data;
          setIdentity({
            ...idData,
            bankAccounts: idData.bankAccounts || [] 
          });
        }
      } catch (e) {
        console.error("Failed to load settings", e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSave = async (activeTab: 'IDENTITY' | 'PROTOCOLS') => {
    setIsSaving(true);
    try {
      if (activeTab === 'PROTOCOLS') {
        await Repository.saveWebProtocols(webConfig as any);
      } else {
        await Repository.saveCompanyIdentity(identity);
      }
      alert(`✅ SUKSES! ${activeTab} Updated.`);
    } catch (e: any) {
      console.error("Save Error:", e);
      alert(`❌ GAGAL: ${e.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  const handleIdentityChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIdentity(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addBankAccount = () => {
    setIdentity(prev => ({
      ...prev,
      bankAccounts: [...prev.bankAccounts, { bankName: '', accountNumber: '', accountHolder: '' }]
    }));
  };

  const removeBankAccount = (idx: number) => {
    setIdentity(prev => {
      const newBanks = [...prev.bankAccounts];
      newBanks.splice(idx, 1);
      return { ...prev, bankAccounts: newBanks };
    });
  };

  const updateBankAccount = (idx: number, field: keyof BankAccount, value: string) => {
    setIdentity(prev => {
      const newBanks = [...prev.bankAccounts];
      newBanks[idx] = { ...newBanks[idx], [field]: value };
      return { ...prev, bankAccounts: newBanks };
    });
  };

  return {
    identity, setIdentity,
    webConfig, setWebConfig,
    isLoading, isSaving,
    handleSave, handleIdentityChange,
    addBankAccount, removeBankAccount, updateBankAccount
  };
};
