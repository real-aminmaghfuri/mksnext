
"use client";

import React from 'react';
import { GlassCard, Button } from 'ui';
import { AlertCircle, RefreshCcw } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black p-6">
      <GlassCard variant="solid" className="max-w-md w-full p-8 text-center space-y-6">
        <div className="w-16 h-16 bg-rose-500/10 text-rose-600 rounded-2xl flex items-center justify-center mx-auto">
          <AlertCircle size={32} />
        </div>
        
        <div className="space-y-2">
          <h2 className="text-xl font-black uppercase tracking-tight">System Error Detected</h2>
          <p className="text-sm text-zinc-500 font-bold uppercase tracking-wider leading-relaxed">
            {error.message || "An unexpected error occurred in the content engine."}
          </p>
          {error.digest && (
            <p className="text-[10px] text-zinc-400 font-mono">Error ID: {error.digest}</p>
          )}
        </div>

        <Button 
          onClick={() => reset()}
          className="w-full bg-zinc-900 dark:bg-white dark:text-black font-black uppercase tracking-widest text-xs py-4 rounded-xl"
        >
          <RefreshCcw size={16} className="mr-2" /> Attempt Recovery
        </Button>
      </GlassCard>
    </div>
  );
}
