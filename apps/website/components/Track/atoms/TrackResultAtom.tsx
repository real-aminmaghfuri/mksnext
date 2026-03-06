
"use client";
import React from 'react';
import { TrackResult } from '../types';
import { CheckCircle2, MapPin, Clock, Package } from 'lucide-react';

interface TrackResultProps {
  result: TrackResult | null;
  error: boolean;
  notFound: string;
}

export const TrackResultAtom: React.FC<TrackResultProps> = ({ result, error, notFound }) => {
  if (error) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto p-12 rounded-3xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 shadow-xl shadow-black/5">
          <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">WADUH, GAK KETEMU!</h2>
          <p className="text-lg opacity-80">{notFound}</p>
        </div>
      </div>
    );
  }

  if (!result) return null;

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-black/5">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-brand-500/10 text-brand-500 flex items-center justify-center">
              <Package size={40} />
            </div>
            <div>
              <p className="text-zinc-400 text-xs font-black uppercase tracking-widest mb-1">NOMOR RESI</p>
              <h2 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tighter">{result.resi}</h2>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-zinc-400 text-xs font-black uppercase tracking-widest mb-1">STATUS TERAKHIR</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-500 font-black text-sm uppercase tracking-widest">
              <CheckCircle2 size={16} />
              <span>{result.status}</span>
            </div>
          </div>
        </div>

        <div className="relative pl-12 space-y-12 before:absolute before:left-6 before:top-4 before:bottom-4 before:w-1 before:bg-zinc-200 dark:before:bg-zinc-800 before:rounded-full">
          {result.history.map((event, idx) => (
            <div key={idx} className="relative">
              <div className={`absolute -left-12 top-2 w-12 h-12 rounded-full flex items-center justify-center z-10 border-4 border-zinc-50 dark:border-black ${idx === 0 ? 'bg-brand-500 text-white shadow-xl shadow-brand-500/20' : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-400'}`}>
                {idx === 0 ? <CheckCircle2 size={24} /> : <div className="w-3 h-3 rounded-full bg-current" />}
              </div>
              <div className={`p-8 rounded-3xl border transition-all ${idx === 0 ? 'bg-white dark:bg-zinc-900 border-brand-500 shadow-2xl shadow-brand-500/10' : 'bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800'}`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <h3 className={`text-xl font-black uppercase tracking-tighter ${idx === 0 ? 'text-brand-500' : 'text-zinc-900 dark:text-white'}`}>
                    {event.status}
                  </h3>
                  <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-widest">
                    <Clock size={14} />
                    <span>{event.date}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
                  <MapPin size={16} className="text-brand-500" />
                  <span className="text-sm font-medium">{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
