/**
 * UserProfile (Operator/Staff)
 */
export interface UserProfile {
  name: string;
  role: string;
  avatar: string;
}

/**
 * CompanyIdentity (Legal & Operational)
 */
export interface BankAccount {
  bankName: string;
  accountNumber: string;
  accountHolder: string;
}

export interface CompanyIdentity {
  founderName: string;
  founderRole: string;
  founderPhoto: string;
  founderQuoteHook: string;
  founderQuoteEmphasis: string;
  
  companyName: string;
  brandName: string;
  
  addressLegal: string;
  addressOps: string;
  
  mapLegalUrl: string;
  mapOpsUrl: string;
  
  operatingHours: string;
  
  nib: string;
  skKemenkumham: string;
  npwp: string;
  
  bankAccounts: BankAccount[];
  
  whatsapp: string;
  email: string;
}
