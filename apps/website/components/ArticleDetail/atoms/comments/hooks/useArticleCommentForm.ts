
import React, { useState } from 'react';

interface CommentFormData {
  name: string;
  url: string;
  content: string;
}

export const useArticleCommentForm = (onSubmit: (data: CommentFormData) => void) => {
  const [formData, setFormData] = useState<CommentFormData>({
    name: '',
    url: '',
    content: ''
  });

  const handleChange = (field: keyof CommentFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.content) return;
    
    onSubmit(formData);
    setFormData({ name: '', url: '', content: '' }); // Reset
  };

  return {
    formData,
    handleChange,
    handleSubmit
  };
};
