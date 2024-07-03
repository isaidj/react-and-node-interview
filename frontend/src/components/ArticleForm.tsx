// src/components/ArticleForm.tsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createArticle, updateArticle, getArticleById } from "../services/api";
import { Article } from "../types/Article";

const ArticleForm: React.FC = () => {
  const [article, setArticle] = useState<Partial<Article>>({});
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getArticleById(id).then(setArticle);
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      await updateArticle(id, article);
    } else {
      await createArticle(article);
    }
    navigate("/");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
      <div className="mb-4">
        <input
          name="title"
          value={article.title || ""}
          onChange={handleChange}
          placeholder="Título"
          required
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <input
          name="author"
          value={article.author || ""}
          onChange={handleChange}
          placeholder="Autor"
          required
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <textarea
          name="description"
          value={article.description || ""}
          onChange={handleChange}
          placeholder="Descripción"
          required
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <input
          name="url"
          value={article.url || ""}
          onChange={handleChange}
          placeholder="URL"
          required
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <input
          name="urlToImage"
          value={article.urlToImage || ""}
          onChange={handleChange}
          placeholder="URL de la imagen"
          required
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <textarea
          name="content"
          value={article.content || ""}
          onChange={handleChange}
          placeholder="Contenido"
          required
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {id ? "Actualizar" : "Crear"} Artículo
      </button>
    </form>
  );
};

export default ArticleForm;
