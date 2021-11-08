const router = require('express').Router();
const { validateDto, authUserMiddleWare, authAdminMiddleWare } = require('../../middleware');

const { orderController } = require('../../controllers');
const { createOrder, getAllOrders, getMonthlyIncome, updateOrder, daleteOrder, getUserOrders } = orderController();

router.post('/', createOrder);
router.get('/', authAdminMiddleWare, getAllOrders);
router.get('/income', authAdminMiddleWare, getMonthlyIncome);
router.put('/:id', authAdminMiddleWare, updateOrder);
router.delete('/:id', authUserMiddleWare, daleteOrder);
router.get('/:userId', authUserMiddleWare, getUserOrders);

module.exports = router;
