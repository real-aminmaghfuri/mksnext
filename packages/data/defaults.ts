
import { WebProtocols } from './types';
import { CompanyIdentity } from 'shared';

export const DEFAULT_WEB_PROTOCOLS: WebProtocols = {
  maintenanceMode: false,
  visibility: 'PUBLIC',
  gsc: '',
  ga4: '',
  gMerchant: '',
  bing: '',
  yandex: '',
  pinterest: ''
};

export const DEFAULT_COMPANY_IDENTITY: CompanyIdentity = {
  founderName: "Amin Maghfuri",
  founderRole: "Commanding Officer",
  founderPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  founderQuoteHook: "Jujur-jujuran aja... Tahun 2022, gue pernah 'mati suri'. Aset digital ilang, domain diambil orang, profil google bisnis disuspend. Pernah juga dikadalin sama karyawan. Sistem berantakan gara-gara gue terlalu percaya sama 'manusia' tanpa sistem kontrol.",
  founderQuoteEmphasis: "Gue belajar satu hal mahal: Bisnis tanpa sistem yang kuat cuma nunggu waktu buat meledak",
  companyName: "PT MESIN KASIR SOLO",
  brandName: "MKS",
  addressLegal: "Perum Graha Tiara 2 B1, Gumpang 07/01, Kartasura, Sukoharjo, Jawa Tengah 57169",
  addressOps: "Gumiring 04/04, Sidomulyo, Banjarejo, Blora, Jawa Tengah 58253",
  mapLegalUrl: "",
  mapOpsUrl: "",
  operatingHours: "Senin - Sabtu: 08:00 - 17:00 WIB",
  nib: "1226000711085",
  skKemenkumham: "AHU-006097.AH.01.30.Tahun 2021",
  npwp: "53.494.885.6-532.000",
  bankAccounts: [
    { bankName: "Bank BNC (Neo)", accountNumber: "5859459406740414", accountHolder: "PT MESIN KASIR SOLO" }
  ],
  whatsapp: "628816566935",
  email: "owner.kasirsolo@gmail.com"
};
