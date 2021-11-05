const authController = require('./auth');
const userController = require('./user');
const productController = require('./product');
const cartController = require('./cart');
const orderController = require('./order');
const stripeController = require('./stripe');

module.exports={authController, userController, productController, cartController, orderController, stripeController};