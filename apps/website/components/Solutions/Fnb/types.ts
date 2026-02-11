
import { LucideIcon } from 'lucide-react';

export interface FnbFeature {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface FnbContent {
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
    features: FnbFeature[];
  };
  cta: {
    title: string;
    sub: string;
    btn: string;
  };
}
