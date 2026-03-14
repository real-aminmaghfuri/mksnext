"use client";

import { motion } from "motion/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-zinc-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <h1 className="text-6xl font-bold tracking-tight text-zinc-900">
          Next.js <span className="text-emerald-600">Initialized</span>
        </h1>
        <p className="text-zinc-600 text-lg max-w-md mx-auto">
          Your Next.js environment has been successfully configured. You can now start building your application.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-zinc-900 text-white rounded-xl font-medium hover:bg-zinc-800 transition-colors shadow-sm">
            Get Started
          </button>
          <button className="px-6 py-3 bg-white text-zinc-900 border border-zinc-200 rounded-xl font-medium hover:bg-zinc-50 transition-colors shadow-sm">
            Documentation
          </button>
        </div>
      </motion.div>
    </main>
  );
}
