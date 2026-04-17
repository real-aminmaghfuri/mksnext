
"use client";

import React from 'react';
import { POS } from '../../features/sales';
import { DataProvider } from '../../contexts/DataContext';

export default function POSPage() {
  return (
    <DataProvider>
      <POS />
    </DataProvider>
  );
}
