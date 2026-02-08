
import { LucideIcon } from 'lucide-react';

export interface ContactInfoItem {
  title: string;
  desc: string;
  value: string;
  icon: LucideIcon;
  action?: string;
  actionLabel?: string;
}

export interface ContactContent {
  heading: string;
  sub: string;
  infoItems: ContactInfoItem[];
  form: {
    title: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    msgPlaceholder: string;
    btn: string;
  };
}
