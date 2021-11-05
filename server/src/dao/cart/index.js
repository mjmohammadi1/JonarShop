const { cartSchema } = require('../../schemas');

const createCart = async (userId, products) => {
  const newCart = new cartSchema({
    userId,
    products,
  });
  return newCart.save();
};

const updateCart = async (id, products) => {
  const updatedCart = await cartSchema.findByIdAndUpdate(
    id,
    {
      products,
    },
    { new: true }
  );
  return updatedCart;
};

const deleteCart = async (id, products) => {
  const deleteResult = await cartSchema.findByIdAndDelete(id);
  if (deleteResult === null) {
    throw ApiError.notFound('Not Found');
  }
  return deleteResult;
};

const getUserCart = async (userId) => {
  const userCart = await cartSchema.findOne({ userId });
  return userCart;
};

const getAllCarts = async () => {
  const AllCarts = await cartSchema.find();
  return deleteResult;
};

module.exports = { createCart, updateCart, deleteCart, getUserCart, getAllCarts };
