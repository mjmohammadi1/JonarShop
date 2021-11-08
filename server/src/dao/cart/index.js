const { database } = require('../../db');
const { cartSchema } = require('../../schemas');

module.exports = ({ _database = database } = {}) => {
  _database
    .then((connection) => {})
    .catch((err) => {
      throw ApiError.internal(err);
    });

  return {
    async createCart(userId, products) {
      const newCart = new cartSchema({
        userId,
        products,
      });
      return newCart.save();
    },
    async updateCart(id, products) {
      const updatedCart = await cartSchema.findByIdAndUpdate(
        id,
        {
          products,
        },
        { new: true }
      );
      return updatedCart;
    },
    async deleteCart(id, products) {
      const deleteResult = await cartSchema.findByIdAndDelete(id);
      if (deleteResult === null) {
        throw ApiError.notFound('Not Found');
      }
      return deleteResult;
    },
    async getUserCart(userId) {
      const userCart = await cartSchema.findOne({ userId });
      return userCart;
    },
    async getAllCarts() {
      const AllCarts = await cartSchema.find();
      return deleteResult;
    },
  };
};
