const userRouter = require('./user');
const authRouter = require('./auth');
const productRouter = require('./product');
const cartRouter = require('./cart');
const orderRouter = require('./order');
const stripeRouter = require('./stripe');

module.exports = {
  userRouter,
  authRouter,
  productRouter,
  cartRouter,
  orderRouter,
  stripeRouter,
};
