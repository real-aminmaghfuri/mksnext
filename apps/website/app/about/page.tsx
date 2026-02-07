"use client";

import React from 'react';
// Explicitly pointing to the modular folder structure
import { About } from '../../components/About/index';

export default function AboutPage() {
  return (
    <div className="pt-20">
      <About />
    </div>
  );
}