
"use client";

import { useMemo, useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { MOCK_ARTICLES, MOCK_PRODUCTS, TOCItem, CommentItem } from 'shared';
import { ArticleDetailLogic } from './types';

export const useArticleDetail = (slug: string): ArticleDetailLogic => {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // 1. Data Retrieval
  const currentIndex = MOCK_ARTICLES.findIndex(a => a.slug === slug);
  const article = MOCK_ARTICLES[currentIndex];
  
  // Prev/Next Logic (Cyclic for demo)
  const prevArticle = currentIndex > 0 ? MOCK_ARTICLES[currentIndex - 1] : MOCK_ARTICLES[MOCK_ARTICLES.length - 1];
  const nextArticle = currentIndex < MOCK_ARTICLES.length - 1 ? MOCK_ARTICLES[currentIndex + 1] : MOCK_ARTICLES[0];

  // 2. States
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHeroShrunk, setIsHeroShrunk] = useState(false);
  const [isContentExpanded, setIsContentExpanded] = useState(false);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  // 3. Logic: Scroll Listener on Container
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const currentScroll = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      
      setScrollTop(currentScroll);
      
      // Calculate 0-100%
      const scrolled = scrollHeight > 0 ? currentScroll / scrollHeight : 0;
      setScrollProgress(scrolled);

      // Logical shrinking threshold for UI elements (text opacity etc)
      // We use a larger threshold for smoother text transition
      setIsHeroShrunk(currentScroll > 100);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // 4. Logic: Parse TOC from HTML Content (Mocking extraction)
  // In a real app, use a parser. Here we manually map based on the mock data structure we know exists.
  const toc: TOCItem[] = useMemo(() => {
    if (!article) return [];
    // Extract <h3> tags
    const matches = article.content.match(/<h3>(.*?)<\/h3>/g);
    if (!matches) return [];
    
    return matches.map((m, i) => ({
      id: `section-${i}`,
      text: m.replace(/<\/?h3>/g, '') // Strip tags
    }));
  }, [article]);

  // 5. Logic: Mock Comments
  const comments: CommentItem[] = [
    {
      id: 1,
      name: "Bambang Gentolet",
      date: "2 Jam yang lalu",
      content: "Sadis. Gue baru sadar selama ini dimainin sama psikologi harga minimarket.",
      avatar: "BG",
      url: "toko-bambang.com"
    },
    {
      id: 2,
      name: "Siska Kohl",
      date: "5 Jam yang lalu",
      content: "Valid banget bos. Izin share ke tim sales gue biar pada melek.",
      avatar: "SK",
    }
  ];

  const categories = Array.from(new Set(MOCK_ARTICLES.map(a => a.category))) as string[];

  // Actions
  const toggleContent = () => setIsContentExpanded(!isContentExpanded);
  const toggleComments = () => setIsCommentsOpen(!isCommentsOpen);
  const submitComment = (data: any) => console.log("Comment Submitted", data);
  const closeArticle = () => router.push('/articles');

  return {
    article,
    prevArticle,
    nextArticle,
    sidebarProducts: MOCK_PRODUCTS.slice(0, 2), // Random 2 products
    categories,
    toc,
    comments,
    
    scrollRef,
    scrollTop,
    scrollProgress,
    isHeroShrunk,
    isContentExpanded,
    isCommentsOpen,
    
    toggleContent,
    toggleComments,
    submitComment,
    closeArticle
  };
};
