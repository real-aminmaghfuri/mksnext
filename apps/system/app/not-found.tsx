import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-100 dark:bg-black text-zinc-900 dark:text-white p-4">
      <h1 className="text-6xl font-black mb-4 tracking-tighter">404</h1>
      <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">Page not found</p>
      <Link 
        href="/"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-colors"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}
