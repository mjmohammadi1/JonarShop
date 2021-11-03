const {orderDAO} = require('../../dao');

const createOrder = async(params)=>{
	const {userId, products, amount, address} = params;
	return await orderDAO.createOrder(userId, products, amount, address);
};

const updateOrder = async(params)=>{
	const {id,order} = params;
	return await orderDAO.updateOrder(id,order);
};

const daleteOrder = async(params)=>{
	const {id} = params;
	return await orderDAO.daleteOrder(id);
};

const getUserOrders = async(params)=>{
	const {userId} = params;
	return await orderDAO.getUserOrders(userId);
};

const getAllOrders = async()=>{
	return await orderDAO.getAllOrders();
};

const getMonthlyIncome = async()=>{
	return await orderDAO.getMonthlyIncome();
};

module.exports = {createOrder, getAllOrders, getMonthlyIncome, updateOrder, daleteOrder,getUserOrders};