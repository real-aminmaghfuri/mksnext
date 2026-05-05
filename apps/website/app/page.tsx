"use client";

import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { LandingBento } from '../components/LandingBento';
import { LandingPortfolioPreview } from '../components/LandingPortfolioPreview';
import { LandingArticlesPreview } from '../components/LandingArticlesPreview';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <LandingBento />
      <LandingPortfolioPreview />
      <LandingArticlesPreview />
    </>
  );
}