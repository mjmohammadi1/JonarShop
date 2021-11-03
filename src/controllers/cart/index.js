

const {cartService} = require('../../services');

const createCart = async (req, res, next) => {
	try{
		const createdCart = await cartService.createCart(req.body);
		res.status(201).json({createdCart});
	}catch(err){
		next(err);
	}
};

const updateCart = async (req, res, next) => {
	try{
		const deleteResult = await cartService.updateCart({'id':req.params.id, 'products':req.body});
			res.status(200).json({deleteResult});
	}catch(err){
		next(err);
	}
};

const daleteCart = async (req, res, next) => {
	try{
		const deleteResult = await cartService.deleteCart({'id':req.params.id});
			res.status(200).json({deleteResult});
		}catch(err){
			next(err);
		}
	};
	
const getUserCart = async (req, res, next) => {
	try{
		const userCart = await cartService.getUserCart({'Userd':req.params.UserId});
			res.status(200).json({userCart});
		}catch(err){
			next(err);
		}
};

const getAllCarts = async (req, res, next) => {
	try{
		const allCarts = await cartService.getAllCarts();
			res.status(200).json({allCarts});
	}catch(err){
		next(err);
	}
};
module.exports = {createCart,updateCart,daleteCart,getUserCart,getAllCarts};