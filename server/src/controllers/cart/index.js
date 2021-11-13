const { cartService } = require('../../services');

module.exports = ({ _cartService = cartService } = {}) => {
  return {
    async createCart(req, res, next) {
      try {
        const createdCart = await _cartService().createCart(req.body);
        res.status(201).json(createdCart);
      } catch (err) {
        next(err);
      }
    },

    async updateCart(req, res, next) {
      try {
        const deleteResult = await _cartService().updateCart({ id: req.params.id, products: req.body });
        res.status(200).json(deleteResult);
      } catch (err) {
        next(err);
      }
    },

    async daleteCart(req, res, next) {
      try {
        const deleteResult = await _cartService().deleteCart({ id: req.params.id });
        res.status(200).json(deleteResult);
      } catch (err) {
        next(err);
      }
    },

    async getUserCart(req, res, next) {
      try {
        const userCart = await _cartService().getUserCart({ userId: req.params.userId });
        res.status(200).json(userCart);
      } catch (err) {
        next(err);
      }
    },

    async getAllCarts(req, res, next) {
      try {
        const allCarts = await _cartService().getAllCarts();
        res.status(200).json(allCarts);
      } catch (err) {
        next(err);
      }
    },
  };
};
