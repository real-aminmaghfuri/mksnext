
import { useState, useEffect } from 'react';
import { Repository, Article } from 'data';
import { useRouter } from 'next/navigation';

interface UseArticleEditorProps {
  slug?: string;
}

export const useArticleEditor = ({ slug }: UseArticleEditorProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(!!slug);
  const [isSaving, setIsSaving] = useState(false);
  const [article, setArticle] = useState<Article>({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    coverImage: '',
    category: 'GENERAL',
    tags: [],
    status: 'DRAFT',
    authorId: 'admin-1',
    authorName: 'Amin Maghfuri'
  });

  useEffect(() => {
    if (slug) {
      const fetchArticle = async () => {
        try {
          const data = await Repository.getArticleBySlug(slug);
          if (data) {
            setArticle(data);
          } else {
            router.push('/articles');
          }
        } catch (error) {
          console.error("Failed to fetch article", error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchArticle();
    }
  }, [slug, router]);

  const handleSave = async () => {
    if (!article.title) return alert("Title is required");
    if (!article.slug) {
        article.slug = article.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    }

    setIsSaving(true);
    try {
      await Repository.saveArticle(article);
      alert("✅ Article saved successfully!");
      router.push('/articles');
    } catch (error) {
      alert("❌ Failed to save article");
    } finally {
      setIsSaving(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setArticle(prev => ({ ...prev, [name]: value }));
  };

  return {
    article,
    setArticle,
    isLoading,
    isSaving,
    handleSave,
    handleChange
  };
};
