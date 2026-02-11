
import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface ProfileContent {
  hero: {
    badge: string;
    title: string;
    titleSpan: string;
    sub: string;
  };
  reality: {
    title: string;
    desc: string;
    points: string[];
  };
  features: {
    title: string;
    sub: string;
    items: FeatureItem[];
  };
  cta: {
    title: string;
    sub: string;
    btn: string;
  };
}
