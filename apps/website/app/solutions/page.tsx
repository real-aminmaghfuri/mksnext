
"use client";

import React, { Suspense } from 'react';
import { Solutions } from '../../components/Solutions';
import { Loader2 } from 'lucide-react';

export default function SolutionsPage() {
  return (
    <div className="pt-0">
      {/* 
        Suspense is required because useSearchParams() is used in the Solutions component.
        This prevents Next.js de-opting to client-side rendering for the whole tree without a fallback.
      */}
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black">
          <Loader2 className="animate-spin text-brand-500" size={40} />
        </div>
      }>
        <Solutions />
      </Suspense>
    </div>
  );
}
