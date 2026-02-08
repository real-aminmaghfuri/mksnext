
import { LucideIcon } from 'lucide-react';

export interface PerkItem {
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
}

export interface JobRole {
  id: string;
  title: string;
  type: string;
  location: string;
}

export interface CareerContent {
  heading: string;
  sub: string;
  perks: PerkItem[];
  roleTitle: string;
  roleEmpty: string;
  roles: JobRole[];
  applyBtn: string;
}
