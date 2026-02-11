
import { LucideIcon } from 'lucide-react';

export interface CorporateFeature {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface CorporateContent {
  hero: {
    badge: string;
    title: string;
    span: string;
    sub: string;
  };
  pain: {
    title: string;
    sub: string;
    points: string[];
  };
  system: {
    title: string;
    sub: string;
    features: CorporateFeature[];
  };
  cta: {
    title: string;
    sub: string;
    btn: string;
  };
}
