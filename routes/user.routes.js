const User = require("../models/User.model");
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  User.find()
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(500).json(err));
});

router.get("/:id", (req, res, next) => {
  console.log(req.params.id);

  const { id } = req.params;

  User.findById(id)
    .populate("products")
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json(err));
});

router.put("/:id", (req, res, next) => {
  const { id } = req.params;
  const { name, surname, phone, position } = req.body;
  User.findOneAndUpdate(
    { _id: id },
    { name, surname, phone, position },
    { new: true }
  )
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json(err));
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  User.findOneAndRemove({ _id: id })
    .then(() => res.status(200).json({ message: `User ${id} deleted` }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
