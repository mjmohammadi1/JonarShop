const { orderDAO } = require('../../dao');

module.exports = ({ _orderDAO = orderDAO } = {}) => {
  return {
    async createOrder(params) {
      const { userId, products, amount, address } = params;
      return await _orderDAO().createOrder(userId, products, amount, address);
    },

    async updateOrder(params) {
      const { id, order } = params;
      return await _orderDAO().updateOrder(id, order);
    },

    async daleteOrder(params) {
      const { id } = params;
      return await _orderDAO().daleteOrder(id);
    },

    async getUserOrders(params) {
      const { userId } = params;
      return await _orderDAO().getUserOrders(userId);
    },

    async getAllOrders() {
      return await _orderDAO().getAllOrders();
    },

    async getMonthlyIncome({ productId = undefined } = {}) {
      return await _orderDAO().getMonthlyIncome(productId);
    },
  };
};
