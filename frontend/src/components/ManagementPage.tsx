// src/components/ManagementPage.tsx
import React from "react";
import ArticleList from "./ArticleList";

const ManagementPage: React.FC = () => {
  return (
    <div>
      <ArticleList isManagement={true} />
    </div>
  );
};

export default ManagementPage;
