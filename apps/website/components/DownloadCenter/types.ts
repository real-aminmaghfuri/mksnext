
import { DownloadItem } from 'shared';

export interface DownloadCenterContent {
  heading: string;
  sub: string;
  searchPlaceholder: string;
  categories: string[];
  tableHeaders: {
    file: string;
    version: string;
    size: string;
    date: string;
    action: string;
  };
  items: DownloadItem[];
}
