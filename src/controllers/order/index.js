

const {orderService} = require('../../services');

const createOrder = async (req, res, next) => {
	try{
		const createdOrder = await orderService.createOrder(req.body);
		res.status(201).json({createdOrder});
	}catch(err){
		next(err);
	}
};

const updateOrder = async (req, res, next) => {
	try{
		const updatedOrder = await orderService.updateOrder({'id':req.params.id, 'order':req.body});
			res.status(200).json({updatedOrder});
	}catch(err){
		next(err);
	}
};

const daleteOrder = async (req, res, next) => {
	try{
		const deleteResult = await orderService.daleteOrder({'id':req.params.id});
			res.status(200).json({deleteResult});
		}catch(err){
			next(err);
		}
	};
	
const getUserOrders = async (req, res, next) => {
	try{
		const userCart = await orderService.getUserOrders({'Userd':req.params.UserId});
			res.status(200).json({userCart});
		}catch(err){
			next(err);
		}
};

const getAllOrders = async (req, res, next) => {
	try{
		const allCarts = await orderService.getAllOrders();
			res.status(200).json({allCarts});
	}catch(err){
		next(err);
	}
};

const getMonthlyIncome = async (req, res, next) => {
	try{
		const monthlyIncome = await orderService.getMonthlyIncome();
			res.status(200).json({monthlyIncome});
	}catch(err){
		next(err);
	}
};

module.exports = {createOrder, getAllOrders, getMonthlyIncome, updateOrder, daleteOrder,getUserOrders};