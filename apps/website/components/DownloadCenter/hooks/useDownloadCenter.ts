
"use client";
import { useConfig } from 'ui';
import { DICTIONARY, DownloadItem } from 'shared';
import { DownloadCenterContent } from '../types';
import { useState, useMemo } from 'react';

export const useDownloadCenter = () => {
  const { language } = useConfig();
  const text = DICTIONARY[language];
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(text.downloadCategoryAll);

  const categories = [
    text.downloadCategoryAll,
    text.downloadCategoryDriver,
    text.downloadCategorySoftware,
    text.downloadCategoryManual
  ];

  const filteredItems = useMemo(() => {
    return (text.downloadItems as DownloadItem[]).filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === text.downloadCategoryAll || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [text.downloadItems, searchQuery, selectedCategory, text.downloadCategoryAll]);

  return {
    heading: text.downloadHeading,
    sub: text.downloadSub,
    searchPlaceholder: text.downloadSearchPlaceholder,
    categories,
    tableHeaders: {
      file: text.downloadTableFile,
      version: text.downloadTableVersion,
      size: text.downloadTableSize,
      date: text.downloadTableDate,
      action: text.downloadTableAction,
    },
    items: text.downloadItems,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    filteredItems
  };
};
