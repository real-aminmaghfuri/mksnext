
export interface DownloadItem {
  name: string;
  version: string;
  size: string;
  date: string;
  category: string;
  url: string;
  desc: string;
}

export interface DownloadDictionary {
  downloadHeading: string;
  downloadSub: string;
  downloadSearchPlaceholder: string;
  downloadCategoryAll: string;
  downloadCategoryDriver: string;
  downloadCategorySoftware: string;
  downloadCategoryManual: string;
  downloadTableFile: string;
  downloadTableVersion: string;
  downloadTableSize: string;
  downloadTableDate: string;
  downloadTableAction: string;
  downloadItems: DownloadItem[];
}
