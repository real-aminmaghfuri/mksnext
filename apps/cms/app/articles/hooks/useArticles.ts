
import { useState, useEffect } from 'react';
import { Repository, Article } from 'data';

export const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'ALL' | 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'>('ALL');

  const fetchArticles = async () => {
    setIsLoading(true);
    try {
      const response = await Repository.getArticles();
      if (response.success && response.data) {
        setArticles(response.data);
      } else {
        console.error("Failed to fetch articles", response.error);
      }
    } catch (error) {
      console.error("Failed to fetch articles", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleDelete = async (id: number, uuid?: string) => {
    if (!confirm("Are you sure you want to delete this article? This action cannot be undone.")) return;
    
    try {
      await Repository.deleteArticle(id, uuid);
      setArticles(prev => prev.filter(a => a.id !== id));
    } catch (error) {
      alert("Failed to delete article");
    }
  };

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         article.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'ALL' || article.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return {
    articles: filteredArticles,
    isLoading,
    searchTerm,
    setSearchTerm,
    filterStatus,
    setFilterStatus,
    handleDelete,
    refresh: fetchArticles
  };
};
