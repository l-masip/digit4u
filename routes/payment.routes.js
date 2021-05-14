require('dotenv').config();
const express = require('express');
const stripeRouter = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const User = require('./../models/users');


stripeRouter.post('/create-checkout-session/:id', async (req, res) => {
  const user = await User.findById(req.params.user.id).populate(
    'currentCart.user.product'
  );

  const itemsToCharge = user.products.map((product) => {
    const itemObj = {
      price_data: {
        currency: 'eur',
        product_data: {
          name: product.name,
        }
      },
      quantity: 1,
    };
    return itemObj;
  });
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: itemsToCharge,
    mode: 'payment',
    success_url: `${process.env.YOUR_DOMAIN}/checkout`,
    cancel_url: `${process.env.YOUR_DOMAIN}/cart`,
  });

  // empty the user cart

  res.json({ id: session.id });
});

module.exports = stripeRouter;