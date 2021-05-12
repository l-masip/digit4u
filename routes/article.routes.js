const express = require('express');
const Article = require('../models/Article.model');
const router = express.Router();

router.get("/", (req, res, next) => {
  Article.find()
  .then(articles =>  res.status(200).json(articles))
  .catch(err => res.status(500).json(err))
})

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  Article.findOne({ _id: id, article: req.article.id  })
  .then(articles => res.status(200).json(articles))
  .catch(err => res.status(500).json(err))
})

router.post("/", async (req, res, next) => {
  const { name, description, link} = req.body;
  try {
    const article = await article.create({ name, description, link, user: req.user.id  });

    return res.status(200).json(articles);
  } catch(err){
    return res.status(500).json(err)
  }

})

router.put("/:id", (req, res, next) => {
  const { id } = req.params;
  Article.findOneAndUpdate({ _id: id, article: req.article.id  }, req.body, { new: true })
  .then(articles => res.status(200).json(articles))
  .catch(err => res.status(500).json(err))
})

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  Article.findOneAndRemove({ _id: id, article: req.article.id  })
  .then(() => res.status(200).json({ message: `Article ${id} deleted`}))
  .catch(err => res.status(500).json(err))
})


module.exports = router;
