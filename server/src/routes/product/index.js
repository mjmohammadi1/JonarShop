const router = require('express').Router();
const { validateDto, authUserMiddleWare, authAdminMiddleWare } = require('../../middleware');

const {
  schemas: { productSchema },
} = require('../../utils');
const {
  productController: { createProduct, deleteProduct, getProducts, getProduct },
} = require('../../controllers');

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', authAdminMiddleWare, validateDto(productSchema), createProduct);
router.put('/:id', authAdminMiddleWare, validateDto(productSchema), deleteProduct);
router.delete('/:id', authAdminMiddleWare, deleteProduct);

module.exports = router;
