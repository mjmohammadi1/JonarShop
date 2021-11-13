const router = require('express').Router();

const { validateDto, authUserMiddleWare, authAdminMiddleWare } = require('../../middleware');
const {
  schemas: { cartUpdateSchema },
} = require('../../utils');
const { cartController } = require('../../controllers');
const { createCart, updateCart, daleteCart, getUserCart, getAllCarts } = cartController();

router.post('/', authUserMiddleWare, createCart);
router.put('/:id', authUserMiddleWare, validateDto(cartUpdateSchema), updateCart);
router.delete('/:id', authUserMiddleWare, daleteCart);
router.get('/:userId', authUserMiddleWare, getUserCart);
router.get('/', authAdminMiddleWare, getAllCarts);

module.exports = router;
