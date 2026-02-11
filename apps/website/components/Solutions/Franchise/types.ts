
import { LucideIcon } from 'lucide-react';

export interface FranchiseFeature {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface FranchiseContent {
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
    features: FranchiseFeature[];
  };
  cta: {
    title: string;
    sub: string;
    btn: string;
  };
}
