
import React from 'react';
import { About } from '../../components/About/index';
import { Repository } from 'data';

// This is a Server Component. It fetches data directly from the DB/API.
export default async function AboutPage() {
  // Fetch Identity Data (Single Source of Truth)
  const identity = await Repository.getCompanyIdentity();

  return (
    <div className="pt-20">
      <About identity={identity} />
    </div>
  );
}
