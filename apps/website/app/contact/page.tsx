
import React from 'react';
import { Contact } from '../../components/Contact';
import { Repository } from 'data';

export default async function ContactPage() {
  // Fetch from Supabase
  const identity = await Repository.getCompanyIdentity();

  return (
    <div className="pt-0">
      <Contact identity={identity} />
    </div>
  );
}
