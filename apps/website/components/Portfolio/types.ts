
import { PortfolioItem } from 'shared';

export type PortfolioCategory = 'ALL' | 'PHYSICAL' | 'DIGITAL';

export interface PortfolioContent {
  heading: string;
  headingSpan: string;
  sub: string;
  
  filters: {
    all: string;
    physical: string;
    digital: string;
  };
  
  items: PortfolioItem[];
  
  cta: {
    title: string;
    sub: string;
    btn: string;
  };
  
  viewCaseText: string;
  loadMoreLabel: string; // Added new field
}
