
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
  officeLegal: string;
  officeOps: string;
  labelWa: string;
  labelEmail: string;
  labelHours: string;
}

export interface FormData {
  title: string;
  namePlaceholder: string;
  waPlaceholder: string;
  topicLabel: string;
  msgPlaceholder: string;
  btn: string;
  note: string;
  topics: string[];
}

export interface ContactMapsData {
  title: string;
  desc: string;
}

export interface ContactContent {
  heading: string;
  sub: string;
  qna: QnaItem[];
  info: ContactInfoData;
  form: FormData;
  maps: ContactMapsData;
}
