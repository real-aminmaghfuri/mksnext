
import { LucideIcon } from 'lucide-react';

export interface GovernmentFeature {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface GovernmentContent {
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
    features: GovernmentFeature[];
  };
  cta: {
    title: string;
    sub: string;
    btn: string;
  };
}
