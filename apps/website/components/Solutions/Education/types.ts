
import { LucideIcon } from 'lucide-react';

export interface EducationFeature {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface EducationContent {
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
    features: EducationFeature[];
  };
  cta: {
    title: string;
    sub: string;
    btn: string;
  };
}
