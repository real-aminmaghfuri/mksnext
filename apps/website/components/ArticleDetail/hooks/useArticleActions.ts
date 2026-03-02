"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

/**
 * useArticleActions - Hook to manage UI states like toggle content, comments modal, and back navigation.
 */
export function useArticleActions() {
  const router = useRouter();
  const [isContentExpanded, setIsContentExpanded] = useState(false);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  const toggleContent = () => setIsContentExpanded(!isContentExpanded);
  const toggleComments = () => setIsCommentsOpen(!isCommentsOpen);
  const submitComment = (data: any) => console.log("Comment Submitted", data);
  const closeArticle = () => router.push('/articles');

  return {
    isContentExpanded,
    isCommentsOpen,
    toggleContent,
    toggleComments,
    submitComment,
    closeArticle
  };
}
