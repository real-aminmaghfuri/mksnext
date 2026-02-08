
"use client";

import React from 'react';
import { Career } from '../../components/Career';

export default function CareerPage() {
  return (
    <div className="pt-0"> 
      {/* pt-0 because CareerHeader handles its own top padding/styling heavily */}
      <Career />
    </div>
  );
}
