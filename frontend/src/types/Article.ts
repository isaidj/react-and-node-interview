export interface Article {
  _id: string;
  author: string;
  title: string;
  description: string;
  content: string; //I decided to add this field to be more credible
  url: string;
  urlToImage: string;
  publishedAt: string;
}
