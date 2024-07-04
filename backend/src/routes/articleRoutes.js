import express from "express";
import * as articleController from "../controllers/articleController.js";

const router = express.Router();

router.post("/", articleController.createArticle);

router.get("/", articleController.getAllArticles);

router.get("/:id", articleController.getArticleById);

router.put("/:id", articleController.updateArticle);

router.delete("/:id", articleController.deleteArticle);

router.post("/load", articleController.loadArticles); //just used for loading articles for the first time

export default router;
