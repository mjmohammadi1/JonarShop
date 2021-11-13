const { cartDAO } = require('../../dao');

module.exports = ({ _cartDAO = cartDAO } = {}) => {
  return {
    async createCart(params) {
      const { userId, products } = params;
      return await _cartDAO().createCart(userId, products);
    },
    async updateCart(params) {
      const { id } = params;
      return await _cartDAO().updateCart(id);
    },
    async deleteCart(params) {
      const { id } = params;
      return await _cartDAO().deleteCart(id);
    },
    async getUserCart(params) {
      const { userId } = params;
      return await _cartDAO().getUserCart(userId);
    },
    async getAllCarts() {
      return await _cartDAO().getAllCarts();
    },
  };
};
