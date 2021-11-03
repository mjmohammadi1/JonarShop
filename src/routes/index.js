const userRouter = require('./user');
const authRouter = require('./auth');
const productRouter = require('./product');
const cartRouter = require('./cart');
const orderRouter = require('./order');

module.exports={
	userRouter,
	authRouter,
	productRouter,
	cartRouter,
	orderRouter
};