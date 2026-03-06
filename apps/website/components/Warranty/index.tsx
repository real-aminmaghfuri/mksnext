
"use client";
import React from 'react';
import { useWarranty } from './hooks/useWarranty';
import { WarrantyHeaderAtom } from './atoms/WarrantyHeaderAtom';
import { WarrantyFormAtom } from './atoms/WarrantyFormAtom';
import { WarrantyStepsAtom } from './atoms/WarrantyStepsAtom';

export const WarrantyClaim: React.FC = () => {
  const logic = useWarranty();

  return (
    <section className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-500">
      <WarrantyHeaderAtom 
        heading={logic.text.heading}
        sub={logic.text.sub}
      />
      
      <div className="container mx-auto px-6 py-24">
        <WarrantyFormAtom 
          title={logic.text.formTitle}
          sub={logic.text.formSub}
          fields={{
            invoice: logic.text.fieldInvoice,
            product: logic.text.fieldProduct,
            issue: logic.text.fieldIssue,
            evidence: logic.text.fieldEvidence
          }}
          btn={logic.text.btnSubmit}
          formData={logic.formData}
          loading={logic.loading}
          submitted={logic.submitted}
          onSubmit={logic.handleSubmit}
          onChange={logic.handleChange}
          successTitle={logic.text.successTitle}
          successSub={logic.text.successSub}
        />
      </div>
      
      <div className="bg-zinc-100 dark:bg-zinc-900/50 transition-colors duration-500">
        <WarrantyStepsAtom 
          title={logic.text.stepTitle}
          steps={logic.text.steps}
        />
      </div>
    </section>
  );
};
