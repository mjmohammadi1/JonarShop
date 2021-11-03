const database = require('../../db');
const {cartSchema} = require('../../schemas');

const createCart = async(userId, products)=>{
	await database;

	const newCart = new cartSchema({
		userId,products
	});
	return newCart.save();
};

const updateCart = async(id, products)=>{
	await database;

	const updatedCart = await cartSchema.findByIdAndUpdate(
		id,
		{
			products,
		},
		{ new: true }
	);
		return updatedCart;
};

const deleteCart = async(id, products)=>{
	await database;

	const deleteResult = await cartSchema.findByIdAndDelete(id);
	if(deleteResult === null){
		throw ApiError.notFound('Not Found');
	}
	return deleteResult;
};

const getUserCart = async(userId)=>{
	await database;

	const userCart = await cartSchema.findOne({userId});
	// if(userCart === null){
	// 	throw ApiError.notFound('Not Found');
	// }
	return userCart;
};

const getAllCarts = async()=>{
	await database;

	const AllCarts = await cartSchema.find();
	// if(deleteResult === null){
	// 	throw ApiError.notFound('Not Found');
	// }
	return deleteResult;
};

module.exports={createCart,updateCart,deleteCart};