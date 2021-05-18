const express = require("express");
const Article = require("../models/Article.model");
const router = express.Router();
const uploader = require('../configs/cloudinary.config')

router.get("/", (req, res, next) => {
  Article.find()
    .then((articles) => res.status(200).json(articles))
    .catch((err) => res.status(500).json(err));
});

router.post("/", async (req, res, next) => {
  const { name, description, link, photo } = req.body;
  try {
    const article = await Article.create({
      name,
      description,
      link,
      photo,
      user: req.user.id
    });

    return res.status(200).json(article);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.put("/:id", uploader.single('photo'), (req, res, next) => {
  const { id } = req.params;
  Article.findOneAndUpdate(
    { _id: id }, 
    // { ...req.body, photo: req.file ? req.file.path : req.article.photo },
    req.body, {
    new: true,
  })
    .then((articles) => res.status(200).json(articles))
    .catch((err) => res.status(500).json(err));
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  Article.findOneAndRemove({ _id: id })
    .then(() => res.status(200).json({ message: `Article ${id} deleted` }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
