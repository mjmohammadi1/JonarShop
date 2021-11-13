const { database } = require('../../db');
const { orderSchema } = require('../../schemas');
const { ApiError } = require('../../utils');
module.exports = ({ _database = database } = {}) => {
  _database
    .then((connection) => {})
    .catch((err) => {
      throw ApiError.internal(err);
    });

  const conntection = _database
    .then((connection) => {})
    .catch((err) => {
      throw ApiError.internal(err);
    });
  return {
    async createOrder(userId, products, amount, address) {
      const newOrder = new orderSchema({ userId, products, amount, address });
      return await newOrder.save();
    },
    async updateOrder(id, order) {
      return await orderSchema.findByIdAndUpdate(
        id,
        {
          $set: order,
        },
        { new: true }
      );
    },
    async daleteOrder(id) {
      return await orderDAO.daleteOrder(id);
    },
    async getUserOrders(userId) {
      return await orderSchema.find(userId);
    },
    async getAllOrders() {
      return await orderSchema.find();
    },
    async getMonthlyIncome(productId) {
      const date = new Date();
      const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
      const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

      const income = await orderSchema.aggregate([
        {
          $match: { createdAt: { $gte: previousMonth }, ...(productId && { products: { $eleMatch: { productId } } }) },
        },
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
    },
  };
};
