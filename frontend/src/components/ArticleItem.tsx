import React from "react";
import { useNavigate } from "react-router-dom";
import { Article } from "../types/Article";
import { deleteArticle } from "../services/api";
import { PencilIcon, SvgNoPhoto, TrashIcon } from "../assets/SvgIcons";

interface ArticleItemProps {
  article: Article;
  isManagement?: boolean;
}

const ArticleItem: React.FC<ArticleItemProps> = ({
  article,
  isManagement = false,
}) => {
  const navigate = useNavigate();

  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this article?")) {
      await deleteArticle(article._id);
      window.location.reload();
    }
  };

  const handleItemClick = () => {
    window.open(article.url, "_blank", "noopener,noreferrer");
  };

  const handleReadMoreClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/article/${article._id}`);
  };

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/management/edit/${article._id}`);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden flex mb-4 cursor-pointer
                 transition duration-300 ease-in-out transform hover:bg-gray-50 hover:shadow-lg
                 relative"
      onClick={handleItemClick}
    >
      <div className="w-1/4 bg-gray-200 min-w-28 p-2 flex justify-center items-center ">
        <div className="w-full h-auto aspect-square rounded-md overflow-hidden ">
          {article.urlToImage ? (
            <img
              src={article.urlToImage}
              alt={article.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                //if image fails to load, show a placeholder image
                const img = e.target as HTMLImageElement;
                img.onerror = null; // prevent infinite loop
                img.src = "/netforemost.ico";
                img.style.opacity = "0.1";
              }}
            />
          ) : (
            <SvgNoPhoto className="w-full h-full object-cover opacity-10" />
          )}
        </div>
      </div>
      <div className="w-3/4 p-4">
        <h2 className="text-sm font-bold mb-1">{article.title}</h2>
        <p className="text-xs text-gray-600 mb-2">{article.author}</p>
        <p className="text-xs text-gray-700 mb-2 line-clamp-2">
          {article.description}
        </p>
        <div className="flex justify-between items-center">
          <button
            onClick={handleReadMoreClick}
            className="text-blue-500 hover:text-blue-700 text-sm transition duration-300 ease-in-out"
          >
            Read more
          </button>
        </div>
      </div>
      {isManagement && (
        <div
          className="absolute bottom-2 right-2 flex space-x-2 opacity-65 group-hover:opacity-100 transition-opacity duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={handleEditClick}
            className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out"
            title="Edit"
          >
            <PencilIcon className="h-4 w-4 text-gray-600" />
          </button>
          <button
            onClick={handleDelete}
            className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out"
            title="Delete"
          >
            <TrashIcon className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ArticleItem;
