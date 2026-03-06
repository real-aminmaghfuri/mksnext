"use client";

import React from 'react';
import { ContactInfoData, FormData } from '../types';
import { useContactFormLogic } from '../hooks/useContactFormLogic';
import { ContactInfoCard } from './ContactInfoCard';
import { ContactFormCard } from './ContactFormCard';

interface ContactFormLayoutProps {
  info: ContactInfoData;
  form: FormData;
}

export const ContactFormLayoutAtom: React.FC<ContactFormLayoutProps> = ({ info, form }) => {
  // Step 1: Hook Integration (Logic Layer)
  const { selectedTopic, setSelectedTopic, handleSubmit } = useContactFormLogic(form.topics[0]);

  return (
    <div className="container mx-auto px-6 mt-16 mb-24 relative z-10 max-w-6xl">
       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Step 2: Static Info Component (Presentation Layer) */}
          <ContactInfoCard info={info} />

          {/* Step 3: Interactive Form Component (Interaction Layer) */}
          <ContactFormCard 
            form={form}
            selectedTopic={selectedTopic}
            onTopicChange={setSelectedTopic}
            onSubmit={handleSubmit}
          />

       </div>
    </div>
  );
};