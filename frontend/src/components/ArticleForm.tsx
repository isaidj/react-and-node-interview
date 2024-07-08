// src/components/ArticleForm.tsx
import React from "react";
import useArticleForm from "../hooks/useArticleForm";

const ArticleForm: React.FC = () => {
  const { article, loading, error, handleChange, handleSubmit, isEditing } =
    useArticleForm();

  if (loading) return <div className="text-center py-4">Loading...</div>;

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8 p-4 ">
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="mb-4">
        <label htmlFor="title" className="block mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={article.title || ""}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="author" className="block mb-2">
          Author
        </label>
        <input
          type="text"
          id="author"
          name="author"
          value={article.author || ""}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block mb-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={article.description || ""}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded resize-y min-h-[100px]"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block mb-2">
          Content
        </label>
        <textarea
          id="content"
          name="content"
          value={article.content || ""}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded resize-y min-h-[100px]"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="url" className="block mb-2">
          URL
        </label>
        <input
          type="url"
          id="url"
          name="url"
          value={article.url || ""}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="urlToImage" className="block mb-2">
          Image URL
        </label>
        <input
          type="url"
          id="urlToImage"
          name="urlToImage"
          value={article.urlToImage || ""}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto"
        disabled={loading}
      >
        {isEditing ? "Update" : "Create"} Article
      </button>
    </form>
  );
};

export default ArticleForm;
