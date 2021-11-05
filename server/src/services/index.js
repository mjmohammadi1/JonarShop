const authService = require('./auth');
const userService = require('./user');
const productService = require('./product');
const cartService = require('./cart');
const orderService = require('./order');
const stripeService = require('./stripe');
const database = require('../db');
module.exports = async () => {
  await database;
  return {
    authService,
    userService,
    productService,
    cartService,
    orderService,
    stripeService,
  };
};
