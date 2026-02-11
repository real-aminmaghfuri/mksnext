
import { LucideIcon } from 'lucide-react';

export interface HealthFeature {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface HealthContent {
  hero: {
    badge: string;
    title: string;
    span: string;
    sub: string;
  };
  diagnosis: {
    title: string;
    sub: string;
    points: string[];
  };
  system: {
    title: string;
    sub: string;
    features: HealthFeature[];
  };
  cta: {
    title: string;
    sub: string;
    btn: string;
  };
}
