const { productDAO } = require('../../dao');

module.exports = ({ _productDAO = productDAO } = {}) => {
  return {
    async createProduct(params) {
      const { title, desc, img, categories, size, color, price } = params;
      return _productDAO().createProduct({ title, desc, img, categories, size, color, price });
    },
    async updateProduct(params) {
      const { title, desc, img, categories, size, color, price } = params;
      return _productDAO().updateProduct({ title, desc, img, categories, size, color, price });
    },
    async getProduct(params) {
      const { id } = params;
      return _productDAO().getProduct(id);
    },
    async getProducts(params) {
      return _productDAO().getProducts(params);
    },
    async deleteProduct(params) {
      const { id } = params;
      return _productDAO().deleteProduct(id);
    },
  };
};
