
"use client";
import React from 'react';
import { Button } from 'ui';
import { Loader2, CheckCircle2 } from 'lucide-react';

interface WarrantyFormProps {
  title: string;
  sub: string;
  fields: {
    invoice: string;
    product: string;
    issue: string;
    evidence: string;
  };
  btn: string;
  formData: any;
  loading: boolean;
  submitted: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  successTitle: string;
  successSub: string;
}

export const WarrantyFormAtom: React.FC<WarrantyFormProps> = ({
  title,
  sub,
  fields,
  btn,
  formData,
  loading,
  submitted,
  onSubmit,
  onChange,
  successTitle,
  successSub
}) => {
  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto p-12 rounded-3xl bg-emerald-500 text-white text-center shadow-2xl shadow-emerald-500/20 animate-fade-in">
        <CheckCircle2 size={80} className="mx-auto mb-6" />
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">{successTitle}</h2>
        <p className="text-white/80 text-lg">{successSub}</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-10 md:p-16 rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-black/5">
      <div className="mb-12">
        <h2 className="text-3xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mb-4">{title}</h2>
        <p className="text-zinc-500 dark:text-zinc-400">{sub}</p>
      </div>

      <form onSubmit={onSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-xs font-black uppercase tracking-widest text-zinc-400">{fields.invoice}</label>
            <input
              required
              name="invoice"
              value={formData.invoice}
              onChange={onChange}
              className="w-full px-6 py-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-brand-500 outline-none transition-all"
            />
          </div>
          <div className="space-y-3">
            <label className="text-xs font-black uppercase tracking-widest text-zinc-400">{fields.product}</label>
            <input
              required
              name="product"
              value={formData.product}
              onChange={onChange}
              className="w-full px-6 py-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-brand-500 outline-none transition-all"
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-xs font-black uppercase tracking-widest text-zinc-400">{fields.issue}</label>
          <textarea
            required
            name="issue"
            rows={4}
            value={formData.issue}
            onChange={onChange}
            className="w-full px-6 py-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-brand-500 outline-none transition-all resize-none"
          />
        </div>

        <div className="space-y-3">
          <label className="text-xs font-black uppercase tracking-widest text-zinc-400">{fields.evidence}</label>
          <input
            required
            name="evidence"
            placeholder="https://drive.google.com/..."
            value={formData.evidence}
            onChange={onChange}
            className="w-full px-6 py-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-brand-500 outline-none transition-all"
          />
        </div>

        <Button 
          type="submit" 
          disabled={loading}
          className="w-full bg-brand-500 hover:bg-brand-600 text-white font-black uppercase tracking-widest py-6 rounded-2xl text-lg shadow-xl shadow-brand-500/20"
        >
          {loading ? <Loader2 className="animate-spin mr-2" /> : btn}
        </Button>
      </form>
    </div>
  );
};
