const express = require("express");
const Expert = require("../models/Expert.model");
const router = express.Router();

router.get("/api/experts", (req, res) => {
  const { id } = req.params;
  Expert.findById(id)
    .then((experts) => res.status(200).json(experts))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
