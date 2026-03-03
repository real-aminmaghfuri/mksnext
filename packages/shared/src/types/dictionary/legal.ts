
import { QnaItem } from './base';

export interface LegalPageDictionary {
  termsTitle: string;
  termsSub: string;
  termsContent: string;
  privacyTitle: string;
  privacySub: string;
  privacyContent: string;
  faqTitle: string;
  faqSub: string;
  faqItems: QnaItem[];
}
