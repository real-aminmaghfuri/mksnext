
import { LucideIcon } from 'lucide-react';

export interface ServiceFeature {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface ServicesContent {
  hero: {
    badge: string;
    title: string;
    span: string;
    sub: string;
  };
  chaos: {
    title: string;
    sub: string;
    points: string[];
  };
  system: {
    title: string;
    sub: string;
    features: ServiceFeature[];
  };
  cta: {
    title: string;
    sub: string;
    btn: string;
  };
}
