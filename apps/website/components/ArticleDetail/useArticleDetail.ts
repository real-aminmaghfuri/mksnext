
"use client";

import { useMemo, useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { MOCK_ARTICLES, MOCK_PRODUCTS, TOCItem, CommentItem, ArticleItem } from 'shared';
import { ArticleDetailLogic } from './types';

// CLEANUP: Hook now strictly expects processed content and TOC from server
export const useArticleDetail = (
  article: ArticleItem, 
  processedContent: string, 
  toc: TOCItem[]
): ArticleDetailLogic & { relatedArticles: ArticleItem[] } => {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // 1. Data Logic
  const currentIndex = MOCK_ARTICLES.findIndex(a => a.id === article.id);
  
  // Prev/Next Logic
  const prevArticle = currentIndex > 0 ? MOCK_ARTICLES[currentIndex - 1] : MOCK_ARTICLES[MOCK_ARTICLES.length - 1];
  const nextArticle = currentIndex < MOCK_ARTICLES.length - 1 ? MOCK_ARTICLES[currentIndex + 1] : MOCK_ARTICLES[0];

  // Related Articles Logic
  const relatedArticles = useMemo(() => {
    return MOCK_ARTICLES
      .filter(a => a.id !== article.id)
      .slice(0, 3);
  }, [article.id]);

  // 2. States
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHeroShrunk, setIsHeroShrunk] = useState(false);
  const [isContentExpanded, setIsContentExpanded] = useState(false);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string>('');

  // REMOVED: Expensive regex parsing logic. 
  // We trust `processedContent` and `toc` passed from Server Component.

  // 3. Logic: Scroll Listener on Container (Spy)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const currentScroll = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      
      setScrollTop(currentScroll);
      
      const scrolled = scrollHeight > 0 ? currentScroll / scrollHeight : 0;
      setScrollProgress(scrolled);

      setIsHeroShrunk(currentScroll > 100);

      // Scroll Spy Logic
      const spyThreshold = window.innerHeight / 3; 
      let currentId = '';
      
      // Efficiently check which section is in view based on the props TOC
      for (const section of toc) {
          const element = document.getElementById(section.id);
          if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top < spyThreshold) {
                  currentId = section.id;
              }
          }
      }
      
      if (currentId) {
          setActiveSectionId(currentId);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [toc]);

  // 4. Logic: Mock Comments
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
    processedContent, // Passthrough
    prevArticle,
    nextArticle,
    relatedArticles, 
    sidebarProducts: MOCK_PRODUCTS.slice(0, 2), 
    categories,
    toc, // Passthrough
    comments,
    
    scrollRef,
    scrollTop,
    scrollProgress,
    isHeroShrunk,
    isContentExpanded,
    isCommentsOpen,
    activeSectionId, 
    
    toggleContent,
    toggleComments,
    submitComment,
    closeArticle
  };
};
