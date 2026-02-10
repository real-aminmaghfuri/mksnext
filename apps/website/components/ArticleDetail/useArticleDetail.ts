
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
  
  // Prev/Next Logic
  const prevArticle = currentIndex > 0 ? MOCK_ARTICLES[currentIndex - 1] : MOCK_ARTICLES[MOCK_ARTICLES.length - 1];
  const nextArticle = currentIndex < MOCK_ARTICLES.length - 1 ? MOCK_ARTICLES[currentIndex + 1] : MOCK_ARTICLES[0];

  // 2. States
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHeroShrunk, setIsHeroShrunk] = useState(false);
  const [isContentExpanded, setIsContentExpanded] = useState(false);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string>('');

  // 3. Logic: Process Content & Generate TOC
  // We MUST inject IDs into the HTML string so the scroll spy can find them.
  const { processedContent, toc } = useMemo(() => {
    if (!article) return { processedContent: '', toc: [] };

    let content = article.content;
    const tocItems: TOCItem[] = [];
    
    // Regex to find H3 and replace with H3 id="..."
    // Note: detailed parsing might require a real parser, but regex works for this controlled mock data
    let index = 0;
    const newContent = content.replace(/<h3>(.*?)<\/h3>/g, (match, title) => {
        const id = `section-${index}`;
        tocItems.push({ id, text: title });
        index++;
        return `<h3 id="${id}">${title}</h3>`;
    });

    return { processedContent: newContent, toc: tocItems };
  }, [article]);


  // 4. Logic: Scroll Listener on Container
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

      // Shrink Hero
      setIsHeroShrunk(currentScroll > 100);

      // Scroll Spy Logic for TOC
      // We check the position of each header relative to the viewport top
      const headerOffset = 200; // Offset to trigger active state before it hits top
      let currentId = '';
      
      toc.forEach((section) => {
          const element = document.getElementById(section.id);
          if (element) {
              const rect = element.getBoundingClientRect();
              // If the element is near the top (but not too far up)
              if (rect.top < window.innerHeight / 2) {
                  currentId = section.id;
              }
          }
      });
      
      if (currentId) {
          setActiveSectionId(currentId);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [toc]); // Dependency on TOC ensures we have IDs

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
    processedContent, // Return the modified content
    prevArticle,
    nextArticle,
    sidebarProducts: MOCK_PRODUCTS.slice(0, 2), 
    categories,
    toc,
    comments,
    
    scrollRef,
    scrollTop,
    scrollProgress,
    isHeroShrunk,
    isContentExpanded,
    isCommentsOpen,
    activeSectionId, // Return active state
    
    toggleContent,
    toggleComments,
    submitComment,
    closeArticle
  };
};
