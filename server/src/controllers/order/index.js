const { orderService } = require('../../services');

module.exports = ({ _orderService = orderService } = {}) => {
  return {
    async createOrder(req, res, next) {
      try {
        const order = await _orderService().createOrder(req.body);
        res.status(201).json(order);
      } catch (err) {
        next(err);
      }
    },

    async updateOrder(req, res, next) {
      try {
        const order = await _orderService().updateOrder({ id: req.params.id, order: req.body });
        res.status(200).json(order);
      } catch (err) {
        next(err);
      }
    },

    async daleteOrder(req, res, next) {
      try {
        const result = await _orderService().daleteOrder({ id: req.params.id });
        res.status(200).json(result);
      } catch (err) {
        next(err);
      }
    },

    async getUserOrders(req, res, next) {
      try {
        const orders = await _orderService().getUserOrders({ UserId: req.params.UserId });
        res.status(200).json(orders);
      } catch (err) {
        next(err);
      }
    },

    async getAllOrders(req, res, next) {
      try {
        const orders = await _orderService().getAllOrders();
        res.status(200).json(orders);
      } catch (err) {
        next(err);
      }
    },

    async getMonthlyIncome(req, res, next) {
      try {
        const monthlyIncome = await _orderService().getMonthlyIncome({ productId: req.params.productId });
        res.status(200).json(monthlyIncome);
      } catch (err) {
        next(err);
      }
    },
  };
};
