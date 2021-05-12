const express = require('express');
const { isLoggedIn, checkRole } = require('../middlewares');
const router = express.Router();

router.get('/profile', isLoggedIn, (req, res, next) => {
  if(req.isAuthenticated()){
    return res.status(200).json(req.user, req.user.role === 'admin');
  } else{
    return res.status(403).json({ message: 'Forbbiden' });
  }
});

router.get('/admin-page', isLoggedIn, checkRole('admin'), (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.status(200).json(req.user.role === 'admin');
  } else {
    return res.status(403).json({ message: 'Forbbiden' });
  }
});

module.exports = router;
