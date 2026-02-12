
import { QnaItem } from 'shared';

export type LegalPageType = 'TERMS' | 'PRIVACY' | 'FAQ';

export interface LegalContent {
  type: LegalPageType;
  title: string;
  sub: string;
  contentHtml?: string; // For Terms & Privacy
  faqItems?: QnaItem[]; // For FAQ
}
