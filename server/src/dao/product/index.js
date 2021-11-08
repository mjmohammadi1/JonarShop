const { database } = require('../../db');
const { productSchema } = require('../../schemas');

module.exports = ({ _database = database } = {}) => {
  _database
    .then((connection) => {})
    .catch((err) => {
      throw ApiError.internal(err);
    });
  return {
    async createProduct({ title, desc, img, categories, size, color, price }) {
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
    },
    async getProducts(query) {
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
    },
    async getProduct(id) {
      const foundProduct = await productSchema.findById(id);
      if (foundProduct === null) {
        throw ApiError.notFound('Not Found');
      }
      const { ...productDetail } = foundProduct._doc;
      return productDetail;
    },
    async updateProduct({ id, title, desc, img, categories, size, color, price }) {
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
    },
    async deleteProduct(id) {
      const deleteResult = await productSchema.findByIdAndDelete(id);
      if (deleteResult === null) {
        throw ApiError.notFound('Not Found');
      }
      return deleteResult;
    },
  };
};
