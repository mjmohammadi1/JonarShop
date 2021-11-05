const { database } = require('../../db');
const { productSchema } = require('../../schemas');

const createProduct = async ({ title, desc, img, categories, size, color, price }) => {
  await database;
  const product = new productSchema({
    title: title,
    desc: desc,
    img: img,
    categories: categories,
    size: size,
    color: color,
    price: price,
  });
  return await product.save();
};

const updateProduct = async ({ id, title, desc, img, categories, size, color, price }) => {
  await database;
  return await productSchema.findByIdAndUpdate(
    {
      id,
    },
    {
      title,
      desc,
      img,
      categories,
      size,
      color,
      price,
    },
    { new: true }
  );
};

const getProduct = async (id) => {
  await database;
  const foundProduct = await productSchema.findById(id);
  if (foundProduct === null) {
    throw ApiError.notFound('Not Found');
  }
  const { ...productDetail } = foundProduct._doc;
  return productDetail;
};

const getProducts = async (query) => {
  await database;

  let products = [];

  const { new: newProductQuery, category: productCategoryQuery } = query;
  if (newProductQuery) {
    products = await productSchema.find().sort({ createdAt: -1 }).limit(5);
  } else if (productCategoryQuery) {
    products = await productSchema.find({
      categories: {
        $in: [productCategoryQuery],
      },
    });
  } else {
    products = await productSchema.find();
  }
  return products;
};

const deleteProduct = async (id) => {
  await database;
  const deleteResult = await productSchema.findByIdAndDelete(id);
  if (deleteResult === null) {
    throw ApiError.notFound('Not Found');
  }
  return deleteResult;
};

module.exports = { createProduct, updateProduct, deleteProduct, getProducts, getProduct };
