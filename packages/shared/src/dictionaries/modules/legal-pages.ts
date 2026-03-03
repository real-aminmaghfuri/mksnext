
import { LegalPageDictionary } from '../../types';
import { TOS_ID, TOS_EN } from './legal/tos';
import { PRIVACY_ID, PRIVACY_EN } from './legal/privacy';
import { FAQ_ID, FAQ_EN } from './legal/faq';

export const LegalPage_ID: LegalPageDictionary = {
  termsTitle: "KONSTITUSI & ATURAN PERANG (TOS)",
  termsSub: "Baca baik-baik. Ini bukan teks pajangan. Ini adalah hukum mutlak yang mengatur hubungan bisnis antara Gue (PT Mesin Kasir Solo) dan Lo (Klien). Melanggar ini berarti lo siap dengan konsekuensinya.",
  termsContent: TOS_ID,
  
  privacyTitle: "PROTOKOL KERAHASIAAN (PRIVACY)",
  privacySub: "Data lo adalah aset. Di MKS, kerahasiaan klien dijaga lebih ketat daripada rahasia negara. Ini sumpah gue.",
  privacyContent: PRIVACY_ID,

  faqTitle: "INTEL BRIEF (FAQ)",
  faqSub: "Jawaban taktis untuk pertanyaan yang sering ditembakkan ke markas besar MKS.",
  faqItems: FAQ_ID
};

export const LegalPage_EN: LegalPageDictionary = {
  termsTitle: "RULES OF ENGAGEMENT (TOS)",
  termsSub: "Read carefully. This isn't decoration. This is the absolute law governing the business relationship between Me (PT Mesin Kasir Solo) and You (Client). Violating this means you're ready for the consequences.",
  termsContent: TOS_EN,
  
  privacyTitle: "CONFIDENTIALITY PROTOCOLS (PRIVACY)",
  privacySub: "Your data is an asset. At MKS, client confidentiality is guarded tighter than state secrets. This is my oath.",
  privacyContent: PRIVACY_EN,

  faqTitle: "INTEL BRIEF (FAQ)",
  faqSub: "Tactical answers for frequently fired questions at MKS HQ.",
  faqItems: FAQ_EN
};
