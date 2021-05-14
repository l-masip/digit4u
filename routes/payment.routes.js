require('dotenv').config();
const express = require('express');
const paymentRouter = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Product = require('./../models/Product.model');


paymentRouter.post('/create-checkout-session/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);

    const objToPurchase = {
      price_data: {
        currency: 'eur',
        product_data: {
          name: product.name,
        }
      },
      quantity: 1,
    };

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: objToPurchase,
    mode: 'payment',
    success_url: `http://localhost:5000/profile`,
    cancel_url: `http://localhost:5000/`,
  });

  res.json({ id: session.id });
});

module.exports = paymentRouter;
