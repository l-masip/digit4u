const express = require("express");
const Product = require("../models/Product.model");
const router = express.Router();

router.get("/api/products", (req, res) => {
  Product.find()
    .then((products) => res.status(200).json(products))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
