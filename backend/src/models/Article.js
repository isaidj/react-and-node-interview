import mongoose from "mongoose";
const ArticleSchema = new mongoose.Schema(
  {
    author: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    urlToImage: { type: String, required: true },
    publishedAt: { type: Date, default: Date.now },
    content: { type: String, required: false }, //I I added this field to be more credible
  },
  { timestamps: true }
);

export default mongoose.model("Article", ArticleSchema);
