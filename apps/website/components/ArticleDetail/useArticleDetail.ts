
"use client";

import { useMemo, useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { MOCK_ARTICLES, MOCK_PRODUCTS, TOCItem, CommentItem, ArticleItem } from 'shared';
import { ArticleDetailLogic } from './types';

// UPDATED: Hook now accepts the full 'article' object (pre-fetched on server)
export const useArticleDetail = (article: ArticleItem): ArticleDetailLogic & { relatedArticles: ArticleItem[] } => {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // 1. Data Logic (Simplified)
  // We no longer search for the article here. We just find its index for pagination.
  const currentIndex = MOCK_ARTICLES.findIndex(a => a.id === article.id);
  
  // Prev/Next Logic based on global MOCK_ARTICLES
  const prevArticle = currentIndex > 0 ? MOCK_ARTICLES[currentIndex - 1] : MOCK_ARTICLES[MOCK_ARTICLES.length - 1];
  const nextArticle = currentIndex < MOCK_ARTICLES.length - 1 ? MOCK_ARTICLES[currentIndex + 1] : MOCK_ARTICLES[0];

  // Related Articles Logic
  const relatedArticles = useMemo(() => {
    return MOCK_ARTICLES
      .filter(a => a.id !== article.id) // Filter by ID is safer
      .slice(0, 3);
  }, [article.id]);

  // 2. States
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHeroShrunk, setIsHeroShrunk] = useState(false);
  const [isContentExpanded, setIsContentExpanded] = useState(false);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string>('');

  // 3. Logic: Process Content & Generate TOC
  const { processedContent, toc } = useMemo(() => {
    // Article is guaranteed to exist now
    let content = article.content;
    const tocItems: TOCItem[] = [];
    
    let index = 0;
    // Inject IDs into H3 tags for Scroll Spy
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
      
      const scrolled = scrollHeight > 0 ? currentScroll / scrollHeight : 0;
      setScrollProgress(scrolled);

      setIsHeroShrunk(currentScroll > 100);

      const headerOffset = 200; 
      let currentId = '';
      
      toc.forEach((section) => {
          const element = document.getElementById(section.id);
          if (element) {
              const rect = element.getBoundingClientRect();
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
  }, [toc]);

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
    processedContent, 
    prevArticle,
    nextArticle,
    relatedArticles, 
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
    activeSectionId, 
    
    toggleContent,
    toggleComments,
    submitComment,
    closeArticle
  };
};
