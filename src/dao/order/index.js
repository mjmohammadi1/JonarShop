const database = require('../../db');
const {orderSchema} = require('../../schemas');


const createOrder = async(userId, products, amount, address)=>{
	await database;
	const newOrder = new orderSchema({userId, products, amount, address});
	return await newOrder.save();
};

const updateOrder = async(id,order)=>{
	return await orderSchema.findByIdAndUpdate(
		id,
		{
			$set: order,
		},
		{ new: true }
	);
};

const daleteOrder = async(id)=>{
	return await orderDAO.daleteOrder(id);
};

const getUserOrders = async(userId)=>{
	await database;
	return await orderSchema.find(userId);
};

const getAllOrders = async()=>{
	await database;
	return await orderSchema.find();
};

const getMonthlyIncome = async()=>{
	await database;
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  
	const income = await orderSchema.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: '$createdAt' },
          sales: '$amount',
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: '$sales' },
        },
      },
    ]);
	return income;
};

module.exports = {createOrder,getMonthlyIncome,getAllOrders,getUserOrders,updateOrder,daleteOrder};
