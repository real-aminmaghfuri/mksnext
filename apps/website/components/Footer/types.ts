
import { LucideIcon } from 'lucide-react';

export interface LinkItem {
  label: string;
  href: string;
}

export interface ContactItem {
  icon: LucideIcon;
  text: string;
}

export interface FooterContent {
  description: string;
  col1Title: string;
  col1Links: LinkItem[];
  col2Title: string;
  contactItems: ContactItem[];
  copyright: string;
  legalLinks: LinkItem[]; // Changed from string[] to LinkItem[]
}
