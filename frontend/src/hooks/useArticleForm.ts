// src/hooks/useArticleForm.ts
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createArticle, updateArticle, getArticleById } from "../services/api";
import { Article } from "../types/Article";

const useArticleForm = () => {
  const [article, setArticle] = useState<Partial<Article>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setLoading(true);
      getArticleById(id)
        .then((data) => {
          setArticle(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(
            err instanceof Error
              ? err.message
              : "An error occurred while fetching the article"
          );
          setLoading(false);
        });
    }
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setArticle((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      if (id) {
        await updateArticle(id, article);
      } else {
        await createArticle(article);
      }
      navigate("/management");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred while saving the article"
      );
    }
    setLoading(false);
  };

  return {
    article,
    loading,
    error,
    handleChange,
    handleSubmit,
    isEditing: !!id,
  };
};

export default useArticleForm;
