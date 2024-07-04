import axios from "axios";
import { Article } from "../types/Article";

//api form .env
const API_URL = import.meta.env.VITE_API_URL; 
console.log(API_URL);

export const getArticles = async (): Promise<Article[]> => {
  const response = await axios.get<Article[]>(`${API_URL}/articles`);
  return response.data;
};

export const getArticleById = async (id: string): Promise<Article> => {
  const response = await axios.get<Article>(`${API_URL}/articles/${id}`);
  return response.data;
};

export const createArticle = async (
  article: Partial<Article>
): Promise<Article> => {
  const response = await axios.post<Article>(`${API_URL}/articles`, article);
  return response.data;
};

export const updateArticle = async (
  id: string,
  article: Partial<Article>
): Promise<Article> => {
  const response = await axios.put<Article>(
    `${API_URL}/articles/${id}`,
    article
  );
  return response.data;
};

export const deleteArticle = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/articles/${id}`);
};
