import { useState, useEffect } from "react";
import { getArticles } from "../services/api";
import { Article } from "../types/Article";

type SortOption = "desc" | "asc";

interface UseArticlesResult {
  articles: Article[];
  loading: boolean;
  error: string | null;

}

const useArticles = (): UseArticlesResult => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getArticles();
        setArticles(data);
        setLoading(false);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return { articles, loading, error };
};

export default useArticles;
