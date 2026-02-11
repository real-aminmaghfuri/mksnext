
import { LucideIcon } from 'lucide-react';

export interface TechItem {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface ProblemItem {
  problem: string;
  solution: string;
}

export interface ProcessItem {
  num: string;
  title: string;
  desc: string;
}

export interface WebAppContent {
  hero: {
    badge: string;
    title: string;
    titleSpan: string;
    sub: string;
  };
  problems: {
    title: string;
    sub: string;
    items: ProblemItem[];
  };
  stack: {
    title: string;
    sub: string;
    items: TechItem[];
  };
  process: {
    title: string;
    steps: ProcessItem[];
  };
  cta: {
    title: string;
    sub: string;
    btn: string;
    message: string;
  };
}
