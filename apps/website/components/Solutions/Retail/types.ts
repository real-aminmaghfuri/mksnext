
import { LucideIcon } from 'lucide-react';

export interface RetailFeature {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface RetailContent {
  hero: {
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
    features: RetailFeature[];
  };
  cta: {
    title: string;
    sub: string;
    btn: string;
  };
}
