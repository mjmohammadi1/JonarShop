const { orderService } = require('../../services');

const createOrder = async (req, res, next) => {
  try {
    const order = await orderService.createOrder(req.body);
    res.status(201).json(order);
  } catch (err) {
    next(err);
  }
};

const updateOrder = async (req, res, next) => {
  try {
    const order = await orderService.updateOrder({ id: req.params.id, order: req.body });
    res.status(200).json(order);
  } catch (err) {
    next(err);
  }
};

const daleteOrder = async (req, res, next) => {
  try {
    const result = await orderService.daleteOrder({ id: req.params.id });
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const getUserOrders = async (req, res, next) => {
  try {
    const orders = await orderService.getUserOrders({ UserId: req.params.UserId });
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
};

const getAllOrders = async (req, res, next) => {
  try {
    const orders = await orderService.getAllOrders();
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
};

const getMonthlyIncome = async (req, res, next) => {
  try {
    const monthlyIncome = await orderService.getMonthlyIncome({ productId: req.params.productId });
    res.status(200).json(monthlyIncome);
  } catch (err) {
    next(err);
  }
};

module.exports = { createOrder, getAllOrders, getMonthlyIncome, updateOrder, daleteOrder, getUserOrders };
