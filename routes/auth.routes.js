const express = require("express");
const passport = require("passport");
const router = express.Router();
const transporter = require("../configs/nodemailer.config");
const User = require("../models/User.model");
const Product = require("../models/Product.model");

// const nodemailer = require('nodemailer');
const uploader = require("../configs/cloudinary.config");
const bcrypt = require("bcryptjs");
const bcryptSalt = 10;
// const transporter  =  require('../configs/nodemailer.config')

router.post("/signup", (req, res, next) => {
  const { email, password, name, surname, phone, position } = req.body;

  if (password.length < 3) {
    return res.status(400).json({
      message: "Please make your password at least 3 characters long",
    });
  }

  if (!name || !email || !surname || !phone || !position) {
    return res
      .status(400)
      .json({ message: "Please fill all the fields in the form" });
  }

  User.findOne({ email }).then((user) => {
    if (user) {
      return res
        .status(400)
        .json({ message: "User already exists. Please change your email" });
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    User.create({
      email,
      password: hashPass,
      name,
      surname,
      phone,
      position,
    })
      .then((newUser) => {
        req.login(newUser, (error) => {
          if (error) {
            console.log("error", error);
            return res.status(500).json(error);
          }
          transporter
            .sendMail({
              from: "Contacto web <digit4you21@gmail.com",
              to: `${newUser.email}`,
              subject: "Bienvenido a Digit 4 you",
              text: "Bienvenido",
              html: `<p>Gracias por crear tu cuenta ${newUser.name}</p>`,
            })
            .then(() => {
              return res.status(200).json(newUser);
            })
            .catch((error) => res.status(500).json(error));
        });
      })
      .catch((error) => res.status(500).json(error));
  });
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (error, theUser, failureDetails) => {
    if (error) {
      return res.status(500).json(error);
    }

    if (!theUser) {
      return res.status(401).json(failureDetails);
    }

    req.login(theUser, (error) => {
      if (error) {
        return res.status(500).json(error);
      }

      return res.status(200).json(theUser);
    });
  })(req, res, next);
});

router.post("/logout", (req, res, next) => {
  req.logout();
  return res.status(200).json({ message: "Log out success!" });
});

router.get("/loggedin", async (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.status(200).json(req.user);
  } else {
    return res.status(403).json({ message: "Forbbiden" });
  }
});

router.get(
  "/auth/linkedin",
  passport.authenticate("linkedin", (error, theUser, failureDetails) => {
    if (error) {
      return res.status(500).json(error);
    }
    if (!theUser) {
      return res.status(401).json(failureDetails);
    }
    req.login(theUser, (error) => {
      if (error) {
        return res.status(500).json(error);
      }
      return res.status(200).json(theUser);
    });
  })
);

router.get(
  "/auth/linkedin/callback",
  passport.authenticate("linkedin", {
    successRedirect: "/auth/profile",
    failureRedirect: "/login",
  })
);

router.get("/profile", (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.status(200).json(req.user, req.user.role === "admin");
  } else {
    return res.status(403).json({ message: "Forbbiden" });
  }
});

router.get("/admin-page", (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.status(200).json(req.user.role === "admin");
  } else {
    return res.status(403).json({ message: "Forbbiden" });
  }
});

module.exports = router;
