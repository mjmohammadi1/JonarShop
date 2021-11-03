const authService = require('./auth');
const userService = require('./user');
const productService = require('./product');
const cartService = require('./cart');
const orderService = require('./order');
const stripeService = require('./stripe');

module.exports={
	authService,
	userService,
	productService,
	cartService,
	orderService,
	stripeService
};