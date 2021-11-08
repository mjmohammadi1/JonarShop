const { productService } = require('../../services');

module.exports = ({ _productService = productService } = {}) => {
  return {
    async createProduct(req, res, next) {
      try {
        const createdProduct = await _productService().createProduct(req.body);
        res.status(201).json(createdProduct);
      } catch (err) {
        next(err);
      }
    },
    async updateProduct(req, res, next) {
      try {
        const updatedProduct = await _productService().updateProduct(req.body);
        res.status(201).json(updatedProduct);
      } catch (err) {
        next(err);
      }
    },
    async deleteProduct(req, res, next) {
      try {
        const deleteResult = await _productService().deleteProduct({ id: req.params.id });
        res.status(200).json(deleteResult);
      } catch (err) {
        next(err);
      }
    },
    async getProduct(req, res, next) {
      try {
        const foundProduct = await _productService().getProduct({ id: req.params.id });
        //where to validate that product does not exist
        res.status(200).json(foundProduct);
      } catch (err) {
        next(err);
      }
    },
    async getProducts(req, res, next) {
      try {
        const products = await _productService().getProducts(req.query);
        res.status(200).json(products);
      } catch (err) {
        next(err);
      }
    },
  };
};
