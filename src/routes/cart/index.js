const router = require('express').Router();
const {validateDto, authUserMiddleWare, authAdminMiddleWare} = require('../../middleware');
const {schemas:{cartUpdateSchema}} = require('../../utils');
const {cartController:{createCart, updateCart, daleteCart, getUserCart, getAllCarts}} = require('../../controllers');

router.post('/', authUserMiddleWare, createCart);//schema validation
router.put('/:id',authUserMiddleWare,validateDto(cartUpdateSchema) ,updateCart); //schema validation
router.delete('/:id',authUserMiddleWare, daleteCart );
router.get('/:userId', authUserMiddleWare, getUserCart);
router.get('/', authAdminMiddleWare, getAllCarts);

module.exports = router;