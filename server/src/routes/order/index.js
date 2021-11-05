const router = require('express').Router();
const { validateDto, authUserMiddleWare, authAdminMiddleWare } = require('../../middleware');
const {
  schemas: { orderSchema },
} = require('../../utils');
const {
  orderController: { createOrder, getAllOrders, getMonthlyIncome, updateOrder, daleteOrder, getUserOrders },
} = require('../../controllers');
//authUserMiddleWare,validateDto(orderSchema)
router.post('/', createOrder);
router.get('/', authAdminMiddleWare, getAllOrders);
router.get('/income', authAdminMiddleWare, getMonthlyIncome);
router.put('/:id', authAdminMiddleWare, updateOrder);
router.delete('/:id', authUserMiddleWare, daleteOrder);
router.get('/:userId', authUserMiddleWare, getUserOrders);

module.exports = router;
