// src/components/ArticleDetail.tsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticleById } from "../services/api";
import { Article } from "../types/Article";

const ArticleDetail: React.FC = () => {
  const [article, setArticle] = useState<Article | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      getArticleById(id).then(setArticle);
    }
  }, [id]);

  if (!article) return <div className="text-center py-4">Cargando...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full max-w-2xl mx-auto mb-4 rounded-lg shadow-md"
      />
      <p className="text-xl mb-4">{article.description}</p>
      <p className="mb-4">{article.content}</p>
      <div className="text-sm text-gray-500 mb-4">
        <span>Por {article.author}</span>
        <span className="mx-2">•</span>
        <span>
          Publicado el {new Date(article.publishedAt).toLocaleDateString()}
        </span>
      </div>
      <div className="flex space-x-4">
        <Link
          to={`/management/edit/${article._id}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Editar
        </Link>
        <Link
          to="/"
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Volver a la lista
        </Link>
      </div>
    </div>
  );
};

export default ArticleDetail;
