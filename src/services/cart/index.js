const {cartDAO} = require('../../dao');

const createCart = async(params)=>{
	const {userId, products} = params;
	return await cartDAO.createCart(userId, products);
};

const updateCart = async(params)=>{
	const {id} = params;
	return await cartDAO.updateCart(id);
};

const deleteCart = async(params)=>{
	const {id} = params;
	return await cartDAO.deleteCart(id);
};

const getUserCart = async(params)=>{
	const {userId} = params;
	return await cartDAO.getUserCart(userId);
};

const getAllCarts = async()=>{
	return await cartDAO.getAllCarts();
};

module.exports = {createCart,updateCart,deleteCart,getUserCart,getAllCarts};