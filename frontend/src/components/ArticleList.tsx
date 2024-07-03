// src/components/ArticleList.tsx
import React from "react";
import { Link } from "react-router-dom";
import useArticles from "../hooks/useArticles";
import ArticleItem from "./ArticleItem";

interface ArticleListProps {
  isManagement?: boolean;
}

const SkeletonArticle: React.FC = () => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden flex mb-4 animate-pulse">
    <div className="w-1/4 bg-gray-300 min-w-16 p-2"></div>
    <div className="w-3/4 p-4">
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>
      <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
      <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
      <div className="h-3 bg-gray-300 rounded w-1/4"></div>
    </div>
  </div>
);

const ArticleList: React.FC<ArticleListProps> = ({ isManagement = false }) => {
  const { articles, loading, error } = useArticles();

  if (loading) {
    return (
      <div className="container mx-auto px-4 ">
        <h2 className="text-2xl font-bold mb-4">Articles</h2>
        <div className="space-y-4">
          {[...Array(5)].map((_, index) => (
            <SkeletonArticle key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (error)
    return <div className="text-center py-4 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        {isManagement ? (
          <>
            <h2 className="text-2xl font-bold mb-4">Article Management</h2>
            <Link
              to="/management/create"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block"
            >
              New Article
            </Link>
          </>
        ) : (
          <h2 className="text-2xl font-bold mb-4">Articles</h2>
        )}
      </div>
      <div className="space-y-4">
        {articles.map((article) => (
          <ArticleItem
            key={article._id}
            article={article}
            isManagement={isManagement}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
