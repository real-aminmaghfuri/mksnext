"use client";

import { useState } from 'react';

export const useContactFormLogic = (initialTopic: string) => {
  const [selectedTopic, setSelectedTopic] = useState(initialTopic);

  // Future logic: Prepare data and open WhatsApp
  const handleSubmit = () => {
    console.log('Sending message for topic:', selectedTopic);
    // TODO: Implement WA Link Generator in future steps
  };

  return {
    selectedTopic,
    setSelectedTopic,
    handleSubmit
  };
};