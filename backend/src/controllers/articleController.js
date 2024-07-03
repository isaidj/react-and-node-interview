const Article = require("../models/Article");
const fs = require("fs").promises; //promises because we are using async/await
const path = require("path");

exports.createArticle = async (req, res) => {
  try {
    const newArticle = new Article(req.body);
    const savedArticle = await newArticle.save();
    res.status(201).json(savedArticle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article)
      return res.status(404).json({ message: "Artículo no encontrado" });
    res.json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateArticle = async (req, res) => {
  try {
    const updatedArticle = await Article.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedArticle)
      return res.status(404).json({ message: "Artículo no encontrado" });
    res.json(updatedArticle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    const deletedArticle = await Article.findByIdAndDelete(req.params.id);
    if (!deletedArticle)
      return res.status(404).json({ message: "Artículo no encontrado" });
    res.json({ message: "Artículo eliminado con éxito" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.loadArticles = async (req, res) => {
  try {
    const dataPath = path.join(__dirname, "../../../data.json");
    const data = await fs.readFile(dataPath, "utf8");
    const articles = JSON.parse(data);

    await Article.deleteMany({}); // Clean colelction before loading new data
    await Article.insertMany(articles);

    res.status(201).json({ message: "Articles loaded successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
