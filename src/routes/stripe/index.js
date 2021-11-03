const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_KEY);
const {stripeController:{chargeUser}} = require('../../controllers'); 

router.post('/payment',chargeUser);
module.exports = router;