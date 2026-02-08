
import { LucideIcon } from 'lucide-react';

export interface DnaItem {
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
}

export interface AntiPersonaItem {
  text: string;
}

export interface CareerContent {
  heading: string;
  headingSpan: string;
  sub: string;
  
  dnaTitle: string;
  dnaSub: string;
  dnaItems: DnaItem[];

  antiTitle: string;
  antiPersonas: AntiPersonaItem[];

  roleTitle: string;
  roleSub: string;
  forceHireTitle: string;
  forceHireDesc: string;
  forceHireBtn: string;
}
