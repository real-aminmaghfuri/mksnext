
import { QnaItem } from 'shared';
import { LucideIcon } from 'lucide-react';

export interface ContactInfoItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  value: string;
  action?: string;
  actionLabel?: string;
}

export interface ContactInfoData {
  infoTitle: string; 
  officeLegal: string;
  officeLegalAddress: string;
  officeOps: string;
  officeOpsAddress: string;
  labelWa: string;
  labelEmail: string;
  labelHours: string;
  // Dynamic fields
  dynamicWa: string;
  dynamicEmail: string;
  dynamicHours: string;
}

export interface FormData {
  title: string;
  namePlaceholder: string;
  waPlaceholder: string;
  addressPlaceholder: string;
  topicLabel: string;
  msgPlaceholder: string;
  btn: string;
  note: string;
  topics: string[];
}

export interface ContactMapsData {
  title: string;
  desc: string;
  embedUrl?: string; // New
}

export interface ContactQnaData {
    title: string;
    items: QnaItem[];
}

export interface ContactContent {
  heading: string;
  sub: string;
  qna: ContactQnaData;
  info: ContactInfoData;
  form: FormData;
  maps: ContactMapsData;
}
