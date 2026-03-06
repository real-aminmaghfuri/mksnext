
"use client";
import { useState } from 'react';
import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';

export const useWarranty = () => {
  const { language } = useConfig();
  const text = DICTIONARY[language];
  
  const [formData, setFormData] = useState({
    invoice: '',
    product: '',
    issue: '',
    evidence: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return {
    text: {
      heading: text.warrantyHeading,
      sub: text.warrantySub,
      formTitle: text.warrantyFormTitle,
      formSub: text.warrantyFormSub,
      fieldInvoice: text.warrantyFieldInvoice,
      fieldProduct: text.warrantyFieldProduct,
      fieldIssue: text.warrantyFieldIssue,
      fieldEvidence: text.warrantyFieldEvidence,
      btnSubmit: text.warrantyBtnSubmit,
      stepTitle: text.warrantyStepTitle,
      steps: [
        { title: text.warrantyStep1, desc: text.warrantyStep1Desc },
        { title: text.warrantyStep2, desc: text.warrantyStep2Desc },
        { title: text.warrantyStep3, desc: text.warrantyStep3Desc },
        { title: text.warrantyStep4, desc: text.warrantyStep4Desc },
      ],
      successTitle: text.warrantySuccessTitle,
      successSub: text.warrantySuccessSub
    },
    formData,
    loading,
    submitted,
    handleSubmit,
    handleChange
  };
};
