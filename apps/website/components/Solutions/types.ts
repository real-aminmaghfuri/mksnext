
import { SolutionItem, IndustryTag } from 'shared';

export type FilterType = 'ALL' | IndustryTag;

export interface SolutionsContent {
  header: {
    badge: string;
    title: string;
    subtitle: string;
  };
  filters: {
    all: string;
    retail: string;
    fnb: string;
    services: string;
    health: string;
    corp: string;
    edu: string;
  };
  cta: {
    title: string;
    desc: string;
    btn: string;
  };
}

export interface SolutionsLogic {
  content: SolutionsContent;
  activeFilter: FilterType;
  setFilter: (tag: FilterType) => void;
  filteredSolutions: SolutionItem[];
}
