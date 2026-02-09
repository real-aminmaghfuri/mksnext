
"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { ArticleDetail } from '../../../components/ArticleDetail';

export default function ArticleDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  return (
    <div className="pt-0">
      <ArticleDetail slug={slug} />
    </div>
  );
}
