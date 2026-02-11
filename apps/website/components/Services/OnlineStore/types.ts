
import { LucideIcon } from 'lucide-react';

export interface StoreFeatureItem {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface ComparisonItem {
  manual: string;
  auto: string;
}

export interface StoreContent {
  hero: {
    badge: string;
    title: string;
    titleSpan: string;
    sub: string;
  };
  painPoints: {
    title: string;
    sub: string;
    comparisons: ComparisonItem[];
  };
  features: {
    title: string;
    sub: string;
    items: StoreFeatureItem[];
  };
  steps: {
    title: string;
    steps: { num: string; title: string; desc: string }[];
  };
  cta: {
    title: string;
    sub: string;
    btn: string;
  };
}
