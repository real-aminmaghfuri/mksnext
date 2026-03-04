
"use client";

import React from 'react';
import { POS } from '../../components/POS';
import { DataProvider } from '../../contexts/DataContext';

export default function POSPage() {
  return (
    <DataProvider>
      <POS />
    </DataProvider>
  );
}
